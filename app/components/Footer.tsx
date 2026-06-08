import { Logo, FortitudLogo } from "./Logo";

const links = {
  Product: ["Signal Confluence", "ML Win Probability", "Playback Simulator", "Auto-Learn Engine", "Automation"],
  Company: ["About Fortitud Capital", "Research", "Blog", "Careers", "Press"],
  Legal: ["Terms of Service", "Privacy Policy", "Risk Disclosure", "Refund Policy"],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1E2D3D] bg-[#050810] pt-16 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Institutional-grade SPY options intelligence. Built by quantitative researchers at
              Fortitud Capital.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {/* Twitter/X */}
              <a
                href="#"
                aria-label="Follow on X"
                className="w-9 h-9 rounded-lg border border-[#1E2D3D] flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube channel"
                className="w-9 h-9 rounded-lg border border-[#1E2D3D] flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-600 transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mb-4">
                {cat}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E2D3D] pt-8 space-y-4">
          <p className="text-[11px] text-slate-600 leading-relaxed max-w-3xl font-mono">
            <span className="text-slate-500 font-semibold">Risk Disclosure:</span> Options trading
            involves substantial risk and is not appropriate for all investors. Past performance of
            any trading strategy, including backtested results, does not guarantee future results.
            SPY Pivot Pro and Fortitud Capital do not provide investment advice. All content is for
            educational and informational purposes only. Never trade with capital you cannot afford
            to lose.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[11px] text-slate-600 font-mono">
              © {year} Fortitud Capital LLC. All rights reserved.
            </p>
            <FortitudLogo size="xs" />
          </div>
        </div>
      </div>
    </footer>
  );
}
