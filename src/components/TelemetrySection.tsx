import React from 'react';
import { Activity, Globe, CheckCircle2, TrendingUp, Radio } from 'lucide-react';
import { sounds } from '../audio/soundEffects';

export const TelemetrySection: React.FC = () => {
  const telemetryNodes = [
    { city: 'Tokyo', region: 'AP-NORTHEAST-1', load: '48%', status: 'nominal', latency: '0.14ms' },
    { city: 'Frankfurt', region: 'EU-CENTRAL-1', load: '62%', status: 'nominal', latency: '0.18ms' },
    { city: 'San Francisco', region: 'US-WEST-2', load: '71%', status: 'nominal', latency: '0.12ms' },
    { city: 'London', region: 'EU-WEST-2', load: '53%', status: 'nominal', latency: '0.16ms' },
    { city: 'Singapore', region: 'AP-SOUTHEAST-1', load: '44%', status: 'nominal', latency: '0.15ms' },
    { city: 'Zurich', region: 'CH-CENTRAL-1', load: '39%', status: 'nominal', latency: '0.17ms' },
  ];

  return (
    <section id="telemetry" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald font-mono text-xs uppercase tracking-widest">
          <Activity className="w-3.5 h-3.5" />
          <span>LIVE TELEMETRY & BENCHMARKS</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          EMPIRICAL SUPERIORITY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-emerald via-teal-300 to-cyber-cyan">
            MEASURED AT THE EDGE
          </span>
        </h2>
        <p className="font-space text-slate-400 max-w-2xl text-base sm:text-lg">
          Quantitative metrics demonstrating orders of magnitude improvements over legacy centralized cloud architectures.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Legacy Cloud Infrastructure */}
        <div className="cyber-glass p-8 rounded-2xl border-slate-800 bg-slate-950/40 relative">
          <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-3">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
              TRADITIONAL CLOUD ARCHITECTURE
            </span>
            <span className="text-xs font-mono text-amber-500/80 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
              LEGACY STANDARD
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm font-mono mb-1">
                <span className="text-slate-400">Consensus Roundtrip Latency</span>
                <span className="text-slate-300 font-bold">~45.0 ms</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-slate-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-mono mb-1">
                <span className="text-slate-400">Concurrent Neural Inferences</span>
                <span className="text-slate-300 font-bold">120K ops/sec</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[20%] h-full bg-slate-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-mono mb-1">
                <span className="text-slate-400">Node Failover Rebalance</span>
                <span className="text-slate-300 font-bold">180 seconds</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[95%] h-full bg-slate-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* NEXUS Autonomous Neural Mesh */}
        <div
          onMouseEnter={() => sounds.playHover()}
          className="cyber-glass p-8 rounded-2xl border-cyber-cyan/40 bg-cyber-dark/80 relative shadow-[0_0_40px_rgba(0,242,254,0.1)] group hover:border-cyber-cyan transition-all"
        >
          <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-3">
            <span className="font-mono text-xs text-cyber-cyan uppercase tracking-wider font-semibold">
              NEXUS // AUTONOMOUS MESH
            </span>
            <span className="text-xs font-mono text-cyber-emerald bg-cyber-emerald/10 px-2.5 py-0.5 rounded border border-cyber-emerald/30 flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-ping" />
              <span>QUANTUM ACCELERATED</span>
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm font-mono mb-1">
                <span className="text-slate-300">Consensus Roundtrip Latency</span>
                <span className="text-cyber-cyan font-bold text-glow-cyan">&lt; 0.18 ms (250x faster)</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[3%] h-full bg-cyber-cyan shadow-[0_0_10px_#00f2fe] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-mono mb-1">
                <span className="text-slate-300">Concurrent Neural Inferences</span>
                <span className="text-cyber-violet font-bold text-glow-violet">4.8M ops/sec (40x scale)</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[98%] h-full bg-cyber-violet shadow-[0_0_10px_#9d4edd] rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-mono mb-1">
                <span className="text-slate-300">Node Failover Rebalance</span>
                <span className="text-cyber-emerald font-bold text-glow-emerald">4.0 ms (Instantaneous)</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[2%] h-full bg-cyber-emerald shadow-[0_0_10px_#00ff87] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Planetary Edge Nodes Live Telemetry Matrix */}
      <div className="cyber-glass p-8 rounded-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <Globe className="w-5 h-5 text-cyber-cyan" />
            <h3 className="font-orbitron font-bold text-lg text-white">Planetary Relay Clusters</h3>
          </div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyber-muted">
            <Radio className="w-3.5 h-3.5 text-cyber-emerald animate-pulse" />
            <span>GLOBAL PROTOCOL CONVERGENCE: 100%</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {telemetryNodes.map((n, idx) => (
            <div
              key={idx}
              onMouseEnter={() => sounds.playHover()}
              className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 hover:border-cyber-border transition-colors flex items-center justify-between"
            >
              <div>
                <div className="font-orbitron font-bold text-sm text-white flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyber-emerald" />
                  <span>{n.city}</span>
                </div>
                <div className="text-[11px] font-mono text-slate-500 mt-0.5">{n.region}</div>
              </div>

              <div className="text-right font-mono text-xs">
                <div className="text-cyber-cyan font-bold">{n.latency}</div>
                <div className="text-[11px] text-slate-400">Load: {n.load}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

