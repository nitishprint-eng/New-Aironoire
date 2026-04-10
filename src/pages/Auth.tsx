import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Printer } from 'lucide-react';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center px-6 py-32">
      <div className="w-full max-w-md bg-white/40 backdrop-blur-sm border border-white/20 rounded-[2rem] p-12 shadow-sm">
        <div className="flex justify-center mb-12">
          <img 
            src="https://res.cloudinary.com/drkrtf8mm/image/upload/q_auto/f_auto/v1775566437/Untitled-1_shecvw.png" 
            alt="Logo" 
            className="h-8 w-auto brightness-0 opacity-100"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <h2 className="text-3xl font-heading font-medium text-center text-[#1a1a1a] mb-4 tracking-tight">
          {isLogin ? 'Welcome' : 'Join Us'}
        </h2>
        <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 mb-12">
          {isLogin ? 'Access your curated collection' : 'Begin your journey as a collector'}
        </p>

        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-[9px] uppercase tracking-[0.1em] text-[#1a1a1a]/40 mb-2">Full Name</label>
              <input className="w-full p-3 bg-white/50 border-none rounded-lg focus:ring-1 focus:ring-[#8c7851]/20 outline-none text-[11px] tracking-wide" placeholder="John Doe" />
            </div>
          )}
          <div>
            <label className="block text-[9px] uppercase tracking-[0.1em] text-[#1a1a1a]/40 mb-2">Email</label>
            <input type="email" className="w-full p-3 bg-white/50 border-none rounded-lg focus:ring-1 focus:ring-[#8c7851]/20 outline-none text-[11px] tracking-wide" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-[9px] uppercase tracking-[0.1em] text-[#1a1a1a]/40 mb-2">Password</label>
            <input type="password" className="w-full p-3 bg-white/50 border-none rounded-lg focus:ring-1 focus:ring-[#8c7851]/20 outline-none text-[11px] tracking-wide" placeholder="••••••••" />
          </div>
          
          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-[10px] uppercase tracking-widest text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors">Forgot password?</a>
            </div>
          )}

          <Button variant="premium" className="w-full mt-8 py-8 text-[11px] uppercase tracking-[0.2em] rounded-full bg-[#1a1a1a] text-white hover:bg-black transition-all duration-500">
            {isLogin ? 'Sign In' : 'Create Account'}
          </Button>
        </form>

        <div className="mt-12 text-center text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40">
          {isLogin ? "New to the gallery? " : "Already a member? "}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#8c7851] font-medium hover:text-[#1a1a1a] transition-colors ml-2"
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}
