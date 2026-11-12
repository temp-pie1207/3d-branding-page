import React from 'react';
import { ArrowRight, Terminal, ChevronDown, Sparkles, ShieldCheck } from 'lucide-react';
import { sounds } from '../audio/soundEffects';

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 z-10 space-y-6">
          {/* Status Capsule */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyber-card border border-cyber-border text-xs font-mono text-slate-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
            </span>
            <span className="text-cyber-cyan font-semibold">COGNITIVE FABRIC</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">READY FOR DEPLOYMENT</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="font-orbitron font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[1.1]">
              <span className="block text-white">THE NEURAL</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-blue-400 to-cyber-violet drop-shadow-[0_0_20px_rgba(0,242,254,0.4)]">
                SYNAPSE OF
              </span>
              <span className="block text-white">AUTONOMOUS AI</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="font-space text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Engineered for planetary-scale machine cognition. Nexus harmonizes distributed neural models
            with quantum-resilient encryption and sub-millisecond deterministic consensus.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <a
              href="#hololab"
              onClick={() => {
                sounds.playSelect();
                onExplore();
              }}
              onMouseEnter={() => sounds.playHover()}
              className="cyber-btn-primary px-7 py-3.5 font-mono text-sm tracking-wider font-semibold inline-flex items-center space-x-3 text-black"
            >
              <Sparkles className="w-4 h-4 text-cyber-cyan" />
              <span className="text-white">ACCESS HOLO-LAB</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <a
              href="#architecture"
              onClick={() => sounds.playSelect()}
              onMouseEnter={() => sounds.playHover()}
              className="cyber-btn-secondary px-6 py-3.5 font-mono text-sm tracking-wider inline-flex items-center space-x-2"
            >
              <Terminal className="w-4 h-4 text-cyber-cyan" />
              <span>EXPLORE ARCHITECTURE</span>
            </a>
          </div>

          {/* Performance Micro-Metrics Bar */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg">
            <div className="space-y-0.5">
              <div className="font-orbitron font-bold text-xl text-cyber-cyan">
                14.8 <span className="text-xs font-mono font-normal text-slate-400">PFLOPS</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Neural Compute
              </div>
            </div>

            <div className="space-y-0.5">
              <div className="font-orbitron font-bold text-xl text-cyber-violet">
                &lt; 0.18 <span className="text-xs font-mono font-normal text-slate-400">MS</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Sync Latency
              </div>
            </div>

            <div className="space-y-0.5">
              <div className="font-orbitron font-bold text-xl text-cyber-emerald">
                99.999<span className="text-xs font-mono font-normal text-slate-400">%</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Quantum Coherence
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Centerpiece visual focal marker */}
        <div className="lg:col-span-5 h-[340px] lg:h-[460px] relative flex items-center justify-center pointer-events-none">
          {/* Subtle HUD Reticle around 3D core in Hero */}
          <div className="absolute w-72 h-72 rounded-full border border-cyber-cyan/15 border-dashed animate-spin [animation-duration:35s]" />
          <div className="absolute w-84 h-84 rounded-full border border-cyber-violet/10 animate-spin [animation-duration:50s] [animation-direction:reverse]" />

          {/* Cybernetic telemetry tags floating */}
          <div className="absolute top-8 right-4 hidden sm:flex items-center space-x-2 bg-cyber-dark/80 backdrop-blur border border-cyber-border px-3 py-1.5 rounded text-[11px] font-mono text-cyber-cyan">
            <ShieldCheck className="w-3.5 h-3.5 text-cyber-emerald" />
            <span>ENCRYPTED LAYER 7</span>
          </div>

          <div className="absolute bottom-6 left-4 hidden sm:block bg-cyber-dark/80 backdrop-blur border border-cyber-border px-3 py-1.5 rounded text-[11px] font-mono text-slate-300">
            <span className="text-cyber-violet font-semibold">ORBIT // TILT:</span> 3D MOUSE ACTIVE
          </div>
        </div>
      </div>

      {/* Down Chevron Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-slate-500 font-mono text-xs">
        <span className="tracking-widest uppercase text-[10px]">SCROLL TO DIVE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyber-cyan" />
      </div>
    </section>
  );
};

