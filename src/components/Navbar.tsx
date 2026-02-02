'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-void/95 backdrop-blur-sm border-b border-slate' : ''
    }`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-neon flex items-center justify-center" style={{ background: 'var(--color-neon)' }}>
              <span className="text-void font-bold text-sm">C</span>
            </div>
            <span className="font-mono text-sm tracking-wider text-cloud group-hover:text-neon transition-colors">
              COPUTE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-xs uppercase tracking-wider text-smoke hover:text-neon transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-xs uppercase tracking-wider text-smoke hover:text-neon transition-colors">
              Protocol
            </Link>
            <Link href="#tokenomics" className="text-xs uppercase tracking-wider text-smoke hover:text-neon transition-colors">
              Token
            </Link>
            <Link href="https://docs.copute.io" target="_blank" className="text-xs uppercase tracking-wider text-smoke hover:text-neon transition-colors flex items-center gap-1">
              Docs
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-xs uppercase tracking-wider text-smoke hover:text-cloud transition-colors">
              Launch App
            </button>
            <button className="btn-primary py-2.5 px-5 text-[10px]">
              Get Extension
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center border border-slate"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <div className={`w-5 h-px bg-cloud transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <div className={`w-5 h-px bg-cloud transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-px bg-cloud transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-slate py-6 space-y-4 bg-void">
            <Link href="#features" className="block text-sm uppercase tracking-wider text-smoke hover:text-neon py-2">Features</Link>
            <Link href="#how-it-works" className="block text-sm uppercase tracking-wider text-smoke hover:text-neon py-2">Protocol</Link>
            <Link href="#tokenomics" className="block text-sm uppercase tracking-wider text-smoke hover:text-neon py-2">Token</Link>
            <Link href="https://docs.copute.io" className="block text-sm uppercase tracking-wider text-smoke hover:text-neon py-2">Docs</Link>
            <div className="pt-4 flex gap-3">
              <button className="flex-1 btn-secondary py-3 text-xs">Launch App</button>
              <button className="flex-1 btn-primary py-3 text-xs">Get Extension</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
