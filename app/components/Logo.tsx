import { useId } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  SPY PIVOT PRO — BRAND MARK
//  The pullback-V: approach → pivot low → bounce → runner re-entry → breakout
//  This shape IS the trade setup the system detects.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * SPYPivotMark — the canonical SPY Pivot Pro logo mark.
 * Rounded-square badge containing the pullback-V chart pattern:
 *   approach decline → sharp pivot low (dot) → bounce → runner re-entry (dot) → breakout (glow)
 * Static (no animation). Works at 24px–400px.
 */
export function SPYPivotMark({ size = 200 }: { size?: number }) {
  const uid = useId().replace(/[^a-z0-9]/gi, "");

  // 6-point pattern path (in 200×200 viewBox):
  //   P1(20,72)  → approach from left, mild descent
  //   P2(50,94)  → continued slope
  //   P3(80,158) → PIVOT LOW — touches support (marked with white-center dot)
  //   P4(108,96) → initial bounce (big recovery move)
  //   P5(126,115)→ RUNNER RE-ENTRY pullback (higher low — the second entry)
  //   P6(180,20) → BREAKOUT continuation (blazing tip)
  const pts = "20,72 50,94 80,158 108,96 126,115 180,20";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SPY Pivot Pro"
    >
      <defs>
        {/* Line gradient — dark teal entry → blazing bright breakout */}
        <linearGradient id={`pm-lg-${uid}`} x1="20" y1="0" x2="180" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#031e26" />
          <stop offset="22%"  stopColor="#0891B2" />
          <stop offset="50%"  stopColor="#06B6D4" />
          <stop offset="78%"  stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#cff9fe" />
        </linearGradient>

        {/* Badge border — gradient sweep */}
        <linearGradient id={`pm-bg-${uid}`} x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#06B6D4" stopOpacity="0.55" />
          <stop offset="45%"  stopColor="#06B6D4" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.40" />
        </linearGradient>

        {/* Line bloom glow */}
        <filter id={`pm-fl-${uid}`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Dot halo glow */}
        <filter id={`pm-fd-${uid}`} x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>

        {/* Breakout ambient bloom */}
        <filter id={`pm-ft-${uid}`} x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>

      {/* ── Badge background ── */}
      <rect x="2" y="2" width="196" height="196" rx="36" fill="#06090f" />
      <rect x="2" y="2" width="196" height="196" rx="36"
        stroke={`url(#pm-bg-${uid})`} strokeWidth="1.5" fill="none" />

      {/* ── Quant grid — barely visible ── */}
      {[62, 95, 128].map(y => (
        <line key={y} x1="16" y1={y} x2="184" y2={y}
          stroke="#06B6D4" strokeOpacity="0.055" strokeWidth="1" />
      ))}

      {/* ── Support / pivot level — dashed horizontal at y=158 ── */}
      <line x1="16" y1="158" x2="184" y2="158"
        stroke="#06B6D4" strokeOpacity="0.20" strokeWidth="1"
        strokeDasharray="3 5" />

      {/* ── Pivot-moment vertical tick ── */}
      <line x1="80" y1="140" x2="80" y2="185"
        stroke="#06B6D4" strokeOpacity="0.14" strokeWidth="1"
        strokeDasharray="2 4" />

      {/* ── Pattern line — bloom layer ── */}
      <polyline
        points={pts}
        stroke={`url(#pm-lg-${uid})`}
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.20"
        filter={`url(#pm-fl-${uid})`}
      />

      {/* ── Pattern line — crisp layer ── */}
      <polyline
        points={pts}
        stroke={`url(#pm-lg-${uid})`}
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ── Pivot low dot — the critical inflection ── */}
      <circle cx="80" cy="158" r="9"  fill="#0891B2" opacity="0.25" filter={`url(#pm-fd-${uid})`} />
      <circle cx="80" cy="158" r="5"  fill="#06B6D4" />
      <circle cx="80" cy="158" r="2.2" fill="white"  opacity="0.95" />

      {/* ── Runner re-entry dot — the second chance ── */}
      <circle cx="126" cy="115" r="6"  fill="#22D3EE" opacity="0.22" filter={`url(#pm-fd-${uid})`} />
      <circle cx="126" cy="115" r="3.5" fill="#22D3EE" />
      <circle cx="126" cy="115" r="1.6" fill="white"  opacity="0.90" />

      {/* ── Breakout tip — blazing glow ── */}
      <circle cx="180" cy="20" r="28" fill="#22D3EE" opacity="0.07" filter={`url(#pm-ft-${uid})`} />
      <circle cx="180" cy="20" r="7"  fill="#cff9fe"  opacity="0.20" filter={`url(#pm-fd-${uid})`} />
      <circle cx="180" cy="20" r="4.5" fill="#cff9fe" />
      <circle cx="180" cy="20" r="2"   fill="white"   opacity="0.98" />
    </svg>
  );
}


/**
 * SPYPivotLogo — full horizontal lockup.
 * SPYPivotMark badge + "SPY PIVOT PRO" wordmark + tagline.
 * Use for hero, about pages, presentations, social OG images.
 */
export function SPYPivotLogo({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const markPx  = { sm: 40,  md: 56,  lg: 72,  xl: 100 }[size];
  const namePx  = { sm: "14px", md: "19px", lg: "25px", xl: "34px" }[size];
  const tagPx   = { sm: "9px",  md: "11px", lg: "13.5px", xl: "18px" }[size];
  const gapPx   = { sm: 12, md: 16, lg: 20, xl: 28 }[size];
  const tagMt   = { sm: "4px", md: "6px", lg: "7px", xl: "9px" }[size];

  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center", gap: gapPx }}
    >
      <SPYPivotMark size={markPx} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span
          style={{
            fontSize:      namePx,
            fontWeight:    800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color:         "#F0F4F8",
            fontFamily:    "var(--font-mono, 'IBM Plex Mono', monospace)",
          }}
        >
          SPY Pivot Pro
        </span>
        <span
          style={{
            fontSize:      tagPx,
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color:         "#5EC8DE",
            fontFamily:    "var(--font-sans, 'IBM Plex Sans', sans-serif)",
            marginTop:     tagMt,
          }}
        >
          Institutional Trading Research
        </span>
      </div>
    </div>
  );
}


/**
 * SPYPivotFavicon — simplified 32×32 mark.
 * No badge frame — just the pullback-V pattern on near-black.
 * Use for: browser tab, app icon, 32px contexts.
 */
export function SPYPivotFavicon({ size = 32 }: { size?: number }) {
  const uid = useId().replace(/[^a-z0-9]/gi, "");
  // Simplified 4-point path scaled to 32×32 viewBox
  // approach → pivot low → re-entry → breakout
  const pts = "3,13 11,22 18,10 28,2";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SPY Pivot Pro"
    >
      <defs>
        <linearGradient id={`fav-g-${uid}`} x1="3" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#0891B2" />
          <stop offset="60%"  stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#cff9fe" />
        </linearGradient>
      </defs>

      {/* Dark bg */}
      <rect width="32" height="32" rx="7" fill="#06090f" />

      {/* Pattern line */}
      <polyline
        points={pts}
        stroke={`url(#fav-g-${uid})`}
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Pivot low dot */}
      <circle cx="11" cy="22" r="1.8" fill="#06B6D4" />
      <circle cx="11" cy="22" r="0.9" fill="white" opacity="0.95" />

      {/* Breakout tip */}
      <circle cx="28" cy="2"  r="2.2" fill="#cff9fe" />
      <circle cx="28" cy="2"  r="1"   fill="white"   opacity="0.98" />
    </svg>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
//  LEGACY / SUPPORTING COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Original animated V-pivot mark — kept for backward compatibility */
export function LogoMark({ size = 32 }: { size?: number }) {
  const uid  = useId().replace(/[^a-z0-9]/gi, "");
  const dash = 42;

  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <style>{`
          @keyframes sppdraw${uid} { from { stroke-dashoffset: ${dash}; } to { stroke-dashoffset: 0; } }
          @keyframes sppstar${uid} { 0% { opacity:0; transform:scale(0.15); } 68% { opacity:1; transform:scale(1.22); } 100% { opacity:1; transform:scale(1); } }
          @keyframes spppulse${uid} { 0%,100% { transform:scale(1); } 50% { transform:scale(1.1); } }
          @keyframes sppglow${uid}  { 0%,100% { opacity:0.1; } 50% { opacity:0.32; } }
        `}</style>
        <linearGradient id={`sppg${uid}`} x1="5" y1="24" x2="32" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#063B47" />
          <stop offset="30%"  stopColor="#06B6D4" />
          <stop offset="62%"  stopColor="#F0B429" />
          <stop offset="100%" stopColor="#FFE082" />
        </linearGradient>
        <filter id={`spplg${uid}`} x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
        <filter id={`sppsg${uid}`} x="-220%" y="-220%" width="540%" height="540%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.8" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id={`spppg${uid}`} x="-350%" y="-350%" width="800%" height="800%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>
      <rect width="40" height="40" rx="8" fill="#0D1520" />
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="7.5" stroke="#06B6D4" strokeWidth="1" strokeOpacity="0.45" fill="none" />
      <circle cx="15" cy="31" r="7" fill="#F0B429" filter={`url(#spppg${uid})`} style={{ animation: `sppglow${uid} 2.6s ease-in-out infinite 1.3s` }} />
      <polyline points="5,24 15,31 32,8" stroke={`url(#sppg${uid})`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} fill="none" filter={`url(#spplg${uid})`} opacity="0.48" style={{ animation: `sppdraw${uid} 0.88s cubic-bezier(0.4,0,0.2,1) both` }} />
      <polyline points="5,24 15,31 32,8" stroke={`url(#sppg${uid})`} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} fill="none" style={{ animation: `sppdraw${uid} 0.88s cubic-bezier(0.4,0,0.2,1) both` }} />
      <g filter={`url(#sppsg${uid})`} style={{ transformBox:"fill-box", transformOrigin:"center", animation: `sppstar${uid} 0.48s cubic-bezier(0.34,1.56,0.64,1) 0.8s both, spppulse${uid} 2.6s ease-in-out infinite 1.5s` }}>
        <circle cx="32" cy="8" r="5.5" fill="#F0B429" opacity="0.18" />
        <path d="M32,4.5 L32.42,6.98 L34.47,5.53 L33.02,7.58 L35.5,8 L33.02,8.42 L34.47,10.47 L32.42,9.02 L32,11.5 L31.58,9.02 L29.53,10.47 L30.98,8.42 L28.5,8 L30.98,7.58 L29.53,5.53 L31.58,6.98 Z" fill="#F0B429" />
        <circle cx="32" cy="8" r="1.25" fill="white" opacity="0.96" />
      </g>
    </svg>
  );
}


/** Fortitud Capital oak tree — SVG chroma-key filter over the real PNG */
export function FortitudTree({ size = 40, color = "#F0B429" }: { size?: number; color?: string }) {
  const hex = color.replace("#", "");
  const r   = parseInt(hex.slice(0, 2), 16) / 255;
  const g   = parseInt(hex.slice(2, 4), 16) / 255;
  const b   = parseInt(hex.slice(4, 6), 16) / 255;
  const matrix = [
    `0 0 0 0 ${r.toFixed(4)}`,
    `0 0 0 0 ${g.toFixed(4)}`,
    `0 0 0 0 ${b.toFixed(4)}`,
    `-0.1 -0.914 -0.1 0 1`,
  ].join("  ");

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" overflow="visible">
      <defs>
        <filter id="fc-chroma-key" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values={matrix} />
        </filter>
      </defs>
      <image href="/images/fortitud-capital.png" x="0" y="0" width="100" height="100"
        preserveAspectRatio="xMidYMid meet" filter="url(#fc-chroma-key)" />
    </svg>
  );
}


/** Fortitud Capital full lockup: oak tree + wordmark */
export function FortitudLogo({ size = "sm", className = "" }: { size?: "xs" | "sm" | "md"; className?: string }) {
  const treeSize = size === "md" ? 36 : size === "sm" ? 28 : 22;
  const nameSize = size === "md" ? "text-[12px]" : size === "sm" ? "text-[11px]" : "text-[10px]";
  const tagSize  = size === "md" ? "text-[9px]"  : "text-[8px]";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <FortitudTree size={treeSize} color="#F0B429" />
      <div className="flex flex-col leading-none">
        <span className={`${nameSize} font-semibold tracking-[0.14em] text-amber-400/80 uppercase`} style={{ fontFamily: "var(--font-mono, monospace)" }}>
          Fortitud Capital
        </span>
        <span className={`${tagSize} tracking-[0.2em] uppercase mt-[3px] text-slate-600`} style={{ fontFamily: "var(--font-sans)" }}>
          Quantitative Research
        </span>
      </div>
    </div>
  );
}


/** Nav lockup — SPYPivotMark badge + wordmark + tagline */
export function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const mark  = size === "lg" ? 44  : size === "sm" ? 28  : 32;
  const title = size === "lg" ? "text-[15px]" : "text-[13px]";
  const sub   = size === "lg" ? "text-[10px]" : "text-[9px]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div style={{ filter: "drop-shadow(0 0 8px rgba(6,182,212,0.45))" }}>
        <SPYPivotMark size={mark} />
      </div>
      <div className="flex flex-col leading-none">
        <span
          className={`${title} font-bold tracking-[0.18em] uppercase`}
          style={{ color: "#FFFFFF", fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)", textShadow: "0 0 20px rgba(255,255,255,0.15)" }}
        >
          SPY PIVOT PRO
        </span>
        <span
          className={`${sub} tracking-[0.22em] uppercase mt-[4px]`}
          style={{ color: "#5EC8DE", fontFamily: "var(--font-sans)" }}
        >
          Institutional Trading Research
        </span>
      </div>
    </div>
  );
}
