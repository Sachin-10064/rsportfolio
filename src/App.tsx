import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Navbar } from './components/navigation/Navbar';
import { HeroScrubVideo } from './components/hero/HeroScrubVideo';
import { IntroSection } from './components/intro/IntroSection';
import { ProjectSection } from './components/projects/ProjectSection';
import { ProjectDetailModal } from './components/projects/ProjectDetailModal';
import { ProcessStory } from './components/process/ProcessStory';
import { ServicesSection } from './components/services/ServicesSection';
import { AboutSection } from './components/about/AboutSection';
import { MaterialSection } from './components/materials/MaterialSection';
import { StatementSection } from './components/statement/StatementSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { Project } from './types';

// register plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);

  const handleExploreClick = () => {
    const introElem = document.getElementById('intro-section');
    if (introElem) {
      introElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="rs-portfolio-root" className="min-h-screen bg-warm-dark text-stone-light relative selection:bg-bronze-accent selection:text-warm-dark">
      {/* Desktop Architectural Custom Cursor */}
      <CustomCursor />

      {/* Floating Minimalist Navigation */}
      <Navbar onStartProject={() => setInquiryModalOpen(true)} />

      {/* Main Experience Flow */}
      <main id="main-content">
        {/* 1. Scroll-Driven Video Scrubbing Hero */}
        <HeroScrubVideo onExploreClick={handleExploreClick} />

        {/* 2. Editorial Introduction */}
        <IntroSection />

        {/* 3. Selected Work & Alternating Architectural Grid */}
        <ProjectSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 4. Architecture → Visualization Story (Interactive Transformation) */}
        <ProcessStory />

        {/* 5. Services & Capabilities */}
        <ServicesSection onStartProject={() => setInquiryModalOpen(true)} />

        {/* 6. About & Philosophy */}
        <AboutSection />

        {/* 7. Architectural Material & Detail Moodboard */}
        <MaterialSection />

        {/* 8. Full-Screen Typography Statement */}
        <StatementSection />

        {/* 9. Contact & Commission Section */}
        <ContactSection
          inquiryOpen={inquiryModalOpen}
          onOpenInquiry={() => setInquiryModalOpen(true)}
          onCloseInquiry={() => setInquiryModalOpen(false)}
        />
      </main>

      {/* 10. Minimalist Footer */}
      <Footer />

      {/* Comprehensive Project Detail Case Study Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      )}
    </div>
  );
}
