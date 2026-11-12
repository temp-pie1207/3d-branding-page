import React, { useState, useEffect } from 'react';
import { ModelMode, SpectrumTheme } from './types';
import { sounds } from './audio/soundEffects';
import { CanvasContainer } from './components/CanvasContainer';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BentoFeatures } from './components/BentoFeatures';
import { HoloLabSection } from './components/HoloLabSection';
import { TelemetrySection } from './components/TelemetrySection';
import { TerminalContact } from './components/TerminalContact';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  const [modelMode, setModelMode] = useState<ModelMode>('core');
  const [theme, setTheme] = useState<SpectrumTheme>('cyan');
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1.0);
  const [scrollY, setScrollY] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    sounds.setMuted(nextMuted);
  };

  const handleExplore = () => {
    const hololab = document.getElementById('hololab');
    hololab?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-cyber-dark text-slate-100 cyber-grid selection:bg-cyber-cyan selection:text-black">
      {/* Interactive Cyber Reticle Custom Cursor */}
      <CustomCursor />

      {/* Radial Glow Lighting Overlay behind canvas */}
      <div className="fixed inset-0 cyber-radial-overlay pointer-events-none z-0" />

      {/* 3D WebGL Canvas Layer */}
      <CanvasContainer
        modelMode={modelMode}
        theme={theme}
        wireframe={wireframe}
        speed={speed}
        scrollY={scrollY}
      />

      {/* Foreground Content Layer */}
      <div className="relative z-10">
        <Navbar isMuted={isMuted} onToggleSound={handleToggleSound} />
        
        <main>
          <HeroSection onExplore={handleExplore} />
          <BentoFeatures />
          <HoloLabSection
            modelMode={modelMode}
            setModelMode={setModelMode}
            theme={theme}
            setTheme={setTheme}
            wireframe={wireframe}
            setWireframe={setWireframe}
            speed={speed}
            setSpeed={setSpeed}
          />
          <TelemetrySection />
        </main>

        <TerminalContact />
      </div>
    </div>
  );
};

export default App;

