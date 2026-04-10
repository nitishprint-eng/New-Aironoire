import express from 'express';
import { createServer as createViteServer } from 'vite';
import Razorpay from 'razorpay';
import crypto from 'crypto';
import { Resend } from 'resend';
import path from 'path';
import 'dotenv/config';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Razorpay Order Creation
  app.post('/api/create-order', async (req, res) => {
    try {
      const { amount, currency = 'INR' } = req.body;

      if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
        return res.status(500).json({ error: 'Razorpay keys not configured' });
      }

      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      const options = {
        amount: amount * 100, // amount in smallest currency unit (paise)
        currency,
        receipt: `receipt_${Date.now()}`,
      };

      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      console.error('Error creating Razorpay order:', error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  });

  // Razorpay Payment Verification & Email Notification
  app.post('/api/verify-payment', async (req, res) => {
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        customerDetails,
        orderDetails
      } = req.body;

      if (!process.env.RAZORPAY_KEY_SECRET) {
        return res.status(500).json({ error: 'Razorpay secret not configured' });
      }

      const body = razorpay_order_id + '|' + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(body.toString())
        .digest('hex');

      const isAuthentic = expectedSignature === razorpay_signature;

      if (isAuthentic) {
        // Payment is successful, send confirmation email
        if (process.env.RESEND_API_KEY) {
          const resend = new Resend(process.env.RESEND_API_KEY);
          
          try {
            await resend.emails.send({
              from: 'Print Shop <onboarding@resend.dev>', // Use a verified domain in production
              to: customerDetails.email,
              subject: 'Order Confirmation - Print Shop',
              html: `
                <h1>Thank you for your order, ${customerDetails.name}!</h1>
                <p>Your payment of ₹${orderDetails.price} was successful.</p>
                <p><strong>Order ID:</strong> ${razorpay_order_id}</p>
                <p><strong>Payment ID:</strong> ${razorpay_payment_id}</p>
                <h2>Order Details:</h2>
                <ul>
                  <li><strong>Color Mode:</strong> ${orderDetails.colorMode}</li>
                  <li><strong>Paper Size:</strong> ${orderDetails.paperSize}</li>
                  <li><strong>Copies:</strong> ${orderDetails.copies}</li>
                  <li><strong>Number of Files:</strong> ${orderDetails.filesCount}</li>
                </ul>
                <p>We will process your order shortly.</p>
              `,
            });
          } catch (emailError) {
            console.error('Failed to send email:', emailError);
            // Don't fail the payment verification if email fails
          }
        }

        res.json({ success: true, message: 'Payment verified successfully' });
      } else {
        res.status(400).json({ success: false, error: 'Invalid signature' });
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      res.status(500).json({ error: 'Failed to verify payment' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
