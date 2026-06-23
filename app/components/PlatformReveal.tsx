"use client";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const PANELS = [
  {
    num:      "01",
    title:    "MTF Alignment",
    desc:     "The system evaluates structure across multiple timeframes to identify alignment before execution.",
    chromeLabel: "Multi-Timeframe Alignment Engine",
    badge: { text: "3 TIMEFRAMES · ALIGNED", corner: "tr" },
    hairline: "linear-gradient(90deg, transparent 4%, rgba(6,182,212,0.55) 36%, rgba(34,211,238,0.30) 64%, transparent 96%)",
    glowTL:   "rgba(6,182,212,0.10)",
    glowBR:   "rgba(34,211,238,0.05)",
    dotColor: "#06B6D4",
    badgeColor: "rgba(6,182,212,0.14)",
    badgeBorder: "rgba(6,182,212,0.18)",
    badgeText: "#3EB8CC",
  },
  {
    num:      "02",
    title:    "Eligibility Engine",
    desc:     "Every setup must satisfy a structured set of conditions before execution is considered.",
    chromeLabel: "Eligibility & Confluence Engine",
    badge: { text: "CONDITIONS MET · ELIGIBLE", corner: "tl" },
    hairline: "linear-gradient(90deg, transparent 4%, rgba(16,185,129,0.40) 36%, rgba(6,182,212,0.25) 64%, transparent 96%)",
    glowTL:   "rgba(16,185,129,0.07)",
    glowBR:   "rgba(6,182,212,0.06)",
    dotColor: "#10B981",
    badgeColor: "rgba(16,185,129,0.12)",
    badgeBorder: "rgba(16,185,129,0.18)",
    badgeText: "#34A87A",
  },
  {
    num:      "03",
    title:    "Supply & Demand",
    desc:     "Market structure is visualized through adaptive supply and demand zones designed to provide context before execution.",
    chromeLabel: "Supply & Demand Structure Engine",
    badge: { text: "ZONE ACTIVE · REACTION CONFIRMED", corner: "br" },
    hairline: "linear-gradient(90deg, transparent 4%, rgba(16,185,129,0.55) 36%, rgba(16,185,129,0.28) 64%, transparent 96%)",
    glowTL:   "rgba(16,185,129,0.09)",
    glowBR:   "rgba(6,182,212,0.04)",
    dotColor: "#10B981",
    badgeColor: "rgba(16,185,129,0.10)",
    badgeBorder: "rgba(16,185,129,0.16)",
    badgeText: "#2E9068",
  },
  {
    num:      "04",
    title:    "Execution Framework",
    desc:     "Trade plans are built around structure, discipline, and controlled execution.",
    chromeLabel: "Execution & Trade Planning Framework",
    badge: { text: "ENTRY · TARGET · STOP DEFINED", corner: "bl" },
    hairline: "linear-gradient(90deg, transparent 4%, rgba(6,182,212,0.40) 36%, rgba(99,130,200,0.25) 64%, transparent 96%)",
    glowTL:   "rgba(6,182,212,0.07)",
    glowBR:   "rgba(99,130,200,0.07)",
    dotColor: "#7A9AE0",
    badgeColor: "rgba(99,130,200,0.10)",
    badgeBorder: "rgba(99,130,200,0.16)",
    badgeText: "#7A9AE0",
  },
] as const;

const BADGE_POS: Record<string, React.CSSProperties> = {
  tr: { top:    "18px", right:  "18px" },
  tl: { top:    "18px", left:   "18px" },
  br: { bottom: "60px", right:  "18px" },
  bl: { bottom: "60px", left:   "18px" },
};

function PanelChrome({ label, dot }: { label: string; dot: string }) {
  return (
    <div
      style={{
        display:        "flex",
        alignItems:     "center",
        gap:            "6px",
        padding:        "10px 20px",
        borderBottom:   "1px solid rgba(6,182,212,0.06)",
        background:     "linear-gradient(180deg, #020508 0%, #030810 100%)",
        flexShrink:     0,
      }}
    >
      <div style={{ width: 9,  height: 9,  borderRadius: "50%", background: "#F87171", opacity: 0.35 }} />
      <div style={{ width: 9,  height: 9,  borderRadius: "50%", background: "#D4A840", opacity: 0.35 }} />
      <div style={{ width: 9,  height: 9,  borderRadius: "50%", background: "#10B981", opacity: 0.35 }} />
      <div style={{ flex: 1 }} />
      <span
        style={{
          fontFamily:    "var(--font-mono)",
          fontSize:      "8px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color:         "#0B1E2C",
        }}
      >
        {label}
      </span>
      <div style={{ width: 5, height: 5, borderRadius: "50%", background: dot, boxShadow: `0 0 6px ${dot}` }} />
      <div style={{ flex: 1 }} />
    </div>
  );
}

export function PlatformReveal() {
  return (
    <section
      id="inside"
      className="relative overflow-hidden"
      style={{ background: "#030608", paddingTop: "120px", paddingBottom: "140px" }}
    >
      {/* Very faint ambient center */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(6,182,212,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10">

        {/* ── Section intro ── */}
        <div className="text-center mb-28 px-4">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-5"
          >
            <span
              style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      "9px",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color:         "#152535",
              }}
            >
              Inside the Platform
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: EASE, delay: 0.07 }}
            style={{
              fontSize:      "clamp(34px, 5.2vw, 70px)",
              fontWeight:    800,
              letterSpacing: "-0.03em",
              lineHeight:    1.07,
              color:         "#FFFFFF",
              marginBottom:  "22px",
            }}
          >
            The Operating System<br />in Action.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            style={{
              fontSize:   "clamp(14px, 1.3vw, 16px)",
              color:      "#233645",
              lineHeight: 1.72,
              maxWidth:   "540px",
              margin:     "0 auto",
            }}
          >
            SPY Pivot Pro combines research, market structure, adaptive intelligence,
            and execution refinement into a single operating environment.
          </motion.p>
        </div>

        {/* ── Four panels ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "120px" }}>
          {PANELS.map((panel, i) => (
            <motion.div
              key={panel.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.9, ease: EASE }}
              style={{
                maxWidth: "1440px",
                margin:   "0 auto",
                width:    "100%",
                paddingInline: "clamp(16px, 3vw, 48px)",
              }}
            >

              {/* Panel header row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
                style={{
                  display:        "flex",
                  alignItems:     "flex-start",
                  justifyContent: "space-between",
                  gap:            "24px",
                  marginBottom:   "24px",
                  flexWrap:       "wrap",
                }}
              >
                {/* Left: number + title */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                  <span
                    style={{
                      fontFamily:    "var(--font-mono)",
                      fontSize:      "9px",
                      letterSpacing: "0.24em",
                      color:         "#0E2030",
                    }}
                  >
                    {panel.num}
                  </span>
                  <h3
                    style={{
                      fontSize:      "clamp(20px, 2.2vw, 28px)",
                      fontWeight:    700,
                      letterSpacing: "-0.02em",
                      color:         "#B8CDD8",
                    }}
                  >
                    {panel.title}
                  </h3>
                </div>

                {/* Right: description */}
                <p
                  style={{
                    fontSize:   "13px",
                    color:      "#1E3448",
                    lineHeight: 1.75,
                    maxWidth:   "360px",
                    textAlign:  "right",
                  }}
                >
                  {panel.desc}
                </p>
              </motion.div>

              {/* Panel image frame */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.0, ease: EASE, delay: 0.1 }}
                style={{ position: "relative" }}
              >
                {/* Ambient glow beneath */}
                <div
                  aria-hidden="true"
                  style={{
                    position:   "absolute",
                    bottom:     "-50px",
                    left:       "10%",
                    right:      "10%",
                    height:     "80px",
                    background: `radial-gradient(ellipse at 50% 0%, ${panel.glowTL} 0%, transparent 75%)`,
                    filter:     "blur(20px)",
                    zIndex:     0,
                  }}
                />

                {/* Terminal frame */}
                <div
                  style={{
                    position:     "relative",
                    borderRadius: "16px",
                    overflow:     "hidden",
                    border:       "1px solid rgba(6,182,212,0.09)",
                    background:   "#020508",
                    boxShadow: [
                      `0 0 80px ${panel.glowTL}`,
                      `0 0 180px ${panel.glowBR}`,
                      "0 60px 200px rgba(0,0,0,0.92)",
                    ].join(", "),
                    zIndex: 1,
                  }}
                >
                  {/* Top hairline — panel-specific gradient */}
                  <div
                    aria-hidden="true"
                    style={{ height: "1px", background: panel.hairline }}
                  />

                  <PanelChrome label={panel.chromeLabel} dot={panel.dotColor} />

                  {/* Image + overlays */}
                  <div style={{ position: "relative" }}>
                    <img
                      src="/images/terminal-hero.png"
                      alt={`SPY Pivot Pro — ${panel.title}`}
                      style={{ width: "100%", display: "block" }}
                      onError={e => {
                        (e.currentTarget as HTMLImageElement).src = "/images/app_hero.png";
                      }}
                      draggable={false}
                    />

                    {/* Bottom vignette */}
                    <div
                      aria-hidden="true"
                      style={{
                        position:   "absolute",
                        inset:      0,
                        background: "linear-gradient(to bottom, transparent 45%, rgba(2,5,8,0.55) 78%, #020508 100%)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Floating data badge */}
                    <div
                      aria-hidden="true"
                      style={{
                        position:      "absolute",
                        ...BADGE_POS[panel.badge.corner],
                        display:       "inline-flex",
                        alignItems:    "center",
                        gap:           "7px",
                        padding:       "7px 12px",
                        borderRadius:  "6px",
                        background:    `rgba(2,5,8,0.82)`,
                        border:        `1px solid ${panel.badgeBorder}`,
                        backdropFilter: "blur(8px)",
                        pointerEvents: "none",
                      }}
                    >
                      <span
                        style={{
                          display:      "inline-block",
                          width:        4,
                          height:       4,
                          borderRadius: "50%",
                          background:   panel.dotColor,
                          boxShadow:    `0 0 5px ${panel.dotColor}`,
                          flexShrink:   0,
                        }}
                      />
                      <span
                        style={{
                          fontFamily:    "var(--font-mono)",
                          fontSize:      "8px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color:         panel.badgeText,
                          whiteSpace:    "nowrap",
                        }}
                      >
                        {panel.badge.text}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Panel index line — visual separator between panels (not on last) */}
              {i < PANELS.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    height:     "1px",
                    background: "linear-gradient(90deg, transparent, rgba(10,22,38,0.8), transparent)",
                    marginTop:  "80px",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
