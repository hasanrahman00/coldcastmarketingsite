import { Check } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TrialSignup from './TrialSignup'

const PERKS = [
  'No credit card — get an access key instantly',
  'Export a real, enriched lead list today',
  'Account-safe — runs through your own browser',
]

export default function TrialSection() {
  return (
    <section id="trial" className="relative px-6 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Free trial"
            title="Try Coldcast free for 24 hours"
            subtitle="Spin up a key in seconds and run your first export — no card, no sales call."
          />
          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-3">
              {PERKS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ink/80 sm:text-base">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-safe/10 text-safe">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <TrialSignup />
        </Reveal>
      </div>
    </section>
  )
}
