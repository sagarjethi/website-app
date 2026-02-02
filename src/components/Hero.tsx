'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCount(prev => prev + Math.random() * 0.001);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,159,0.08)_0%,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,212,255,0.05)_0%,transparent_70%)]" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col max-w-[1400px] mx-auto w-full px-6 pt-32 pb-20">

        {/* Top section with asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 flex-1">

          {/* Left column - Main headline */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Status badge */}
            <div className={`mb-8 opacity-0 ${mounted ? 'animate-fade-up' : ''}`}>
              <div className="tag">
                <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" style={{ background: 'var(--color-neon)' }} />
                <span className="text-fog">NETWORK STATUS:</span>
                <span className="text-neon">OPERATIONAL</span>
              </div>
            </div>

            {/* Main headline - mixing fonts */}
            <h1 className={`mb-8 opacity-0 ${mounted ? 'animate-fade-up delay-100' : ''}`}>
              <span className="block text-terminal text-fog mb-4">// INTRODUCING</span>
              <span className="block text-display text-6xl md:text-8xl lg:text-9xl text-snow tracking-tight">
                Copute
              </span>
            </h1>

            {/* Subtitle with terminal aesthetic */}
            <div className={`mb-12 opacity-0 ${mounted ? 'animate-fade-up delay-200' : ''}`}>
              <p className="text-xl md:text-2xl text-fog leading-relaxed max-w-xl">
                <span className="text-neon">{'>'}</span> Decentralized AI compute network.
                <br />
                <span className="text-neon">{'>'}</span> Earn <span className="text-display-italic text-cyan">crypto</span> with idle GPU power.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-4 mb-16 opacity-0 ${mounted ? 'animate-fade-up delay-300' : ''}`}>
              <button className="btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Install Extension
              </button>
              <button className="btn-secondary">
                View Docs
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Stats row */}
            <div className={`grid grid-cols-3 gap-6 max-w-lg opacity-0 ${mounted ? 'animate-fade-up delay-400' : ''}`}>
              <div>
                <div className="text-xs text-smoke uppercase tracking-wider mb-2">Devices</div>
                <div className="text-2xl md:text-3xl font-mono text-neon data-value">10,847</div>
              </div>
              <div>
                <div className="text-xs text-smoke uppercase tracking-wider mb-2">Network</div>
                <div className="text-2xl md:text-3xl font-mono text-cyan data-value">2.5 PF</div>
              </div>
              <div>
                <div className="text-xs text-smoke uppercase tracking-wider mb-2">Paid Out</div>
                <div className="text-2xl md:text-3xl font-mono text-amber data-value">$521K</div>
              </div>
            </div>
          </div>

          {/* Right column - Terminal preview */}
          <div className={`lg:col-span-5 flex items-center opacity-0 ${mounted ? 'animate-slide-left delay-500' : ''}`}>
            <div className="w-full">
              <div className="terminal-card corner-accent">
                {/* Terminal header */}
                <div className="terminal-header">
                  <div className="terminal-dot" style={{ background: '#ff5f56' }} />
                  <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
                  <div className="terminal-dot" style={{ background: '#27ca40' }} />
                  <span className="ml-auto text-xs text-smoke">copute_worker.exe</span>
                </div>

                {/* Terminal body */}
                <div className="p-6 font-mono text-sm space-y-4">
                  {/* Status line */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="status-live text-neon">COMPUTING</span>
                    <span className="text-smoke">{new Date().toLocaleTimeString()}</span>
                  </div>

                  {/* Divider */}
                  <div className="divider" />

                  {/* GPU Info */}
                  <div className="space-y-3">
                    <div className="text-xs text-smoke uppercase tracking-wider">GPU_DETECTED</div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-graphite border border-slate flex items-center justify-center text-lg">
                        🎮
                      </div>
                      <div>
                        <div className="text-cloud">NVIDIA RTX 4080</div>
                        <div className="text-xs text-smoke">12.4 TFLOPs | VRAM: 16GB</div>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-smoke">GPU_UTILIZATION</span>
                      <span className="text-neon">73%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '73%' }} />
                    </div>
                  </div>

                  {/* Earnings */}
                  <div className="bg-graphite border border-slate p-4">
                    <div className="text-xs text-smoke mb-2">SESSION_EARNINGS</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-neon data-value">
                        {count.toFixed(4)}
                      </span>
                      <span className="text-smoke">COPUTE</span>
                    </div>
                    <div className="text-xs text-cyan mt-2">+0.0012/min</div>
                  </div>

                  {/* Task info */}
                  <div className="text-xs space-y-1">
                    <div className="text-smoke">CURRENT_TASK:</div>
                    <div className="prompt text-fog">matrix_multiplication_batch_0x7f3a</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className={`flex justify-center mt-auto pt-12 opacity-0 ${mounted ? 'animate-fade-in delay-700' : ''}`}>
          <div className="flex flex-col items-center gap-2 text-smoke">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
