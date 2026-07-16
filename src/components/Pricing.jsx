import { Check } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import { TRIAL_URL, SALES_URL } from '../lib/constants'

// Ledger pricing — ruled columns, serif prices, mono tags. Featured = ink card.
const PLANS = [
  {
    name: 'Free',
    blurb: 'Kick the tyres — connect your accounts and pull real, enriched leads.',
    price: 'Free',
    note: '1-day trial · no card required',
    features: [
      { label: '1-day trial access' },
      { label: 'Connect unlimited accounts' },
      { label: 'Scraping', tag: '1,000 leads' },
      { label: 'Email enrichment', tag: '50 credits' },
      { label: 'Catch-all cleaner', tag: '50 credits' },
      { label: 'Single job at a time' },
    ],
    cta: 'Start free trial',
    href: TRIAL_URL,
    featured: false,
  },
  {
    name: 'Elite',
    blurb: 'For full-time prospectors who scrape and enrich every single day.',
    price: '$49',
    period: '/mo',
    note: '+ usage-based enrichment',
    features: [
      { label: 'Connect unlimited accounts' },
      { label: 'Unlimited scraping' },
      { label: 'Email enrichment', tag: '$3 / 1,000' },
      { label: 'Catch-all cleaner', tag: '$15 / 10,000' },
      { label: 'Single job at a time' },
    ],
    cta: 'Choose Elite',
    href: TRIAL_URL,
    featured: true,
  },
  {
    name: 'Custom',
    blurb: 'For teams that need unlimited volume, enrichment, and concurrency.',
    price: 'Let’s talk',
    note: 'Custom volume & pricing',
    features: [
      { label: 'Everything in Elite' },
      { label: 'Email enrichment', tag: 'unlimited' },
      { label: 'Catch-all cleaner', tag: 'unlimited' },
      { label: 'Concurrent jobs', tag: 'unlimited' },
      { label: 'Priority support' },
    ],
    cta: 'Talk to sales',
    href: SALES_URL,
    featured: false,
  },
]

function Plan({ plan, i }) {
  const inkCard = plan.featured
  return (
    <Reveal delay={i * 0.08} className="h-full">
      <div
        className={`relative flex h-full flex-col p-7 transition-transform duration-200 hover:-translate-y-1 ${
          inkCard
            ? 'rounded-2xl bg-ink text-bg shadow-float'
            : 'rounded-2xl border border-ink/15 bg-panel shadow-card'
        }`}
      >
        <div className="flex items-baseline justify-between">
          <h3 className={`font-mono text-[11px] font-bold uppercase tracking-[0.2em] ${inkCard ? 'text-bg/60' : 'text-muted'}`}>
            {plan.name}
          </h3>
          {inkCard && (
            <span className="rounded-[4px] border-[1.5px] border-[#8FA3F5] px-1.5 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#8FA3F5]" style={{ transform: 'rotate(-2deg)' }}>
              Most popular
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-1.5">
          <span className={`font-display text-[2.75rem] font-semibold leading-none tracking-[-0.02em] ${inkCard ? 'text-bg' : 'text-ink'}`}>
            {plan.price}
          </span>
          {plan.period && <span className={`text-sm ${inkCard ? 'text-bg/50' : 'text-muted'}`}>{plan.period}</span>}
        </div>
        <p className={`mt-2 font-mono text-[10.5px] uppercase tracking-[0.14em] ${inkCard ? 'text-bg/45' : 'text-muted'}`}>
          {plan.note}
        </p>
        <p className={`mt-4 min-h-[40px] text-sm leading-relaxed ${inkCard ? 'text-bg/65' : 'text-muted'}`}>{plan.blurb}</p>

        <Button
          as="a"
          href={plan.href}
          variant={inkCard ? 'light' : 'ghost'}
          size="md"
          className="mt-6 w-full"
        >
          {plan.cta}
        </Button>

        <ul className={`mt-7 flex flex-col divide-y ${inkCard ? 'divide-white/10' : 'divide-hairline'}`}>
          {plan.features.map((feature) => (
            <li key={feature.label} className="flex items-center gap-3 py-2.5 text-sm">
              <Check size={14} strokeWidth={2.5} className={inkCard ? 'shrink-0 text-[#8FA3F5]' : 'shrink-0 text-safe'} />
              <span className={`flex-1 ${inkCard ? 'text-bg/85' : 'text-ink/90'}`}>{feature.label}</span>
              {feature.tag && (
                <span className={`shrink-0 font-mono text-[10.5px] tracking-wide ${inkCard ? 'text-bg/50' : 'text-muted'}`}>
                  {feature.tag}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="kicker lg:sticky lg:top-28">05 — Pricing</p>
          </div>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-[-0.015em] text-ink sm:text-[2.6rem]">
                Start free. <em className="accent-em">Scale when it works.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                Unlimited accounts and unlimited scraping on every plan — you only pay to enrich and
                verify the contacts you actually want.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Plan key={plan.name} plan={plan} i={i} />
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
          Account-safe on every plan · Clean CSV / XLSX exports · Cancel anytime
        </p>
      </div>
    </section>
  )
}
