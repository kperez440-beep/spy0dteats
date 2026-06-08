"use client";
import { motion } from "framer-motion";

const CONTRASTS = [
  {
    without: "Gut-feel entries based on reading charts in isolation",
    with:    "Quantified signal confluence across 11 independent data inputs",
  },
  {
    without: "No way to assess edge before entering a position",
    with:    "ML Win Probability model pre-validates every setup before execution",
  },
  {
    without: "Manual option sizing and strike selection under pressure",
    with:    "Automated execution plan with defined R:R, strike, and budget before entry",
  },
  {
    without: "Emotional exits driven by P&L anxiety, not structure",
    with:    "Rule-based stop and target levels derived from supply/demand zone mapping",
  },
  {
    without: "No systematic method to learn from losing trades",
    with:    "Auto-learning feedback loop that refines signal weights with each result",
  },
] as const;

const FADE = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0  },
};

export function IntelligenceGap() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="platform">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.04) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section eyebrow */}
        <motion.div
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-1.5 mb-5"
        >
          <div
            className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase"
          >
            <span className="text-amber-400/60">◆</span>
            The Problem
          </div>
        </motion.div>

        {/* Section headline */}
        <motion.div
          className="text-center mb-4"
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            The Intelligence Gap
          </h2>
        </motion.div>

        <motion.p
          className="text-center text-slate-400 text-lg max-w-2xl mx-auto mb-14 leading-relaxed"
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
        >
          Every institutional desk has a quant stack behind their order flow.
          Individual traders are trading with a fraction of that infrastructure.
        </motion.p>

        {/* Column headers */}
        <motion.div
          className="grid grid-cols-[1fr_2px_1fr] gap-0 mb-4"
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
        >
          <div className="px-6 pb-3 text-center">
            <span className="text-[10px] font-mono tracking-widest uppercase text-rose-400/70">
              Without a System
            </span>
          </div>
          <div />
          <div className="px-6 pb-3 text-center">
            <span className="text-[10px] font-mono tracking-widest uppercase text-teal-400/70">
              With SPY Pivot Pro
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px w-full bg-[#1E2D3D] mb-0"
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.22 }}
        />

        {/* Contrast rows */}
        {CONTRASTS.map((pair, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-[1fr_2px_1fr] border-b border-[#1E2D3D]"
            variants={FADE}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.1 + i * 0.08,
            }}
          >
            {/* Without column */}
            <div className="flex items-start gap-3 px-6 py-5">
              <svg
                className="shrink-0 mt-[2px]"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="7" cy="7" r="6" fill="rgba(248,113,113,0.12)" stroke="#F87171" strokeWidth="1"/>
                <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#F87171" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <p className="text-[14px] text-slate-500 leading-relaxed">{pair.without}</p>
            </div>

            {/* Center divider */}
            <div className="bg-[#1E2D3D] relative">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full flex items-center justify-center border border-[#1E2D3D]"
                style={{ background: "#0A1220" }}
                aria-hidden="true"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 4h6M4 1l3 3-3 3" stroke="#1E2D3D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* With column */}
            <div className="flex items-start gap-3 px-6 py-5">
              <svg
                className="shrink-0 mt-[2px]"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="7" cy="7" r="6" fill="rgba(16,185,129,0.12)" stroke="#10B981" strokeWidth="1"/>
                <path d="M4 7l2 2 4-4" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-[14px] text-slate-300 leading-relaxed">{pair.with}</p>
            </div>
          </motion.div>
        ))}

        {/* Bridge statement */}
        <motion.div
          className="mt-14 mx-auto max-w-2xl text-center"
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div
            className="inline-block rounded-2xl px-8 py-6 border border-[#1E2D3D] bg-[#0A1220]/60"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,180,41,0.04), rgba(6,182,212,0.04))",
            }}
          >
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              The infrastructure that closes this gap has existed for decades.{" "}
              <br className="hidden sm:block" />
              It has never been productized for the individual options trader.
            </p>
            <p className="mt-3 text-xl font-bold text-gold-shimmer">Until now.</p>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="mt-8 text-center text-[11px] font-mono text-slate-700 max-w-lg mx-auto leading-relaxed"
          variants={FADE}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          Past backtest results (Jan 2026) do not guarantee future performance.
          Options trading involves substantial risk of loss.
          Institutional-grade methodology does not eliminate that risk.
        </motion.p>
      </div>
    </section>
  );
}
