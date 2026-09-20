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
            <div className="flex items-center space-x-3.5">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="RS Design Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.22em] text-lg text-stone-paper font-normal uppercase leading-tight">
                  RS DESIGN
                </span>
                <span className="text-[9px] font-mono tracking-[0.25em] text-bronze-accent uppercase mt-0.5">
                  Spatial Architecture & CGI
                </span>
              </div>
            </div>

            <div className="space-y-1 font-sans text-xs text-[#C2BEB6] font-light">
              <p>Architecture & Masterplanning</p>
              <p>Interior Architecture</p>
              <p>Photorealistic 8K Visualization</p>
            </div>
            <p className="text-[11px] text-[#6E6B65] pt-1 leading-relaxed">
              Transforming abstract spatial ideas into thoroughly articulated living environments.
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
              className="group block p-2 bg-[#171615] border border-[#2A2825] hover:border-bronze-accent/60 rounded-xl transition-all duration-300 shadow-lg"
              title="Scan or click to visit @rsdesign477 on Instagram"
              data-cursor="INSTAGRAM"
            >
              <div className="w-24 sm:w-28 aspect-square overflow-hidden rounded-lg bg-white p-1">
                <img
                  src="/rsdesign477_qr_instagram.png"
                  alt="RS Design Instagram QR Code"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="mt-1.5 text-center">
                <span className="text-[10px] font-mono text-stone-muted group-hover:text-bronze-accent transition-colors block">
                  @rsdesign477 ↗
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
            <span>© 2026 RS DESIGN. All rights reserved.</span>
          </div>

          {/* Exact Brand statement from prompt */}
          <div className="text-center sm:text-right font-serif italic text-[#C2BEB6]">
            Designing spaces. Visualizing ideas. Creating experiences.
          </div>
        </div>
      </div>
    </footer>
  );
};
