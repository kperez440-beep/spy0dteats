# SPY Pivot Pro: Homepage Copy Draft v1

Status: **draft for Kevin's review.** Mark anything you want changed. Brackets like `[ ]` are open questions or placeholders.

Direction: a cinematic dark hero (Williams GP Tech feel), then a clear trading-product layout (Deepbook feel). Every CTA leads to Whop.

---

## Brand lock-in

**Colors: keep the current palette** (from `brand/identity.ts`)
| Role | Color |
|---|---|
| Background | near-black `#040503`, panels `#0a0d09` |
| Brand accent | canopy lime `#C1FF72`, used sparingly: CTAs, key numbers, highlights |
| Bull / bear | emerald `#10B981` / soft red `#F87171`, used only in alert examples |
| Text | near-white `#EEF0F5`, muted slate `#8899AA` |

**Fonts**
- Headlines: change to **Geist** (free; sharp and modern, as on award sites). IBM Plex Sans is clean but reads more like a corporate document.
- Data, numbers and alert examples: keep **IBM Plex Mono**, for the terminal feel.
- SPY Pivot Pro wordmark: keep **Baloo 2**, to match the desktop app.

**Logo usage**
- Nav: the SPY Pivot Pro lockup (pivot mark plus wordmark) in cream/white.
- Footer: "A Fortitud Capital product" with the lime tree.

**Voice:** data-confident, not hype. Never "guaranteed," "get rich," "easy money," or profit promises.

---

## 1. Nav
Logo · Alerts · How it works · The System · FAQ · **[Join on Whop]**

## 2. Hero (cinematic, full-screen video/3D background)

**Headline (chosen: A):**
**"A trading robot built for SPY. Now you can watch it think."**

**Subhead:**
An automated system built to trade SPY 0DTE options. Get its alerts, its reasoning, and its positions live in Discord, so you can find better entries and make informed decisions as a SPY day trader.

**Buttons:** **[Get the Alerts: $19/mo founding price]** · [See a sample alert ↓]

**Stats row:**
`Since Jan 2026` in development · `6+ months` of testing · `1,800+` historical alerts studied · `SPY 0DTE` only

## 3. What you get (three feature blocks)

**ALERTS**
Pivot and order-flow alerts as they happen. Each one is graded **Strong / Decent / Weak**, with the reasons. You also get a heads-up when a setup is *forming*, then a follow-up when it confirms or fades.

**THE ROBOT'S THOUGHTS**
Most alert services tell you *what*. This one tells you *why*. The system explains what it's watching, which setups it's skipping, and why. You can use it to sharpen your own read of the tape.

**DAILY POSITIONS**
What the system entered, trimmed, stopped and exited on its paper account, with entry, stop and target levels. No hiding the losers.

## 3b. Under the hood: feature highlights (grid of cards, icon + title + one line)

Headline: **"Everything it checks before it says a word."**

| Card | Line |
|---|---|
| **Alert quality grading** | Every alert is graded Strong / Decent / Weak, from a study of 1,800+ real alerts across 84 trading days. |
| **Market mood** | Trend, chop, compression, expansion, opening drive: know what kind of day it is before you trade it. |
| **Chop protection** | Knows when *not* to trade, and tells you when it's standing aside. |
| **Don't-chase check** | Flags when price has already run too far from the alert. |
| **Timeframe alignment** | Checks that the short- and higher-timeframe trends agree before calling a setup strong. |
| **Macro calendar** | FOMC, CPI and jobs-report days flagged before they move the market. |
| **VIX fear gauge** | Reads whether the market is calm or stressed. |
| **Premarket news scan** | Flags the high-impact headlines before the bell. |
| **Two-signal confirmation** | Two independent alert engines; extra conviction when both agree. |
| **Pattern library** | Pivot reclaims, moving-average retests, early reversals, opening-range setups. |

Visual: 10 cards could feel crowded. Show 6 prominently and put the rest behind "See everything it checks →", or use an animated "scanning" list. Decided at the wireframe stage.

## 4. How it works (three steps)
1. **The system scans SPY** all session: pivots, order flow, momentum and market context.
2. **It sends an alert to Discord**, graded and explained.
3. **You trade smarter.** Time your entries, avoid weak setups, and know what the system sees before you click buy. You're always in control of your own account.

## 5. A day with SPY Pivot Pro (timeline with sample messages)

| Time (ET) | Message |
|---|---|
| ~9:00 | **Premarket brief:** key levels, overnight context, the robot's bias |
| 9:30–4:00 | **Live alerts:** shown as a mock Discord message card (see the format below) |
| 9:30–4:00 | **Chop warnings:** "⚠️ Chop detected. The system is standing aside." |
| 9:30–4:00 | **Thoughts:** "Skipping this bear signal. Chop filter is on and we're inside the opening range." |
| 9:30–4:00 | **Positions:** entry, stop, T1, exit |
| ~4:15 | **Daily recap:** what fired, what worked, what didn't |

**Sample alert card (upgraded format):**
```
🟢 BULL ALERT · SPY 582.40 · 15M
💪 Quality: STRONG
   ✓ All timeframes agree  ✓ Healthy volume  ✓ Calm market
📊 Market mood: Opening Drive · VIX calm
🎯 Watching: entry zone 582.30–582.60 · invalidation 581.80
⚠️ Don't chase above 583.10
🧠 "Clean reclaim of the pivot with volume behind it. This is the kind of setup I take."
```

`[Kevin: the sample messages above are illustrative. Before launch we'll swap in screenshots of real alerts.]`

## 5b. Built by a trader who codes (founder section)

Short, personal, first person. Signed as **kevnbuffet**. No photo (deliberately faceless).

> "I started trading options in 2020. It's been a roller coaster, like it is for most of us chasing consistency.
>
> So I built alerts to help me trade better. Then I automated them, so I could stop staring at every candle and trade with some peace of mind. In 2026 I decided to turn it into a real system, and I've been building it every day since: one that watches every pivot, grades every setup, and never gets tired or emotional.
>
> Along the way, the laptop it all lived on died. I pulled the drive, recovered every line, and kept building.
>
> Today it's the second set of eyes on every SPY trade I take. It tells me when a setup is forming, whether it's worth taking, and why. That's what I'm opening up to you: alerts that help you find better entries and make informed decisions as a SPY day trader, instead of guessing.
>
> The system itself is still paper trading while I keep sharpening it, and full access to it comes later. The alerts are ready now.
>
> — kevnbuffet"

## 6. The System (spec table, Deepbook style)

| | |
|---|---|
| Instrument | SPY options (0DTE focus) |
| Alerts in use since | 2024, on the founder's own trades |
| Full system in development since | 2026 |
| Testing | 6+ months of historical replay and paper trading |
| Current status | Paper trading daily. No real-money trading yet |
| Research base | 1,800+ historical alerts studied for alert quality grading |
| Built by | A trader who codes |
| Delivery | Discord (Telegram coming soon) |
| Full system access | Not yet available. **Join the waitlist** |

## 7. Pricing

**Founding Member: $19/month**
Locked in for as long as you stay subscribed. Limited to the first 100 members.
- All live alerts with quality grades
- The robot's thoughts
- Daily positions
- Premarket brief and daily recap
- Members' Discord

**[Become a Founding Member on Whop]**

Regular price after founding spots fill: **$29/month**. Cancel anytime through Whop.

## 7b. What's next: roadmap (small section, sits right above the waitlist)

Headline: **"SPY first. Not SPY only."**

| Status | Item |
|---|---|
| ✅ Live | SPY alerts, quality grading, the robot's thoughts, daily positions |
| 🔜 Next | Telegram delivery · sector heat map (which sectors are leading or lagging SPY today) |
| 🧭 Planned | QQQ · NQ futures · high-volume names like NVDA |
| 🔒 Later | Access to the automated system itself (waitlist below) |

Copy rule: **no dates, no promises.** These are "planned," not "coming in [month]."

## 8. Waitlist: full system access
"The automated system isn't available to the public yet. Members hear first."
[email field] **[Join the waitlist]**
Decided: an email list on the site, which Kevin owns independently of Whop and Discord. Email tool to be chosen at build time (free tier).

## 9. FAQ
- **What exactly do I get?** Live SPY alerts, the robot's reasoning, daily positions, a premarket brief and a recap, all in Discord.
- **How does it help my trading?** It flags setups as they form, grades them Strong / Decent / Weak, and explains why. That helps you time entries, skip weak setups, and make informed decisions instead of trading on impulse.
- **Does the system trade real money?** Not yet. It paper trades (simulated) every session, and the positions we share are paper positions. We'll say so clearly if that ever changes.
- **Does it trade for me?** No. Alerts are information. You decide whether to place any trade in your own account.
- **Is this financial advice?** No. See the disclaimer below.
- **What experience do I need?** You should already understand SPY options and 0DTE risk. This is not a beginner course.
- **Can I get access to the automated system?** Not yet. Join the waitlist; members get first access.
- **How do I cancel?** Anytime, in one click through Whop.
- **Telegram?** Coming soon. Discord first.

## 10. Final CTA
**"Watch the machine work."**
[Get the Alerts on Whop]

## 11. Footer
SPY Pivot Pro · a Fortitud Capital product · links: Whop, Discord, Instagram @spypivotpro, Terms, Privacy

**Disclaimer (required):**
> SPY Pivot Pro alerts are for informational and educational purposes only and are not financial, investment, or trading advice. Options trading involves substantial risk and is not suitable for all investors; 0DTE options can lose their entire value within a single session. Any historical, backtested, or simulated results are hypothetical, have inherent limitations, and do not guarantee future results. Fortitud Capital is not a registered investment adviser or broker-dealer. You are solely responsible for your own trading decisions.

`[Kevin: have a lawyer glance at this disclaimer before launch. It's a solid starting point, not legal advice.]`

---

## Removed from the old site (and why)
- "73.2% ML win probability," "Sharpe 14," "$100 → $1,217": performance claims, especially backtests, are risky for a paid alert service and hard to defend. We add real results later, once there's a live track record, labeled honestly.
- "7-module intelligence stack," "11-signal confluence": jargon that doesn't tell buyers what they get.

## Launch dependency
The site shouldn't say "live alerts" until the Discord alert feed is actually running. Plan to launch the site and the alerts together.
