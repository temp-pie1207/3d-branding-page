import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../audio/soundEffects';

export const TerminalContact: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: 'in' | 'out'; text: string }>>([
    { type: 'out', text: 'NEXUS SYSTEM TERMINAL // KERNEL v4.9.2' },
    { type: 'out', text: 'Type "help" for a list of directives or enter your email to request developer credentials.' },
  ]);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    sounds.playSelect();
    const newHistory = [...terminalHistory, { type: 'in' as const, text: `$ ${cmd}` }];

    const lower = cmd.toLowerCase();
    if (lower === 'help') {
      newHistory.push({
        type: 'out',
        text: 'AVAILABLE DIRECTIVES: "status", "ping", "deploy", "specs", "clear", or enter your email address.',
      });
    } else if (lower === 'status') {
      newHistory.push({
        type: 'out',
        text: 'CLUSTER HEALTH: 100% | COHERENCE: 99.999% | ALL 2,048 EDGE NODES OPERATIONAL',
      });
    } else if (lower === 'ping') {
      newHistory.push({
        type: 'out',
        text: 'ROUNDTRIP TELEMETRY: 0.17ms TO NEAREST QUANTUM GATEWAY. JITTER: 0.002ms',
      });
    } else if (lower === 'specs') {
      newHistory.push({
        type: 'out',
        text: 'CORE: TENSOR-CRYPTO LATTICE | ARCHITECTURE: DECENTRALIZED BYZANTINE FAULT TOLERANCE',
      });
    } else if (lower === 'clear') {
      setTerminalHistory([]);
      setInputVal('');
      return;
    } else if (cmd.includes('@') && cmd.includes('.')) {
      newHistory.push({
        type: 'out',
        text: `TRANSMISSION CONFIRMED. ACCESS TOKEN ISSUED FOR <${cmd}>. WELCOME TO THE COGNITIVE MESH.`,
      });
      setEmailSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#00f2fe', '#9d4edd', '#00ff87'],
      });
    } else {
      newHistory.push({
        type: 'out',
        text: `COMMAND NOT RECOGNIZED: "${cmd}". TYPE "help" FOR PROTOCOL DIRECTIVES.`,
      });
    }

    setTerminalHistory(newHistory);
    setInputVal('');
  };

  return (
    <footer id="contact" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Terminal Interactive Console */}
      <div className="mb-20">
        <div className="cyber-glass rounded-2xl overflow-hidden border border-cyber-border shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          {/* Terminal Window Header Bar */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-400">
                nexus@mesh-node-01: ~ (zsh)
              </span>
            </div>
            <div className="text-[11px] font-mono text-cyber-cyan flex items-center space-x-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>INTERACTIVE PROTOCOL SHELL</span>
            </div>
          </div>

          {/* Terminal Output Log Area */}
          <div className="p-6 font-mono text-xs text-slate-300 space-y-2 h-64 overflow-y-auto bg-slate-950/80">
            {terminalHistory.map((item, idx) => (
              <div
                key={idx}
                className={
                  item.type === 'in'
                    ? 'text-cyber-cyan font-bold'
                    : 'text-slate-300 pl-2 border-l border-slate-800'
                }
              >
                {item.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Form */}
          <form
            onSubmit={handleCommand}
            className="border-t border-slate-800 bg-slate-900/90 p-3 flex items-center space-x-3"
          >
            <span className="font-mono text-sm text-cyber-cyan font-bold pl-2">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                sounds.playKey();
              }}
              placeholder="Enter command or type email for access key..."
              className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-slate-500"
            />
            <button
              type="submit"
              onMouseEnter={() => sounds.playHover()}
              className="px-4 py-1.5 rounded bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-mono text-xs flex items-center space-x-1.5 transition-all shadow-[0_0_10px_rgba(0,242,254,0.3)]"
            >
              <span>SEND</span>
              <Send className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>

      {/* Brand Credentials & Copyright Bottom */}
      <div className="border-t border-slate-800/80 pt-12 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-500">
        <div className="flex items-center space-x-3">
          <div className="w-7 h-7 rounded bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center text-cyber-cyan">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="font-orbitron font-bold text-sm text-slate-300">
              NEXUS // CYBERNETICS
            </div>
            <div className="text-[10px] text-slate-500">
              QUANTUM COHERENT NEURAL ARCHITECTURE
            </div>
          </div>
        </div>

        <div className="text-center md:text-right space-y-1">
          <div>© 2026 NEXUS SYSTEMS CORP. ALL RIGHTS RESERVED.</div>
          <div className="text-[10px] text-slate-600">
            HASH: 8F2A-09BD-C771-44E9-91B2-FA03
          </div>
        </div>
      </div>
    </footer>
  );
};
