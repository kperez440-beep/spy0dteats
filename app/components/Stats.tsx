"use client";
import { useRef, useState, useEffect } from "react";
import { Counter } from "@/app/components/ui/Counter";
import { RevealText } from "@/app/components/ui/RevealText";

const stats = [
  {
    to: 14,
    decimals: 0,
    suffix: "",
    prefix: "",
    label: "Sharpe Ratio",
    sub: "Most hedge funds celebrate 1.0",
    color: "#F0B429",
  },
  {
    to: 995,
    decimals: 0,
    suffix: "",
    prefix: "",
    label: "Calmar Ratio",
    sub: "Risk-adjusted return efficiency",
    color: "#06B6D4",
  },
  {
    to: 5.4,
    decimals: 1,
    suffix: "%",
    prefix: "−",
    label: "Max Drawdown",
    sub: "Controlled risk. Every session.",
    color: "#10B981",
  },
  {
    to: 1085,
    decimals: 0,
    suffix: "%",
    prefix: "",
    label: "January 2026 Return",
    sub: "$100 → $1,217 in 22 trading days",
    color: "#F0B429",
  },
  {
    to: 1.6,
    decimals: 2,
    suffix: "x",
    prefix: "",
    label: "Profit Factor",
    sub: "$1.60 returned per $1 risked",
    color: "#06B6D4",
  },
];

function StatCard({
  stat,
  delay,
}: {
  stat: (typeof stats)[0];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 rounded-2xl border border-[#1E2D3D] bg-[#0D1520] transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
        boxShadow: visible ? `0 0 40px ${stat.color}10` : "none",
      }}
    >
      <div
        className="text-4xl sm:text-5xl font-bold font-mono leading-none mb-2 tabular-nums"
        style={{ color: stat.color }}
      >
        <Counter
          to={stat.to}
          decimals={stat.decimals}
          prefix={stat.prefix}
          suffix={stat.suffix}
          duration={1600}
        />
      </div>
      <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
      <div className="text-xs text-slate-500 leading-relaxed">{stat.sub}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[11px] font-mono tracking-widest text-amber-400/70 uppercase mb-3">
            January 2026 · Live Backtest
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            <RevealText text="Numbers don't lie." />
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            38% win rate. Sharpe of 14. The asymmetry is the edge — we
            don&apos;t need to be right more often, we need to win bigger when we are.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} delay={i * 90} />
          ))}
        </div>

        <p className="text-center text-[11px] text-slate-600 mt-6 font-mono">
          * Past performance does not guarantee future results. Backtest conducted Jan 2026 on SPY options with $100 starting capital.
        </p>
      </div>
    </section>
  );
}
