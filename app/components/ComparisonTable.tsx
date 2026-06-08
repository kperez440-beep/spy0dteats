const features = [
  "Multi-signal confluence engine",
  "ML win probability scoring",
  "SPY-specific optimization",
  "Intraday playback simulator",
  "Auto-learn / self-tuning",
  "Trade automation",
  "Built for 0DTE options",
  "Monthly price",
];

const platforms = [
  {
    name: "SPY Pivot Pro",
    sub: "by Fortitud Capital",
    highlight: true,
    vals: ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "$79–$499"],
  },
  {
    name: "Bloomberg Terminal",
    sub: "Enterprise data",
    highlight: false,
    vals: ["✗", "✗", "Partial", "✗", "✗", "✗", "✗", "$2,000+"],
  },
  {
    name: "thinkorswim",
    sub: "TD Ameritrade",
    highlight: false,
    vals: ["✗", "✗", "✗", "Partial", "✗", "Partial", "✗", "Free*"],
  },
  {
    name: "TradeStation",
    sub: "Algorithmic tools",
    highlight: false,
    vals: ["✗", "✗", "✗", "✗", "✗", "Partial", "✗", "$99+"],
  },
];

function Cell({ val, highlight }: { val: string; highlight: boolean }) {
  const isCheck = val === "✓";
  const isCross = val === "✗";
  const isPartial = val === "Partial";

  return (
    <td className="px-4 py-3 text-center text-sm">
      {isCheck ? (
        <span
          className="inline-flex items-center justify-center w-6 h-6 rounded-full"
          style={{
            background: highlight ? "rgba(16,185,129,0.15)" : "rgba(16,185,129,0.08)",
            color: "#10B981",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-label="Yes">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      ) : isCross ? (
        <span className="text-slate-600 font-mono text-xs">—</span>
      ) : isPartial ? (
        <span className="text-[11px] font-mono text-amber-400/70">Partial</span>
      ) : (
        <span
          className="text-[12px] font-mono font-bold"
          style={{ color: highlight ? "#F0B429" : "#64748B" }}
        >
          {val}
        </span>
      )}
    </td>
  );
}

export function ComparisonTable() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(27,114,192,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-10">
          <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase mb-3">
            Competitive Landscape
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            No one else does all five.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Bloomberg costs $24,000 a year and wasn&apos;t built for SPY 0DTE options.
            thinkorswim is free but general-purpose. SPY Pivot Pro was designed for exactly one thing.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[#1E2D3D]">
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="border-b border-[#1E2D3D]">
                <th className="px-4 py-3.5 text-left text-[11px] font-mono tracking-wider text-slate-500 uppercase bg-[#0A1220]">
                  Capability
                </th>
                {platforms.map((p) => (
                  <th
                    key={p.name}
                    className="px-4 py-3.5 text-center bg-[#0A1220]"
                    style={{
                      borderLeft: p.highlight ? "1px solid rgba(240,180,41,0.2)" : "1px solid #1E2D3D",
                    }}
                  >
                    <div
                      className="text-[12px] font-bold"
                      style={{ color: p.highlight ? "#F0B429" : "#F1F5F9" }}
                    >
                      {p.name}
                    </div>
                    <div className="text-[9px] font-mono text-slate-600 mt-0.5">{p.sub}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, fi) => (
                <tr
                  key={feat}
                  className="border-b border-[#1E2D3D]/60 last:border-0"
                  style={{
                    background: fi % 2 === 0 ? "#0D1520" : "#0B1320",
                  }}
                >
                  <td className="px-4 py-3 text-[12px] text-slate-400">{feat}</td>
                  {platforms.map((p) => (
                    <td
                      key={p.name}
                      className="text-center"
                      style={{
                        borderLeft: p.highlight ? "1px solid rgba(240,180,41,0.1)" : "1px solid rgba(30,45,61,0.4)",
                        background: p.highlight ? "rgba(240,180,41,0.02)" : "transparent",
                      }}
                    >
                      <Cell val={p.vals[fi]} highlight={p.highlight} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-[10px] text-slate-600 font-mono mt-4 text-center">
          * thinkorswim requires a TD Ameritrade / Schwab brokerage account. Feature assessment as of June 2026.
        </p>
      </div>
    </section>
  );
}
