import { ScrollProgress }    from "@/app/components/ScrollProgress";
import { StickyMobileCTA }   from "@/app/components/StickyMobileCTA";
import { Nav }               from "@/app/components/Nav";
import { Ticker }            from "@/app/components/Ticker";
import { Hero }              from "@/app/components/Hero";
import { TrustBand }         from "@/app/components/TrustBand";
import { IntelligenceGap }   from "@/app/components/IntelligenceGap";
import { IntelligenceFlow }  from "@/app/components/IntelligenceFlow";
import { IntelligenceBento } from "@/app/components/IntelligenceBento";
import { PlatformShowcase }  from "@/app/components/PlatformShowcase";
import { MidPageCTA }        from "@/app/components/MidPageCTA";
import { WhySPYOnly }        from "@/app/components/WhySPYOnly";
import { ResearchResults }   from "@/app/components/ResearchResults";
import { TradingDay }        from "@/app/components/TradingDay";
import { WhySwitch }         from "@/app/components/WhySwitch";
import { RoadmapVision }     from "@/app/components/RoadmapVision";
import { FoundingAccess }    from "@/app/components/FoundingAccess";
import { PricingPlans }      from "@/app/components/PricingPlans";
import { FinalCTA }          from "@/app/components/FinalCTA";
import { Footer }            from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050810] overflow-x-hidden">
      <ScrollProgress />
      <StickyMobileCTA />
      <Nav />

      {/* 01 — Hero */}
      <div className="pt-[72px]">
        <Ticker />
      </div>
      <Hero />

      {/* 02 — Trust Band */}
      <TrustBand />

      {/* 03 — Intelligence Gap */}
      <IntelligenceGap />

      {/* 04 — Intelligence Flow */}
      <IntelligenceFlow />

      {/* 05 — Intelligence Modules */}
      <IntelligenceBento />

      {/* 06 — Platform Showcase */}
      <PlatformShowcase />

      {/* 07 — Mid-Page CTA */}
      <MidPageCTA />

      {/* 08 — Why SPY Only */}
      <WhySPYOnly />

      {/* 09 — Research & Results */}
      <ResearchResults />

      {/* 10 — A Day On The Platform */}
      <TradingDay />

      {/* 11 — Why Traders Switch */}
      <WhySwitch />

      {/* 12 — Roadmap & Vision */}
      <RoadmapVision />

      {/* 13 — Founding Member Access */}
      <FoundingAccess />

      {/* 14 — Pricing Plans */}
      <PricingPlans />

      {/* 15 — Final CTA */}
      <FinalCTA />

      {/* 16 — Footer */}
      <Footer />
    </div>
  );
}
