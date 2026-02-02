'use client';

const distribution = [
  { label: 'Compute Rewards', percent: 40, color: 'neon' },
  { label: 'Investors', percent: 20, color: 'amber' },
  { label: 'Team', percent: 15, color: 'rose' },
  { label: 'Ecosystem', percent: 15, color: 'cyan' },
  { label: 'Treasury', percent: 10, color: 'fog' },
];

const utilities = [
  { icon: '💳', title: 'Compute Payments', desc: 'Pay for GPU time with COPUTE tokens' },
  { icon: '🎁', title: 'Staking Rewards', desc: 'Stake to earn boosted APY' },
  { icon: '🗳️', title: 'Governance', desc: 'Vote on protocol upgrades' },
  { icon: '⚡', title: 'Priority Access', desc: 'Skip queues with token holdings' },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-32 relative bg-graphite">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-6">
            <div className="tag mb-6">
              <span className="text-smoke">SECTION 03</span>
              <span className="text-fog">//</span>
              <span className="text-amber">TOKENOMICS</span>
            </div>
            <h2 className="text-display text-4xl md:text-6xl text-snow">
              $COPUTE
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-fog text-lg leading-relaxed">
              The native utility token powering decentralized AI compute. Fair launch on Solana.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Token stats & distribution */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-px bg-slate">
              <div className="metric-card">
                <div className="text-xs text-smoke uppercase tracking-wider mb-3">Total Supply</div>
                <div className="text-2xl md:text-3xl font-mono text-cloud">500,000,000</div>
              </div>
              <div className="metric-card">
                <div className="text-xs text-smoke uppercase tracking-wider mb-3">Network</div>
                <div className="text-2xl md:text-3xl font-mono text-cyan">SOLANA</div>
              </div>
              <div className="metric-card">
                <div className="text-xs text-smoke uppercase tracking-wider mb-3">Initial Circ.</div>
                <div className="text-2xl md:text-3xl font-mono text-cloud">15%</div>
              </div>
              <div className="metric-card">
                <div className="text-xs text-smoke uppercase tracking-wider mb-3">Rewards Pool</div>
                <div className="text-2xl md:text-3xl font-mono text-neon">40%</div>
              </div>
            </div>

            {/* Distribution bar */}
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="text-xs text-fog">TOKEN_DISTRIBUTION</span>
              </div>
              <div className="p-6 space-y-6">
                {/* Bar */}
                <div className="flex h-10 overflow-hidden">
                  {distribution.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center text-xs font-mono text-void font-bold"
                      style={{
                        width: `${item.percent}%`,
                        background: `var(--color-${item.color})`
                      }}
                    >
                      {item.percent}%
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 gap-3">
                  {distribution.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <div
                        className="w-3 h-3"
                        style={{ background: `var(--color-${item.color})` }}
                      />
                      <span className="text-fog">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Utilities */}
          <div className="terminal-card h-fit">
            <div className="terminal-header">
              <span className="text-xs text-fog">TOKEN_UTILITIES</span>
            </div>
            <div className="p-6 space-y-4">
              {utilities.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-graphite border border-slate hover:border-neon transition-colors">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-cloud font-medium mb-1">{item.title}</div>
                    <div className="text-smoke text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
