import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';

import { allProducts } from '../data/products';
import { Product } from '../types';

const PosterCard: React.FC<{ art: Product }> = ({ art }) => {
  const navigate = useNavigate();

  return (
    <div className="group flex flex-col bg-transparent">
      <div 
        className="relative aspect-[3/4] bg-[#f5f5f5] p-6 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700 rounded-sm cursor-pointer"
        onClick={() => navigate(`/product/${art.slug}`)}
      >
        <img 
          src={art.image} 
          alt={art.title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="pt-8 text-center">
        <div className="text-[9px] font-medium text-[#8c7851] mb-2 uppercase tracking-[0.2em]">{art.category}</div>
        <h3 className="text-lg font-medium font-heading text-[#1a1a1a] mb-2 tracking-wide">{art.title}</h3>
        <div className="text-xs text-[#1a1a1a]/40 tracking-widest mb-6">₹{art.price.toLocaleString('en-IN')}</div>
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

export function Posters() {
  const getOrder = (p: Product) => {
    // If order is explicitly set and is a valid number, use it
    if (typeof p.order === 'number' && !isNaN(p.order)) {
      return Number(p.order);
    }
    
    // Otherwise, try to extract a number from the title
    const match = p.title.match(/\d+/);
    if (match) {
      return parseInt(match[0], 10);
    }
    
    // If missing or invalid, push to the end
    return Infinity;
  };

  const filteredProducts = allProducts
    .filter(p => p.category === 'posters')
    .map(p => ({ ...p, computedOrder: getOrder(p) }))
    .sort((a, b) => Number(a.computedOrder) - Number(b.computedOrder));
  
  console.log(`Total Posters loaded: ${filteredProducts.length}`);
  console.log('Poster Orders:', filteredProducts.map(p => ({ title: p.title, order: p.computedOrder })));

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f0]">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] overflow-hidden bg-[#1a1a1a]">
        <img 
          src={filteredProducts[0]?.image || "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557142/Vivid_Red_Glamour_vgrg4f.jpg"} 
          alt="Posters Collection" 
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-8 tracking-tight leading-[1.2]">Posters</h1>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70 max-w-md mx-auto font-sans font-semibold">Vibrant prints for the modern space.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {filteredProducts.map((art) => (
            <PosterCard key={art.id} art={art} />
          ))}
        </div>
      </div>
    </div>
  );
}
