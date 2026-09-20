import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { PROCESS_STAGES } from "../../data/servicesData";

gsap.registerPlugin(ScrollTrigger);

interface HeroScrubVideoProps {
  onExploreClick?: () => void;
}

export function HeroScrubVideo({ onExploreClick }: HeroScrubVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(
    () => {
      const video = videoRef.current;
      if (!video) return;

      const initTimeline = () => {
        const totalDuration = 15; // Normalized timeline duration
        const scrollDistance = isMobile ? "+=3500" : "+=5200";

        const videoTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: scrollDistance,
            scrub: 0.8,
            pin: true,
          },
        });

        // 1. Scrub video linearly across the full timeline
        videoTimeline.to(
          video,
          {
            currentTime: video.duration || 10,
            ease: "none",
            duration: totalDuration,
          },
          0
        );

        // 2. Main Heading in Center: visible at scroll=0, fades & glides up on scroll start
        videoTimeline.to(
          "#hero-center-heading",
          {
            opacity: 0,
            y: -60,
            scale: 0.95,
            duration: 0.8,
            ease: "power1.out",
          },
          0
        );

        // 3. Initial Bottom Scroll Cue: fades out immediately
        videoTimeline.to(
          "#hero-scroll-cue",
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power1.out",
          },
          0
        );

        // -------------------------------------------------------------
        // 4. Alternating Phases (Odd = Left, Even = Right)
        // -------------------------------------------------------------
        // Phase 1 (Left): 0.8s to 2.4s
        videoTimeline.fromTo(
          "#hero-phase-0",
          { x: isMobile ? -60 : -140, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          0.8
        );
        videoTimeline.to(
          "#hero-phase-0",
          { y: -40, opacity: 0, duration: 0.5, ease: "power2.in" },
          2.0
        );

        // Phase 2 (Right): 2.4s to 4.0s
        videoTimeline.fromTo(
          "#hero-phase-1",
          { x: isMobile ? 60 : 140, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          2.4
        );
        videoTimeline.to(
          "#hero-phase-1",
          { y: -40, opacity: 0, duration: 0.5, ease: "power2.in" },
          3.6
        );

        // Phase 3 (Left): 4.0s to 5.6s
        videoTimeline.fromTo(
          "#hero-phase-2",
          { x: isMobile ? -60 : -140, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          4.0
        );
        videoTimeline.to(
          "#hero-phase-2",
          { y: -40, opacity: 0, duration: 0.5, ease: "power2.in" },
          5.2
        );

        // Phase 4 (Right): 5.6s to 7.2s
        videoTimeline.fromTo(
          "#hero-phase-3",
          { x: isMobile ? 60 : 140, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          5.6
        );
        videoTimeline.to(
          "#hero-phase-3",
          { y: -40, opacity: 0, duration: 0.5, ease: "power2.in" },
          6.8
        );

        // Phase 5 (Left): 7.2s to 8.8s
        videoTimeline.fromTo(
          "#hero-phase-4",
          { x: isMobile ? -60 : -140, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          7.2
        );
        videoTimeline.to(
          "#hero-phase-4",
          { y: -40, opacity: 0, duration: 0.5, ease: "power2.in" },
          8.4
        );

        // Phase 6 (Right): 8.8s to 10.4s
        videoTimeline.fromTo(
          "#hero-phase-5",
          { x: isMobile ? 60 : 140, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          8.8
        );
        videoTimeline.to(
          "#hero-phase-5",
          { y: -40, opacity: 0, duration: 0.5, ease: "power2.in" },
          10.0
        );

        // Phase 7 (Left): 10.4s to 12.0s
        videoTimeline.fromTo(
          "#hero-phase-6",
          { x: isMobile ? -60 : -140, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          10.4
        );
        videoTimeline.to(
          "#hero-phase-6",
          { y: -40, opacity: 0, duration: 0.5, ease: "power2.in" },
          11.8
        );

        // Finale (Center): 12.2s to 15.0s
        videoTimeline.fromTo(
          "#hero-finale-center",
          { y: 80, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" },
          12.2
        );

        ScrollTrigger.refresh();
      };

      if (video.readyState >= 1) {
        initTimeline();
      } else {
        video.onloadedmetadata = initTimeline;
      }
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  return (
    <div
      id="hero-section"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-warm-dark select-none"
    >
      {/* Background Scrubbed Architecture Video */}
      <video
        ref={videoRef}
        src="/videos/input.mp4"
        playsInline
        preload="auto"
        muted
        className="w-full h-full object-cover"
      />

      {/* Atmospheric Vignette & Contrast Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-warm-dark via-warm-dark/25 to-warm-dark/60 pointer-events-none" />
      <div className="absolute inset-0 bg-warm-dark/30 pointer-events-none" />

      {/* =============================================================
          1. MAIN HEADING IN CENTER (VISIBLE BEFORE SCROLL STARTS)
      ============================================================== */}
      <div
        id="hero-center-heading"
        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 sm:p-12 text-center pointer-events-none"
      >
        <div className="max-w-4xl flex flex-col items-center">
          <div className="inline-flex items-center space-x-3 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-bronze-accent animate-ping" />
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.35em] text-bronze-accent uppercase">
              THE COMPLETE 7-PHASE PIPELINE
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-stone-paper uppercase leading-[0.92] drop-shadow-2xl">
            Designing <br className="hidden sm:block" />
            <span className="italic font-normal text-bronze-accent">Spaces.</span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-xl text-xs sm:text-sm md:text-base text-stone-light/90 font-light leading-relaxed drop-shadow-md">
            A continuous spatial evolution from conceptual 2D drafting and 3D massing to photorealistic atmospheric reality.
          </p>

          <div className="mt-10 flex flex-col items-center space-y-2 pointer-events-auto">
            <span className="text-[10px] font-mono tracking-[0.3em] text-stone-muted uppercase animate-pulse">
              Scroll to Begin Transformation
            </span>
            <span className="text-bronze-accent text-sm animate-bounce">↓</span>
          </div>
        </div>
      </div>

      {/* =============================================================
          2. THE 7 ALTERNATING PHASES (ODD = LEFT, EVEN = RIGHT)
          Each phase enters horizontally from Left or Right on scroll
      ============================================================== */}
      {PROCESS_STAGES.map((stage, index) => {
        const isRight = index % 2 === 1; // 0 (Phase 1) is Left, 1 (Phase 2) is Right...

        return (
          <div
            key={stage.step}
            id={`hero-phase-${index}`}
            className={`absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-0 px-4 sm:px-0 w-full sm:w-auto max-w-md lg:max-w-lg ${isRight
              ? "right-0 sm:right-10 lg:right-20 text-right flex flex-col items-end"
              : "left-0 sm:left-10 lg:left-20 text-left flex flex-col items-start"
              }`}
          >
            {/* Glassmorphic Architectural Card */}
            <div className="bg-warm-dark/85 backdrop-blur-xl border border-[#2E2C29] p-6 sm:p-8 rounded-2xl shadow-2xl w-full">
              {/* Phase Badge */}
              <div
                className={`flex items-center space-x-2.5 text-[11px] font-mono text-bronze-accent tracking-[0.3em] uppercase mb-2 ${isRight ? "justify-end" : "justify-start"
                  }`}
              >
                {!isRight && <span className="w-1.5 h-1.5 rounded-full bg-bronze-accent" />}
                <span>PHASE {stage.step} / 07</span>
                <span className="text-[#555048]">•</span>
                <span className="text-stone-muted">{stage.category}</span>
                {isRight && <span className="w-1.5 h-1.5 rounded-full bg-bronze-accent" />}
              </div>

              {/* Big Phase Name */}
              <h3 className="font-serif text-3xl sm:text-5xl text-stone-paper font-light uppercase tracking-tight leading-none drop-shadow-md">
                {stage.name}
              </h3>

              {/* Phase Focus Title */}
              <h4 className="text-xs sm:text-sm font-mono text-bronze-accent/90 uppercase tracking-widest pt-2">
                {stage.title}
              </h4>

              {/* Narrative Description */}
              <p className="mt-3 text-xs sm:text-sm font-light text-stone-light/85 leading-relaxed">
                {stage.description}
              </p>

              {/* Deliverable Badge */}
              <div className="mt-4 pt-3 border-t border-[#262422]">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#1A1918] border border-[#2E2C29] text-[10px] font-mono text-stone-muted tracking-wider uppercase">
                  Deliverable: <span className="text-stone-light">{stage.deliverable}</span>
                </span>
              </div>
            </div>
          </div>
        );
      })}


      {/* Initial Bottom Scroll Indicator (Fades out when scroll starts) */}
      <div
        id="hero-scroll-cue"
        className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 flex flex-col items-center justify-center pointer-events-none z-20"
      >
        <div className="text-[11px] font-mono text-stone-muted tracking-wider uppercase">
          Scroll to explore the 7-phase transformation
        </div>
        <span className="text-bronze-accent text-xs mt-1 animate-bounce">↓</span>
      </div>
    </div>
  );
}

export default HeroScrubVideo;