import { useId } from "react";

// ─────────────────────────────────────────────────────────────────────────────
//  SPY PIVOT PRO — BRAND MARK
//  The pullback-V: approach → pivot low → bounce → runner re-entry → breakout
//  This shape IS the trade setup the system detects.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * SPYPivotMark — the canonical SPY Pivot Pro logo mark.
 * Rounded-square badge containing the pivot-point glyph: a wedge balanced on
 * a single point — literally what a pivot point is (a calculated level where
 * price turns). Flat, single-color, deliberately restrained rather than
 * glowing — matches the Fortitud tree's flat-ink treatment.
 * Static (no animation). Works at 24px–400px.
 */
export function SPYPivotMark({
  size = 200,
  color = "#C1FF72",
  badge = true,
}: {
  size?: number;
  color?: string;
  badge?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SPY Pivot Pro"
    >
      {/* ── Badge background (small-icon contexts only) ── */}
      {badge && (
        <>
          <rect x="2" y="2" width="196" height="196" rx="36" fill="#070b05" />
          <rect x="2" y="2" width="196" height="196" rx="36"
            stroke={color} strokeWidth="1.5" strokeOpacity="0.35" fill="none" />
        </>
      )}

      {/* ── Pivot wedge, balanced on its point ── */}
      <path
        d="M100.00,156.00 L52.76,70.26 Q46.00,58.00 59.30,53.64 L142.70,26.36 Q156.00,22.00 150.60,34.92 Z"
        fill={color}
      />
      <circle cx="100" cy="168" r="10.8" fill={color} />
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
            color:         "#8FBF52",
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
 * No badge frame — just the pivot wedge on near-black.
 * Use for: browser tab, app icon, 32px contexts.
 */
export function SPYPivotFavicon({ size = 32, color = "#C1FF72" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SPY Pivot Pro"
    >
      {/* Dark bg */}
      <rect width="32" height="32" rx="7" fill="#070b05" />

      {/* Pivot wedge, balanced on its point */}
      <path
        d="M15.84,25.17 L8.04,11.03 Q6.93,9.00 9.12,8.28 L22.88,3.78 Q25.08,3.06 24.18,5.20 Z"
        fill={color}
      />
      <circle cx="15.84" cy="27.15" r="1.78" fill={color} />
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
          <stop offset="30%"  stopColor="#C1FF72" />
          <stop offset="62%"  stopColor="#C1FF72" />
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
      <rect width="40" height="40" rx="8" fill="#070b05" />
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="7.5" stroke="#C1FF72" strokeWidth="1" strokeOpacity="0.45" fill="none" />
      <circle cx="15" cy="31" r="7" fill="#C1FF72" filter={`url(#spppg${uid})`} style={{ animation: `sppglow${uid} 2.6s ease-in-out infinite 1.3s` }} />
      <polyline points="5,24 15,31 32,8" stroke={`url(#sppg${uid})`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} fill="none" filter={`url(#spplg${uid})`} opacity="0.48" style={{ animation: `sppdraw${uid} 0.88s cubic-bezier(0.4,0,0.2,1) both` }} />
      <polyline points="5,24 15,31 32,8" stroke={`url(#sppg${uid})`} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} fill="none" style={{ animation: `sppdraw${uid} 0.88s cubic-bezier(0.4,0,0.2,1) both` }} />
      <g filter={`url(#sppsg${uid})`} style={{ transformBox:"fill-box", transformOrigin:"center", animation: `sppstar${uid} 0.48s cubic-bezier(0.34,1.56,0.64,1) 0.8s both, spppulse${uid} 2.6s ease-in-out infinite 1.5s` }}>
        <circle cx="32" cy="8" r="5.5" fill="#C1FF72" opacity="0.18" />
        <path d="M32,4.5 L32.42,6.98 L34.47,5.53 L33.02,7.58 L35.5,8 L33.02,8.42 L34.47,10.47 L32.42,9.02 L32,11.5 L31.58,9.02 L29.53,10.47 L30.98,8.42 L28.5,8 L30.98,7.58 L29.53,5.53 L31.58,6.98 Z" fill="#C1FF72" />
        <circle cx="32" cy="8" r="1.25" fill="white" opacity="0.96" />
      </g>
    </svg>
  );
}


/**
 * Fortitud Capital oak tree — recolor filter over a pre-cut transparent PNG.
 * (Previously chroma-keyed off the flat-background source at runtime; the
 * source is now pre-cut with proper alpha, so this just tints RGB and passes
 * the real alpha channel through unchanged — more robust than deriving
 * transparency from the green channel.)
 */
export function FortitudTree({ size = 40, color = "#C1FF72" }: { size?: number; color?: string }) {
  const uid = useId().replace(/[^a-z0-9]/gi, "");
  const hex = color.replace("#", "");
  const r   = parseInt(hex.slice(0, 2), 16) / 255;
  const g   = parseInt(hex.slice(2, 4), 16) / 255;
  const b   = parseInt(hex.slice(4, 6), 16) / 255;
  const matrix = [
    `0 0 0 0 ${r.toFixed(4)}`,
    `0 0 0 0 ${g.toFixed(4)}`,
    `0 0 0 0 ${b.toFixed(4)}`,
    `0 0 0 1 0`,
  ].join("  ");

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" overflow="visible">
      <defs>
        <filter id={`fc-tint-${uid}`} x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values={matrix} />
        </filter>
      </defs>
      <image href="/images/fortitud-tree.png" x="0" y="0" width="100" height="100"
        preserveAspectRatio="xMidYMid meet" filter={`url(#fc-tint-${uid})`} />
    </svg>
  );
}


/**
 * FortitudTreeSimple — flattened silhouette for small sizes (nav, favicon-
 * adjacent contexts). The full FortitudTree's dappled leaf-gap texture reads
 * as foliage at large size but collapses into an indistinct blob under
 * ~24px; this variant fills those internal gaps so only the tree's outer
 * silhouette (canopy + trunk + base) carries the shape, which stays legible
 * all the way down to ~12px.
 */
export function FortitudTreeSimple({ size = 16, color = "#C1FF72" }: { size?: number; color?: string }) {
  const uid = useId().replace(/[^a-z0-9]/gi, "");
  const hex = color.replace("#", "");
  const r   = parseInt(hex.slice(0, 2), 16) / 255;
  const g   = parseInt(hex.slice(2, 4), 16) / 255;
  const b   = parseInt(hex.slice(4, 6), 16) / 255;
  const matrix = [
    `0 0 0 0 ${r.toFixed(4)}`,
    `0 0 0 0 ${g.toFixed(4)}`,
    `0 0 0 0 ${b.toFixed(4)}`,
    `0 0 0 1 0`,
  ].join("  ");

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true" overflow="visible">
      <defs>
        <filter id={`fcs-tint-${uid}`} x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values={matrix} />
        </filter>
      </defs>
      <image href="/images/fortitud-tree-simple.png" x="0" y="0" width="100" height="100"
        preserveAspectRatio="xMidYMid meet" filter={`url(#fcs-tint-${uid})`} />
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
      <FortitudTreeSimple size={treeSize} color="#C1FF72" />
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
      <div style={{ filter: "drop-shadow(0 0 8px rgba(193,255,114,0.40))" }}>
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
          style={{ color: "#8FBF52", fontFamily: "var(--font-sans)" }}
        >
          Institutional Trading Research
        </span>
      </div>
    </div>
  );
}
