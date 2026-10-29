/**
 * FORTITUD CAPITAL — Brand Identity System
 * Source of truth for all color, typography, and voice tokens.
 * Used by the website (import from here) and mirrored in brand_identity.py
 * for the SPY Pivot Pro desktop terminal.
 */

// ── Color Tokens ─────────────────────────────────────────────────────────────

export const COLORS = {
  // Backgrounds — near-black, not forest green. First pass swapped the G/B
  // channels of the old navy scale 1:1, which preserved that scale's full
  // saturation and just pointed it at green instead of blue — every panel
  // turned into visible green paint covering the whole system. Corrected
  // per direct feedback (2026-08-20, on the desktop terminal but applies
  // equally here since the two are meant to mirror): the system color is
  // black. Green is the accent (mark, borders, canopy text), not the fill.
  // These are true near-neutral blacks with only a faint green whisper.
  bg: {
    primary:   "#040503", // section background — used across every major section
    secondary: "#0a0d09", // cards, panels
    tertiary:  "#10140f", // nested panels, table rows
    elevated:  "#171d16", // tooltips, floating elements
    overlay:   "#050603", // modals, drawers
  },

  // Borders
  border: {
    default: "#1a4026",
    active:  "#245233",
    glow:    "#2d6e4a",
    canopy:  "rgba(193,255,114,0.25)",
  },

  // ── Brand Accents ──────────────────────────────────────────────────────────
  // Canopy: the brand's actual accent — pulled directly from the real logo
  // artwork, not picked in the abstract. This slot previously held a gold
  // accent (#D4A840) inherited from an earlier design pass; canopy replaces
  // it as the true, distinctly-ours brand color.
  canopy:     "#C1FF72",
  canopyHi:   "#D9FFA0", // hover, active states
  canopyLo:   "#6A8C3F", // decorative, muted uses
  canopyShim: ["#C1FF72", "#D9FFA0", "#EEFFC7", "#D9FFA0", "#C1FF72"] as const,

  // Signal colors — keep these; they work well in both UI contexts
  bull:      "#10B981", // emerald green — bullish, winning, growth
  bear:      "#F87171", // soft red — bearish, stop, alert
  data:      "#5B8DB8", // muted blue — informational data layer
  quant:     "#4ECDC4", // teal — Fortitud Quant Lab accent (distinct from canopy)

  // Text
  text: {
    primary:   "#EEF0F5", // near-white with slight blue tint
    secondary: "#8899AA", // muted slate — labels, subtitles
    muted:     "#445566", // very muted — metadata, timestamps
    inverse:   "#081c0e", // text on canopy backgrounds (CTAs)
  },
} as const;

// ── Typography ───────────────────────────────────────────────────────────────

export const TYPOGRAPHY = {
  sans:  "IBM Plex Sans, sans-serif",
  mono:  "IBM Plex Mono, monospace",
  // For desktop terminal (Qt):
  termMono: "Cascadia Mono, Consolas, monospace",
} as const;

// ── Brand Identity ────────────────────────────────────────────────────────────

export const BRAND = {
  parent:  "FORTITUD CAPITAL",          // company name (no E — intentional)
  product: "SPY Pivot Pro",             // product name
  tagline: "Institutional Trading Research",
  quant:   "Fortitud Quant Lab",        // sub-brand for backtest / research center

  // Logo guidance
  logo: {
    mark:        "FortitudTree",        // oak tree — the universal brand mark
    productMark: "SPYPivotMark",        // pivot wedge on a point — SPY Pivot Pro specific
    treeColor: {
      onDark:   "#FFFFFF",              // white tree on dark backgrounds
      onCanopy: "#081c0e",              // dark tree on canopy
      branded:  "#C1FF72",              // canopy tree for lockups
    },
  },

  // Proof points (update as data improves)
  proof: {
    equity:  "$100 → $1,217",
    sharpe:  "Sharpe 14",
    maxdd:   "MaxDD −5.4%",
    period:  "Jan 2026 Backtest",
  },
} as const;

// ── Voice & Tone ──────────────────────────────────────────────────────────────

export const VOICE = {
  primary:   "Data-confident. Not hype-loud.",
  secondary: "Precise without being corporate. Technical without jargon.",
  pillars:   [
    "The system speaks for itself — copy just shows you what it does.",
    "Sell the experience of winning, not the promise of it.",
    "Institutional first. Retail accessible. Never retail-coded.",
  ],
  avoid:     ["guaranteed", "get rich", "easy money", "moon", "signals"],
  prefer:    ["edge", "probability", "discipline", "institutional", "systematic", "decision"],
} as const;

// ── Motion ───────────────────────────────────────────────────────────────────

export const MOTION = {
  ease: [0.16, 1, 0.3, 1] as const,
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    show:   { opacity: 1, y: 0  },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show:   { opacity: 1 },
  },
  stagger: 0.08,
} as const;

// ── Border Radius ─────────────────────────────────────────────────────────────

export const RADIUS = {
  sm:   "4px",
  md:   "8px",
  lg:   "12px",
  xl:   "16px",
  "2xl":"20px",
  full: "9999px",
} as const;
