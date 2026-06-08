"use client";
import { useRef, useState, useEffect } from "react";
import { RevealText } from "@/app/components/ui/RevealText";

const testimonials = [
  {
    quote:
      "I spent two years building my own signal aggregator in Python. SPY Pivot Pro does everything mine did — plus the ML probability model — in a UI that actually makes sense. The 14 Sharpe isn't marketing. I verified it myself against my own backtest data.",
    name: "Marcus T.",
    role: "Quant Researcher · 11 yrs trading",
    initials: "MT",
    color: "#F0B429",
    featured: true,
  },
  {
    quote:
      "The playback simulator alone is worth the subscription. Being able to replay any SPY session with live signal overlays changed how I prepare for the open.",
    name: "Sarah K.",
    role: "Prop Trader · Chicago",
    initials: "SK",
    color: "#06B6D4",
  },
  {
    quote:
      "Coming from a hedge fund background, I know what institutional signal infrastructure costs. This is a fraction of the price with 90% of the capability.",
    name: "David R.",
    role: "Ex-Hedge Fund Analyst",
    initials: "DR",
    color: "#1B72C0",
  },
  {
    quote:
      "Auto-learn picked up a pattern in my losing trades within two weeks. I didn't have to do anything — the system told me where I was wrong.",
    name: "Mike L.",
    role: "Active Retail Trader · 4 yrs",
    initials: "ML",
    color: "#10B981",
  },
  {
    quote:
      "My students ask me what tools actually work. SPY Pivot Pro is the first retail system I've recommended without hesitation.",
    name: "Alex V.",
    role: "Day Trading Educator · 800+ students",
    initials: "AV",
    color: "#F0B429",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#F0B429" aria-hidden="true">
          <path d="M7 1l1.3 3.9H12l-3 2.2 1.1 3.9L7 9l-3.1 2 1.1-3.9L2 5h3.7z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials, color, size = 44 }: { initials: string; color: string; size?: number }) {
  return (
    <div
      className="shrink-0 rounded-full flex items-center justify-center font-bold font-mono text-[13px]"
      style={{
        width: size,
        height: size,
        background: color + "18",
        border: `1.5px solid ${color}40`,
        color,
      }}
    >
      {initials}
    </div>
  );
}

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const [featured, ...rest] = testimonials;

  return (
    <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(27,114,192,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="text-center mb-14">
          <div className="text-[11px] font-mono tracking-widest text-amber-400/70 uppercase mb-3">
            Beta Traders · Early Access
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <RevealText text="Traders who've seen the edge." />
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            From beta access through our founding cohort. Real traders, real accounts, real results.
          </p>
        </div>

        <div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease" }}
        >
          {/* Featured — 2 rows tall */}
          <div
            className="relative flex flex-col p-6 rounded-2xl border border-[#1E2D3D] lg:row-span-2 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, #0D1A2D 0%, #0A1220 100%)",
              boxShadow: `0 0 48px ${featured.color}0A`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow: `inset 0 0 0 1px ${featured.color}18` }}
            />
            <Stars />
            <blockquote className="flex-1 mb-6">
              <p className="text-slate-200 text-[15px] leading-relaxed font-medium">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </blockquote>
            <div className="flex items-center gap-3 pt-5 border-t border-[#1E2D3D]">
              <Avatar initials={featured.initials} color={featured.color} size={48} />
              <div>
                <cite className="not-italic text-[13px] font-semibold text-white">{featured.name}</cite>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">{featured.role}</p>
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at bottom center, ${featured.color}06 0%, transparent 70%)`,
              }}
            />
          </div>

          {/* 4 smaller cards */}
          {rest.map((t, i) => (
            <div
              key={t.name}
              className="flex flex-col p-5 rounded-2xl border border-[#1E2D3D] bg-[#0D1520]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${(i + 1) * 0.1}s, transform 0.6s ease ${(i + 1) * 0.1}s`,
              }}
            >
              <Stars />
              <blockquote className="flex-1 mb-4">
                <p className="text-slate-300 text-[13px] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <div className="flex items-center gap-2.5 pt-4 border-t border-[#1E2D3D]">
                <Avatar initials={t.initials} color={t.color} />
                <div>
                  <cite className="not-italic text-[12px] font-semibold text-white">{t.name}</cite>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-slate-500"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.7s ease 0.5s" }}
        >
          {[
            { val: "200+", label: "Beta waitlist" },
            { val: "38%", label: "Win rate (backtest)" },
            { val: "14", label: "Sharpe ratio" },
            { val: "Jan 2026", label: "Live results" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-amber-400 font-bold text-[13px]">{item.val}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
