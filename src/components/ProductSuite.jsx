import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Rain from './Rain'

// Per-card accent: a soft tile tint + a corner glow that brightens on hover.
const TINT = {
  brand: { tile: 'bg-brand/20', glow: 'rgba(79,124,245,0.30)' },
  violet: { tile: 'bg-violet/20', glow: 'rgba(167,139,250,0.28)' },
  cyan: { tile: 'bg-accent/20', glow: 'rgba(34,211,238,0.26)' },
  safe: { tile: 'bg-safe/20', glow: 'rgba(52,211,153,0.26)' },
  amber: { tile: 'bg-amber/20', glow: 'rgba(251,191,36,0.26)' },
}

const TOOLS = [
  { emoji: '🎯', color: 'brand', name: 'Sales Navigator Scraper', tag: 'Live', desc: 'Export any Sales Nav search in minutes — at human pace.' },
  { emoji: '🚀', color: 'violet', name: 'Apollo Scraper', tag: 'Soon', desc: 'Pull whole lists straight out of Apollo.' },
  { emoji: '🏢', color: 'cyan', name: 'ZoomInfo Scraper', tag: 'Soon', desc: 'Export ZoomInfo company & contact data.' },
  { emoji: '💧', color: 'cyan', name: 'Waterfall Enricher', tag: 'Soon', desc: 'Cascade across sources for verified emails & phones.' },
  { emoji: '✅', color: 'safe', name: 'Email Verify', tag: 'Soon', desc: 'Validate every address before you send.' },
  { emoji: '🌐', color: 'amber', name: 'Domain Enrichment', tag: 'Soon', desc: 'Firmographics & website data from any domain.' },
]

const TAG = {
  Live: 'bg-safe/15 text-safe',
  Soon: 'bg-white/10 text-muted',
  New: 'bg-brand/25 text-brand-light',
}

function Glow({ color, className = '' }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute rounded-full opacity-50 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${className}`}
      style={{ background: TINT[color].glow }}
    />
  )
}

export default function ProductSuite() {
  return (
    <section id="products" className="relative overflow-hidden py-24 sm:py-32">
      {/* Rain continues from the hero into this section */}
      <Rain count={34} className="opacity-25" />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="One platform"
          title="Seven tools. One account-safe platform."
          subtitle="Scrape, enrich, verify and reach — all from your own browser. Use any tool on its own, or run the whole pipeline end to end."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* AI SDR — featured, full width */}
          <Reveal as="div" className="sm:col-span-2 lg:col-span-3">
            <a
              href="#ai-sdr"
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border-2 border-brand/40 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/60 sm:flex-row sm:items-center"
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
            </a>
          </Reveal>

          {/* The 6 data tools */}
          {TOOLS.map(({ emoji, color, name, tag, desc }, i) => (
            <Reveal as="div" key={name} delay={(i % 3) * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-hairline bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-white/15">
                <Glow color={color} className="-right-8 -top-8 h-28 w-28" />
                <div className="relative flex items-center justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-[22px] leading-none ${TINT[color].tile}`}>
                    {emoji}
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${TAG[tag]}`}>
                    {tag}
                  </span>
                </div>
                <h3 className="relative mt-5 text-base font-semibold text-ink">{name}</h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
