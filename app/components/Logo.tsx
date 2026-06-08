import { useId } from "react";

// SPY Pivot Pro — LogoMark: animated V-pivot with teal→gold gradient line + star burst at breakout tip
export function LogoMark({ size = 32 }: { size?: number }) {
  const uid = useId().replace(/[^a-z0-9]/gi, "");

  // Path length: (5,24)→(15,31)→(32,8)
  // seg1 = √((15-5)²+(31-24)²) ≈ 12.2  |  seg2 = √((32-15)²+(8-31)²) ≈ 28.6  |  total ≈ 41
  const dash = 42;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          @keyframes sppdraw${uid} {
            from { stroke-dashoffset: ${dash}; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes sppstar${uid} {
            0%   { opacity: 0; transform: scale(0.15); }
            68%  { opacity: 1; transform: scale(1.22); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes spppulse${uid} {
            0%, 100% { transform: scale(1); }
            50%      { transform: scale(1.1); }
          }
          @keyframes sppglow${uid} {
            0%, 100% { opacity: 0.1; }
            50%      { opacity: 0.32; }
          }
        `}</style>

        {/* Teal → gold gradient along the V-path direction */}
        <linearGradient id={`sppg${uid}`} x1="5" y1="24" x2="32" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#063B47" />
          <stop offset="30%"  stopColor="#06B6D4" />
          <stop offset="62%"  stopColor="#F0B429" />
          <stop offset="100%" stopColor="#FFE082" />
        </linearGradient>

        {/* Blur for line glow bloom */}
        <filter id={`spplg${uid}`} x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>

        {/* Blur+merge for star glow (keeps crisp center visible) */}
        <filter id={`sppsg${uid}`} x="-220%" y="-220%" width="540%" height="540%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Wide spread blur for pivot ambient glow */}
        <filter id={`spppg${uid}`} x="-350%" y="-350%" width="800%" height="800%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>

      {/* Badge */}
      <rect width="40" height="40" rx="8" fill="#0D1520" />
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="7.5"
        stroke="#F0B429" strokeWidth="1" strokeOpacity="0.38" fill="none" />

      {/* Pivot ambient glow — pulses softly at the V bottom */}
      <circle cx="15" cy="31" r="7" fill="#F0B429"
        filter={`url(#spppg${uid})`}
        style={{ animation: `sppglow${uid} 2.6s ease-in-out infinite 1.3s` }}
      />

      {/* Line — bloom layer (blurred duplicate for glow) */}
      <polyline
        points="5,24 15,31 32,8"
        stroke={`url(#sppg${uid})`}
        strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={dash} fill="none"
        filter={`url(#spplg${uid})`} opacity="0.48"
        style={{ animation: `sppdraw${uid} 0.88s cubic-bezier(0.4,0,0.2,1) both` }}
      />

      {/* Line — crisp layer */}
      <polyline
        points="5,24 15,31 32,8"
        stroke={`url(#sppg${uid})`}
        strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={dash} fill="none"
        style={{ animation: `sppdraw${uid} 0.88s cubic-bezier(0.4,0,0.2,1) both` }}
      />

      {/* Star burst at breakout tip (32, 8)
          8-point star: R=3.5, r=1.1, centered at (32,8)
          computed outer/inner alternating points, clockwise from top */}
      <g
        filter={`url(#sppsg${uid})`}
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          animation: `sppstar${uid} 0.48s cubic-bezier(0.34,1.56,0.64,1) 0.8s both, spppulse${uid} 2.6s ease-in-out infinite 1.5s`,
        }}
      >
        <circle cx="32" cy="8" r="5.5" fill="#F0B429" opacity="0.18" />
        <path
          d="M32,4.5 L32.42,6.98 L34.47,5.53 L33.02,7.58 L35.5,8 L33.02,8.42 L34.47,10.47 L32.42,9.02 L32,11.5 L31.58,9.02 L29.53,10.47 L30.98,8.42 L28.5,8 L30.98,7.58 L29.53,5.53 L31.58,6.98 Z"
          fill="#F0B429"
        />
        <circle cx="32" cy="8" r="1.25" fill="white" opacity="0.96" />
      </g>
    </svg>
  );
}

/**
 * Fortitud Capital oak tree — uses the real Canva PNG with an SVG feColorMatrix filter:
 *   - Lime green background (#ADFF2F) → transparent (alpha keyed out)
 *   - Black tree pixels → remapped to brand gold (#F0B429) or any `color` prop
 * Works on any dark surface with no halo or fringing.
 */
export function FortitudTree({ size = 40, color = "#F0B429" }: { size?: number; color?: string }) {
  const hex = color.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  // feColorMatrix rows: [R_out] [G_out] [B_out] [A_out]
  // Alpha formula: -0.1R - 0.914G - 0.1B + 1
  //   black  (0,0,0)       → A = 1  (fully opaque)
  //   lime   (0.68,1,0.18) → A = 0  (fully transparent)
  const matrix = [
    `0 0 0 0 ${r.toFixed(4)}`,
    `0 0 0 0 ${g.toFixed(4)}`,
    `0 0 0 0 ${b.toFixed(4)}`,
    `-0.1 -0.914 -0.1 0 1`,
  ].join("  ");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      overflow="visible"
    >
      <defs>
        <filter
          id="fc-chroma-key"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix type="matrix" values={matrix} />
        </filter>
      </defs>
      <image
        href="/images/fortitud-capital.png"
        x="0"
        y="0"
        width="100"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        filter="url(#fc-chroma-key)"
      />
    </svg>
  );
}

/** Full Fortitud Capital brand lockup: tree icon + wordmark. Used in Footer attribution. */
export function FortitudLogo({
  size = "sm",
  className = "",
}: {
  size?: "xs" | "sm" | "md";
  className?: string;
}) {
  const treeSize = size === "md" ? 36 : size === "sm" ? 28 : 22;
  const nameSize = size === "md" ? "text-[12px]" : size === "sm" ? "text-[11px]" : "text-[10px]";
  const tagSize = size === "md" ? "text-[9px]" : "text-[8px]";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <FortitudTree size={treeSize} color="#F0B429" />
      <div className="flex flex-col leading-none">
        <span
          className={`${nameSize} font-semibold tracking-[0.14em] text-amber-400/80 uppercase`}
          style={{ fontFamily: "var(--font-mono, monospace)" }}
        >
          Fortitud Capital
        </span>
        <span
          className={`${tagSize} tracking-[0.2em] uppercase mt-[3px] text-slate-600`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Quantitative Research
        </span>
      </div>
    </div>
  );
}

/** SPY Pivot Pro full logo lockup: candlestick mark + wordmark */
export function Logo({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const mark = size === "lg" ? 40 : size === "sm" ? 28 : 34;
  const title = size === "lg" ? "text-[15px]" : "text-[13px]";
  const sub = size === "lg" ? "text-[10px]" : "text-[9px]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={mark} />
      <div className="flex flex-col leading-none">
        <span
          className={`${title} font-bold tracking-[0.18em] text-white uppercase`}
          style={{ fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)" }}
        >
          SPY PIVOT PRO
        </span>
        <span
          className={`${sub} tracking-[0.22em] uppercase mt-[4px]`}
          style={{ color: "rgba(240,180,41,0.65)", fontFamily: "var(--font-sans)" }}
        >
          Institutional Trading Research
        </span>
      </div>
    </div>
  );
}
