import React, { useState, useEffect } from 'react';
import { Cpu, ShieldCheck, Zap, Network, RefreshCw, Layers } from 'lucide-react';
import { sounds } from '../audio/soundEffects';

export const BentoFeatures: React.FC = () => {
  // Cipher decode hover effect state for Card 2
  const targetCipher = "NEXUS-LATTICE-PQC-KYBER-1024";
  const [displayText, setDisplayText] = useState(targetCipher);
  const [isScrambling, setIsScrambling] = useState(false);

  // Ping test interactive state for Card 3
  const [pingRunning, setPingRunning] = useState(false);
  const [pings, setPings] = useState([
    { location: 'TOKYO // NRT-01', latency: '0.14 ms', status: 'optimal' },
    { location: 'FRANKFURT // FRA-04', latency: '0.19 ms', status: 'optimal' },
    { location: 'SAN FRANCISCO // SFO-02', latency: '0.12 ms', status: 'optimal' },
  ]);

  // Scramble cipher text on hover
  const triggerScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    sounds.playHover();

    const chars = '01#@$%&*<>~/[]+=';
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        targetCipher
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return letter;
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= targetCipher.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }
      iteration += 1.5;
    }, 30);
  };

  // Run simulated low-latency test
  const runPingTest = () => {
    if (pingRunning) return;
    setPingRunning(true);
    sounds.playSelect();

    setTimeout(() => {
      setPings([
        { location: 'TOKYO // NRT-01', latency: `${(0.12 + Math.random() * 0.04).toFixed(2)} ms`, status: 'optimal' },
        { location: 'FRANKFURT // FRA-04', latency: `${(0.16 + Math.random() * 0.04).toFixed(2)} ms`, status: 'optimal' },
        { location: 'SAN FRANCISCO // SFO-02', latency: `${(0.10 + Math.random() * 0.03).toFixed(2)} ms`, status: 'optimal' },
      ]);
      setPingRunning(false);
    }, 600);
  };

  // Live fluctuating GFLOPS counter
  const [gflops, setGflops] = useState(14820);
  useEffect(() => {
    const timer = setInterval(() => {
      setGflops((prev) => prev + (Math.floor(Math.random() * 21) - 10));
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="mb-16 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-cyber-violet/10 border border-cyber-violet/30 text-cyber-violet font-mono text-xs uppercase tracking-widest">
          <Layers className="w-3.5 h-3.5" />
          <span>NEURAL ARCHITECTURE</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
          DECENTRALIZED INTELLIGENCE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-emerald">
            ENGINEERED TO SCALE
          </span>
        </h2>
        <p className="font-space text-slate-400 max-w-2xl text-base sm:text-lg">
          Explore the modular primitives powering the next evolution of autonomous systems and distributed compute clusters.
        </p>
      </div>

      {/* Cyber Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: 8 Columns - Autonomous Core Fabric */}
        <div
          onMouseEnter={() => sounds.playHover()}
          className="md:col-span-8 cyber-glass p-8 rounded-2xl relative overflow-hidden group hover:border-cyber-cyan/50 transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyber-cyan/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyber-cyan/20 transition-all" />
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-cyber-cyan uppercase tracking-wider">SUBSYSTEM 01</span>
                <h3 className="font-orbitron font-bold text-xl text-white">Quantum Core Fabric</h3>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 bg-slate-900/90 border border-slate-700/80 px-3 py-1 rounded font-mono text-xs text-cyber-emerald">
              <span className="inline-block w-2 h-2 rounded-full bg-cyber-emerald animate-ping" />
              <span>{gflops.toLocaleString()} TFLOPS</span>
            </div>
          </div>

          <p className="font-space text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Nexus dynamically allocates tensor computation across high-density holographic nodes. Autonomous task dispatching minimizes serialization overhead, maintaining deterministic guarantees under planetary load.
          </p>

          {/* Activity Simulation Visualizer */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-3">
            <div className="flex justify-between items-center text-slate-400 border-b border-slate-800/80 pb-2">
              <span>SYNAPSE ACTIVE NODES</span>
              <span className="text-cyber-cyan">2,048 / 2,048 ONLINE</span>
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5 py-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="h-6 rounded bg-slate-800/60 flex items-center justify-center border border-slate-700/50 group-hover:border-cyber-cyan/40 transition-colors"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: i % 3 === 0 ? '#00f2fe' : i % 5 === 0 ? '#9d4edd' : '#00ff87',
                      opacity: 0.6 + (i % 4) * 0.1,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: 4 Columns - Post-Quantum Cryptography */}
        <div
          onMouseEnter={triggerScramble}
          className="md:col-span-4 cyber-glass p-8 rounded-2xl relative overflow-hidden group hover:border-cyber-violet/50 transition-all duration-300 flex flex-col justify-between"
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-cyber-violet/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyber-violet/20 transition-all" />

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-lg bg-cyber-violet/10 border border-cyber-violet/30 text-cyber-violet">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-cyber-violet uppercase tracking-wider">SUBSYSTEM 02</span>
                <h3 className="font-orbitron font-bold text-lg text-white">Quantum Shield</h3>
              </div>
            </div>

            <p className="font-space text-slate-300 text-sm leading-relaxed mb-6">
              Lattice-based cryptographic encapsulation resistant to Shor’s algorithm and quantum state extraction.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-cyber-violet/30 rounded-lg p-3 font-mono text-xs">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">CIPHER SIGNATURE (HOVER TO DECODE)</div>
            <div className="text-cyber-violet font-bold truncate tracking-wider">{displayText}</div>
          </div>
        </div>

        {/* Card 3: 5 Columns - Sub-Millisecond Ping Mesh */}
        <div
          onMouseEnter={() => sounds.playHover()}
          className="md:col-span-5 cyber-glass p-8 rounded-2xl relative overflow-hidden group hover:border-cyber-emerald/50 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-lg bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald">
                <Network className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-cyber-emerald uppercase tracking-wider">SUBSYSTEM 03</span>
                <h3 className="font-orbitron font-bold text-lg text-white">Global Mesh Mesh</h3>
              </div>
            </div>

            <button
              onClick={runPingTest}
              onMouseEnter={() => sounds.playHover()}
              disabled={pingRunning}
              className="p-2 rounded bg-slate-900 border border-slate-700 hover:border-cyber-emerald text-cyber-emerald text-xs font-mono flex items-center space-x-1.5 transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${pingRunning ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">BENCHMARK</span>
            </button>
          </div>

          <p className="font-space text-slate-300 text-sm leading-relaxed mb-4">
            Direct fiber routing and packet teleportation across decentralized edge nodes.
          </p>

          <div className="space-y-2 font-mono text-xs">
            {pings.map((p, idx) => (
              <div key={idx} className="flex justify-between items-center bg-slate-950/70 p-2.5 rounded border border-slate-800">
                <span className="text-slate-300">{p.location}</span>
                <span className="text-cyber-emerald font-bold">{p.latency}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 4: 7 Columns - Zero-Interruption Autonomous Consensus */}
        <div
          onMouseEnter={() => sounds.playHover()}
          className="md:col-span-7 cyber-glass p-8 rounded-2xl relative overflow-hidden group hover:border-cyber-cyan/50 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-cyber-cyan uppercase tracking-wider">SUBSYSTEM 04</span>
                <h3 className="font-orbitron font-bold text-xl text-white">Consensus & Self-Healing</h3>
              </div>
            </div>

            <p className="font-space text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Byzantine fault-tolerant consensus running concurrently with continuous state reconciliation. The system isolates compromised edge nodes in under 4ms without interrupting cognitive inference streams.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 font-mono text-xs text-center">
            <div className="bg-slate-950/70 p-3 rounded border border-slate-800">
              <div className="text-cyber-cyan font-bold text-sm">4.0 ms</div>
              <div className="text-[10px] text-slate-500 uppercase mt-1">Fault Isolation</div>
            </div>
            <div className="bg-slate-950/70 p-3 rounded border border-slate-800">
              <div className="text-cyber-violet font-bold text-sm">ZERO</div>
              <div className="text-[10px] text-slate-500 uppercase mt-1">Downtime Slices</div>
            </div>
            <div className="bg-slate-950/70 p-3 rounded border border-slate-800">
              <div className="text-cyber-emerald font-bold text-sm">100%</div>
              <div className="text-[10px] text-slate-500 uppercase mt-1">State Integrity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

