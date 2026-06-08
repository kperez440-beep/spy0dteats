"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

// ─── Signal data ──────────────────────────────────────────────────────────────
const SIGNALS = [
  { name: "EMA TREND",    value: 8.2, cat: "momentum" },
  { name: "VWAP BIAS",    value: 7.4, cat: "trend"    },
  { name: "OPTIONS FLOW", value: 6.8, cat: "momentum" },
  { name: "VOL PROFILE",  value: 5.2, cat: "structure" },
  { name: "RSI MOMENTUM", value: 8.8, cat: "momentum" },
  { name: "MKT STRUCT",   value: 7.1, cat: "structure" },
  { name: "PUT/CALL",     value: 6.4, cat: "sentiment" },
  { name: "IV PCT RANK",  value: 4.8, cat: "sentiment" },
  { name: "SPY BREADTH",  value: 7.6, cat: "trend"    },
  { name: "PRICE ACTION", value: 8.4, cat: "momentum" },
  { name: "ORDER FLOW",   value: 6.0, cat: "trend"    },
] as const;

const SCORE    = 72;
const WIN_PROB = 73.2;

const CAT_COLOR: Record<string, string> = {
  momentum:  "#F0B429",
  trend:     "#06B6D4",
  structure: "#10B981",
  sentiment: "#475569",
};

const GATE_CHECKS = [
  { label: "Confluence ≥ 68",  value: `${SCORE}/100`,  pass: true  },
  { label: "ML Score ≥ 65%",   value: `${WIN_PROB}%`,  pass: true  },
  { label: "Risk Parameters",  value: "Aligned",        pass: true  },
];

const SD_LEVELS = [
  { type: "R2",  price: 596.20, strength: 2, side: "above" },
  { type: "R1",  price: 594.50, strength: 3, side: "above" },
  { type: "NOW", price: 592.41, strength: 0, side: "now"   },
  { type: "S1",  price: 590.10, strength: 3, side: "below" },
  { type: "S2",  price: 587.40, strength: 2, side: "below" },
];

// ─── SVG Gauge geometry (viewBox 0 0 140 100) ─────────────────────────────────
const GCX = 70, GCY = 88, GR = 60;
const G_START_X = GCX - GR;
const G_END_X   = GCX + GR;

const TRACK_PATH = `M ${G_START_X} ${GCY} A ${GR} ${GR} 0 0 0 ${G_END_X} ${GCY}`;

function fillArc(pct: number): string {
  const angle = Math.PI * (1 - pct / 100);
  const x     = GCX + GR * Math.cos(angle);
  const y     = GCY - GR * Math.sin(angle);
  const large = pct > 50 ? 1 : 0;
  return `M ${G_START_X} ${GCY} A ${GR} ${GR} 0 ${large} 0 ${x.toFixed(2)} ${y.toFixed(2)}`;
}

const FILL_PATH  = fillArc(WIN_PROB);
const SCORE_PATH = fillArc(SCORE);

// ─── Panel label ──────────────────────────────────────────────────────────────
function PanelLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[9px] font-mono tracking-[0.2em] uppercase text-slate-600 mb-2.5">
      {children}
    </p>
  );
}

// ─── Signal Confluence Panel ──────────────────────────────────────────────────
function SignalPanel() {
  return (
    <div className="p-3 sm:p-4 flex flex-col gap-0">
      <PanelLabel>Signal Confluence</PanelLabel>

      <div className="flex flex-col gap-[5px]">
        {SIGNALS.map((s, i) => {
          const color = CAT_COLOR[s.cat];
          const pct   = (s.value / 10) * 100;
          return (
            <div key={s.name} className="flex items-center gap-2">
              <span
                className="text-[9px] font-mono text-slate-500 shrink-0 uppercase"
                style={{ width: 76 }}
              >
                {s.name}
              </span>
              <div className="flex-1 h-[5px] rounded-full overflow-hidden bg-[#111C2E] relative">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: color,
                    width: `${pct}%`,
                    transformOrigin: "left",
                    boxShadow: `0 0 6px ${color}55`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + i * 0.055,
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                />
              </div>
              <span
                className="text-[9px] font-mono shrink-0 tabular-nums"
                style={{ color, width: 22, textAlign: "right" }}
              >
                {s.value.toFixed(1)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Composite score */}
      <div className="mt-3 pt-2.5 border-t border-[#1E2D3D]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
            Composite Score
          </span>
          <span className="text-[11px] font-mono font-semibold text-amber-400 tabular-nums">
            {SCORE}/100
          </span>
        </div>
        <div className="h-[6px] rounded-full overflow-hidden bg-[#111C2E]">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, #06B6D4, #F0B429)",
              boxShadow: "0 0 10px rgba(240,180,41,0.4)",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: SCORE / 100 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── ML Win Probability Panel ─────────────────────────────────────────────────
function MLPanel() {
  return (
    <div className="p-3 sm:p-4 flex flex-col items-center">
      <PanelLabel>ML Win Probability</PanelLabel>

      <div className="relative w-full flex justify-center">
        <svg
          viewBox="0 0 140 100"
          className="w-full max-w-[160px]"
          aria-label={`ML Win Probability: ${WIN_PROB}%`}
        >
          <defs>
            <linearGradient id="gaugeTrack" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#111C2E" />
              <stop offset="100%" stopColor="#111C2E" />
            </linearGradient>
            <linearGradient id="gaugeFill" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#06B6D4" />
              <stop offset="60%"  stopColor="#F0B429" />
              <stop offset="100%" stopColor="#FBBF24" />
            </linearGradient>
          </defs>

          {/* Track */}
          <path
            d={TRACK_PATH}
            fill="none"
            stroke="#111C2E"
            strokeWidth={10}
            strokeLinecap="round"
          />

          {/* Fill — animated */}
          <motion.path
            d={FILL_PATH}
            fill="none"
            stroke="url(#gaugeFill)"
            strokeWidth={10}
            strokeLinecap="round"
            filter="url(#gaugeGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              pathLength: { duration: 1.4, ease: [0.34, 1.56, 0.64, 1], delay: 0.5 },
              opacity:    { duration: 0.15 },
            }}
          />

          {/* Center dot */}
          <circle cx={GCX} cy={GCY} r={3} fill="#1E2D3D" />

          {/* Percentage */}
          <text
            x={GCX}
            y={GCY - 16}
            textAnchor="middle"
            fill="#FBBF24"
            fontSize="20"
            fontWeight="700"
            fontFamily="'IBM Plex Mono', monospace"
          >
            {WIN_PROB}%
          </text>
          <text
            x={GCX}
            y={GCY - 3}
            textAnchor="middle"
            fill="#64748B"
            fontSize="7"
            fontFamily="'IBM Plex Mono', monospace"
            letterSpacing="1.5"
          >
            WIN PROBABILITY
          </text>

          {/* End-cap labels */}
          <text x="10" y={GCY + 14} textAnchor="middle" fill="#475569" fontSize="7" fontFamily="'IBM Plex Mono', monospace">0</text>
          <text x="130" y={GCY + 14} textAnchor="middle" fill="#475569" fontSize="7" fontFamily="'IBM Plex Mono', monospace">100</text>
        </svg>
      </div>

      {/* Status badge */}
      <motion.div
        className="mt-2 px-3 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase"
        style={{
          background: "rgba(16,185,129,0.12)",
          border: "1px solid rgba(16,185,129,0.3)",
          color: "#10B981",
        }}
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 20 }}
      >
        Elevated · Favorable
      </motion.div>

      <div className="mt-3 pt-3 border-t border-[#1E2D3D] w-full space-y-1.5">
        {[
          { label: "Model",    value: "Random Forest v2" },
          { label: "Features", value: "11 signals, 3TF"  },
          { label: "Period",   value: "Oct '25 – Jan '26" },
        ].map(r => (
          <div key={r.label} className="flex justify-between">
            <span className="text-[9px] font-mono text-slate-600">{r.label}</span>
            <span className="text-[9px] font-mono text-slate-400">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Trade Eligibility Panel ──────────────────────────────────────────────────
function EligibilityPanel() {
  return (
    <div className="p-3 sm:p-4 flex flex-col">
      <PanelLabel>Trade Eligibility</PanelLabel>

      <div className="flex flex-col gap-2 mb-3">
        {GATE_CHECKS.map((c, i) => (
          <motion.div
            key={c.label}
            className="flex items-center justify-between"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.35 }}
          >
            <div className="flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <circle cx="5" cy="5" r="4.5" fill="rgba(16,185,129,0.15)" stroke="#10B981" strokeWidth="0.8"/>
                <path d="M3 5l1.3 1.4L7 3.5" stroke="#10B981" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[9px] font-mono text-slate-400">{c.label}</span>
            </div>
            <span className="text-[9px] font-mono text-emerald-400">{c.value}</span>
          </motion.div>
        ))}
      </div>

      <div className="h-px bg-[#1E2D3D] mb-3" />

      <motion.div
        className="flex flex-col items-center gap-1 py-2"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, type: "spring", stiffness: 180, damping: 18 }}
      >
        <div
          className="px-4 py-1.5 rounded-lg text-[11px] font-mono font-bold tracking-wider uppercase"
          style={{
            background: "rgba(240,180,41,0.12)",
            border: "1px solid rgba(240,180,41,0.4)",
            color: "#F0B429",
            boxShadow: "0 0 16px rgba(240,180,41,0.15)",
          }}
        >
          ▲ Eligible Long
        </div>
        <span className="text-[8px] font-mono text-slate-600 mt-0.5">Gate cleared · All conditions met</span>
      </motion.div>

      <div className="mt-auto pt-3 border-t border-[#1E2D3D] space-y-1">
        {[
          { label: "Signal Bias",  value: "Bullish",  color: "#10B981" },
          { label: "Timeframe",    value: "0DTE",     color: "#F0B429" },
          { label: "Setup Type",   value: "Momentum", color: "#06B6D4" },
        ].map(r => (
          <div key={r.label} className="flex justify-between">
            <span className="text-[9px] font-mono text-slate-600">{r.label}</span>
            <span className="text-[9px] font-mono font-medium" style={{ color: r.color }}>{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Session Info Panel ───────────────────────────────────────────────────────
function SessionPanel() {
  return (
    <div className="p-3 sm:p-4 flex flex-col">
      <PanelLabel>Session</PanelLabel>

      {/* SPY Price */}
      <div className="mb-2.5">
        <div className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">SPY</div>
        <div className="text-[22px] font-mono font-bold text-white leading-none tabular-nums mt-0.5">
          592.41
        </div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[10px] font-mono text-emerald-400">+2.18</span>
          <span className="text-[9px] font-mono text-emerald-400/70">+0.37%</span>
        </div>
      </div>

      <div className="h-px bg-[#1E2D3D] mb-2.5" />

      {/* Market data rows */}
      <div className="space-y-1.5 text-[9px] font-mono">
        {[
          { label: "VIX",     value: "18.4",  color: "#64748B",  flag: "↓ Calm"     },
          { label: "IV RANK", value: "28%",   color: "#06B6D4",  flag: "Low IV"      },
          { label: "0DTE",    value: "Active", color: "#10B981", flag: "Vol: 18.2M"  },
          { label: "VWAP",    value: "Below",  color: "#F0B429", flag: "−0.14%"      },
          { label: "TREND",   value: "Bullish",color: "#10B981", flag: "EMA aligned" },
        ].map(r => (
          <div key={r.label} className="flex items-center justify-between">
            <span className="text-slate-600 w-12">{r.label}</span>
            <span style={{ color: r.color }} className="font-medium">{r.value}</span>
            <span className="text-slate-600 text-right">{r.flag}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-2.5 border-t border-[#1E2D3D]">
        <div className="text-[8px] font-mono text-slate-600">FEB 26, 2026</div>
        <div className="text-[9px] font-mono text-slate-400 mt-0.5">10:42 AM ET · Session Active</div>
        <div className="flex items-center gap-1 mt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" />
          <span className="text-[8px] font-mono text-emerald-400">Signal Engine Live</span>
        </div>
      </div>
    </div>
  );
}

// ─── Supply & Demand Panel ────────────────────────────────────────────────────
function SDPanel() {
  return (
    <div className="p-3 sm:p-4">
      <PanelLabel>Supply &amp; Demand Zones</PanelLabel>

      <div className="space-y-1.5">
        {SD_LEVELS.map((lvl) => {
          const isNow    = lvl.side === "now";
          const isAbove  = lvl.side === "above";
          const color    = isNow ? "#F0B429" : isAbove ? "#FF6B7A" : "#10B981";
          const strength = Math.min(lvl.strength, 4);

          return (
            <div key={lvl.type} className={`flex items-center gap-2 ${isNow ? "py-1" : ""}`}>
              {/* Type tag */}
              <span
                className="text-[8px] font-mono w-8 shrink-0 text-right"
                style={{ color: isNow ? "#94A3B8" : color + "99" }}
              >
                {lvl.type}
              </span>

              {/* Zone strength bars */}
              <div className="flex gap-[2px] shrink-0">
                {[0, 1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="w-[4px] h-[10px] rounded-[1px]"
                    style={{
                      background: i < strength ? color : "#1E2D3D",
                      opacity: i < strength ? (isNow ? 0 : 1) : 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Price */}
              <span
                className={`flex-1 text-[11px] font-mono tabular-nums ${isNow ? "font-bold" : "font-medium"}`}
                style={{ color: isNow ? "#F0B429" : "#94A3B8" }}
              >
                ${lvl.price.toFixed(2)}
              </span>

              {/* Current indicator */}
              {isNow && (
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 pulse-dot" />
                  <span className="text-[8px] font-mono text-amber-400">CURRENT</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-3 pt-2.5 border-t border-[#1E2D3D] space-y-1">
        {[
          { label: "Nearest Res.",  value: "$594.50",  color: "#FF6B7A"  },
          { label: "Nearest Sup.", value: "$590.10",  color: "#10B981"  },
          { label: "Gap to Res.",   value: "$2.09",    color: "#94A3B8"  },
        ].map(r => (
          <div key={r.label} className="flex justify-between">
            <span className="text-[9px] font-mono text-slate-600">{r.label}</span>
            <span className="text-[9px] font-mono" style={{ color: r.color }}>{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Execution Plan Panel ─────────────────────────────────────────────────────
function ExecutionPanel() {
  return (
    <div className="p-3 sm:p-4">
      <PanelLabel>Execution Plan</PanelLabel>

      <div className="grid grid-cols-3 gap-3 mb-3">
        {[
          { label: "ENTRY",  price: "592.41", sub: "Market",   color: "#F0B429" },
          { label: "STOP",   price: "589.50", sub: "−$2.91 / −0.49%", color: "#FF6B7A" },
          { label: "TARGET", price: "597.80", sub: "+$5.39 / +0.91%", color: "#10B981" },
        ].map(t => (
          <div key={t.label} className="flex flex-col">
            <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest mb-0.5">{t.label}</span>
            <span
              className="text-[14px] font-mono font-bold tabular-nums leading-none"
              style={{ color: t.color }}
            >
              {t.price}
            </span>
            <span className="text-[8px] font-mono text-slate-500 mt-0.5">{t.sub}</span>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#1E2D3D] mb-3" />

      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 mb-3">
        {[
          { label: "Budget",    value: "$500",             color: "#94A3B8" },
          { label: "Contract",  value: "1× 592C 0DTE",    color: "#06B6D4" },
          { label: "Risk",      value: "$289.50 max",     color: "#FF6B7A" },
          { label: "Reward",    value: "$539 target",     color: "#10B981" },
          { label: "R:R Ratio", value: "1 : 1.86",        color: "#F0B429" },
          { label: "Delta",     value: "≈ 0.52",          color: "#94A3B8" },
        ].map(r => (
          <div key={r.label} className="flex justify-between items-baseline gap-2">
            <span className="text-[9px] font-mono text-slate-600 shrink-0">{r.label}</span>
            <span className="text-[9px] font-mono font-medium truncate" style={{ color: r.color }}>{r.value}</span>
          </div>
        ))}
      </div>

      <div className="h-px bg-[#1E2D3D] mb-3" />

      {/* Place trade button */}
      <button
        className="w-full py-2 rounded-lg text-[10px] font-mono font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer"
        style={{
          background: "rgba(240,180,41,0.12)",
          border: "1px solid rgba(240,180,41,0.35)",
          color: "#F0B429",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(240,180,41,0.2)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(240,180,41,0.2)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.background = "rgba(240,180,41,0.12)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
        }}
        aria-label="Place trade — simulation mode"
      >
        ▶ Place Trade · Simulation Mode
      </button>
    </div>
  );
}

// ─── Window Chrome ─────────────────────────────────────────────────────────────
function ChromeBar() {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0A1220] border-b border-[#1E2D3D] shrink-0">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/60" />
      </div>
      <span className="ml-2 text-[9px] font-mono text-slate-600 tracking-widest select-none uppercase">
        SPY Pivot Pro&nbsp;&nbsp;·&nbsp;&nbsp;Fortitud Capital&nbsp;&nbsp;·&nbsp;&nbsp;Playback Mode
      </span>
      <div className="ml-auto flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" />
        LIVE
      </div>
    </div>
  );
}

// ─── Feature callout badges ───────────────────────────────────────────────────
const BADGES = [
  { label: "Signal Confluence",  color: "#F0B429" },
  { label: "ML Win Prob",        color: "#10B981" },
  { label: "Eligibility Gate",   color: "#06B6D4" },
];

// ─── Root Component ───────────────────────────────────────────────────────────
export function DashboardMockup() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left)  / r.width  - 0.5) *  5,
      y: ((e.clientY - r.top)   / r.height - 0.5) * -3,
    });
  }

  return (
    <motion.div
      className="relative w-full max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
    >
      {/* Ambient glow behind frame */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-24px",
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(240,180,41,0.08) 0%, rgba(6,182,212,0.06) 45%, transparent 72%)",
          filter: "blur(36px)",
        }}
        aria-hidden="true"
      />

      {/* 3D tilt wrapper */}
      <div
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.38s cubic-bezier(0.25,0.46,0.45,0.94)",
          willChange: "transform",
        }}
      >
        {/* Outer frame */}
        <div
          className="relative rounded-2xl overflow-hidden border border-[#1E2D3D]"
          style={{
            boxShadow:
              "0 0 0 1px rgba(240,180,41,0.08), 0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(6,182,212,0.04)",
          }}
        >
          <ChromeBar />

          {/* Dashboard grid */}
          <div className="bg-[#060D18]">
            {/* Top row — 4 panels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1.5fr_1.5fr_1fr] divide-y divide-[#1E2D3D] sm:divide-y-0 sm:divide-x">
              <SignalPanel />
              <MLPanel />
              <div className="hidden sm:block">
                <EligibilityPanel />
              </div>
              <div className="hidden lg:block">
                <SessionPanel />
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#1E2D3D] hidden lg:block" />

            {/* Bottom row — 2 panels */}
            <div className="hidden lg:grid grid-cols-[1fr_2fr] divide-x divide-[#1E2D3D]">
              <SDPanel />
              <ExecutionPanel />
            </div>
          </div>

          {/* Scanlines overlay */}
          <div className="absolute inset-0 scanlines pointer-events-none z-10" aria-hidden="true" />

          {/* Edge vignette */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 54%, rgba(5,8,16,0.42) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-20 bg-gradient-to-t from-[#050810] to-transparent"
            aria-hidden="true"
          />

          {/* Callout badges — top right */}
          <div className="absolute top-[12%] right-[1.5%] flex flex-col gap-1.5 pointer-events-none z-30 hidden sm:flex">
            {BADGES.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.12, duration: 0.4, ease: "easeOut" }}
                className="flex items-center gap-1.5 px-2.5 py-[5px] rounded-full text-[9px] font-mono tracking-wider"
                style={{
                  background: b.color + "16",
                  border: `1px solid ${b.color}30`,
                  color: b.color,
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  className="w-1 h-1 rounded-full inline-block shrink-0"
                  style={{ background: b.color }}
                />
                {b.label}
              </motion.div>
            ))}
          </div>

          {/* Session label — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.4 }}
            className="absolute bottom-[18px] left-4 flex items-center gap-2 px-3 py-1.5 rounded-full pointer-events-none z-30 hidden sm:flex"
            style={{
              background: "rgba(10,18,32,0.88)",
              border: "1px solid rgba(16,185,129,0.28)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" />
            <span className="text-[9px] font-mono text-emerald-400 tracking-widest">
              PLAYBACK&nbsp;&nbsp;·&nbsp;&nbsp;SPY&nbsp;&nbsp;·&nbsp;&nbsp;FEB 26 2026
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
