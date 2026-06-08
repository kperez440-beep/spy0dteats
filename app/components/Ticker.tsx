"use client";

type TickType = "bull" | "bear" | "perf" | "signal";

const ticks: Array<{
  sym: string; val: string; chg?: string; pct?: string; type: TickType;
}> = [
  { sym: "SPY",      val: "592.41",    chg: "+2.18",    pct: "+0.37%",  type: "bull"   },
  { sym: "VIX",      val: "14.22",     chg: "−0.88",    pct: "−5.83%",  type: "bear"   },
  { sym: "WIN PROB", val: "73.2%",     chg: "ML",       pct: "BULLISH", type: "perf"   },
  { sym: "RSI(14)",  val: "62.4",      chg: "",         pct: "TRENDING",type: "signal" },
  { sym: "VWAP",     val: "ABOVE",     chg: "+0.14%",   pct: "",        type: "signal" },
  { sym: "MACD",     val: "CROSS ↑",  chg: "",         pct: "SIGNAL",  type: "signal" },
  { sym: "QQQ",      val: "511.93",    chg: "+4.27",    pct: "+0.84%",  type: "bull"   },
  { sym: "FLOW",     val: "71% CALLS", chg: "0DTE",     pct: "",        type: "bull"   },
  { sym: "SPX",      val: "5,984.51",  chg: "+22.3",    pct: "+0.37%",  type: "bull"   },
  { sym: "MOMENTUM", val: "STRONG",    chg: "",         pct: "↑↑↑",    type: "bull"   },
  { sym: "10Y",      val: "4.21%",     chg: "+0.03",    pct: "YIELD",   type: "signal" },
  { sym: "DXY",      val: "104.12",    chg: "−0.22",    pct: "−0.21%",  type: "bear"   },
  { sym: "SHARPE",   val: "14.0",      chg: "JAN '26",  pct: "LIVE",    type: "perf"   },
  { sym: "MAX DD",   val: "−5.4%",     chg: "CONTROL",  pct: "",        type: "perf"   },
];

const TYPE_COLORS: Record<TickType, { val: string; chg: string; pct: string }> = {
  bull:   { val: "#F1F5F9", chg: "#10B981", pct: "#10B981" },
  bear:   { val: "#F1F5F9", chg: "#FF4D6A", pct: "#FF4D6A" },
  perf:   { val: "#F0B429", chg: "#F0B429", pct: "#F0B429" },
  signal: { val: "#F1F5F9", chg: "#06B6D4", pct: "#06B6D4" },
};

function Tick({ t }: { t: typeof ticks[0] }) {
  const colors = TYPE_COLORS[t.type];
  const chgIsNeg = t.chg?.startsWith("−") || t.chg?.startsWith("-");
  const pctIsNeg = t.pct?.startsWith("−") || t.pct?.startsWith("-");

  const chgColor =
    t.type === "perf" ? colors.chg
    : chgIsNeg ? "#FF4D6A"
    : t.chg && !chgIsNeg ? "#10B981"
    : colors.chg;

  const pctColor =
    t.type === "perf" ? colors.pct
    : pctIsNeg ? "#FF4D6A"
    : t.pct?.startsWith("+") ? "#10B981"
    : colors.pct;

  return (
    <div className="flex items-center gap-2 px-5 border-r border-[#1E2D3D] shrink-0">
      <span className="text-[9px] font-mono font-semibold tracking-widest text-slate-600 uppercase">
        {t.sym}
      </span>
      <span className="text-[11px] font-mono font-semibold tabular-nums" style={{ color: colors.val }}>
        {t.val}
      </span>
      {t.chg && (
        <span className="text-[9px] font-mono tabular-nums" style={{ color: chgColor }}>
          {t.chg}
        </span>
      )}
      {t.pct && (
        <span className="text-[9px] font-mono" style={{ color: pctColor }}>
          {t.pct}
        </span>
      )}
    </div>
  );
}

export function Ticker() {
  const doubled = [...ticks, ...ticks];
  return (
    <div className="w-full overflow-hidden border-b border-[#1E2D3D] bg-[#0A1220]/80 backdrop-blur-sm relative">
      {/* Fixed LIVE badge — does not scroll */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 flex items-center gap-2 px-3 border-r border-[#1E2D3D]"
        style={{
          background: "linear-gradient(90deg, #0A1220 70%, transparent)",
          minWidth: 72,
        }}
        aria-label="Live data"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot inline-block shrink-0" />
        <span className="text-[9px] font-mono font-bold text-emerald-400 tracking-widest uppercase select-none">
          LIVE
        </span>
      </div>

      {/* Right fade mask */}
      <div
        className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
        style={{ background: "linear-gradient(270deg, #0A1220, transparent)" }}
        aria-hidden="true"
      />

      {/* Scrolling row */}
      <div
        className="flex ticker-scroll items-center h-9"
        style={{ width: "max-content", paddingLeft: 80 }}
      >
        {doubled.map((t, i) => (
          <Tick key={i} t={t} />
        ))}
      </div>
    </div>
  );
}
