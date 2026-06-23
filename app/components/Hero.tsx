"use client";
import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function TerminalChrome() {
  return (
    <div
      className="flex items-center gap-1.5 px-4 py-3 flex-shrink-0"
      style={{ borderBottom: "1px solid rgba(6,182,212,0.07)", background: "#020509" }}
    >
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F87171", opacity: 0.45 }} />
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#D4A840", opacity: 0.45 }} />
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#10B981", opacity: 0.45 }} />
      <div className="flex-1" />
      <span style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "9px",
        letterSpacing: "0.22em",
        color: "#1a2e3a",
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

  // Mouse parallax — subtle terminal tilt
  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const sMX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const sMY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const tiltY = useTransform(sMX, [-0.5, 0.5], [-3, 3]);
  const tiltX = useTransform(sMY, [-0.5, 0.5], [2, -2]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#030608", minHeight: "100vh" }}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - r.left) / r.width  - 0.5);
        mouseY.set((e.clientY - r.top)  / r.height - 0.5);
      }}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >

      {/* ── Blue atmospheric glow — upper left ── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "-18%", left: "-10%",
          width: "65%", height: "75%",
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.11) 0%, transparent 65%)",
          filter: "blur(52px)",
        }}
      />

      {/* ── Emerald glow — right ── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "10%", right: "-14%",
          width: "58%", height: "65%",
          background: "radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 65%)",
          filter: "blur(68px)",
        }}
      />

      {/* ── Faint grid ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(6,182,212,0.022) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(6,182,212,0.022) 1px, transparent 1px)",
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
            color:         "#2D3748",
            marginBottom:  "18px",
          }}
        >
          by Fortitud Capital
        </motion.p>

        {/* Product badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
          style={{ marginBottom: "32px" }}
        >
          <span
            className="inline-flex items-center gap-2"
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "10px",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color:         "#22D3EE",
              padding:       "6px 16px",
              borderRadius:  "999px",
              border:        "1px solid rgba(6,182,212,0.20)",
              background:    "rgba(6,182,212,0.05)",
            }}
          >
            <span
              style={{
                display:   "inline-block",
                width:     6,
                height:    6,
                borderRadius: "50%",
                background: "#10B981",
                boxShadow: "0 0 7px rgba(16,185,129,0.9)",
                flexShrink: 0,
              }}
            />
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
            color:      "#4B5E6E",
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
              background:  "#06B6D4",
              color:       "#030608",
              fontSize:    "14px",
              padding:     "14px 34px",
              fontFamily:  "var(--font-sans)",
              boxShadow:   "0 0 0 1px rgba(6,182,212,0.35), 0 4px 32px rgba(6,182,212,0.16)",
              transition:  "all 0.22s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#22D3EE";
              el.style.boxShadow  = "0 0 48px rgba(6,182,212,0.50), 0 0 0 1px rgba(6,182,212,0.9)";
              el.style.transform  = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#06B6D4";
              el.style.boxShadow  = "0 0 0 1px rgba(6,182,212,0.35), 0 4px 32px rgba(6,182,212,0.16)";
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
            href="#platform"
            className="inline-flex items-center gap-1.5 cursor-pointer"
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "12px",
              letterSpacing: "0.06em",
              color:         "#374151",
              transition:    "color 0.2s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#374151"; }}
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
        {/* Perspective wrapper */}
        <div style={{ maxWidth: "1380px", margin: "0 auto", perspective: "1800px" }}>

          {/* Tilt + glow wrapper */}
          <motion.div
            style={{
              rotateX:         tiltX,
              rotateY:         tiltY,
              transformOrigin: "center top",
              borderRadius:    "18px",
              overflow:        "hidden",
              border:          "1px solid rgba(6,182,212,0.11)",
              boxShadow: [
                "0 0 0 1px rgba(6,182,212,0.05)",
                "0 0 80px  rgba(6,182,212,0.09)",
                "0 0 200px rgba(16,185,129,0.05)",
                "0 100px 300px rgba(0,0,0,0.92)",
              ].join(", "),
            }}
          >
            {/* Hairline top glow */}
            <div
              className="absolute inset-x-0 top-0 z-10 pointer-events-none"
              style={{
                height: "1px",
                background: "linear-gradient(90deg, transparent 5%, rgba(6,182,212,0.55) 38%, rgba(16,185,129,0.30) 62%, transparent 95%)",
              }}
              aria-hidden="true"
            />

            <TerminalChrome />

            <img
              src="/images/terminal-hero.png"
              alt="SPY Pivot Pro Intelligence Terminal"
              className="w-full block"
              onError={e => { (e.currentTarget as HTMLImageElement).src = "/images/app_hero.png"; }}
              draggable={false}
            />

            {/* Bottom vignette — blends into page */}
            <div
              className="absolute bottom-0 inset-x-0 pointer-events-none"
              style={{
                height:     "40%",
                background: "linear-gradient(to bottom, transparent 0%, rgba(3,6,8,0.72) 55%, #030608 100%)",
              }}
              aria-hidden="true"
            />
          </motion.div>

        </div>
      </motion.div>

    </section>
  );
}
