"use client";
import { motion } from "framer-motion";

export function CinematicBreak() {
  return (
    <section className="relative overflow-hidden" style={{ height: "65vh", minHeight: "420px" }}>
      {/* Cinematic video — autoplay, muted, looped */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover", objectPosition: "center 30%" }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Darkening gradient — cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #050810 0%, rgba(5,8,16,0.45) 30%, rgba(5,8,16,0.45) 70%, #050810 100%)",
        }}
      />

      {/* Subtle teal scan-line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.015) 2px, rgba(6,182,212,0.015) 4px)",
        }}
      />

      {/* Content — revealed on scroll */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 border border-[rgba(6,182,212,0.25)] bg-[rgba(6,182,212,0.06)] px-4 py-1.5 rounded-full backdrop-blur-sm"
            style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.3em", color: "#5EC8DE", textTransform: "uppercase" }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#06B6D4", boxShadow: "0 0 6px rgba(6,182,212,0.8)", display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
            Fortitud Capital · SPY Pivot Pro
          </div>

          {/* Main text */}
          <h2
            style={{
              fontFamily:    "var(--font-sans)",
              fontSize:      "clamp(28px, 5vw, 56px)",
              fontWeight:    800,
              letterSpacing: "-0.02em",
              lineHeight:    1.1,
              color:         "#FFFFFF",
              textShadow:    "0 0 60px rgba(6,182,212,0.25)",
            }}
          >
            The moment before<br />
            <span
              style={{
                background:           "linear-gradient(110deg, #FFFFFF 30%, #06B6D4 55%, #FFFFFF 80%)",
                backgroundSize:       "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
                backgroundClip:       "text",
                animation:            "shimmer-sweep 4s linear infinite",
              }}
            >
              precision fires.
            </span>
          </h2>

          {/* Separator */}
          <div
            style={{
              width:      "80px",
              height:     "1px",
              background: "linear-gradient(90deg, transparent, #06B6D4, transparent)",
              boxShadow:  "0 0 12px rgba(6,182,212,0.6)",
            }}
          />

          {/* Sub copy */}
          <p
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      "11px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color:         "#C8D8E8",
              maxWidth:      "380px",
              lineHeight:    1.8,
            }}
          >
            Seven intelligence modules. One decision.<br />
            Every session. No emotion. No guesswork.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
