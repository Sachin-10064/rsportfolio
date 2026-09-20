import React from 'react';

export const StatementSection: React.FC = () => {
  return (
    <section
      id="statement-section"
      className="relative w-full min-h-[85vh] bg-[#0E0D0C] flex items-center justify-center px-6 md:px-14 py-28 border-b border-[#22201D] overflow-hidden"
      aria-label="Architectural Statement"
    >
      {/* Subtle Background Radial Aura */}
      <div className="absolute inset-0 bg-radial from-bronze-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Subtle Pre-Label */}
        <span className="text-[11px] font-mono tracking-[0.35em] text-bronze-accent uppercase mb-8 block">
          THE ARCHITECTURAL IMPERATIVE
        </span>

        {/* Large Statement Typography */}
        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-stone-paper uppercase tracking-tight leading-[0.95]">
          From Plan <br />
          <span className="italic font-normal text-bronze-accent">To Place.</span>
        </h2>

        {/* Secondary Supporting Statement */}
        <p className="mt-8 md:mt-12 font-serif text-2xl sm:text-3xl md:text-4xl text-[#C2BEB6] font-light tracking-wide italic">
          “Every detail has a purpose.”
        </p>

        <p className="mt-6 max-w-xl text-xs sm:text-sm text-stone-muted font-light leading-relaxed font-sans">
          Spaces shaped by light, proportion and material. We refuse decorative excess in pursuit of enduring architectural stillness.
        </p>

        <div className="mt-12 w-16 h-px bg-bronze-accent/60" />
      </div>
    </section>
  );
};
