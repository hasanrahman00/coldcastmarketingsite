import { motion } from 'framer-motion'
import { ShieldCheck, ShieldAlert, Check, X, Cloud, KeyRound, Bot, MonitorSmartphone, Lock, Hand } from 'lucide-react'
import Reveal from './Reveal'
import { Eyebrow } from './SectionHeading'

// Line icons, not emoji: emoji-in-tiles is the clearest "AI landing page" tell,
// and this is the flagship teardown — every other section is deliberately
// emoji-free.
const THEM = [
  { icon: Cloud, text: 'Runs a cloud / headless browser on the vendor’s own servers' },
  { icon: KeyRound, text: 'Asks for your LinkedIn login and stores it to sign in as you' },
  { icon: Bot, text: 'Bot-speed bursts and shared cloud IPs — foreign-session fingerprints' },
]

const US = [
  { icon: MonitorSmartphone, text: 'Runs in your own browser, on your real device, session, and IP' },
  { icon: Lock, text: 'Never asks for or stores your password — you stay logged in yourself' },
  { icon: Hand, text: 'Genuine human activity: natural scrolling, click-to-next, human pace' },
]

function Row({ icon: Icon, text, good, i }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: good ? 12 : -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.75, delay: (good ? 0.1 : 0) + i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
      className="flex items-center gap-3.5 rounded-xl p-2.5 transition-colors hover:bg-white/[0.035]"
    >
      <span
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${
          good ? 'bg-safe/10 text-accent ring-safe/25' : 'bg-danger/10 text-danger ring-danger/25'
        }`}
      >
        <Icon size={20} strokeWidth={1.9} />
        {/* The win mark is MINT — this is a STATE section ("your account stays
            safe"), and a verified/safe tick is exactly what mint is for. Ink on
            the mint fill is #062119. The failure side keeps its red ✗; mint vs
            red is the contrast that makes the good column pop, and it leaves the
            lone lime "vs" pivot as the section's one scarce lime accent. */}
        <span
          className={`absolute -bottom-1 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full ring-2 ring-bg2 ${
            good
              ? 'bg-safe text-[#062119]'
              : 'bg-danger text-[#2b0f0f]'
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
            <Eyebrow icon={ShieldCheck} tone="cyan">Safe by architecture, not by promise</Eyebrow>
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
            {/* The pivot of the whole comparison — lime so the eye lands on the
                turn from "them" to "us". It's a neutral divider, not a state or
                action, so lime here is pure focal pop; text-lime on bg-bg2
                (near-black) is ~15:1. */}
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-lime/40 bg-bg2 text-xs font-bold uppercase tracking-[0.15em] text-lime shadow-[0_0_22px_rgba(204,255,0,0.28)]">
              vs
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Them */}
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-3xl border border-danger/25 bg-panel bg-gradient-to-br from-danger/[0.07] via-white/[0.02] to-transparent p-7 shadow-card backdrop-blur-sm sm:p-8">
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
              <div className="relative h-full overflow-hidden rounded-3xl border border-safe/30 bg-panel bg-gradient-to-br from-safe/[0.09] via-white/[0.02] to-transparent p-7 shadow-card backdrop-blur-sm ring-1 ring-safe/10 sm:p-8">
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-safe/20 blur-[90px]" />
                <div className="relative flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold uppercase tracking-wider text-ink">Coldcast</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-safe/30 bg-safe/10 px-3 py-1 text-xs font-medium text-accent">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-[ping_1.4s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-safe opacity-60" />
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
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-hairline-strong bg-brand-gradient-soft px-5 py-3 text-center text-sm font-semibold text-ink shadow-card">
            <ShieldCheck size={18} className="text-brand" />
            {/* Proof numbers are MINT — "6+ months" and "0 account bans" are
                confirmed track-record facts, which is mint's job, not lime's. */}
            <span>
              <span className="font-bold text-accent">6+ months</span> of daily internal use
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="font-bold text-accent">0 account bans</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
