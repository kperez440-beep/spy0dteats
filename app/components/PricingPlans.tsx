"use client";
import { motion } from "framer-motion";

interface PlanFeature {
  label: string;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  period: string;
  desc: string;
  badge?: string;
  featured?: boolean;
  comingSoon?: boolean;
  cta: string;
  ctaHref: string;
  color: string;
  features: PlanFeature[];
}

const PLANS: Plan[] = [
  {
    name: "Explorer",
    price: "$79",
    period: "/mo",
    desc: "Full platform access. The complete intelligence dashboard and research toolkit.",
    cta: "Get Started",
    ctaHref: "#founding",
    color: "#06B6D4",
    features: [
      { label: "Intelligence Dashboard",    included: true  },
      { label: "Signal Confluence Score",   included: true  },
      { label: "Eligibility Engine",        included: true  },
      { label: "SPY Data Hub",              included: true  },
      { label: "Research Tools",            included: true  },
      { label: "Full Trade Planning Suite", included: false },
      { label: "ML Win Probability",        included: false },
      { label: "Execution Planning",        included: false },
      { label: "Automated Execution",       included: false },
    ],
  },
  {
    name: "Professional",
    price: "$149",
    period: "/mo",
    desc: "The complete intelligence suite. Trade planning, ML probability, risk analytics.",
    badge: "Most Popular",
    featured: true,
    cta: "Get Started",
    ctaHref: "#founding",
    color: "#F0B429",
    features: [
      { label: "Everything in Explorer",    included: true  },
      { label: "Full Trade Planning Suite", included: true  },
      { label: "ML Win Probability",        included: true  },
      { label: "Supply & Demand Levels",    included: true  },
      { label: "Execution Planning",        included: true  },
      { label: "Risk Analytics",            included: true  },
      { label: "Auto-Learn Engine",         included: true  },
      { label: "Priority Support",          included: true  },
      { label: "Automated Execution",       included: false },
    ],
  },
  {
    name: "Automation",
    price: "$299",
    period: "/mo",
    desc: "Full broker connectivity, automated execution, and strategy deployment.",
    badge: "Coming Soon",
    comingSoon: true,
    cta: "Join Waitlist",
    ctaHref: "#founding",
    color: "#475569",
    features: [
      { label: "Everything in Professional",  included: true },
      { label: "Broker API Connectivity",     included: true },
      { label: "Automated Order Execution",   included: true },
      { label: "Strategy Deployment",         included: true },
      { label: "Performance Analytics",       included: true },
      { label: "Multi-Strategy Support",      included: true },
      { label: "Custom Signal Weights",       included: true },
      { label: "Portfolio Intelligence",      included: true },
      { label: "Dedicated Support",           included: true },
    ],
  },
];

const FADE = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

function FeatureRow({ feature, color }: { feature: PlanFeature; color: string }) {
  return (
    <div className="flex items-start gap-2.5">
      {feature.included ? (
        <svg className="shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
          <circle cx="6.5" cy="6.5" r="6" fill={`${color}14`} />
          <path d="M 2.5 6.5 l 2.5 2.5 5-5" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg className="shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
          <path d="M 4 4 l 5 5 M 9 4 l -5 5" stroke="#334155" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
      )}
      <span className={`text-[11px] leading-snug ${feature.included ? "text-slate-400" : "text-slate-700"}`}>
        {feature.label}
      </span>
    </div>
  );
}

export function PricingPlans() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-[#050810]" id="pricing-plans">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 70%, rgba(6,182,212,0.03) 0%, transparent 55%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-5"
          >
            <span className="text-teal-400/60">◆</span>
            Pricing
          </motion.div>

          <motion.h2
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            Simple, Honest Pricing
          </motion.h2>

          <motion.p
            variants={FADE} initial="hidden"
            whileInView="show" viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-4 text-slate-400 text-lg max-w-md mx-auto leading-relaxed"
          >
            No lock-ins. No hidden tiers. Cancel any time.
          </motion.p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border overflow-hidden"
              style={{
                borderColor: plan.featured ? `${plan.color}40` : "#1E2D3D",
                background: plan.featured
                  ? `linear-gradient(145deg, ${plan.color}0a, #060D18)`
                  : "#0A1220",
                boxShadow: plan.featured
                  ? `0 0 0 1px ${plan.color}18, 0 24px 48px rgba(0,0,0,0.4), 0 0 60px ${plan.color}07`
                  : "none",
                transform: plan.featured ? "scale(1.02)" : "scale(1)",
                opacity: plan.comingSoon ? 0.62 : 1,
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full text-[8px] font-mono font-bold tracking-wider"
                  style={{
                    background: plan.featured ? `${plan.color}18` : "#1E2D3D",
                    color: plan.featured ? plan.color : "#475569",
                    border: `1px solid ${plan.featured ? plan.color + "28" : "#334155"}`,
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-6">
                {/* Plan name */}
                <div className="text-[9px] font-mono tracking-[0.2em] uppercase font-bold mb-2" style={{ color: plan.color }}>
                  {plan.name}
                </div>

                {/* Price */}
                <div className="flex items-end gap-0.5 mb-3">
                  <span className="text-[42px] font-mono font-bold tabular-nums leading-none text-white">
                    {plan.price}
                  </span>
                  <span className="text-[12px] font-mono text-slate-500 mb-1.5">{plan.period}</span>
                </div>

                <p className="text-[11px] text-slate-500 leading-relaxed mb-5 min-h-[42px]">{plan.desc}</p>

                {/* Divider */}
                <div className="h-px bg-[#1E2D3D] mb-5" />

                {/* Feature list */}
                <div className="flex flex-col gap-2.5 mb-6">
                  {plan.features.map((f) => (
                    <FeatureRow key={f.label} feature={f} color={plan.color} />
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={plan.ctaHref}
                  className={[
                    "block w-full text-center py-2.5 rounded-xl text-[12px] font-bold transition-all duration-200",
                    plan.featured
                      ? "bg-[#F0B429] text-[#050810] hover:bg-[#FFD060] hover:shadow-[0_0_20px_rgba(240,180,41,0.35)]"
                      : plan.comingSoon
                      ? "bg-[#0D1520] text-slate-700 border border-[#1E2D3D] pointer-events-none"
                      : "bg-[#111C2E] text-slate-300 border border-[#1E2D3D] hover:bg-[#1A2535] hover:border-[#2A3A50]",
                  ].join(" ")}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <motion.p
          variants={FADE} initial="hidden"
          whileInView="show" viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-8 text-center text-[9px] font-mono text-slate-600 leading-relaxed"
        >
          Prices shown are founding member rates and subject to change.
          Founding members lock in current pricing permanently. Cancel any time.
        </motion.p>
      </div>
    </section>
  );
}
