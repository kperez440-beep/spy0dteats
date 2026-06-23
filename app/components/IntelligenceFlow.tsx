"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";

// ─── Geometry constants ───────────────────────────────────────────────────────
const CARD_W  = 160;
const CARD_H  = 52;
const CARD_GAP = 8;
const CONV_W  = 88;
const CONV_H  = CARD_H * 3 + CARD_GAP * 2; // 172
const CY      = CONV_H / 2;                 // 86 — vertical center

// ─── Data ─────────────────────────────────────────────────────────────────────
const SIGNALS = [
  { tf: "15M", strength: 8.4, color: "#F0B429", delay: 0.2 },
  { tf: "30M", strength: 7.8, color: "#06B6D4", delay: 0.3 },
  { tf: "1H",  strength: 8.1, color: "#10B981", delay: 0.4 },
];

const CONV_PATHS = [
  { d: `M 0,26 C ${CONV_W/2},26 ${CONV_W/2},${CY} ${CONV_W},${CY}`,   color: "#F0B429", delay: 0.65 },
  { d: `M 0,${CY} L ${CONV_W},${CY}`,                                   color: "#06B6D4", delay: 0.75 },
  { d: `M 0,146 C ${CONV_W/2},146 ${CONV_W/2},${CY} ${CONV_W},${CY}`, color: "#10B981", delay: 0.85 },
];

const CHAIN = [
  { label: "Eligibility Gate", badge: "PASS",   badgeColor: "#10B981", sub: "All conditions met", delay: 1.1 },
  { label: "Trade Plan",       badge: "1:1.86",  badgeColor: "#06B6D4", sub: "R:R defined pre-entry", delay: 1.3 },
  { label: "Execution",        badge: "READY",   badgeColor: "#F0B429", sub: "1× 592C 0DTE · $500", delay: 1.5 },
];

const STAGE_DESCS = [
  {
    label: "Signals",
    color: "#F0B429",
    desc: "11 quantitative signals sampled across momentum, trend, structure, and sentiment on 3 timeframes.",
  },
  {
    label: "Confluence",
    color: "#06B6D4",
    desc: "Signals are weighted and scored into a single composite reading reflecting total market alignment.",
  },
  {
    label: "Eligibility",
    color: "#10B981",
    desc: "A 4-condition gate — confluence, ML score, risk, and session — must all clear before a plan is generated.",
  },
  {
    label: "Trade Plan",
    color: "#06B6D4",
    desc: "Entry, stop, and target are calculated from supply/demand zones with explicit risk per trade.",
  },
  {
    label: "Execution",
    color: "#F0B429",
    desc: "Strike, sizing, and budget are output by the system. The decision is yours — the logic is already built in.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────
function SignalCard({ tf, strength, color, delay }: typeof SIGNALS[0]) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-2.5 px-3 rounded-xl border border-[#1E2D3D] bg-[#0A1220]"
      style={{ height: CARD_H, borderLeft: `2px solid ${color}70`, width: CARD_W }}
    >
      <div className="flex flex-col gap-1 flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-mono text-slate-600 tracking-widest">{tf}</span>
          <span className="text-[9px] font-mono font-bold" style={{ color }}>↑ BULL</span>
        </div>
        <div className="h-[3px] bg-[#111C2E] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: color, transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: strength / 10 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.25, duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </div>
      <span className="text-[13px] font-mono font-bold shrink-0 tabular-nums" style={{ color }}>
        {strength}
      </span>
    </motion.div>
  );
}

function ConvergenceSVG() {
  return (
    <svg
      viewBox={`0 0 ${CONV_W} ${CONV_H}`}
      width={CONV_W}
      height={CONV_H}
      className="shrink-0"
      aria-hidden="true"
    >
      {CONV_PATHS.map((p, i) => (
        <g key={i}>
          <path d={p.d} fill="none" stroke="#1E2D3D" strokeWidth={1.5} strokeLinecap="round" />
          <motion.path
            d={p.d}
            fill="none"
            stroke={p.color}
            strokeWidth={1.5}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 4px ${p.color}60)` }}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              pathLength: { delay: p.delay, duration: 0.65, ease: [0.4, 0, 0.2, 1] },
              opacity:    { delay: p.delay, duration: 0.05 },
            }}
          />
        </g>
      ))}
    </svg>
  );
}

function ConfluenceHub() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.95, type: "spring", stiffness: 140, damping: 18 }}
      className="shrink-0 rounded-xl border bg-[#0A1220] p-4 flex flex-col justify-between"
      style={{
        width: 152,
        height: CONV_H,
        borderColor: "#F0B42930",
        boxShadow: "0 0 24px rgba(240,180,41,0.07), inset 0 0 24px rgba(240,180,41,0.02)",
      }}
    >
      <div>
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-1 h-1 rounded-full bg-amber-400 pulse-dot inline-block" />
          <span className="text-[8px] font-mono text-slate-600 tracking-widest uppercase">Signal Confluence</span>
        </div>
        <div className="text-[30px] font-mono font-bold text-amber-400 leading-none mt-2 tabular-nums">72</div>
        <div className="text-[8px] font-mono text-slate-600 mt-0.5">/ 100 composite</div>
      </div>
      <div>
        <div className="h-px bg-[#1E2D3D] mb-2" />
        <div className="space-y-0.5">
          <div className="text-[8px] font-mono text-slate-500">11 signals</div>
          <div className="text-[8px] font-mono text-slate-500">3 timeframes</div>
        </div>
        <div className="mt-2 h-[3px] bg-[#111C2E] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #06B6D4, #F0B429)", transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 0.72 }}
            viewport={{ once: true }}
            transition={{ delay: 1.15, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function ChainArrow({ color, delay }: { color: string; delay: number }) {
  return (
    <motion.div
      className="flex items-center shrink-0"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "left" }}
    >
      <div className="w-7 h-px" style={{ background: `${color}40` }} />
      <svg width="6" height="9" viewBox="0 0 6 9" fill="none" aria-hidden="true">
        <path d="M 1 1 L 5 4.5 L 1 8" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity={0.6} />
      </svg>
    </motion.div>
  );
}

function ChainNode({ label, badge, badgeColor, sub, delay }: typeof CHAIN[0]) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="shrink-0 rounded-xl border border-[#1E2D3D] bg-[#0A1220] p-3 flex flex-col gap-2 justify-center"
      style={{ width: 128, height: CONV_H, borderTop: `2px solid ${badgeColor}50` }}
    >
      <span className="text-[8px] font-mono text-slate-500 tracking-widest uppercase leading-snug">
        {label}
      </span>
      <div
        className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold self-start tracking-wider"
        style={{
          background: `${badgeColor}14`,
          color: badgeColor,
          border: `1px solid ${badgeColor}28`,
        }}
      >
        {badge}
      </div>
      <span className="text-[8px] font-mono text-slate-600 leading-snug">{sub}</span>
    </motion.div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export function IntelligenceFlow() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="how-it-works">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(240,180,41,0.04) 0%, transparent 56%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-5"
          >
            <span className="text-amber-400/60">◆</span>
            The Architecture
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            The Intelligence Engine
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Every trade flows through a five-stage architecture.
            No guesswork. No discretion gaps.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-slate-500 text-sm max-w-2xl mx-auto leading-loose"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.02em" }}
          >
            Quantitative signals are sampled across three timeframes and weighted into a single composite
            score. An eligibility gate — requiring confluence, ML confidence, risk alignment, and session
            conditions to all clear simultaneously — filters out low-probability setups before they reach
            the execution layer. What remains is a pre-built trade plan: entry, stop, and target derived
            from supply and demand structure, with defined risk per trade calculated before any position
            is opened. The trader makes the decision. The system builds the case.
          </motion.p>
        </div>

        {/* ── Desktop Flow ── */}
        <div className="hidden lg:flex items-center justify-center overflow-x-auto pb-2">
          {/* Signal inputs */}
          <div className="flex flex-col shrink-0" style={{ gap: CARD_GAP }}>
            {SIGNALS.map(s => <SignalCard key={s.tf} {...s} />)}
          </div>

          {/* SVG convergence */}
          <ConvergenceSVG />

          {/* Confluence hub */}
          <ConfluenceHub />

          {/* Chain */}
          {CHAIN.map(node => (
            <Fragment key={node.label}>
              <ChainArrow color={node.badgeColor} delay={node.delay - 0.12} />
              <ChainNode {...node} />
            </Fragment>
          ))}
        </div>

        {/* ── Mobile Flow ── */}
        <div className="lg:hidden flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-2">
            {SIGNALS.map(s => (
              <div
                key={s.tf}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#1E2D3D] bg-[#0A1220] text-[10px] font-mono"
                style={{ borderLeft: `2px solid ${s.color}70` }}
              >
                <span className="text-slate-600">{s.tf}</span>
                <span className="font-bold" style={{ color: s.color }}>↑ BULL {s.strength}</span>
              </div>
            ))}
          </div>

          {/* Down connectors */}
          {[
            { label: "Signal Confluence", score: "72/100", color: "#F0B429" },
            ...CHAIN.map(c => ({ label: c.label, score: c.badge, color: c.badgeColor })),
          ].map((item, i) => (
            <Fragment key={item.label}>
              <div className="flex flex-col items-center gap-0.5">
                <div className="h-5 w-px bg-[#1E2D3D]" />
                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" aria-hidden="true">
                  <path d="M 1 1 L 4 6 L 7 1" stroke={`${item.color}60`} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div
                className="w-full max-w-xs rounded-xl border border-[#1E2D3D] bg-[#0A1220] px-4 py-3 flex items-center justify-between"
                style={{ borderTop: `2px solid ${item.color}50` }}
              >
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{item.label}</span>
                <span className="text-[10px] font-mono font-bold" style={{ color: item.color }}>{item.score}</span>
              </div>
            </Fragment>
          ))}
        </div>

        {/* ── Stage Descriptions ── */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STAGE_DESCS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl border border-[#1E2D3D] bg-[#0A1220]/60 p-4"
            >
              <div
                className="text-[9px] font-mono tracking-widest uppercase mb-2 flex items-center gap-1.5"
                style={{ color: s.color }}
              >
                <span>◆</span>
                {s.label}
              </div>
              <p className="text-[12px] text-slate-500 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
