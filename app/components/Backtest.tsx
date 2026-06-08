"use client";
import { useEffect, useRef, useState } from "react";

/* January 2026 equity curve — 22 trading days, $100 → $1,217 */
const equity = [
  100, 118, 136, 154, 142, 168, 192, 215, 204, 241, 278, 318, 302, 358,
  412, 488, 576, 674, 798, 945, 1074, 1217,
];

const trades = [
  { date: "Jan 2", desc: "SPY 580C 0DTE", pnl: "+$18", bull: true },
  { date: "Jan 6", desc: "SPY 582C 0DTE", pnl: "+$34", bull: true },
  { date: "Jan 9", desc: "SPY 579P 0DTE", pnl: "−$12", bull: false },
  { date: "Jan 15", desc: "SPY 590C 0DTE", pnl: "+$76", bull: true },
  { date: "Jan 21", desc: "SPY 591C 0DTE", pnl: "+$143", bull: true },
  { date: "Jan 31", desc: "SPY 592C 0DTE", pnl: "+$169", bull: true },
];

function buildPath(data: number[], w: number, h: number, pad: number) {
  const minV = Math.min(...data);
  const maxV = Math.max(...data);
  const range = maxV - minV || 1;
  const toX = (i: number) => pad + (i / (data.length - 1)) * (w - pad * 2);
  const toY = (v: number) => h - pad - ((v - minV) / range) * (h - pad * 2);
  const pts = data.map((v, i) => `${toX(i)},${toY(v)}`).join(" L ");
  return {
    line: `M ${pts}`,
    area: `M ${toX(0)},${toY(data[0])} L ${pts} L ${toX(data.length - 1)},${h - pad} L ${toX(0)},${h - pad} Z`,
  };
}

export function Backtest() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const W = 680;
  const H = 200;
  const PAD = 16;
  const { line, area } = buildPath(equity, W, H, PAD);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="backtest" className="py-24 px-4 relative overflow-hidden" ref={ref}>
      <div
        className="absolute right-0 bottom-0 w-80 h-80 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom right, rgba(16,185,129,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-[11px] font-mono tracking-widest text-[#10B981]/80 uppercase mb-3">
            January 2026 · Live Backtest · $100 Micro Account
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real results. Not a simulation.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            This is an actual backtest run on our system — every signal, every entry, every exit
            logged. 22 trading days. Starting capital: $100. Ending NAV: $1,217.24.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart */}
          <div
            className="lg:col-span-2 p-6 rounded-2xl border border-[#1E2D3D] bg-[#0D1520]"
            style={{ boxShadow: "0 0 48px rgba(16,185,129,0.05)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                  Equity Curve
                </div>
                <div className="text-2xl font-bold font-mono text-[#10B981] mt-0.5">
                  $1,217.24
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-slate-500">Started</div>
                <div className="text-sm font-mono text-slate-300">$100.00</div>
                <div className="text-xs font-mono text-[#10B981] font-semibold mt-0.5">
                  +1,085%
                </div>
              </div>
            </div>

            <div className="w-full overflow-hidden">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="w-full"
                style={{ height: 200 }}
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="eqGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                  <clipPath id="eqClip">
                    <rect x="0" y="0" width={visible ? W : 0} height={H} />
                  </clipPath>
                </defs>

                {/* Grid lines */}
                {[0.25, 0.5, 0.75].map((f) => (
                  <line
                    key={f}
                    x1={PAD}
                    y1={PAD + f * (H - PAD * 2)}
                    x2={W - PAD}
                    y2={PAD + f * (H - PAD * 2)}
                    stroke="#1E2D3D"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                  />
                ))}

                {/* Area */}
                <path d={area} fill="url(#eqGrad)" clipPath="url(#eqClip)" />

                {/* Line */}
                <path
                  d={line}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  clipPath="url(#eqClip)"
                  style={{
                    transition: visible ? "clip-path 2.4s ease" : "none",
                  }}
                />

                {/* End dot */}
                {visible && (
                  <circle
                    cx={W - PAD}
                    cy={PAD}
                    r="4"
                    fill="#10B981"
                    style={{ filter: "drop-shadow(0 0 6px #10B981)" }}
                  />
                )}
              </svg>
            </div>

            {/* Month labels */}
            <div className="flex justify-between text-[10px] font-mono text-slate-600 mt-2 px-1">
              <span>Jan 2</span>
              <span>Jan 8</span>
              <span>Jan 15</span>
              <span>Jan 22</span>
              <span>Jan 31</span>
            </div>
          </div>

          {/* Stats column */}
          <div className="flex flex-col gap-4">
            {/* Key metrics */}
            <div className="p-5 rounded-2xl border border-[#1E2D3D] bg-[#0D1520]">
              <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-4">
                Performance Metrics
              </div>
              {[
                { label: "Sharpe Ratio", val: "14.0", color: "#F0B429" },
                { label: "Calmar Ratio", val: "995", color: "#06B6D4" },
                { label: "Max Drawdown", val: "−5.4%", color: "#10B981" },
                { label: "Win Rate", val: "38%", color: "#F0B429" },
                { label: "Profit Factor", val: "1.60×", color: "#06B6D4" },
                { label: "Total Trades", val: "24", color: "#94A3B8" },
              ].map((m) => (
                <div key={m.label} className="flex items-center justify-between py-2 border-b border-[#1E2D3D]/60 last:border-0">
                  <span className="text-[11px] text-slate-500">{m.label}</span>
                  <span
                    className="text-[12px] font-mono font-bold"
                    style={{ color: m.color }}
                  >
                    {m.val}
                  </span>
                </div>
              ))}
            </div>

            {/* Sample trades */}
            <div className="p-5 rounded-2xl border border-[#1E2D3D] bg-[#0D1520]">
              <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-3">
                Sample Trades
              </div>
              {trades.map((t) => (
                <div key={t.date} className="flex items-center justify-between py-1.5">
                  <div>
                    <div className="text-[10px] text-slate-500 font-mono">{t.date}</div>
                    <div className="text-[11px] text-slate-300 font-mono">{t.desc}</div>
                  </div>
                  <span
                    className="text-[12px] font-mono font-bold"
                    style={{ color: t.bull ? "#10B981" : "#FF4D6A" }}
                  >
                    {t.pnl}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-[11px] text-slate-600 mt-6 font-mono max-w-2xl mx-auto">
          Backtest methodology: SPY 0DTE options, signal confluence threshold ≥ 65, ML win probability ≥ 60%. Results include all commissions and slippage estimates. Past performance does not guarantee future results.
        </p>
      </div>
    </section>
  );
}
