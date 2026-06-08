// SPY Pivot Pro — LogoMark: candlestick chart + pivot sweep + pivot dot
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Badge */}
      <rect width="40" height="40" rx="8" fill="#0D1520" />
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="7.5" stroke="#F0B429" strokeWidth="1.5" strokeOpacity="0.5" />

      {/* Candle 1 — muted */}
      <line x1="7" y1="15" x2="7" y2="27" stroke="#2D3F52" strokeWidth="1" strokeLinecap="round" />
      <rect x="5.5" y="18" width="3" height="6" rx="0.5" fill="#2D3F52" />

      {/* Candle 2 — muted */}
      <line x1="13" y1="14" x2="13" y2="27" stroke="#2D3F52" strokeWidth="1" strokeLinecap="round" />
      <rect x="11.5" y="17" width="3" height="7" rx="0.5" fill="#2D3F52" />

      {/* Candle 3 — GOLD pivot candle */}
      <line x1="19" y1="9" x2="19" y2="12" stroke="#F0B429" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="17" y="12" width="4" height="13" rx="0.5" fill="#F0B429" />
      <line x1="19" y1="25" x2="19" y2="28" stroke="#F0B429" strokeWidth="1.2" strokeLinecap="round" />

      {/* Candle 4 — muted, recovering */}
      <line x1="25" y1="13" x2="25" y2="24" stroke="#2D3F52" strokeWidth="1" strokeLinecap="round" />
      <rect x="23.5" y="14" width="3" height="6" rx="0.5" fill="#2D3F52" />

      {/* Candle 5 — muted, bullish continuation */}
      <line x1="31" y1="11" x2="31" y2="22" stroke="#2D3F52" strokeWidth="1" strokeLinecap="round" />
      <rect x="29.5" y="12" width="3" height="7" rx="0.5" fill="#2D3F52" />

      {/* Pivot sweep — arc through the signal */}
      <path d="M 3,25 C 12,21 23,15 37,9" stroke="#F0B429" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Pivot dot — exact inflection point */}
      <circle cx="10" cy="22" r="1.8" fill="#F0B429" />
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
