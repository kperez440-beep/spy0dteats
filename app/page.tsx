import { ScrollProgress }    from "@/app/components/ScrollProgress";
import { CursorGlow }        from "@/app/components/CursorGlow";
import { StickyMobileCTA }   from "@/app/components/StickyMobileCTA";
import { Nav }               from "@/app/components/Nav";
import { Hero }              from "@/app/components/Hero";
import { SystemLayers }      from "@/app/components/SystemLayers";
import { ResearchExecution }    from "@/app/components/ResearchExecution";
import { AdaptiveIntelligence } from "@/app/components/AdaptiveIntelligence";
import { TrustBand }            from "@/app/components/TrustBand";
import { IntelligenceGap }   from "@/app/components/IntelligenceGap";
import { WhatItIs }          from "@/app/components/WhatItIs";
import { IntelligenceFlow }  from "@/app/components/IntelligenceFlow";
import { IntelligenceBento } from "@/app/components/IntelligenceBento";
import { CinematicBreak }    from "@/app/components/CinematicBreak";
import { PlatformShowcase }  from "@/app/components/PlatformShowcase";
import { MidPageCTA }        from "@/app/components/MidPageCTA";
import { WhySPYOnly }        from "@/app/components/WhySPYOnly";
import { TradingDay }        from "@/app/components/TradingDay";
import { WhySwitch }         from "@/app/components/WhySwitch";
import { RoadmapVision }     from "@/app/components/RoadmapVision";
import { FoundingGate }      from "@/app/components/FoundingGate";
import { PricingPlans }      from "@/app/components/PricingPlans";
import { FAQ }              from "@/app/components/FAQ";
import { FinalCTA }          from "@/app/components/FinalCTA";
import { Footer }            from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--brand-bg-primary)" }}>
      <CursorGlow />
      <ScrollProgress />
      <StickyMobileCTA />
      <Nav />
      <Hero />
      <SystemLayers />
      <ResearchExecution />
      <AdaptiveIntelligence />
      <TrustBand />
      <IntelligenceGap />
      <WhatItIs />
      <IntelligenceFlow />
      <IntelligenceBento />
      <CinematicBreak />
      <PlatformShowcase />
      <MidPageCTA />
      <WhySPYOnly />
      <TradingDay />
      <WhySwitch />
      <RoadmapVision />
      <FoundingGate />
      <PricingPlans />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
