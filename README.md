# Coldcast — Landing Site

A production-quality marketing landing page for **Coldcast**, a tool that exports and
enriches leads from LinkedIn Sales Navigator. Single-page React + Vite app, dark
developer-SaaS aesthetic (Linear / Vercel / Stripe vibe).

## Stack

- **React 18** + **Vite**
- **Tailwind CSS** (custom dark-navy design system)
- **framer-motion** — scroll/entrance animations (respects `prefers-reduced-motion`)
- **lucide-react** — icons
- **@fontsource/inter** — self-hosted Inter font

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
coldcast/
├── index.html              # SEO meta tags, favicon link, root mount
├── public/
│   └── favicon.svg         # the Coldcast logo swirl (also the favicon)
├── src/
│   ├── main.jsx            # React entry
│   ├── App.jsx             # page composition (all sections in order)
│   ├── index.css           # Tailwind layers, fonts, base styles, reduced-motion
│   ├── lib/
│   │   └── constants.js    # APP_URL, nav links, sample lead data
│   └── components/
│       ├── Logo.jsx            # gradient tile + inline SVG swirl
│       ├── Wordmark.jsx        # logo + "Coldcast" + tagline
│       ├── Button.jsx          # primary / ghost / light variants
│       ├── Reveal.jsx          # scroll-reveal motion wrapper
│       ├── SectionHeading.jsx  # eyebrow pill + heading + subtitle
│       ├── Navbar.jsx          # sticky nav, scroll state, mobile menu
│       ├── Hero.jsx            # headline, CTAs, trust row, dashboard mock
│       ├── DashboardMock.jsx   # CSS/div mock of the Coldcast app
│       ├── TrustBar.jsx        # social proof + enrichment-source badges
│       ├── Features.jsx        # 6 glassmorphic feature cards
│       ├── HowItWorks.jsx      # 4 numbered steps
│       ├── Safety.jsx          # prominent account-safety section
│       ├── OutputPreview.jsx   # styled example data table
│       ├── Pricing.jsx         # 3 plans, middle highlighted
│       ├── FAQ.jsx             # accessible accordion
│       ├── FinalCTA.jsx        # full-width gradient CTA band
│       └── Footer.jsx          # logo, link columns, socials, copyright
├── tailwind.config.js      # design tokens (colors, gradients, shadows)
├── postcss.config.js
└── vite.config.js
```

## Design tokens

Defined in `tailwind.config.js`:

| Token            | Value                              |
| ---------------- | ---------------------------------- |
| `bg`             | `#0a1124` (page background)         |
| `panel`          | `#101a37` (elevated panel)          |
| `panel2`         | `#16223f` (elevated panel, lighter) |
| `ink`            | `#eaf0fb` (text)                    |
| `muted`          | `#aeb9d6` (muted text)              |
| `brand.light`    | `#4f7cf5` (primary gradient start)  |
| `brand.DEFAULT`  | `#3257d6` (primary gradient end)    |
| `accent`         | `#22d3ee` (cyan accent)             |
| `hairline`       | `rgba(255,255,255,.08)` (borders)   |

## Placeholders to replace before launch

Search the codebase for these:

- **`[APP_URL]`** — `src/lib/constants.js` → `APP_URL` (and `LOGIN_URL`). Every
  "Get started" / "Log in" button points here. Currently `https://app.coldcast.io`.
- **`[PLACEHOLDER_PRICE]`** — `src/components/Pricing.jsx`. Three plan prices.
- **Social links** — `src/components/Footer.jsx` (`SOCIALS`) plus the About / Contact /
  Privacy / Terms links (currently `#`).
- **`og:image`** — `index.html` references `https://coldcast.io/og-image.png`. Drop a real
  1200×630 share image at `public/og-image.png` (and update the URL if needed).
- **`[HERO_SCREENSHOT]`** — the hero ships with a built-from-scratch CSS dashboard mock
  (`DashboardMock.jsx`). Swap it for a real screenshot in `Hero.jsx` if you prefer.

## Accessibility

- Semantic landmarks (`header` / `main` / `footer` / `nav` / `section`)
- "Skip to content" link, visible focus rings, `aria-expanded` on the nav + FAQ
- `alt` / `aria-label` on icon-only controls and decorative elements marked `aria-hidden`
- Honors `prefers-reduced-motion` (disables scroll animation and smooth scrolling)
