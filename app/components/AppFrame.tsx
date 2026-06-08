"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// ─── VIDEO SETUP ──────────────────────────────────────────────────────────────
// Drop your exported WebM at:  public/videos/app_demo.webm
// Drop an MP4 fallback at:     public/videos/app_demo.mp4
// Until those files exist the poster (static screenshot) shows automatically.
// ──────────────────────────────────────────────────────────────────────────────

const BADGES = [
  { label: "Signal Confluence", color: "#F0B429" },
  { label: "ML Win Prob",       color: "#10B981" },
  { label: "Supply / Demand",   color: "#1B72C0" },
];

export function AppFrame() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left) / r.width  - 0.5) *  5,
      y: ((e.clientY - r.top)  / r.height - 0.5) * -3,
    });
  };

  return (
    <motion.div
      className="relative w-full max-w-6xl mx-auto mt-10"
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Ambient glow behind the frame */}
      <div
        className="absolute -inset-6 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(240,180,41,0.07) 0%, rgba(27,114,192,0.05) 45%, transparent 72%)",
          filter: "blur(32px)",
        }}
      />

      {/* 3-D tilt wrapper — interactive parallax on mouse hover */}
      <div
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.38s cubic-bezier(0.25,0.46,0.45,0.94)",
          willChange: "transform",
        }}
      >
        {/* Outer frame */}
        <div
          className="relative rounded-2xl overflow-hidden border border-[#1E2D3D]"
          style={{
            boxShadow:
              "0 0 0 1px rgba(240,180,41,0.10), 0 48px 120px rgba(0,0,0,0.75), 0 0 64px rgba(6,182,212,0.04)",
          }}
        >
          {/* Window chrome bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0A1220] border-b border-[#1E2D3D]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D6A]/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F0B429]/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/50" />
            <span className="ml-3 text-[10px] font-mono text-slate-600 tracking-wider select-none">
              SPY Pivot Pro &nbsp;·&nbsp; Fortitud Capital &nbsp;·&nbsp; Playback Mode
            </span>
            <div className="ml-auto flex items-center gap-1.5 text-[10px] font-mono text-[#10B981] select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] pulse-dot inline-block" />
              LIVE
            </div>
          </div>

          {/* Media area */}
          <div className="relative" style={{ aspectRatio: "1920 / 1040" }}>

            {/* Video — autoplay loop. Poster shows until file is present. */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/app_hero.png"
              className="absolute inset-0 w-full h-full object-cover object-top"
            >
              <source src="/videos/app_demo.webm" type="video/webm" />
              <source src="/videos/app_demo.mp4"  type="video/mp4" />
            </video>

            {/* Scanlines overlay */}
            <div className="absolute inset-0 scanlines pointer-events-none z-10" />

            {/* Edge vignette — keeps corners dark and cinematic */}
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, transparent 56%, rgba(5,8,16,0.38) 100%)",
              }}
            />

            {/* Bottom fade — blends into page background */}
            <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none z-20 bg-gradient-to-t from-[#050810] to-transparent" />

            {/* Feature callout badges — stagger in after frame appears */}
            <div className="absolute top-[8%] right-[2%] flex flex-col gap-2 pointer-events-none z-30 hidden sm:flex">
              {BADGES.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65 + i * 0.13, duration: 0.42, ease: "easeOut" }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider"
                  style={{
                    background: b.color + "18",
                    border: `1px solid ${b.color}35`,
                    color: b.color,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full inline-block"
                    style={{ background: b.color }}
                  />
                  {b.label}
                </motion.div>
              ))}
            </div>

            {/* Live session indicator — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.05, duration: 0.4 }}
              className="absolute bottom-8 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest pointer-events-none z-30 hidden sm:flex"
              style={{
                background: "rgba(10,18,32,0.88)",
                border: "1px solid rgba(16,185,129,0.28)",
                backdropFilter: "blur(8px)",
                color: "#10B981",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] pulse-dot inline-block" />
              PLAYBACK &nbsp;·&nbsp; SPY &nbsp;·&nbsp; FEB 26 2026
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
