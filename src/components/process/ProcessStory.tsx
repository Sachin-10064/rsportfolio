import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, Compass, Layout, Palette, Eye, FileCheck } from 'lucide-react';

interface ProcessStep {
  step: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: React.ElementType;
  image: string;
  badge: string;
}

export const ProcessStory: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [selectedTransform, setSelectedTransform] = useState<number>(2);

  // The 5 Core Stages of the RS DESIGN Process
  const processSteps: ProcessStep[] = [
    {
      step: '01',
      name: 'Discover',
      tagline: 'Requirements, Lifestyle & Site Analysis',
      description: 'Understanding your requirements, lifestyle, site and design expectations.',
      highlights: [
        'Comprehensive Client Briefing',
        'Lifestyle & Living Rituals Analysis',
        'Site Orientation & Micro-climate Study',
        'Design Vision & Scope Definition'
      ],
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
      badge: 'Discovery & Consultation'
    },
    {
      step: '02',
      name: 'Plan',
      tagline: 'Functional Layouts & Spatial Planning',
      description: 'Developing functional layouts and efficient spatial planning.',
      highlights: [
        'Functional Floor Plan Formulations',
        'Circulation & Movement Efficiency',
        'Zoning & Room Adjacencies',
        'Natural Daylight & Sightline Planning'
      ],
      icon: Layout,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      badge: 'Layouts & Architecture'
    },
    {
      step: '03',
      name: 'Design',
      tagline: 'Architectural Language, Materials & Detailing',
      description: 'Creating the architectural language, materials, colours, furniture and details.',
      highlights: [
        'Architectural Identity & Form',
        'Sensory Material & Texture Palette',
        'Bespoke Joinery & Millwork Detailing',
        'Colour Harmony & Circadian Lighting'
      ],
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      badge: 'Aesthetics & Interior Craft'
    },
    {
      step: '04',
      name: 'Visualize',
      tagline: 'Realistic 3D Views & Visual Experience',
      description: 'Developing realistic 3D views to help you experience the proposed design.',
      highlights: [
        'Photorealistic 8K Still Renders',
        'Natural Sun Path & Shadow Simulation',
        'Exterior Facade & Interior Mood Studies',
        'Cinematic Architectural Walkthroughs'
      ],
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      badge: '3D CGI Visualization'
    },
    {
      step: '05',
      name: 'Deliver',
      tagline: 'Final Design, Drawings & Documentation',
      description: 'Presenting the final design with drawings, visualizations and supporting documentation.',
      highlights: [
        'Complete 2D Working Drawing Packages',
        'High-Resolution 3D Presentation Portfolio',
        'Technical Elevations, Sections & Schedules',
        'Seamless Execution Handover'
      ],
      icon: FileCheck,
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      badge: 'Handover & Documentation'
    }
  ];

  // 3-way Transformation Progression (Plan → Clay → Final Render)
  const transformStages = [
    {
      id: 'plan',
      label: '01. 2D Drafting & Plan',
      title: 'Architectural Floor Plan & Sightlines',
      description: 'Orthographic 2D documentation specifying load-bearing walls, circulation routes, and room alignments.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      badge: 'CAD / BIM'
    },
    {
      id: 'clay',
      label: '02. 3D Clay Wireframe',
      title: 'Digital Massing & Ambient Occlusion',
      description: 'Monochromatic clay massing to evaluate ceiling proportions, sunlight penetration, and shadow volumes without color bias.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      badge: 'CLAY MASSING'
    },
    {
      id: 'final',
      label: '03. Photorealistic Render',
      title: 'Global Illumination & PBR Shading',
      description: 'Final raytraced visualization integrating photorealistic textures, micro-reflections, and warm ambient lighting.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      badge: 'PHOTOREALISTIC 3D'
    }
  ];

  const currentStep = processSteps[activeStepIndex];
  const StepIcon = currentStep.icon;

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % processSteps.length);
  };

  const handlePrevStep = () => {
    setActiveStepIndex((prev) => (prev - 1 + processSteps.length) % processSteps.length);
  };

  return (
    <section
      id="process-story"
      className="relative w-full bg-warm-dark py-28 md:py-40 px-6 md:px-14 border-b border-[#22201D]"
      aria-label="Design Process"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">
                02 — DESIGN PROCESS
              </span>
              <div className="h-px w-16 bg-[#2C2A27]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-stone-paper uppercase leading-none">
              From Idea <br />
              <span className="italic text-bronze-accent">To Reality.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm text-stone-muted font-light leading-relaxed">
            Every project develops through five structured phases — translating your vision into functional planning, refined aesthetics, realistic 3D visualization, and complete execution documentation.
          </p>
        </div>

        {/* 5-Step Process Timeline Selector */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {processSteps.map((item, idx) => {
              const ItemIcon = item.icon;
              const isActive = activeStepIndex === idx;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 md:p-5 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'bg-[#22201D] border-bronze-accent shadow-xl ring-1 ring-bronze-accent/40'
                      : 'bg-[#171615] border-[#262422] hover:border-[#383531] hover:bg-[#1C1B19]'
                  }`}
                  data-cursor="SELECT"
                >
                  <div className="w-full">
                    <div className="flex items-center justify-between text-xs font-mono mb-3">
                      <span className={isActive ? 'text-bronze-accent font-semibold' : 'text-[#6E6B65]'}>
                        {item.step}
                      </span>
                      <ItemIcon
                        className={`w-4 h-4 transition-colors ${
                          isActive ? 'text-bronze-accent' : 'text-stone-muted'
                        }`}
                      />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg text-stone-paper uppercase tracking-wide">
                      {item.name}
                    </h3>
                  </div>

                  <p className="mt-3 text-[11px] text-stone-muted font-light line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Deep-Dive Showcase Card */}
        <div className="mb-24 p-6 sm:p-10 md:p-12 rounded-2xl bg-[#171615] border border-[#262422] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Stage Visual */}
            <div className="lg:col-span-6 relative aspect-16/10 rounded-xl overflow-hidden bg-warm-dark group">
              <img
                src={currentStep.image}
                alt={`${currentStep.name} - RS DESIGN`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-warm-dark/85 backdrop-blur-md border border-[#2C2A27] text-[10px] font-mono tracking-widest text-bronze-accent uppercase">
                {currentStep.badge}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-stone-light/90">
                <span className="tracking-widest uppercase">STAGE {currentStep.step} OF 05</span>
                <span className="text-bronze-accent">{currentStep.name.toUpperCase()}</span>
              </div>
            </div>

            {/* Right: Stage Detail & Deliverables */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 text-xs font-mono text-bronze-accent tracking-widest uppercase mb-2">
                  <StepIcon className="w-3.5 h-3.5" />
                  <span>PHASE {currentStep.step} — {currentStep.name.toUpperCase()}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-stone-paper uppercase leading-tight">
                  {currentStep.name}
                </h3>

                <p className="text-xs font-mono text-stone-muted tracking-widest uppercase mt-1">
                  {currentStep.tagline}
                </p>
              </div>

              <p className="text-sm md:text-base text-[#C2BEB6] font-light leading-relaxed">
                {currentStep.description}
              </p>

              {/* Highlights Checklist */}
              <div className="pt-2 border-t border-[#262422]">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-stone-muted mb-3">
                  Scope &amp; Key Focus Points:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStep.highlights.map((point, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-stone-light">
                      <Check className="w-3.5 h-3.5 text-bronze-accent shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 flex items-center justify-between border-t border-[#262422]">
                <button
                  onClick={handlePrevStep}
                  className="inline-flex items-center space-x-2 text-xs font-mono text-stone-muted hover:text-stone-light uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center space-x-1.5">
                  {processSteps.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveStepIndex(dotIdx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeStepIndex === dotIdx
                          ? 'w-6 bg-bronze-accent'
                          : 'w-1.5 bg-[#2E2C28] hover:bg-stone-muted'
                      }`}
                      aria-label={`Go to step ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextStep}
                  className="inline-flex items-center space-x-2 text-xs font-mono text-bronze-accent hover:text-stone-light uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Transformation Showcase (Plan → Clay → Photorealistic) */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#171615] border border-[#262422]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-[#262422] gap-4">
            <div>
              <span className="text-xs font-mono text-bronze-accent uppercase tracking-wider block">
                SPATIAL EVOLUTION
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
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
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
                  className="inline-flex items-center space-x-2 text-xs font-mono text-bronze-accent hover:text-stone-light tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <span>Advance Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessStory;
