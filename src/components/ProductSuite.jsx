import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// Lime suite: every card is the same graphite panel with a hairline border that
// goes lime on hover. Cards are differentiated by icon + copy, never by hue.
//
// The icons are mock-4's own line-art rather than lucide — drawn on a 28-box at
// a 1.6 stroke, so they read as one deliberate set. They inherit `currentColor`,
// which is what lets the tile colour drive them.
function Icon({ paths }) {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" stroke="currentColor" aria-hidden>
      {paths}
    </svg>
  )
}

const ART = {
  salesNav: (
    <>
      <circle cx="12" cy="12" r="8" strokeWidth="1.6" />
      <path d="M18 18l6 6" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  apollo: (
    <>
      <rect x="3" y="3" width="22" height="22" rx="3" strokeWidth="1.6" />
      <path d="M8 19l6-9 6 9" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  zoomInfo: (
    <>
      <circle cx="14" cy="14" r="11" strokeWidth="1.6" />
      <path d="M9 10.5h10L9 17.5h10" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  waterfall: (
    <>
      <path d="M4 6h20M8 13h12M11 20h6" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 20v4" strokeWidth="1.6" strokeLinecap="round" />
    </>
  ),
  emailVerify: (
    <>
      <rect x="3" y="6" width="22" height="16" rx="2" strokeWidth="1.6" />
      <path d="M4 8l10 8 10-8" strokeWidth="1.6" />
    </>
  ),
  domain: (
    <>
      <circle cx="14" cy="14" r="11" strokeWidth="1.6" />
      <path d="M3 14h22M14 3c-5.5 6-5.5 16 0 22M14 3c5.5 6 5.5 16 0 22" strokeWidth="1.3" />
    </>
  ),
  aiSdr: (
    <path d="M14 3l2.6 7.4L24 13l-7.4 2.6L14 23l-2.6-7.4L4 13l7.4-2.6L14 3z" strokeWidth="1.6" strokeLinejoin="round" />
  ),
}

const TOOLS = [
  { art: ART.salesNav, name: 'Sales Navigator Scraper', desc: 'Export any Sales Nav search in minutes — at human pace.', to: '/products/sales-navigator-scraper' },
  { art: ART.apollo, name: 'Apollo Scraper', desc: 'Pull whole lists straight out of Apollo.', to: '/products/apollo-scraper' },
  { art: ART.zoomInfo, name: 'ZoomInfo Scraper', desc: 'Export ZoomInfo company & contact data.', to: '/products/zoominfo-scraper' },
  { art: ART.waterfall, name: 'Waterfall Enricher', desc: 'Cascade across sources for verified emails & phones.', to: '/products/waterfall-enricher' },
  { art: ART.emailVerify, name: 'Email Verify', desc: 'Validate every address before you send.', to: '/products/email-verify' },
  { art: ART.domain, name: 'Domain Enrichment', desc: 'Firmographics & website data from any domain.', to: '/products/domain-enrichment' },
]

// A lime WASH, not a fill: bg-lime/15 over graphite stays dark, so the pill's
// lime text reads. (A solid lime fill would need #131a00 ink instead.)
const TAG = {
  New: 'bg-lime/15 text-lime ring-1 ring-lime/30',
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
          {/* The 6 data tools. Hovering floods the card lime — and EVERY ink on
              it flips to near-black in the same beat. White/lime text on a lime
              fill is ~1.2:1, so a half-done flip is an unreadable card, not a
              bold one. */}
          {TOOLS.map(({ art, name, desc, to }, i) => (
            <Reveal as="div" key={name} delay={(i % 3) * 0.06}>
              <Link
                to={to}
                className="group relative flex h-full flex-col rounded-2xl border border-hairline bg-panel p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:bg-lime hover:shadow-float"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/15 text-lime ring-1 ring-lime/30 transition-colors duration-200 group-hover:bg-[#0a0a0a]/10 group-hover:text-[#0a0a0a] group-hover:ring-[#0a0a0a]/25">
                    <Icon paths={art} />
                  </span>
                  <ArrowRight size={16} className="text-faint opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#0a0a0a] group-hover:opacity-100" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-[#0a0a0a]">
                  {name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted transition-colors duration-200 group-hover:text-[#0a0a0a]">
                  {desc}
                </p>
              </Link>
            </Reveal>
          ))}

          {/* AI SDR — full width, sitting UNDER the six data tools: it runs off
              what they produce, so it reads as the thing at the end of the
              pipeline rather than the headline above it. */}
          <Reveal as="div" className="sm:col-span-2 lg:col-span-3">
            <Link
              to="/coldcast-agent"
              className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-lime/35 bg-lime/[0.06] p-7 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-lime hover:bg-lime sm:flex-row sm:items-center"
            >
              {/* The ambient glow has to vanish on hover — a lime blur on a lime
                  fill just muddies the corner. */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-lime/10 blur-3xl transition-opacity duration-300 group-hover:opacity-0"
              />
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-lime/15 text-lime ring-1 ring-lime/30 transition-colors duration-200 group-hover:bg-[#0a0a0a]/10 group-hover:text-[#0a0a0a] group-hover:ring-[#0a0a0a]/25">
                <Icon paths={ART.aiSdr} />
              </span>
              <div className="relative flex-1">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink transition-colors duration-200 group-hover:text-[#0a0a0a]">
                    AI SDR
                  </h3>
                  {/* Inverts: lime wash on graphite becomes a graphite pill on lime. */}
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-semibold transition-colors duration-200 group-hover:bg-[#0a0a0a] group-hover:text-lime group-hover:ring-transparent ${TAG.New}`}
                  >
                    New
                  </span>
                </div>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted transition-colors duration-200 group-hover:text-[#0a0a0a]">
                  Writes personalised emails, follows up, and books meetings off your enriched list —
                  on autopilot, 24/7.
                </p>
              </div>
              <span className="relative inline-flex items-center gap-1.5 self-start text-sm font-medium text-lime transition-colors duration-200 group-hover:text-[#0a0a0a] sm:self-center">
                Meet your AI SDR
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
