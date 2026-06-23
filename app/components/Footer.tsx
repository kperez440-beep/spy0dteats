import { Logo, FortitudLogo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1E2D3D] bg-[#050810] pb-10 px-4">
      {/* Compliance bar */}
      <div className="border-b border-[#1E2D3D] bg-[#060D18] px-4 py-3 text-center">
        <p className="text-[9px] font-mono text-slate-600 tracking-wide leading-relaxed max-w-4xl mx-auto">
          Options trading involves substantial risk and is not appropriate for all investors.&nbsp;&nbsp;Past performance does not guarantee future results.
        </p>
      </div>

      <div className="pt-14">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="mb-4">
            <Logo size="md" />
          </div>
          <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
            Adaptive Trading Intelligence for SPY Options Traders.
            <br />Built by Fortitud Capital.
          </p>
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
      </div>
    </footer>
  );
}
