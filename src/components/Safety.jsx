import { motion } from 'framer-motion'
import { ShieldCheck, ShieldAlert, Check, X } from 'lucide-react'
import Reveal from './Reveal'
import { Eyebrow } from './SectionHeading'

const THEM = [
  { emoji: '☁️', text: 'Runs a cloud / headless browser on the vendor’s own servers' },
  { emoji: '🔑', text: 'Asks for your LinkedIn login and stores it to sign in as you' },
  { emoji: '🤖', text: 'Bot-speed bursts and shared cloud IPs — foreign-session fingerprints' },
]

const US = [
  { emoji: '💻', text: 'Runs in your own browser, on your real device, session, and IP' },
  { emoji: '🔒', text: 'Never asks for or stores your password — you stay logged in yourself' },
  { emoji: '🖐️', text: 'Genuine human activity: natural scrolling, click-to-next, human pace' },
]

function Row({ emoji, text, good, i }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: good ? 12 : -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: (good ? 0.1 : 0) + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3.5 rounded-xl p-2.5 transition-colors hover:bg-black/[0.035]"
    >
      <span
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[20px] leading-none ring-1 ${
          good ? 'bg-safe/10 ring-safe/25' : 'bg-danger/10 ring-danger/25'
        }`}
      >
        {emoji}
        <span
          className={`absolute -bottom-1 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full text-ink ring-2 ring-bg2 ${
            good ? 'bg-safe' : 'bg-danger'
          }`}
        >
          {good ? <Check size={10} strokeWidth={4} /> : <X size={10} strokeWidth={4} />}
        </span>
      </span>
      <span className={`text-[13.5px] leading-relaxed ${good ? 'text-ink/90' : 'text-muted'}`}>{text}</span>
    </motion.li>
  )
}

export default function Safety() {
  return (
    <section id="safety" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[150px]" />
      </div>

      <div className="container-px relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>
              <ShieldCheck size={13} className="text-safe" />
              Safe by architecture, not by promise
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-7 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
              It runs in your browser, as you — not a bot in someone’s cloud.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Most scrapers spin up a cloud browser on their servers and ask for your LinkedIn login
              to act as you — exactly the foreign-session, robotic pattern LinkedIn flags. Coldcast
              does the opposite.
            </p>
          </Reveal>
        </div>

        {/* Contrast panels */}
        <div className="relative mx-auto mt-14 max-w-5xl">
          {/* VS divider */}
          <div aria-hidden className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-bg2 text-xs font-bold uppercase tracking-[0.15em] text-muted shadow-card">
              vs
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Them */}
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-3xl border border-danger/25 bg-gradient-to-br from-danger/[0.07] via-black/[0.02] to-transparent p-7 shadow-card backdrop-blur-sm sm:p-8">
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-danger/15 blur-[90px]" />
                <div className="relative flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold uppercase tracking-wider text-muted">Other scrapers</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-danger/30 bg-danger/10 px-3 py-1 text-xs font-medium text-danger">
                    <ShieldAlert size={13} />
                    Flagged &amp; suspended
                  </span>
                </div>
                <ul className="relative mt-6 flex flex-col gap-2">
                  {THEM.map((item, i) => (
                    <Row key={item.text} {...item} good={false} i={i} />
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Coldcast */}
            <Reveal delay={0.1}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-safe/30 bg-gradient-to-br from-safe/[0.09] via-black/[0.02] to-transparent p-7 shadow-glow-safe backdrop-blur-sm ring-1 ring-safe/10 sm:p-8">
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-safe/20 blur-[90px]" />
                <div className="relative flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold uppercase tracking-wider text-ink">Coldcast</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-safe/30 bg-safe/10 px-3 py-1 text-xs font-medium text-safe">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-safe opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-safe" />
                    </span>
                    Account stays safe
                  </span>
                </div>
                <ul className="relative mt-6 flex flex-col gap-2">
                  {US.map((item, i) => (
                    <Row key={item.text} {...item} good i={i} />
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Track-record badge */}
        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-black/15 bg-brand-gradient-soft px-5 py-3 text-center text-sm font-semibold text-ink shadow-glow">
            <ShieldCheck size={18} className="text-safe" />
            6+ months of daily internal use
            <span className="hidden h-4 w-px bg-black/20 sm:block" />
            <span className="text-safe">0 account bans</span>
            <span className="text-xs font-normal text-muted">(our track record — not a guarantee)</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
