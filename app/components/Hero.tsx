"use client";
import Image from "next/image";
import { useState } from "react";
import { LaunchCountdown } from "./LaunchCountdown";
import { ShaderBackground } from "@/app/components/ui/ShaderBackground";
import { ShinyButton } from "@/app/components/ui/ShinyButton";

export function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-4 overflow-hidden bg-[#050810]">
      <ShaderBackground />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_34%,rgba(240,180,41,0.12),transparent_38%),linear-gradient(180deg,rgba(5,8,16,0.04),rgba(5,8,16,0.34)_58%,rgba(5,8,16,0.94)_90%)] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-b from-transparent via-[#050810]/45 to-[#050810] pointer-events-none" />

      <div
        className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
        style={{
          width: 760,
          height: 460,
          background:
            "radial-gradient(ellipse at center, rgba(240,180,41,0.08) 0%, rgba(6,182,212,0.06) 42%, transparent 72%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center gap-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 border border-[#1E2D3D] bg-[#0D1520]/80 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-slate-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] pulse-dot inline-block" />
          Early Access — Now Open
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl">
          <span className="text-white">The edge is no</span>
          <br />
          <span className="text-gold-shimmer">longer institutional.</span>
        </h1>

        {/* Sub */}
        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
          Hedge funds spent decades building signal confluence engines, ML probability models, and
          automation layers. SPY Pivot Pro delivers that same institutional intelligence — built
          for SPY options, starting at $79/month.
        </p>

        {/* Proof line */}
        <p className="text-sm font-mono text-slate-500">
          January 2026 backtest:{" "}
          <span className="text-[#10B981] font-semibold">$100 → $1,217</span>
          {" · "}
          <span className="text-amber-400 font-semibold">Sharpe 14</span>
          {" · "}
          <span className="text-slate-300 font-semibold">MaxDD −5.4%</span>
        </p>

        {/* Launch countdown + spots */}
        <div className="w-full mt-2 mb-2">
          <LaunchCountdown />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <ShinyButton href="#waitlist" color="gold">
            Get Early Access
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </ShinyButton>
          <a
            href="#backtest"
            className="inline-flex items-center gap-2 border border-[#1E2D3D] hover:border-slate-500 text-slate-400 hover:text-white font-medium text-base px-7 py-3.5 rounded-xl transition-all duration-200 cursor-pointer"
          >
            View Jan 2026 Results
          </a>
        </div>

        {/* App screenshot */}
        <div className="relative w-full max-w-6xl mt-10">
          {/* Ambient glow behind the frame */}
          <div
            className="absolute -inset-4 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 60%, rgba(240,180,41,0.08) 0%, rgba(27,114,192,0.06) 45%, transparent 72%)",
              filter: "blur(24px)",
            }}
          />

          {/* Main frame */}
          <div
            className="relative rounded-2xl overflow-hidden border border-[#1E2D3D]"
            style={{
              boxShadow: "0 0 0 1px rgba(240,180,41,0.12), 0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(6,182,212,0.05)",
            }}
          >
            {!imgError ? (
              <div className="relative" style={{ aspectRatio: "1920/1040" }}>
                <Image
                  src="/images/app_hero.png"
                  alt="SPY Pivot Pro live trading interface — signal confluence, ML win probability, intraday playback"
                  fill
                  className="object-cover object-top"
                  priority
                  onError={() => setImgError(true)}
                />
                {/* Bottom fade — blends screenshot into page */}
                <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-[#050810] to-transparent" />

                {/* Feature callout badges — pinned to key areas of the UI */}
                <div className="absolute top-[10%] right-[2%] flex flex-col gap-2 pointer-events-none hidden sm:flex">
                  {[
                    { label: "Signal Confluence", color: "#F0B429" },
                    { label: "ML Win Prob", color: "#10B981" },
                    { label: "Supply / Demand", color: "#1B72C0" },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider"
                      style={{
                        background: badge.color + "15",
                        border: `1px solid ${badge.color}30`,
                        color: badge.color,
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      <span className="w-1 h-1 rounded-full inline-block" style={{ background: badge.color }} />
                      {badge.label}
                    </div>
                  ))}
                </div>

                {/* Bottom-left live indicator */}
                <div
                  className="absolute bottom-6 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest pointer-events-none hidden sm:flex"
                  style={{
                    background: "rgba(10,18,32,0.85)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    backdropFilter: "blur(8px)",
                    color: "#10B981",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] pulse-dot inline-block" />
                  PLAYBACK · SPY · FEB 26 2026
                </div>
              </div>
            ) : (
              <AppPlaceholder />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppPlaceholder() {
  return (
    <div
      className="relative w-full bg-[#0A1220]"
      style={{ aspectRatio: "16/9" }}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative z-10 h-full flex">
        {/* Left panel — overview */}
        <div className="w-64 border-r border-[#1E2D3D] p-3 flex flex-col gap-2">
          <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mb-1">Signal Confluence</div>
          {[
            { label: "RSI(14)", pct: 78, color: "#10B981" },
            { label: "MACD", pct: 65, color: "#10B981" },
            { label: "VWAP Cross", pct: 88, color: "#10B981" },
            { label: "Volume Profile", pct: 55, color: "#F0B429" },
            { label: "VIX Regime", pct: 71, color: "#10B981" },
            { label: "Options Flow", pct: 82, color: "#10B981" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-slate-500 w-24 truncate">{s.label}</span>
              <div className="flex-1 h-1.5 bg-[#1E2D3D] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${s.pct}%`, background: s.color }}
                />
              </div>
              <span className="text-[9px] font-mono" style={{ color: s.color }}>{s.pct}</span>
            </div>
          ))}
          <div className="mt-3 p-2 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 text-center">
            <div className="text-[9px] font-mono text-slate-500 tracking-widest">COMPOSITE</div>
            <div className="text-2xl font-bold font-mono text-[#10B981]">78</div>
            <div className="text-[9px] font-mono text-[#10B981] tracking-wider">STRONG BULL</div>
          </div>
        </div>

        {/* Main chart area */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-3 px-4 py-2 border-b border-[#1E2D3D]">
            <span className="text-[11px] font-mono text-amber-400 font-semibold">SPY</span>
            <span className="text-[13px] font-mono text-white font-bold">592.41</span>
            <span className="text-[11px] font-mono text-[#10B981]">+2.18 (+0.37%)</span>
            <div className="ml-auto text-[9px] font-mono text-slate-500">WIN PROB:</div>
            <div className="text-[13px] font-mono text-amber-400 font-bold">73.2%</div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <svg viewBox="0 0 500 180" className="w-full h-full opacity-60">
              <defs>
                <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,140 L30,135 L70,128 L110,132 L150,115 L190,100 L230,95 L260,88 L300,78 L340,65 L380,58 L420,48 L460,42 L500,38"
                stroke="#10B981"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M0,140 L30,135 L70,128 L110,132 L150,115 L190,100 L230,95 L260,88 L300,78 L340,65 L380,58 L420,48 L460,42 L500,38 L500,180 L0,180 Z"
                fill="url(#cg)"
              />
              {/* Grid lines */}
              {[40,80,120,160].map(y => (
                <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="#1E2D3D" strokeWidth="0.5" />
              ))}
            </svg>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-52 border-l border-[#1E2D3D] p-3 flex flex-col gap-3">
          <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">ML Model</div>
          <div className="p-2 rounded-lg bg-amber-400/5 border border-amber-400/20 text-center">
            <div className="text-[10px] font-mono text-slate-500">WIN PROBABILITY</div>
            <div className="text-2xl font-bold font-mono text-amber-400">73.2%</div>
            <div className="text-[9px] font-mono text-amber-400/70">FAVORABLE</div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 tracking-widest uppercase mt-1">Recent P&L</div>
          {["+$284", "+$192", "-$48", "+$341", "+$218"].map((v, i) => (
            <div key={i} className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-slate-600">Trade {i + 1}</span>
              <span className={v.startsWith("+") ? "text-[#10B981]" : "text-[#FF4D6A]"}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
