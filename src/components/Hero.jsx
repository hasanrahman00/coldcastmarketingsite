import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ShieldCheck, CreditCard, Lock, Star } from 'lucide-react'
import Button from './Button'
import DashboardMock from './DashboardMock'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

// Trust row under the CTAs (Zeliq-style badge strip).
const TRUST = [
  { icon: ShieldCheck, label: '0 account suspensions', color: '#5dd3a8' },
  { icon: CreditCard, label: 'No credit card', color: 'rgba(255,255,255,0.7)' },
  { icon: Lock, label: 'GDPR-ready', color: 'rgba(255,255,255,0.7)' },
  { icon: Star, label: 'G2 high performer', color: '#f5bd4f' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.06 } },
}
const child = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-24 pt-32 sm:pb-28 sm:pt-36"
      style={{ backgroundColor: '#0a1020' }}
    >
      {/* Dark gradient + aurora background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(110% 80% at 50% -12%, rgba(79,124,245,0.32), transparent 55%), radial-gradient(80% 60% at 86% 0%, rgba(34,211,238,0.16), transparent 50%), radial-gradient(70% 60% at 12% 16%, rgba(124,58,237,0.22), transparent 55%), linear-gradient(180deg, #0a1020 0%, #0c1226 58%, #0a1020 100%)',
        }}
      />
      {/* Floating orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[9%] top-[16%] h-56 w-56 animate-float rounded-full bg-brand/30 blur-[110px]" />
        <div className="absolute right-[11%] top-[8%] h-64 w-64 animate-float-slow rounded-full bg-violet/25 blur-[120px]" />
      </div>
      {/* Fade the dark hero into the light body */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-44"
        style={{ backgroundImage: 'linear-gradient(180deg, transparent, #f6f8ff)' }}
      />

      <motion.div
        variants={container}
        initial={reduce ? false : 'hidden'}
        animate="show"
        className="container-px relative"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Eyebrow pill — spotlights the new AI SDR product */}
          <motion.a
            variants={child}
            href="#how"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-sm text-white/85 backdrop-blur transition-colors hover:bg-white/[0.12]"
          >
            <span className="rounded-full bg-brand/50 px-2 py-0.5 text-[11px] font-semibold text-white">
              New
            </span>
            AI SDR runs your outreach
            <ArrowRight size={14} className="text-white/55" />
          </motion.a>

          {/* Headline */}
          <motion.h1
            variants={child}
            className="mt-7 text-balance font-freudian text-[2.5rem] font-bold uppercase leading-[0.98] tracking-[-0.01em] text-white sm:text-[3.4rem] lg:text-[4.25rem]"
          >
            Find, enrich &amp; email{' '}
            <span className="text-gradient">your next customers.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={child}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg"
          >
            One account-safe platform — scrape Sales Navigator, Apollo &amp; ZoomInfo, get verified
            emails, and let an AI SDR run the outreach. From your own browser.{' '}
            <span className="font-semibold text-white">Zero account suspensions.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={child}
            className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
          >
            <Button as="a" href={TRIAL_URL} variant="primary" size="lg" className="w-full sm:w-auto">
              Start free trial
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              as="a"
              href={DEMO_URL}
              variant="outline-light"
              size="lg"
              className="w-full sm:w-auto"
            >
              Book a demo
            </Button>
          </motion.div>

          {/* Trust row */}
          <motion.ul
            variants={child}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5"
          >
            {TRUST.map(({ icon: Icon, label, color }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-xs text-white/60 sm:text-[13px]"
              >
                <Icon size={15} style={{ color }} />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Product screenshot peeking up from the dark hero into the light body */}
        <motion.div variants={child} className="relative mx-auto mt-16 max-w-5xl">
          <div
            aria-hidden
            className="absolute inset-x-8 -top-6 bottom-8 -z-10 rounded-[2.5rem] bg-brand/25 blur-3xl"
          />
          <DashboardMock />
        </motion.div>
      </motion.div>
    </section>
  )
}
