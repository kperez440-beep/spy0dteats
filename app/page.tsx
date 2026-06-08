import { ScrollProgress } from "@/app/components/ScrollProgress";
import { Nav } from "@/app/components/Nav";
import { Ticker } from "@/app/components/Ticker";
import { Hero } from "@/app/components/Hero";
import { TrustBand } from "@/app/components/TrustBand";
import { Stats } from "@/app/components/Stats";
import { WallStreet } from "@/app/components/WallStreet";
import { BentoGrid } from "@/app/components/BentoGrid";
import { Confluence } from "@/app/components/Confluence";
import { Backtest } from "@/app/components/Backtest";
import { ComparisonTable } from "@/app/components/ComparisonTable";
import { Pricing } from "@/app/components/Pricing";
import { Testimonials } from "@/app/components/Testimonials";
import { Roadmap } from "@/app/components/Roadmap";
import { Community } from "@/app/components/Community";
import { Partners } from "@/app/components/Partners";
import { FAQ } from "@/app/components/FAQ";
import { Waitlist } from "@/app/components/Waitlist";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050810] overflow-x-hidden">
      <ScrollProgress />
      <Nav />
      <div className="pt-[72px]">
        <Ticker />
      </div>
      <Hero />
      <TrustBand />
      <Stats />
      <WallStreet />
      <BentoGrid />
      <Confluence />
      <Backtest />
      <ComparisonTable />
      <Pricing />
      <Testimonials />
      <Roadmap />
      <Community />
      <Partners />
      <FAQ />
      <Waitlist />
      <Footer />
    </div>
  );
}
