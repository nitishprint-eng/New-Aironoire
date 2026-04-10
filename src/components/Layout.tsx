import { Link, Outlet, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Wall Art', path: '/wall-art' },
    { name: 'Posters', path: '/posters' },
    { name: 'Custom Frames', path: '/custom-frames' },
    { name: 'Dog Lovers', path: '/dog-lovers' },
    { name: 'About', path: '/about' },
  ];

  const isHeroPage = location.pathname === '/' || 
    location.pathname === '/wall-art' || 
    location.pathname === '/dog-lovers' ||
    location.pathname === '/posters';

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] font-sans flex flex-col">
      <header className={cn(
        "z-50 w-full transition-all duration-500",
        isHeroPage 
          ? (isScrolled ? "fixed top-0 bg-[#f5f5f0]/90 backdrop-blur-md border-b border-zinc-200/50 shadow-sm" : "absolute top-0 bg-transparent border-transparent") 
          : "sticky top-0 bg-[#f5f5f0]/80 backdrop-blur-md border-b border-zinc-200/50"
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775566437/Untitled-1_shecvw.png" 
                alt="Logo" 
                className={cn(
                  "h-6 md:h-8 w-auto transition-all duration-500 brightness-0",
                  isHeroPage && !isScrolled ? "invert opacity-90" : "opacity-100"
                )}
                referrerPolicy="no-referrer"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 hover:opacity-100",
                    location.pathname === link.path 
                      ? "opacity-100" 
                      : (isHeroPage && !isScrolled ? "text-white/60 hover:text-white" : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]")
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-8">
              <Link to="/cart" className={cn(
                "relative p-1 transition-all duration-500 hover:opacity-100",
                isHeroPage && !isScrolled ? "text-white/60 hover:text-white" : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]"
              )}>
                <ShoppingCart className="w-4 h-4 stroke-[1.2px]" />
                <span className="absolute -top-1 -right-1 bg-[#8c7851] text-white text-[7px] font-bold w-3 h-3 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link to="/auth" className={cn(
                "p-1 transition-all duration-500 hover:opacity-100 hidden sm:block",
                isHeroPage && !isScrolled ? "text-white/60 hover:text-white" : "text-[#1a1a1a]/40 hover:text-[#1a1a1a]"
              )}>
                <User className="w-4 h-4 stroke-[1.2px]" />
              </Link>
              <button
                className={cn(
                  "md:hidden p-1 transition-all",
                  isHeroPage && !isScrolled ? "text-white/60" : "text-[#1a1a1a]/40"
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-4 h-4 stroke-[1.2px]" /> : <Menu className="w-4 h-4 stroke-[1.2px]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-zinc-200 overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors",
                      location.pathname === link.path ? "text-orange-600" : "text-zinc-600"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-zinc-100" />
                <Link
                  to="/auth"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 text-base font-medium text-zinc-600"
                >
                  <User className="w-5 h-5" />
                  <span>Sign In / Register</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className={cn("flex-grow", !isHeroPage && "pt-20")}>
        <Outlet />
      </main>

      <footer className="bg-[#1a1a1a] text-white/40 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-24">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-12">
              <img 
                src="https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775566437/Untitled-1_shecvw.png" 
                alt="Logo" 
                className="h-5 md:h-6 w-auto brightness-0 invert opacity-40"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-[10px] leading-relaxed tracking-[0.2em] uppercase opacity-40">
              Curated collection of premium wall art for the modern space.
            </p>
          </div>
          <div>
            <h3 className="text-white text-[10px] uppercase tracking-[0.3em] font-medium mb-12">Collections</h3>
            <ul className="space-y-6 text-[9px] uppercase tracking-[0.2em]">
              <li><Link to="/wall-art" className="hover:text-white transition-colors">Wall Art</Link></li>
              <li><Link to="/posters" className="hover:text-white transition-colors">Posters</Link></li>
              <li><Link to="/dog-lovers" className="hover:text-white transition-colors">Dog Lovers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[10px] uppercase tracking-[0.3em] font-medium mb-12">Information</h3>
            <ul className="space-y-6 text-[9px] uppercase tracking-[0.2em]">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-[10px] uppercase tracking-[0.3em] font-medium mb-12">Connect</h3>
            <ul className="space-y-6 text-[9px] uppercase tracking-[0.2em]">
              <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pinterest</li>
              <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-32 pt-12 border-t border-white/5 text-[8px] uppercase tracking-[0.4em] text-center opacity-20">
          &copy; {new Date().getFullYear()} Gallery. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
