import { Geist } from "next/font/google";

// Headline face for the v2 homepage (chosen over IBM Plex Sans on 2026-10-29).
export const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});
