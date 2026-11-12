import React from 'react';
import { Sliders, Eye, Zap, Sparkles, Box, Network } from 'lucide-react';
import { ModelMode, SpectrumTheme, THEMES } from '../types';
import { sounds } from '../audio/soundEffects';

interface HoloLabProps {
  modelMode: ModelMode;
  setModelMode: (mode: ModelMode) => void;
  theme: SpectrumTheme;
  setTheme: (theme: SpectrumTheme) => void;
  wireframe: boolean;
  setWireframe: (wf: boolean) => void;
  speed: number;
  setSpeed: (spd: number) => void;
}

export const HoloLabSection: React.FC<HoloLabProps> = ({
  modelMode,
  setModelMode,
  theme,
  setTheme,
  wireframe,
  setWireframe,
  speed,
  setSpeed,
}) => {
  const models: { id: ModelMode; label: string; desc: string; icon: React.ReactNode }[] = [
    {
      id: 'core',
      label: 'QUANTUM CORE',
      desc: 'Pulsating distorted icosahedron with 3-axis gyroscopic containment rings',
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      id: 'monolith',
      label: 'CYBER MONOLITH',
      desc: 'Refractive transmission crystal with floating magnetic data halos',
      icon: <Box className="w-4 h-4" />,
    },
    {
      id: 'lattice',
      label: 'NEURAL LATTICE',
      desc: 'Topological node cluster with dynamic synaptic line connections',
      icon: <Network className="w-4 h-4" />,
    },
  ];

  const themeOptions: { id: SpectrumTheme; label: string; color: string }[] = [
    { id: 'cyan', label: 'Electric Cyan', color: '#00f2fe' },
    { id: 'violet', label: 'Hyper Violet', color: '#b5179e' },
    { id: 'emerald', label: 'Toxic Emerald', color: '#00ff87' },
  ];

  return (
    <section id="hololab" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan font-mono text-xs uppercase tracking-widest">
          <Sliders className="w-3.5 h-3.5" />
          <span>INTERACTIVE 3D LAB</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          HOLOGRAPHIC SYNTHESIZER
        </h2>
        <p className="font-space text-slate-400 text-base">
          Directly configure and inspect the autonomous neural geometries in real-time WebGL. Select shapes, cycle emissive spectral frequencies, and toggle quantum wireframe matrices.
        </p>
      </div>

      {/* Control Console Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Control Column: Geometry Selection */}
        <div className="lg:col-span-5 space-y-6">
          <div className="cyber-glass p-6 rounded-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-mono text-xs text-cyber-cyan uppercase tracking-wider font-semibold">
                // GEOMETRY PRIMITIVE
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                ACTIVE: {modelMode.toUpperCase()}
              </span>
            </div>

            <div className="space-y-3">
              {models.map((m) => {
                const isActive = modelMode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      sounds.playWarp();
                      setModelMode(m.id);
                    }}
                    onMouseEnter={() => sounds.playHover()}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start space-x-3 border ${
                      isActive
                        ? 'bg-cyber-cyan/15 border-cyber-cyan text-white shadow-[0_0_20px_rgba(0,242,254,0.25)]'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div
                      className={`p-2 rounded mt-0.5 ${
                        isActive ? 'bg-cyber-cyan text-black' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {m.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-orbitron font-bold text-sm tracking-wide flex items-center justify-between">
                        <span>{m.label}</span>
                        {isActive && (
                          <span className="text-[10px] font-mono bg-cyber-cyan/20 text-cyber-cyan px-1.5 py-0.5 rounded">
                            RENDERED
                          </span>
                        )}
                      </div>
                      <p className="font-space text-xs text-slate-400 mt-1 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Control Column: Material & Render Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div className="cyber-glass p-6 rounded-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-mono text-xs text-cyber-cyan uppercase tracking-wider font-semibold">
                // SHADER & SPECTRAL TUNING
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                GLSL SHADERS: OPTIMAL
              </span>
            </div>

            {/* Color Palette Switcher */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                Emissive Spectral Wavelength
              </label>
              <div className="grid grid-cols-3 gap-3">
                {themeOptions.map((t) => {
                  const isActive = theme === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        sounds.playSelect();
                        setTheme(t.id);
                      }}
                      onMouseEnter={() => sounds.playHover()}
                      className={`p-3 rounded-xl border flex items-center space-x-2.5 transition-all ${
                        isActive
                          ? 'border-white bg-slate-800 shadow-[0_0_15px_rgba(255,255,255,0.15)] text-white'
                          : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full shadow-sm"
                        style={{
                          backgroundColor: t.color,
                          boxShadow: `0 0 8px ${t.color}`,
                        }}
                      />
                      <span className="font-mono text-xs font-medium">{t.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Wireframe vs Solid Matrix Toggle */}
            <div className="space-y-3">
              <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                Mesh Topology Rendering
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    sounds.playSelect();
                    setWireframe(false);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className={`p-3 rounded-xl border font-mono text-xs flex items-center justify-center space-x-2 transition-all ${
                    !wireframe
                      ? 'border-cyber-cyan bg-cyber-cyan/15 text-cyber-cyan shadow-[0_0_12px_rgba(0,242,254,0.3)]'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>SOLID / TRANSMISSION</span>
                </button>

                <button
                  onClick={() => {
                    sounds.playSelect();
                    setWireframe(true);
                  }}
                  onMouseEnter={() => sounds.playHover()}
                  className={`p-3 rounded-xl border font-mono text-xs flex items-center justify-center space-x-2 transition-all ${
                    wireframe
                      ? 'border-cyber-violet bg-cyber-violet/20 text-cyber-violet shadow-[0_0_12px_rgba(157,78,221,0.4)]'
                      : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <Network className="w-4 h-4" />
                  <span>QUANTUM WIREFRAME</span>
                </button>
              </div>
            </div>

            {/* Oscillation & Rotation Velocity Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 uppercase tracking-wider">Rotation Frequency</span>
                <span className="text-cyber-cyan font-bold">{speed.toFixed(1)}x VELOCITY</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="2.5"
                step="0.1"
                value={speed}
                onChange={(e) => {
                  setSpeed(parseFloat(e.target.value));
                  sounds.playHover();
                }}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyber-cyan"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>0.2x (Subtle Damping)</span>
                <span>1.0x (Standard Resonance)</span>
                <span>2.5x (Hyper Overclock)</span>
              </div>
            </div>

            {/* Real-time Diagnostics Bar */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 justify-between items-center text-xs font-mono text-slate-400">
              <div className="flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5 text-cyber-cyan" />
                <span>FPS: 60.0 LOCKED</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-slate-600">•</span>
                <span>PALETTE: {THEMES[theme].name}</span>
              </div>
              <div className="flex items-center space-x-1.5 text-cyber-emerald">
                <span>BUFFER: GL_TRIANGLES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

