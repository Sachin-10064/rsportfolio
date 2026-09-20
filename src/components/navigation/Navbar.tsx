import React, { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#selected-work' },
    { label: 'Process', href: '#process-story' },
    { label: 'About', href: '#about-section' },
    { label: 'Services', href: '#services-section' },
    { label: 'Materials', href: '#materials-section' },
    { label: 'Contact', href: '#contact-section' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'py-4 bg-warm-dark/85 backdrop-blur-md border-b border-[#2C2A27]/60'
          : 'py-6 md:py-8 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Identity */}

          <a
            href="#"
            className="group flex items-center space-x-3.5"
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
                Architecture • Interior • 3D
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-xs tracking-[0.2em] uppercase text-[#C2BEB6] hover:text-stone-paper transition-colors font-sans relative py-1 group"
                data-cursor="SELECT"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-bronze-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Right Action / CTA & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              id="nav-start-project-btn"
              onClick={onStartProject}
              className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 rounded-full border border-[#3E3A34] hover:border-bronze-accent bg-warm-stone/60 hover:bg-bronze-accent text-stone-light hover:text-warm-dark text-[11px] font-sans font-medium tracking-wider uppercase transition-all duration-300"
              data-cursor="INQUIRE"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-light hover:text-bronze-accent focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-fullscreen-drawer"
          className="fixed inset-0 z-40 bg-warm-dark flex flex-col justify-between p-8 md:hidden animate-in fade-in duration-300"
        >
          <div className="pt-24 flex flex-col space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase text-bronze-accent">
              Navigation
            </span>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left font-serif text-3xl font-light tracking-wide text-stone-light hover:text-bronze-accent transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="border-t border-[#2C2A27] pt-6 flex flex-col space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onStartProject();
              }}
              className="w-full py-3.5 rounded-lg bg-bronze-accent text-warm-dark font-sans text-xs font-semibold tracking-widest uppercase flex items-center justify-center space-x-2"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex justify-between text-xs text-stone-muted pt-2 font-mono">
              <span>rsdesign@gmail.com</span>
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
