import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Baloo_2 } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

// Rounded logotype face for the SPY Pivot Pro wordmark specifically — reads
// close to Segoe UI Rounded (used on the Windows desktop terminal) but is a
// real open web font, so it renders identically on Mac/Linux/mobile instead
// of silently falling back on non-Windows visitors.
const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const DESCRIPTION =
  "An automated system built to trade SPY 0DTE options. Get its graded alerts, its reasoning, and its daily positions live in Discord.";

export const metadata: Metadata = {
  title: "SPY Pivot Pro: a trading robot built for SPY",
  description: DESCRIPTION,
  metadataBase: new URL("https://spypivotpro.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "SPY Pivot Pro: watch the machine think",
    description: DESCRIPTION,
    url: "https://spypivotpro.com",
    siteName: "SPY Pivot Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPY Pivot Pro: watch the machine think",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${baloo2.variable} h-full`}
    >
      <body className="min-h-full bg-[#050904] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
