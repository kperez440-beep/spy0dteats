"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SPYPivotMark } from "./Logo";

const EASE = [0.16, 1, 0.3, 1] as const;

function TerminalChrome() {
  return (
    <div
      className="flex items-center gap-1.5 px-4 py-3 flex-shrink-0"
      style={{ borderBottom: "1px solid rgba(193, 255, 114,0.07)", background: "#020602" }}
    >
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F87171", opacity: 0.45 }} />
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#C1FF72", opacity: 0.45 }} />
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#10B981", opacity: 0.45 }} />
      <div className="flex-1" />
      <span style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "9px",
        letterSpacing: "0.22em",
        color: "rgba(255,255,255,0.22)",
        textTransform: "uppercase",
      }}>
        SPY Pivot Pro · Intelligence Terminal
      </span>
      <div className="flex-1" />
    </div>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll parallax — text fades, terminal drifts up subtly
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentOp = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY  = useTransform(scrollYProgress, [0, 0.6], [0, -48]);
  const terminalY = useTransform(scrollYProgress, [0, 1],   [0, -72]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#040703", minHeight: "100vh" }}
    >

      {/* ── Canopy atmospheric glow — upper left (aurora-1) ── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "-18%", left: "-10%",
          width: "65%", height: "75%",
          background: "radial-gradient(ellipse at center, rgba(193,255,114,0.09) 0%, transparent 65%)",
          filter: "blur(52px)",
          animation: "aurora-1 22s ease-in-out infinite",
        }}
      />

      {/* ── Emerald glow — right (aurora-2) ── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "10%", right: "-14%",
          width: "58%", height: "65%",
          background: "radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 65%)",
          filter: "blur(68px)",
          animation: "aurora-2 28s ease-in-out infinite",
        }}
      />

      {/* ── Faint grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(193, 255, 114,0.022) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(193, 255, 114,0.022) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "88px 88px",
        }}
      />

      {/* ── Text block ── */}
      <motion.div
        style={{ opacity: contentOp, y: contentY }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-36 pb-0"
      >

        {/* Attribution */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "10px",
            letterSpacing: "0.38em",
            textTransform: "uppercase",
            color:         "rgba(255,255,255,0.24)",
            marginBottom:  "18px",
          }}
        >
          by Fortitud Capital
        </motion.p>

        {/* Product lockup — the real mark, not a text pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          style={{
            display:      "flex",
            alignItems:   "center",
            gap:          "16px",
            marginBottom: "36px",
          }}
        >
          <SPYPivotMark size={88} color="#F7F6F1" badge={false} />
          <span
            style={{
              fontFamily:    "var(--font-display, 'Baloo 2', sans-serif)",
              fontWeight:    700,
              fontSize:      "clamp(26px, 3vw, 36px)",
              letterSpacing: "-0.01em",
              color:         "#F7F6F1",
            }}
          >
            SPY Pivot Pro
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.14 }}
          style={{
            fontSize:      "clamp(44px, 7.8vw, 108px)",
            fontWeight:    800,
            letterSpacing: "-0.03em",
            lineHeight:    1.04,
            color:         "#FFFFFF",
            maxWidth:      "940px",
          }}
        >
          The Operating System<br />
          for SPY Options Traders
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: EASE, delay: 0.23 }}
          style={{
            marginTop:  "24px",
            color:      "rgba(255,255,255,0.44)",
            fontSize:   "clamp(15px, 1.4vw, 18px)",
            lineHeight: 1.68,
            maxWidth:   "520px",
          }}
        >
          Adaptive Trading Intelligence built around research, playback,
          signal confluence, and execution refinement.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: EASE, delay: 0.34 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-7"
          style={{ marginTop: "44px" }}
        >
          {/* Primary */}
          <a
            href="#founding"
            className="inline-flex items-center gap-2.5 font-bold rounded-full cursor-pointer"
            style={{
              background:  "#C1FF72",
              color:       "#040703",
              fontSize:    "14px",
              padding:     "14px 34px",
              fontFamily:  "var(--font-sans)",
              boxShadow:   "0 0 0 1px rgba(193, 255, 114,0.35), 0 4px 32px rgba(193, 255, 114,0.16)",
              transition:  "all 0.22s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#D9FFA0";
              el.style.boxShadow  = "0 0 48px rgba(193, 255, 114,0.50), 0 0 0 1px rgba(193, 255, 114,0.9)";
              el.style.transform  = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#C1FF72";
              el.style.boxShadow  = "0 0 0 1px rgba(193, 255, 114,0.35), 0 4px 32px rgba(193, 255, 114,0.16)";
              el.style.transform  = "translateY(0)";
            }}
          >
            Request Early Access
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          {/* Secondary */}
          <a
            href="#system"
            className="inline-flex items-center gap-1.5 cursor-pointer"
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "12px",
              letterSpacing: "0.06em",
              color:         "rgba(255,255,255,0.28)",
              transition:    "color 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.70)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.28)"; }}
          >
            Preview the System
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

      </motion.div>

      {/* ── Terminal — centerpiece ── */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.56 }}
        style={{ y: terminalY }}
        className="relative z-10 mt-16 px-4 sm:px-6 lg:px-10"
      >
        <div style={{ maxWidth: "1380px", margin: "0 auto" }}>

          {/* Animated border wrapper — flat (no 3D) for smooth video decode */}
          <div
            className="terminal-glow-border"
            style={{
              borderRadius: "19px",
              willChange:   "transform",
              boxShadow: [
                "0 0 80px  rgba(193, 255, 114,0.09)",
                "0 0 200px rgba(16,185,129,0.05)",
                "0 100px 300px rgba(0,0,0,0.92)",
              ].join(", "),
            }}
          >
            {/* Inner frame — owns overflow + background */}
            <div
              className="relative"
              style={{ borderRadius: "18px", overflow: "hidden", background: "#020602" }}
            >
              {/* Hairline top glow */}
              <div
                className="absolute inset-x-0 top-0 z-10 pointer-events-none"
                style={{
                  height: "1px",
                  background: "linear-gradient(90deg, transparent 5%, rgba(193, 255, 114,0.55) 38%, rgba(16,185,129,0.30) 62%, transparent 95%)",
                }}
                aria-hidden="true"
              />

              <TerminalChrome />

              {/* Placeholder — old demo.mp4/terminal-hero.png retired 2026-08-23,
                  showed the pre-rebrand look of the terminal. Swap back in a
                  <video>/<img> here once a fresh capture of the current app
                  is ready. */}
              <div className="relative">
                <div
                  style={{
                    width:          "100%",
                    aspectRatio:    "16 / 9",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    background:     "radial-gradient(ellipse at 50% 40%, #0a0d09 0%, #040503 70%)",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
                    <SPYPivotMark size={40} badge={false} color="rgba(193,255,114,0.30)" />
                    <span
                      style={{
                        fontFamily:    "var(--font-mono)",
                        fontSize:      "10px",
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        color:         "rgba(255,255,255,0.20)",
                      }}
                    >
                      Terminal preview updating
                    </span>
                  </div>
                </div>
                {/* CRT scanlines */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.038) 2px, rgba(0,0,0,0.038) 4px)",
                    zIndex: 2,
                  }}
                />
                {/* Bottom vignette — blends into page */}
                <div
                  className="absolute bottom-0 inset-x-0 pointer-events-none"
                  style={{
                    height:     "40%",
                    background: "linear-gradient(to bottom, transparent 0%, rgba(3,8,6,0.72) 55%, #040703 100%)",
                    zIndex:     3,
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
