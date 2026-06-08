"use client";
import { useEffect, useRef, useState } from "react";
import { RevealText } from "@/app/components/ui/RevealText";

/* Primary signals are named — they're well-known.
   Secondary & confirmatory are redacted to protect methodology. */
const signals = [
  {
    name: "Momentum Oscillator",
    score: 74,
    tier: "primary",
    direction: "BULL",
    color: "#10B981",
    redacted: false,
  },
  {
    name: "Trend Crossover",
    score: 82,
    tier: "primary",
    direction: "BULL",
    color: "#10B981",
    redacted: false,
  },
  {
    name: "Intraday Anchor",
    score: 91,
    tier: "primary",
    direction: "BULL",
    color: "#10B981",
    redacted: false,
  },
  {
    name: "Signal #4",
    score: 63,
    tier: "secondary",
    direction: "NEUTRAL",
    color: "#F0B429",
    redacted: true,
  },
  {
    name: "Signal #5",
    score: 79,
    tier: "secondary",
    direction: "BULL",
    color: "#10B981",
    redacted: true,
  },
  {
    name: "Signal #6",
    score: 85,
    tier: "secondary",
    direction: "BULL",
    color: "#10B981",
    redacted: true,
  },
  {
    name: "Signal #7",
    score: 58,
    tier: "confirmatory",
    direction: "NEUTRAL",
    color: "#F0B429",
    redacted: true,
  },
  {
    name: "Signal #8",
    score: 77,
    tier: "confirmatory",
    direction: "BULL",
    color: "#10B981",
    redacted: true,
  },
  {
    name: "Signal #9",
    score: 88,
    tier: "confirmatory",
    direction: "BULL",
    color: "#10B981",
    redacted: true,
  },
  {
    name: "Signal #10",
    score: 66,
    tier: "confirmatory",
    direction: "BULL",
    color: "#10B981",
    redacted: true,
  },
  {
    name: "Signal #11",
    score: 72,
    tier: "confirmatory",
    direction: "BULL",
    color: "#10B981",
    redacted: true,
  },
];

const COMPOSITE = 78;

const tierLabels: Record<string, string> = {
  primary: "Primary",
  secondary: "Secondary",
  confirmatory: "Confirmatory",
};

const tierColors: Record<string, string> = {
  primary: "#F0B429",
  secondary: "#06B6D4",
  confirmatory: "#64748B",
};

export function Confluence() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const grouped = {
    primary: signals.filter((s) => s.tier === "primary"),
    secondary: signals.filter((s) => s.tier === "secondary"),
    confirmatory: signals.filter((s) => s.tier === "confirmatory"),
  };

  return (
    <section id="signals" className="py-24 px-4 relative" ref={ref}>
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at left, rgba(240,180,41,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-[11px] font-mono tracking-widest text-amber-400/70 uppercase mb-3">
            Signal Confluence Engine
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <RevealText text="11 signals. One composite score." />
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Not every signal carries equal weight. Primary signals drive the call. Secondary
            signals add confidence. Confirmatory signals validate context. The weighted aggregate
            is your trade decision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Signal columns */}
          <div className="lg:col-span-2 space-y-5">
            {(["primary", "secondary", "confirmatory"] as const).map((tier) => (
              <div key={tier}>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: tierColors[tier] }}
                  />
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase font-semibold"
                    style={{ color: tierColors[tier] }}
                  >
                    {tierLabels[tier]} Signals
                  </span>
                  <span className="text-[10px] font-mono text-slate-600 ml-1">
                    (weight {tier === "primary" ? "2×" : tier === "secondary" ? "1.5×" : "1×"})
                  </span>
                </div>
                <div className="space-y-2">
                  {grouped[tier].map((sig) => (
                    <div
                      key={sig.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-[#0D1520] border border-[#1E2D3D]"
                      style={{ opacity: sig.redacted ? 0.75 : 1 }}
                    >
                      {/* Signal name — blurred if redacted */}
                      <div className="w-32 shrink-0 flex items-center gap-1.5">
                        {sig.redacted && (
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <rect x="2" y="5" width="8" height="6" rx="1" stroke="#64748B" strokeWidth="1.2"/>
                            <path d="M4 5V3.5a2 2 0 0 1 4 0V5" stroke="#64748B" strokeWidth="1.2" strokeLinecap="round"/>
                          </svg>
                        )}
                        <span
                          className="text-[11px] font-mono text-slate-400 truncate select-none"
                          style={sig.redacted ? { filter: "blur(4px)", color: "#475569" } : {}}
                          aria-label={sig.redacted ? "Classified signal" : sig.name}
                        >
                          {sig.name}
                        </span>
                      </div>
                      <div className="flex-1 h-1.5 bg-[#1a2535] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: visible ? `${sig.score}%` : "0%",
                            background: sig.redacted ? "#334155" : sig.color,
                            transitionDelay: `${signals.indexOf(sig) * 60}ms`,
                          }}
                        />
                      </div>
                      <span
                        className="text-[11px] font-mono w-6 text-right font-semibold"
                        style={{ color: sig.redacted ? "#475569" : sig.color,
                                 filter: sig.redacted ? "blur(3px)" : "none" }}
                      >
                        {sig.score}
                      </span>
                      <span
                        className="text-[9px] font-mono w-14 text-center px-1.5 py-0.5 rounded border"
                        style={{
                          color: sig.redacted ? "#475569" : sig.color,
                          borderColor: sig.redacted ? "#1E2D3D" : `${sig.color}33`,
                          background: sig.redacted ? "transparent" : `${sig.color}0D`,
                          filter: sig.redacted ? "blur(3px)" : "none",
                        }}
                      >
                        {sig.direction}
                      </span>
                    </div>
                  ))}
                </div>
                {tier === "primary" && (
                  <div className="flex items-center gap-1.5 mt-2 pl-1">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <rect x="2" y="5" width="8" height="6" rx="1" stroke="#475569" strokeWidth="1.2"/>
                      <path d="M4 5V3.5a2 2 0 0 1 4 0V5" stroke="#475569" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    <span className="text-[10px] font-mono text-slate-600">
                      Secondary &amp; confirmatory signals redacted — revealed to members
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Composite score card */}
          <div className="flex flex-col gap-5 sticky top-28">
            <div
              className="p-6 rounded-2xl border border-[#1E2D3D] bg-[#0D1520] text-center"
              style={{ boxShadow: "0 0 48px rgba(16,185,129,0.08)" }}
            >
              <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-4">
                Composite Score
              </div>

              {/* Arc gauge */}
              <div className="relative mx-auto mb-4" style={{ width: 140, height: 80 }}>
                <svg viewBox="0 0 140 80" className="w-full h-full">
                  <path
                    d="M 14 76 A 56 56 0 0 1 126 76"
                    fill="none"
                    stroke="#1E2D3D"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 14 76 A 56 56 0 0 1 126 76"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="176"
                    strokeDashoffset={visible ? 176 - (176 * COMPOSITE) / 100 : 176}
                    style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1) 0.3s" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-end justify-center pb-1">
                  <span className="text-4xl font-bold font-mono text-[#10B981]">
                    {COMPOSITE}
                  </span>
                </div>
              </div>

              <div className="text-sm font-bold text-[#10B981] tracking-wider mb-1">
                STRONG BULLISH
              </div>
              <div className="text-[11px] text-slate-500">
                9 of 11 signals aligned
              </div>

              <div className="mt-5 p-3 rounded-xl bg-[#10B981]/8 border border-[#10B981]/20">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                  ML Win Probability
                </div>
                <div className="text-3xl font-bold font-mono text-amber-400">73.2%</div>
                <div className="text-[10px] font-mono text-amber-400/70 mt-0.5">FAVORABLE</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-[#1E2D3D] bg-[#0D1520]">
              <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-3">
                Trade Decision
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                BUY SPY CALL — 592C 0DTE
              </div>
              <div className="text-[11px] text-slate-500">
                Entry: Market · Risk: 1% NAV · Target: +45%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
