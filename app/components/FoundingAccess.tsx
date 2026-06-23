"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";

const BENEFITS = [
  {
    label: "Intelligence Terminal Access",
    desc: "Full platform access — signal confluence engine, session playback, and the backtesting environment — as the system exists today and as it expands.",
  },
  {
    label: "SPY Research Briefings",
    desc: "Regular setup analysis, methodology notes, and backtest findings delivered directly from the research team. Not alerts — structured research.",
  },
  {
    label: "Priority Module Access",
    desc: "Every new module, data layer, and feature ships to founding members first. You see it before general release.",
  },
  {
    label: "Founding Member Pricing",
    desc: "Your pricing is locked at founding rates. When paid tiers open to the public, you stay at the rate you joined at — permanently.",
  },
  {
    label: "Research Team Access",
    desc: "A direct line to the people building the platform. Not a support ticket — a conversation about how the system works and where it is going.",
  },
] as const;

const SPOTS_TAKEN = 47;
const SPOTS_TOTAL = 200;
const PCT = (SPOTS_TAKEN / SPOTS_TOTAL) * 100;

const FADE = { hidden: { opacity: 0 }, show: { opacity: 1 } };

export function FoundingAccess() {
  const [email, setEmail] = useState("");
  const [qualifier, setQualifier] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="founding">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(240,180,41,0.06) 0%, transparent 55%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-5"
          >
            <span className="text-amber-400/60">◆</span>
            Founding Cohort
          </motion.div>

          <motion.h2
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Founding Access
          </motion.h2>

          <motion.p
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-slate-400 text-lg leading-relaxed"
          >
            The first cohort of SPY Pivot Pro users is being admitted now.
            This is not a waitlist — it is access to the platform as it is
            built, with direct input into how it develops.
          </motion.p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="rounded-2xl border border-[#F0B429]/20 overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #0A1220, #060D18)",
            boxShadow: "0 0 0 1px rgba(240,180,41,0.08), 0 32px 64px rgba(0,0,0,0.5), 0 0 80px rgba(240,180,41,0.04)",
          }}
        >
          {/* Chrome header */}
          <div className="px-6 py-4 border-b border-[#F0B429]/10 flex items-center justify-between">
            <div>
              <div className="text-[8px] font-mono text-amber-400/50 tracking-widest uppercase">
                Founding Cohort
              </div>
              <div className="text-[14px] font-bold text-white mt-0.5">SPY Pivot Pro</div>
            </div>
            <div className="text-right">
              <div className="text-[28px] font-mono font-bold tabular-nums text-amber-400 leading-none">
                {SPOTS_TAKEN}
              </div>
              <div className="text-[8px] font-mono text-slate-600">of {SPOTS_TOTAL} spots</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="px-6 pt-4 pb-3 border-b border-[#1E2D3D]">
            <div className="h-1.5 bg-[#111C2E] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(to right, #F0B429, #FFD060)",
                  boxShadow: "0 0 8px rgba(240,180,41,0.4)",
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${PCT}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1.1, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[8px] font-mono text-amber-400/60">{SPOTS_TAKEN} members joined</span>
              <span className="text-[8px] font-mono text-slate-600">{SPOTS_TOTAL - SPOTS_TAKEN} spots remaining</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="px-6 py-5">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.07, duration: 0.38 }}
                className="flex gap-3 py-3 border-b border-[#1E2D3D] last:border-0 last:pb-0"
              >
                <div className="shrink-0 w-4 h-4 rounded-full bg-amber-400/10 border border-amber-400/25 flex items-center justify-center mt-0.5">
                  <svg width="7" height="7" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                    <path d="M 1.5 4 l 2 2 3-3" stroke="#F0B429" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[12px] font-bold text-white">{b.label}</div>
                  <div className="text-[11px] text-slate-500 leading-relaxed mt-0.5">{b.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form / CTA */}
          <div className="px-6 pb-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="text-center py-5 rounded-xl border border-amber-400/20 bg-amber-400/05"
              >
                <div className="text-[13px] font-bold text-amber-400 mb-1">Request received.</div>
                <div className="text-[11px] font-mono text-slate-500">
                  You&apos;ll hear from us within 24 hours.
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-[#0A1220] border border-[#1E2D3D] focus:border-amber-400/40 focus:outline-none rounded-xl px-4 py-2.5 text-[12px] font-mono text-slate-300 placeholder:text-slate-600 transition-colors"
                />
                <input
                  type="text"
                  value={qualifier}
                  onChange={(e) => setQualifier(e.target.value)}
                  placeholder="How would you describe your current approach to SPY options trading?"
                  className="w-full bg-[#0A1220] border border-[#1E2D3D] focus:border-amber-400/30 focus:outline-none rounded-xl px-4 py-2.5 text-[12px] font-mono text-slate-300 placeholder:text-slate-600 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-[#F0B429] hover:bg-[#FFD060] text-[#050810] font-bold text-[13px] px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(240,180,41,0.35)] cursor-pointer"
                >
                  Request Founding Access
                </button>
              </form>
            )}

            <p className="mt-3 text-[9px] font-mono text-slate-600 text-center leading-relaxed">
              No payment required. Applications reviewed before access is granted.
              Founding member pricing communicated upon approval.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
