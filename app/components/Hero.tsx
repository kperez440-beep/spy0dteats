"use client";
import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { FortitudTree } from "@/app/components/Logo";
import { Lightning } from "@/app/components/ui/Lightning";

// ─────────────────────────────────────────────────────────────────────────────
//  SPY Pivot Pro — Hero Section
//
//  Architecture: 280vh scroll container with sticky 100vh viewport.
//  As the user scrolls through those 280vh:
//    0–40%   → text content (tree + headline) fades up and out
//    15–100% → terminal card stack zooms toward the viewer
//    0–65%   → WebGL lightning dims (atmosphere gives way to terminal)
//    0–100%  → Higgsfield bg gently zooms in (parallax Ken Burns)
//
//  Terminal depth stack: 3 cards (ghost-far, ghost-near, main TiltCard)
// ─────────────────────────────────────────────────────────────────────────────

const EASE = [0.16, 1, 0.3, 1] as const;

const FADE = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0  },
};

function TerminalChrome() {
  return (
    <div
      className="flex items-center gap-1.5 px-4 py-2.5 flex-shrink-0"
      style={{ borderBottom: "1px solid rgba(6,182,212,0.10)", background: "#050a14" }}
    >
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#F87171", opacity: 0.65 }} />
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#D4A840", opacity: 0.65 }} />
      <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#10B981", opacity: 0.65 }} />
      <div className="flex-1" />
      <span style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "9px", letterSpacing: "0.22em",
        color: "#1e4a6e", textTransform: "uppercase",
      }}>
        SPY Pivot Pro · Fortitud Capital
      </span>
      <div className="flex-1" />
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the 280vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth the raw scroll for organic feel
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 22, restDelta: 0.0005 });

  // ── WebGL lightning fades out as terminal takes over ──
  const lightningOp = useTransform(smooth, [0, 0.32, 0.60], [0.18, 0.09, 0.0]);

  // ── Hero text (tree + headline + subtitle + separator) fades up ──
  const contentOp = useTransform(smooth, [0, 0.20, 0.38], [1, 0.45, 0]);
  const contentY  = useTransform(smooth, [0, 0.38],        [0, -80]);

  // ── CTA fades slightly earlier ──
  const ctaOp = useTransform(smooth, [0, 0.15, 0.28], [1, 0.35, 0]);
  const ctaY  = useTransform(smooth, [0, 0.28],        [0, -48]);

  // ── Terminal stack — zoom toward viewer ──
  const terminalScale = useTransform(smooth, [0, 0.45, 1],   [1,    1.18, 1.62]);
  const terminalY     = useTransform(smooth, [0.12, 1],       [0,    -220]);
  const terminalBR    = useTransform(smooth, [0.52, 1],       [12,   0]);
  const terminalGlow  = useTransform(smooth, [0, 0.5, 1], [
    "0 0 0 1px rgba(6,182,212,0.10), 0 0 80px rgba(6,182,212,0.08), 0 60px 150px rgba(0,0,0,0.92)",
    "0 0 0 1px rgba(6,182,212,0.18), 0 0 130px rgba(6,182,212,0.15), 0 80px 200px rgba(0,0,0,0.96)",
    "0 0 60px rgba(6,182,212,0.30), 0 0 220px rgba(6,182,212,0.14), 0 0 0 1px rgba(6,182,212,0.30)",
  ]);

  // ── Ghost cards fade out as main terminal dominates ──
  const back1Op = useTransform(smooth, [0, 0.28, 0.65], [0.30, 0.22, 0]);
  const back2Op = useTransform(smooth, [0, 0.22, 0.50], [0.14, 0.08, 0]);

  // ── Second terminal card — slides up from below on scroll ──
  const card2Y  = useTransform(smooth, [0.12, 0.88], ["78%", "-4%"]);
  const card2Op = useTransform(smooth, [0.14, 0.42], [0, 0.88]);

  // ── Mouse parallax — terminal tilts toward cursor ──
  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const smoothMX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const smoothMY = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const tiltY    = useTransform(smoothMX, [-0.5, 0.5], [-8, 8]);
  const tiltX    = useTransform(smoothMY, [-0.5, 0.5], [5, -5]);

  return (
    // ── Outer: 280vh tall — drives the scroll animation ──
    <div ref={containerRef} style={{ height: "280vh" }}>

      {/* ── Sticky viewport — pins to top during scroll ── */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        onMouseMove={e => {
          const r = e.currentTarget.getBoundingClientRect();
          mouseX.set((e.clientX - r.left) / r.width - 0.5);
          mouseY.set((e.clientY - r.top)  / r.height - 0.5);
        }}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      >

        {/* ── Pure midnight base ── */}
        <div className="absolute inset-0" style={{ background: "#070c18" }} />

        {/* ── WebGL teal lightning — dims on scroll ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: lightningOp, mixBlendMode: "screen" }}
        >
          <Lightning hue={190} speed={0.7} intensity={0.75} size={2.2} xOffset={0} />
        </motion.div>

        {/* ── Teal atmospheric glow ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "40%", left: "50%", transform: "translate(-50%, -50%)",
            width: 1000, height: 600,
            background:
              "radial-gradient(ellipse at center, rgba(6,182,212,0.07) 0%, rgba(30,136,229,0.04) 45%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* ────────────────── CONTENT ────────────────── */}
        <div className="relative z-10 h-full flex flex-col items-center justify-start pt-[88px] pb-10 px-4">

          {/* ── Text block — fades up on scroll ── */}
          <motion.div
            className="flex flex-col items-center text-center gap-3 w-full"
            style={{ opacity: contentOp, y: contentY }}
          >
            {/* Brand mark — tree + Fortitud Capital wordmark */}
            <motion.div
              variants={FADE} initial="hidden" animate="show"
              transition={{ duration: 0.9, ease: EASE }}
              className="relative flex flex-col items-center gap-2.5"
            >
              {/* Dual halo — gold warmth behind tree */}
              <div className="absolute pointer-events-none" style={{
                top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                width: 320, height: 320,
                background: "radial-gradient(ellipse at center, rgba(212,168,64,0.15) 0%, rgba(212,168,64,0.04) 50%, transparent 72%)",
                filter: "blur(36px)",
              }} />

              {/* Clip to tree crown+trunk only — now gold */}
              <div style={{ height: "130px", overflow: "hidden", position: "relative", zIndex: 1 }}>
                <FortitudTree size={220} color="#D4A840" />
              </div>

              {/* FORTITUD CAPITAL — gold shimmer wordmark */}
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
                style={{ filter: "drop-shadow(0 0 14px rgba(212,168,64,0.35))" }}
              >
                <span
                  style={{
                    fontFamily:           "var(--font-mono, 'IBM Plex Mono', monospace)",
                    fontSize:             "13px",
                    fontWeight:           600,
                    letterSpacing:        "0.36em",
                    textTransform:        "uppercase",
                    background:           "linear-gradient(90deg, #A0720A 0%, #D4A840 28%, #F0B429 50%, #FFD878 62%, #D4A840 76%, #A0720A 100%)",
                    backgroundSize:       "220% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor:  "transparent",
                    backgroundClip:       "text",
                    animation:            "shimmer-sweep 5s linear infinite",
                    display:              "block",
                  }}
                >
                  Fortitud Capital
                </span>
              </motion.div>
            </motion.div>

            {/* Brand bridge — gold→teal separator marking the transition from firm to product */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.38 }}
              style={{
                width: "72px", height: "1px",
                background: "linear-gradient(90deg, #D4A840, #06B6D4)",
                boxShadow: "0 0 10px rgba(212,168,64,0.3), 0 0 10px rgba(6,182,212,0.2)",
                transformOrigin: "left center",
              }}
            />

            {/* Headline — shimmer gradient */}
            <motion.h1
              variants={FADE} initial="hidden" animate="show"
              transition={{ duration: 0.85, ease: EASE, delay: 0.10 }}
              className="font-bold leading-none tracking-tight"
              style={{
                fontSize:             "clamp(58px, 10vw, 96px)",
                background:           "linear-gradient(110deg, #FFFFFF 20%, #B8E8FF 38%, #06B6D4 50%, #B8E8FF 62%, #FFFFFF 78%)",
                backgroundSize:       "250% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
                backgroundClip:       "text",
                animation:            "shimmer-sweep 5s linear infinite",
              }}
            >
              SPY Pivot Pro
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={FADE} initial="hidden" animate="show"
              transition={{ duration: 0.65, ease: EASE, delay: 0.18 }}
              style={{
                fontFamily:    "var(--font-sans, 'IBM Plex Sans', sans-serif)",
                fontSize:      "clamp(13px, 1.4vw, 16px)",
                fontWeight:    300,
                letterSpacing: "0.01em",
                color:         "#94B4C8",
                maxWidth:      "480px",
                lineHeight:    1.5,
                textAlign:     "center",
              }}
            >
              The Research Platform for Disciplined SPY Options Traders
            </motion.p>

            {/* Teal separator */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.26 }}
              style={{
                width:      "120px", height: "1px",
                background: "linear-gradient(90deg, transparent, #06B6D4, transparent)",
                boxShadow:  "0 0 12px rgba(6,182,212,0.5)",
              }}
            />
          </motion.div>

          {/* ── Terminal card stack — zooms + mouse-parallax tilt ── */}
          <div style={{ perspective: "1400px" }}>
          <motion.div
            className="relative w-full max-w-[940px] mt-7"
            style={{
              scale:           terminalScale,
              y:               terminalY,
              rotateX:         tiltX,
              rotateY:         tiltY,
              transformOrigin: "top center",
            }}
          >
            {/* ── Ghost card 2 (furthest back) ── */}
            <motion.div
              className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
              style={{
                opacity:   back2Op,
                transform: "translateX(4%) translateY(5%) rotateY(-6deg) rotateZ(1.8deg) scale(0.89)",
                transformStyle: "preserve-3d",
                background: "#0d1528",
                border: "1px solid rgba(6,182,212,0.10)",
                filter: "blur(1.5px)",
              }}
            >
              <TerminalChrome />
              <img
                src="/images/app_hero.png"
                alt=""
                className="w-full block"
                draggable={false}
              />
            </motion.div>

            {/* ── Ghost card 1 (closer) ── */}
            <motion.div
              className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
              style={{
                opacity:   back1Op,
                transform: "translateX(-3.5%) translateY(2.5%) rotateY(5deg) rotateZ(-1.2deg) scale(0.94)",
                transformStyle: "preserve-3d",
                background: "#0d1528",
                border: "1px solid rgba(6,182,212,0.12)",
                filter: "blur(0.5px)",
              }}
            >
              <TerminalChrome />
              <img
                src="/images/app_hero.png"
                alt=""
                className="w-full block"
                draggable={false}
              />
            </motion.div>

            {/* ── Main terminal card ── */}
            <motion.div
              className="relative w-full rounded-xl overflow-hidden"
              style={{
                background:    "#0d1528",
                border:        "1px solid rgba(6,182,212,0.18)",
                boxShadow:     terminalGlow,
                borderRadius:  terminalBR,
              }}
            >
              <TerminalChrome />
              <img
                src="/images/terminal-hero.png"
                alt="SPY Pivot Pro Terminal"
                className="w-full block"
                onError={e => {
                  (e.currentTarget as HTMLImageElement).src = "/images/app_hero.png";
                }}
                draggable={false}
              />
            </motion.div>

            {/* Teal edge glow that intensifies on zoom */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-xl"
              style={{
                opacity: useTransform(smooth, [0.3, 1], [0, 1]),
                boxShadow: "inset 0 0 80px rgba(6,182,212,0.06)",
              }}
            />
          </motion.div>
          </div>{/* /perspective */}

          {/* ── CTA ── */}
          <motion.div
            className="mt-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.52 }}
            style={{ opacity: ctaOp, y: ctaY }}
          >
            <a
              href="#founding"
              className="inline-flex items-center gap-2 font-bold rounded-full cursor-pointer"
              style={{
                background:  "#06B6D4",
                color:       "#070c18",
                fontSize:    "15px",
                padding:     "14px 38px",
                boxShadow:   "0 0 0 1px rgba(6,182,212,0.5), 0 4px 24px rgba(6,182,212,0.2)",
                fontFamily:  "var(--font-sans, 'IBM Plex Sans', sans-serif)",
                transition:  "all 0.2s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background  = "#22D3EE";
                el.style.boxShadow   = "0 0 40px rgba(6,182,212,0.5), 0 0 0 1px rgba(6,182,212,0.9)";
                el.style.transform   = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background  = "#06B6D4";
                el.style.boxShadow   = "0 0 0 1px rgba(6,182,212,0.5), 0 4px 24px rgba(6,182,212,0.2)";
                el.style.transform   = "translateY(0)";
              }}
            >
              Request Founding Access
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

        </div>

        {/* ── Scroll indicator — fades on scroll ── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: useTransform(smooth, [0, 0.12], [1, 0]) }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <span style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "9px", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#2a4a5e",
          }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{
              width: 1, height: 32,
              background: "linear-gradient(180deg, #06B6D4 0%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* ── Second terminal card — slides up from below, shows trade log / bottom view ── */}
        <motion.div
          className="absolute left-1/2 bottom-0 pointer-events-none"
          style={{
            width: "min(780px, 84vw)",
            x: "-50%",
            y: card2Y,
            opacity: card2Op,
            zIndex: 8,
          }}
        >
          {/* Top glow — teal light spilling from card onto scene */}
          <div
            className="absolute -top-8 left-0 right-0 pointer-events-none"
            style={{
              height: "60px",
              background: "linear-gradient(to top, rgba(6,182,212,0.10), transparent)",
              filter: "blur(8px)",
            }}
          />
          <div
            className="w-full overflow-hidden"
            style={{
              background:   "#0a1422",
              border:       "1px solid rgba(6,182,212,0.20)",
              borderBottom: "none",
              borderRadius: "12px 12px 0 0",
              boxShadow:    "0 -8px 60px rgba(6,182,212,0.12), 0 -2px 20px rgba(0,0,0,0.7)",
            }}
          >
            <TerminalChrome />
            <img
              src="/images/terminal-hero.png"
              alt="SPY Pivot Pro — Trade Intelligence"
              className="w-full block"
              style={{ maxHeight: "260px", objectFit: "cover", objectPosition: "center bottom" }}
              onError={e => { (e.currentTarget as HTMLImageElement).src = "/images/app_hero.png"; }}
              draggable={false}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
