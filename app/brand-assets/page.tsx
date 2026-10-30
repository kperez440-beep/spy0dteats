import type { Metadata } from "next";
import { geist } from "@/app/fonts";
import { BrandAssets } from "@/app/components/v2/BrandAssets";

// Internal page: source frames for Whop/social graphics, exported by screenshot.
export const metadata: Metadata = {
  title: "Brand assets",
  robots: { index: false, follow: false },
};

export default function BrandAssetsPage() {
  return (
    <div className={`${geist.variable} min-h-screen bg-[#1a1a1a] text-[#EEF0F5]`}>
      <BrandAssets />
    </div>
  );
}
