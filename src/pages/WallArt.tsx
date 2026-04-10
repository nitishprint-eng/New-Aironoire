import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'motion/react';

import { allProducts } from '../data/products';
import { Product } from '../types';

const WallArtCard: React.FC<{ art: Product, onImageClick: (img: string) => void }> = ({ art, onImageClick }) => {
  const navigate = useNavigate();

  return (
    <div className="group flex flex-col bg-transparent h-full">
      <div 
        className="relative aspect-[4/5] bg-[#f5f5f5] p-6 flex items-center justify-center overflow-hidden cursor-pointer shadow-sm group-hover:shadow-2xl transition-all duration-700 rounded-sm"
        onClick={() => navigate(`/product/${art.slug}`)}
      >
        <img 
          src={art.image} 
          alt={art.title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="pt-8 text-center flex flex-col flex-grow">
        <div className="text-[9px] font-medium text-[#8c7851] mb-2 uppercase tracking-[0.2em]">{art.category}</div>
        <h3 className="text-lg font-medium font-heading text-[#1a1a1a] mb-2 tracking-wide">{art.title}</h3>
        <div className="text-xs text-[#1a1a1a]/40 tracking-widest mb-6">From ₹{art.price.toLocaleString('en-IN')}</div>
        <div className="mt-auto w-full pt-2">
          <Button 
            className="w-full bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:scale-[1.02] transition-all duration-300 rounded-md py-6 text-[11px] uppercase tracking-[0.1em] font-medium"
            onClick={() => navigate(`/product/${art.slug}`)}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export function WallArt() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Filter all products to ensure we get everything categorized as Wall Art
  const filteredProducts = allProducts.filter(p => 
    p.category === 'wall-art'
  );

  console.log(`Total Wall Art products loaded: ${filteredProducts.length}`);
  console.log('Wall Art Products:', filteredProducts);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] overflow-hidden bg-[#1a1a1a]">
        <img 
          src="https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399616/ChatGPT_Image_Apr_3_2026_01_45_14_PM_ej4bvc.png" 
          alt="Wall Art Collection" 
          className="w-full h-full object-contain opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-8 tracking-tight leading-[1.2]">Wall Art</h1>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70 max-w-md mx-auto font-sans font-semibold">Curated pieces for the modern space.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        {/* Categories */}
      <div className="flex justify-center mb-24">
        <div className="flex gap-12 overflow-x-auto pb-4 w-full md:w-auto justify-start md:justify-center no-scrollbar">
          {['All', 'Modern Art', 'Minimal Art', 'Photography', 'Luxury Art'].map((cat) => (
            <button key={cat} className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors whitespace-nowrap">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Exclusive Collection */}
      <div className="mb-24">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl font-heading font-medium text-[#1a1a1a] mb-6 tracking-tight">The Gallery</h2>
          <p className="text-[#1a1a1a]/60 text-sm uppercase tracking-[0.2em]">
            Curated pieces for the modern collector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {filteredProducts.map((art) => (
            <WallArtCard key={art.id} art={art} onImageClick={setSelectedImage} />
          ))}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      </div>
    </div>
  );
}
