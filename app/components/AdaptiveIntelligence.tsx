"use client";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const STAGES = [
  {
    label: "Observe",
    desc:  "The system studies market structure, liquidity, and behavior.",
  },
  {
    label: "Replay",
    desc:  "Historical sessions are replayed and analyzed in detail.",
  },
  {
    label: "Refine",
    desc:  "Execution logic and parameters are continuously improved.",
  },
  {
    label: "Adapt",
    desc:  "The intelligence evolves as new evidence emerges.",
  },
] as const;

const PHILOSOPHY = [
  { text: "Study first.",          bright: true  },
  { text: "Execute second.",       bright: true  },
  { text: "Refine continuously.",  bright: true  },
] as const;

const EVIDENCE = [
  "Every playback session.",
  "Every market condition.",
  "Every execution outcome.",
] as const;

export function AdaptiveIntelligence() {
  return (
    <section
      className="relative overflow-hidden"
      id="adaptive"
      style={{
        background:    "#030608",
        paddingTop:    "140px",
        paddingBottom: "140px",
      }}
    >
      {/* Deep blue atmospheric center */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: [
            "radial-gradient(ellipse 55% 65% at 50% 15%, rgba(10,30,80,0.07) 0%, transparent 68%)",
            "radial-gradient(ellipse 40% 50% at 80% 70%, rgba(6,80,60,0.04) 0%, transparent 65%)",
          ].join(", "),
        }}
      />

      {/* Faint grid — even more muted than hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(6,182,212,0.013) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(6,182,212,0.013) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "88px 88px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Intro text ── */}
        <div className="text-center mb-24">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-5"
          >
            <span
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "9px",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color:         "rgba(255,255,255,0.13)",
              }}
            >
              Continuous Refinement
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.06 }}
            style={{
              fontSize:      "clamp(32px, 4.8vw, 66px)",
              fontWeight:    800,
              letterSpacing: "-0.03em",
              lineHeight:    1.08,
              color:         "#FFFFFF",
              marginBottom:  "44px",
            }}
          >
            The System Learns<br />Through Research.
          </motion.h2>

          {/* Subheadline — layered philosophy statement */}
          <div style={{ maxWidth: "460px", margin: "0 auto" }}>

            {/* Intro sentence */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14 }}
              style={{
                fontSize:     "14px",
                color:        "rgba(255,255,255,0.32)",
                lineHeight:   1.7,
                marginBottom: "24px",
              }}
            >
              SPY Pivot Pro is built around a simple philosophy:
            </motion.p>

            {/* Study first / Execute second / Refine continuously */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.22 }}
              style={{ marginBottom: "24px" }}
            >
              {PHILOSOPHY.map(({ text }) => (
                <p
                  key={text}
                  style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      "11px",
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color:         "rgba(255,255,255,0.20)",
                    lineHeight:    2.1,
                  }}
                >
                  {text}
                </p>
              ))}
            </motion.div>

            {/* Evidence lines */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.30 }}
              style={{ marginBottom: "24px" }}
            >
              {EVIDENCE.map(text => (
                <p
                  key={text}
                  style={{
                    fontSize:  "13px",
                    color:     "rgba(255,255,255,0.26)",
                    lineHeight: 2.0,
                  }}
                >
                  {text}
                </p>
              ))}
            </motion.div>

            {/* Closing sentence */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.38 }}
              style={{
                fontSize:   "13px",
                color:      "#1A2E40",
                lineHeight: 1.78,
              }}
            >
              Becomes part of an evolving body of research designed to improve
              understanding and execution quality.
            </motion.p>

          </div>
        </div>

        {/* ── Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.06 }}
          className="mb-32"
        >
          {/* ── Desktop: horizontal ── */}
          <div className="relative hidden sm:flex items-start justify-between">

            {/* Connecting line */}
            <div
              className="absolute pointer-events-none"
              aria-hidden="true"
              style={{
                top:        "3px",
                left:       "12.5%",
                right:      "12.5%",
                height:     "1px",
                background: "linear-gradient(90deg, rgba(6,182,212,0.08) 0%, rgba(6,182,212,0.14) 50%, rgba(6,182,212,0.08) 100%)",
              }}
            />

            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.12 + i * 0.09 }}
                className="flex-1 flex flex-col items-center text-center px-4"
              >
                {/* Node dot */}
                <div
                  style={{
                    width:        7,
                    height:       7,
                    borderRadius: "50%",
                    border:       "1px solid rgba(6,182,212,0.22)",
                    background:   "rgba(6,182,212,0.06)",
                    boxShadow:    "0 0 8px rgba(6,182,212,0.08)",
                    position:     "relative",
                    zIndex:       1,
                    flexShrink:   0,
                  }}
                />

                <div style={{ marginTop: "28px" }}>
                  {/* Stage number */}
                  <p
                    style={{
                      fontFamily:    "var(--font-mono)",
                      fontSize:      "8px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color:         "rgba(255,255,255,0.08)",
                      marginBottom:  "10px",
                    }}
                  >
                    0{i + 1}
                  </p>

                  {/* Stage label */}
                  <h3
                    style={{
                      fontSize:      "16px",
                      fontWeight:    600,
                      color:         "#8CA8BE",
                      letterSpacing: "-0.01em",
                      marginBottom:  "12px",
                    }}
                  >
                    {stage.label}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize:   "12px",
                      color:      "rgba(255,255,255,0.28)",
                      lineHeight: 1.75,
                    }}
                  >
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Mobile: vertical ── */}
          <div className="relative flex flex-col gap-10 sm:hidden pl-8">

            {/* Vertical connecting line */}
            <div
              className="absolute pointer-events-none"
              aria-hidden="true"
              style={{
                top:      "3px",
                bottom:   "3px",
                left:     "3px",
                width:    "1px",
                background: "linear-gradient(180deg, rgba(6,182,212,0.08) 0%, rgba(6,182,212,0.14) 50%, rgba(6,182,212,0.08) 100%)",
              }}
            />

            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.08 }}
                className="relative"
              >
                {/* Node dot */}
                <div
                  style={{
                    position:     "absolute",
                    left:         "-29px",
                    top:          "4px",
                    width:        7,
                    height:       7,
                    borderRadius: "50%",
                    border:       "1px solid rgba(6,182,212,0.22)",
                    background:   "rgba(6,182,212,0.06)",
                    boxShadow:    "0 0 8px rgba(6,182,212,0.08)",
                  }}
                />

                <p
                  style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      "8px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color:         "rgba(255,255,255,0.08)",
                    marginBottom:  "7px",
                  }}
                >
                  0{i + 1}
                </p>

                <h3
                  style={{
                    fontSize:     "15px",
                    fontWeight:   600,
                    color:        "#8CA8BE",
                    letterSpacing: "-0.01em",
                    marginBottom: "8px",
                  }}
                >
                  {stage.label}
                </h3>

                <p style={{ fontSize: "12px", color: "#1E3548", lineHeight: 1.75 }}>
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Large quote ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.08 }}
          className="text-center"
        >
          {/* Hairline above */}
          <div
            aria-hidden="true"
            style={{
              width:      "1px",
              height:     "52px",
              background: "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.14) 100%)",
              margin:     "0 auto 52px",
            }}
          />

          <blockquote>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: EASE, delay: 0.12 }}
              style={{
                fontSize:      "clamp(28px, 4.5vw, 64px)",
                fontWeight:    300,
                letterSpacing: "-0.025em",
                lineHeight:    1.18,
                color:         "rgba(255,255,255,0.60)",
                marginBottom:  "0.4em",
              }}
            >
              &ldquo;We don&rsquo;t chase signals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: EASE, delay: 0.22 }}
              style={{
                fontSize:      "clamp(28px, 4.5vw, 64px)",
                fontWeight:    300,
                letterSpacing: "-0.025em",
                lineHeight:    1.18,
                color:         "rgba(255,255,255,0.86)",
              }}
            >
              We build understanding.&rdquo;
            </motion.p>
          </blockquote>

          {/* Hairline below quote */}
          <div
            aria-hidden="true"
            style={{
              width:      "1px",
              height:     "44px",
              background: "linear-gradient(180deg, rgba(6,182,212,0.10) 0%, transparent 100%)",
              margin:     "52px auto 44px",
            }}
          />

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.32 }}
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            <p
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color:         "rgba(255,255,255,0.08)",
              }}
            >
              Adaptive Trading Intelligence
            </p>
            <p
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color:         "rgba(255,255,255,0.05)",
              }}
            >
              for SPY Options Traders.
            </p>
            <p
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color:         "rgba(255,255,255,0.03)",
                marginTop:     "4px",
              }}
            >
              by Fortitud Capital.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
