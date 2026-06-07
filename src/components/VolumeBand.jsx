import { motion } from 'framer-motion'
import { Gauge, Infinity as InfinityIcon, CalendarClock, Layers } from 'lucide-react'
import Reveal from './Reveal'
import Counter from './Counter'
import { Eyebrow } from './SectionHeading'

const POINTS = [
  { icon: Gauge, title: 'Beyond the practical export limit', desc: 'Built to pull up to ~20,000 leads per account, per day — an order of magnitude past what typical Sales Nav scrapers deliver before they choke.' },
  { icon: InfinityIcon, title: 'No throttling, no mystery caps', desc: 'No daily credits that slow to a crawl mid-export — a steady, human-paced flow from the first row to the last.' },
  { icon: CalendarClock, title: 'A whole campaign in a day', desc: 'An entire territory or ICP captured, enriched, and de-duplicated in one sitting instead of rationed over a week.' },
  { icon: Layers, title: 'Scales across accounts', desc: 'Per-account volume means a team of seats compounds into serious daily throughput.' },
]

// Comparison bars (categorical, not a named-competitor benchmark).
const BARS = [
  { label: 'Typical Sales Nav scrapers', value: 2500, pct: 13, strong: false },
  { label: 'Best-case other tools', value: 5000, pct: 25, strong: false },
  { label: 'Coldcast', value: 20000, pct: 100, strong: true },
]

export default function VolumeBand() {
  return (
    <section className="relative px-6 py-16 sm:px-8 sm:py-24">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-hairline bg-bg2/80 p-8 shadow-card backdrop-blur-md sm:p-12 lg:p-16">
        {/* violet→blue aurora bloom */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-24 h-[420px] w-[420px] rounded-full bg-violet/25 blur-[120px]" />
          <div className="absolute -bottom-24 right-[-6%] h-[420px] w-[520px] rounded-full bg-brand-light/20 blur-[120px]" />
        </div>

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left — claim */}
          <div>
            <Eyebrow>
              <Gauge size={13} className="text-violet" />
              Volume without the ceiling
            </Eyebrow>

            <div className="mt-6 flex items-end gap-2">
              <Counter
                to={20000}
                className="bg-gradient-to-br from-white via-violet to-brand-light bg-clip-text font-display text-6xl font-bold leading-none tracking-tight text-transparent sm:text-7xl"
              />
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-violet">
              leads / account / day
            </p>

            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Export at a scale other scrapers can’t touch.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Sales Navigator quietly throttles exports, and most scrapers hit a wall at a few hundred
              to a couple thousand rows before they stall or get blocked. Coldcast keeps going — so
              your list size is decided by your strategy, not someone else’s cap.{' '}
              <span className="font-semibold text-ink">Per account. Per day. Not per month.</span>
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {POINTS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-white/5 text-violet">
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

          {/* Right — comparison bars */}
          <div className="rounded-2xl border border-hairline bg-panel/60 p-6 backdrop-blur-sm sm:p-8">
            <div className="text-sm font-semibold text-ink">Daily export ceiling</div>
            <div className="mt-1 text-xs text-muted">Leads per account, per day</div>
            <div className="mt-7 flex flex-col gap-6">
              {BARS.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className={bar.strong ? 'font-semibold text-ink' : 'text-muted'}>
                      {bar.label}
                    </span>
                    <span className={`tabular-nums ${bar.strong ? 'font-semibold text-violet' : 'text-muted'}`}>
                      {bar.strong ? 'up to ' : '~'}
                      {bar.value.toLocaleString('en-US')}
                    </span>
                  </div>
                  <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${
                        bar.strong
                          ? 'bg-gradient-to-r from-brand-light to-violet shadow-[0_0_24px_-4px_rgba(168,85,247,0.7)]'
                          : 'bg-white/15'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-7 text-[11px] leading-relaxed text-muted/60">
              “Up to ~20,000” is Coldcast’s stated daily capability per account, under normal account
              standing. Competitor ranges are a category generalization. [PLACEHOLDER — substantiate
              with your tested figures.]
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
