import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Target,
  Rocket,
  Building2,
  Droplets,
  BadgeCheck,
  Globe,
  Bot,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Mint-monochrome suite: every card is the same graphite panel with a hairline
// border that goes mint on hover. Cards are differentiated by icon + copy, never
// by hue.
const TOOLS = [
  { Icon: Target, name: 'Sales Navigator Scraper', desc: 'Export any Sales Nav search in minutes — at human pace.', to: '/products/sales-navigator-scraper' },
  { Icon: Rocket, name: 'Apollo Scraper', desc: 'Pull whole lists straight out of Apollo.', to: '/products/apollo-scraper' },
  { Icon: Building2, name: 'ZoomInfo Scraper', desc: 'Export ZoomInfo company & contact data.', to: '/products/zoominfo-scraper' },
  { Icon: Droplets, name: 'Waterfall Enricher', desc: 'Cascade across sources for verified emails & phones.', to: '/products/waterfall-enricher' },
  { Icon: BadgeCheck, name: 'Email Verify', desc: 'Validate every address before you send.', to: '/products/email-verify' },
  { Icon: Globe, name: 'Domain Enrichment', desc: 'Firmographics & website data from any domain.', to: '/products/domain-enrichment' },
]

const TAG = {
  New: 'bg-brand/15 text-accent ring-1 ring-brand/30',
}

export default function ProductSuite({ showHeading = true }) {
  return (
    <section id="products" className="relative overflow-hidden py-24 sm:py-32">
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
              className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-brand/35 bg-brand/[0.06] p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/55 sm:flex-row sm:items-center"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-brand/10 blur-3xl transition-opacity duration-300 group-hover:bg-brand/[0.14]"
              />
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand/15 text-accent ring-1 ring-brand/30">
                <Bot size={26} strokeWidth={1.8} />
              </span>
              <div className="relative flex-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">AI SDR</h3>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${TAG.New}`}>New</span>
                </div>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
                  Writes personalised emails, follows up, and books meetings off your enriched list —
                  on autopilot, 24/7.
                </p>
              </div>
              <span className="relative inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent sm:self-center">
                Meet your AI SDR
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>

          {/* The 6 data tools */}
          {TOOLS.map(({ Icon, name, desc, to }, i) => (
            <Reveal as="div" key={name} delay={(i % 3) * 0.06}>
              <Link
                to={to}
                className="group relative flex h-full flex-col rounded-2xl border border-hairline bg-panel p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-float"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-accent ring-1 ring-brand/30">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <ArrowRight size={16} className="text-faint opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink">{name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
