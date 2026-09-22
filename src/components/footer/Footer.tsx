import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="relative w-full bg-[#0D0C0B] py-20 md:py-24 px-6 md:px-14 border-t border-[#1F1E1B] text-stone-muted"
      aria-label="Site Footer"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 pb-16 border-b border-warm-card">
          {/* Brand & Disciplines */}
          <div className="space-y-5 max-w-sm">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="group inline-flex items-center space-x-3.5"
              aria-label="RS Design Home"
              data-cursor="RS DESIGN"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="RS Design Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-serif tracking-[0.22em] text-sm sm:text-base font-normal text-stone-paper uppercase group-hover:text-bronze-accent transition-colors leading-tight">
                  RS DESIGN
                </span>
                <span className="text-[9px] font-mono tracking-[0.26em] text-stone-muted uppercase mt-0.5">
                  Architecture • Interior • Visualization
                </span>
              </div>
            </a>

            <div className="space-y-1 font-sans text-xs text-[#C2BEB6] font-light">
              <p>Residential Architecture &amp; Villa Design</p>
              <p>Curated Interior Design</p>
              <p>2D Drafting &amp; Working Drawings</p>
              <p>Photorealistic 3D Architectural Visualization</p>
            </div>
            <p className="text-[11px] text-[#6E6B65] pt-1 leading-relaxed">
              Lucknow-based architecture and interior design. Modern • Functional • Personalized • Visual.
            </p>
          </div>

          {/* Direct Social / Contact Links */}
          <div className="flex flex-col space-y-3 font-mono text-xs">
            <span className="text-[10px] uppercase tracking-widest text-bronze-accent">Dispatches</span>
            <a
              href="https://www.instagram.com/rsdesign477?stkn=MTJrZzVsdHQyaHMxZA%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="text-stone-light hover:text-bronze-accent transition-colors"
            >
              Instagram ↗
            </a>
            <a
              href="mailto:rsdesign@gmail.com"
              className="text-stone-light hover:text-bronze-accent transition-colors"
            >
              Email ↗
            </a>
            <a
              href="https://wa.me/+919889337006"
              target="_blank"
              rel="noreferrer"
              className="text-stone-light hover:text-bronze-accent transition-colors"
            >
              WhatsApp ↗
            </a>

          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-col space-y-3 font-sans text-xs">
            <span className="text-[10px] font-mono uppercase tracking-widest text-bronze-accent">Explore</span>
            <a href="#selected-work" className="hover:text-stone-paper transition-colors">
              Selected Work
            </a>
            <a href="#process-story" className="hover:text-stone-paper transition-colors">
              Design Process
            </a>
            <a href="#about-section" className="hover:text-stone-paper transition-colors">
              About
            </a>
            <a href="#services-section" className="hover:text-stone-paper transition-colors">
              Capabilities
            </a>
            <a href="#materials-section" className="hover:text-stone-paper transition-colors">
              Material Moodboard
            </a>
          </div>

          {/* Instagram QR Code Dispatch Card */}
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-bronze-accent">
              Instagram QR
            </span>
            <a
              href="https://www.instagram.com/rsdesign477?stkn=MTJrZzVsdHQyaHMxZA%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex flex-col items-center self-start p-3 bg-[#151413] border border-[#262421] hover:border-bronze-accent/60 rounded-2xl transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              title="Scan or click to visit @rsdesign477 on Instagram"
              data-cursor="INSTAGRAM"
            >
              <div className="w-28 sm:w-32 aspect-square overflow-hidden rounded-xl bg-white p-2 flex items-center justify-center shadow-md">
                <img
                  src="/rsdesign477_qr_instagram.png"
                  alt="RS Design Instagram QR Code"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="mt-2.5 flex flex-col items-center space-y-0.5 text-center">
                <span className="text-xs font-mono text-stone-light group-hover:text-bronze-accent transition-colors flex items-center gap-1 font-medium">
                  <span>@rsdesign477</span>
                  <span className="text-bronze-accent text-xs">↗</span>
                </span>
                <span className="text-[9px] font-mono text-stone-muted uppercase tracking-wider">
                  Scan to Follow
                </span>
              </div>
            </a>
          </div>

          {/* Back to top button */}
          <div className="flex items-start">
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-stone-muted hover:text-bronze-accent transition-colors py-2.5 px-4 rounded-full border border-[#2A2825] hover:border-bronze-accent/40 bg-[#161514] cursor-pointer"
              data-cursor="TOP"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Brand Statement */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div>
            <span>© 2026 RS DESIGN. Lucknow, India. All rights reserved.</span>
          </div>

          {/* Exact Brand Tagline */}
          <div className="text-center sm:text-right font-serif italic text-[#C2BEB6]">
            Designing spaces. Defining experiences.
          </div>
        </div>
      </div>
    </footer>
  );
};
