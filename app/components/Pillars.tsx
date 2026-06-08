const pillars = [
  {
    num: "01",
    title: "Multi-Signal Confluence",
    desc: "11 signals weighted by reliability — RSI, MACD, VWAP, Volume Profile, VIX regime, Options Flow, and more. Each signal casts a weighted vote. The system only acts when the confluence is clear.",
    tag: "PRIMARY ENGINE",
    color: "#F0B429",
  },
  {
    num: "02",
    title: "ML Win Probability",
    desc: "A trained model scores every potential trade 0–100 before you enter. It doesn't predict direction — it quantifies confidence based on historical confluence patterns. Stop guessing.",
    tag: "MACHINE LEARNING",
    color: "#06B6D4",
  },
  {
    num: "03",
    title: "Intraday Playback & Simulation",
    desc: "Step through any trading session tick-by-tick. Study how signals evolved, where entries triggered, and why exits fired — all in a flight simulator environment with no money on the line.",
    tag: "SIMULATION",
    color: "#10B981",
  },
  {
    num: "04",
    title: "Auto-Learn Engine",
    desc: "After every session, the engine analyzes what worked and what didn't. Signal weights self-tune. Entry thresholds evolve. The system gets sharper without you touching a thing.",
    tag: "ADAPTIVE AI",
    color: "#F0B429",
  },
  {
    num: "05",
    title: "Automation Layer",
    desc: "When you're ready, hand the execution to the system. Configurable risk limits, position sizing, and kill switches. Not a black box — you set the rules, the system executes them precisely.",
    tag: "AUTOMATION",
    color: "#06B6D4",
  },
];

export function Pillars() {
  return (
    <section id="how-it-works" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute right-0 top-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(6,182,212,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase mb-3">
            5 Capabilities · No One Else Does All Five
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The complete SPY options system.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Robinhood gives you a chart. Bloomberg gives you data. Neither was built for SPY
            options intraday trading. SPY Pivot Pro was built for exactly this.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`relative p-6 rounded-2xl border border-[#1E2D3D] bg-[#0D1520] hover:border-opacity-60 transition-all duration-200 group cursor-default ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={
                {
                  "--hover-color": p.color,
                } as React.CSSProperties
              }
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${p.color}33` }}
              />

              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-4xl font-bold font-mono opacity-20"
                  style={{ color: p.color }}
                >
                  {p.num}
                </span>
                <span
                  className="text-[9px] font-mono tracking-widest px-2 py-1 rounded border"
                  style={{ color: p.color, borderColor: `${p.color}33`, background: `${p.color}0A` }}
                >
                  {p.tag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-100 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
