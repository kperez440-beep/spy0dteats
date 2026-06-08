"use client";
import { useEffect, useRef, useState } from "react";

const quotes = [
  { text: "The market is a device for transferring money from the impatient to the patient.", attr: "Warren Buffett" },
  { text: "Risk comes from not knowing what you're doing.", attr: "Warren Buffett" },
  { text: "In the short run, the market is a voting machine. In the long run, it is a weighing machine.", attr: "Benjamin Graham" },
];

const desklabels = [
  { v: "SPY", val: "592.41", up: true },
  { v: "0DTE P/C", val: "0.82", up: true },
  { v: "IV RANK", val: "28%", up: false },
  { v: "THETA BURN", val: "–$4.2/hr", up: false },
  { v: "DELTA", val: "+0.52", up: true },
  { v: "GAMMA", val: "0.18", up: true },
  { v: "NET LIQ", val: "$1,217", up: true },
  { v: "DAY P&L", val: "+$284", up: true },
];

export function WallStreet() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const q = quotes[0];

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050810 0%, #080E1C 50%, #050810 100%)" }}
    >
      {/* Building silhouette SVG */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-[0.04]">
        <svg viewBox="0 0 1440 300" preserveAspectRatio="none" className="w-full h-40">
          {/* Simplified NYC skyline shapes */}
          <rect x="0" y="80" width="60" height="220" fill="white" />
          <rect x="70" y="40" width="80" height="260" fill="white" />
          <rect x="160" y="100" width="50" height="200" fill="white" />
          <rect x="220" y="20" width="100" height="280" fill="white" />
          <rect x="330" y="60" width="70" height="240" fill="white" />
          <rect x="410" y="10" width="120" height="290" fill="white" />
          <rect x="540" y="50" width="80" height="250" fill="white" />
          <rect x="630" y="30" width="60" height="270" fill="white" />
          <rect x="700" y="70" width="90" height="230" fill="white" />
          <rect x="800" y="0" width="140" height="300" fill="white" />
          <rect x="950" y="40" width="70" height="260" fill="white" />
          <rect x="1030" y="90" width="50" height="210" fill="white" />
          <rect x="1090" y="20" width="100" height="280" fill="white" />
          <rect x="1200" y="60" width="80" height="240" fill="white" />
          <rect x="1290" y="100" width="60" height="200" fill="white" />
          <rect x="1360" y="50" width="80" height="250" fill="white" />
        </svg>
      </div>

      {/* Horizontal data tape */}
      <div className="absolute top-8 left-0 right-0 overflow-hidden border-t border-b border-[#1E2D3D]/50">
        <div className="flex gap-0 py-2" style={{ width: "max-content", animation: "ticker 28s linear infinite" }}>
          {[...desklabels, ...desklabels, ...desklabels].map((d, i) => (
            <div key={i} className="flex items-center gap-2 px-6 border-r border-[#1E2D3D]/50">
              <span className="text-[9px] font-mono tracking-widest text-slate-600 uppercase">{d.v}</span>
              <span className={`text-[11px] font-mono font-semibold ${d.up ? "text-[#10B981]" : "text-[#FF4D6A]"}`}>{d.val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 pt-8">
        {/* Main statement */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.9s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <div
            className="text-[10px] font-mono tracking-[0.35em] uppercase mb-6"
            style={{ color: "rgba(240,180,41,0.6)" }}
          >
            Fortitud Capital · Institutional Research
          </div>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            style={{ maxWidth: 720, margin: "0 auto 24px" }}
          >
            <span className="text-white">The feeling of trading</span>
            <br />
            <span
              className="text-gold"
              style={{
                fontStyle: "italic",
              }}
            >
              from the desk.
            </span>
          </h2>

          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Professional traders don&apos;t guess. They read signals, model probability, and act with
            conviction. SPY Pivot Pro puts that same infrastructure in your hands — without the
            $300K Bloomberg terminal or the six-figure quant salary.
          </p>

          {/* Three pillars of Wall Street mindset */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/>
                  </svg>
                ),
                label: "READ THE MARKET",
                desc: "11 institutional signals aggregated into one clear score",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1B72C0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                ),
                label: "KNOW THE ODDS",
                desc: "ML win probability before every entry — no more coin flips",
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                ),
                label: "EXECUTE WITH EDGE",
                desc: "Rules-based automation removes emotion from the equation",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl border border-[#1E2D3D] bg-[#0D1520]/80 text-center"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <div className="text-[10px] font-mono tracking-widest text-amber-400 mb-2">{item.label}</div>
                <div className="text-[12px] text-slate-400 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          className="border-l-2 border-amber-400/30 pl-6 max-w-2xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1.2s ease 0.4s",
          }}
        >
          <p className="text-slate-300 text-lg italic leading-relaxed mb-3">
            &ldquo;{q.text}&rdquo;
          </p>
          <p className="text-[11px] font-mono text-slate-500 tracking-wider">— {q.attr}</p>
        </div>

        {/* Nike-style banner */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.6s",
          }}
        >
          <div
            className="inline-block text-5xl sm:text-7xl font-bold tracking-tighter"
            style={{
              background: "linear-gradient(135deg, rgba(240,180,41,0.15) 0%, rgba(240,180,41,0.05) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.03em",
            }}
          >
            OWN YOUR EDGE.
          </div>
          <div className="text-[11px] font-mono tracking-[0.4em] text-slate-600 mt-2 uppercase">
            SPY Pivot Pro · by Fortitud Capital
          </div>
        </div>
      </div>
    </section>
  );
}
