'use client';

const features = [
  {
    id: '01',
    title: 'Browser Native',
    subtitle: 'Zero Downloads',
    description: 'WebGPU technology enables near-native performance directly in your browser. No software to install.',
    icon: '🌐',
    accent: 'neon',
  },
  {
    id: '02',
    title: 'Cryptographic Security',
    subtitle: 'E2E Encrypted',
    description: 'All compute tasks are encrypted end-to-end. Your device, your data, your control.',
    icon: '🔐',
    accent: 'cyan',
  },
  {
    id: '03',
    title: 'Instant Rewards',
    subtitle: 'Real-time Settlement',
    description: 'Earn COPUTE tokens for every compute cycle. Rewards calculated and distributed in real-time.',
    icon: '💎',
    accent: 'amber',
  },
  {
    id: '04',
    title: 'Full Autonomy',
    subtitle: 'Your Rules',
    description: 'Set custom resource limits. Auto-pause when gaming or on battery. You define the terms.',
    icon: '⚙️',
    accent: 'neon',
  },
  {
    id: '05',
    title: 'Global Mesh',
    subtitle: '50+ Countries',
    description: 'Join a worldwide network of contributors powering the next generation of AI applications.',
    icon: '🌍',
    accent: 'cyan',
  },
  {
    id: '06',
    title: 'Transparent',
    subtitle: 'On-chain Proofs',
    description: 'Every compute task verified on Solana. Fully auditable reward distribution.',
    icon: '📊',
    accent: 'amber',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <div className="tag mb-6">
              <span className="text-smoke">SECTION 01</span>
              <span className="text-fog">//</span>
              <span className="text-neon">FEATURES</span>
            </div>
            <h2 className="text-display text-4xl md:text-5xl text-snow mb-6">
              Why Copute?
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-fog text-lg leading-relaxed">
              Built for the future of decentralized compute. Designed for simplicity. Engineered for performance.
            </p>
          </div>
        </div>

        {/* Features grid - asymmetric */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate">
          {features.map((feature, i) => (
            <div
              key={feature.id}
              className="bg-carbon p-8 lg:p-10 group hover:bg-graphite transition-colors duration-300 relative"
            >
              {/* Top accent line on hover */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-${feature.accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                style={{ background: `var(--color-${feature.accent})` }}
              />

              {/* Feature number */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-4xl">{feature.icon}</span>
                <span className="text-xs text-slate font-mono">{feature.id}</span>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-wider" style={{ color: `var(--color-${feature.accent})` }}>
                  {feature.subtitle}
                </div>
                <h3 className="text-xl text-cloud font-medium">
                  {feature.title}
                </h3>
                <p className="text-fog text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom arrow on hover */}
              <div className="mt-8 flex items-center gap-2 text-smoke group-hover:text-neon transition-colors">
                <span className="text-xs uppercase tracking-wider">Learn more</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className="transform group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
