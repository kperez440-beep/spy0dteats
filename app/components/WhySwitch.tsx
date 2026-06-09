"use client";
import { motion } from "framer-motion";

const COMPARISONS = [
  {
    dimension: "Pre-Market Preparation",
    typical: "Scrolling social media, news sites, and Discord for trade ideas until the last minute.",
    platform: "Signal engine completes a full 11-signal scan by 8:30 AM. Bias is established before the open.",
  },
  {
    dimension: "Entry Decision",
    typical: "\"The chart looks good to me\" — subjective, inconsistent, and different every session.",
    platform: "Confluence score must reach ≥ 68/100 with ML confirmation. No score, no trade.",
  },
  {
    dimension: "Stop Loss Discipline",
    typical: "Set manually, then moved under emotional pressure when the position turns against you.",
    platform: "Calculated from supply/demand structure before entry. Defined in the plan. Never adjusted.",
  },
  {
    dimension: "Position Sizing",
    typical: "Arbitrary — based on gut confidence, account mood, or whatever felt right that morning.",
    platform: "Fixed budget per trade. Maximum risk is defined before clicking buy. No exceptions.",
  },
  {
    dimension: "Win Rate Required",
    typical: "Need 55–60%+ to stay profitable after fees, spreads, and the inevitable sizing mistakes.",
    platform: "Profitable at 38% win rate. The math works because R:R is systematically enforced at 1.86:1.",
  },
  {
    dimension: "Directional Bias",
    typical: "Latest tweet, breaking news alert, or Discord call from someone you've never met.",
    platform: "Multi-timeframe trend alignment score — 15M, 30M, 1H, 4H all weighted and processed.",
  },
  {
    dimension: "Learning After Losses",
    typical: "\"I need to journal more\" — said every week, done rarely, actionable insights: zero.",
    platform: "Auto-learning engine updates signal weights after every trade. The system improves itself.",
  },
  {
    dimension: "Mental Load",
    typical: "Every decision made under full emotional pressure with real money on the line in real time.",
    platform: "The plan is complete before the session opens. Execution follows rules, not reactions.",
  },
] as const;

export function WhySwitch() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="why-switch">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(240,180,41,0.03) 0%, transparent 50%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">

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
            The Difference
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Why Traders Switch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            The gap isn't intelligence or market knowledge. It's infrastructure.
          </motion.p>
        </div>

        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="grid grid-cols-[1fr_1fr] gap-0 mb-3 px-4"
        >
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5.5" fill="rgba(248,113,113,0.1)" stroke="#F87171" strokeWidth="0.8"/>
              <path d="M 3.5 3.5 l 5 5 M 8.5 3.5 l -5 5" stroke="#F87171" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="text-[10px] font-mono text-rose-400/70 tracking-widest uppercase">Typical Trading Approach</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5.5" fill="rgba(16,185,129,0.1)" stroke="#10B981" strokeWidth="0.8"/>
              <path d="M 3.5 6 l 2 2 3.5-3.5" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-[10px] font-mono text-teal-400/70 tracking-widest uppercase">SPY Pivot Pro</span>
          </div>
        </motion.div>

        {/* Comparison rows */}
        <div className="flex flex-col">
          {COMPARISONS.map((row, i) => (
            <motion.div
              key={row.dimension}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-[#1E2D3D] last:border-0"
            >
              {/* Dimension label */}
              <div className="px-4 pt-4 pb-1">
                <span className="text-[9px] font-mono text-slate-600 tracking-[0.2em] uppercase">
                  {row.dimension}
                </span>
              </div>

              {/* Two-column content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 pb-4">
                {/* Left — Typical */}
                <div className="flex gap-3 px-4 py-2 sm:border-r border-[#1E2D3D]">
                  <svg className="shrink-0 mt-[3px]" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <circle cx="6.5" cy="6.5" r="6" fill="rgba(248,113,113,0.08)" stroke="#F8717140" strokeWidth="0.8"/>
                    <path d="M 4 4 l 5 5 M 9 4 l -5 5" stroke="#F87171" strokeWidth="1.1" strokeLinecap="round" opacity="0.6"/>
                  </svg>
                  <p className="text-[13px] text-slate-500 leading-relaxed">{row.typical}</p>
                </div>

                {/* Right — SPY Pivot Pro */}
                <div className="flex gap-3 px-4 py-2">
                  <svg className="shrink-0 mt-[3px]" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <circle cx="6.5" cy="6.5" r="6" fill="rgba(16,185,129,0.1)" stroke="#10B98140" strokeWidth="0.8"/>
                    <path d="M 3.5 6.5 l 2 2 4-4" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-[13px] text-slate-300 leading-relaxed">{row.platform}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Verdict */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-block rounded-2xl px-8 py-8 border border-[#1E2D3D] max-w-2xl"
            style={{ background: "linear-gradient(135deg, rgba(240,180,41,0.04), rgba(6,182,212,0.03))" }}
          >
            <p className="text-2xl sm:text-3xl font-bold text-white leading-snug">
              "The difference isn't intelligence.
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-gold-shimmer leading-snug mt-1">
              It's infrastructure."
            </p>
            <p className="mt-5 text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
              Every trader who switched already knew the typical approach wasn't working.
              What they needed wasn't more charts — it was a decision system built around a defined edge.
            </p>
            <a
              href="#waitlist"
              className="mt-6 inline-flex items-center gap-2 bg-[#F0B429] hover:bg-[#FFD060] text-[#050810] font-bold text-sm px-7 py-3 rounded-full transition-all duration-200 cursor-pointer hover:shadow-[0_0_24px_rgba(240,180,41,0.4)] hover:-translate-y-px"
            >
              Join the Waitlist
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
