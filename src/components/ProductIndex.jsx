import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

// Table-of-contents product index — ruled ledger rows, no cards, no emojis.
const TOOLS = [
  { n: '01', name: 'Coldcast Agent', desc: 'Hands-off outbound — scores, enriches, writes & sends', to: '/coldcast-agent', tag: 'New' },
  { n: '02', name: 'Sales Navigator Scraper', desc: '20,000 leads a day at zero ban risk', to: '/products/sales-navigator-scraper' },
  { n: '03', name: 'Apollo Scraper', desc: 'Whole-list exports, re-verified in real time', to: '/products/apollo-scraper' },
  { n: '04', name: 'ZoomInfo Scraper', desc: 'Company & contact data without the contract', to: '/products/zoominfo-scraper' },
  { n: '05', name: 'Waterfall Enricher', desc: 'Pay only for 99%-valid emails & direct dials', to: '/products/waterfall-enricher' },
  { n: '06', name: 'Email Verify', desc: 'Live MX + SMTP checks, catch-alls cleaned', to: '/products/email-verify' },
  { n: '07', name: 'Domain Enrichment', desc: 'Any domain → firmographics, tech & contacts', to: '/products/domain-enrichment' },
]

export default function ProductIndex() {
  const reduce = useReducedMotion()
  return (
    <section id="products" className="py-24 sm:py-32">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="kicker lg:sticky lg:top-28">02 — The suite</p>
          </div>

          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-[-0.015em] text-ink sm:text-[2.6rem]">
                Seven tools. <em className="accent-em">One ledger.</em>
              </h2>
            </Reveal>

            <div className="mt-10 border-t border-ink/15">
              {TOOLS.map((t, i) => (
                <motion.div
                  key={t.n}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={t.to}
                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-hairline py-5 transition-all duration-300 hover:bg-panel hover:pl-3 sm:grid-cols-[3rem_1.2fr_1fr_auto] sm:items-center"
                  >
                    <span className="font-mono text-[12px] tabular-nums text-muted/70 transition-colors group-hover:text-brand">{t.n}</span>
                    <span className="flex items-center gap-3">
                      <span className="font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-brand sm:text-2xl">
                        {t.name}
                      </span>
                      {t.tag && (
                        <span className="rounded-[4px] border border-brand/40 px-1.5 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.14em] text-brand">
                          {t.tag}
                        </span>
                      )}
                    </span>
                    <span className="hidden text-sm text-muted sm:block">{t.desc}</span>
                    <ArrowUpRight
                      size={19}
                      className="justify-self-end text-muted/60 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
