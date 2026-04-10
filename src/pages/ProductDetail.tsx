import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Zap, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getProductBySlug, allProducts } from '../data/products';
import { Product } from '../types';

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedFrame, setSelectedFrame] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (slug) {
      const foundProduct = getProductBySlug(slug);
      if (foundProduct) {
        setProduct(foundProduct);
        setMainImage(foundProduct.image);
        
        if (foundProduct.sizes && foundProduct.sizes.length > 0) {
          setSelectedSize(foundProduct.sizes[0].label);
        } else if (foundProduct.category === 'dog-lovers') {
          setSelectedSize('A4');
        }

        if (foundProduct.category === 'dog-lovers') {
          setSelectedFrame('Black Matte');
        } else if (foundProduct.category === 'posters') {
          setSelectedFrame('Matte Black');
        } else {
          setSelectedFrame(foundProduct.category === 'Wall Art' ? 'Framed' : 'Black Frame');
        }
      } else {
        navigate('/');
      }
    }
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (!product) return null;

  const isWallArt = product.category === 'Wall Art';
  const isDogLover = product.category === 'dog-lovers';
  const isPoster = product.category === 'posters';
  
  const sizes = (product.sizes && product.sizes.length > 0) ? product.sizes.map(s => s.label) : (isDogLover ? ['A4', 'A3', 'A2'] : ['A4', 'A3', 'A2']);
  
  let frames: string[] = [];
  if (isDogLover) frames = ['Black Matte', 'White Matte', 'Wooden Frame'];
  else if (isWallArt) frames = ['Framed', 'Rolled'];
  else if (isPoster) frames = ['Matte Black', 'Minimal White', 'Wooden', 'No Frame'];
  else frames = ['Black Frame', 'White Frame', 'Natural Frame', 'Canvas'];
  
  const getDogLoverPrice = (size: string, frame: string) => {
    const pricing: Record<string, Record<string, number>> = {
      'A4': {
        'Black Matte': 899,
        'White Matte': 999,
        'Wooden Frame': 1099
      },
      'A3': {
        'Black Matte': 1699,
        'White Matte': 1899,
        'Wooden Frame': 2199
      },
      'A2': {
        'Black Matte': 2999,
        'White Matte': 3399,
        'Wooden Frame': 4299
      }
    };
    return pricing[size]?.[frame] || 899;
  };

  const getBasePrice = () => {
    if (product.sizes && product.sizes.length > 0 && selectedSize) {
      return product.sizes.find(s => s.label === selectedSize)?.price || product.price;
    }
    if (isDogLover && selectedSize && selectedFrame) {
      return getDogLoverPrice(selectedSize, selectedFrame);
    }
    return product.price;
  };

  const basePrice = getBasePrice();
  const currentPrice = isWallArt && selectedFrame === 'Rolled' 
    ? basePrice - 300 
    : basePrice;

  const getFrameClasses = () => {
    if (!selectedFrame || selectedFrame === 'No Frame' || selectedFrame === 'Rolled') return 'border-0';
    const frameLower = selectedFrame.toLowerCase();
    if (frameLower.includes('black')) return 'border-[12px] border-[#1a1a1a] shadow-[inset_0_4px_15px_rgba(0,0,0,0.3)]';
    if (frameLower.includes('white')) return 'border-[12px] border-[#fdfdfd] shadow-[inset_0_4px_15px_rgba(0,0,0,0.15)]';
    if (frameLower.includes('wood')) return 'border-[14px] border-[#8b5a2b] shadow-[inset_0_4px_15px_rgba(0,0,0,0.4)]';
    if (frameLower === 'framed') return 'border-[12px] border-[#1a1a1a] shadow-[inset_0_4px_15px_rgba(0,0,0,0.3)]';
    return 'border-0';
  };

  const relatedProducts = allProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const addToCart = () => {
    const cartItem = {
      id: Date.now(),
      productId: product.id,
      name: product.title,
      type: product.category,
      details: `${selectedSize} • ${selectedFrame}`,
      price: currentPrice * quantity,
      image: product.image,
      quantity: quantity
    };

    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem('cart', JSON.stringify([...existingCart, cartItem]));
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedFrame) {
      alert('Please select a size and frame before adding to cart');
      return;
    }
    addToCart();
    alert('Added to cart!');
  };

  const handleBuyNow = () => {
    if (!selectedSize || !selectedFrame) {
      alert('Please select a size and frame before buying');
      return;
    }
    addToCart();
    navigate('/cart?checkout=true');
  };

  return (
    <div className="bg-[#f5f5f0] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-12">
          <button onClick={() => navigate('/')} className="hover:text-[#1a1a1a] transition-colors">Home</button>
          <ChevronRight className="w-3 h-3" />
          <button onClick={() => navigate(`/${product.category.toLowerCase().replace(/\s+/g, '-')}`)} className="hover:text-[#1a1a1a] transition-colors">{product.category}</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#1a1a1a]">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Side: Images */}
          <div className="space-y-8">
            <div 
              className="relative aspect-[4/5] bg-[#f5f5f5] p-6 flex items-center justify-center rounded-2xl overflow-hidden shadow-sm cursor-zoom-in group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <motion.div 
                className={`relative w-full h-full transition-transform duration-200 overflow-hidden ${getFrameClasses()}`}
                style={isZoomed ? {
                  transform: 'scale(2)',
                  transformOrigin: `${mousePos.x}% ${mousePos.y}%`
                } : {}}
              >
                <img 
                  src={mainImage} 
                  alt={product.title}
                  className="w-full h-full object-cover block"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-[9px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a]">
                Premium Quality
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
              {[product.image, ...(product.images || [])].map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`relative w-24 aspect-[4/5] bg-[#f5f5f5] p-2 flex items-center justify-center rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                    mainImage === img ? 'border-[#8c7851]' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Info */}
          <div className="flex flex-col">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#8c7851]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <span className="text-[9px] uppercase tracking-widest text-[#1a1a1a]/40">(48 Reviews)</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-medium text-[#1a1a1a] mb-6 tracking-tight">{product.title}</h1>
              
              {/* Dynamic Price with Animation */}
              <div className="mb-8">
                <div className="h-10 overflow-hidden mb-2">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentPrice}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="text-2xl font-medium text-[#1a1a1a]"
                    >
                      ₹{currentPrice.toLocaleString('en-IN')}
                    </motion.div>
                  </AnimatePresence>
                </div>
                {selectedSize && selectedFrame && (
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#8c7851] font-medium">
                    {selectedSize} • {selectedFrame}
                  </div>
                )}
              </div>

              <p className="text-[13px] text-[#1a1a1a]/60 leading-relaxed tracking-wide max-w-lg">
                {product.description || "Transform your space with this exquisite piece of art. Meticulously crafted using archival-quality materials, ensuring vibrant colors and lasting beauty for generations to come."}
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-10">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] mb-6">Select Size</h3>
              <div className="flex flex-wrap gap-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-8 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-500 border ${
                      selectedSize === size 
                        ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]' 
                        : 'bg-white/50 text-[#1a1a1a]/60 border-transparent hover:border-[#1a1a1a]/20'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Selection */}
            <div className="mb-12">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] mb-6">
                {isWallArt ? 'Frame Option' : 'Frame Style'}
              </h3>
              <div className="flex flex-wrap gap-4">
                {frames.map((frame) => (
                  <button
                    key={frame}
                    onClick={() => setSelectedFrame(frame)}
                    className={`px-6 py-3 rounded-xl text-[10px] uppercase tracking-[0.1em] font-medium transition-all duration-500 border ${
                      selectedFrame === frame 
                        ? 'bg-[#8c7851] text-white border-[#8c7851]' 
                        : 'bg-white/50 text-[#1a1a1a]/60 border-transparent hover:border-[#8c7851]/20'
                    }`}
                  >
                    {frame}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Buttons */}
            <div className="space-y-8">
              <div className="flex items-center gap-8">
                <div className="flex items-center bg-white/50 rounded-full px-4 py-2 border border-white/20">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center text-sm font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  onClick={handleAddToCart}
                  className="py-8 rounded-full text-[11px] uppercase tracking-[0.2em] bg-white text-[#1a1a1a] border border-[#1a1a1a]/10 hover:bg-[#f5f5f0] transition-all duration-500 flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={handleBuyNow}
                  className="py-8 rounded-full text-[11px] uppercase tracking-[0.2em] bg-[#1a1a1a] text-white hover:bg-black transition-all duration-500 flex items-center justify-center gap-3"
                >
                  <Zap className="w-4 h-4" />
                  Buy Now
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 grid grid-cols-2 gap-8 pt-12 border-t border-[#1a1a1a]/5">
              <div className="flex items-center gap-4">
                <Truck className="w-5 h-5 text-[#8c7851]" />
                <div className="text-[9px] uppercase tracking-widest text-[#1a1a1a]/60 leading-relaxed">
                  Free Express<br />Shipping
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-5 h-5 text-[#8c7851]" />
                <div className="text-[9px] uppercase tracking-widest text-[#1a1a1a]/60 leading-relaxed">
                  Secure Payment<br />Guaranteed
                </div>
              </div>
              <div className="flex items-center gap-4">
                <RotateCcw className="w-5 h-5 text-[#8c7851]" />
                <div className="text-[9px] uppercase tracking-widest text-[#1a1a1a]/60 leading-relaxed">
                  30-Day Easy<br />Returns
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Bought Together */}
        {relatedProducts.length > 0 && (
          <div className="mt-40">
            <div className="text-center mb-24">
              <h2 className="text-3xl font-heading font-medium text-[#1a1a1a] mb-4 tracking-tight">Frequently Bought Together</h2>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/40">Curated pairings to complete your space.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
              {relatedProducts.map((rel) => {
                const isRelDogLover = rel.category === 'dog-lovers';
                return (
                  <div 
                    key={rel.id} 
                    className="group cursor-pointer"
                    onClick={() => navigate(`/product/${rel.slug}`)}
                  >
                    <div className={`relative aspect-[4/5] flex items-center justify-center overflow-hidden transition-all duration-700 mb-8 ${
                      isRelDogLover 
                        ? 'bg-white' 
                        : 'bg-[#f5f5f5] p-6 rounded-2xl shadow-sm group-hover:shadow-2xl'
                    }`}>
                      <img 
                        src={rel.image} 
                        alt={rel.title} 
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-medium font-heading text-[#1a1a1a] mb-2 tracking-wide">{rel.title}</h3>
                      <div className="text-xs text-[#1a1a1a]/40 tracking-widest">₹{rel.price.toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
