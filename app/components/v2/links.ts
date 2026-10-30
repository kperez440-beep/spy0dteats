// Single place for outbound links used across the v2 homepage.
export const LINKS = {
  whop: "#pricing", // TODO: replace with the Whop product URL once the listing is live
  discord: "#",
  instagram: "https://instagram.com/spypivotpro",
} as const;

export const NAV_ITEMS = [
  { label: "Alerts", href: "#alerts" },
  { label: "How it works", href: "#how" },
  { label: "The System", href: "#system" },
  { label: "FAQ", href: "#faq" },
] as const;
