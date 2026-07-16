import { motion, useReducedMotion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Reveal from './Reveal'

// The safety audit — two ruled ledger columns, them vs us. No cards, no emojis.
const THEM = [
  'Runs a cloud / headless browser on the vendor’s own servers',
  'Asks for your LinkedIn login and stores it to sign in as you',
  'Bot-speed bursts on shared IPs — foreign-session fingerprints',
]

const US = [
  'Runs in your own browser, on your real device, session and IP',
  'Never asks for or stores your password — you stay logged in',
  'Genuine human activity: natural scrolling, human pace',
]

function AuditColumn({ title, verdict, items, good, delayBase = 0 }) {
  const reduce = useReducedMotion()
  return (
    <div>
      <div className={`flex items-baseline justify-between border-t-[1.5px] pt-4 ${good ? 'border-ink' : 'border-ink/30'}`}>
        <h3 className={`font-mono text-[11px] font-bold uppercase tracking-[0.2em] ${good ? 'text-ink' : 'text-muted'}`}>
          {title}
        </h3>
        <span
          className={
            good
              ? 'stamp'
              : 'inline-flex rotate-[1.5deg] rounded-[4px] border-[1.5px] border-danger/70 px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-danger'
          }
        >
          {verdict}
        </span>
      </div>
      <ul className="mt-6 flex flex-col">
        {items.map((text, i) => (
          <motion.li
            key={text}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: delayBase + i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-3.5 border-b border-hairline py-4"
          >
            {good ? (
              <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-safe" />
            ) : (
              <X size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-danger/80" />
            )}
            <span className={`text-[15px] leading-relaxed ${good ? 'text-ink' : 'text-muted'}`}>{text}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default function Safety() {
  return (
    <section id="safety" className="py-24 sm:py-32">
      <div className="container-px grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <p className="kicker lg:sticky lg:top-28">03 — The method</p>
        </div>

        <div className="lg:col-span-9">
          <Reveal>
            <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-[-0.015em] text-ink sm:text-[2.6rem] sm:leading-[1.1]">
              Safe by <em className="accent-em">architecture</em> — not by promise.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Most scrapers spin up a cloud browser and ask for your LinkedIn login — exactly the
              foreign-session, robotic pattern LinkedIn flags. Coldcast does the opposite.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-8">
            <AuditColumn title="Other scrapers" verdict="Flagged" items={THEM} good={false} />
            <AuditColumn title="Coldcast" verdict="0 bans" items={US} good delayBase={0.12} />
          </div>

          <Reveal delay={0.2}>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              6+ months of daily internal use · 0 account bans
              <span className="normal-case tracking-normal"> — our track record, not a guarantee.</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
