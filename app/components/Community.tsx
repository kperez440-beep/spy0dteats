"use client";
import { useState } from "react";

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2a9 9 0 1 0 0 18A9 9 0 0 0 11 2z" stroke="#06B6D4" strokeWidth="1.5" />
        <path d="M11 7v5l3 3" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Feature Requests",
    desc: "Tell us what would make your trading sessions more effective. We read every submission and prioritize based on real trader need.",
    color: "#06B6D4",
    action: "Submit an idea",
    href: "mailto:features@spypivotpro.com",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 11l7 7L19 4" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Beta Testing",
    desc: "Get early access to new features before public release. Beta members get direct feedback loops with the dev team.",
    color: "#10B981",
    action: "Apply to beta",
    href: "#waitlist",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="3" stroke="#1B72C0" strokeWidth="1.5" />
        <circle cx="15" cy="14" r="3" stroke="#1B72C0" strokeWidth="1.5" />
        <path d="M10.5 10.5l2.5 2" stroke="#1B72C0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Trader Advisory",
    desc: "Experienced SPY options traders who want to contribute strategies, signal ideas, or domain knowledge to the platform's development.",
    color: "#1B72C0",
    action: "Join the panel",
    href: "mailto:advisory@spypivotpro.com",
  },
];

export function Community() {
  const [idea, setIdea] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="community" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 60%, rgba(6,182,212,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-[11px] font-mono tracking-widest text-[#06B6D4]/70 uppercase mb-3">
            Built with Traders
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your experience shapes the product.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            We don&apos;t build in isolation. SPY Pivot Pro is actively developed alongside traders
            who trade SPY options every day — and we want your input.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="flex flex-col p-6 rounded-2xl border border-[#1E2D3D] bg-[#0D1520] hover:border-[#2A3A4D] transition-all duration-300 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-200 group-hover:scale-110"
                style={{ background: `${p.color}12`, border: `1px solid ${p.color}25` }}
              >
                {p.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed flex-1 mb-5">{p.desc}</p>
              <a
                href={p.href}
                className="text-[12px] font-mono font-semibold inline-flex items-center gap-1.5 transition-all duration-200 cursor-pointer"
                style={{ color: p.color }}
              >
                {p.action}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Quick idea submission */}
        <div
          className="p-8 rounded-2xl border border-[#1E2D3D] bg-[#0D1520]"
          style={{ boxShadow: "0 0 48px rgba(6,182,212,0.04)" }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-base font-semibold text-white mb-2">
              Have a signal or strategy idea?
            </div>
            <p className="text-[12px] text-slate-500 mb-6">
              Drop it here. If it has an edge, we&apos;ll test it. The best ideas from the community
              get built into the platform — credited to the trader who submitted them.
            </p>

            {sent ? (
              <div className="inline-flex items-center gap-2 text-[#10B981] text-sm font-mono border border-[#10B981]/30 bg-[#10B981]/5 px-5 py-3 rounded-xl">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7l3.5 3.5L12 3" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Received — we&apos;ll review it this week.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (idea.trim()) setSent(true); }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="text"
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="e.g. add a VIX skew signal, or build a replay with options chain..."
                  className="flex-1 px-4 py-3 rounded-xl bg-[#050810] border border-[#1E2D3D] text-white placeholder-slate-600 text-sm font-mono outline-none focus:border-[#06B6D4]/50 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.08)] transition-all"
                />
                <button
                  type="submit"
                  className="shrink-0 px-6 py-3 rounded-xl bg-[#06B6D4] hover:bg-[#0891B2] text-[#050810] font-bold text-sm transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
                >
                  Submit Idea
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
