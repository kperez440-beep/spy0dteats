"use client";
import { useState } from "react";
import { FortitudTree } from "./Logo";
import { RevealText } from "@/app/components/ui/RevealText";

const TIERS = [
  {
    id: "Core",
    price: "$79/mo",
    desc: "Signal dashboard, SPY alerts, win gauge",
    color: "#06B6D4",
  },
  {
    id: "Pro",
    price: "$249/mo",
    desc: "Full ML system + playback + auto-learn",
    color: "#F0B429",
    popular: true,
  },
  {
    id: "Automate",
    price: "$499/mo",
    desc: "Live trade execution with risk controls",
    color: "#1B72C0",
  },
];

const EXPERIENCE = ["< 1 year", "1–3 years", "3–7 years", "7+ years"];

type Step = 1 | 2 | 3;

export function Waitlist() {
  const [step, setStep] = useState<Step>(1);
  const [tier, setTier] = useState("Pro");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(240,180,41,0.06) 0%, transparent 65%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-lg mx-auto relative">
        <div className="flex flex-col items-center mb-5 gap-1">
          <FortitudTree size={56} color="#F0B429" />
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-amber-400/50">
            Fortitud Capital
          </span>
        </div>

        <div className="text-[11px] font-mono tracking-widest text-amber-400/70 uppercase mb-4 text-center">
          Early Access · Limited Spots
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight text-center">
          <RevealText text="Your edge is waiting." />
        </h2>
        <p className="text-slate-400 text-base mb-10 leading-relaxed text-center">
          First 200 subscribers lock in founding-member pricing — 40% below launch rates — for life.
        </p>

        {submitted ? (
          <div
            className="p-8 rounded-2xl border border-[#10B981]/30 bg-[#10B981]/5 text-center"
            style={{ boxShadow: "0 0 40px rgba(16,185,129,0.08)" }}
          >
            <div
              className="w-14 h-14 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mx-auto mb-5"
              style={{ boxShadow: "0 0 24px rgba(16,185,129,0.2)" }}
            >
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <path d="M5 13l5.5 5.5L21 7" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-xl font-bold text-white mb-2">You&apos;re on the list.</div>
            <div className="text-sm text-slate-400 leading-relaxed">
              We&apos;ll reach out to{" "}
              <span className="text-slate-200 font-mono">{email}</span> when your{" "}
              <span style={{ color: TIERS.find((t) => t.id === tier)?.color }}>{tier}</span> access is ready.
              <br />
              <span className="text-slate-500 mt-2 block">Fortitud Capital — built different.</span>
            </div>
          </div>
        ) : (
          <div
            className="rounded-2xl border border-[#1E2D3D] bg-[#0D1520] overflow-hidden"
            style={{ boxShadow: "0 0 48px rgba(0,0,0,0.3)" }}
          >
            {/* Step progress bar */}
            <div className="flex border-b border-[#1E2D3D]">
              {([1, 2, 3] as Step[]).map((s) => (
                <div
                  key={s}
                  className="flex-1 py-3 text-center text-[11px] font-mono tracking-widest uppercase transition-all duration-200"
                  style={{
                    color: step === s ? "#F0B429" : step > s ? "#10B981" : "#475569",
                    borderBottom: step === s ? "2px solid #F0B429" : step > s ? "2px solid #10B981" : "2px solid transparent",
                  }}
                >
                  {s === 1 ? "Plan" : s === 2 ? "Details" : "Confirm"}
                </div>
              ))}
            </div>

            <div className="p-6 sm:p-8">
              {/* Step 1 — choose tier */}
              {step === 1 && (
                <div>
                  <p className="text-sm text-slate-400 mb-5 font-medium">
                    Which plan are you interested in?
                  </p>
                  <div className="space-y-3 mb-8">
                    {TIERS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setTier(t.id)}
                        className="w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 cursor-pointer text-left"
                        style={{
                          borderColor: tier === t.id ? t.color + "50" : "#1E2D3D",
                          background: tier === t.id ? t.color + "08" : "transparent",
                        }}
                      >
                        <div
                          className="w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-all duration-200"
                          style={{ borderColor: tier === t.id ? t.color : "#475569" }}
                        >
                          {tier === t.id && (
                            <div className="w-2 h-2 rounded-full" style={{ background: t.color }} />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-semibold text-white">{t.id}</span>
                            {t.popular && (
                              <span
                                className="text-[9px] font-mono tracking-widest px-2 py-0.5 rounded-full border"
                                style={{ color: t.color, borderColor: t.color + "40", background: t.color + "10" }}
                              >
                                POPULAR
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-500">{t.desc}</span>
                        </div>
                        <span className="text-[12px] font-mono shrink-0" style={{ color: t.color }}>
                          {t.price}
                        </span>
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full py-3 rounded-xl bg-[#1B72C0] hover:bg-[#1560A8] text-white font-bold text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(27,114,192,0.5)] hover:-translate-y-px cursor-pointer"
                  >
                    Continue
                    <svg className="inline ml-2" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Step 2 — contact info */}
              {step === 2 && (
                <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-4">
                  <p className="text-sm text-slate-400 mb-5 font-medium">
                    Tell us a bit about yourself.
                  </p>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-1.5" htmlFor="ws-name">
                      First Name
                    </label>
                    <input
                      id="ws-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex"
                      className="w-full px-4 py-3 rounded-xl bg-[#050810] border border-[#1E2D3D] text-white placeholder-slate-600 text-sm font-mono outline-none focus:border-amber-400/50 focus:shadow-[0_0_0_3px_rgba(240,180,41,0.1)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-1.5" htmlFor="ws-email">
                      Email Address *
                    </label>
                    <input
                      id="ws-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#050810] border border-[#1E2D3D] text-white placeholder-slate-600 text-sm font-mono outline-none focus:border-amber-400/50 focus:shadow-[0_0_0_3px_rgba(240,180,41,0.1)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">
                      Trading Experience
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {EXPERIENCE.map((exp) => (
                        <button
                          key={exp}
                          type="button"
                          onClick={() => setExperience(exp)}
                          className="py-2 px-3 rounded-lg border text-[12px] font-mono transition-all duration-150 cursor-pointer"
                          style={{
                            borderColor: experience === exp ? "#F0B42950" : "#1E2D3D",
                            background: experience === exp ? "#F0B42910" : "transparent",
                            color: experience === exp ? "#F0B429" : "#64748B",
                          }}
                        >
                          {exp}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 rounded-xl border border-[#1E2D3D] text-slate-400 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-[#1B72C0] hover:bg-[#1560A8] text-white font-bold text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(27,114,192,0.5)] cursor-pointer"
                    >
                      Review
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3 — review & submit */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="text-sm text-slate-400 font-medium mb-5">
                    Review your details and confirm.
                  </p>

                  {/* Summary card */}
                  <div className="p-4 rounded-xl border border-[#1E2D3D] bg-[#050810] space-y-3">
                    {[
                      { label: "Plan", value: `${tier} — ${TIERS.find((t) => t.id === tier)?.price}`, color: TIERS.find((t) => t.id === tier)?.color },
                      { label: "Name", value: name || "—", color: undefined },
                      { label: "Email", value: email, color: undefined },
                      { label: "Experience", value: experience || "—", color: undefined },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">{row.label}</span>
                        <span className="text-[12px] font-mono font-semibold" style={{ color: row.color ?? "#E2E8F0" }}>
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Founding member benefit */}
                  <div className="flex items-start gap-3 p-3 rounded-xl border border-amber-400/20 bg-amber-400/5">
                    <svg className="mt-0.5 shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3 3.8 11l.6-3.6L2 4.8l3.6-.5L7 1z" fill="#F0B429" />
                    </svg>
                    <p className="text-[11px] text-amber-400/80 font-mono leading-relaxed">
                      As a founding member, you lock in 40% off launch pricing — forever.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 rounded-xl border border-[#1E2D3D] text-slate-400 hover:text-white font-medium text-sm transition-all duration-200 cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={loading || !email}
                      className="flex-1 py-3 rounded-xl bg-[#1B72C0] hover:bg-[#1560A8] text-white font-bold text-sm transition-all duration-200 hover:shadow-[0_0_24px_rgba(27,114,192,0.5)] hover:-translate-y-px disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 cursor-pointer"
                    >
                      {loading ? "Securing your spot..." : "Claim Your Spot"}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-600 font-mono text-center">
                    No spam. No credit card required. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
