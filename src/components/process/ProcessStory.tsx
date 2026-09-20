import React, { useState } from 'react';
import { PROCESS_STAGES } from '../../data/servicesData';
import { ArrowRight, Sliders, Layers, Sparkles, Compass } from 'lucide-react';

export const ProcessStory: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // For split comparison slider

  // 3-way transformation stages for interactive demonstration
  const transformStages = [
    {
      id: 'plan',
      label: '01. 2D Drafting & Plan',
      title: 'Architectural Floor Plan & Sightlines',
      description: 'Orthographic 2D documentation specifying load-bearing shear walls, pocket doors, glazing alignments, and clear internal circulation routes.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      badge: 'CAD / BIM'
    },
    {
      id: 'clay',
      label: '02. 3D Clay Wireframe',
      title: 'Digital Massing & Ambient Occlusion',
      description: 'Untextured monochromatic clay model deployed in 3ds Max/Rhino to evaluate ceiling proportions, sunlight penetration, and shadow volumes without color bias.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      badge: 'CLAY MASSING'
    },
    {
      id: 'final',
      label: '03. Photorealistic Render',
      title: 'Global Illumination & PBR Shading',
      description: 'Final multi-bounce raytraced CGI integrating photogrammetric travertine textures, micro-reflections, warm 2700K lighting, and atmospheric dust motes.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      badge: '8K CORONA CGI'
    }
  ];

  const [selectedTransform, setSelectedTransform] = useState<number>(2);

  return (
    <section
      id="process-story"
      className="relative w-full bg-warm-dark py-28 md:py-40 px-6 md:px-14 border-b border-[#22201D]"
      aria-label="Architecture to Visualization Story"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">
                02 — THE METHODOLOGY
              </span>
              <div className="h-px w-16 bg-[#2C2A27]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-stone-paper uppercase leading-none">
              From Plan <br />
              <span className="italic text-bronze-accent">To Place.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-stone-muted font-light leading-relaxed">
            Witness how an abstract client idea transforms through disciplined 2D spatial geometry and 3D digital massing into tangible, hyper-realistic architecture.
          </p>
        </div>

        {/* Part 1: Interactive Transformation Showcase */}
        <div className="mb-24 p-6 sm:p-10 rounded-2xl bg-[#171615] border border-[#262422]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#262422] gap-4">
            <div>
              <span className="text-xs font-mono text-bronze-accent uppercase tracking-wider block">
                INTERACTIVE COMPARISON
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-stone-paper mt-1">
                2D Floor Plan → 3D Model → Final Render
              </h3>
            </div>

            {/* Stage Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {transformStages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => setSelectedTransform(idx)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                    selectedTransform === idx
                      ? 'bg-stone-light text-warm-dark font-semibold'
                      : 'bg-[#1F1E1B] text-stone-muted hover:text-stone-light border border-[#2E2C28]'
                  }`}
                  data-cursor="SWITCH"
                >
                  {stage.label}
                </button>
              ))}
            </div>
          </div>

          {/* Transformation Stage Visual */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 relative aspect-16/10 rounded-xl overflow-hidden bg-warm-dark">
              <img
                src={transformStages[selectedTransform].image}
                alt={transformStages[selectedTransform].title}
                className="w-full h-full object-cover transition-all duration-500"
                style={{
                  filter:
                    selectedTransform === 0
                      ? 'grayscale(100%) contrast(150%) brightness(85%)'
                      : selectedTransform === 1
                      ? 'grayscale(80%) brightness(105%) contrast(110%)'
                      : 'contrast(102%) brightness(96%)'
                }}
              />

              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-warm-dark/80 backdrop-blur-md border border-[#2C2A27] text-[10px] font-mono tracking-widest text-bronze-accent uppercase">
                {transformStages[selectedTransform].badge}
              </div>

              {/* Interactive Split Indicator */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-warm-dark/75 backdrop-blur-xs text-[11px] font-mono text-stone-light">
                STAGE {selectedTransform + 1} OF 3
              </div>
            </div>

            {/* Stage Narrative Description */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
              <span className="text-xs font-mono text-bronze-accent uppercase tracking-widest">
                Stage {selectedTransform + 1}
              </span>
              <h4 className="font-serif text-2xl text-stone-paper">
                {transformStages[selectedTransform].title}
              </h4>
              <p className="text-xs text-[#C2BEB6] font-light leading-relaxed">
                {transformStages[selectedTransform].description}
              </p>

              <div className="pt-4 flex items-center space-x-3">
                <button
                  onClick={() => setSelectedTransform((prev) => (prev + 1) % 3)}
                  className="inline-flex items-center space-x-2 text-xs font-mono text-bronze-accent hover:text-stone-light tracking-wider uppercase transition-colors"
                >
                  <span>Advance Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Visual 7-Step Process Chain (Idea → 2D Plan → Spatial Design → Materials → Lighting → 3D Visualization → Final Space) */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-xs font-mono text-stone-muted tracking-widest uppercase">
              THE COMPLETE 7-PHASE PIPELINE
            </span>
            <div className="h-px flex-1 bg-[#22201D]" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {PROCESS_STAGES.map((stage, idx) => (
              <div
                key={stage.step}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-4 rounded-xl cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                  activeStageIndex === idx
                    ? 'bg-[#22201D] border-bronze-accent shadow-lg'
                    : 'bg-[#171615] border-[#262422] hover:border-[#383531]'
                }`}
                data-cursor="STAGE"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                    <span className={activeStageIndex === idx ? 'text-bronze-accent' : 'text-[#6E6B65]'}>
                      {stage.step}
                    </span>
                    {idx < PROCESS_STAGES.length - 1 && (
                      <span className="text-[#3E3A34] text-xs">→</span>
                    )}
                  </div>
                  <h4 className="font-serif text-sm font-normal text-stone-paper uppercase tracking-wide">
                    {stage.name}
                  </h4>
                </div>
                <span className="text-[9px] font-mono text-stone-muted mt-3 line-clamp-1">
                  {stage.category}
                </span>
              </div>
            ))}
          </div>

          {/* Active Phase Deep Dive */}
          <div className="mt-8 p-8 rounded-2xl bg-[#171615]/70 border border-[#262422] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 aspect-4/3 rounded-lg overflow-hidden bg-warm-dark">
              <img
                src={PROCESS_STAGES[activeStageIndex].image}
                alt={PROCESS_STAGES[activeStageIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-8 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-xs font-mono text-bronze-accent mb-1">
                <span>STAGE {PROCESS_STAGES[activeStageIndex].step}</span>
                <span>/</span>
                <span>{PROCESS_STAGES[activeStageIndex].category}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-paper uppercase">
                {PROCESS_STAGES[activeStageIndex].title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#C2BEB6] font-light leading-relaxed">
                {PROCESS_STAGES[activeStageIndex].description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#262422] flex items-center space-x-3 text-xs font-mono">
                <span className="text-stone-muted uppercase">Deliverable:</span>
                <span className="text-stone-light">{PROCESS_STAGES[activeStageIndex].deliverable}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
