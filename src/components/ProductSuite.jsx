import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Rain from './Rain'

// Per-card accent: a coloured gradient wash over a glass base + tile tint + glow.
// `from`/`border`/`hover`/`tile` are full literal class strings so Tailwind JIT keeps them.
const TINT = {
  brand: { tile: 'bg-brand/25 ring-brand/40', glow: 'rgba(79,124,245,0.45)', from: 'from-brand/[0.22]', border: 'border-brand/35', hover: 'hover:border-brand/60' },
  violet: { tile: 'bg-violet/25 ring-violet/40', glow: 'rgba(167,139,250,0.40)', from: 'from-violet/[0.22]', border: 'border-violet/35', hover: 'hover:border-violet/60' },
  cyan: { tile: 'bg-accent/25 ring-accent/40', glow: 'rgba(34,211,238,0.38)', from: 'from-accent/[0.22]', border: 'border-accent/35', hover: 'hover:border-accent/60' },
  safe: { tile: 'bg-safe/25 ring-safe/40', glow: 'rgba(52,211,153,0.38)', from: 'from-safe/[0.22]', border: 'border-safe/35', hover: 'hover:border-safe/60' },
  amber: { tile: 'bg-amber/25 ring-amber/40', glow: 'rgba(251,191,36,0.38)', from: 'from-amber/[0.22]', border: 'border-amber/35', hover: 'hover:border-amber/60' },
  magenta: { tile: 'bg-magenta/25 ring-magenta/40', glow: 'rgba(232,121,249,0.38)', from: 'from-magenta/[0.22]', border: 'border-magenta/35', hover: 'hover:border-magenta/60' },
}

const TOOLS = [
  { emoji: '🎯', color: 'brand', name: 'Sales Navigator Scraper', desc: 'Export any Sales Nav search in minutes — at human pace.', to: '/products/sales-navigator-scraper' },
  { emoji: '🚀', color: 'violet', name: 'Apollo Scraper', desc: 'Pull whole lists straight out of Apollo.', to: '/products/apollo-scraper' },
  { emoji: '🏢', color: 'amber', name: 'ZoomInfo Scraper', desc: 'Export ZoomInfo company & contact data.', to: '/products/zoominfo-scraper' },
  { emoji: '💧', color: 'cyan', name: 'Waterfall Enricher', desc: 'Cascade across sources for verified emails & phones.', to: '/products/waterfall-enricher' },
  { emoji: '✅', color: 'safe', name: 'Email Verify', desc: 'Validate every address before you send.', to: '/products/email-verify' },
  { emoji: '🌐', color: 'magenta', name: 'Domain Enrichment', desc: 'Firmographics & website data from any domain.', to: '/products/domain-enrichment' },
]

const TAG = {
  New: 'bg-brand/25 text-brand-light',
}

function Glow({ color, className = '' }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute rounded-full opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${className}`}
      style={{ background: TINT[color].glow }}
    />
  )
}

export default function ProductSuite({ showHeading = true }) {
  return (
    <section id="products" className="relative overflow-hidden py-24 sm:py-32">
      {/* Rain continues from the hero into this section */}
      <Rain count={34} className="opacity-25" />

      <div className="container-px relative">
        {showHeading && (
          <SectionHeading
            eyebrow="One platform"
            title="Seven tools. One account-safe platform."
            subtitle="Scrape, enrich, verify and reach — all from your own browser. Use any tool on its own, or run the whole pipeline end to end."
          />
        )}

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* AI SDR — featured, full width */}
          <Reveal as="div" className="sm:col-span-2 lg:col-span-3">
            <Link
              to="/coldcast-agent"
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border-2 border-brand/40 bg-black/[0.04] p-7 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/60 sm:flex-row sm:items-center"
            >
              <Glow color="brand" className="-right-10 -top-10 h-48 w-48 opacity-60" />
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-2xl shadow-brand-btn">
                🤖
              </span>
              <div className="relative flex-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-lg font-semibold text-ink">AI SDR</h3>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${TAG.New}`}>New</span>
                </div>
                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted">
                  Writes personalised emails, follows up, and books meetings off your enriched list —
                  on autopilot, 24/7.
                </p>
              </div>
              <span className="relative inline-flex items-center gap-1.5 self-start text-sm font-medium text-brand-light sm:self-center">
                Meet your AI SDR
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>

          {/* The 6 data tools */}
          {TOOLS.map(({ emoji, color, name, desc, to }, i) => (
            <Reveal as="div" key={name} delay={(i % 3) * 0.06}>
              <Link to={to} className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-br via-black/[0.05] to-black/[0.06] p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 ${TINT[color].from} ${TINT[color].border} ${TINT[color].hover}`}>
                <Glow color={color} className="-right-6 -top-6 h-36 w-36" />
                <div className="relative flex items-center justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[22px] leading-none ring-1 ${TINT[color].tile}`}>
                    {emoji}
                  </span>
                  <ArrowRight size={16} className="text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>
                <h3 className="relative mt-5 text-base font-semibold text-ink">{name}</h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
