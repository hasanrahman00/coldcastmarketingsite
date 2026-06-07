import { motion } from 'framer-motion'
import {
  ShieldCheck,
  ShieldAlert,
  Cloud,
  Bot,
  KeyRound,
  UserCheck,
  Hand,
  Lock,
  Check,
  X,
} from 'lucide-react'
import Reveal from './Reveal'
import { Eyebrow } from './SectionHeading'

const THEM = [
  { icon: Cloud, text: 'Runs a cloud / headless browser on the vendor’s own servers' },
  { icon: KeyRound, text: 'Asks for your LinkedIn login and stores it to sign in as you' },
  { icon: Bot, text: 'Bot-speed bursts and shared cloud IPs — foreign-session fingerprints' },
]

const US = [
  { icon: UserCheck, text: 'Runs in your own browser, on your real device, session, and IP' },
  { icon: Lock, text: 'Never asks for or stores your password — you stay logged in yourself' },
  { icon: Hand, text: 'Genuine human activity: natural scrolling, click-to-next, human pace' },
]

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
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Them */}
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-danger/20 bg-panel/50 p-7 backdrop-blur-sm sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-danger/15 blur-[90px]"
              />
              <div className="relative flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted">
                  Other scrapers
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-danger/30 bg-danger/10 px-3 py-1 text-xs font-medium text-danger">
                  <ShieldAlert size={13} />
                  Account flagged &amp; suspended
                </span>
              </div>
              <ul className="relative mt-6 flex flex-col gap-4">
                {THEM.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-danger/10 text-danger">
                      <Icon size={16} />
                    </span>
                    <span className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                      <X size={15} className="mt-0.5 shrink-0 text-danger/70" />
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Coldcast */}
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-safe/25 bg-panel/60 p-7 shadow-glow-safe backdrop-blur-sm sm:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-safe/20 blur-[90px]"
              />
              <div className="relative flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider text-ink">
                  Coldcast
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-safe/30 bg-safe/10 px-3 py-1 text-xs font-medium text-safe">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-safe opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-safe" />
                  </span>
                  Account stays safe
                </span>
              </div>
              <ul className="relative mt-6 flex flex-col gap-4">
                {US.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-safe/10 text-safe">
                      <Icon size={16} />
                    </span>
                    <span className="flex items-start gap-2 text-sm leading-relaxed text-ink/90">
                      <Check size={15} className="mt-0.5 shrink-0 text-safe" />
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
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
