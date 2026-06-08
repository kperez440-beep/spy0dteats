"use client";
import { SpotlightCard } from "@/app/components/ui/SpotlightCard";
import { RevealText } from "@/app/components/ui/RevealText";

const tiers = [
  {
    name: "Core",
    price: "$79",
    period: "/mo",
    tag: null,
    desc: "Signal intelligence for independent traders who want an edge without the noise.",
    features: [
      "11-signal confluence dashboard",
      "Real-time SPY alerts",
      "Win probability gauge",
      "Signal history & audit log",
      "Daily session recap",
      "Web + desktop app access",
    ],
    cta: "Join Waitlist",
    href: "#waitlist",
    highlight: false,
    spotlight: "rgba(6,182,212,0.12)",
  },
  {
    name: "Pro",
    price: "$249",
    period: "/mo",
    tag: "Most Popular",
    desc: "The full system. ML model, playback simulator, and auto-learn all included.",
    features: [
      "Everything in Core",
      "ML win probability model",
      "Intraday playback & simulation",
      "Auto-learn engine",
      "Strategy backtesting",
      "Advanced risk controls",
      "Priority support",
    ],
    cta: "Join Waitlist",
    href: "#waitlist",
    highlight: true,
    spotlight: "rgba(240,180,41,0.18)",
  },
  {
    name: "Automate",
    price: "$499",
    period: "/mo",
    tag: "Application Required",
    desc: "Full automation layer for qualified traders. System executes — you set the rules.",
    features: [
      "Everything in Pro",
      "Live trade automation",
      "Configurable risk limits",
      "Kill switch & circuit breakers",
      "Position sizing engine",
      "Execution audit trail",
      "White-glove onboarding",
    ],
    cta: "Apply for Access",
    href: "#waitlist",
    highlight: false,
    spotlight: "rgba(27,114,192,0.14)",
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "",
    tag: "Fortitud Capital",
    desc: "For prop desks, family offices, and funds who need bespoke SPY options intelligence.",
    features: [
      "Everything in Automate",
      "Multi-seat licensing",
      "Custom signal tuning",
      "API & data feed access",
      "Dedicated infrastructure",
      "SLA & compliance docs",
      "Direct line to the quant team",
    ],
    cta: "Contact Us",
    href: "mailto:institutional@spypivotpro.com",
    highlight: false,
    spotlight: "rgba(100,116,139,0.12)",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top center, rgba(240,180,41,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-14">
          <div className="text-[11px] font-mono tracking-widest text-amber-400/70 uppercase mb-3">
            Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <RevealText text="Pay for the edge. Not the AUM." />
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            No percentage of profits. No asset-based fees. A Bloomberg Terminal costs $24,000/year.
            We start at $79/month.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {tiers.map((t) => (
            <SpotlightCard
              key={t.name}
              spotlightColor={t.spotlight}
              className="relative flex flex-col p-6 rounded-2xl border transition-all duration-300 cursor-default"
              style={{
                background: t.highlight
                  ? "linear-gradient(135deg, #0F1E30 0%, #0D1520 100%)"
                  : "#0D1520",
                borderColor: t.highlight ? "#F0B42933" : "#1E2D3D",
                boxShadow: t.highlight
                  ? "0 0 48px rgba(240,180,41,0.08), inset 0 0 0 1px rgba(240,180,41,0.15)"
                  : "none",
              }}
            >
              {t.tag && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-widest px-3 py-1 rounded-full border font-semibold whitespace-nowrap"
                  style={{
                    color: t.highlight ? "#F0B429" : "#64748B",
                    borderColor: t.highlight ? "#F0B42933" : "#1E2D3D",
                    background: "#0D1520",
                  }}
                >
                  {t.tag}
                </div>
              )}

              <div className="mb-5">
                <div className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-2">
                  {t.name}
                </div>
                <div className="flex items-baseline gap-0.5 mb-3">
                  <span
                    className="text-4xl font-bold font-mono"
                    style={{ color: t.highlight ? "#F0B429" : "#F1F5F9" }}
                  >
                    {t.price}
                  </span>
                  {t.period && (
                    <span className="text-sm text-slate-500 font-mono">{t.period}</span>
                  )}
                </div>
                <p className="text-[12px] text-slate-400 leading-relaxed">{t.desc}</p>
              </div>

              <ul className="flex-1 space-y-2.5 mb-6">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[12px] text-slate-300">
                    <svg
                      className="mt-0.5 shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7l3.5 3.5L12 3"
                        stroke={t.highlight ? "#F0B429" : "#10B981"}
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={t.href}
                className="block text-center font-bold text-[13px] py-2.5 rounded-xl transition-all duration-200 cursor-pointer hover:-translate-y-px"
                style={
                  t.highlight
                    ? { background: "#F0B429", color: "#050810" }
                    : { border: "1px solid #2A3A4D", color: "#94A3B8" }
                }
                onMouseEnter={(e) => {
                  if (!t.highlight) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#F0B429";
                    el.style.color = "#F0B429";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!t.highlight) {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#2A3A4D";
                    el.style.color = "#94A3B8";
                  }
                }}
              >
                {t.cta}
              </a>
            </SpotlightCard>
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-600 mt-8 font-mono">
          All plans include a 14-day free trial. Cancel anytime. No contracts.
        </p>
      </div>
    </section>
  );
}
