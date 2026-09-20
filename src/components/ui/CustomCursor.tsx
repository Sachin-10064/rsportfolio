import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouch, setIsTouch] = useState<boolean>(true);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check cursor data attribute
      const target = e.target as HTMLElement | null;
      const cursorElem = target?.closest('[data-cursor]') as HTMLElement | null;
      if (cursorElem) {
        setCursorText(cursorElem.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        const isClickable = target?.closest('button, a, input, select, textarea, [role="button"]');
        if (isClickable) {
          setCursorText('');
          setIsHovered(true);
        } else {
          setCursorText('');
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const updatePosition = () => {
      // Smooth interpolation for architectural fluid feel
      const ease = 0.18;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      setPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div
      id="custom-cursor-container"
      className="fixed top-0 left-0 pointer-events-none z-9999 transition-opacity duration-300"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        willChange: 'transform',
      }}
    >
      <div
        id="custom-cursor-element"
        className={`-translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 backdrop-blur-xs ${
          cursorText
            ? 'px-3.5 py-1.5 rounded-full bg-stone-light text-warm-dark font-sans text-[11px] font-semibold tracking-wider uppercase shadow-xl'
            : isHovered
            ? 'w-10 h-10 rounded-full border border-bronze-accent bg-bronze-accent/15'
            : 'w-3 h-3 rounded-full bg-stone-light/85'
        }`}
      >
        {cursorText && (
          <span className="leading-none whitespace-nowrap">{cursorText}</span>
        )}
      </div>
    </div>
  );
};
