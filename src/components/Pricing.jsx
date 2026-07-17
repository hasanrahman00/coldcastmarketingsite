import { Tag, Search, Rocket, Building2, Link2, Droplets, Globe, Bot } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

// Every plan ships the whole toolkit — the tiers differ only by daily volume and
// how enrichment is billed. So the seven tools live in one shared strip below the
// cards rather than being repeated inside each, and the cards carry only what
// actually changes: volume + enrichment terms. Each tool carries its own icon so
// the strip reads as a labelled toolkit, not a flat checklist.
const TOOLS = [
  { name: 'LinkedIn Sales Navigator', icon: Search },
  { name: 'Apollo.io scraper', icon: Rocket },
  { name: 'ZoomInfo scraper', icon: Building2 },
  { name: 'LinkedIn URL enrichment', icon: Link2 },
  { name: 'Waterfall phone & email enrichment', icon: Droplets },
  { name: 'Domain enrichment', icon: Globe },
  { name: 'AI SDR', icon: Bot },
]

const PLANS = [
  {
    name: 'Free trial',
    tagline: 'Full access for one day — no card required.',
    volume: '1,000',
    volumeUnit: 'leads / day',
    volumeNote: 'Scraping included — free, in your own browser',
    // The lime figures are the ones a buyer actually compares between plans.
    usageLabel: 'Included free',
    usage: [
      { rate: '50 free', unit: 'waterfall verified emails' },
      { rate: '50 free', unit: 'catch-all cleaned emails' },
    ],
    cta: 'Start free trial',
    href: TRIAL_URL,
    ctaVariant: 'ghost',
    featured: false,
  },
  {
    name: 'Pay as you go',
    tagline: 'Scrape free. Pay only for the contacts you enrich.',
    volume: '20,000',
    volumeUnit: 'leads / day',
    volumeNote: 'Scraping included — free, in your own browser',
    usageLabel: 'Enrichment — usage-based, no subscription',
    usage: [
      { rate: '$0.003', unit: 'per waterfall verified email' },
      { rate: '$0.0015', unit: 'per catch-all cleaned email' },
    ],
    cta: 'Get started',
    href: TRIAL_URL,
    ctaVariant: 'primary',
    featured: true,
  },
  {
    name: 'Agency',
    tagline: 'For teams and agencies running volume across many clients.',
    volume: 'Custom',
    volumeUnit: 'volume & pricing',
    volumeNote: 'Available by request — book a call with our team',
    usageLabel: 'Built for scale',
    usage: [
      { rate: 'Unlimited', unit: 'concurrent jobs & seats' },
      { rate: 'Custom', unit: 'volume enrichment rates' },
      { rate: 'Priority', unit: 'support & onboarding' },
    ],
    cta: 'Book a demo',
    href: DEMO_URL,
    ctaVariant: 'mint',
    featured: false,
  },
]

function PlanCard({ plan }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-200 hover:-translate-y-1 ${
        plan.featured
          ? 'bg-panel2 shadow-[0_30px_90px_-40px_rgba(204,255,0,0.35),0_20px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm'
          : 'border border-hairline bg-panel shadow-card backdrop-blur-sm'
      }`}
    >
      {/* Lime gradient ring on the buy surface — matches the pill + CTA accent. */}
      {plan.featured && (
        <span aria-hidden className="gradient-ring-lime pointer-events-none absolute inset-0" />
      )}
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-lime-ink shadow-lime-btn">
          Most popular
        </span>
      )}

      <div className="relative flex h-full flex-col">
        <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
        <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-muted">{plan.tagline}</p>

        {/* The hero metric is daily VOLUME, not a monthly price — scraping is free
            on every plan, so the number that separates the tiers is throughput.
            (The Agency tier is negotiated, so it reads "Custom".) */}
        <div className="mt-7 flex items-baseline gap-2">
          <span className="font-display text-5xl font-bold leading-none tracking-tight text-ink">
            {plan.volume}
          </span>
          <span className="text-sm font-medium text-muted">{plan.volumeUnit}</span>
        </div>
        <p className="mt-2 text-xs font-medium text-faint">{plan.volumeNote}</p>

        <Button as="a" href={plan.href} variant={plan.ctaVariant} size="lg" className="mt-7 w-full">
          {plan.cta}
        </Button>

        {/* Transparent per-unit enrichment terms — the lime figures pop as the
            thing worth comparing. */}
        <div className="mt-7 rounded-2xl border border-hairline bg-white/[0.02] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            {plan.usageLabel}
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {plan.usage.map((u) => (
              <div key={u.unit} className="flex items-baseline justify-between gap-3">
                <span className="text-[13px] leading-snug text-ink/80">{u.unit}</span>
                <span className="shrink-0 font-display text-sm font-bold tabular-nums text-lime">
                  {u.rate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      {/* Soft lime bloom behind the featured (centre) card — a premium lift. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[440px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.05] blur-[150px]" />
      </div>

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Pricing"
          eyebrowIcon={Tag}
          eyebrowTone="teal"
          title="Start free. Scale when you need to."
          subtitle="Scrape every source free in your own browser — you only pay to enrich and verify the contacts you actually want."
        />

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        {/* Shared toolkit — every plan gets all seven tools, each as its own
            chip with a lime icon tile rather than a flat line of checks. */}
        <Reveal delay={0.15} className="mx-auto mt-6 max-w-6xl">
          <div className="rounded-2xl border border-hairline bg-panel/50 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Every plan includes all seven tools
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {TOOLS.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-hairline bg-white/[0.03] px-3.5 py-2.5 transition-colors duration-200 hover:border-lime/30 hover:bg-lime/[0.04]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-lime/25 bg-lime-gradient-soft text-lime">
                    <Icon size={13} />
                  </span>
                  <span className="text-sm font-medium text-ink/90">{name}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-sm text-muted">
          Every plan runs account-safe in your own browser and exports clean CSV / XLSX. No subscription,
          no lock-in.
        </p>
      </div>
    </section>
  )
}
