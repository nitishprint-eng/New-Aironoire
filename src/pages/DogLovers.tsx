import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'motion/react';

import { allProducts } from '../data/products';
import { Product } from '../types';

interface DogLoverCardProps {
  art: Product;
}

const DogLoverCard: React.FC<DogLoverCardProps> = ({ art }) => {
  const navigate = useNavigate();

  return (
    <div className="group flex flex-col bg-transparent">
      <div 
        className="relative bg-white flex items-center justify-center overflow-hidden transition-all duration-700 cursor-pointer"
        onClick={() => navigate(`/product/${art.slug}`)}
      >
        <img 
          src={art.image} 
          alt={art.title} 
          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="pt-8 text-center">
        <div className="text-[9px] font-medium text-[#8c7851] mb-2 uppercase tracking-[0.2em]">{art.category}</div>
        <h3 className="text-lg font-medium font-heading text-[#1a1a1a] mb-2 tracking-wide">{art.title}</h3>
        <div className="text-xs text-[#1a1a1a]/40 tracking-widest mb-6">From ₹{art.price.toLocaleString('en-IN')}</div>
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full text-[10px] uppercase tracking-[0.1em] px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          onClick={() => navigate(`/product/${art.slug}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}

export function DogLovers() {
  const filteredProducts = allProducts.filter(p => p.category === 'dog-lovers');
  
  console.log(`Total Dog Lovers loaded: ${filteredProducts.length}`);
  console.log('Dog Lovers Products:', filteredProducts);

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f0]">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] overflow-hidden bg-[#1a1a1a]">
        <img 
          src="https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725581/ChatGPT_Image_Apr_9_2026_02_08_32_PM_et5ihw.png" 
          alt="Dog Lovers Collection" 
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-8 tracking-tight leading-[1.2]">Dog Lovers</h1>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70 max-w-md mx-auto font-sans font-semibold">Portraits of our most loyal companions.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {filteredProducts.map((art) => (
            <DogLoverCard key={art.id} art={art} />
          ))}
        </div>
      </div>
    </div>
  );
}
