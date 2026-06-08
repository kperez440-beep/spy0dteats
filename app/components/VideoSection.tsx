"use client";
import { useState } from "react";

/* Drop a YouTube video ID here once the demo is recorded */
const VIDEO_ID = "";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(6,182,212,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-10">
          <div className="text-[11px] font-mono tracking-widest text-[#06B6D4]/70 uppercase mb-3">
            See It In Action
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Watch the system trade.
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            Full walkthrough of the Signal Confluence engine, ML probability score, and
            playback simulator — live session from January 2026.
          </p>
        </div>

        <div
          className="relative rounded-2xl border border-[#1E2D3D] overflow-hidden"
          style={{
            aspectRatio: "16/9",
            boxShadow: "0 0 60px rgba(6,182,212,0.07), 0 32px 64px rgba(0,0,0,0.5)",
          }}
        >
          {VIDEO_ID && playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              allow="autoplay; fullscreen"
              className="absolute inset-0 w-full h-full"
              title="SPY Pivot Pro demo video"
            />
          ) : (
            /* Placeholder — replace with real thumbnail once recorded */
            <div className="absolute inset-0 bg-[#0A1220] flex flex-col items-center justify-center">
              {/* Fake chart background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 800 450" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="vg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[100, 200, 300, 400].map((y) => (
                    <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="#1E2D3D" strokeWidth="0.5" />
                  ))}
                  <path d="M0,350 L80,320 L160,330 L240,280 L320,250 L400,220 L480,180 L560,150 L640,110 L720,80 L800,60" fill="none" stroke="#10B981" strokeWidth="2" />
                  <path d="M0,350 L80,320 L160,330 L240,280 L320,250 L400,220 L480,180 L560,150 L640,110 L720,80 L800,60 L800,450 L0,450 Z" fill="url(#vg)" />
                </svg>
              </div>

              {/* Play button */}
              <button
                onClick={() => VIDEO_ID && setPlaying(true)}
                className="relative z-10 flex flex-col items-center gap-4 group cursor-default"
                aria-label={VIDEO_ID ? "Play demo video" : "Demo video coming soon"}
              >
                <div
                  className="w-20 h-20 rounded-full border-2 border-[#06B6D4]/50 bg-[#06B6D4]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#06B6D4] group-hover:bg-[#06B6D4]/20"
                  style={{ boxShadow: "0 0 32px rgba(6,182,212,0.2)" }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    aria-hidden="true"
                    className="ml-1"
                  >
                    <polygon points="8,6 24,14 8,22" fill="#06B6D4" />
                  </svg>
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-base">
                    {VIDEO_ID ? "Watch Demo" : "Demo Video Coming Soon"}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-1">
                    {VIDEO_ID ? "8 min walkthrough — live session" : "Recording in progress"}
                  </div>
                </div>
              </button>

              {/* Stats overlay bottom */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3 justify-center">
                {[
                  { label: "Session Date", val: "Jan 31, 2026" },
                  { label: "Signal Score", val: "78 — BULL" },
                  { label: "Result", val: "+$169 (+27%)" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="px-3 py-1.5 rounded-lg bg-[#0D1520]/90 border border-[#1E2D3D] text-center"
                  >
                    <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">{s.label}</div>
                    <div className="text-[11px] font-mono font-semibold text-[#10B981]">{s.val}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-[11px] text-slate-600 font-mono mt-4">
          Full session available to all waitlist members before public launch.
        </p>
      </div>
    </section>
  );
}
