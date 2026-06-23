"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QUESTIONS = [
  {
    q: "Is this a signal alert service?",
    a: "No. SPY Pivot Pro is a research and intelligence platform. It gives you the infrastructure to identify and evaluate setups — not pre-packaged calls to copy. You make the execution decision. The system builds the analytical case.",
  },
  {
    q: "Is this automated trading?",
    a: "No. The platform provides intelligence and research tools. Strike selection, entry timing, and position sizing are outputs of the system — but execution decisions remain with the trader at all times.",
  },
  {
    q: "What is the current state of the platform?",
    a: "The core intelligence terminal, signal confluence engine, session playback system, and backtesting environment are live. Additional modules are in active development. Founding members access the platform as it builds and receive each new feature before general release.",
  },
  {
    q: "Do I need to be an institutional trader?",
    a: "No. The methodology is institutional in rigor, not in minimum requirement. The platform is built for disciplined retail traders who take a systematic, research-driven approach to SPY options — not for beginners looking for a shortcut.",
  },
  {
    q: "What happens after founding access closes?",
    a: "Founding access transitions to a standard subscription model when public pricing launches. Founding members retain their pricing permanently — regardless of future price increases — and retain priority access to every new module and feature.",
  },
  {
    q: "Is there performance data I can review?",
    a: "The platform's ML win probability baseline and historical signal statistics are documented within the research environment. We do not publish audited return figures at this stage. Options trading involves substantial risk of loss — past backtest results do not guarantee future performance.",
  },
] as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="faq">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.03) 0%, transparent 55%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-5"
          >
            <span className="text-teal-400/60">◆</span>
            Common Questions
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Frequently Asked
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.12 }}
            className="mt-4 text-slate-500 text-base leading-relaxed"
          >
            Straightforward answers about what SPY Pivot Pro is, what it is not,
            and what founding access includes.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-[#1A2A38]">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: EASE, delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-[15px] font-semibold leading-snug transition-colors duration-200"
                    style={{ color: isOpen ? "#06B6D4" : "#CBD5E1" }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: isOpen ? "rgba(6,182,212,0.5)" : "#1E2D3D",
                      background:  isOpen ? "rgba(6,182,212,0.08)" : "transparent",
                      transform:   isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                    aria-hidden="true"
                  >
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path
                        d="M4.5 1v7M1 4.5h7"
                        stroke={isOpen ? "#06B6D4" : "#475569"}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="pb-6 text-[14px] text-slate-500 leading-relaxed pr-10">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 text-center border-t border-[#1A2A38] pt-10"
        >
          <p className="text-slate-500 text-[14px] mb-6">
            Still have questions? Founding members have a direct line to the research team.
          </p>
          <a
            href="#founding"
            className="inline-flex items-center gap-2 font-bold rounded-full cursor-pointer"
            style={{
              background:  "#06B6D4",
              color:       "#030608",
              fontSize:    "13px",
              padding:     "12px 28px",
              fontFamily:  "var(--font-sans)",
              boxShadow:   "0 0 0 1px rgba(6,182,212,0.35), 0 4px 24px rgba(6,182,212,0.14)",
              transition:  "all 0.2s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#22D3EE";
              el.style.boxShadow  = "0 0 36px rgba(6,182,212,0.45), 0 0 0 1px rgba(6,182,212,0.9)";
              el.style.transform  = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#06B6D4";
              el.style.boxShadow  = "0 0 0 1px rgba(6,182,212,0.35), 0 4px 24px rgba(6,182,212,0.14)";
              el.style.transform  = "translateY(0)";
            }}
          >
            Request Early Access
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
