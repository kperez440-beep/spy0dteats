const items = [
  { label: "Jan 2026 Return",  value: "+1,085%",    color: "#10B981" },
  { label: "Sharpe Ratio",     value: "14.0",        color: "#F0B429" },
  { label: "Calmar Ratio",     value: "995",         color: "#F0B429" },
  { label: "Max Drawdown",     value: "−5.4%",       color: "#10B981" },
  { label: "Profit Factor",    value: "1.60×",       color: "#06B6D4" },
  { label: "Starting Capital", value: "$100",        color: "#64748B" },
  { label: "Peak Equity",      value: "$1,217",      color: "#10B981" },
  { label: "Signal Count",     value: "11 Signals",  color: "#06B6D4" },
  { label: "Win Probability",  value: "73.2% ML",    color: "#F0B429" },
  { label: "Win Rate",         value: "38%",         color: "#06B6D4" },
  { label: "Trading Days",     value: "22 Days",     color: "#64748B" },
  { label: "Trades Taken",     value: "24 Trades",   color: "#64748B" },
  { label: "Recovery Factor",  value: "1.0",         color: "#10B981" },
  { label: "Signal Engine",    value: "Live 24/5",   color: "#10B981" },
  { label: "Strategy",         value: "SPY 0DTE",    color: "#06B6D4" },
];

function Diamond({ color }: { color: string }) {
  return (
    <svg width="6" height="6" viewBox="0 0 6 6" aria-hidden="true">
      <rect x="3" y="0.5" width="3.5" height="3.5" rx="0.5" transform="rotate(45 3 3)" fill={color} />
    </svg>
  );
}

export function TrustBand() {
  return (
    <div
      className="w-full overflow-hidden border-y border-[#1E2D3D] bg-[#050810]/80 backdrop-blur-sm py-3.5"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="flex w-max marquee-left gap-0">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-3.5 px-6 shrink-0">
            <Diamond color={item.color} />
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest whitespace-nowrap">
              {item.label}
            </span>
            <span
              className="text-[14px] font-mono font-bold whitespace-nowrap"
              style={{ color: item.color }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
