import { Check } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { LOGIN_URL, SALES_URL } from '../lib/constants'

// Each feature is { label, tag? } — tag is the small badge on the right
// (e.g. usage-based rates or "included").
const PLANS = [
  {
    name: 'Free',
    blurb: 'Kick the tyres — connect your accounts and pull real, enriched leads.',
    price: 'Free',
    note: '1-day trial · no card required',
    features: [
      { label: 'Connect unlimited accounts' },
      { label: 'Unlimited scraping' },
      { label: '1,000 email enrichments', tag: 'included' },
      { label: '100 catch-all cleans', tag: 'included' },
      { label: 'Single job at a time' },
    ],
    cta: 'Start free trial',
    href: LOGIN_URL,
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
    href: LOGIN_URL,
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

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Pricing"
          title="Start free. Scale when you need to."
          subtitle="Connect unlimited accounts and scrape unlimited data on every plan — you only pay to enrich and verify the contacts you actually want."
        />

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 transition-transform duration-200 hover:-translate-y-1 ${
                  plan.featured
                    ? 'bg-white/90 shadow-float backdrop-blur-sm'
                    : 'border border-hairline bg-white/85 shadow-card backdrop-blur-sm'
                }`}
              >
                {/* Gradient border for the featured card */}
                {plan.featured && (
                  <span aria-hidden className="gradient-ring pointer-events-none absolute inset-0" />
                )}

                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient-vivid px-3 py-1 text-xs font-semibold text-white shadow-brand-btn">
                    Most popular
                  </span>
                )}

                <div className="relative flex h-full flex-col">
                  <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
                  <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-muted">{plan.blurb}</p>

                  <div className="mt-6 flex flex-wrap items-end gap-x-1.5">
                    <span
                      className={`font-display font-bold leading-none tracking-tight text-ink ${
                        plan.period ? 'text-5xl' : 'text-4xl'
                      }`}
                    >
                      {plan.price}
                    </span>
                    {plan.period && <span className="pb-1 text-sm text-muted">{plan.period}</span>}
                  </div>
                  <p className="mt-2 text-xs font-medium text-muted">{plan.note}</p>

                  <Button
                    as="a"
                    href={plan.href}
                    variant={plan.featured ? 'primary' : 'ghost'}
                    size="lg"
                    className="mt-6 w-full"
                  >
                    {plan.cta}
                  </Button>

                  <ul className="mt-7 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature.label} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                          <Check size={13} className="text-accent" />
                        </span>
                        <span className="flex-1 text-ink/90">{feature.label}</span>
                        {feature.tag && (
                          <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                            {feature.tag}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Every plan runs account-safe in your own browser and exports clean CSV / XLSX. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
