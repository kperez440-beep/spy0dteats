import { ScrollProgress } from "@/app/components/ScrollProgress";
import { Nav } from "@/app/components/Nav";
import { Ticker } from "@/app/components/Ticker";
import { Hero } from "@/app/components/Hero";
import { TrustBand } from "@/app/components/TrustBand";
import { PlatformOverview } from "@/app/components/PlatformOverview";
import { Backtest } from "@/app/components/Backtest";
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
      <PlatformOverview />
      <Backtest />
      <Waitlist />
      <Footer />
    </div>
  );
}
