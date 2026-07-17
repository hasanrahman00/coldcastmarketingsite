import { Fragment } from 'react'
import { Rocket, Check, X, ShieldCheck, Zap, Timer, Target, Gauge, Sparkles, Filter, Wallet, Headset } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import Button from './Button'
import Logo from './Logo'
import { TRIAL_URL } from '../lib/constants'

// [PLACEHOLDER] The speed / match-rate / price figures below are competitive
// illustrations framed against typical cloud scrapers. Confirm them against your
// own benchmarks before publishing — keep them defensible.
//
// Each row carries a MINT icon: it names the metric (STATE/context), while LIME
// is saved for the Coldcast column's actual wins (the `win` values + the support
// check). That's the same split the rest of the page runs — mint names, lime
// marks the win — so the eye is pulled to the three figures that sell the section.
const ROWS = [
  { icon: Timer, feature: 'Time to export 2,500 leads', others: '30 min – 2 hrs', cold: '~5 minutes', win: true },
  { icon: Target, feature: 'Email & phone match rate', others: '30 – 50%', cold: '70 – 85%', win: true },
  { icon: Gauge, feature: 'Speed limit', others: 'Throttled after a few hundred', cold: 'Up to ~20,000 / day' },
  { icon: Sparkles, feature: 'Data cleaning', others: 'Manual cleanup', cold: 'Auto de-dupe + email validation' },
  { icon: ShieldCheck, feature: 'Account safety', others: 'Shared cloud IPs', cold: 'Your own IP & session' },
  { icon: Filter, feature: 'Lead filtering', others: 'Sales Navigator filters only', cold: '+ buying-intent scoring' },
  { icon: Wallet, feature: 'Price to export 2,500 leads', others: '$25 – $50', cold: '$0 — scraping is free', win: true },
  { icon: Headset, feature: 'Live customer support', others: false, cold: true, bool: true },
]

// Left-aligned throughout — the values read as a scannable table rather than a
// centred spec sheet, so the eye runs straight down each column.
const labelCell = 'border-t border-hairline px-5 py-4 text-left text-sm font-medium text-ink'
const otherCell = 'border-t border-hairline px-5 py-4 text-left text-sm text-muted'
const coldCell = 'border-x-2 border-t border-brand/15 border-x-brand/30 bg-brand/[0.06] px-5 py-4 text-left text-sm'

export default function SpeedAccuracy() {
  return (
    <section id="speed" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Speed &amp; accuracy"
          eyebrowIcon={Rocket}
          eyebrowTone="amber"
          title="Faster exports. Higher match rates. Lower cost."
          subtitle="Run the same Sales Navigator search and walk away with more verified contacts, in a fraction of the time — without the per-lead bill other scrapers hand you."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-bg2/60 px-4 py-8 shadow-card backdrop-blur-md sm:px-8 sm:py-10">
            <div className="overflow-x-auto">
              <div className="mx-auto grid min-w-[640px] max-w-4xl grid-cols-[1.25fr_1fr_1fr] items-stretch">
                {/* Header row — labels ride left over their columns now */}
                <div className="px-5 pb-4" />
                <div className="flex items-end justify-start px-5 pb-4 text-left text-sm font-semibold text-muted">
                  Other Sales Navigator scrapers
                </div>
                <div className="rounded-t-[1.4rem] border-x-2 border-t-2 border-brand/30 bg-brand/[0.06] px-5 pb-4 pt-5 text-left">
                  {/* Neutral chip: it's a column label, not a CTA. Graphite lets the
                      lime logo tile read as the brand mark without fighting the
                      mint STATE column beneath it. */}
                  <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/[0.05] px-3 py-1.5 text-sm font-semibold text-ink">
                    <Logo size={18} />
                    With Coldcast
                  </span>
                </div>

                {/* Feature rows */}
                {ROWS.map(({ icon: Icon, ...row }) => (
                  <Fragment key={row.feature}>
                    <div className={labelCell}>
                      <span className="flex items-center gap-2.5">
                        <Icon size={16} strokeWidth={1.9} className="shrink-0 text-lime" />
                        {row.feature}
                      </span>
                    </div>

                    <div className={otherCell}>
                      {row.bool ? (
                        <X size={16} className="text-danger" />
                      ) : (
                        row.others
                      )}
                    </div>

                    <div className={coldCell}>
                      {row.bool ? (
                        // A verified "we have it" tick — mint (state), not lime.
                        <Check size={16} className="text-accent" />
                      ) : (
                        <span className={`font-semibold ${row.win ? 'text-lime' : 'text-ink'}`}>
                          {row.win && <Zap size={12} className="mr-1 inline-block -translate-y-px fill-lime text-lime" />}
                          {row.cold}
                        </span>
                      )}
                    </div>
                  </Fragment>
                ))}

                {/* CTA footer under the Coldcast column */}
                <div />
                <div />
                <div className="rounded-b-[1.4rem] border-x-2 border-b-2 border-brand/30 bg-brand/[0.06] px-5 pb-6 pt-5 text-center">
                  <Button as="a" href={TRIAL_URL} variant="primary" size="md" className="w-full">
                    Start free trial
                  </Button>
                  <div className="mt-3 flex items-center justify-center gap-3 text-[11px] font-medium text-muted">
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck size={12} className="text-accent" />
                      Account-safe
                    </span>
                    <span className="h-3 w-px bg-hairline" />
                    <span className="inline-flex items-center gap-1">
                      <Check size={12} className="text-accent" />
                      No card required
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
