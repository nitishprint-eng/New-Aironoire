import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function Contact() {
  return (
    <div className="bg-[#f5f5f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-[#1a1a1a] mb-8 tracking-tight">Connect</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/40 font-medium">
            We are here to assist with your collection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Contact Info */}
          <div className="space-y-16">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] mb-12">Contact Information</h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="text-[#8c7851] mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] mb-2">Phone</h3>
                  <p className="text-[13px] text-[#1a1a1a]/60 tracking-wide">+1 (555) 123-4567</p>
                  <p className="text-[10px] text-[#1a1a1a]/30 mt-1 uppercase tracking-widest">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="text-[#8c7851] mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] mb-2">Email</h3>
                  <p className="text-[13px] text-[#1a1a1a]/60 tracking-wide">hello@printworld.com</p>
                  <p className="text-[10px] text-[#1a1a1a]/30 mt-1 uppercase tracking-widest">We aim to reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="text-[#8c7851] mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] mb-2">Location</h3>
                  <p className="text-[13px] text-[#1a1a1a]/60 tracking-wide leading-relaxed">123 Print Avenue<br />New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-16 aspect-video bg-white/40 backdrop-blur-sm rounded-[2rem] border border-white/20 overflow-hidden relative group">
              <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/20 font-medium">
                Interactive Map
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/40 backdrop-blur-sm p-12 rounded-[2rem] border border-white/20">
            <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] mb-12">Send us a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.1em] text-[#1a1a1a]/40 mb-2">First Name</label>
                  <input className="w-full p-3 bg-white/50 border-none rounded-lg focus:ring-1 focus:ring-[#8c7851]/20 outline-none text-[11px] tracking-wide" placeholder="John" />
                </div>
                <div>
                  <label className="block text-[9px] uppercase tracking-[0.1em] text-[#1a1a1a]/40 mb-2">Last Name</label>
                  <input className="w-full p-3 bg-white/50 border-none rounded-lg focus:ring-1 focus:ring-[#8c7851]/20 outline-none text-[11px] tracking-wide" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-[9px] uppercase tracking-[0.1em] text-[#1a1a1a]/40 mb-2">Email</label>
                <input type="email" className="w-full p-3 bg-white/50 border-none rounded-lg focus:ring-1 focus:ring-[#8c7851]/20 outline-none text-[11px] tracking-wide" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-[9px] uppercase tracking-[0.1em] text-[#1a1a1a]/40 mb-2">Subject</label>
                <input className="w-full p-3 bg-white/50 border-none rounded-lg focus:ring-1 focus:ring-[#8c7851]/20 outline-none text-[11px] tracking-wide" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-[9px] uppercase tracking-[0.1em] text-[#1a1a1a]/40 mb-2">Message</label>
                <textarea 
                  className="w-full p-3 bg-white/50 border-none rounded-lg focus:ring-1 focus:ring-[#8c7851]/20 outline-none text-[11px] tracking-wide min-h-[150px] resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <Button variant="premium" className="w-full py-8 text-[11px] uppercase tracking-[0.2em] rounded-full bg-[#1a1a1a] text-white hover:bg-black transition-all duration-500">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
