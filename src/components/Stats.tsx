'use client';

export default function Stats() {
  return (
    <section className="py-4 border-y border-slate bg-carbon">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between overflow-x-auto hide-scrollbar">
          {/* Scrolling ticker effect */}
          <div className="flex items-center gap-12 py-4 min-w-max">
            <div className="flex items-center gap-3">
              <span className="text-xs text-smoke uppercase tracking-wider">Active Nodes</span>
              <span className="text-neon font-mono">10,847</span>
            </div>
            <div className="w-px h-4 bg-slate" />
            <div className="flex items-center gap-3">
              <span className="text-xs text-smoke uppercase tracking-wider">Network Power</span>
              <span className="text-cyan font-mono">2.5 PFLOPs</span>
            </div>
            <div className="w-px h-4 bg-slate" />
            <div className="flex items-center gap-3">
              <span className="text-xs text-smoke uppercase tracking-wider">Total Rewards</span>
              <span className="text-amber font-mono">$521,847</span>
            </div>
            <div className="w-px h-4 bg-slate" />
            <div className="flex items-center gap-3">
              <span className="text-xs text-smoke uppercase tracking-wider">Avg. APY</span>
              <span className="text-neon font-mono">42.8%</span>
            </div>
            <div className="w-px h-4 bg-slate" />
            <div className="flex items-center gap-3">
              <span className="text-xs text-smoke uppercase tracking-wider">Tasks/24h</span>
              <span className="text-cloud font-mono">847,293</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
