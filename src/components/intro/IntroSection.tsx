import React from 'react';
import { Compass, Sparkles, Box, Sun } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Proportion & Form',
      description: 'Disciplined spatial geometry and golden ratio alignments that instill immediate subconscious tranquility.',
      icon: Compass
    },
    {
      num: '02',
      title: 'Authentic Materials',
      description: 'Raw travertine, board-formed concrete, fumed oak, and unlacquered bronze that develop organic patina with time.',
      icon: Box
    },
    {
      num: '03',
      title: 'Atmospheric Luminosity',
      description: 'Harnessing the kinetic qualities of natural daylight paired with low-glare circadian artificial illumination.',
      icon: Sun
    },
    {
      num: '04',
      title: 'Photorealistic Precision',
      description: 'Bridging imagination and physical craft through 8K CGI visualization, physical shaders, and spatial rigor.',
      icon: Sparkles
    }
  ];

  return (
    <section
      id="intro-section"
      className="relative w-full bg-warm-dark py-28 md:py-40 px-6 md:px-14 border-b border-[#22201D]"
      aria-label="Introduction"
    >
      <div className="max-w-7xl mx-auto">
        {/* Subtle Section Index Label */}
        <div className="flex items-center space-x-3 mb-12 md:mb-16">
          <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">00 — PHILOSOPHY</span>
          <div className="h-px w-16 bg-[#2C2A27]" />
        </div>

        {/* Editorial Two-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Display Headline */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-stone-paper leading-[1.05] uppercase">
              We Create Spaces <br />
              <span className="italic text-bronze-accent">With Purpose.</span>
            </h2>

            <div className="mt-8 flex items-center space-x-4">
              <span className="text-[11px] font-mono tracking-widest text-stone-muted uppercase">
                EST. 2020 • LUCKNOW, INDIA
              </span>
            </div>
          </div>

          {/* Right Column: Supporting Architectural Copy */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <p className="font-sans text-base md:text-lg text-[#C2BEB6] font-light leading-relaxed tracking-wide">
              Good design is not only about how a space looks — it is about how the space works, feels and becomes part of everyday life.
            </p>

            {/* Quote tag */}
            <div className="mt-8 pt-6 border-t border-[#262422]">
              <blockquote className="italic font-serif text-sm text-stone-light/90">
                “Designing spaces. Defining experiences.”
              </blockquote>
              <cite className="block not-italic text-[10px] uppercase font-mono tracking-widest text-bronze-accent mt-2">
                — RS Design Manifesto
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
