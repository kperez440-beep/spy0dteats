const PLATFORM_POINTS = [
  {
    label: "Brokerage connection",
    title: "Bring your broker, keep control.",
    text: "Designed to connect with the brokerage workflow traders already use, so the platform can support decision-making, execution readiness, and future automation without forcing a new trading habit.",
  },
  {
    label: "Signal confidence",
    title: "See the market through confluence.",
    text: "SPY Pivot Pro organizes indicator signals, probability scoring, flow context, and risk filters into a cockpit built for fast decisions without exposing the proprietary model recipe.",
  },
  {
    label: "Strategy lab",
    title: "Test before you size up.",
    text: "Users will be able to experiment with indicators, replay setups, compare statistics, and decide whether they want manual confidence or automation support.",
  },
];

export function PlatformOverview() {
  return (
    <section id="platform" className="relative px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-amber-400 uppercase mb-4">
              Phase One Positioning
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-white">
              Built to become the command center for serious SPY traders.
            </h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed">
            We are still in development, but the direction is clear: one of the best SPY options
            trading tools on the market, with manual decision support first and controlled automation
            as the platform matures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {PLATFORM_POINTS.map((point) => (
            <article
              key={point.label}
              className="rounded-2xl border border-[#1E2D3D] bg-[#0D1520]/80 p-6"
              style={{ boxShadow: "0 24px 70px rgba(0,0,0,0.22)" }}
            >
              <div className="text-[11px] font-mono tracking-widest text-[#06B6D4] uppercase">
                {point.label}
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{point.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-5 sm:p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-amber-400 uppercase">
              Strategic Capital
            </div>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl">
              We are preparing the product, beta pipeline, and investor materials for partners who
              understand trading infrastructure, fintech SaaS, and disciplined launch capital.
            </p>
          </div>
          <a
            href="#waitlist"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-amber-400/40 px-5 py-3 text-sm font-bold text-amber-300 hover:bg-amber-400/10 transition-colors"
          >
            Contact / Beta Interest
          </a>
        </div>
      </div>
    </section>
  );
}
