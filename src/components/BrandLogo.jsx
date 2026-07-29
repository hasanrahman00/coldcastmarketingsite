// Self-hosted brand mark — a brand-colored monogram tile. Renders NO external
// image: the old version fetched logo.clearbit.com with a Google-favicon
// fallback, which showed up as ~40 failed/blocked "page resources" in Search
// Console (Clearbit's free logo API is deprecated, and Google's favicon service
// blocks crawlers via robots.txt) and broke for real visitors too.
//
// This is fully SSR-safe and zero-latency: no image loads, no third-party DNS,
// no layout shift (fixed size), and the brand NAME stays real crawlable text
// wherever it's rendered next to this tile.
const BRAND_COLOR = {
  'linkedin.com': '#0A66C2',
  'apollo.io': '#5B4FE9',
  'zoominfo.com': '#E51937',
  'lusha.com': '#16B79A',
  'contactout.com': '#2F6BFF',
  'salesql.com': '#2D9CDB',
  'rocketreach.co': '#2563EB',
  'hunter.io': '#F26B21',
  'crunchbase.com': '#146AFF',
  'seamless.ai': '#5A31F4',
  'cognism.com': '#2B2A66',
  'anthropic.com': '#CC785C',
  'openai.com': '#10A37F',
  'deepseek.com': '#4D6BFE',
  'instantly.ai': '#5C63F5',
  'smartlead.ai': '#7C3AED',
  'lemlist.com': '#FF5C6E',
  'reachinbox.ai': '#4F46E5',
}

export default function BrandLogo({ domain, name, size = 36 }) {
  const initials = name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()
  const color = BRAND_COLOR[domain]
  const fontSize = Math.max(9, Math.round(size * 0.36))
  return (
    <span
      className={
        'flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-hairline shadow-[0_2px_8px_-3px_rgba(0,0,0,0.55)]' +
        (color ? '' : ' bg-panel2')
      }
      style={{ width: size, height: size, background: color || undefined }}
      title={name}
    >
      <span className={'font-bold leading-none ' + (color ? 'text-white' : 'text-ink')} style={{ fontSize }}>
        {initials}
      </span>
    </span>
  )
}
