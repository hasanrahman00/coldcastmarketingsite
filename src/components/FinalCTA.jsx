import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import { TRIAL_URL } from '../lib/constants'

// Bookends the hero: the light body fades through clouds back into deep purple.
const CTA_BG =
  'radial-gradient(ellipse 130% 62% at 50% -6%, rgba(255,255,255,0.95) 0%, rgba(205,217,255,0.6) 26%, transparent 56%),' +
  'linear-gradient(180deg, #f5f4fc 0%, #bcc6ff 15%, #7b4fd4 42%, #5720ce 68%, #3a10a0 100%)'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden pb-24 pt-28 sm:pb-32 sm:pt-36" style={{ backgroundImage: CTA_BG }}>
      {/* soft cloud wisps along the top transition */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-72">
        <div className="absolute left-[6%] top-4 h-44 w-[42%] rounded-[50%] bg-white/55 blur-[70px]" />
        <div className="absolute right-[4%] top-0 h-48 w-[46%] rounded-[50%] bg-white/45 blur-[80px]" />
      </div>

      <Reveal className="container-px relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
          Let&rsquo;s start with your next list.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
          Export, enrich and verify your next thousand leads — account-safe, from your own browser.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href={TRIAL_URL}
            className="group inline-flex h-16 items-center justify-center gap-2 rounded-full bg-white px-12 text-sm font-semibold uppercase tracking-[0.1em] text-[#4520b0] shadow-[0_18px_50px_-12px_rgba(20,8,60,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/95"
          >
            Start free trial
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
