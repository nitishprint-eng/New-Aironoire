import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Image as ImageIcon, Frame, ShieldCheck, Zap, Truck, ArrowRight, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const HERO_IMAGES = [
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399670/ChatGPT_Image_Apr_4_2026_01_31_17_PM_pl90eo.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399616/ChatGPT_Image_Apr_3_2026_01_45_14_PM_ej4bvc.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399618/ChatGPT_Image_Apr_3_2026_01_50_02_PM_jckeqm.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399632/ChatGPT_Image_Apr_3_2026_02_10_45_PM_hwcyw8.png",
  "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399648/ChatGPT_Image_Apr_3_2026_02_14_59_PM_gxrbmp.png"
];

const SERVICES = [
  {
    title: "Custom Frames",
    subtitle: "Handcrafted premium frames",
    description: "Upload your art or photos and we'll frame them beautifully in our handcrafted frames.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
    path: "/custom-frames",
    icon: Frame,
    cta: "Frame Your Art"
  },
  {
    title: "Wall Art",
    subtitle: "Curated luxury designs",
    description: "Elevate your space with our curated collection of framed artworks and premium canvas prints.",
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775399689/ChatGPT_Image_Apr_4_2026_01_24_04_PM_ndmd5b.png",
    path: "/wall-art",
    icon: ImageIcon,
    cta: "Shop Collection"
  },
  {
    title: "Dog Lovers",
    subtitle: "Personalized pet portraits",
    description: "Celebrate your furry friends with our exclusive collection of beautiful dog portraits and wall art.",
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775725581/ChatGPT_Image_Apr_9_2026_02_08_32_PM_et5ihw.png",
    path: "/dog-lovers",
    icon: Star,
    cta: "Explore Collection"
  },
  {
    title: "Posters",
    subtitle: "Bold modern prints",
    description: "Vibrant, high-quality prints to express your style.",
    image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557142/Vivid_Red_Glamour_vgrg4f.jpg",
    path: "/posters",
    icon: Frame,
    cta: "View Collection"
  }
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-zinc-900">
        {/* Layer 1: Background Image Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false}>
            {HERO_IMAGES.map((img, index) => (
              currentSlide === index && (
                <motion.div
                  key={img}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {/* Main Image */}
                  <motion.img 
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    src={img} 
                    alt={`Print shop slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>

        {/* Layer 2: Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Layer 3: Fixed Content (Outside Slider) */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white mb-8 leading-[1.2] text-balance">
              Turn Your Photos Into <br />
              <span className="italic text-white/90">Beautiful Wall Art</span>
            </h1>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70 mb-12 max-w-lg mx-auto leading-relaxed font-sans font-semibold">
              Premium frames, posters & prints crafted for your space
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/wall-art">
                <Button className="w-full sm:w-auto text-[10px] uppercase tracking-[0.2em] px-12 py-7 rounded-full bg-white text-[#1a1a1a] hover:bg-[#f5f5f0] transition-all duration-500 border-none shadow-xl font-bold">
                  Shop Collection
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Layer 4: Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-orange-600 w-8" : "bg-zinc-400/50 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Elements */}
      <section className="bg-white py-12 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 font-heading">Fast Turnaround</h3>
                <p className="text-sm text-zinc-500">Same-day printing available</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 font-heading">Premium Quality</h3>
                <p className="text-sm text-zinc-500">Industry-leading printers</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 font-heading">Secure Delivery</h3>
                <p className="text-sm text-zinc-500">Tracked shipping nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-[#faf9f6]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-medium text-[#1a1a1a] mb-6 tracking-tight">Explore Our Collections</h2>
            <div className="w-16 h-[1px] bg-[#1a1a1a]/20 mx-auto mb-6"></div>
            <p className="text-[#1a1a1a]/60 text-sm uppercase tracking-[0.2em] leading-relaxed">Premium prints crafted for modern spaces</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {SERVICES.map((service, index) => (
              <Link key={index} to={service.path} className="group block">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                    <h3 className="text-2xl md:text-3xl font-heading text-white mb-2 tracking-wide">{service.title}</h3>
                    <p className="text-white/80 text-sm font-sans mb-6 font-light">{service.subtitle}</p>
                    
                    {/* CTA Button */}
                    <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white font-medium">
                      <span className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        Explore Collection
                      </span>
                      <ArrowRight className="w-4 h-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-heading font-medium text-[#1a1a1a] mb-8 tracking-tight">Trending Now</h2>
            <p className="text-[#1a1a1a]/60 text-sm uppercase tracking-[0.2em]">Our most coveted pieces.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              { title: "Vivid Red Glamour", category: "posters", price: "₹999", image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557142/Vivid_Red_Glamour_vgrg4f.jpg", slug: "vivid-red-glamour" },
              { title: "The Ape Punk", category: "posters", price: "₹999", image: "https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775557141/The_ape_punk_____intiaj.jpg", slug: "the-ape-punk" },
              { title: "Classic Wooden Frame", category: "custom-frames", price: "₹499", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop", slug: "classic-wooden-frame" },
              { title: "Monochrome Maze", category: "wall-art", price: "₹1,699", image: "https://res.cloudinary.com/drkrtf8mm/image/upload/v1775399709/ChatGPT_Image_Mar_29_2026_06_11_05_PM_qayowp.png", slug: "monochrome-maze" }
            ].map((item, i) => (
              <Link key={i} to={item.slug ? `/product/${item.slug}` : '#'} className="group flex flex-col bg-transparent">
                <div className="relative aspect-[3/4] bg-[#f5f5f5] p-6 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700 rounded-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="pt-8 text-center">
                  <div className="text-[9px] font-medium text-[#8c7851] mb-2 uppercase tracking-[0.2em]">{item.category}</div>
                  <h3 className="text-lg font-medium font-heading text-[#1a1a1a] mb-2 tracking-wide">{item.title}</h3>
                  <div className="text-xs text-[#1a1a1a]/40 tracking-widest">{item.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
