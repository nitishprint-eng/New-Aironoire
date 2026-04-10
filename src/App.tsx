import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CustomFrames } from './pages/CustomFrames';
import { WallArt } from './pages/WallArt';
import { DogLovers } from './pages/DogLovers';
import { Posters } from './pages/Posters';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { AdminDashboard } from './pages/AdminDashboard';
import { Auth } from './pages/Auth';
import { ProductDetail } from './pages/ProductDetail';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="custom-frames" element={<CustomFrames />} />
          <Route path="wall-art" element={<WallArt />} />
          <Route path="dog-lovers" element={<DogLovers />} />
          <Route path="posters" element={<Posters />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="auth" element={<Auth />} />
          <Route path="product/:slug" element={<ProductDetail />} />
        </Route>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
