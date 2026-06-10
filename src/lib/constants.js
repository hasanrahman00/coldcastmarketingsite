// ─────────────────────────────────────────────────────────────
// Placeholders — replace before launch
// ─────────────────────────────────────────────────────────────

// [APP_URL] — where every "Get started" / sign-up button points
export const APP_URL = 'https://app.coldcast.io'
// Self-serve free-trial page — lives on the dashboard app (app.coldcast.io/#trial).
// This is where every primary "Free trial" CTA points.
export const TRIAL_URL = `${APP_URL}/#trial`
// [PLACEHOLDER] demo-booking link (Calendly / Cal.com) for the "Book a demo" CTA
export const DEMO_URL = 'https://calendly.com/coldcast/demo'
// [PLACEHOLDER] sales / contact address for the Custom plan + footer "Contact"
export const SALES_URL = 'mailto:hello@coldcast.io'

// Top-nav anchor links (smooth-scroll to in-page sections)
export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#signals', label: 'Signals' },
  { href: '#how', label: 'How it works' },
  { href: '#safety', label: 'Safety' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

// Enrichment sources shown in the trust bar (logo + domain for BrandLogo)
export const ENRICHMENT_SOURCES = [
  { name: 'Lusha', domain: 'lusha.com' },
  { name: 'SalesQL', domain: 'salesql.com' },
  { name: 'ContactOut', domain: 'contactout.com' },
  { name: 'LinkedIn', domain: 'linkedin.com' },
]

// ─────────────────────────────────────────────────────────────
// Social proof — [PLACEHOLDER] swap for real, substantiated values.
// A bare, unattributed "#1" is NOT defensible. This claim is scoped to
// "account-safe" and shown as a rating chip — only publish it once you have
// real G2 / Capterra / Chrome Web Store reviews to back it.
// ─────────────────────────────────────────────────────────────
export const RATING = {
  stars: '4.9', // [PLACEHOLDER] real aggregate rating
  source: 'G2', // [PLACEHOLDER] where the rating actually lives
  claim: 'Rated #1 account-safe Sales Navigator scraper', // [PLACEHOLDER] needs ranking evidence
}

// Example rows for the hero mock + output-preview table.
// Derived from a real Coldcast export, but PRIVACY-SAFE for a public page:
// last names are reduced to an initial, LinkedIn handles are de-identified, and
// emails/phones are illustrative (the raw scrape has no email/phone — those come
// from the enrichment step; 555 numbers are reserved/fake). Signals are derived
// from real fields (title, company size, founded year, tenure).
// [PLACEHOLDER] swap for full real values only with consent / a private demo.
export const SAMPLE_LEADS = [
  {
    name: 'Tiffanie K.',
    title: 'Chief Revenue Officer',
    company: 'illumenature candle co',
    website: 'illumenature.com',
    email: 'tiffanie.k@illumenature.com',
    phone: '+1 (614) 555-0132',
    location: 'Lewis Center, OH',
    linkedin: '/in/tiffanie-k',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    signals: [
      { label: 'CRO · decision-maker', tier: 'strong' },
      { label: '201–500 employees', tier: 'supporting' },
    ],
  },
  {
    name: 'Tyler B.',
    title: 'Chief Executive Officer',
    company: 'Scalawags Franchise Systems',
    website: 'scalawagswhitefish.com',
    email: 'tyler.b@scalawagswhitefish.com',
    phone: '+1 (313) 555-0119',
    location: 'Detroit, MI',
    linkedin: '/in/tyler-b',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    signals: [
      { label: 'CEO · decision-maker', tier: 'strong' },
      { label: 'Restaurants · 200+', tier: 'supporting' },
    ],
  },
  {
    name: 'Kenneth F.',
    title: 'Owner & Director of Marketing',
    company: 'Parallax Coffee Lab',
    website: 'parallax.coffee',
    email: 'kenneth.f@parallax.coffee',
    phone: '+1 (919) 555-0176',
    location: 'Raleigh-Durham, NC',
    linkedin: '/in/kenneth-f',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
    signals: [
      { label: 'Owner · decision-maker', tier: 'strong' },
      { label: '51–200 employees', tier: 'supporting' },
    ],
  },
  {
    name: 'Camille H.',
    title: 'Retail Operations Manager',
    company: 'Trove',
    website: 'trovestudio.com',
    email: 'camille.h@trovestudio.com',
    phone: '+1 (212) 555-0184',
    location: 'New York, NY',
    linkedin: '/in/camille-h',
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
    signals: [
      { label: 'New in role · ’24', tier: 'strong' },
      { label: 'Luxury retail', tier: 'supporting' },
    ],
  },
  {
    name: 'Elijah O.',
    title: 'Owner',
    company: 'U Wine Bar',
    website: 'uwinebar.com',
    email: 'elijah.o@uwinebar.com',
    phone: '+1 (206) 555-0148',
    location: 'Seattle, WA',
    linkedin: '/in/elijah-o',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    signals: [
      { label: 'Owner · decision-maker', tier: 'strong' },
      { label: 'New venture · 2025', tier: 'supporting' },
    ],
  },
]
