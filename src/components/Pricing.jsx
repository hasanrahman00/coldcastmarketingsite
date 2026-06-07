import { Check } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Button from './Button'
import { LOGIN_URL } from '../lib/constants'

const PLANS = [
  {
    name: 'Starter',
    blurb: 'For solo reps getting their first clean lists out the door.',
    features: [
      '500 enriched leads / month',
      '1 enrichment source',
      'CSV & XLSX export',
      'Account-safe exporting',
      'Email support',
    ],
    cta: 'Log in',
    featured: false,
  },
  {
    name: 'Pro',
    blurb: 'For full-time prospectors who live in Sales Navigator.',
    features: [
      '5,000 enriched leads / month',
      'All enrichment sources',
      'Priority enrichment queue',
      'De-duplication across lists',
      'CSV & XLSX export',
      'Priority support',
    ],
    cta: 'Log in',
    featured: true,
  },
  {
    name: 'Team',
    blurb: 'For sales teams that need shared lists and seats.',
    features: [
      '20,000 enriched leads / month',
      'All enrichment sources',
      '5 team seats included',
      'Shared workspace & lists',
      'Usage analytics',
      'Dedicated support',
    ],
    cta: 'Log in',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing."
          subtitle="Pick a plan that matches how many leads you pull. Upgrade, downgrade, or cancel anytime."
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

                <div className="relative">
                  <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
                  <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-muted">{plan.blurb}</p>

                  <div className="mt-6 flex flex-wrap items-end gap-x-1.5">
                    {/* [PLACEHOLDER_PRICE] — swap for a real price (e.g. "$49"). Sized so the long
                        placeholder token fits on one line in the narrow card; with a short real
                        price you can comfortably bump this to text-4xl. */}
                    <span className="text-xl font-extrabold leading-none tracking-tight text-ink">
                      [PLACEHOLDER_PRICE]
                    </span>
                    <span className="pb-0.5 text-sm text-muted">/mo</span>
                  </div>

                  <Button
                    as="a"
                    href={LOGIN_URL}
                    variant={plan.featured ? 'primary' : 'ghost'}
                    size="lg"
                    className="mt-6 w-full"
                  >
                    {plan.cta}
                  </Button>

                  <ul className="mt-7 flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15">
                          <Check size={13} className="text-accent" />
                        </span>
                        <span className="text-ink/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          All plans include account-safe exporting and CSV / XLSX downloads.
        </p>
      </div>
    </section>
  )
}
