import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { ContactFormData } from '../../types';

interface ContactSectionProps {
  inquiryOpen: boolean;
  onOpenInquiry: () => void;
  onCloseInquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  inquiryOpen,
  onOpenInquiry,
  onCloseInquiry,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Architecture & Construction',
    projectLocation: '',
    approxScale: '5,000 - 15,000 sq ft',
    timeline: 'Immediate / Next 3 Months',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onCloseInquiry();
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'Architecture & Construction',
      projectLocation: '',
      approxScale: '5,000 - 15,000 sq ft',
      timeline: 'Immediate / Next 3 Months',
      message: '',
    });
  };

  return (
    <section
      id="contact-section"
      className="relative w-full bg-warm-dark py-28 md:py-40 px-6 md:px-14 border-b border-[#22201D]"
      aria-label="Contact RS Design"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12 md:mb-16">
          <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">
            06 — COMMISSIONS & INQUIRIES
          </span>
          <div className="h-px w-16 bg-[#2C2A27]" />
        </div>

        {/* Big Editorial Heading */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-stone-paper uppercase leading-[0.95] tracking-tight">
            Have A Space <br />
            <span className="italic text-bronze-accent">In Mind?</span>
          </h2>
          <p className="mt-8 text-base md:text-xl text-[#C2BEB6] font-light leading-relaxed">
            Let's turn the idea into something real.
          </p>

          <div className="mt-10">
            <button
              id="contact-start-project-cta"
              onClick={onOpenInquiry}
              className="group inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-bronze-accent hover:bg-[#D4AB76] text-warm-dark font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 shadow-xl"
              data-cursor="START ↗"
            >
              <span>Start A Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Architectural Contact Information Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#262422]">
          {/* Email */}
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-stone-muted uppercase flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-bronze-accent" />
              <span>Direct Email</span>
            </span>
            <a
              href="mailto:rsdesign@gmail.com"
              className="font-serif text-lg text-stone-light hover:text-bronze-accent transition-colors"
              data-cursor="EMAIL"
            >
              rsdesign@gmail.com
            </a>
            <span className="text-xs text-[#6E6B65]">Response within 24 business hours</span>
          </div>

          {/* Phone */}
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-stone-muted uppercase flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-bronze-accent" />
              <span>Direct Line</span>
            </span>
            <a
              href="tel:+911149823100"
              className="font-serif text-lg text-stone-light hover:text-bronze-accent transition-colors font-mono"
            >
              +91 (0) 11 4982 3100
            </a>
            <span className="text-xs text-[#6E6B65]">Mon – Fri, 10:00 – 19:00 IST</span>
          </div>

          {/* Location */}
          {/* <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-stone-muted uppercase flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-bronze-accent" />
              <span> Atelier</span>
            </span>
            <span className="font-serif text-lg text-stone-light">
              New Delhi, India
            </span>
            <span className="text-xs text-[#6E6B65]">Available for global commissions</span>
          </div> */}

          {/* Social & Messaging */}
          <div className="flex flex-col space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-stone-muted uppercase flex items-center space-x-2">
              <svg className="w-3.5 h-3.5 text-bronze-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Social & Dispatch</span>
            </span>
            <div className="flex items-center space-x-4 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono uppercase text-stone-light hover:text-bronze-accent transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href="https://wa.me/911149823100"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono uppercase text-stone-light hover:text-bronze-accent transition-colors"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Project Inquiry Drawer / Modal */}
      {inquiryOpen && (
        <div
          id="project-inquiry-modal"
          className="fixed inset-0 z-110 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
          onClick={onCloseInquiry}
        >
          <div
            className="bg-[#171615] border border-[#2E2C29] rounded-2xl max-w-2xl w-full p-6 sm:p-10 relative shadow-2xl my-8 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onCloseInquiry}
              className="absolute top-6 right-6 text-xs font-mono uppercase text-stone-muted hover:text-stone-light"
            >
              [Close Esc]
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">
                    PROJECT INTAKE
                  </span>
                  <h3 className="font-serif text-3xl text-stone-paper uppercase mt-1">
                    Commission RS Design
                  </h3>
                  <p className="text-xs text-stone-muted mt-1 font-light">
                    Provide brief details regarding your site, spatial scope, and aspirations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-stone-muted mb-1.5">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Arjun Mehra"
                      className="w-full bg-warm-dark border border-[#2E2C29] rounded-lg px-3.5 py-2.5 text-xs text-stone-light focus:outline-hidden focus:border-bronze-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-stone-muted mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arjun@example.com"
                      className="w-full bg-warm-dark border border-[#2E2C29] rounded-lg px-3.5 py-2.5 text-xs text-stone-light focus:outline-hidden focus:border-bronze-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-stone-muted mb-1.5">
                      Service Scope
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-warm-dark border border-[#2E2C29] rounded-lg px-3.5 py-2.5 text-xs text-stone-light focus:outline-hidden focus:border-bronze-accent"
                    >
                      <option>Architecture & Construction</option>
                      <option>Luxury Interior Design</option>
                      <option>3D Photorealistic CGI Visualization</option>
                      <option>Commercial / Hospitality Design</option>
                      <option>Full Turnkey Execution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-stone-muted mb-1.5">
                      Project Location (City / Country)
                    </label>
                    <input
                      type="text"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="e.g. New Delhi, Dubai, London"
                      className="w-full bg-warm-dark border border-[#2E2C29] rounded-lg px-3.5 py-2.5 text-xs text-stone-light focus:outline-hidden focus:border-bronze-accent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-stone-muted mb-1.5">
                      Approximate Scale
                    </label>
                    <select
                      value={formData.approxScale}
                      onChange={(e) => setFormData({ ...formData, approxScale: e.target.value })}
                      className="w-full bg-warm-dark border border-[#2E2C29] rounded-lg px-3.5 py-2.5 text-xs text-stone-light focus:outline-hidden focus:border-bronze-accent"
                    >
                      <option>Under 3,000 sq ft</option>
                      <option>3,000 - 8,000 sq ft</option>
                      <option>8,000 - 15,000 sq ft</option>
                      <option>15,000+ sq ft / Estate / Masterplan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-stone-muted mb-1.5">
                      Anticipated Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-warm-dark border border-[#2E2C29] rounded-lg px-3.5 py-2.5 text-xs text-stone-light focus:outline-hidden focus:border-bronze-accent"
                    >
                      <option>Immediate / Next 1-3 Months</option>
                      <option>3 - 6 Months</option>
                      <option>Future Planning / Next Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-stone-muted mb-1.5">
                    Project Vision or Brief Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the site, materials you gravitate towards, or visualization requirements..."
                    className="w-full bg-warm-dark border border-[#2E2C29] rounded-lg p-3 text-xs text-stone-light focus:outline-hidden focus:border-bronze-accent"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#6E6B65]">
                    Encrypted submission to partners
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-bronze-accent text-warm-dark text-xs font-semibold uppercase tracking-widest hover:bg-[#D4AB76] transition-colors"
                  >
                    Submit Project Inquiry ↗
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-bronze-accent/20 text-bronze-accent flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-3xl text-stone-paper uppercase">
                  Inquiry Received
                </h3>
                <p className="text-xs text-[#C2BEB6] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-stone-light">{formData.name}</strong>. The partners at RS Design will review your project brief for {formData.serviceType} in {formData.projectLocation || 'your region'} and contact you within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-[#2C2A27] text-xs font-mono uppercase text-stone-light hover:border-bronze-accent"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
