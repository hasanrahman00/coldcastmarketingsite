import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

// Ink closing block — bookends the paper page, flows straight into the footer.
export default function FinalCTA() {
  return (
    <section className="bg-ink pb-28 pt-24 sm:pb-36 sm:pt-32">
      <div className="container-px">
        <Reveal>
          <p className="kicker !text-bg/50">07 — Start tonight</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.02em] text-bg sm:text-[3.6rem] lg:text-[4.2rem]">
            Your next thousand customers are <em className="accent-em !text-[#8FA3F5]">already on LinkedIn.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bg/60 sm:text-lg">
            Run the search you already know. Coldcast exports, enriches and verifies it into a
            send-ready ledger — while your account stays safe.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-10 flex flex-wrap items-center gap-6">
          <Button as="a" href={TRIAL_URL} variant="light" size="lg">
            Start free trial
            <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
          <a href={DEMO_URL} className="link-draw text-[15px] font-medium text-bg/85 hover:text-bg">
            Book a demo
          </a>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-8 font-mono text-[10.5px] uppercase tracking-[0.18em] text-bg/40">
            No card required · 1-day trial · Cancel anytime
          </p>
        </Reveal>
      </div>
    </section>
  )
}
