"use client";
import { motion } from "framer-motion";

const FADE = (delay = 0) => ({
  initial:    { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport:   { once: true },
  transition: { duration: 1.4, ease: [0.4, 0, 0.2, 1] as const, delay },
});

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden"
      style={{
        background:    "#030608",
        paddingTop:    "160px",
        paddingBottom: "160px",
      }}
    >
      {/* Barely-there center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 45% 60% at 50% 40%, rgba(6,182,212,0.04) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 mx-auto px-6"
        style={{ maxWidth: "680px" }}
      >

        {/* ── Opening hairline ── */}
        <motion.div
          {...FADE(0)}
          aria-hidden="true"
          style={{
            width:        "32px",
            height:       "1px",
            background:   "rgba(6,182,212,0.18)",
            margin:       "0 auto 72px",
          }}
        />

        {/* ── The quote ── */}
        <motion.blockquote
          {...FADE(0.1)}
          style={{ margin: "0 0 96px", textAlign: "center" }}
        >
          <p
            style={{
              fontSize:      "clamp(30px, 4.8vw, 68px)",
              fontWeight:    300,
              letterSpacing: "-0.025em",
              lineHeight:    1.15,
              color:         "rgba(255,255,255,0.55)",
              marginBottom:  "0.18em",
            }}
          >
            &ldquo;We don&rsquo;t chase signals.
          </p>
          <p
            style={{
              fontSize:      "clamp(30px, 4.8vw, 68px)",
              fontWeight:    300,
              letterSpacing: "-0.025em",
              lineHeight:    1.15,
              color:         "rgba(255,255,255,0.82)",
            }}
          >
            We build understanding.&rdquo;
          </p>
        </motion.blockquote>

        {/* ── Markets reward discipline ── */}
        <motion.p
          {...FADE(0.25)}
          style={{
            fontSize:      "clamp(18px, 2.2vw, 26px)",
            fontWeight:    400,
            letterSpacing: "-0.01em",
            color:         "rgba(255,255,255,0.48)",
            marginBottom:  "28px",
            textAlign:     "center",
          }}
        >
          Markets reward discipline.
        </motion.p>

        {/* ── Not noise / emotion / prediction ── */}
        <motion.div
          {...FADE(0.35)}
          style={{
            textAlign:     "center",
            marginBottom:  "72px",
            display:       "flex",
            flexDirection: "column",
            gap:           "10px",
          }}
        >
          {["Not noise.", "Not emotion.", "Not prediction."].map((line, i) => (
            <p
              key={line}
              style={{
                fontSize:      "clamp(14px, 1.4vw, 17px)",
                fontWeight:    400,
                letterSpacing: "0.01em",
                color:         `rgba(255, 255, 255, ${0.20 - i * 0.06})`,
                lineHeight:    1.6,
              }}
            >
              {line}
            </p>
          ))}
        </motion.div>

        {/* ── Body paragraphs ── */}
        <motion.div
          {...FADE(0.45)}
          style={{
            display:       "flex",
            flexDirection: "column",
            gap:           "22px",
            marginBottom:  "80px",
            textAlign:     "center",
          }}
        >
          <p
            style={{
              fontSize:   "clamp(14px, 1.3vw, 16px)",
              color:      "rgba(255,255,255,0.28)",
              lineHeight: 1.80,
            }}
          >
            SPY Pivot Pro was built around research, structure, and continuous refinement.
          </p>
          <p
            style={{
              fontSize:   "clamp(14px, 1.3vw, 16px)",
              color:      "rgba(255,255,255,0.22)",
              lineHeight: 1.80,
            }}
          >
            An operating system designed to help traders think more clearly, study more
            deeply, and execute with greater confidence.
          </p>
        </motion.div>

        {/* ── Closing hairline ── */}
        <motion.div
          {...FADE(0.55)}
          aria-hidden="true"
          style={{
            width:        "1px",
            height:       "48px",
            background:   "linear-gradient(180deg, rgba(6,182,212,0.12) 0%, transparent 100%)",
            margin:       "0 auto 44px",
          }}
        />

        {/* ── Brand lockup ── */}
        <motion.div
          {...FADE(0.62)}
          style={{
            textAlign:     "center",
            display:       "flex",
            flexDirection: "column",
            gap:           "7px",
          }}
        >
          <p
            style={{
              fontSize:      "17px",
              fontWeight:    600,
              letterSpacing: "-0.02em",
              color:         "rgba(255,255,255,0.09)",
            }}
          >
            SPY Pivot Pro
          </p>
          <p
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color:         "rgba(255,255,255,0.06)",
            }}
          >
            The Operating System for SPY Options Traders
          </p>
          <p
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "8px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color:         "rgba(255,255,255,0.04)",
              marginTop:     "3px",
            }}
          >
            by Fortitud Capital
          </p>
        </motion.div>

      </div>
    </section>
  );
}
