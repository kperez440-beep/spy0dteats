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
      <rect width="40" height="40" rx="10" fill="#0D1520" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="#F0B429" strokeOpacity="0.18" />

      {/* Oak tree — trunk */}
      <rect x="17.5" y="27" width="5" height="9" rx="1.2" fill="#F0B429" />

      {/* Oak tree — crown lobes (overlapping circles merge into organic canopy) */}
      {/* Center mass */}
      <circle cx="20" cy="18" r="9.5" fill="#F0B429" />
      {/* Left lower lobe */}
      <circle cx="13" cy="21" r="7" fill="#F0B429" />
      {/* Right lower lobe */}
      <circle cx="27" cy="21" r="7" fill="#F0B429" />
      {/* Upper left lobe */}
      <circle cx="15" cy="13" r="6" fill="#F0B429" />
      {/* Upper right lobe */}
      <circle cx="25" cy="13" r="6" fill="#F0B429" />
      {/* Top lobe */}
      <circle cx="20" cy="9" r="5.5" fill="#F0B429" />
      {/* Fill gap between crown base and trunk */}
      <rect x="15" y="25" width="10" height="5" fill="#F0B429" />
    </svg>
  );
}

export function FortitudTree({ size = 40, color = "#F0B429" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Trunk */}
      <rect x="25" y="50" width="10" height="18" rx="2" fill={color} />
      {/* Wide base crown */}
      <circle cx="30" cy="34" r="16" fill={color} />
      <circle cx="17" cy="38" r="12" fill={color} />
      <circle cx="43" cy="38" r="12" fill={color} />
      {/* Mid crown */}
      <circle cx="22" cy="24" r="10" fill={color} />
      <circle cx="38" cy="24" r="10" fill={color} />
      {/* Upper crown */}
      <circle cx="30" cy="18" r="11" fill={color} />
      {/* Top lobe */}
      <circle cx="30" cy="10" r="8" fill={color} />
      {/* Gap fill */}
      <rect x="22" y="47" width="16" height="8" fill={color} />
    </svg>
  );
}

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
