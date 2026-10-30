import type { Metadata } from "next";
import { geist } from "@/app/fonts";
import { Nav } from "@/app/components/v2/Nav";
import { Hero } from "@/app/components/v2/Hero";
import { WhatYouGet } from "@/app/components/v2/WhatYouGet";
import { FeatureGrid } from "@/app/components/v2/FeatureGrid";
import { HowItWorks } from "@/app/components/v2/HowItWorks";
import { DayInside } from "@/app/components/v2/DayInside";
import { Founder } from "@/app/components/v2/Founder";
import { SystemSpecs } from "@/app/components/v2/SystemSpecs";
import { Pricing } from "@/app/components/v2/Pricing";
import { Roadmap } from "@/app/components/v2/Roadmap";
import { Waitlist } from "@/app/components/v2/Waitlist";
import { Faq } from "@/app/components/v2/Faq";
import { FinalCta, Footer } from "@/app/components/v2/Footer";

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
        <WhatYouGet />
        <FeatureGrid />
        <HowItWorks />
        <DayInside />
        <Founder />
        <SystemSpecs />
        <Pricing />
        <Roadmap />
        <Waitlist />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
