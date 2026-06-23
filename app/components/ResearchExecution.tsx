"use client";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

function IconPlayback() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <line x1="1.5" y1="3.5" x2="9.5" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="1.5" y1="8"   x2="13.5" y2="8"  stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="1.5" y1="12.5" x2="6.5" y2="12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11.5 10.8l3.2-2.8-3.2-2.8v5.6z" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  );
}

function IconHistorical() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="13" height="3"   rx="0.6" stroke="currentColor" strokeWidth="1.1" />
      <rect x="1.5" y="6.5" width="9"  height="3"   rx="0.6" stroke="currentColor" strokeWidth="1.1" />
      <rect x="1.5" y="11.5" width="6" height="3"   rx="0.6" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}

function IconParameter() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="3.5"  cy="3.5"  r="1.3" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12.5" cy="3.5"  r="1.3" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="3.5"  cy="12.5" r="1.3" stroke="currentColor" strokeWidth="1.1" />
      <circle cx="12.5" cy="12.5" r="1.3" stroke="currentColor" strokeWidth="1.1" />
      <line x1="4.8"  y1="3.5"  x2="11.2" y2="3.5"  stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 1.4" />
      <line x1="4.8"  y1="12.5" x2="11.2" y2="12.5" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 1.4" />
      <line x1="3.5"  y1="4.8"  x2="3.5"  y2="11.2" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 1.4" />
      <line x1="12.5" y1="4.8"  x2="12.5" y2="11.2" stroke="currentColor" strokeWidth="0.9" strokeDasharray="2 1.4" />
    </svg>
  );
}

function IconAdaptive() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M13.5 8A5.5 5.5 0 1 1 8 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M8 0.5l2.8 2L8 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CARDS = [
  {
    title: "Playback Engine",
    desc:  "Replay market sessions candle by candle to understand structure, timing, and decision quality.",
    icon:  <IconPlayback />,
  },
  {
    title: "Historical Research",
    desc:  "Study previous sessions and identify how market conditions evolve across different environments.",
    icon:  <IconHistorical />,
  },
  {
    title: "Parameter Exploration",
    desc:  "Test assumptions, compare behaviors, and refine execution logic through structured experimentation.",
    icon:  <IconParameter />,
  },
  {
    title: "Adaptive Intelligence",
    desc:  "The platform evolves through research, observation, and continuous refinement.",
    icon:  <IconAdaptive />,
  },
] as const;

export function ResearchExecution() {
  return (
    <section
      className="relative overflow-hidden"
      id="research"
      style={{
        background:    "#030608",
        paddingTop:    "116px",
        paddingBottom: "120px",
      }}
    >
      {/* Top hairline separator */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        aria-hidden="true"
        style={{
          height:     "1px",
          background: "linear-gradient(90deg, transparent 8%, rgba(20,35,52,0.9) 35%, rgba(20,35,52,0.9) 65%, transparent 92%)",
        }}
      />

      {/* Very faint center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(20,45,80,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Intro text ── */}
        <div className="text-center mb-20">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-5"
          >
            <span
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "9px",
                letterSpacing: "0.36em",
                textTransform: "uppercase",
                color:         "#162535",
              }}
            >
              Adaptive Trading Intelligence
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.07 }}
            style={{
              fontSize:      "clamp(34px, 5vw, 68px)",
              fontWeight:    800,
              letterSpacing: "-0.03em",
              lineHeight:    1.08,
              color:         "#FFFFFF",
              marginBottom:  "28px",
            }}
          >
            Research Before Execution.
          </motion.h2>

          {/* Subheadline block */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            style={{ maxWidth: "520px", margin: "0 auto" }}
          >
            <p
              style={{
                fontSize:   "15px",
                color:      "#2E4458",
                lineHeight: 1.72,
                marginBottom: "20px",
              }}
            >
              Every signal is part of a larger process.
            </p>

            {/* Process list */}
            <div
              style={{
                display:       "flex",
                flexDirection: "column",
                gap:           "6px",
                marginBottom:  "20px",
              }}
            >
              {["Playback.", "Historical review.", "Parameter exploration.", "Execution refinement."].map(item => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2.5"
                  style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      "10px",
                    letterSpacing: "0.12em",
                    color:         "#1E3548",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      display:      "inline-block",
                      width:        3,
                      height:       3,
                      borderRadius: "50%",
                      background:   "rgba(6,182,212,0.25)",
                      flexShrink:   0,
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize:   "14px",
                color:      "#243542",
                lineHeight: 1.72,
              }}
            >
              The system is continuously studied and improved before it reaches the trader.
            </p>
          </motion.div>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.08 + i * 0.07 }}
              className="group relative"
              style={{
                background:   "#060C15",
                border:       "1px solid rgba(18,32,50,0.95)",
                borderRadius: "12px",
                padding:      "30px 30px 34px",
                overflow:     "hidden",
              }}
            >
              {/* Hairline top accent — barely visible */}
              <div
                aria-hidden="true"
                style={{
                  position:   "absolute",
                  top:        0,
                  left:       "25%",
                  right:      "25%",
                  height:     "1px",
                  background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.12), transparent)",
                }}
              />

              {/* Icon box */}
              <div
                style={{
                  width:           34,
                  height:          34,
                  borderRadius:    "8px",
                  border:          "1px solid rgba(20,40,62,0.9)",
                  background:      "rgba(6,182,212,0.04)",
                  display:         "flex",
                  alignItems:      "center",
                  justifyContent:  "center",
                  marginBottom:    "22px",
                  color:           "#1E4A5E",
                  transition:      "color 0.3s ease, border-color 0.3s ease",
                }}
                className="group-hover:[&]:!border-[rgba(6,182,212,0.18)] group-hover:[&]:!text-[#2A7A96]"
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize:      "15px",
                  fontWeight:    600,
                  color:         "#C2CDD8",
                  letterSpacing: "-0.01em",
                  lineHeight:    1.3,
                  marginBottom:  "12px",
                }}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize:   "13px",
                  color:      "#253547",
                  lineHeight: 1.78,
                }}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Pull quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.12 }}
          className="mt-20 text-center"
        >
          {/* Rule above */}
          <div
            aria-hidden="true"
            style={{
              width:      "48px",
              height:     "1px",
              background: "rgba(6,182,212,0.15)",
              margin:     "0 auto 28px",
            }}
          />

          <blockquote>
            <p
              style={{
                fontSize:      "clamp(17px, 1.8vw, 22px)",
                fontWeight:    300,
                color:         "#364B5C",
                letterSpacing: "-0.01em",
                lineHeight:    1.5,
                fontStyle:     "italic",
              }}
            >
              &ldquo;Great execution begins long before the trade.&rdquo;
            </p>
          </blockquote>
        </motion.div>

      </div>
    </section>
  );
}
