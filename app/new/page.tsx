import type { Metadata } from "next";
import { geist } from "@/app/fonts";
import { Nav } from "@/app/components/v2/Nav";
import { Hero } from "@/app/components/v2/Hero";

// Preview of the v2 homepage, built section by section. Replaces "/" once approved.
export const metadata: Metadata = {
  title: "SPY Pivot Pro: watch the machine think",
  robots: { index: false, follow: false },
};

export default function NewHome() {
  return (
    <div className={`${geist.variable} min-h-screen bg-[#040503] text-[#EEF0F5]`}>
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <div className="flex h-[60vh] items-center justify-center border-t border-dashed border-white/10 font-mono text-xs text-white/30">
          Next sections in progress…
        </div>
      </main>
    </div>
  );
}
