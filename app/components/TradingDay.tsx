"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Timeline steps ───────────────────────────────────────────────────────────
const STEPS = [
  {
    time:    "8:30 AM",
    stage:   "Signal Engine",
    label:   "Signals Initialized",
    color:   "#F0B429",
    summary: "The intelligence engine initializes before the market opens. All 11 signals are sampled across three timeframes.",
    panel: {
      heading: "Pre-Market Signal Scan Complete",
      rows: [
        { k: "15M Trend",     v: "↑ Bullish",   c: "#10B981" },
        { k: "30M Trend",     v: "↑ Bullish",   c: "#10B981" },
        { k: "1H Trend",      v: "↑ Bullish",   c: "#10B981" },
        { k: "VIX",           v: "14.22 ↓",     c: "#06B6D4" },
        { k: "IV Rank",       v: "28% — Low",   c: "#06B6D4" },
        { k: "Options Flow",  v: "Call-biased",  c: "#F0B429" },
      ],
      note: "Initial bias: BULLISH · Engine running · Awaiting market open",
      noteColor: "#F0B429",
    },
  },
  {
    time:    "9:30 AM",
    stage:   "Signal Confluence",
    label:   "Score Calculated",
    color:   "#06B6D4",
    summary: "Market opens. All 11 signals are finalized using live data. The confluence engine computes a composite score.",
    panel: {
      heading: "Confluence Score: 72 / 100",
      rows: [
        { k: "EMA Trend",    v: "8.2 / 10", c: "#F0B429" },
        { k: "VWAP Bias",    v: "7.4 / 10", c: "#06B6D4" },
        { k: "RSI Momentum", v: "8.8 / 10", c: "#F0B429" },
        { k: "Order Flow",   v: "6.0 / 10", c: "#06B6D4" },
        { k: "SPY Breadth",  v: "7.6 / 10", c: "#10B981" },
        { k: "IV Pct Rank",  v: "4.8 / 10", c: "#475569" },
      ],
      note: "Composite 72 / 100 · Threshold 68 ✓ · Proceeding to gate",
      noteColor: "#10B981",
    },
  },
  {
    time:    "9:42 AM",
    stage:   "Eligibility Gate",
    label:   "Gate Cleared",
    color:   "#10B981",
    summary: "The eligibility engine runs its 5-condition check. All conditions must clear or the session is skipped.",
    panel: {
      heading: "All Gate Conditions Passed",
      rows: [
        { k: "Confluence ≥ 68",    v: "72 ✓",    c: "#10B981" },
        { k: "ML Probability",     v: "73.2% ✓",  c: "#10B981" },
        { k: "Risk Parameters",    v: "Aligned ✓", c: "#10B981" },
        { k: "Market Structure",   v: "Bullish ✓", c: "#10B981" },
        { k: "Session Filter",     v: "Active ✓",  c: "#10B981" },
      ],
      note: "ELIGIBLE LONG · 5/5 conditions met · Trade plan generating",
      noteColor: "#F0B429",
    },
  },
  {
    time:    "9:44 AM",
    stage:   "Trade Plan",
    label:   "Plan Generated",
    color:   "#06B6D4",
    summary: "Entry, stop, and target are calculated from live supply/demand zones. Position sizing follows budget rules.",
    panel: {
      heading: "Trade Plan: 592C 0DTE",
      rows: [
        { k: "Entry",    v: "$592.41",               c: "#F0B429" },
        { k: "Stop",     v: "$589.50  (−$2.91)",    c: "#FF4D6A" },
        { k: "Target",   v: "$597.80  (+$5.39)",    c: "#10B981" },
        { k: "Contract", v: "1× 592C 0DTE",         c: "#06B6D4" },
        { k: "Budget",   v: "$500",                  c: "#F1F5F9" },
        { k: "R:R",      v: "1 : 1.86",              c: "#F0B429" },
      ],
      note: "Plan complete · Awaiting execution window",
      noteColor: "#06B6D4",
    },
  },
  {
    time:    "9:45 AM",
    stage:   "Execution",
    label:   "Trade Placed",
    color:   "#F0B429",
    summary: "The contract is purchased at market. Risk is capped at the stop level. The platform monitors the position.",
    panel: {
      heading: "Order Filled · Position Open",
      rows: [
        { k: "Contract",  v: "SPY 592C 0DTE",   c: "#F0B429" },
        { k: "Fill Price", v: "$2.15 / contract", c: "#F1F5F9" },
        { k: "Qty",       v: "1 contract",        c: "#F1F5F9" },
        { k: "Cost",      v: "$215 debit",        c: "#FF4D6A" },
        { k: "Stop",      v: "$0.00 (−100%)",     c: "#FF4D6A" },
        { k: "Target",    v: "$7.39 (+$5.24)",    c: "#10B981" },
      ],
      note: "Position open · Stop active · Monitoring in progress",
      noteColor: "#F0B429",
    },
  },
  {
    time:    "12:23 PM",
    stage:   "Outcome",
    label:   "Trade Closed",
    color:   "#10B981",
    summary: "SPY reached the target zone. The contract is sold. P&L is realized. The result feeds back into the learning engine.",
    panel: {
      heading: "Trade Closed — Target Reached",
      rows: [
        { k: "Exit Price",  v: "$7.39",           c: "#10B981" },
        { k: "Entry Price", v: "$2.15",            c: "#94A3B8" },
        { k: "Gross P&L",   v: "+$524",            c: "#10B981" },
        { k: "Return",      v: "+244%",            c: "#10B981" },
        { k: "Hold Time",   v: "2h 38m",           c: "#94A3B8" },
        { k: "New Balance", v: "$1,124 (+$524)",   c: "#F0B429" },
      ],
      note: "Signal weights updated · Learning engine cycle complete",
      noteColor: "#10B981",
    },
  },
] as const;

type StepIdx = 0 | 1 | 2 | 3 | 4 | 5;

const FADE = {
  hidden: { opacity: 0, y: 10 },
  show:   { opacity: 1, y: 0  },
};

function StepPanel({ step }: { step: typeof STEPS[number] }) {
  const { panel } = step;
  return (
    <div className="h-full flex flex-col">
      <div className="px-5 py-4 border-b border-[#1E2D3D] flex items-center justify-between">
        <div>
          <div className="text-[8px] font-mono text-slate-600 tracking-widest uppercase">{step.stage}</div>
          <div className="text-[14px] font-bold text-white mt-0.5">{panel.heading}</div>
        </div>
        <div
          className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider"
          style={{ background: `${step.color}14`, color: step.color, border: `1px solid ${step.color}30` }}
        >
          {step.time}
        </div>
      </div>

      <div className="flex-1 py-4 px-5 flex flex-col gap-2.5">
        {panel.rows.map(r => (
          <motion.div
            key={r.k}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28 }}
            className="flex items-baseline justify-between py-2 border-b border-[#1E2D3D] last:border-0"
          >
            <span className="text-[10px] font-mono text-slate-500">{r.k}</span>
            <span className="text-[11px] font-mono font-semibold tabular-nums" style={{ color: r.c }}>{r.v}</span>
          </motion.div>
        ))}
      </div>

      <div
        className="mx-5 mb-4 px-4 py-2.5 rounded-xl text-[9px] font-mono text-center tracking-wide border"
        style={{
          background: `${panel.noteColor}0c`,
          borderColor: `${panel.noteColor}25`,
          color: panel.noteColor,
        }}
      >
        {panel.note}
      </div>
    </div>
  );
}

export function TradingDay() {
  const [active, setActive] = useState<StepIdx>(0);
  const step = STEPS[active];

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="trading-day">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(6,182,212,0.03) 0%, transparent 55%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-5"
          >
            <span className="text-teal-400/60">◆</span>
            Platform Story
          </motion.div>

          <motion.h2
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            A Day On The Platform
          </motion.h2>

          <motion.p
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            February 26, 2026. Step through a real trading day — from signal initialization to closed trade.
          </motion.p>
        </div>

        {/* Interactive timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-[#1E2D3D]"
          style={{ boxShadow: "0 0 0 1px rgba(240,180,41,0.05), 0 32px 64px rgba(0,0,0,0.5)" }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0A1220] border-b border-[#1E2D3D]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/60" />
            <span className="ml-2 text-[9px] font-mono text-slate-600 tracking-widest">
              SPY Pivot Pro&nbsp;&nbsp;·&nbsp;&nbsp;Trade Timeline&nbsp;&nbsp;·&nbsp;&nbsp;Feb 26, 2026
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" />
              <span className="text-[9px] font-mono text-emerald-400">PLAYBACK</span>
            </div>
          </div>

          <div className="bg-[#060D18] flex flex-col lg:flex-row" style={{ minHeight: 420 }}>

            {/* Step list — left sidebar on desktop, top strip on mobile */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible shrink-0 lg:w-[220px] border-b lg:border-b-0 lg:border-r border-[#1E2D3D] bg-[#07101C]/60">
              {STEPS.map((s, i) => {
                const isActive   = active === i;
                const isComplete = i < active;
                return (
                  <button
                    key={s.label}
                    onClick={() => setActive(i as StepIdx)}
                    className="flex items-center gap-3 px-4 py-3 text-left transition-colors duration-150 border-b border-[#1E2D3D] last:border-0 shrink-0 lg:shrink cursor-pointer w-full min-w-[160px] lg:min-w-0"
                    style={{
                      background: isActive ? `${s.color}0c` : "transparent",
                      borderLeft: isActive ? `2px solid ${s.color}` : "2px solid transparent",
                    }}
                  >
                    {/* Step circle */}
                    <div
                      className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-mono font-bold"
                      style={{
                        background: isComplete
                          ? `${s.color}20`
                          : isActive
                          ? `${s.color}20`
                          : "#111C2E",
                        border: `1px solid ${isComplete || isActive ? s.color + "40" : "#1E2D3D"}`,
                        color: isComplete || isActive ? s.color : "#475569",
                      }}
                    >
                      {isComplete ? "✓" : i + 1}
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span
                        className="text-[9px] font-mono font-bold tracking-wider leading-none"
                        style={{ color: isActive ? s.color : isComplete ? "#475569" : "#334155" }}
                      >
                        {s.time}
                      </span>
                      <span className="text-[8px] font-mono text-slate-600 leading-tight mt-0.5 truncate">
                        {s.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Content area */}
            <div className="flex-1 flex flex-col min-w-0">

              {/* Step summary bar */}
              <div className="px-5 py-3 border-b border-[#1E2D3D] flex items-center justify-between gap-4 shrink-0">
                <p className="text-[12px] text-slate-400 leading-relaxed">{step.summary}</p>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span
                    className="inline-block px-2 py-0.5 rounded text-[8px] font-mono font-bold tracking-wider uppercase"
                    style={{ background: `${step.color}14`, color: step.color }}
                  >
                    {step.stage}
                  </span>
                </div>
              </div>

              {/* Tab panel content */}
              <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    className="absolute inset-0 overflow-y-auto"
                  >
                    <StepPanel step={step} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-[#1E2D3D] shrink-0">
                <button
                  onClick={() => active > 0 && setActive((active - 1) as StepIdx)}
                  disabled={active === 0}
                  className="text-[10px] font-mono text-slate-600 hover:text-slate-300 transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-default"
                >
                  ← Previous
                </button>

                {/* Progress dots */}
                <div className="flex items-center gap-1.5">
                  {STEPS.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i as StepIdx)}
                      className="w-1.5 h-1.5 rounded-full transition-all duration-200 cursor-pointer"
                      style={{
                        background: i === active ? step.color : i < active ? "#334155" : "#1E2D3D",
                        transform: i === active ? "scale(1.5)" : "scale(1)",
                      }}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => active < 5 && setActive((active + 1) as StepIdx)}
                  disabled={active === 5}
                  className="text-[10px] font-mono transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-default"
                  style={{ color: active < 5 ? step.color : "#475569" }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Outcome caption */}
        <motion.p
          variants={FADE} initial="hidden"
          whileInView="show" viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6 text-center text-[11px] font-mono text-slate-700"
        >
          This timeline represents an actual backtest trade from January 2026.
          Live results will differ. All times are Eastern.
        </motion.p>
      </div>
    </section>
  );
}
