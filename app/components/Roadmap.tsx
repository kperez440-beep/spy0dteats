"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { RevealText } from "@/app/components/ui/RevealText";

const phases = [
  {
    phase: "Phase 1",
    label: "Early Access — Now",
    status: "live",
    color: "#10B981",
    items: [
      "11-signal confluence engine",
      "ML win probability model",
      "Intraday playback & simulation",
      "Auto-learn engine",
      "Strategy backtesting",
      "Risk controls & position sizing",
      "Live trade automation (beta)",
    ],
  },
  {
    phase: "Phase 2",
    label: "Q3 2026",
    status: "building",
    color: "#F0B429",
    items: [
      "Custom strategy builder",
      "Portfolio-level backtesting",
      "Extended signal library (15+ signals)",
      "Community feature lab",
      "Mobile companion app",
      "Advanced options chain view",
    ],
  },
  {
    phase: "Phase 3",
    label: "Q4 2026",
    status: "planned",
    color: "#1B72C0",
    items: [
      "AI strategy research agents",
      "Natural language strategy prompting",
      "Autonomous learning from live sessions",
      "Peer analytics & social signals",
      "Trader advisory input board",
    ],
  },
  {
    phase: "Phase 4",
    label: "2027",
    status: "vision",
    color: "#06B6D4",
    items: [
      "Full public API & data feed",
      "Multi-asset expansion",
      "Copy trading network",
      "Institutional reporting suite",
      "Quant research marketplace",
    ],
  },
];

const statusBadge: Record<string, { label: string; bg: string; text: string }> = {
  live: { label: "Live", bg: "#10B98115", text: "#10B981" },
  building: { label: "Building", bg: "#F0B42912", text: "#F0B429" },
  planned: { label: "Planned", bg: "#1B72C015", text: "#1B72C0" },
  vision: { label: "Vision", bg: "#06B6D412", text: "#06B6D4" },
};

const timelineDots = [
  { color: "#10B981", filled: true, label: "Phase 1", pulse: false },
  { color: "#F0B429", filled: true, label: "Phase 2", pulse: true },
  { color: "#1B72C0", filled: false, label: "Phase 3", pulse: false },
  { color: "#06B6D4", filled: false, label: "Phase 4", pulse: false },
];

function TimelineConnector() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let start: number | null = null;
          const duration = 1200;
          const target = 0.35; // 35% = between phase 2 and 3
          const tick = (ts: number) => {
            if (!start) start = ts;
            const elapsed = ts - start;
            const p = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setProgress(eased * target);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="hidden xl:flex items-center mb-6 px-2 relative" aria-hidden="true">
      {/* Base track */}
      <div className="absolute left-[12.5%] right-[12.5%] h-px top-1/2 -translate-y-1/2 bg-[#1E2D3D]" />

      {/* Animated fill */}
      <div
        className="absolute left-[12.5%] h-[2px] top-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: `${progress * 75}%`,
          background: "linear-gradient(90deg, #10B981, #F0B429)",
          transition: "width 0.05s linear",
          boxShadow: "0 0 8px rgba(240,180,41,0.4)",
        }}
      />

      {/* Dots */}
      {timelineDots.map((dot, i) => (
        <div key={dot.label} className="flex-1 flex flex-col items-center gap-2 relative z-10">
          <div className="text-[9px] font-mono tracking-widest uppercase mb-1" style={{ color: dot.color + "80" }}>
            {dot.label}
          </div>
          <div className="relative">
            {dot.pulse && (
              <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: dot.color, opacity: 0.3 }}
              />
            )}
            <div
              className="w-3.5 h-3.5 rounded-full border-2 relative z-10"
              style={{
                background: dot.filled ? dot.color : "#0D1520",
                borderColor: dot.color,
                boxShadow: dot.filled ? `0 0 10px ${dot.color}60` : "none",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function PhaseCard({ p, delay }: { p: (typeof phases)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const badge = statusBadge[p.status];

  return (
    <div
      ref={ref}
      className="relative flex flex-col p-6 rounded-2xl border border-[#1E2D3D] bg-[#0D1520] transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${delay}ms`,
        boxShadow: visible ? `0 0 40px ${p.color}0A` : "none",
      }}
    >
      {/* Phase label */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[10px] font-mono tracking-widest uppercase text-slate-600 mb-0.5">
            {p.phase}
          </div>
          <div className="text-sm font-semibold text-white">{p.label}</div>
        </div>
        <div
          className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full font-semibold"
          style={{ background: badge.bg, color: badge.text }}
        >
          {badge.label}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#1E2D3D] mb-4" style={{ background: `linear-gradient(90deg, ${p.color}30, transparent)` }} />

      {/* Items */}
      <ul className="space-y-2.5 flex-1">
        {p.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[12px] text-slate-400">
            <svg className="mt-[3px] shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              {p.status === "live" ? (
                <path d="M1.5 6l3 3L10.5 2" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <circle cx="6" cy="6" r="2" fill={p.color} fillOpacity="0.5" />
              )}
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(27,114,192,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 border border-amber-400/20 bg-amber-400/5 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-amber-400/80 uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 pulse-dot inline-block" />
            In Active Development
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <RevealText text="We're building the future of SPY trading." />
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            SPY Pivot Pro is a live, evolving platform. What you see today is Phase 1.
            AI agents, strategy research tools, community input, and full automation are already
            in design. This is year one.
          </p>
        </div>

        {/* Animated timeline connector */}
        <TimelineConnector />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {phases.map((p, i) => (
            <PhaseCard key={p.phase} p={p} delay={i * 100} />
          ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl border border-[#1E2D3D] bg-[#0D1520] flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2l2 5.5h5.5l-4.5 3.5 1.5 5.5L10 13l-4.5 3.5 1.5-5.5L2.5 7.5H8L10 2z" fill="#F0B429" fillOpacity="0.8" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-white mb-0.5">Built with traders, for traders</div>
            <div className="text-[12px] text-slate-500 leading-relaxed">
              Phase 3 and beyond are shaped by what traders actually need. Feature requests, strategy ideas, and
              edge cases from real sessions inform every sprint.
            </div>
          </div>
          <a
            href="#community"
            className="shrink-0 text-[12px] font-mono font-semibold text-amber-400 border border-amber-400/30 px-4 py-2 rounded-lg hover:bg-amber-400/10 transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Shape the roadmap
          </a>
        </div>
      </div>
    </section>
  );
}
