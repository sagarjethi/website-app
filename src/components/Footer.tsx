'use client';

import Link from 'next/link';

const links = {
  product: [
    { label: 'Extension', href: '#' },
    { label: 'Dashboard', href: '#' },
    { label: 'API', href: '#' },
    { label: 'SDK', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Whitepaper', href: '#' },
    { label: 'GitHub', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  social: [
    { label: 'Twitter', href: '#', icon: '𝕏' },
    { label: 'Discord', href: '#', icon: '◆' },
    { label: 'Telegram', href: '#', icon: '✈' },
    { label: 'GitHub', href: '#', icon: '◇' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-neon flex items-center justify-center" style={{ background: 'var(--color-neon)' }}>
                <span className="text-void font-bold text-sm">C</span>
              </div>
              <span className="font-mono text-sm tracking-wider text-cloud">COPUTE</span>
            </Link>
            <p className="text-smoke text-sm leading-relaxed mb-6 max-w-xs">
              Decentralized AI compute network. Earn crypto by contributing idle GPU power.
            </p>

            {/* Social links */}
            <div className="flex gap-2">
              {links.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-10 h-10 border border-slate flex items-center justify-center text-smoke hover:text-neon hover:border-neon transition-colors"
                  aria-label={item.label}
                >
                  <span className="text-sm">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="text-xs text-smoke uppercase tracking-wider mb-4">Product</div>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-fog hover:text-neon transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div className="text-xs text-smoke uppercase tracking-wider mb-4">Resources</div>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-fog hover:text-neon transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs text-smoke uppercase tracking-wider mb-4">Company</div>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-fog hover:text-neon transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <div className="text-xs text-smoke uppercase tracking-wider mb-4">Updates</div>
            <p className="text-xs text-fog mb-4">Subscribe to our newsletter.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="email@example.com"
                className="flex-1 bg-carbon border border-slate px-3 py-2 text-xs text-cloud placeholder:text-slate focus:outline-none focus:border-neon transition-colors"
              />
              <button className="bg-neon text-void px-4 text-xs font-bold hover:bg-cyan transition-colors" style={{ background: 'var(--color-neon)' }}>
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-smoke">
            © 2024 Copute. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-smoke">
            <Link href="#" className="hover:text-cloud transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-cloud transition-colors">Terms</Link>
            <span className="text-slate">|</span>
            <span className="status-live text-neon">Network Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
