import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="relative w-full bg-warm-dark py-28 md:py-40 px-6 md:px-14 border-b border-[#22201D]"
      aria-label="About RS Design"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index */}
        <div className="flex items-center space-x-3 mb-12 md:mb-16">
          <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">
            04 — ABOUT RS DESIGN
          </span>
          <div className="h-px w-16 bg-[#2C2A27]" />
        </div>

        {/* Asymmetric 58% / 42% Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photography (58% width ~ 7 cols) */}
          <div className="lg:col-span-7 relative aspect-4/3 rounded-xl overflow-hidden bg-warm-stone">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85"
              alt="RS Design Interior and Collaborative Atelier"
              loading="lazy"
              className="w-full h-full object-cover grayscale-30 hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full bg-warm-dark/85 backdrop-blur-md border border-[#2C2A27] text-[10px] font-mono tracking-widest text-stone-light">
              ATELIER // NEW DELHI & INTERNATIONAL
            </div>
          </div>

          {/* Editorial Text Block (42% width ~ 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-stone-paper uppercase leading-[1.1]">
              Built Around <br />
              <span className="italic text-bronze-accent">Design, Detail & Atmosphere.</span>
            </h2>

            <p className="font-sans text-sm md:text-base text-[#C2BEB6] font-light leading-relaxed">
              RS Design brings together architectural thinking, interior design and visualization to create spaces that are considered from both a functional and visual perspective.
            </p>

            <p className="font-sans text-xs md:text-sm text-stone-muted font-light leading-relaxed">
              We operate without decorative compromise. Whether modeling the exact bevel of a stone hearth or choreographing natural daylight through high clerestory glazing, our multidisciplinary team ensures every spatial decision carries intent.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#262422]">
              <div>
                <span className="font-serif text-3xl md:text-4xl text-stone-paper font-light block">
                  35+
                </span>
                <span className="text-[10px] font-mono tracking-widest text-stone-muted uppercase mt-1 block">
                  Commissions Realized
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-stone-paper font-light block">
                  8K
                </span>
                <span className="text-[10px] font-mono tracking-widest text-stone-muted uppercase mt-1 block">
                  CGI Fidelity Standard
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-stone-paper font-light block">
                  100%
                </span>
                <span className="text-[10px] font-mono tracking-widest text-stone-muted uppercase mt-1 block">
                  Bespoke Detailing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
