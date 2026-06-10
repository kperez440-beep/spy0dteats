"use client";
import { motion } from "framer-motion";
import { DashboardMockup } from "@/app/components/DashboardMockup";

// Floating intelligence signal badges — subtle ambient movement
const FLOAT_BADGES = [
  { label: "◆ CONFLUENCE 72",  x: "8%",  y: "22%", delay: 0.2, dur: 6 },
  { label: "◆ ELIGIBLE LONG",  x: "78%", y: "18%", delay: 0.7, dur: 7 },
  { label: "◆ WIN PROB 73.2%", x: "6%",  y: "68%", delay: 1.1, dur: 5.5 },
  { label: "◆ R:R 1:1.86",     x: "76%", y: "72%", delay: 0.4, dur: 6.5 },
] as const;

export function FinalCTA() {
  return (
    <section className="relative py-40 px-4 overflow-hidden bg-[#050810]" id="get-access">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" aria-hidden="true" />

      {/* Radial amber + teal ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(240,180,41,0.09) 0%, rgba(6,182,212,0.03) 30%, transparent 65%)" }}
        aria-hidden="true"
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 80% at center, transparent 45%, #050810 100%)" }}
        aria-hidden="true"
      />

      {/* DashboardMockup — blurred, darkened, atmospheric background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="w-full max-w-5xl"
          style={{ opacity: 0.06, filter: "blur(4px) brightness(0.5)", transform: "scale(1.08)" }}
        >
          <DashboardMockup />
        </div>
      </div>

      {/* Floating data badges */}
      {FLOAT_BADGES.map((b) => (
        <motion.div
          key={b.label}
          className="absolute hidden lg:block text-[8px] font-mono tracking-wider text-slate-700 border border-[#1E2D3D] px-2.5 py-1 rounded-full bg-[#0A1220]/60 pointer-events-none select-none"
          style={{ left: b.x, top: b.y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0.4, 0.6], y: [0, -6, 0, -4, 0] }}
          transition={{
            opacity: { delay: b.delay + 0.8, duration: 1, times: [0, 0.3, 0.6, 1] },
            y: { delay: b.delay + 0.8, duration: b.dur, repeat: Infinity, ease: "easeInOut" },
          }}
          aria-hidden="true"
        >
          {b.label}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Pipeline strip */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[9px] font-mono tracking-[0.22em] text-slate-700 uppercase mb-10"
        >
          ◆ SIGNALS&nbsp;&nbsp;→&nbsp;&nbsp;◆ CONFLUENCE&nbsp;&nbsp;→&nbsp;&nbsp;◆ ELIGIBILITY&nbsp;&nbsp;→&nbsp;&nbsp;◆ TRADE PLAN&nbsp;&nbsp;→&nbsp;&nbsp;◆ EXECUTION
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.07]"
        >
          Trade With Infrastructure,
          <br className="hidden sm:block" />
          {" "}
          <span className="text-gold-shimmer">Not Guesswork.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mt-7 text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          The gap between institutional traders and retail traders is not a skill gap.
          <br className="hidden sm:block" />
          It&apos;s an infrastructure gap.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#founding"
            className="shiny-btn inline-flex items-center gap-2.5 bg-[#F0B429] hover:bg-[#FFD060] text-[#050810] font-bold text-[15px] px-9 py-4 rounded-full transition-all duration-200 hover:shadow-[0_0_40px_rgba(240,180,41,0.5)] hover:-translate-y-px cursor-pointer"
          >
            Request Founding Access
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#platform"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-200 text-[14px] font-semibold transition-colors py-4 px-2 cursor-pointer"
          >
            View Platform
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="mt-10 flex items-center justify-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot inline-block" aria-hidden="true" />
          <span className="text-[9px] font-mono text-slate-600 tracking-widest uppercase">
            Platform Active · Accepting Founding Members
          </span>
        </motion.div>
      </div>
    </section>
  );
}
