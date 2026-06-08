"use client";

const ticks = [
  { sym: "SPY", val: "592.41", chg: "+2.18", pct: "+0.37%" },
  { sym: "VIX", val: "14.22", chg: "-0.88", pct: "-5.83%", bear: true },
  { sym: "WIN PROB", val: "73.2%", chg: "ML", pct: "BULLISH" },
  { sym: "RSI(14)", val: "62.4", chg: "", pct: "TRENDING" },
  { sym: "VWAP", val: "ABOVE", chg: "+0.14%", pct: "" },
  { sym: "MACD", val: "CROSS ↑", chg: "", pct: "SIGNAL" },
  { sym: "QQQ", val: "511.93", chg: "+4.27", pct: "+0.84%" },
  { sym: "FLOW", val: "71% CALLS", chg: "0DTE", pct: "" },
  { sym: "SPX", val: "5,984.51", chg: "+22.3", pct: "+0.37%" },
  { sym: "MOMENTUM", val: "STRONG", chg: "", pct: "↑↑↑" },
  { sym: "10Y", val: "4.21%", chg: "+0.03", pct: "YIELD" },
  { sym: "DXY", val: "104.12", chg: "-0.22", pct: "-0.21%", bear: true },
  { sym: "SHARPE", val: "14.0", chg: "JAN '26", pct: "LIVE" },
  { sym: "MAX DD", val: "-5.4%", chg: "CONTROLLED", pct: "" },
];

function Tick({ t }: { t: typeof ticks[0] }) {
  const isNeg = t.bear || t.pct?.startsWith("-") || t.chg?.startsWith("-");
  return (
    <div className="flex items-center gap-2.5 px-5 border-r border-[#1E2D3D] shrink-0">
      <span className="text-[10px] font-mono font-semibold tracking-widest text-slate-500 uppercase">
        {t.sym}
      </span>
      <span className="text-[11px] font-mono font-semibold text-slate-200">{t.val}</span>
      {t.chg && (
        <span className={`text-[10px] font-mono ${isNeg ? "text-[#FF4D6A]" : "text-[#10B981]"}`}>
          {t.chg}
        </span>
      )}
      {t.pct && (
        <span className={`text-[10px] font-mono ${t.pct.startsWith("-") ? "text-[#FF4D6A]" : "text-[#06B6D4]"}`}>
          {t.pct}
        </span>
      )}
    </div>
  );
}

export function Ticker() {
  const doubled = [...ticks, ...ticks];
  return (
    <div className="w-full overflow-hidden border-b border-[#1E2D3D] bg-[#0A1220]/80 backdrop-blur-sm">
      <div
        className="flex ticker-scroll items-center h-9"
        style={{ width: "max-content" }}
      >
        {doubled.map((t, i) => (
          <Tick key={i} t={t} />
        ))}
      </div>
    </div>
  );
}
