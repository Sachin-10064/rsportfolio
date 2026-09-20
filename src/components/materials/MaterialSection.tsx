import React, { useState } from 'react';
import { MATERIALS_DATA } from '../../data/materialsData';
import { MaterialItem } from '../../types';
import { Sparkles, Info, X } from 'lucide-react';

export const MaterialSection: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialItem | null>(null);

  return (
    <section
      id="materials-section"
      className="relative w-full bg-warm-dark py-28 md:py-40 px-6 md:px-14 border-b border-[#22201D]"
      aria-label="Material & Detail Moodboard"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">
                05 — TACTILITY & SPECIFICATION
              </span>
              <div className="h-px w-16 bg-[#2C2A27]" />
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-stone-paper uppercase leading-none">
              Material <span className="italic text-bronze-accent">Moodboard</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-stone-muted font-light leading-relaxed">
            Architecture is fundamentally an assembly of physical matter. We interrogate the sensory qualities of natural stone, grain, and metals under changing sunlight.
          </p>
        </div>

        {/* 6-Item Architectural Material Grid (Macro renders & minimal overlays) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {MATERIALS_DATA.map((mat) => (
            <article
              key={mat.id}
              onClick={() => setSelectedMaterial(mat)}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-warm-stone aspect-4/5 border border-[#262422] hover:border-bronze-accent/60 transition-all duration-300"
              data-cursor="INSPECT"
            >
              {/* Macro Texture Image */}
              <img
                src={mat.imageUrl}
                alt={mat.name}
                loading="lazy"
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Architectural Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-warm-dark/90 via-warm-dark/20 to-transparent transition-opacity" />

              {/* Minimal Top Code */}
              <div className="absolute top-5 left-5 px-3 py-1 rounded-full bg-warm-dark/80 backdrop-blur-md border border-[#2C2A27] text-[10px] font-mono tracking-widest text-bronze-accent">
                {mat.code}
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono tracking-widest text-stone-muted uppercase mb-1">
                  {mat.category}
                </span>
                <h3 className="font-serif text-2xl font-normal text-stone-paper uppercase tracking-wide group-hover:text-bronze-accent transition-colors">
                  {mat.name}
                </h3>
                <p className="mt-2 text-xs text-stone-muted line-clamp-2 font-light leading-relaxed">
                  {mat.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#2C2A27] flex items-center justify-between text-[10px] font-mono text-[#6E6B65]">
                  <span>{mat.finish}</span>
                  <span className="text-bronze-accent uppercase">Inspect Specs ↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Tactile Material Detail Drawer / Modal */}
        {selectedMaterial && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedMaterial(null)}
          >
            <div
              className="bg-[#171615] border border-[#2E2C29] rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMaterial(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#252320] text-stone-muted hover:text-stone-light"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video rounded-lg overflow-hidden mb-6 bg-warm-dark">
                <img
                  src={selectedMaterial.imageUrl}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">
                {selectedMaterial.code} • {selectedMaterial.category}
              </span>
              <h3 className="font-serif text-3xl text-stone-paper uppercase mt-1">
                {selectedMaterial.name}
              </h3>

              <p className="mt-4 text-sm text-[#C2BEB6] font-light leading-relaxed">
                {selectedMaterial.description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#262422] grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-stone-muted block uppercase text-[10px]">Finish Specification</span>
                  <span className="text-stone-light mt-1 block">{selectedMaterial.finish}</span>
                </div>
                <div>
                  <span className="text-stone-muted block uppercase text-[10px]">Provenance / Origin</span>
                  <span className="text-stone-light mt-1 block">{selectedMaterial.origin}</span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded bg-[#1F1E1B] border border-[#2E2C28] text-xs text-stone-muted">
                <strong className="text-bronze-accent font-medium block mb-1">Architectural Sensory Note:</strong>
                {selectedMaterial.textureNote}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
