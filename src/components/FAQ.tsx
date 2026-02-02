'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What is Copute?',
    a: 'Copute is a decentralized AI compute network. Contributors share idle GPU power and earn COPUTE tokens. Developers access affordable compute resources for AI training and inference.',
  },
  {
    q: 'How do I start earning?',
    a: 'Install our Chrome extension, connect a Solana wallet (Phantom/Solflare), and toggle "Start". Your GPU will begin processing tasks and earning tokens automatically.',
  },
  {
    q: 'Is it safe?',
    a: 'Yes. Copute uses WebGPU which runs sandboxed in your browser. All data is encrypted end-to-end. The extension cannot access your files or personal data.',
  },
  {
    q: 'What hardware do I need?',
    a: 'Any WebGPU-compatible GPU from the last 5 years. This includes most NVIDIA, AMD, and Apple Silicon devices. CPU fallback available for older systems.',
  },
  {
    q: 'How are rewards calculated?',
    a: 'Rewards are based on compute units (TFLOPs) contributed, task completion rate, and device reputation score. All calculations are transparent and verifiable on-chain.',
  },
  {
    q: 'Why Solana?',
    a: 'Solana offers high throughput, sub-second finality, and minimal fees—perfect for real-time proof-of-compute verification and instant reward distribution.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 relative">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag inline-flex mb-6">
            <span className="text-smoke">SECTION 04</span>
            <span className="text-fog">//</span>
            <span className="text-neon">FAQ</span>
          </div>
          <h2 className="text-display text-4xl md:text-5xl text-snow">
            Common Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate">
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-graphite transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-slate font-mono">0{i + 1}</span>
                  <span className="text-cloud">{faq.q}</span>
                </div>
                <div className={`w-6 h-6 border border-slate flex items-center justify-center transition-all ${
                  openIndex === i ? 'bg-neon border-neon rotate-45' : ''
                }`}
                style={openIndex === i ? { background: 'var(--color-neon)', borderColor: 'var(--color-neon)' } : {}}>
                  <span className={`text-sm ${openIndex === i ? 'text-void' : 'text-smoke'}`}>+</span>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-48' : 'max-h-0'
              }`}>
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-10 text-fog text-sm leading-relaxed border-l border-slate ml-1">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
