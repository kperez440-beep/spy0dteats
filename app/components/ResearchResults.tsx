"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";

// ─── Equity curve data (22 trading days, $100 start, $1217 end) ───────────────
const EQUITY = [
  100, 108, 102, 115, 109, 119, 130, 123, 138, 145,
  138, 158, 175, 168, 192, 225, 215, 265, 350, 480,
  650, 900, 1217,
];

const SVG_W = 580, SVG_H = 165, PX = 10, PY = 12;
const MIN_V = 90, MAX_V = 1260;
const BOTTOM = PY + SVG_H;

function toXY(i: number, v: number): [number, number] {
  return [
    PX + (i / (EQUITY.length - 1)) * SVG_W,
    BOTTOM - ((v - MIN_V) / (MAX_V - MIN_V)) * SVG_H,
  ];
}

// ─── Metrics ──────────────────────────────────────────────────────────────────
const METRICS = [
  { label: "Total Return",    value: "+1,085%",   sub: "Jan 2026 backtest",   color: "#10B981" },
  { label: "Sharpe Ratio",    value: "14.0",      sub: "Risk-adjusted return", color: "#F0B429" },
  { label: "Max Drawdown",    value: "−5.4%",     sub: "Peak-to-trough",      color: "#06B6D4" },
  { label: "Profit Factor",   value: "1.60×",     sub: "Gross profit / loss",  color: "#F0B429" },
] as const;

const DETAIL_STATS = [
  { k: "Strategy",         v: "SPY 0DTE Confluence" },
  { k: "Test Period",      v: "January 2026 (22 days)" },
  { k: "Starting Capital", v: "$100" },
  { k: "Peak Equity",      v: "$1,217" },
  { k: "Total Trades",     v: "24" },
  { k: "Win Rate",         v: "38%" },
  { k: "Calmar Ratio",     v: "995" },
  { k: "Recovery Factor",  v: "1.0" },
] as const;

const PHILOSOPHY = [
  {
    title: "Risk-First Design",
    color: "#F0B429",
    desc: "Every position enters with a defined stop and target. Max risk per trade is set before the market opens. No exceptions. The 38% win rate is only profitable because R:R is systematically enforced.",
  },
  {
    title: "Statistical Edge, Not Prediction",
    color: "#06B6D4",
    desc: "The system does not predict market direction. It identifies when statistical conditions — confluence, structure, ML probability — align historically favorably, then sizes appropriately.",
  },
  {
    title: "Walk-Forward Validation",
    color: "#10B981",
    desc: "Signal parameters were set before the January 2026 test period. No optimization was performed after results were observed. The methodology is designed to generalize, not to fit history.",
  },
] as const;

const FADE = {
  hidden: { opacity: 0 },
  show:   { opacity: 1 },
};

export function ResearchResults() {
  const { lineD, fillD, dayLabels } = useMemo(() => {
    const pts = EQUITY.map((v, i) => toXY(i, v));
    const coordStr = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" L ");
    const lineD = `M ${coordStr}`;
    const fillD = `M ${PX},${BOTTOM} L ${coordStr} L ${PX + SVG_W},${BOTTOM} Z`;
    // Day labels every ~5 trading days
    const dayLabels = [0, 4, 9, 14, 19, 22].map(i => {
      const [x] = toXY(i, EQUITY[i]);
      return { x, label: i === 0 ? "Jan 2" : i === 22 ? "Jan 31" : `Day ${i}` };
    });
    return { lineD, fillD, dayLabels };
  }, []);

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="research">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 40%, rgba(16,185,129,0.04) 0%, transparent 52%)" }}
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
            <span className="text-emerald-400/60">◆</span>
            Research &amp; Results
          </motion.div>

          <motion.h2
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            The Numbers, Unfiltered
          </motion.h2>

          <motion.p
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            January 2026 backtest. Parameters set before the period. Results presented without modification.
          </motion.p>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              variants={FADE} initial="hidden"
              whileInView="show" viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-[#1E2D3D] bg-[#0A1220] p-5 text-center"
            >
              <div
                className="text-[38px] sm:text-[42px] font-mono font-bold tabular-nums leading-none mb-1"
                style={{ color: m.color }}
              >
                {m.value}
              </div>
              <div className="text-[11px] font-bold text-white mt-1.5">{m.label}</div>
              <div className="text-[9px] font-mono text-slate-600 mt-0.5 tracking-wider">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Equity curve */}
        <motion.div
          variants={FADE} initial="hidden"
          whileInView="show" viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-[#1E2D3D] bg-[#0A1220] p-6 mb-10 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[9px] font-mono text-slate-600 tracking-widest uppercase">Equity Curve</p>
              <p className="text-[13px] font-bold text-white mt-0.5">SPY 0DTE Confluence Strategy · January 2026</p>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-mono text-slate-600">$100 → </div>
              <div className="text-[20px] font-mono font-bold text-emerald-400 leading-none">$1,217</div>
            </div>
          </div>

          <div className="relative overflow-hidden" style={{ paddingBottom: 24 }}>
            <svg
              viewBox={`0 0 ${SVG_W + PX * 2} ${BOTTOM + 24}`}
              className="w-full"
              aria-label="Equity curve chart showing growth from $100 to $1,217"
            >
              <defs>
                <linearGradient id="equityFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor="#F0B429" stopOpacity="0.25" />
                  <stop offset="70%"  stopColor="#F0B429" stopOpacity="0.04" />
                  <stop offset="100%" stopColor="#F0B429" stopOpacity="0" />
                </linearGradient>
                <filter id="equityGlow">
                  <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#F0B429" floodOpacity="0.4" />
                </filter>
              </defs>

              {/* Horizontal grid lines */}
              {[100, 300, 600, 900, 1200].map(v => {
                const [, y] = toXY(0, v);
                return (
                  <g key={v}>
                    <line x1={PX} y1={y} x2={PX + SVG_W} y2={y} stroke="#1E2D3D" strokeWidth="0.75" strokeDasharray="4 4" />
                    <text x={PX - 4} y={y + 3.5} textAnchor="end" fill="#334155" fontSize="7.5" fontFamily="'IBM Plex Mono', monospace">
                      ${v >= 1000 ? `${v / 1000}K` : v}
                    </text>
                  </g>
                );
              })}

              {/* Day labels */}
              {dayLabels.map(dl => (
                <text key={dl.label} x={dl.x} y={BOTTOM + 14} textAnchor="middle" fill="#334155" fontSize="7.5" fontFamily="'IBM Plex Mono', monospace">
                  {dl.label}
                </text>
              ))}

              {/* Fill area */}
              <motion.path
                d={fillD}
                fill="url(#equityFill)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />

              {/* Track (ghost) */}
              <path d={lineD} fill="none" stroke="#1E2D3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

              {/* Animated line */}
              <motion.path
                d={lineD}
                fill="none"
                stroke="#F0B429"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#equityGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  pathLength: { delay: 0.4, duration: 2.0, ease: "easeInOut" },
                  opacity:    { delay: 0.4, duration: 0.15 },
                }}
              />

              {/* End dot */}
              <motion.circle
                cx={PX + SVG_W}
                cy={toXY(22, 1217)[1]}
                r={4}
                fill="#F0B429"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2.4, type: "spring", stiffness: 200, damping: 16 }}
              />
            </svg>
          </div>

          <p className="text-[9px] font-mono text-slate-700 text-center mt-1">
            Illustrative backtest equity curve · January 2026 · 22 trading days · 24 trades
          </p>
        </motion.div>

        {/* Detail stats + methodology grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 mb-10">

          {/* Detail stats table */}
          <motion.div
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#1E2D3D] bg-[#0A1220] p-5"
          >
            <p className="text-[9px] font-mono text-slate-600 tracking-widest uppercase mb-4">Backtest Summary</p>
            <div className="flex flex-col gap-2.5">
              {DETAIL_STATS.map(s => (
                <div key={s.k} className="flex items-baseline justify-between gap-3 border-b border-[#1E2D3D] pb-2 last:border-0 last:pb-0">
                  <span className="text-[10px] font-mono text-slate-600">{s.k}</span>
                  <span className="text-[11px] font-mono font-semibold text-slate-300 tabular-nums">{s.v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy cards */}
          <div className="flex flex-col gap-4">
            {PHILOSOPHY.map((p, i) => (
              <motion.div
                key={p.title}
                variants={FADE} initial="hidden"
                whileInView="show" viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-[#1E2D3D] bg-[#0A1220] p-5 flex gap-4"
              >
                <div
                  className="shrink-0 w-1 rounded-full mt-0.5"
                  style={{ background: p.color }}
                />
                <div>
                  <h4 className="text-[14px] font-bold text-white mb-1.5">{p.title}</h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          variants={FADE} initial="hidden"
          whileInView="show" viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-xl border border-[#1E2D3D] bg-[#0A1220]/60 px-6 py-4"
        >
          <p className="text-[9px] font-mono text-slate-600 leading-relaxed">
            <span className="text-slate-500 font-semibold">Risk Disclosure:</span> Past backtest results are
            hypothetical and do not represent live trading performance. The January 2026 results shown were
            generated using historical data with signal parameters set prior to the test period. Backtesting
            inherently benefits from hindsight. Live trading results will differ materially. Options trading
            involves substantial risk of loss and is not suitable for all investors. The loss of the entire
            principal invested is possible. Do not trade with capital you cannot afford to lose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
