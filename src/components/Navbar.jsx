import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Bot, ShieldCheck } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

const TAG = {
  Live: 'bg-safe/15 text-safe',
  Soon: 'bg-white/10 text-muted',
  New: 'bg-brand/25 text-brand-light',
}

const AI_SDR = { emoji: '🤖', name: 'AI SDR', desc: 'Autonomous outreach, 24/7', tag: 'New', href: '#ai-sdr' }

const PRODUCT_COLUMNS = [
  {
    heading: 'Scrape',
    items: [
      { emoji: '🎯', name: 'Sales Nav Scraper', desc: 'Export any Sales Navigator search', tag: 'Live', href: '#products' },
      { emoji: '🚀', name: 'Apollo Scraper', desc: 'Pull lists from Apollo', tag: 'Soon', href: '#products' },
      { emoji: '🏢', name: 'ZoomInfo Scraper', desc: 'Export ZoomInfo data', tag: 'Soon', href: '#products' },
    ],
  },
  {
    heading: 'Enrich & verify',
    items: [
      { emoji: '💧', name: 'Waterfall Enricher', desc: 'Verified emails & phones', tag: 'Soon', href: '#products' },
      { emoji: '✅', name: 'Email Verify', desc: 'Validate before you send', tag: 'Soon', href: '#products' },
      { emoji: '🌐', name: 'Domain Enrichment', desc: 'Company data from a domain', tag: 'Soon', href: '#products' },
    ],
  },
]

const ROLES = [
  { emoji: '🎯', name: 'SDRs & AEs', desc: 'Fill your pipeline faster' },
  { emoji: '🚀', name: 'Founders', desc: 'Go to market without a data budget' },
  { emoji: '📈', name: 'Sales leaders', desc: 'Scale outbound, safely' },
  { emoji: '💼', name: 'Agencies', desc: 'Deliver leads for every client' },
  { emoji: '⚙️', name: 'RevOps', desc: 'Clean, enriched data on tap' },
  { emoji: '🔎', name: 'Recruiters', desc: 'Source verified candidate contacts' },
]

function ItemRow({ emoji, name, desc, tag, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/[0.05]"
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-brand-gradient-soft text-[17px] leading-none">
        {emoji}
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span className="text-sm font-semibold text-ink">{name}</span>
          {tag && <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${TAG[tag]}`}>{tag}</span>}
        </span>
        <span className="mt-0.5 block text-xs leading-snug text-muted">{desc}</span>
      </span>
    </a>
  )
}

const panelV = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18, ease: 'easeOut' } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.12 } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(null) // 'products' | 'role' | null
  const closeTimer = useRef()

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 12); setMenu(null) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && (setMenu(null), setOpen(false))
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const openMenu = (m) => { clearTimeout(closeTimer.current); setMenu(m) }
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setMenu(null), 130) }

  const onDark = !scrolled && !open
  const linkCls = `flex items-center gap-1 rounded text-sm font-medium transition-colors ${
    onDark ? 'text-white/75 hover:text-white' : 'text-muted hover:text-ink'
  }`

  return (
    <>
      <header
        onMouseLeave={scheduleClose}
        className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-300 ${
          scrolled || open || menu
            ? 'border-b border-hairline bg-bg/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center justify-between px-6 sm:px-8"
          aria-label="Primary"
        >
          <a href="#top" onClick={() => setMenu(null)} className="flex items-center gap-2.5" aria-label="Coldcast — home">
            <Logo size={36} />
            <span className={`text-lg font-bold tracking-tight ${onDark ? 'text-white' : 'text-ink'}`}>Coldcast</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 lg:flex">
            <li><a href="#ai-sdr" className={linkCls}>Coldcast Agent</a></li>
            <li onMouseEnter={() => openMenu('products')}>
              <button type="button" className={linkCls} aria-expanded={menu === 'products'}>
                Products <ChevronDown size={14} className={`transition-transform ${menu === 'products' ? 'rotate-180' : ''}`} />
              </button>
            </li>
            <li onMouseEnter={() => openMenu('role')}>
              <button type="button" className={linkCls} aria-expanded={menu === 'role'}>
                Role <ChevronDown size={14} className={`transition-transform ${menu === 'role' ? 'rotate-180' : ''}`} />
              </button>
            </li>
            <li><a href="#pricing" onMouseEnter={() => openMenu(null)} className={linkCls}>Pricing</a></li>
            <li><a href="#" onMouseEnter={() => openMenu(null)} className={linkCls}>Free Tools</a></li>
          </ul>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Button as="a" href={DEMO_URL} variant={onDark ? 'outline-light' : 'ghost'} size="sm">Book a demo</Button>
            <Button as="a" href={TRIAL_URL} variant="primary" size="sm">Free trial</Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${
              onDark ? 'border-white/25 bg-white/10 text-white' : 'border-hairline bg-white/5 text-ink'
            }`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Desktop mega-menu panels */}
        <AnimatePresence>
          {menu && (
            <motion.div
              variants={panelV}
              initial="hidden"
              animate="show"
              exit="exit"
              onMouseEnter={() => clearTimeout(closeTimer.current)}
              onMouseLeave={scheduleClose}
              className="absolute inset-x-0 top-full mx-auto hidden w-[min(64rem,calc(100vw-2rem))] lg:block"
            >
              <div className="mt-2 overflow-hidden rounded-2xl border border-hairline bg-bg2/95 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                {menu === 'products' && (
                  <div className="grid grid-cols-[1.5fr_1fr]">
                    <div className="grid grid-cols-2 gap-x-8 p-7">
                      {PRODUCT_COLUMNS.map((col) => (
                        <div key={col.heading}>
                          <p className="px-2.5 pb-2 text-xs font-semibold uppercase tracking-wider text-muted/70">{col.heading}</p>
                          <div className="flex flex-col gap-1">
                            {col.items.map((it) => (
                              <ItemRow key={it.name} {...it} onClick={() => setMenu(null)} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col justify-between border-l border-hairline bg-white/[0.02] p-6">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-2.5 py-1 text-[11px] font-semibold text-brand-light">
                          <Bot size={12} /> New
                        </span>
                        <h4 className="mt-3 text-base font-semibold text-ink">Meet your AI SDR</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          Let an autonomous rep write, send and follow up off your enriched lists.
                        </p>
                      </div>
                      <a href="#ai-sdr" onClick={() => setMenu(null)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-light hover:text-white">
                        See how it works <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>
                )}

                {menu === 'role' && (
                  <div className="grid grid-cols-[1.6fr_0.9fr]">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 p-6">
                      {ROLES.map((r) => (
                        <ItemRow key={r.name} {...r} href="#use-cases" onClick={() => setMenu(null)} />
                      ))}
                    </div>
                    <div className="flex flex-col justify-between border-l border-hairline bg-white/[0.02] p-6">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-safe/15 px-2.5 py-1 text-[11px] font-semibold text-safe">
                          <ShieldCheck size={12} /> Account-safe
                        </span>
                        <h4 className="mt-3 text-base font-semibold text-ink">Built for trust</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          6+ months of daily use · 0 account suspensions · 97% verified emails.
                        </p>
                      </div>
                      <a href="#safety" onClick={() => setMenu(null)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-light hover:text-white">
                        Why it’s safe <ArrowRight size={15} />
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-hairline px-6 py-3.5">
                  <span className="text-xs text-muted">One account-safe platform · scrape → enrich → reach</span>
                  <div className="flex items-center gap-2.5">
                    <Button as="a" href={DEMO_URL} variant="ghost" size="sm" onClick={() => setMenu(null)}>Book a demo</Button>
                    <Button as="a" href={TRIAL_URL} variant="primary" size="sm" onClick={() => setMenu(null)}>Free trial</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile slide-down */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[4.25rem] bottom-0 z-[70] overflow-y-auto border-t border-hairline bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-5">
              <a href="#ai-sdr" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white/5">Coldcast Agent</a>

              <p className="px-3 pt-4 text-xs font-semibold uppercase tracking-wider text-muted/70">Products</p>
              {[AI_SDR, ...PRODUCT_COLUMNS.flatMap((c) => c.items)].map((it) => (
                <a key={it.name} href={it.href} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-ink/90 hover:bg-white/5">
                  <span className="flex items-center gap-2.5"><span className="text-base">{it.emoji}</span>{it.name}</span>
                  <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${TAG[it.tag]}`}>{it.tag}</span>
                </a>
              ))}

              <p className="px-3 pt-4 text-xs font-semibold uppercase tracking-wider text-muted/70">Role</p>
              {ROLES.map((r) => (
                <a key={r.name} href="#use-cases" onClick={() => setOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-ink/90 hover:bg-white/5">
                  <span className="text-base">{r.emoji}</span>{r.name}
                </a>
              ))}

              <a href="#pricing" onClick={() => setOpen(false)} className="mt-2 rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white/5">Pricing</a>
              <a href="#" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white/5">Free Tools</a>

              <div className="mt-4 flex flex-col gap-3 border-t border-hairline pt-5">
                <Button as="a" href={TRIAL_URL} variant="primary" size="lg" onClick={() => setOpen(false)}>Free trial</Button>
                <Button as="a" href={DEMO_URL} variant="outline-light" size="lg" onClick={() => setOpen(false)}>Book a demo</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
