"use client";
import { useEffect, useRef, useState } from "react";
import { TiltCard } from "@/app/components/ui/TiltCard";
import { RevealText } from "@/app/components/ui/RevealText";

function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ── Mini signal bars for the large card ── */
const miniSignals = [
  { name: "RSI(14)", score: 74, color: "#10B981" },
  { name: "MACD", score: 82, color: "#10B981" },
  { name: "VWAP", score: 91, color: "#10B981" },
  { name: "Vol Profile", score: 63, color: "#F0B429" },
  { name: "Options Flow", score: 88, color: "#10B981" },
  { name: "VIX Regime", score: 85, color: "#10B981" },
];

function SignalConfluenceCard({ visible }: { visible: boolean }) {
  return (
    <div
      className="relative flex flex-col h-full p-6 rounded-2xl border border-[#1E2D3D] overflow-hidden group"
      style={{ background: "linear-gradient(135deg, #0D1A2D 0%, #0A1220 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(240,180,41,0.2)" }}
      />
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="text-[9px] font-mono tracking-widest text-amber-400/70 uppercase mb-1">
            01 — Primary Engine
          </div>
          <h3 className="text-lg font-bold text-white">Multi-Signal Confluence</h3>
          <p className="text-[12px] text-slate-400 mt-1 max-w-xs">
            11 signals, weighted by reliability, vote on every potential trade.
          </p>
        </div>
        <div className="shrink-0 p-3 rounded-xl bg-amber-400/8 border border-amber-400/15">
          <div className="text-2xl font-bold font-mono text-amber-400">78</div>
          <div className="text-[8px] font-mono text-[#10B981] tracking-widest text-center">BULL</div>
        </div>
      </div>

      <div className="space-y-2.5 flex-1">
        {miniSignals.map((s, i) => (
          <div key={s.name} className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-slate-500 w-20 shrink-0">{s.name}</span>
            <div className="flex-1 h-1.5 bg-[#1E2D3D] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: visible ? `${s.score}%` : "0%",
                  background: s.color,
                  transitionDelay: `${i * 80}ms`,
                }}
              />
            </div>
            <span className="text-[10px] font-mono w-5 text-right" style={{ color: s.color }}>
              {s.score}
            </span>
          </div>
        ))}
      </div>

      <div
        className="absolute bottom-4 right-4 text-[9px] font-mono tracking-widest text-slate-600 uppercase"
      >
        2× weighted
      </div>
    </div>
  );
}

function MLCard({ visible }: { visible: boolean }) {
  const pct = 73.2;
  const r = 42;
  const circ = 2 * Math.PI * r;
  const offset = circ - (circ * pct) / 100;

  return (
    <div
      className="relative flex flex-col items-center justify-center h-full p-6 rounded-2xl border border-[#1E2D3D] group"
      style={{ background: "linear-gradient(160deg, #0A1525 0%, #0D1520 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(27,114,192,0.25)" }}
      />
      <div className="text-[9px] font-mono tracking-widest text-[#1B72C0]/70 uppercase mb-4">
        02 — Machine Learning
      </div>

      <div className="relative mb-4">
        <svg width="110" height="110" viewBox="0 0 110 110" aria-label="Win probability gauge">
          <circle cx="55" cy="55" r={r} fill="none" stroke="#1E2D3D" strokeWidth="8" />
          <circle
            cx="55"
            cy="55"
            r={r}
            fill="none"
            stroke="#1B72C0"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circ}
            strokeDashoffset={visible ? offset : circ}
            transform="rotate(-90 55 55)"
            style={{
              transition: "stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1) 0.3s",
              filter: "drop-shadow(0 0 8px rgba(27,114,192,0.6))",
            }}
          />
          <text x="55" y="58" textAnchor="middle" fill="#F1F5F9" fontSize="20" fontWeight="700" fontFamily="IBM Plex Mono">
            {pct}%
          </text>
          <text x="55" y="72" textAnchor="middle" fill="#64748B" fontSize="8" fontFamily="IBM Plex Mono">
            WIN PROB
          </text>
        </svg>
      </div>

      <h3 className="text-base font-bold text-white text-center mb-1">ML Win Probability</h3>
      <p className="text-[11px] text-slate-400 text-center leading-relaxed max-w-[160px]">
        Trained model scores every trade before you enter. Know the odds, not just the signals.
      </p>
    </div>
  );
}

function PlaybackCard() {
  return (
    <div
      className="relative flex flex-col h-full p-6 rounded-2xl border border-[#1E2D3D] group overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1520 0%, #0D1A2A 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(6,182,212,0.2)" }}
      />
      <div className="text-[9px] font-mono tracking-widest text-[#06B6D4]/70 uppercase mb-3">
        03 — Simulation
      </div>
      <h3 className="text-base font-bold text-white mb-1">Intraday Playback</h3>
      <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
        Step through any session tick-by-tick. No risk.
      </p>

      {/* Playback UI mockup */}
      <div className="mt-auto space-y-2">
        <div className="relative h-12 bg-[#0A1220] rounded-xl border border-[#1E2D3D] overflow-hidden">
          <div className="absolute inset-0 flex items-end px-2 gap-0.5">
            {[40,55,45,60,50,75,65,80,55,70,85,72,90,78,95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: h > 70 ? "rgba(16,185,129,0.6)" : "rgba(30,45,61,0.8)",
                }}
              />
            ))}
          </div>
          {/* Scrub position */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#06B6D4]"
            style={{ left: "62%", boxShadow: "0 0 6px rgba(6,182,212,0.8)" }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono text-slate-600">09:30</span>
          <div className="flex items-center gap-3">
            <button className="text-[#06B6D4] cursor-default" aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="4" y1="4" x2="4" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="w-7 h-7 rounded-full bg-[#06B6D4]/15 border border-[#06B6D4]/30 flex items-center justify-center cursor-default">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="#06B6D4">
                <polygon points="3,2 9,5 3,8"/>
              </svg>
            </div>
            <button className="text-[#06B6D4] cursor-default" aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="4" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <span className="text-[9px] font-mono text-slate-600">16:00</span>
        </div>
      </div>
    </div>
  );
}

function AutoLearnCard({ visible }: { visible: boolean }) {
  const pts = [
    [0, 80], [1, 74], [2, 68], [3, 70], [4, 62], [5, 55], [6, 50], [7, 44], [8, 38],
  ];
  const toSVG = (pts: number[][], w: number, h: number) =>
    pts.map(([x, y]) => `${(x / (pts.length - 1)) * w},${y}`).join(" L ");

  return (
    <div
      className="relative flex flex-col h-full p-6 rounded-2xl border border-[#1E2D3D] group overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1520 0%, #0D1520 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(240,180,41,0.2)" }}
      />
      <div className="text-[9px] font-mono tracking-widest text-amber-400/70 uppercase mb-3">
        04 — Adaptive AI
      </div>
      <h3 className="text-base font-bold text-white mb-1">Auto-Learn Engine</h3>
      <p className="text-[11px] text-slate-400 mb-4 leading-relaxed">
        Signal weights self-tune after every session. It gets sharper on its own.
      </p>

      <div className="mt-auto">
        <div className="text-[9px] font-mono text-slate-500 mb-1.5">Avg loss per trade (improving)</div>
        <svg viewBox="0 0 180 80" className="w-full" style={{ height: 64 }} preserveAspectRatio="none">
          <defs>
            <linearGradient id="learnGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F0B429" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F0B429" stopOpacity="0" />
            </linearGradient>
            <clipPath id="learnClip">
              <rect x="0" y="0" width={visible ? 180 : 0} height="80" />
            </clipPath>
          </defs>
          <path
            d={`M ${toSVG(pts, 180, 80)} L 180,80 L 0,80 Z`}
            fill="url(#learnGrad)"
            clipPath="url(#learnClip)"
          />
          <polyline
            points={toSVG(pts, 180, 80)}
            fill="none"
            stroke="#F0B429"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            clipPath="url(#learnClip)"
            style={{ transition: visible ? "all 1.4s ease 0.2s" : "none" }}
          />
        </svg>
        <div className="flex justify-between text-[9px] font-mono text-slate-600 mt-1">
          <span>Day 1</span>
          <span className="text-amber-400">↓ 52% avg loss reduced</span>
        </div>
      </div>
    </div>
  );
}

function AutomationCard() {
  const steps = [
    { label: "Signal Score", val: "78/100", color: "#F0B429" },
    { label: "ML Probability", val: "73.2%", color: "#1B72C0" },
    { label: "Risk Check", val: "1% NAV", color: "#06B6D4" },
    { label: "Execute", val: "BUY CALL", color: "#10B981" },
    { label: "P&L Track", val: "+$284", color: "#10B981" },
  ];

  return (
    <div
      className="relative flex flex-col sm:flex-row items-center h-full p-6 rounded-2xl border border-[#1E2D3D] group overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1A30 0%, #0A1220 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: "inset 0 0 0 1px rgba(16,185,129,0.2)" }}
      />
      <div className="shrink-0 sm:w-48 mb-4 sm:mb-0">
        <div className="text-[9px] font-mono tracking-widest text-[#10B981]/70 uppercase mb-2">
          05 — Automation
        </div>
        <h3 className="text-base font-bold text-white mb-1">Automation Layer</h3>
        <p className="text-[11px] text-slate-400 leading-relaxed">
          You set the rules. The system executes — with discipline you can&apos;t fake manually.
        </p>
      </div>

      {/* Flow diagram */}
      <div className="flex-1 flex items-center justify-center gap-0 sm:gap-0 overflow-x-auto">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center shrink-0">
            <div className="flex flex-col items-center gap-1 px-2">
              <div
                className="text-[9px] font-mono font-bold px-2 py-1.5 rounded-lg border text-center whitespace-nowrap"
                style={{
                  color: s.color,
                  borderColor: `${s.color}30`,
                  background: `${s.color}0A`,
                }}
              >
                {s.val}
              </div>
              <div className="text-[8px] font-mono text-slate-600 text-center whitespace-nowrap">{s.label}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="text-slate-600 text-xs font-mono shrink-0">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BentoGrid() {
  const { ref, visible } = useFadeIn(0.1);

  return (
    <section id="how-it-works" className="py-24 px-4 relative" ref={ref}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 300,
          background: "radial-gradient(ellipse at top, rgba(240,180,41,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] font-mono tracking-widest text-amber-400/70 uppercase mb-3">
            5 Capabilities · Nobody Does All Five
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <RevealText text="The complete system." />
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Robinhood gives you a chart. Bloomberg gives you data. SPY Pivot Pro gives you the full
            picture — signals, probability, simulation, learning, and execution.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          {/* Signal Confluence — large, 2 cols */}
          <TiltCard
            className="sm:col-span-2 lg:col-span-2"
            intensity={6}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? undefined : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <SignalConfluenceCard visible={visible} />
          </TiltCard>

          {/* ML Win Probability — tall, 2 rows */}
          <TiltCard
            className="sm:col-span-2 lg:col-span-1 lg:row-span-2"
            intensity={6}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? undefined : "translateY(24px)",
              transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}
          >
            <MLCard visible={visible} />
          </TiltCard>

          {/* Playback */}
          <TiltCard
            intensity={7}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? undefined : "translateY(24px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <PlaybackCard />
          </TiltCard>

          {/* Auto-Learn */}
          <TiltCard
            intensity={7}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? undefined : "translateY(24px)",
              transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
            }}
          >
            <AutoLearnCard visible={visible} />
          </TiltCard>

          {/* Automation — full width */}
          <TiltCard
            className="sm:col-span-2 lg:col-span-3"
            intensity={4}
            style={{
              height: 130,
              opacity: visible ? 1 : 0,
              transform: visible ? undefined : "translateY(24px)",
              transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
            }}
          >
            <AutomationCard />
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
