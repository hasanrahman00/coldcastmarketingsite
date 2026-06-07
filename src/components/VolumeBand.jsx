import { motion } from 'framer-motion'
import { Gauge, Infinity as InfinityIcon, CalendarClock, Layers } from 'lucide-react'
import Reveal from './Reveal'
import Counter from './Counter'
import { Eyebrow } from './SectionHeading'

const POINTS = [
  { icon: Gauge, title: 'Past the ceiling', desc: '10× typical scraper caps.' },
  { icon: InfinityIcon, title: 'No throttling', desc: 'Steady flow, start to finish.' },
  { icon: CalendarClock, title: 'A campaign a day', desc: 'A full ICP in one sitting.' },
  { icon: Layers, title: 'Scales with seats', desc: 'Volume compounds per account.' },
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
      <Reveal className="floating-panel relative mx-auto max-w-6xl overflow-hidden p-8 sm:p-12 lg:p-16">
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
                className="bg-gradient-to-br from-brand via-violet to-brand-light bg-clip-text font-display text-6xl font-bold leading-none tracking-tight text-transparent sm:text-7xl"
              />
            </div>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-violet">
              leads / account / day
            </p>

            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              A scale other scrapers can’t touch.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Others stall at a few thousand rows. Coldcast keeps going.{' '}
              <span className="font-semibold text-ink">Per account. Per day. Not per month.</span>
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
                  <div className="h-3 w-full overflow-hidden rounded-full bg-black/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${
                        bar.strong
                          ? 'bg-gradient-to-r from-brand-light to-violet shadow-[0_0_24px_-4px_rgba(168,85,247,0.7)]'
                          : 'bg-black/15'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-7 text-[11px] leading-relaxed text-muted">
              Up to ~20,000 leads per account, per day — under normal account standing.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
