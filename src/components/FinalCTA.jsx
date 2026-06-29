import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import { TRIAL_URL } from '../lib/constants'

export default function FinalCTA() {
  return (
    <section className="relative px-6 py-16 sm:px-8 sm:py-24">
      <Reveal
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-black/15 px-6 py-16 text-center shadow-glow-violet sm:px-12 sm:py-24"
        style={{ backgroundImage: 'linear-gradient(135deg, #6d3df0 0%, #4f7cf5 55%, #d946ef 130%)' }}
      >
        {/* radial accents */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-black/15 blur-3xl" />
          <div className="absolute -bottom-24 right-[-6%] h-80 w-80 rounded-full bg-magenta/30 blur-3xl" />
          <div className="absolute left-1/3 top-1/2 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Export your next list — the safe way.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink/85 sm:text-lg">
            Turn the searches you already run into clean, enriched spreadsheets — without putting your
            LinkedIn account at risk.
          </p>
          <div className="mt-9 flex justify-center">
            <Button as="a" href={TRIAL_URL} variant="light" size="lg">
              Start free trial
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
