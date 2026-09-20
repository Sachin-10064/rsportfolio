import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/servicesData';
import { ArrowUpRight, Plus, Minus, Check } from 'lucide-react';

interface ServicesSectionProps {
  onStartProject: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProject }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="services-section"
      className="relative w-full bg-warm-dark py-28 md:py-40 px-6 md:px-14 border-b border-[#22201D]"
      aria-label="Services & Capabilities"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">
                03 — CAPABILITIES
              </span>
              <div className="h-px w-16 bg-[#2C2A27]" />
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-stone-paper uppercase leading-none">
              What We <span className="italic text-bronze-accent">Do</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-stone-muted font-light leading-relaxed">
            From initial architectural sketches and programmatic zoning to photorealistic 8K visualizations and construction detailing.
          </p>
        </div>

        {/* Editorial Service List (Large numbers, typography-led) */}
        <div className="divide-y divide-[#262422] border-y border-[#262422]">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.number}
                className="py-10 md:py-16 group transition-colors duration-300"
              >
                <div
                  onClick={() => toggleExpand(index)}
                  className="cursor-pointer flex flex-col md:flex-row md:items-baseline justify-between gap-6"
                  data-cursor="EXPAND"
                >
                  {/* Big Number & Service Title */}
                  <div className="flex items-baseline space-x-6 md:space-x-12">
                    <span className="font-mono text-xl md:text-2xl text-bronze-accent font-light">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-stone-paper uppercase group-hover:text-bronze-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-mono text-stone-muted tracking-widest uppercase mt-2">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Summary snippet & Expand Indicator */}
                  <div className="flex items-center space-x-6 md:max-w-md pl-14 md:pl-0">
                    <p className="text-xs md:text-sm text-[#C2BEB6] font-light line-clamp-2 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="p-3 rounded-full border border-[#2C2A27] group-hover:border-bronze-accent text-stone-muted group-hover:text-bronze-accent transition-colors shrink-0">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Architectural Deliverables & Software Stack */}
                {isExpanded && (
                  <div className="mt-8 pl-0 md:pl-24 pt-8 border-t border-[#22201D] grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
                    <div className="lg:col-span-8 space-y-4">
                      <h4 className="text-xs font-mono text-bronze-accent uppercase tracking-wider">
                        Key Deliverables & Scope
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start space-x-2.5 text-xs text-[#C2BEB6]">
                            <Check className="w-4 h-4 text-bronze-accent shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-4 space-y-4">
                      <h4 className="text-xs font-mono text-bronze-accent uppercase tracking-wider">
                        Software & Technical Pipeline
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.software.map((sw) => (
                          <span
                            key={sw}
                            className="px-3 py-1 rounded-md text-[10px] font-mono tracking-wider uppercase bg-warm-stone border border-[#2C2A27] text-stone-muted"
                          >
                            {sw}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2">
                        <button
                          onClick={onStartProject}
                          className="inline-flex items-center space-x-2 text-xs font-medium uppercase tracking-widest text-stone-light hover:text-bronze-accent transition-colors"
                        >
                          <span>Inquire regarding {service.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
