import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ChevronDown, 
  Filter, 
  Star, 
  ShoppingCart, 
  ArrowRight,
  X,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Check,
  Frame,
  Image as ImageIcon,
  FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'motion/react';
import { allProducts } from '@/data/products';
import { Product } from '@/types';

const SIZES = [
  { label: "6x4", price: 499 },
  { label: "7x5", price: 699 },
  { label: "8x10", price: 999 },
  { label: "10x12", price: 1299 }
];

export function CustomFrames() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [filters, setFilters] = useState({
    price: [] as string[],
    size: [] as string[],
    orientation: [] as string[],
    color: [] as string[],
    material: [] as string[],
    category: [] as string[]
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Filter logic
  const filteredProducts = useMemo(() => {
    let result = allProducts.filter(p => p.category === 'custom-frames' &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (filters.color.length > 0) {
      result = result.filter(p => p.color && filters.color.includes(p.color));
    }
    if (filters.material.length > 0) {
      result = result.filter(p => p.material && filters.material.includes(p.material));
    }
    if (filters.category.length > 0) {
      result = result.filter(p => p.subCategory && filters.category.includes(p.subCategory));
    }

    // Sort logic
    if (sortBy === 'newest') result.sort((a, b) => (b.id as number) - (a.id as number));

    return result;
  }, [searchQuery, filters, sortBy]);

  const toggleFilter = (type: keyof typeof filters, value: string) => {
    setFilters(prev => {
      const current = prev[type];
      if (current.includes(value)) {
        return { ...prev, [type]: current.filter(v => v !== value) };
      }
      return { ...prev, [type]: [...current, value] };
    });
  };

  return (
    <div className="bg-[#f5f5f0] min-h-screen">
      {/* Header / Search Area */}
      <div className="bg-[#f5f5f0]/80 backdrop-blur-md border-b border-zinc-200/50 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a]/40" />
              <input 
                type="text" 
                placeholder="Search the collection..."
                className="w-full pl-12 pr-4 py-3 bg-white/50 border-none focus:bg-white focus:ring-1 focus:ring-[#8c7851]/20 rounded-full transition-all outline-none text-[13px] tracking-wide"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a]/60"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 hidden sm:inline">Sort by:</span>
                <select 
                  className="bg-transparent border-none text-[10px] uppercase tracking-[0.2em] font-medium focus:ring-0 cursor-pointer text-[#1a1a1a]/60"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Popular</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0 space-y-12">
            <FilterSection 
              title="Category" 
              options={["Photo Frame", "Wall Art Frame", "Canvas Frame"]} 
              selected={filters.category}
              onToggle={(val) => toggleFilter('category', val)}
            />
            <FilterSection 
              title="Frame Color" 
              options={["Black", "White", "Wood", "Gold", "Silver", "Clear"]} 
              selected={filters.color}
              onToggle={(val) => toggleFilter('color', val)}
            />
            <FilterSection 
              title="Material" 
              options={["Wood", "Metal", "Acrylic"]} 
              selected={filters.material}
              onToggle={(val) => toggleFilter('material', val)}
            />
          </aside>

          {/* Product Grid */}
          <main className="flex-grow">
            <div className="mb-12">
              <h2 className="text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/40">
                {filteredProducts.length} Pieces Found
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-16">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-24 bg-white rounded-2xl border border-zinc-200">
                <div className="bg-[#f5f5f5] p-6 flex items-center justify-center w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-zinc-400" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">No frames found</h3>
                <p className="text-zinc-500">Try adjusting your filters or search terms.</p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => {
                    setFilters({ price: [], size: [], orientation: [], color: [], material: [], category: [] });
                    setSearchQuery('');
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}

            {filteredProducts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <Button variant="outline" size="lg" className="px-12">
                  Load More Frames
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden overflow-y-auto p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </h2>
                <button onClick={() => setIsSidebarOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-8">
                <FilterSection 
                  title="Category" 
                  options={["Photo Frame", "Wall Art Frame", "Canvas Frame"]} 
                  selected={filters.category}
                  onToggle={(val) => toggleFilter('category', val)}
                />
                <FilterSection 
                  title="Frame Color" 
                  options={["Black", "White", "Wood", "Gold", "Silver", "Clear"]} 
                  selected={filters.color}
                  onToggle={(val) => toggleFilter('color', val)}
                />
                <FilterSection 
                  title="Material" 
                  options={["Wood", "Metal", "Acrylic"]} 
                  selected={filters.material}
                  onToggle={(val) => toggleFilter('material', val)}
                />
              </div>

              <div className="mt-12 pt-6 border-t border-zinc-100">
                <Button className="w-full" onClick={() => setIsSidebarOpen(false)}>
                  Show {filteredProducts.length} Results
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterSection({ title, options, selected, onToggle }: { 
  title: string, 
  options: string[], 
  selected: string[],
  onToggle: (val: string) => void 
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="pb-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full mb-6 group"
      >
        <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] group-hover:text-[#8c7851] transition-colors">{title}</h3>
        <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden space-y-3"
          >
            {options.map((option) => (
              <label key={option} className="flex items-center gap-4 cursor-pointer group">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    className="peer appearance-none w-4 h-4 border border-zinc-300 rounded-sm focus:ring-0 checked:bg-[#8c7851] checked:border-[#8c7851] transition-all"
                    checked={selected.includes(option)}
                    onChange={() => onToggle(option)}
                  />
                  <CheckIcon className="absolute w-3 h-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                </div>
                <span className="text-[11px] uppercase tracking-widest text-[#1a1a1a]/40 group-hover:text-[#1a1a1a] transition-colors">{option}</span>
              </label>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="group flex flex-col bg-transparent"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f5] p-6 flex items-center justify-center shadow-sm group-hover:shadow-2xl transition-all duration-700 rounded-sm">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          {product.tag && (
            <span className="bg-[#1a1a1a] text-white text-[8px] font-medium px-2 py-1 rounded-full uppercase tracking-widest">
              {product.tag}
            </span>
          )}
        </div>
      </div>

      <div className="pt-8 text-center">
        <div className="text-[9px] font-medium text-[#8c7851] mb-2 uppercase tracking-[0.2em]">{product.category}</div>
        <h3 className="text-lg font-medium font-heading text-[#1a1a1a] mb-2 tracking-wide">
          {product.title}
        </h3>
        <div className="text-xs text-[#1a1a1a]/40 tracking-widest mb-6">From ₹{SIZES[0].price.toLocaleString('en-IN')}</div>
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full text-[10px] uppercase tracking-[0.1em] px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          onClick={() => navigate(`/custom-frames`)}
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor" 
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
