import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Activity, Cpu } from 'lucide-react';
import { sounds } from '../audio/soundEffects';

interface NavbarProps {
  isMuted: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMuted, onToggleSound }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeStr, setTimeStr] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toISOString().substring(11, 19) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: '// CORE', href: '#hero' },
    { name: '// ARCHITECTURE', href: '#architecture' },
    { name: '// HOLO-LAB', href: '#hololab' },
    { name: '// TELEMETRY', href: '#telemetry' },
    { name: '// TERMINAL', href: '#contact' },
  ];

  const handleLinkClick = () => {
    sounds.playSelect();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-cyber-dark/85 backdrop-blur-md border-b border-cyber-border'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={() => sounds.playSelect()}
            onMouseEnter={() => sounds.playHover()}
            className="flex items-center space-x-3 group"
          >
            <div className="w-9 h-9 rounded bg-cyber-cyan/10 border border-cyber-cyan flex items-center justify-center text-cyber-cyan group-hover:shadow-[0_0_15px_#00f2fe] transition-all">
              <Cpu className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-orbitron font-bold text-lg tracking-wider text-white group-hover:text-cyber-cyan transition-colors">
                  NEXUS
                </span>
                <span className="text-cyber-violet font-mono text-xs font-semibold px-1.5 py-0.5 rounded bg-cyber-violet/20 border border-cyber-violet/40">
                  v4.9
                </span>
              </div>
              <div className="flex items-center space-x-1.5 text-[10px] text-cyber-muted font-mono tracking-widest uppercase">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-ping" />
                <span>ONLINE // SYNCED</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                onMouseEnter={() => sounds.playHover()}
                className="font-mono text-xs tracking-wider text-slate-300 hover:text-cyber-cyan transition-colors relative py-1 group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-cyan transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#00f2fe]" />
              </a>
            ))}
          </nav>

          {/* Right Status Controls */}
          <div className="flex items-center space-x-4">
            {/* Live Clock & Latency badge */}
            <div className="hidden lg:flex items-center space-x-3 text-xs font-mono text-slate-400 bg-cyber-card border border-slate-800 px-3 py-1.5 rounded">
              <span className="text-cyber-cyan">{timeStr}</span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center text-cyber-emerald space-x-1">
                <Activity className="w-3.5 h-3.5" />
                <span>0.18ms</span>
              </span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                onToggleSound();
                sounds.playSelect();
              }}
              onMouseEnter={() => sounds.playHover()}
              title={isMuted ? 'Unmute SFX' : 'Mute SFX'}
              className="p-2 rounded bg-cyber-card border border-cyber-border hover:border-cyber-cyan text-cyber-cyan transition-all hover:shadow-[0_0_12px_rgba(0,242,254,0.3)]"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-slate-500" />
              ) : (
                <Volume2 className="w-4 h-4 text-cyber-cyan" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                sounds.playSelect();
              }}
              className="md:hidden p-2 rounded bg-cyber-card border border-slate-800 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-6 bg-cyber-dark/95 border border-cyber-border rounded-lg backdrop-blur-xl">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="font-mono text-sm text-slate-300 hover:text-cyber-cyan py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400">
                <span>TIME: {timeStr}</span>
                <span className="text-cyber-emerald">PING: 0.18ms</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

