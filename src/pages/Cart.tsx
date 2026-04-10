import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Trash2, FileText, CreditCard, Truck, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface CartItem {
  id: number;
  productId?: number;
  name: string;
  type: string;
  details: string;
  price: number;
  image?: string;
  quantity?: number;
}

export function Cart() {
  const location = useLocation();
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('checkout') === 'true') {
      setStep('checkout');
    }
  }, [location]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  const removeItem = (id: number) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    localStorage.setItem('cart', JSON.stringify(newItems));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const shipping = 500;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="bg-[#f5f5f5] p-6 flex items-center justify-center w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-zinc-400" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-zinc-900 mb-4">Your cart is empty</h1>
        <p className="text-zinc-600 mb-8 max-w-md mx-auto">
          Looks like you haven't added anything to your cart yet. Explore our services to get started.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/custom-frames">
            <Button variant="premium">Custom Frames</Button>
          </Link>
          <Link to="/wall-art">
            <Button variant="outline">Shop Wall Art</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-heading font-bold text-zinc-900 mb-8">
        {step === 'cart' ? 'Shopping Cart' : 'Checkout'}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {step === 'cart' ? (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-6 p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm">
                  <div className="w-16 h-16 bg-[#f5f5f5] p-2 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden border border-zinc-200">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    ) : (
                      <FileText className="w-6 h-6 text-orange-600" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-zinc-900">{item.name}</h3>
                      <span className="font-bold text-zinc-900">₹{item.price.toLocaleString('en-IN')}</span>
                    </div>
                    <p className="text-sm text-zinc-500 mb-4">{item.details}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-zinc-200 rounded-md w-24">
                        <button className="px-2 py-1 text-zinc-500 hover:bg-zinc-50">-</button>
                        <input type="text" className="w-full text-center outline-none text-sm" value={item.quantity || 1} readOnly />
                        <button className="px-2 py-1 text-zinc-500 hover:bg-zinc-50">+</button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8 bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm">
              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-orange-600" /> Shipping Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-zinc-700 mb-1">Address</label>
                    <Input placeholder="123 Main St" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">City</label>
                    <Input placeholder="New York" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 mb-1">ZIP Code</label>
                    <Input placeholder="10001" />
                  </div>
                </div>
              </div>

              <hr className="border-zinc-100" />

              {/* Payment Method */}
              <div>
                <h2 className="text-xl font-semibold text-zinc-900 mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-600" /> Payment Method
                </h2>
                <div className="space-y-3">
                  <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'upi' ? 'border-[#8c7851] bg-[#8c7851]/5' : 'border-zinc-200 hover:border-zinc-300'}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      className="mr-3 text-[#8c7851] focus:ring-[#8c7851]" 
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                    />
                    <div className="flex-grow">
                      <div className="font-medium text-zinc-900">UPI (Google Pay, PhonePe, Paytm, BHIM)</div>
                      <div className="text-sm text-zinc-500">Fast and secure payments</div>
                    </div>
                    <div className="flex gap-2 opacity-60">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="h-4" referrerPolicy="no-referrer" />
                    </div>
                  </label>
                  
                  {paymentMethod === 'upi' && (
                    <div className="ml-8 mr-4 mb-4 p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                      <label className="block text-sm font-medium text-zinc-700 mb-2">Enter UPI ID</label>
                      <div className="flex gap-2">
                        <Input placeholder="example@upi" className="flex-grow" />
                        <Button variant="outline" className="shrink-0">Verify</Button>
                      </div>
                      <div className="mt-4 text-center">
                        <span className="text-xs text-zinc-500 uppercase tracking-widest">OR</span>
                      </div>
                      <div className="mt-4 flex flex-col items-center justify-center p-4 border-2 border-dashed border-zinc-200 rounded-lg bg-white">
                        <div className="w-32 h-32 bg-zinc-100 flex items-center justify-center mb-2 rounded-md">
                          <ImageIcon className="w-8 h-8 text-zinc-300" />
                        </div>
                        <p className="text-sm text-zinc-600">Scan QR Code with any UPI app</p>
                      </div>
                    </div>
                  )}

                  <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-[#8c7851] bg-[#8c7851]/5' : 'border-zinc-200 hover:border-zinc-300'}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      className="mr-3 text-[#8c7851] focus:ring-[#8c7851]" 
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    <div>
                      <div className="font-medium text-zinc-900">Credit / Debit Card</div>
                      <div className="text-sm text-zinc-500">Secure online payment</div>
                    </div>
                  </label>

                  {paymentMethod === 'card' && (
                    <div className="ml-8 mr-4 mb-4 grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Card Number</label>
                        <Input placeholder="0000 0000 0000 0000" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">Expiry Date</label>
                        <Input placeholder="MM/YY" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-zinc-700 mb-1">CVC</label>
                        <Input placeholder="123" />
                      </div>
                    </div>
                  )}

                  <label className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${paymentMethod === 'cod' ? 'border-[#8c7851] bg-[#8c7851]/5' : 'border-zinc-200 hover:border-zinc-300'}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      className="mr-3 text-[#8c7851] focus:ring-[#8c7851]" 
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                    <div>
                      <div className="font-medium text-zinc-900">Cash on Delivery (COD)</div>
                      <div className="text-sm text-zinc-500">Pay when you receive your order</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 h-fit sticky top-28">
          <h2 className="text-lg font-semibold text-zinc-900 mb-6">Order Summary</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-zinc-600">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>Shipping</span>
              <span>₹{shipping.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>Tax</span>
              <span>₹0</span>
            </div>
            <hr className="border-zinc-200 my-4" />
            <div className="flex justify-between text-lg font-bold text-zinc-900">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {step === 'cart' ? (
            <Button variant="premium" className="w-full" onClick={() => setStep('checkout')}>
              Proceed to Checkout <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button variant="premium" className="w-full">
              Place Order
            </Button>
          )}

          <div className="mt-6 text-center text-xs text-zinc-500">
            Secure checkout powered by Stripe.
          </div>
        </div>
      </div>
    </div>
  );
}
