import { Boxes, Database, MailCheck, Layers, PenLine, ShieldCheck, Check, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { Eyebrow } from './SectionHeading'

// The six things Coldcast does — the value props that replace a whole stack.
const POINTS = [
  { icon: Database, title: 'Fresh & accurate data', desc: 'Scraped live on demand — never a stale, recycled database.' },
  { icon: MailCheck, title: 'Real-time email validation', desc: 'Every address verified the moment it’s found.' },
  { icon: Layers, title: 'Waterfall enrichment', desc: 'Cascades across providers for maximum coverage.' },
  { icon: PenLine, title: 'Intent & personalised copy', desc: 'Signal-led first lines, written for every lead.' },
  { icon: ShieldCheck, title: '1000% safe scraping', desc: 'Your own browser, human pace — zero account bans.' },
  { icon: Boxes, title: 'One login, one bill', desc: 'Your whole GTM stack on a single subscription.' },
]

// The tools that one Coldcast subscription replaces.
const REPLACES = [
  { cat: 'Lead sourcing', tools: 'Sales Nav · Apollo · ZoomInfo' },
  { cat: 'Waterfall enrichment', tools: 'Lusha · ContactOut · SalesQL' },
  { cat: 'Email verification', tools: 'real-time, built in' },
  { cat: 'Intent & AI cold copy', tools: 'signal-based, per lead' },
  { cat: 'Account-safe scraping', tools: 'your own browser' },
  { cat: 'Outreach & sending', tools: 'Instantly · Smartlead' },
]

export default function VolumeBand() {
  return (
    <section className="relative px-6 py-16 sm:px-8 sm:py-24">
      <Reveal className="floating-panel relative mx-auto max-w-6xl overflow-hidden p-8 sm:p-12 lg:p-16">
        {/* violet→blue aurora bloom */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-24 h-[420px] w-[420px] rounded-full bg-violet/25 blur-[120px]" />
          <div className="absolute -bottom-24 right-[-6%] h-[420px] w-[520px] rounded-full bg-brand-light/20 blur-[120px]" />
        </div>

        <div className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left — the claim */}
          <div>
            <Eyebrow>
              <Boxes size={13} className="text-violet" />
              One subscription
            </Eyebrow>

            <div className="mt-6 flex items-center gap-3 font-display text-6xl font-bold leading-none tracking-tight sm:text-7xl">
              <span className="text-ink/25 line-through decoration-2">6</span>
              <ArrowRight size={40} strokeWidth={2.5} className="text-violet" />
              <span className="bg-gradient-to-br from-brand via-violet to-brand-light bg-clip-text text-transparent">1</span>
            </div>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-violet">
              six tools → one subscription
            </p>

            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Replace your entire GTM stack.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Stop stitching together a sourcer, an enricher, a verifier and a copywriter.{' '}
              <span className="font-semibold text-ink">Coldcast is all of them — in one login.</span>
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
              {POINTS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-brand-gradient-soft text-violet">
                    <Icon size={17} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — what it replaces */}
          <div className="rounded-2xl border border-hairline bg-panel/60 p-6 backdrop-blur-sm sm:p-8">
            <div className="text-sm font-semibold text-ink">Your GTM stack, unbundled</div>
            <div className="mt-1 text-xs text-muted">Every tool one Coldcast login replaces</div>

            <ul className="mt-6 flex flex-col divide-y divide-hairline">
              {REPLACES.map((r) => (
                <li key={r.cat} className="flex items-center gap-3 py-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-safe/15 text-safe">
                    <Check size={14} />
                  </span>
                  <span className="flex-1 text-sm font-medium text-ink">{r.cat}</span>
                  <span className="hidden text-xs text-muted sm:block">{r.tools}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between rounded-xl bg-brand-gradient px-4 py-3 text-white shadow-brand-btn">
              <span className="text-sm font-semibold">All in one Coldcast subscription</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
