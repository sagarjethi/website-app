'use client';

const steps = [
  {
    step: '01',
    command: 'INSTALL',
    title: 'Get the Extension',
    description: 'One-click Chrome extension install. No accounts, no signups, no friction.',
    code: '$ chrome.install("copute-extension")',
  },
  {
    step: '02',
    command: 'CONNECT',
    title: 'Link Your Wallet',
    description: 'Connect Phantom, Solflare, or any Solana wallet to receive your earnings.',
    code: '$ wallet.connect(PHANTOM | SOLFLARE)',
  },
  {
    step: '03',
    command: 'EXECUTE',
    title: 'Start Computing',
    description: 'Toggle on and start earning. Your idle GPU cycles become passive income.',
    code: '$ copute.start() // earnings: ++',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative bg-graphite">
      {/* Diagonal stripes background */}
      <div className="absolute inset-0 stripes opacity-30" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="tag inline-flex mb-6">
            <span className="text-smoke">SECTION 02</span>
            <span className="text-fog">//</span>
            <span className="text-neon">PROTOCOL</span>
          </div>
          <h2 className="text-display text-4xl md:text-6xl text-snow mb-6">
            Three Steps to <span className="text-display-italic text-neon">Passive</span> Income
          </h2>
          <p className="text-fog text-lg max-w-2xl mx-auto">
            From zero to earning in under 60 seconds.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((item, i) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-px bg-slate z-10" />
              )}

              <div className="terminal-card h-full">
                {/* Header */}
                <div className="terminal-header">
                  <span className="text-xs text-neon font-mono">{item.command}</span>
                  <span className="ml-auto text-xs text-slate">step_{item.step}</span>
                </div>

                {/* Body */}
                <div className="p-8">
                  {/* Step number */}
                  <div className="text-6xl font-display text-slate mb-6">
                    {item.step}
                  </div>

                  <h3 className="text-xl text-cloud mb-4">{item.title}</h3>
                  <p className="text-fog text-sm leading-relaxed mb-8">{item.description}</p>

                  {/* Code block */}
                  <div className="bg-void border border-slate p-4 font-mono text-xs">
                    <span className="text-neon">{item.code}</span>
                    <span className="animate-blink text-neon ml-1">▋</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-primary">
            <span>Start Now</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
