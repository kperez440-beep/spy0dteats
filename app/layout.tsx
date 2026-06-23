import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "SPY Pivot Pro — Institutional SPY Options Intelligence",
  description:
    "Precision SPY 0DTE options intelligence. Multi-signal confluence, ML win probability, and automated execution planning. Built by Fortitud Capital.",
  metadataBase: new URL("https://spypivotpro.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "SPY Pivot Pro — Institutional Trading Research",
    description: "The only platform engineered for SPY 0DTE options. 7-module intelligence stack. ML win probability. Built by Fortitud Capital.",
    url: "https://spypivotpro.com",
    siteName: "SPY Pivot Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPY Pivot Pro — Institutional Trading Research",
    description: "7-module intelligence stack. 73.2% ML win probability. 11-signal confluence engine. Built by Fortitud Capital.",
    creator: "@spypivotpro",
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
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full bg-[#050810] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
