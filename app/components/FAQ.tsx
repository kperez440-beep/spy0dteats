"use client";
import { useState } from "react";
import { RevealText } from "@/app/components/ui/RevealText";

const faqs = [
  {
    q: "Why is the win rate only 38%? Shouldn't it be higher?",
    a: "Win rate doesn't determine profitability — risk/reward does. With a Profit Factor of 1.60 and a Sharpe of 14, we capture far more on winners than we lose on losers. Most retail traders obsess over win rate. Professionals obsess over expectancy. The math here is exceptional.",
  },
  {
    q: "Is the January 2026 backtest real money, or simulated?",
    a: "It's a historical backtest run on our live system — every signal, every entry, every exit logged exactly as the system generated them. Starting capital was $100 in a micro account. No curve-fitting or look-ahead bias. The methodology is disclosed in full under each results section.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Zero coding required. SPY Pivot Pro is a native desktop app with a point-and-click interface. Everything from signal configuration to backtest runs to automation rules is done through the UI.",
  },
  {
    q: "What broker do you use for the automation?",
    a: "Interactive Brokers integration is planned for the Automate tier at launch. The Core and Pro tiers work with any broker since they operate as a signals and decision layer — you execute trades yourself.",
  },
  {
    q: "Is this available right now?",
    a: "We're in private beta. The waitlist is open and the first 200 founding members will lock in pre-launch pricing at 40% below our public rates — for life. Join the waitlist to secure your spot.",
  },
  {
    q: "Can I use this for stocks, futures, or other options besides SPY?",
    a: "SPY Pivot Pro is currently purpose-built and optimized for SPY 0DTE and weekly options. The signal weighting, ML model, and volatility regime system are all tuned to SPY's specific behavior. Expansion to QQQ and ES futures is on the roadmap.",
  },
  {
    q: "What's the difference between Core and Pro?",
    a: "Core gives you the full 11-signal confluence dashboard and real-time alerts — you see the edge and act manually. Pro adds the ML win probability model, the intraday playback simulator, backtesting infrastructure, and the auto-learn engine. Pro is the complete analytical system.",
  },
  {
    q: "If the Automate tier is 'automated', do I still need to watch screens?",
    a: "The system can operate autonomously within your defined risk parameters. Built-in kill switches halt all trading if your daily loss limit, drawdown threshold, or position count is exceeded. You set the rules once — the system enforces them with precision you can't maintain manually at 9:35am.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] font-mono tracking-widest text-amber-400/70 uppercase mb-3">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <RevealText text="Real questions. Direct answers." />
          </h2>
          <p className="text-slate-400 text-base">No marketing speak.</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border transition-all duration-200 overflow-hidden"
              style={{
                borderColor: open === i ? "rgba(240,180,41,0.3)" : "#1E2D3D",
                background: open === i ? "rgba(240,180,41,0.03)" : "#0D1520",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-white leading-snug">{faq.q}</span>
                <div
                  className="shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200"
                  style={{
                    borderColor: open === i ? "rgba(240,180,41,0.4)" : "#1E2D3D",
                    background: open === i ? "rgba(240,180,41,0.08)" : "transparent",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M5 1v8M1 5h8" stroke={open === i ? "#F0B429" : "#64748B"} strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </button>

              <div
                style={{
                  maxHeight: open === i ? 300 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.3s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <p className="px-5 pb-5 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
