// Single place for outbound links used across the v2 homepage.
export const LINKS = {
  whop: "https://whop.com/spy-options-alerts/spy-options-alerts/",
  discord: "#", // TODO: Discord invite link
  instagram: "https://instagram.com/spypivotpro",
} as const;

export const NAV_ITEMS = [
  { label: "Alerts", href: "#alerts" },
  { label: "How it works", href: "#how" },
  { label: "The System", href: "#system" },
  { label: "FAQ", href: "#faq" },
] as const;
