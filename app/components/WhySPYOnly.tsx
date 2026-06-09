"use client";
import { motion } from "framer-motion";

const REASONS = [
  {
    stat: "2.4M+",
    unit: "contracts / day",
    title: "Unmatched Liquidity",
    desc: "SPY options average 2.4 million contracts daily — more than any other equity option in existence. Fill risk is effectively eliminated.",
    color: "#F0B429",
    delay: 0,
  },
  {
    stat: "$0.01",
    unit: "bid/ask spread",
    title: "Institutional Spreads",
    desc: "At-the-money SPY options routinely print $0.01 spreads. Every other equity option widens under volume or volatility.",
    color: "#06B6D4",
    delay: 0.06,
  },
  {
    stat: "42%",
    unit: "of SPY volume",
    title: "0DTE Dominates",
    desc: "Nearly half of all SPY options volume is zero-days-to-expiry. The market evolved to accommodate exactly the strategy we run.",
    color: "#10B981",
    delay: 0.12,
  },
  {
    stat: "20+",
    unit: "years of data",
    title: "Deep Behavioral History",
    desc: "Two decades of documented price behavior, seasonality, and structural patterns — every signal in the engine is validated on real history.",
    color: "#F0B429",
    delay: 0.18,
  },
  {
    stat: "$450B+",
    unit: "daily notional",
    title: "Institutional Participation",
    desc: "Hedge funds, systematic desks, and market makers all operate in SPY. You execute in the most scrutinized, most efficient venue in equity markets.",
    color: "#06B6D4",
    delay: 0.24,
  },
] as const;

// Relative volume bars vs other instruments
const VOL_COMPARE = [
  { ticker: "SPY",  pct: 100, label: "2.4M",  color: "#F0B429" },
  { ticker: "QQQ",  pct: 28,  label: "670K",  color: "#06B6D440" },
  { ticker: "AAPL", pct: 22,  label: "530K",  color: "#06B6D440" },
  { ticker: "TSLA", pct: 18,  label: "430K",  color: "#06B6D440" },
  { ticker: "NVDA", pct: 15,  label: "360K",  color: "#06B6D440" },
] as const;

const FADE = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0  },
};

export function WhySPYOnly() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="why-spy">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 60%, rgba(240,180,41,0.04) 0%, transparent 50%)" }}
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
            <span className="text-amber-400/60">◆</span>
            The Instrument Thesis
          </motion.div>

          <motion.h2
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            One Instrument.{" "}
            <span className="text-gold-shimmer">Total Mastery.</span>
          </motion.h2>

          <motion.p
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Most traders spread attention across dozens of instruments and never build
            a real edge in any of them. We made the opposite choice — every signal,
            every model, every backtest is built exclusively for SPY options behavior.
          </motion.p>
        </div>

        {/* Reason cards — 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {REASONS.map((r) => (
            <motion.div
              key={r.title}
              variants={FADE} initial="hidden"
              whileInView="show" viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: r.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-2xl border border-[#1E2D3D] bg-[#0A1220] p-6 overflow-hidden transition-all duration-300 hover:border-[#2A3A50]"
              whileHover={{ y: -2 }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${r.color}07, transparent 60%)` }}
                aria-hidden="true"
              />

              {/* Stat */}
              <div className="mb-3">
                <span
                  className="text-[36px] font-mono font-bold tabular-nums leading-none"
                  style={{ color: r.color }}
                >
                  {r.stat}
                </span>
                <div className="text-[9px] font-mono text-slate-600 tracking-widest uppercase mt-0.5">
                  {r.unit}
                </div>
              </div>

              {/* Accent line */}
              <div className="h-px w-8 mb-3 rounded-full" style={{ background: r.color }} />

              <h3 className="text-[15px] font-bold text-white mb-2">{r.title}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}

          {/* Volume comparison card — spans remaining cols on lg */}
          <motion.div
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-2xl border border-[#1E2D3D] bg-[#0A1220] p-6 sm:col-span-2 lg:col-span-1"
          >
            <p className="text-[8px] font-mono text-slate-600 tracking-[0.22em] uppercase mb-1">
              Relative Volume
            </p>
            <h3 className="text-[15px] font-bold text-white mb-4">Daily Options Volume</h3>

            <div className="flex flex-col gap-2.5">
              {VOL_COMPARE.map((v, i) => (
                <div key={v.ticker} className="flex items-center gap-2.5">
                  <span className="text-[9px] font-mono text-slate-500 w-9 shrink-0">{v.ticker}</span>
                  <div className="flex-1 h-[5px] bg-[#111C2E] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{
                        background: v.color,
                        transformOrigin: "left",
                        boxShadow: i === 0 ? "0 0 8px rgba(240,180,41,0.4)" : "none",
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: v.pct / 100 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.07, duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                  <span
                    className="text-[9px] font-mono tabular-nums shrink-0 w-9 text-right"
                    style={{ color: i === 0 ? "#F0B429" : "#475569" }}
                  >
                    {v.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[10px] font-mono text-slate-600 leading-relaxed">
              Contracts / day avg. SPY dominates by 3.6× nearest competitor.
            </p>
          </motion.div>
        </div>

        {/* Thesis statement */}
        <motion.div
          variants={FADE} initial="hidden"
          whileInView="show" viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div
            className="rounded-2xl px-8 py-8 border border-[#1E2D3D]"
            style={{ background: "linear-gradient(135deg, rgba(240,180,41,0.04), rgba(6,182,212,0.03))" }}
          >
            <p className="text-[11px] font-mono text-slate-600 tracking-widest uppercase mb-4">
              The Specialization Thesis
            </p>
            <blockquote className="text-xl sm:text-2xl text-white font-light leading-relaxed">
              "Mastery requires constraint. Every intelligence module, every signal, every
              backtest was designed exclusively for{" "}
              <span className="text-amber-400 font-semibold">SPY options behavior</span>.
              Breadth is the enemy of edge."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
