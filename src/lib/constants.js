// ─────────────────────────────────────────────────────────────
// Placeholders — replace before launch
// ─────────────────────────────────────────────────────────────

// [APP_URL] — where every "Get started" / sign-up button points
export const APP_URL = 'https://app.coldcast.io'
// Log-in derives from the same app origin
export const LOGIN_URL = `${APP_URL}/login`

// Top-nav anchor links (smooth-scroll to in-page sections)
export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#signals', label: 'Signals' },
  { href: '#how', label: 'How it works' },
  { href: '#safety', label: 'Safety' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

// Enrichment sources shown in the trust bar
export const ENRICHMENT_SOURCES = ['Lusha', 'SalesQL', 'ContactOut', 'LinkedIn']

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

// Realistic example rows for the hero mock + output-preview table.
// Each lead carries captured intent "signals" (tier: 'strong' | 'supporting').
// NOTE: illustrative SAMPLE DATA — not real people or customers.
export const SAMPLE_LEADS = [
  {
    name: 'Sarah Chen',
    title: 'VP Marketing',
    company: 'Datadog',
    website: 'datadoghq.com',
    email: 'sarah.chen@datadoghq.com',
    phone: '+1 (415) 555-0142',
    location: 'San Francisco, CA',
    linkedin: '/in/sarahchen',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    signals: [
      { label: 'New in role · 3 wks', tier: 'strong' },
      { label: 'Posted last 30 days', tier: 'supporting' },
    ],
  },
  {
    name: 'Marcus Reid',
    title: 'Head of Sales',
    company: 'Snowflake',
    website: 'snowflake.com',
    email: 'marcus.reid@snowflake.com',
    phone: '+1 (650) 555-0188',
    location: 'San Mateo, CA',
    linkedin: '/in/marcusreid',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    signals: [
      { label: 'Headcount +22% · 90d', tier: 'strong' },
      { label: 'Hiring 14 GTM roles', tier: 'supporting' },
    ],
  },
  {
    name: 'Priya Nair',
    title: 'Director of Demand Gen',
    company: 'HubSpot',
    website: 'hubspot.com',
    email: 'priya.nair@hubspot.com',
    phone: '+1 (617) 555-0119',
    location: 'Boston, MA',
    linkedin: '/in/priyanair',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    signals: [
      { label: 'Changed jobs · 90d', tier: 'strong' },
      { label: 'Decision-maker fit', tier: 'supporting' },
    ],
  },
  {
    name: 'Tom Becker',
    title: 'Chief Revenue Officer',
    company: 'Ramp',
    website: 'ramp.com',
    email: 'tom.becker@ramp.com',
    phone: '+1 (212) 555-0173',
    location: 'New York, NY',
    linkedin: '/in/tombecker',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    signals: [
      { label: 'Series C raised', tier: 'strong' },
      { label: 'New VP hire', tier: 'strong' },
    ],
  },
]
