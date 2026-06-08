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
    "Multi-signal confluence, ML win probability, intraday playback, and auto-learn engine for SPY options. Sharpe 14. Calmar 995. Built by Fortitud Capital.",
  metadataBase: new URL("https://spypivotpro.com"),
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "SPY Pivot Pro — Institutional Edge. Retail Price.",
    description: "The only platform engineered for SPY options. $100 → $1,217 in January 2026. Sharpe 14. Built by Fortitud Capital.",
    url: "https://spypivotpro.com",
    siteName: "SPY Pivot Pro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPY Pivot Pro — Institutional Edge. Retail Price.",
    description: "Sharpe 14. Calmar 995. MaxDD -5.4%. Built on 11-signal confluence + ML win probability.",
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
