import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'

// Editorial manifesto — asymmetric 12-col layout, giant serif statement.
const REPLACED = ['Data credits', 'Enrichment tool', 'Email verifier', 'Catch-all cleaner', 'AI copywriter', 'Five invoices']

export default function Manifesto() {
  const reduce = useReducedMotion()
  return (
    <section id="why" className="py-24 sm:py-32">
      <div className="container-px grid gap-10 lg:grid-cols-12">
        {/* Sticky mono index */}
        <div className="lg:col-span-3">
          <p className="kicker lg:sticky lg:top-28">01 — Why Coldcast</p>
        </div>

        <div className="lg:col-span-9">
          <Reveal>
            <h2 className="max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-[-0.015em] text-ink sm:text-[2.6rem] sm:leading-[1.1]">
              Most scrapers run bots in a cloud — and get your LinkedIn banned. Coldcast runs in{' '}
              <em className="accent-em">your browser, at human pace.</em> LinkedIn sees a person,
              because it is one.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Every export is waterfall-enriched, catch-all cleaned and verified before it reaches
              your sequencer — so one subscription retires the whole pile of point tools:
            </p>
          </Reveal>

          {/* Struck-through stack → one ledger */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {REPLACED.map((t, i) => (
              <motion.span
                key={t}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="relative font-mono text-[12px] uppercase tracking-[0.16em] text-muted/70"
              >
                {t}
                <motion.span
                  aria-hidden
                  initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.35, ease: 'easeOut' }}
                  className="absolute left-0 top-1/2 h-[1.5px] w-full origin-left bg-danger/70"
                />
              </motion.span>
            ))}
            <motion.span
              initial={reduce ? false : { opacity: 0, scale: 0.8, rotate: 4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -1.5 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 16 }}
              className="rounded-[5px] border-[1.5px] border-brand px-2.5 py-1 font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-brand"
            >
              One ledger — Coldcast
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  )
}
