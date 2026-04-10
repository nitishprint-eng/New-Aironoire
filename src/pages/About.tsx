export function About() {
  return (
    <div className="bg-[#f5f5f0] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-32">
        <div className="text-center mb-32">
          <h1 className="text-5xl md:text-7xl font-heading font-medium text-[#1a1a1a] mb-8 tracking-tight">Our Story</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#1a1a1a]/40 font-medium max-w-lg mx-auto leading-relaxed">
            In a digital age, we believe physical art holds a profound and lasting value.
          </p>
        </div>

        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden mb-32 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1588693959306-b311f44ce242?q=80&w=1600&auto=format&fit=crop" 
            alt="Print Shop" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] mb-8">Our Mission</h2>
              <p className="text-[13px] text-[#1a1a1a]/60 mb-8 leading-relaxed tracking-wide">
                Founded in 2020, Print World began with a singular vision: to bridge the gap between digital creativity and tangible beauty. We curate and craft professional-grade prints that transform spaces and inspire the modern collector.
              </p>
              <p className="text-[13px] text-[#1a1a1a]/60 leading-relaxed tracking-wide">
                Our process combines state-of-the-art technology with the meticulous eye of a gallery curator, ensuring that every piece we produce is a masterpiece in its own right.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] mb-8">The Collection</h2>
              <ul className="space-y-12">
                <li className="flex gap-6">
                  <div className="w-1 h-1 rounded-full bg-[#8c7851] mt-2 shrink-0" />
                  <div>
                    <strong className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] block mb-2">Archival Quality</strong>
                    <p className="text-[12px] text-[#1a1a1a]/50 leading-relaxed tracking-wide">We utilize premium, acid-free papers and pigment-based inks for longevity.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-1 h-1 rounded-full bg-[#8c7851] mt-2 shrink-0" />
                  <div>
                    <strong className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] block mb-2">Curated Selection</strong>
                    <p className="text-[12px] text-[#1a1a1a]/50 leading-relaxed tracking-wide">Every piece is hand-selected and verified by our experts.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="w-1 h-1 rounded-full bg-[#8c7851] mt-2 shrink-0" />
                  <div>
                    <strong className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#1a1a1a] block mb-2">Modern Aesthetic</strong>
                    <p className="text-[12px] text-[#1a1a1a]/50 leading-relaxed tracking-wide">Designed for the contemporary space, balancing minimalism and impact.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
