"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Static data ──────────────────────────────────────────────────────────────
const MTF = [
  { tf: "15M", dir: "BULL", pct: 84, color: "#10B981" },
  { tf: "30M", dir: "BULL", pct: 78, color: "#10B981" },
  { tf: "1H",  dir: "BULL", pct: 81, color: "#10B981" },
  { tf: "4H",  dir: "BULL", pct: 74, color: "#F0B429" },
];

const SIGNALS = [
  { name: "EMA TREND",     value: 8.2, cat: "momentum"  },
  { name: "VWAP BIAS",     value: 7.4, cat: "trend"     },
  { name: "OPTIONS FLOW",  value: 6.8, cat: "momentum"  },
  { name: "VOL PROFILE",   value: 5.2, cat: "structure" },
  { name: "RSI MOMENTUM",  value: 8.8, cat: "momentum"  },
  { name: "MKT STRUCT",    value: 7.1, cat: "structure" },
  { name: "PUT/CALL",      value: 6.4, cat: "sentiment" },
  { name: "IV PCT RANK",   value: 4.8, cat: "sentiment" },
  { name: "SPY BREADTH",   value: 7.6, cat: "trend"     },
  { name: "PRICE ACTION",  value: 8.4, cat: "momentum"  },
  { name: "ORDER FLOW",    value: 6.0, cat: "trend"     },
  { name: "CONSOLIDATION", value: 6.2, cat: "structure" },
] as const;

const CAT_COLOR: Record<string, string> = {
  momentum:  "#F0B429",
  trend:     "#06B6D4",
  structure: "#10B981",
  sentiment: "#475569",
};

const GATE_CHECKS = [
  { label: "Confluence Score",    value: "72/100",    pass: true,  sub: "Threshold: 68"   },
  { label: "ML Win Probability",  value: "73.2%",     pass: true,  sub: "Threshold: 65%"  },
  { label: "Risk Parameters",     value: "Aligned",   pass: true,  sub: "All within range" },
  { label: "Session Filter",      value: "Active",    pass: true,  sub: "NY AM session"   },
  { label: "Structure Confirmed", value: "HH / HL",   pass: true,  sub: "Bullish phase"   },
];

const SD_LEVELS = [
  { type: "R2",  price: 596.20, side: "supply",  strength: 2 },
  { type: "R1",  price: 594.50, side: "supply",  strength: 3 },
  { type: "NOW", price: 592.41, side: "current", strength: 0 },
  { type: "S1",  price: 590.10, side: "demand",  strength: 3 },
  { type: "S2",  price: 587.40, side: "demand",  strength: 2 },
];

const TABS = [
  { id: "confluence",  label: "Signal Confluence", short: "Confluence" },
  { id: "eligibility", label: "Eligibility Gate",  short: "Eligibility" },
  { id: "trade-plan",  label: "Trade Plan",         short: "Trade Plan" },
  { id: "levels",      label: "Price Levels",       short: "Levels" },
] as const;

type TabId = typeof TABS[number]["id"];

// ─── Left sidebar (persistent) ────────────────────────────────────────────────
function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col gap-0 shrink-0 w-[170px] border-r border-[#1E2D3D] py-4 px-4 bg-[#07101C]/60">
      {/* SPY price */}
      <div className="mb-4">
        <div className="text-[8px] font-mono text-slate-600 tracking-widest uppercase">SPY</div>
        <div className="text-[22px] font-mono font-bold text-white leading-none tabular-nums mt-0.5">592.41</div>
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-[10px] font-mono text-emerald-400">+2.18</span>
          <span className="text-[9px] font-mono text-emerald-400/60">+0.37%</span>
        </div>
      </div>

      <div className="h-px bg-[#1E2D3D] mb-3" />

      {/* MTF Alignment */}
      <div className="mb-4">
        <div className="text-[8px] font-mono text-slate-600 tracking-[0.2em] uppercase mb-2">MTF Alignment</div>
        <div className="flex flex-col gap-1.5">
          {MTF.map(row => (
            <div key={row.tf} className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-slate-600 w-7 shrink-0">{row.tf}</span>
              <div className="flex-1 h-[3px] bg-[#111C2E] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${row.pct}%`, background: row.color }}
                />
              </div>
              <span className="text-[8px] font-mono shrink-0" style={{ color: row.color }}>↑</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-emerald-400 inline-block" />
          <span className="text-[8px] font-mono text-emerald-400">4/4 Bullish</span>
        </div>
      </div>

      <div className="h-px bg-[#1E2D3D] mb-3" />

      {/* Confluence score */}
      <div className="mb-4">
        <div className="text-[8px] font-mono text-slate-600 tracking-[0.2em] uppercase mb-1">Confluence</div>
        <div className="text-[24px] font-mono font-bold text-amber-400 tabular-nums leading-none">72</div>
        <div className="text-[8px] font-mono text-slate-600 mt-0.5">/ 100</div>
        <div className="mt-1.5 h-[3px] bg-[#111C2E] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: "72%", background: "linear-gradient(90deg, #06B6D4, #F0B429)" }}
          />
        </div>
      </div>

      <div className="h-px bg-[#1E2D3D] mb-3" />

      {/* Win prob */}
      <div>
        <div className="text-[8px] font-mono text-slate-600 tracking-[0.2em] uppercase mb-1">Win Probability</div>
        <div className="text-[18px] font-mono font-bold text-amber-400 tabular-nums leading-none">73.2%</div>
        <div className="text-[8px] font-mono text-slate-500 mt-0.5">ML · Random Forest v2</div>
      </div>

      <div className="mt-auto pt-3 border-t border-[#1E2D3D]">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" />
          <span className="text-[8px] font-mono text-emerald-400 tracking-wider">Live Engine</span>
        </div>
        <div className="text-[8px] font-mono text-slate-600 mt-0.5">FEB 26, 2026 · 10:42 AM</div>
      </div>
    </div>
  );
}

// ─── Tab content panels ───────────────────────────────────────────────────────
function ConfluenceTab() {
  return (
    <div className="flex flex-col gap-0 h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2D3D]">
        <span className="text-[9px] font-mono text-slate-600 tracking-widest uppercase">12 Active Signals</span>
        <span className="text-[9px] font-mono text-amber-400">Composite: 72/100</span>
      </div>
      <div className="flex-1 overflow-y-auto py-3 px-4 flex flex-col gap-[6px]">
        {SIGNALS.map((s, i) => {
          const color = CAT_COLOR[s.cat];
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="flex items-center gap-2.5 group"
            >
              <span className="text-[9px] font-mono text-slate-500 w-[88px] shrink-0 uppercase group-hover:text-slate-300 transition-colors">
                {s.name}
              </span>
              <div className="flex-1 h-[5px] rounded-full overflow-hidden bg-[#111C2E]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(s.value / 10) * 100}%`,
                    background: color,
                    boxShadow: `0 0 6px ${color}40`,
                  }}
                />
              </div>
              <span className="text-[9px] font-mono tabular-nums w-8 text-right shrink-0" style={{ color }}>
                {s.value.toFixed(1)}
              </span>
            </motion.div>
          );
        })}
      </div>
      <div className="px-4 py-3 border-t border-[#1E2D3D]">
        <div className="flex items-center gap-3">
          <span className="text-[9px] font-mono text-slate-600">Composite</span>
          <div className="flex-1 h-[5px] rounded-full overflow-hidden bg-[#111C2E]">
            <div
              className="h-full rounded-full"
              style={{ width: "72%", background: "linear-gradient(90deg, #06B6D4, #F0B429)", boxShadow: "0 0 10px rgba(240,180,41,0.35)" }}
            />
          </div>
          <span className="text-[11px] font-mono font-bold text-amber-400 tabular-nums">72/100</span>
        </div>
      </div>
    </div>
  );
}

function EligibilityTab() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2D3D]">
        <span className="text-[9px] font-mono text-slate-600 tracking-widest uppercase">Gate Conditions</span>
        <span className="text-[9px] font-mono text-emerald-400">5/5 Passed</span>
      </div>
      <div className="flex-1 py-3 px-4 flex flex-col gap-2.5">
        {GATE_CHECKS.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            className="flex items-start gap-3 py-2.5 px-3 rounded-xl border border-[#1E2D3D] bg-[#060D18]"
          >
            <svg className="shrink-0 mt-[1px]" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="6.5" fill="rgba(16,185,129,0.12)" stroke="#10B981" strokeWidth="0.8"/>
              <path d="M 4 7 l 2 2 4-4" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono text-slate-400">{g.label}</span>
                <span className="text-[10px] font-mono font-bold text-emerald-400 shrink-0">{g.value}</span>
              </div>
              <div className="text-[8px] font-mono text-slate-600 mt-0.5">{g.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.42, type: "spring", stiffness: 180, damping: 20 }}
        className="mx-4 mb-4 py-2.5 text-center rounded-xl text-[11px] font-mono font-bold tracking-widest uppercase"
        style={{
          background: "rgba(240,180,41,0.1)",
          border: "1px solid rgba(240,180,41,0.3)",
          color: "#F0B429",
          boxShadow: "0 0 20px rgba(240,180,41,0.1)",
        }}
      >
        ▲ Eligible Long · Gate Cleared
      </motion.div>
    </div>
  );
}

function TradePlanTab() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2D3D]">
        <span className="text-[9px] font-mono text-slate-600 tracking-widest uppercase">Execution Plan</span>
        <span className="text-[9px] font-mono text-teal-400">1× 592C 0DTE</span>
      </div>
      <div className="flex-1 py-4 px-4 flex flex-col gap-3">
        {/* Visual price range */}
        <div className="flex gap-4 items-stretch">
          <div className="flex flex-col items-center py-0.5 shrink-0 gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 8px rgba(16,185,129,0.5)" }} />
            <div className="flex-1 w-px" style={{ background: "linear-gradient(to bottom, rgba(16,185,129,0.5), rgba(240,180,41,0.5))" }} />
            <div className="w-2 h-2 rounded-full bg-amber-400" style={{ boxShadow: "0 0 8px rgba(240,180,41,0.5)" }} />
            <div className="flex-1 w-px" style={{ background: "linear-gradient(to bottom, rgba(240,180,41,0.5), rgba(248,71,71,0.5))" }} />
            <div className="w-2 h-2 rounded-full bg-rose-400" style={{ boxShadow: "0 0 8px rgba(248,71,71,0.5)" }} />
          </div>
          <div className="flex flex-col justify-between flex-1">
            {[
              { label: "Target",  price: "597.80", delta: "+$5.39 / +0.91%", color: "#10B981" },
              { label: "Entry",   price: "592.41", delta: "Market open",       color: "#F0B429" },
              { label: "Stop",    price: "589.50", delta: "−$2.91 / −0.49%",  color: "#FF4D6A" },
            ].map(t => (
              <div key={t.label}>
                <span className="text-[8px] font-mono text-slate-600 tracking-widest uppercase">{t.label}</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-[17px] font-mono font-bold tabular-nums" style={{ color: t.color }}>{t.price}</span>
                  <span className="text-[9px] font-mono" style={{ color: t.color + "80" }}>{t.delta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-[#1E2D3D]" />

        {/* Metrics grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {[
            { k: "R:R Ratio",    v: "1 : 1.86",     c: "#F0B429" },
            { k: "Contract",     v: "1× 592C 0DTE",  c: "#06B6D4" },
            { k: "Budget",       v: "$500",           c: "#F1F5F9" },
            { k: "Max Risk",     v: "$289.50",        c: "#FF4D6A" },
            { k: "Reward Tgt",   v: "$539.00",        c: "#10B981" },
            { k: "Delta",        v: "≈ 0.52",         c: "#94A3B8" },
          ].map(row => (
            <div key={row.k} className="flex flex-col gap-0.5">
              <span className="text-[8px] font-mono text-slate-600 tracking-widest uppercase">{row.k}</span>
              <span className="text-[11px] font-mono font-semibold tabular-nums" style={{ color: row.c }}>{row.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LevelsTab() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1E2D3D]">
        <span className="text-[9px] font-mono text-slate-600 tracking-widest uppercase">Supply &amp; Demand Zones</span>
        <span className="text-[9px] font-mono text-slate-500">Prior Session Structure</span>
      </div>
      <div className="flex-1 py-4 px-4 flex flex-col gap-2.5">
        {SD_LEVELS.map((lvl, i) => {
          const isCurrent = lvl.side === "current";
          const isSupply  = lvl.side === "supply";
          const color     = isCurrent ? "#F0B429" : isSupply ? "#FF4D6A" : "#10B981";

          return (
            <motion.div
              key={lvl.type}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border ${
                isCurrent
                  ? "border-amber-400/25 bg-amber-400/05"
                  : "border-[#1E2D3D] bg-[#060D18]"
              }`}
            >
              <span className="text-[8px] font-mono w-8 text-right shrink-0" style={{ color: color + "80" }}>
                {lvl.type}
              </span>

              {/* Strength dots */}
              <div className="flex gap-[3px] shrink-0">
                {[0, 1, 2, 3].map(j => (
                  <div
                    key={j}
                    className="w-[4px] h-3 rounded-[1px]"
                    style={{
                      background: j < lvl.strength ? color : "#1E2D3D",
                      opacity: j < lvl.strength ? 0.8 : 0.3,
                    }}
                  />
                ))}
              </div>

              <span
                className="flex-1 text-[13px] font-mono font-bold tabular-nums"
                style={{ color: isCurrent ? "#F0B429" : "#94A3B8" }}
              >
                ${lvl.price.toFixed(2)}
              </span>

              {isCurrent ? (
                <div className="flex items-center gap-1 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 pulse-dot inline-block" />
                  <span className="text-[8px] font-mono text-amber-400">CURRENT</span>
                </div>
              ) : (
                <span
                  className="text-[8px] font-mono shrink-0"
                  style={{ color: isSupply ? "#FF4D6A80" : "#10B98180" }}
                >
                  {isSupply ? "Supply" : "Demand"}
                </span>
              )}
            </motion.div>
          );
        })}

        <div className="mt-2 pt-3 border-t border-[#1E2D3D] grid grid-cols-2 gap-3">
          {[
            { k: "Nearest Resistance", v: "$594.50", c: "#FF4D6A" },
            { k: "Nearest Support",    v: "$590.10", c: "#10B981" },
            { k: "Gap to Resistance",  v: "$2.09",   c: "#94A3B8" },
            { k: "Gap to Support",     v: "$2.31",   c: "#94A3B8" },
          ].map(r => (
            <div key={r.k}>
              <div className="text-[8px] font-mono text-slate-600 tracking-wider">{r.k}</div>
              <div className="text-[11px] font-mono font-semibold" style={{ color: r.c }}>{r.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TAB_CONTENT: Record<TabId, ReactNode> = {
  "confluence":  <ConfluenceTab />,
  "eligibility": <EligibilityTab />,
  "trade-plan":  <TradePlanTab />,
  "levels":      <LevelsTab />,
};

// ─── Root ─────────────────────────────────────────────────────────────────────
export function PlatformShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("confluence");

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="showcase">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(240,180,41,0.04) 0%, transparent 52%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-5"
          >
            <span className="text-amber-400/60">◆</span>
            Platform Preview
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Your Trading Workstation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Explore the live platform. Every panel works together as one decision system.
          </motion.p>
        </div>

        {/* Workspace frame */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-[#1E2D3D]"
          style={{ boxShadow: "0 0 0 1px rgba(240,180,41,0.06), 0 40px 80px rgba(0,0,0,0.6)" }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0A1220] border-b border-[#1E2D3D] shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/60" />
            </div>
            <span className="ml-2 text-[9px] font-mono text-slate-600 tracking-widest select-none uppercase">
              SPY Pivot Pro&nbsp;&nbsp;·&nbsp;&nbsp;Interactive Preview
            </span>
            <div className="ml-auto flex items-center gap-1.5 text-[9px] font-mono text-emerald-400 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" />
              LIVE SESSION
            </div>
          </div>

          {/* Workspace interior */}
          <div className="flex bg-[#060D18]" style={{ minHeight: 420 }}>
            <Sidebar />

            {/* Main panel */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Tab bar */}
              <div className="flex items-center gap-0 border-b border-[#1E2D3D] bg-[#07101C]/40 shrink-0 overflow-x-auto">
                {TABS.map(tab => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="relative px-4 py-2.5 text-[10px] font-mono font-medium tracking-wider uppercase shrink-0 transition-colors duration-150 cursor-pointer border-r border-[#1E2D3D]"
                      style={{ color: isActive ? "#F0B429" : "#475569" }}
                    >
                      {tab.short}
                      {isActive && (
                        <motion.div
                          layoutId="tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400"
                          style={{ boxShadow: "0 0 8px rgba(240,180,41,0.6)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        />
                      )}
                    </button>
                  );
                })}
                {/* Spacer */}
                <div className="flex-1" />
                <div className="flex items-center gap-2 px-4 shrink-0">
                  <span className="text-[8px] font-mono text-slate-700 tracking-widest uppercase">FEB 26 2026</span>
                  <span className="text-[8px] font-mono text-slate-700">10:42 AM ET</span>
                </div>
              </div>

              {/* Animated tab content */}
              <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    {TAB_CONTENT[activeTab]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA below showcase */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 text-sm font-mono mb-5">
            This is what the platform looks like on a live trading day.
            Every number you see above was real on February 26, 2026.
          </p>
          <a
            href="#founding"
            className="inline-flex items-center gap-2 bg-[#F0B429] hover:bg-[#FFD060] text-[#050810] font-bold text-base px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-[0_0_0_1px_rgba(240,180,41,0.5)] hover:shadow-[0_0_28px_rgba(240,180,41,0.4)] hover:-translate-y-px"
          >
            Request Founding Access
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
