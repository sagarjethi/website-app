'use client';

export default function CTA() {
  return (
    <section className="py-32 relative bg-graphite overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,159,0.1)_0%,transparent_70%)]" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="terminal-card corner-accent">
          <div className="terminal-header">
            <div className="terminal-dot" style={{ background: '#ff5f56' }} />
            <div className="terminal-dot" style={{ background: '#ffbd2e' }} />
            <div className="terminal-dot" style={{ background: '#27ca40' }} />
            <span className="ml-auto text-xs text-smoke">ready_to_earn.sh</span>
          </div>

          <div className="p-10 md:p-16 text-center">
            {/* ASCII art style header */}
            <div className="font-mono text-xs text-slate mb-8 hidden md:block">
              {'╔═══════════════════════════════════════════════════════════════════╗'}
            </div>

            <h2 className="text-display text-4xl md:text-6xl text-snow mb-6">
              Ready to <span className="text-display-italic glow-neon">Earn</span>?
            </h2>

            <p className="text-fog text-lg mb-10 max-w-lg mx-auto">
              Join 10,000+ contributors powering the decentralized AI revolution.
            </p>

            {/* Terminal command */}
            <div className="inline-block bg-void border border-slate px-6 py-4 mb-10 font-mono text-sm">
              <span className="text-neon">$</span>
              <span className="text-cloud ml-2">copute --start --earn</span>
              <span className="animate-blink text-neon ml-1">▋</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto btn-primary animate-pulse-glow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Install Extension
              </button>
              <button className="w-full sm:w-auto btn-secondary">
                Read Documentation
              </button>
            </div>

            <div className="font-mono text-xs text-slate mt-8 hidden md:block">
              {'╚═══════════════════════════════════════════════════════════════════╝'}
            </div>

            {/* Stats */}
            <div className="mt-12 pt-10 border-t border-slate">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-2xl md:text-3xl font-mono text-neon data-value">10K+</div>
                  <div className="text-xs text-smoke uppercase tracking-wider mt-1">Active Devices</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-mono text-cyan data-value">50+</div>
                  <div className="text-xs text-smoke uppercase tracking-wider mt-1">Countries</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-mono text-amber data-value">99.9%</div>
                  <div className="text-xs text-smoke uppercase tracking-wider mt-1">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
