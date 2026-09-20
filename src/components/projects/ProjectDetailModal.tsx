import React, { useState, useEffect } from 'react';
import { Project, ProjectImage } from '../../types';
import { PROJECTS_DATA } from '../../data/projectsData';
import { X, ArrowLeft, ArrowRight, Maximize2, Compass, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'concept' | 'floorplans' | 'visualizations'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeLightboxImage) setActiveLightboxImage(null);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxImage, onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-100 bg-warm-dark/95 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300"
      aria-modal="true"
      role="dialog"
    >
      {/* Top Sticky Header */}
      <div className="sticky top-0 z-30 w-full bg-warm-dark/90 backdrop-blur-md border-b border-[#2C2A27] px-6 md:px-14 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-stone-muted hover:text-stone-light transition-colors"
            data-cursor="CLOSE"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Portfolio</span>
          </button>
          <span className="text-[#3E3A34]">/</span>
          <span className="text-xs font-mono text-bronze-accent">{project.title}</span>
        </div>

        {/* Prev / Next & Close */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="p-2 rounded-full hover:bg-[#252320] text-stone-muted hover:text-stone-light transition-colors"
            title="Previous Project"
            data-cursor="PREV"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => onSelectProject(nextProject)}
            className="p-2 rounded-full hover:bg-[#252320] text-stone-muted hover:text-stone-light transition-colors"
            title="Next Project"
            data-cursor="NEXT"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-warm-stone hover:bg-[#2C2A27] text-stone-light transition-colors ml-2"
            aria-label="Close case study"
            data-cursor="CLOSE"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 md:py-20">
        {/* Project Header Banner */}
        <div className="border-b border-[#262422] pb-12 mb-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="text-xs font-mono text-bronze-accent tracking-[0.25em] uppercase">
              CASE STUDY // {project.id}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.disciplines.map((d) => (
                <span
                  key={d}
                  className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-warm-stone text-[#C2BEB6] border border-[#2C2A27]"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-stone-paper uppercase leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-stone-muted font-light">
            {project.subtitle}
          </p>

          {/* Quick Spec Matrix */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#262422] font-mono text-xs">
            <div>
              <span className="block text-[#6E6B65] uppercase text-[10px]">Location</span>
              <span className="text-stone-light font-medium mt-0.5 block">{project.location}</span>
            </div>
            <div>
              <span className="block text-[#6E6B65] uppercase text-[10px]">Year / Status</span>
              <span className="text-stone-light font-medium mt-0.5 block">{project.year} • {project.status}</span>
            </div>
            <div>
              <span className="block text-[#6E6B65] uppercase text-[10px]">Scale / Area</span>
              <span className="text-stone-light font-medium mt-0.5 block">{project.area}</span>
            </div>
            <div>
              <span className="block text-[#6E6B65] uppercase text-[10px]">Typology</span>
              <span className="text-stone-light font-medium mt-0.5 block">{project.category}</span>
            </div>
          </div>
        </div>

        {/* Hero Full-Width Cover Image */}
        <div className="relative w-full aspect-video md:aspect-21/9 rounded-xl overflow-hidden bg-warm-stone mb-16">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Narrative Section: Brief & Concept */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl font-light text-stone-paper uppercase flex items-center space-x-2">
              <span className="text-bronze-accent font-mono text-sm">01 /</span>
              <span>Project Brief & Context</span>
            </h3>
            <p className="text-sm md:text-base text-[#C2BEB6] font-light leading-relaxed">
              {project.brief}
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h3 className="font-serif text-2xl font-light text-stone-paper uppercase flex items-center space-x-2">
              <span className="text-bronze-accent font-mono text-sm">02 /</span>
              <span>Architectural Concept</span>
            </h3>
            <p className="text-sm md:text-base text-[#C2BEB6] font-light leading-relaxed">
              {project.concept}
            </p>
          </div>
        </div>

        {/* Floor Plan & Programmatic Breakdown (Section 11 requirement) */}
        {project.floorPlanDetails && (
          <div className="mb-20 p-8 rounded-xl bg-[#171615] border border-[#262422]">
            <div className="flex items-center justify-between pb-6 border-b border-[#262422]">
              <div className="flex items-center space-x-3">
                <Compass className="w-5 h-5 text-bronze-accent" />
                <h3 className="font-serif text-2xl text-stone-paper uppercase">
                  Spatial Zoning & 2D Floor Plan Data
                </h3>
              </div>
              <span className="text-xs font-mono text-stone-muted">
                {project.floorPlanDetails.totalArea}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-3">
                <h4 className="text-xs font-mono text-bronze-accent uppercase tracking-wider">
                  Programmatic Schedule
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.floorPlanDetails.rooms.map((room, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-[#1F1E1B] border border-[#2E2C28] flex items-center justify-between"
                    >
                      <span className="text-xs text-stone-light font-light">{room.name}</span>
                      <span className="text-[11px] font-mono text-stone-muted">{room.dimension}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 border-l border-[#262422] pl-0 md:pl-6">
                <h4 className="text-xs font-mono text-bronze-accent uppercase tracking-wider">
                  Orientation & Flow
                </h4>
                <p className="text-xs text-stone-muted leading-relaxed">
                  {project.floorPlanDetails.orientation}
                </p>
                <div className="pt-3">
                  <span className="text-[11px] font-mono text-[#C2BEB6] block">
                    Configuration: {project.floorPlanDetails.levels}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3D Visualization Rationale */}
        {project.visualizationNotes && (
          <div className="mb-20 p-6 rounded-lg bg-warm-stone/60 border-l-2 border-bronze-accent flex items-start space-x-4">
            <Layers className="w-5 h-5 text-bronze-accent shrink-0 mt-1" />
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-stone-light">
                3D Visualization & Raytracing Analysis
              </h4>
              <p className="text-xs text-stone-muted mt-1 leading-relaxed">
                {project.visualizationNotes}
              </p>
            </div>
          </div>
        )}

        {/* Rich Architectural Gallery */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-3xl font-light text-stone-paper uppercase">
              Project Gallery & Details
            </h3>
            <span className="text-xs font-mono text-stone-muted">
              {project.images.length} Archival Renders / Shots
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImage(img.url)}
                className={`group relative overflow-hidden rounded-xl bg-warm-stone cursor-pointer ${
                  idx === 0 || idx === 3 ? 'md:col-span-2 aspect-video' : 'aspect-4/3'
                }`}
                data-cursor="EXPAND"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-warm-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="w-full flex items-center justify-between text-xs text-stone-light">
                    <p className="font-light max-w-md">{img.caption}</p>
                    <Maximize2 className="w-4 h-4 text-bronze-accent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Navigation within Modal */}
        <div className="mt-24 pt-12 border-t border-[#262422] flex flex-col sm:flex-row items-center justify-between gap-6">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center space-x-3 text-left group"
          >
            <ArrowLeft className="w-5 h-5 text-stone-muted group-hover:-translate-x-1 group-hover:text-bronze-accent transition-all" />
            <div>
              <span className="text-[10px] font-mono uppercase text-stone-muted block">Previous Project</span>
              <span className="font-serif text-lg text-stone-light group-hover:text-bronze-accent transition-colors">
                {prevProject.title}
              </span>
            </div>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center space-x-3 text-right group"
          >
            <div>
              <span className="text-[10px] font-mono uppercase text-stone-muted block">Next Project</span>
              <span className="font-serif text-lg text-stone-light group-hover:text-bronze-accent transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-stone-muted group-hover:translate-x-1 group-hover:text-bronze-accent transition-all" />
          </button>
        </div>
      </div>

      {/* Fullscreen Lightbox View */}
      {activeLightboxImage && (
        <div
          className="fixed inset-0 z-120 bg-black/95 flex items-center justify-center p-4 sm:p-10 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxImage(null)}
        >
          <button
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-warm-stone text-stone-light hover:bg-[#2C2A27]"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeLightboxImage}
            alt="Expanded view"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
