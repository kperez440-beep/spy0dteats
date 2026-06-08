"use client";
import { motion } from "framer-motion";
import { LaunchCountdown } from "./LaunchCountdown";
import { ShaderBackground } from "@/app/components/ui/ShaderBackground";
import { DashboardMockup } from "./DashboardMockup";

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 overflow-hidden bg-[#050810]">
      <ShaderBackground />

      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_34%,rgba(240,180,41,0.06),transparent_32%),linear-gradient(180deg,rgba(5,8,16,0.04),rgba(5,8,16,0.34)_58%,rgba(5,8,16,0.94)_90%)] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-b from-transparent via-[#050810]/45 to-[#050810] pointer-events-none" />
      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
        style={{
          width: 760,
          height: 460,
          background:
            "radial-gradient(ellipse at center, rgba(240,180,41,0.06) 0%, rgba(6,182,212,0.05) 42%, transparent 72%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center gap-6">

        {/* Pipeline eyebrow */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase"
        >
          <span className="text-amber-400/70">◆</span>
          <span>Signals</span>
          <span className="text-slate-700">→</span>
          <span className="text-teal-400/70">◆</span>
          <span>Confluence</span>
          <span className="text-slate-700">→</span>
          <span className="text-emerald-400/70">◆</span>
          <span>Eligibility</span>
          <span className="text-slate-700">→</span>
          <span className="text-amber-400/70">◆</span>
          <span>Trade Plan</span>
          <span className="text-slate-700">→</span>
          <span className="text-teal-400/70">◆</span>
          <span>Execution</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl"
        >
          <span className="text-white">The Operating System</span>
          <br />
          <span className="text-gold-shimmer">For SPY Options Traders</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed font-light"
        >
          Not an alert service. Not a Discord. A complete quantitative intelligence
          platform built exclusively for SPY options.
        </motion.p>

        {/* Proof line */}
        <motion.p
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          className="text-sm font-mono text-slate-500"
        >
          January 2026 backtest:{" "}
          <span className="text-[#10B981] font-semibold">$100 → $1,217</span>
          {" · "}
          <span className="text-amber-400 font-semibold">Sharpe 14</span>
          {" · "}
          <span className="text-slate-300 font-semibold">MaxDD −5.4%</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.32 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-[#F0B429] hover:bg-[#FFD060] text-[#050810] font-bold text-base px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-[0_0_0_1px_rgba(240,180,41,0.6)] hover:shadow-[0_0_28px_rgba(240,180,41,0.45)] hover:-translate-y-px"
          >
            Join the Waitlist
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#backtest"
            className="inline-flex items-center gap-2 border border-[#1E2D3D] hover:border-slate-500 text-slate-400 hover:text-white font-medium text-base px-7 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
          >
            View Jan 2026 Results
          </a>
        </motion.div>

        {/* Dashboard mockup — entrance animation handled inside DashboardMockup */}
        <div className="w-full mt-6">
          <DashboardMockup />
        </div>

        {/* Waitlist momentum widget */}
        <motion.div
          className="w-full mt-4"
          variants={FADE_UP}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.56 }}
        >
          <LaunchCountdown />
        </motion.div>

      </div>
    </section>
  );
}
