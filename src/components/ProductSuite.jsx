import { Bot, Target, Rocket, Building2, Droplet, MailCheck, Globe, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Rain from './Rain'

const TOOLS = [
  { icon: Target, name: 'Sales Navigator Scraper', tag: 'Live', desc: 'Export any Sales Nav search in minutes — at human pace.' },
  { icon: Rocket, name: 'Apollo Scraper', tag: 'Soon', desc: 'Pull whole lists straight out of Apollo.' },
  { icon: Building2, name: 'ZoomInfo Scraper', tag: 'Soon', desc: 'Export ZoomInfo company & contact data.' },
  { icon: Droplet, name: 'Waterfall Enricher', tag: 'Soon', desc: 'Cascade across sources for verified emails & phones.' },
  { icon: MailCheck, name: 'Email Verify', tag: 'Soon', desc: 'Validate every address before you send.' },
  { icon: Globe, name: 'Domain Enrichment', tag: 'Soon', desc: 'Firmographics & website data from any domain.' },
]

const TAG = {
  Live: 'bg-safe/15 text-safe',
  Soon: 'bg-white/10 text-muted',
  New: 'bg-brand/25 text-brand-light',
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
              className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl border-2 border-brand/40 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.06] sm:flex-row sm:items-center"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand/25 blur-[90px]"
              />
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-brand-btn">
                <Bot size={26} />
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
          {TOOLS.map(({ icon: Icon, name, tag, desc }, i) => (
            <Reveal as="div" key={name} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-hairline bg-white/[0.04] p-6 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-brand-gradient-soft text-accent">
                    <Icon size={20} />
                  </span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${TAG[tag]}`}>
                    {tag}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold text-ink">{name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
