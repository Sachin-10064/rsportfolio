import React, { useState } from 'react';
import { Project, ProjectCategory } from '../../types';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ArrowUpRight, Eye, Layers } from 'lucide-react';

interface ProjectSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Architecture',
    'Interior Design',
    '3D Visualization',
    'Drawings'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section
      id="selected-work"
      className="relative w-full bg-warm-dark py-28 md:py-40 px-6 md:px-14 border-b border-[#22201D]"
      aria-label="Selected Projects Portfolio"
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">01 — PORTFOLIO</span>
              <div className="h-px w-16 bg-[#2C2A27]" />
            </div>
            <h2 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-stone-paper uppercase leading-none">
              Selected <span className="italic text-bronze-accent">Work</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs tracking-wider uppercase transition-all duration-200 ${activeCategory === cat
                    ? 'bg-stone-light text-warm-dark font-semibold shadow-lg'
                    : 'bg-warm-stone text-stone-muted hover:text-stone-light hover:bg-[#252320] border border-[#2A2825]'
                  }`}
                data-cursor="FILTER"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Architectural Rhythms Grid */}
        <div className="space-y-28 md:space-y-40">
          {filteredProjects.map((project, index) => {
            // Alternating Layout Logic as specified in prompt:
            // index 0: Large image — left aligned
            // index 1: Smaller image — right aligned
            // index 2: Full-width cinematic image
            // index 3+: Asymmetric duo
            const rhythmType = index % 4;

            if (rhythmType === 2) {
              // Full-width cinematic image layout
              return (
                <article
                  key={project.id}
                  id={`project-item-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="group relative cursor-pointer"
                  data-cursor="VIEW ↗"
                >
                  <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden rounded-xl bg-warm-stone">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-warm-dark via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Overlay Metadata */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
                      <div className="max-w-2xl">
                        <div className="flex items-center space-x-3 text-xs font-mono text-bronze-accent mb-2">
                          <span>{project.id}</span>
                          <span>/</span>
                          <span>{project.location}</span>
                          <span>/</span>
                          <span>{project.year}</span>
                        </div>
                        <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-stone-paper uppercase group-hover:text-bronze-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-xs md:text-sm text-[#C2BEB6] line-clamp-2 max-w-xl font-light">
                          {project.brief}
                        </p>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex flex-wrap gap-2">
                          {project.disciplines.map((d) => (
                            <span
                              key={d}
                              className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider bg-warm-dark/80 border border-[#2C2A27] text-stone-muted"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                        <div className="w-12 h-12 rounded-full bg-stone-light text-warm-dark flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            if (rhythmType === 1) {
              // Smaller image — right aligned
              return (
                <article
                  key={project.id}
                  id={`project-item-${project.id}`}
                  onClick={() => onSelectProject(project)}
                  className="group relative cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                  data-cursor="VIEW ↗"
                >
                  {/* Metadata on Left */}
                  <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
                    <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">
                      {project.id} — {project.category}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-stone-paper uppercase mt-3 group-hover:text-bronze-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs text-stone-muted font-mono tracking-wider mt-2">
                      {project.location} • {project.year} • {project.area}
                    </div>

                    <p className="mt-6 text-sm text-[#C2BEB6] font-light leading-relaxed">
                      {project.brief}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.disciplines.map((d) => (
                        <span
                          key={d}
                          className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider bg-warm-stone border border-[#2C2A27] text-stone-muted"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center space-x-2 text-xs font-medium uppercase tracking-widest text-bronze-accent group-hover:translate-x-1 transition-transform">
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Right Aligned Compact Image Container */}
                  <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-xl bg-warm-stone aspect-4/3 relative">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-warm-dark/80 backdrop-blur-xs text-[10px] font-mono text-stone-light border border-[#2C2A27]">
                      {project.status}
                    </div>
                  </div>
                </article>
              );
            }

            // rhythmType 0 & 3: Large image — left aligned or asymmetric
            return (
              <article
                key={project.id}
                id={`project-item-${project.id}`}
                onClick={() => onSelectProject(project)}
                className="group relative cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                data-cursor="VIEW ↗"
              >
                {/* Left Large Image */}
                <div className="lg:col-span-8 overflow-hidden rounded-xl bg-warm-stone aspect-16/10 relative">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-warm-dark/80 backdrop-blur-xs text-[10px] font-mono text-stone-light border border-[#2C2A27]">
                    {project.status}
                  </div>
                </div>

                {/* Right Metadata */}
                <div className="lg:col-span-4 flex flex-col justify-center">
                  <span className="text-xs font-mono text-bronze-accent tracking-widest uppercase">
                    {project.id} — {project.category}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-stone-paper uppercase mt-3 group-hover:text-bronze-accent transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs text-stone-muted font-mono tracking-wider mt-2">
                    {project.location} • {project.year} • {project.area}
                  </div>

                  <p className="mt-6 text-sm text-[#C2BEB6] font-light leading-relaxed">
                    {project.brief}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.disciplines.map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider bg-warm-stone border border-[#2C2A27] text-stone-muted"
                      >
                        {d}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center space-x-2 text-xs font-medium uppercase tracking-widest text-bronze-accent group-hover:translate-x-1 transition-transform">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
