"use client";
import { motion } from "framer-motion";

type PhaseStatus = "current" | "upcoming" | "planned" | "vision";

interface Phase {
  label: string;
  status: PhaseStatus;
  color: string;
  quarter: string;
  items: string[];
}

const PHASES: Phase[] = [
  {
    label: "LIVE NOW",
    status: "current",
    color: "#F0B429",
    quarter: "Founding Access Open",
    items: ["Intelligence Terminal", "Signal Confluence Engine", "Session Playback System", "Backtesting Environment", "Eligibility & Trade Planning"],
  },
  {
    label: "PLANNED",
    status: "upcoming",
    color: "#06B6D4",
    quarter: "Q3 2026 — Coming",
    items: ["Broker Integrations", "Automated Execution", "Enhanced Analytics"],
  },
  {
    label: "PLANNED",
    status: "planned",
    color: "#8B5CF6",
    quarter: "Q1 2027 — Coming",
    items: ["Strategy Marketplace", "API Access", "Agent Integrations"],
  },
  {
    label: "VISION",
    status: "vision",
    color: "#475569",
    quarter: "2027+ — Coming",
    items: ["Multi-Instrument Expansion", "Custom Widget System", "Quantitative Infrastructure"],
  },
];

const FADE = { hidden: { opacity: 0 }, show: { opacity: 1 } };

export function RoadmapVision() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="roadmap-vision">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(139,92,246,0.04) 0%, transparent 55%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-5"
          >
            <span className="text-violet-400/60">◆</span>
            Vision
          </motion.div>

          <motion.h2
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            This is version one.
          </motion.h2>

          <motion.p
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            SPY Pivot Pro is the first platform in a larger research infrastructure
            being built by Fortitud Capital. The current system is active and available
            to founding members now. The roadmap extends it significantly.
          </motion.p>

          <motion.div
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(248,113,113,0.18)] bg-[rgba(248,113,113,0.04)]"
          >
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#94A3B8" }}>
              Items marked Q3 2026 and beyond are planned expansions — not current features.
              Founding members receive priority access as each ships.
            </span>
          </motion.div>
        </div>

        {/* ─── Desktop timeline ─── */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Full track line */}
            <div className="absolute top-5 left-[12.5%] right-[12.5%] h-px bg-[#111C2E]" />

            {/* Animated gold progress fill (TODAY → NEXT boundary) */}
            <motion.div
              className="absolute top-5 left-[12.5%] h-px"
              style={{ width: "25%", background: "linear-gradient(to right, #F0B429, #06B6D4)", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 1.1, ease: "easeOut" }}
            />

            <div className="grid grid-cols-4 gap-4">
              {PHASES.map((phase, i) => (
                <motion.div
                  key={phase.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  {/* Node */}
                  <div className="relative w-10 h-10 flex items-center justify-center mb-6 z-10">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: "#060D18",
                        border: `2px solid ${phase.color}`,
                        boxShadow: phase.status === "current" ? `0 0 18px ${phase.color}40` : "none",
                      }}
                    >
                      <div
                        className="rounded-full"
                        style={{
                          width: phase.status === "current" ? 10 : 6,
                          height: phase.status === "current" ? 10 : 6,
                          background: phase.status === "current" ? phase.color : "#1E2D3D",
                        }}
                      />
                    </div>

                    {phase.status === "current" && (
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{ border: `2px solid ${phase.color}` }}
                        animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                        transition={{ repeat: Infinity, duration: 2.4, ease: "easeOut" }}
                      />
                    )}
                  </div>

                  {/* Phase label + quarter */}
                  <div className="text-[8px] font-mono font-bold tracking-[0.22em] uppercase mb-0.5" style={{ color: phase.color }}>
                    {phase.label}
                  </div>
                  <div className="text-[9px] font-mono text-slate-600 mb-4">{phase.quarter}</div>

                  {/* Items card */}
                  <div
                    className="w-full rounded-xl border p-3"
                    style={{ borderColor: `${phase.color}1a`, background: `${phase.color}07` }}
                  >
                    {phase.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 py-1.5 border-b border-[#1E2D3D] last:border-0 last:pb-0"
                      >
                        <div className="w-1 h-1 rounded-full shrink-0" style={{ background: phase.color }} />
                        <span className="text-[10px] text-slate-400 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Mobile timeline ─── */}
        <div className="lg:hidden flex flex-col">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="relative pl-12 pb-8 last:pb-0"
            >
              {/* Vertical connector */}
              {i < PHASES.length - 1 && (
                <div
                  className="absolute left-4 top-5 bottom-0 w-px"
                  style={{ background: `${phase.color}25` }}
                />
              )}

              {/* Node */}
              <div
                className="absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center z-10"
                style={{
                  background: "#060D18",
                  border: `2px solid ${phase.color}`,
                  boxShadow: phase.status === "current" ? `0 0 12px ${phase.color}40` : "none",
                }}
              >
                <div
                  className="rounded-full"
                  style={{
                    width: phase.status === "current" ? 8 : 5,
                    height: phase.status === "current" ? 8 : 5,
                    background: phase.status === "current" ? phase.color : "#1E2D3D",
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[9px] font-mono font-bold tracking-[0.2em] uppercase" style={{ color: phase.color }}>
                  {phase.label}
                </span>
                <span className="text-[9px] font-mono text-slate-600">{phase.quarter}</span>
              </div>

              <div
                className="rounded-xl border p-3"
                style={{ borderColor: `${phase.color}1a`, background: `${phase.color}07` }}
              >
                {phase.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 py-1.5 border-b border-[#1E2D3D] last:border-0"
                  >
                    <div className="w-1 h-1 rounded-full shrink-0" style={{ background: phase.color }} />
                    <span className="text-[11px] text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <motion.p
          variants={FADE} initial="hidden"
          whileInView="show" viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-14 text-center text-[9px] font-mono text-slate-700 max-w-2xl mx-auto leading-relaxed"
        >
          Roadmap items are subject to change based on platform development priorities and founding member feedback.
          Feature releases will be communicated to all subscribers in advance.
        </motion.p>
      </div>
    </section>
  );
}
