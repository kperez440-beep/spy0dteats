"use client";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const BADGES = [
  { label: "MTF Alignment",       emerald: false },
  { label: "Eligibility Engine",  emerald: true  },
  { label: "Reaction Framework",  emerald: false },
  { label: "Supply & Demand",     emerald: true  },
] as const;

function SystemChrome() {
  return (
    <div
      className="flex items-center gap-1.5 px-5 py-3 flex-shrink-0"
      style={{
        borderBottom: "1px solid rgba(6,182,212,0.07)",
        background: "linear-gradient(180deg, #020609 0%, #030810 100%)",
      }}
    >
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F87171", opacity: 0.35 }} />
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#D4A840", opacity: 0.35 }} />
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#10B981", opacity: 0.35 }} />
      <div className="flex-1" />
      <div className="flex items-center gap-2.5">
        <span
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "8px",
            letterSpacing: "0.22em",
            color:         "#0F2030",
            textTransform: "uppercase",
          }}
        >
          Intelligence Terminal
        </span>
        <span
          style={{
            display:      "inline-block",
            width:        5,
            height:       5,
            borderRadius: "50%",
            background:   "#10B981",
            boxShadow:    "0 0 6px rgba(16,185,129,0.85)",
          }}
        />
        <span
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "8px",
            letterSpacing: "0.18em",
            color:         "#0F7A52",
            textTransform: "uppercase",
          }}
        >
          Live
        </span>
      </div>
      <div className="flex-1" />
    </div>
  );
}

export function SystemLayers() {
  return (
    <section
      className="relative overflow-hidden"
      id="system"
      style={{
        background: "linear-gradient(180deg, #030608 0%, #030a14 45%, #030608 100%)",
        paddingTop:    "120px",
        paddingBottom: "100px",
      }}
    >
      {/* Center blue spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 50% 22%, rgba(37,99,235,0.07) 0%, transparent 68%)",
        }}
      />

      {/* Emerald ambient right */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "25%", right: "-8%",
          width: "38%", height: "55%",
          background: "radial-gradient(ellipse at center, rgba(16,185,129,0.05) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(6,182,212,0.018) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(6,182,212,0.018) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "88px 88px",
        }}
      />

      <div className="relative z-10">

        {/* ── Intro text ── */}
        <div className="text-center mb-18 px-4">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-5"
          >
            <span
              className="inline-flex items-center gap-2"
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "9px",
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color:         "rgba(255,255,255,0.16)",
              }}
            >
              <span
                style={{
                  display:      "inline-block",
                  width:        4,
                  height:       4,
                  borderRadius: "50%",
                  background:   "#10B981",
                  boxShadow:    "0 0 6px rgba(16,185,129,0.8)",
                }}
              />
              Proprietary Intelligence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.07 }}
            style={{
              fontSize:      "clamp(36px, 5.6vw, 76px)",
              fontWeight:    800,
              letterSpacing: "-0.03em",
              lineHeight:    1.06,
              color:         "#FFFFFF",
              maxWidth:      "760px",
              margin:        "0 auto",
            }}
          >
            The System Thinks<br />Before You Do.
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            style={{
              marginTop:  "20px",
              color:      "rgba(255,255,255,0.40)",
              fontSize:   "clamp(14px, 1.25vw, 17px)",
              lineHeight: 1.7,
              maxWidth:   "540px",
              margin:     "20px auto 0",
            }}
          >
            SPY Pivot Pro combines market structure, signal confluence, playback
            research, and adaptive execution into a single operating environment.
          </motion.p>
        </div>

        {/* ── Terminal showcase ── */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.08 }}
          className="relative px-3 sm:px-5 lg:px-8"
          style={{ maxWidth: "1440px", margin: "0 auto" }}
        >
          {/* Ambient glow beneath — shadow cast before the frame */}
          <div
            className="absolute pointer-events-none"
            aria-hidden="true"
            style={{
              bottom: "-60px",
              insetInline: "5%",
              height: "120px",
              background: "radial-gradient(ellipse at 50% 0%, rgba(6,182,212,0.10) 0%, rgba(16,185,129,0.05) 40%, transparent 75%)",
              filter: "blur(30px)",
            }}
          />

          {/* Float animation */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          >
            {/* Terminal frame — animated border wrapper */}
            <div
              className="terminal-glow-border"
              style={{
                borderRadius: "21px",
                boxShadow: [
                  "0 0  60px rgba(6,182,212,0.07)",
                  "0 0 140px rgba(16,185,129,0.035)",
                  "0 70px 200px rgba(0,0,0,0.94)",
                ].join(", "),
              }}
            >
            <div
              className="relative"
              style={{
                borderRadius: "20px",
                overflow:     "hidden",
                background:   "#020509",
                boxShadow:    "inset 0 0 0 1px rgba(255,255,255,0.018)",
              }}
            >
              {/* Hairline top glow */}
              <div
                aria-hidden="true"
                style={{
                  height:     "1px",
                  background: "linear-gradient(90deg, transparent 4%, rgba(6,182,212,0.55) 36%, rgba(16,185,129,0.28) 64%, transparent 96%)",
                }}
              />

              <SystemChrome />

              {/* Image + bottom vignette container */}
              <div className="relative">
                <img
                  src="/images/terminal-hero.png"
                  alt="SPY Pivot Pro Intelligence Terminal — multi-timeframe confluence and eligibility engine"
                  className="w-full block"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).src = "/images/app_hero.png";
                  }}
                  draggable={false}
                />
                {/* CRT scanlines */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.038) 2px, rgba(0,0,0,0.038) 4px)",
                    zIndex: 2,
                  }}
                />
                {/* Bottom vignette — fades image into page */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  aria-hidden="true"
                  style={{
                    background: "linear-gradient(to bottom, transparent 50%, rgba(2,5,9,0.65) 78%, #020509 100%)",
                    zIndex: 3,
                  }}
                />
              </div>
            </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Capability badges ── */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12 px-4">
          {BADGES.map((b, i) => (
            <motion.span
              key={b.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.10 + i * 0.07 }}
              className="inline-flex items-center gap-2"
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color:         b.emerald ? "#34A87A" : "#3EB8CC",
                border:        `1px solid ${b.emerald ? "rgba(16,185,129,0.14)" : "rgba(6,182,212,0.14)"}`,
                background:    b.emerald ? "rgba(16,185,129,0.04)" : "rgba(6,182,212,0.04)",
                padding:       "8px 18px",
                borderRadius:  "999px",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  display:      "inline-block",
                  width:        4,
                  height:       4,
                  borderRadius: "50%",
                  background:   b.emerald ? "#10B981" : "#06B6D4",
                  opacity:      0.65,
                  flexShrink:   0,
                }}
              />
              {b.label}
            </motion.span>
          ))}
        </div>

        {/* ── Tagline ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="text-center mt-6 px-4"
          style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      "10px",
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color:         "rgba(255,255,255,0.12)",
          }}
        >
          Structured intelligence built specifically for SPY options.
        </motion.p>

      </div>
    </section>
  );
}
