import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target?.closest('button') ||
        target?.closest('a') ||
        target?.closest('input') ||
        target?.classList.contains('clickable')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let animId: number;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      animId = requestAnimationFrame(follow);
    };
    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Center cyber dot */}
      <div
        className="fixed w-2 h-2 -ml-1 -mt-1 bg-cyber-cyan rounded-full transition-transform duration-75 shadow-[0_0_10px_#00f2fe]"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        }}
      />

      {/* Trailing Crosshair Reticle */}
      <div
        className={`fixed -ml-5 -mt-5 rounded-full border border-cyber-cyan/60 transition-[width,height,border-color,background-color] duration-200 flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 border-cyber-violet bg-cyber-cyan/10 shadow-[0_0_20px_rgba(0,242,254,0.4)]'
            : 'w-10 h-10'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {/* Micro crosshair ticks */}
        <div className="absolute w-[2px] h-[6px] bg-cyber-cyan/80 top-0 -translate-y-1/2" />
        <div className="absolute w-[2px] h-[6px] bg-cyber-cyan/80 bottom-0 translate-y-1/2" />
        <div className="absolute h-[2px] w-[6px] bg-cyber-cyan/80 left-0 -translate-x-1/2" />
        <div className="absolute h-[2px] w-[6px] bg-cyber-cyan/80 right-0 translate-x-1/2" />
      </div>
    </div>
  );
};

