import { Tag, Search, Rocket, Building2, Link2, Droplets, Globe, Bot, Check, MailCheck, Coins } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

// Every plan ships the whole toolkit — the tiers differ only by scrape volume and
// seats. So the seven tools live in one shared strip below the cards, and enrichment
// pricing lives in ONE shared credit table (credit base: 1 credit = $0.001), rather
// than being repeated per card. Cards carry only what changes: price + scrape volume.
const TOOLS = [
  { name: 'LinkedIn Sales Navigator', icon: Search },
  { name: 'Apollo.io scraper', icon: Rocket },
  { name: 'ZoomInfo scraper', icon: Building2 },
  { name: 'LinkedIn URL enrichment', icon: Link2 },
  { name: 'Waterfall phone & email enrichment', icon: Droplets },
  { name: 'Domain enrichment', icon: Globe },
  { name: 'AI SDR', icon: Bot },
]

// Enrichment is billed in credits. 1 credit = $0.001 (1,000 credits = $1), so the
// per-10,000 prices below are just the credit cost × 10,000 × $0.001.
const CREDIT_RATES = [
  { icon: Droplets, action: 'Email enrichment', detail: 'waterfall verified email', credits: '3 credits', per: '$30 / 10,000' },
  { icon: MailCheck, action: 'Email verify', detail: 'per email checked', credits: '1 credit', per: '$10 / 10,000' },
  { icon: Globe, action: 'Domain enrichment', detail: 'per domain enriched', credits: '6 credits', per: '$60 / 10,000' },
]

const PLANS = [
  {
    name: 'Free trial',
    price: 'Free',
    priceUnit: 'for 1 day',
    tagline: 'Full access for a day — no card required.',
    metric: '100 leads / day',
    metricNote: 'All 7 scrapers · secure cloud browser',
    listLabel: 'Included free',
    list: ['50 email-enrichment credits', '50 email-verify credits', 'Every scraper unlocked'],
    cta: 'Start free trial',
    href: TRIAL_URL,
    ctaVariant: 'ghost',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$49',
    priceUnit: '/ month',
    tagline: 'Every scraper on one flat plan. Enrichment on usage-based credits.',
    metric: '600,000 leads / month',
    metricNote: '20,000 / day · all 7 scrapers · secure cloud browser',
    listLabel: 'Enrichment (usage-based credits)',
    list: ['Email enrichment — 3 credits', 'Email verify — 1 credit', 'Domain enrichment — 6 credits'],
    cta: 'Get started',
    href: TRIAL_URL,
    ctaVariant: 'primary',
    featured: true,
  },
  {
    name: 'Agency',
    price: 'Custom',
    priceUnit: 'volume pricing',
    tagline: 'For teams and agencies running volume across many clients.',
    metric: 'Unlimited seats',
    metricNote: 'Custom scrape volume · book a call with our team',
    listLabel: 'Built for scale',
    list: ['Higher scrape limits', 'Discounted credit rates', 'Priority support & onboarding'],
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
          ? 'bg-panel2 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.35),0_20px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm'
          : 'border border-hairline bg-panel shadow-card backdrop-blur-sm'
      }`}
    >
      {plan.featured && <span aria-hidden className="gradient-ring-lime pointer-events-none absolute inset-0" />}
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-gradient px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-lime-ink shadow-lime-btn">
          Most popular
        </span>
      )}

      <div className="relative flex h-full flex-col">
        <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
        <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-muted">{plan.tagline}</p>

        {/* Hero metric is the PRICE now (the tiers differ by price + scrape volume). */}
        <div className="mt-7 flex items-baseline gap-2">
          <span className="font-display text-5xl font-bold leading-none tracking-tight text-ink">{plan.price}</span>
          <span className="text-sm font-medium text-muted">{plan.priceUnit}</span>
        </div>

        {/* Scrape volume — the second thing that separates the tiers. */}
        <div className="mt-4 rounded-xl border border-hairline bg-black/[0.02] px-4 py-3">
          <div className="text-sm font-semibold text-ink">{plan.metric}</div>
          <div className="mt-0.5 text-xs text-faint">{plan.metricNote}</div>
        </div>

        <Button as="a" href={plan.href} variant={plan.ctaVariant} size="lg" className="mt-6 w-full">
          {plan.cta}
        </Button>

        <div className="mt-7 rounded-2xl border border-hairline bg-black/[0.02] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{plan.listLabel}</p>
          <div className="mt-4 flex flex-col gap-2.5">
            {plan.list.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[13px] leading-snug text-ink/80">
                <Check size={14} strokeWidth={2.5} className="mt-0.5 shrink-0 text-lime" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CreditRates() {
  return (
    <div className="rounded-2xl border border-hairline bg-panel/60 p-6 backdrop-blur-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
          <Coins size={14} className="text-lime" /> Enrichment credits — pay only for what you use
        </p>
        <p className="text-[13px] font-medium text-ink/70">
          Credit base: <span className="font-bold text-ink">1 credit = $0.001</span> <span className="text-faint">(1,000 credits = $1)</span>
        </p>
      </div>

      <div className="mt-6 divide-y divide-hairline border-y border-hairline">
        {CREDIT_RATES.map(({ icon: Icon, action, detail, credits, per }) => (
          <div key={action} className="flex items-center gap-4 py-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-panel2 text-ink">
              <Icon size={16} strokeWidth={1.9} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-ink">{action}</div>
              <div className="text-xs text-faint">{detail}</div>
            </div>
            <div className="shrink-0 text-right">
              <div className="font-display text-sm font-bold tabular-nums text-lime">{credits}</div>
              <div className="text-xs text-faint tabular-nums">{per}</div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[13px] text-muted">
        <span className="font-semibold text-ink">Scraping is included in your plan</span> — up to 600,000 leads a month
        (20,000/day) across all seven scrapers. No credits used for scraping; credits only pay for enrichment &amp; verification.
      </p>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[440px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.05] blur-[150px]" />
      </div>

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Pricing"
          eyebrowIcon={Tag}
          eyebrowTone="teal"
          title="Simple, credit-based pricing."
          subtitle="One $49/month plan runs all seven scrapers — up to 600,000 leads a month (20,000/day). Enrichment is usage-based credits: you pay only for the emails and domains you actually enrich."
        />

        <Reveal delay={0.08} className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] font-medium text-muted">
          {['No card to start', 'Cancel anytime', 'Account-safe', 'Volume discounts'].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check size={14} strokeWidth={2.5} className="text-ink" />
              {t}
            </span>
          ))}
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        {/* The clear credit table — the single source of truth for enrichment pricing. */}
        <Reveal delay={0.12} className="mx-auto mt-6 max-w-6xl">
          <CreditRates />
        </Reveal>

        {/* Shared toolkit — every plan gets all seven tools. */}
        <Reveal delay={0.15} className="mx-auto mt-6 max-w-6xl">
          <div className="rounded-2xl border border-hairline bg-panel/50 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Every plan includes all seven tools
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {TOOLS.map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2.5 rounded-xl border border-hairline bg-black/[0.015] px-4 py-3 transition-colors duration-200 hover:-translate-y-px hover:border-ink/25 hover:bg-black/[0.035]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-hairline bg-panel2 text-ink">
                    <Icon size={14} strokeWidth={1.9} />
                  </span>
                  <span className="text-[13.5px] font-medium leading-tight text-ink">{name}</span>
                  <Check size={14} strokeWidth={2.5} className="ml-auto shrink-0 text-ink/35" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-sm text-muted">
          Every plan runs account-safe in a secure cloud browser and exports clean CSV / XLSX. Enrichment credits are
          usage-based — buy only what you enrich.
        </p>
      </div>
    </section>
  )
}
