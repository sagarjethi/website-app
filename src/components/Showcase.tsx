'use client';

const providers = [
  { label: 'Passive Income', value: 'Turn idle resources into crypto' },
  { label: 'Zero Complexity', value: 'Browser extension, nothing more' },
  { label: 'Full Control', value: 'Set limits, pause anytime' },
  { label: 'Transparent', value: 'On-chain reward verification' },
];

const developers = [
  { label: 'Cost Reduction', value: '40-70% cheaper than AWS/GCP' },
  { label: 'No Queues', value: 'Instant GPU access worldwide' },
  { label: 'Pay Per Use', value: 'Only pay for compute consumed' },
  { label: 'API Access', value: 'Programmatic job submission' },
];

export default function Showcase() {
  return (
    <section className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-px bg-slate">
          {/* Left - For Providers */}
          <div className="bg-carbon p-10 lg:p-16 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-neon" style={{ background: 'var(--color-neon)' }} />

            <div className="tag mb-8">
              <span className="text-neon">FOR COMPUTE PROVIDERS</span>
            </div>

            <h3 className="text-display text-3xl md:text-4xl text-snow mb-6">
              Monetize Your <span className="text-display-italic text-neon">Idle</span> GPU
            </h3>

            <p className="text-fog mb-10 leading-relaxed">
              Your gaming rig. Your workstation. Even your laptop. If it has a GPU, it can earn you COPUTE tokens while you sleep.
            </p>

            <div className="space-y-4">
              {providers.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-graphite border border-slate">
                  <span className="text-neon text-xs font-mono mt-1">0{i + 1}</span>
                  <div>
                    <div className="text-cloud text-sm font-medium mb-1">{item.label}</div>
                    <div className="text-smoke text-xs">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - For Developers */}
          <div className="bg-carbon p-10 lg:p-16 relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan" style={{ background: 'var(--color-cyan)' }} />

            <div className="tag mb-8">
              <span className="text-cyan">FOR AI DEVELOPERS</span>
            </div>

            <h3 className="text-display text-3xl md:text-4xl text-snow mb-6">
              Decentralized <span className="text-display-italic text-cyan">Compute</span> on Demand
            </h3>

            <p className="text-fog mb-10 leading-relaxed">
              Access a global network of GPUs at a fraction of cloud prices. No commitments, no minimums, just pure compute power.
            </p>

            <div className="space-y-4">
              {developers.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-graphite border border-slate">
                  <span className="text-cyan text-xs font-mono mt-1">0{i + 1}</span>
                  <div>
                    <div className="text-cloud text-sm font-medium mb-1">{item.label}</div>
                    <div className="text-smoke text-xs">{item.value}</div>
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
