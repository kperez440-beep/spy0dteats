const roles = [
  {
    title: "Quant Developer",
    desc: "Signal engineers, ML practitioners, or algo traders who want to contribute to the platform's technical foundation.",
    color: "#F0B429",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="#F0B429" strokeWidth="1.4" />
        <path d="M6 9l2 2-2 2M10 13h4" stroke="#F0B429" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Domain Expert",
    desc: "Experienced SPY options traders, former prop desk analysts, or market microstructure specialists with real edge.",
    color: "#1B72C0",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2l2 5h5l-4 3 1.5 5L10 12l-4.5 3L7 10 3 7h5L10 2z" stroke="#1B72C0" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Development Partner",
    desc: "Strategic partners who believe in institutional-grade tools for retail traders and want to help us get there faster.",
    color: "#06B6D4",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="3" stroke="#06B6D4" strokeWidth="1.4" />
        <circle cx="14" cy="13" r="3" stroke="#06B6D4" strokeWidth="1.4" />
        <path d="M9.5 9.5l3 2" stroke="#06B6D4" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Partners() {
  return (
    <section id="partners" className="py-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(240,180,41,0.04) 0%, transparent 55%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Main statement */}
        <div className="max-w-3xl mb-16">
          <div className="text-[11px] font-mono tracking-widest text-amber-400/70 uppercase mb-5">
            Build with us
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            We&apos;re building something that doesn&apos;t
            <br className="hidden sm:block" />
            exist yet. Join us.
          </h2>
          <p className="text-slate-400 text-base leading-relaxed max-w-2xl">
            SPY Pivot Pro is in active development and we&apos;re looking for builders, traders, and
            thinkers who want to be part of bringing institutional-grade intelligence to every retail
            trader. Whether you contribute code, signal ideas, or strategic direction — there&apos;s
            a place for you here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {roles.map((r) => (
            <div
              key={r.title}
              className="p-6 rounded-2xl border border-[#1E2D3D] bg-[#0D1520] hover:border-[#2A3A4D] transition-all duration-300 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{ background: `${r.color}10`, border: `1px solid ${r.color}20` }}
              >
                {r.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{r.title}</h3>
              <p className="text-[12px] text-slate-500 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 rounded-2xl border border-[#1E2D3D] bg-[#0D1520]"
          style={{ boxShadow: "0 0 60px rgba(240,180,41,0.04)" }}
        >
          <div>
            <div className="text-base font-semibold text-white mb-2">
              Interested in the business?
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed">
              We&apos;re open to conversations with development partners, strategic advisors, and
              contributors who share the vision. Reach out directly — no decks required.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] pulse-dot inline-block" />
              <span className="text-[11px] font-mono text-slate-500">Active conversations welcome</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:items-end lg:justify-center">
            <a
              href="mailto:partners@spypivotpro.com"
              className="inline-flex items-center gap-2 bg-[#F0B429] hover:bg-amber-300 text-[#050810] font-bold text-[13px] px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_24px_rgba(240,180,41,0.4)] cursor-pointer"
            >
              Start a Conversation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <span className="text-[11px] font-mono text-slate-600">
              partners@spypivotpro.com
            </span>
          </div>
        </div>

        {/* Fortitud Capital note */}
        <p className="text-center text-[11px] font-mono text-slate-600 mt-6">
          SPY Pivot Pro is a product of Fortitud Capital — a proprietary trading research firm focused on systematic SPY options strategies.
        </p>
      </div>
    </section>
  );
}
