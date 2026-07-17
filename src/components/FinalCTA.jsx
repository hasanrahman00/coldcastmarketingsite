import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { TRIAL_URL } from '../lib/constants'

// Ports the mock's `.final` treatment: a graphite panel sitting on the frame,
// hairline border, and a soft bloom spilling in from above the top edge.
// The card reports no state — it exists to be clicked — so the stroke and the
// bloom follow the button into lime rather than ringing it in mint. The panel
// itself stays graphite; lime here is only a thin edge and a glow. Alpha is
// well under the old mint's 0.16 because #ccff00 carries far more light.
const CTA_GLOW =
  'radial-gradient(600px 300px at 50% -80px, rgba(204,255,0,0.10), transparent 70%)'

export default function FinalCTA() {
  return (
    <section className="container-px py-24 sm:py-32">
      <Reveal className="relative overflow-hidden rounded-[24px] border border-lime/25 bg-panel px-6 py-20 text-center sm:px-12 sm:py-24">
        {/* lime bloom off the top edge */}
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: CTA_GLOW }} />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            Let&rsquo;s start with your next list.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Export, enrich and verify your next thousand leads — account-safe, from your own browser.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href={TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-16 items-center justify-center gap-2 rounded-full bg-lime-gradient px-12 text-sm font-semibold uppercase tracking-[0.1em] text-lime-ink shadow-lime-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lime-btn-hover focus-visible:ring-lime"
            >
              Start free trial
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="mt-6 text-[13px] font-medium text-faint">
            1-day free trial · 1,000 leads · 50 credits · no card required
          </div>
        </div>
      </Reveal>
    </section>
  )
}
