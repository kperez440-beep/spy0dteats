"use client";
import { motion } from "framer-motion";

const PILLARS = [
  {
    label: "Research-Driven",
    color: "#F0B429",
    body: "Not opinion-based. Every setup is filtered through evidence and backtested logic. The system makes no discretionary calls — only quantified ones.",
  },
  {
    label: "Adaptive",
    color: "#06B6D4",
    body: "Static rules don't work in dynamic markets. Signal weighting adjusts as market structure evolves. The system learns from what it observes.",
  },
  {
    label: "Focused",
    color: "#10B981",
    body: "Built exclusively for SPY. No distraction across instruments. Maximum analytical depth on one market — the most liquid options market in the world.",
  },
] as const;

const FADE = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const EASE = [0.16, 1, 0.3, 1] as const;

export function WhatItIs() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="what-it-is">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(6,182,212,0.04) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          variants={FADE} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex justify-center mb-5"
        >
          <div className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase">
            <span className="text-teal-400/60">◆</span>
            The Platform
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={FADE} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
          className="text-center text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6"
        >
          <span className="text-white">Not a signal service. Not a bot.</span>
          <br />
          <span
            style={{
              background:           "linear-gradient(110deg, #FFFFFF 20%, #B8E8FF 40%, #06B6D4 55%, #B8E8FF 70%, #FFFFFF 85%)",
              backgroundSize:       "220% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor:  "transparent",
              backgroundClip:       "text",
              animation:            "shimmer-sweep 5s linear infinite",
            }}
          >
            A research platform.
          </span>
        </motion.h2>

        {/* Body copy */}
        <motion.div
          variants={FADE} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <p className="text-slate-400 text-lg leading-relaxed">
            SPY Pivot Pro is organized around a single premise: disciplined SPY traders
            need infrastructure to develop, test, and refine their approach —
            not someone else&apos;s alerts.
          </p>
          <p className="mt-4 text-slate-500 text-base leading-relaxed">
            Seven intelligence modules — spanning signal confluence, session playback,
            backtesting, parameter scanning, and execution refinement — work together
            as one adaptive system. It is the operating layer for your SPY options process.
          </p>
        </motion.div>

        {/* Three-column pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.label}
              variants={FADE} initial="hidden"
              whileInView="show" viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.08 + i * 0.1 }}
              className="relative rounded-2xl border border-[#1E2D3D] bg-[#0A1220]/70 p-7 flex flex-col gap-4 overflow-hidden"
              style={{
                borderTop: `2px solid ${p.color}40`,
                boxShadow: `0 0 40px ${p.color}06`,
              }}
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${p.color}0a 0%, transparent 65%)`,
                }}
                aria-hidden="true"
              />

              {/* Icon + label */}
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: `${p.color}12`, border: `1px solid ${p.color}28` }}
                >
                  <span style={{ color: p.color, fontSize: "11px" }}>◆</span>
                </div>
                <span
                  className="text-[11px] font-mono font-bold tracking-widest uppercase"
                  style={{ color: p.color }}
                >
                  {p.label}
                </span>
              </div>

              {/* Body */}
              <p className="text-[14px] text-slate-400 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bridge to next section */}
        <motion.div
          variants={FADE} initial="hidden"
          whileInView="show" viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p
            className="text-[10px] font-mono tracking-widest uppercase"
            style={{ color: "#2a4a5e" }}
          >
            Seven modules · One system · Built around one instrument
          </p>
        </motion.div>

      </div>
    </section>
  );
}
