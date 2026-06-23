import { SmoothScroll }         from "@/app/components/SmoothScroll";
import { ScrollProgress }       from "@/app/components/ScrollProgress";
import { CursorGlow }           from "@/app/components/CursorGlow";
import { StickyMobileCTA }      from "@/app/components/StickyMobileCTA";
import { Nav }                  from "@/app/components/Nav";
import { Hero }                 from "@/app/components/Hero";
import { SystemLayers }         from "@/app/components/SystemLayers";
import { PlatformReveal }       from "@/app/components/PlatformReveal";
import { ResearchExecution }    from "@/app/components/ResearchExecution";
import { AdaptiveIntelligence } from "@/app/components/AdaptiveIntelligence";
import { Philosophy }           from "@/app/components/Philosophy";
import { FoundingGate }         from "@/app/components/FoundingGate";
import { Footer }               from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--brand-bg-primary)" }}>
      <div className="grain-overlay" aria-hidden="true" />
      <SmoothScroll />
      <CursorGlow />
      <ScrollProgress />
      <StickyMobileCTA />
      <Nav />
      <Hero />
      <SystemLayers />
      <PlatformReveal />
      <ResearchExecution />
      <AdaptiveIntelligence />
      <Philosophy />
      <FoundingGate />
      <Footer />
    </div>
  );
}
