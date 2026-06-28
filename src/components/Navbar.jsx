import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Bot, ShieldCheck } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

const TAG = {
  New: 'bg-brand/25 text-brand-light',
}

const AI_SDR = { emoji: '🤖', name: 'AI SDR', desc: 'Autonomous outreach, 24/7', tag: 'New', to: '/coldcast-agent' }

const PRODUCT_COLUMNS = [
  {
    heading: 'Scrape',
    items: [
      { emoji: '🎯', name: 'Sales Nav Scraper', desc: 'Export any Sales Navigator search', to: '/products/sales-navigator-scraper' },
      { emoji: '🚀', name: 'Apollo Scraper', desc: 'Pull lists from Apollo', to: '/products/apollo-scraper' },
      { emoji: '🏢', name: 'ZoomInfo Scraper', desc: 'Export ZoomInfo data', to: '/products/zoominfo-scraper' },
    ],
  },
  {
    heading: 'Enrich & verify',
    items: [
      { emoji: '💧', name: 'Waterfall Enricher', desc: 'Verified emails & phones', to: '/products/waterfall-enricher' },
      { emoji: '✅', name: 'Email Verify', desc: 'Validate before you send', to: '/products/email-verify' },
      { emoji: '🌐', name: 'Domain Enrichment', desc: 'Company data from a domain', to: '/products/domain-enrichment' },
    ],
  },
]

const ROLES = [
  { emoji: '🎯', name: 'SDRs & AEs', desc: 'Fill your pipeline faster', to: '/roles/sdrs-aes' },
  { emoji: '🚀', name: 'Founders', desc: 'Go to market without a data budget', to: '/roles/founders' },
  { emoji: '📈', name: 'Sales leaders', desc: 'Scale outbound, safely', to: '/roles/sales-leaders' },
  { emoji: '💼', name: 'Agencies', desc: 'Deliver leads for every client', to: '/roles/agencies' },
  { emoji: '⚙️', name: 'RevOps', desc: 'Clean, enriched data on tap', to: '/roles/revops' },
  { emoji: '🔎', name: 'Recruiters', desc: 'Source verified candidate contacts', to: '/roles/recruiters' },
]

const NAV = [
  { key: 'agent', label: 'Coldcast Agent', to: '/coldcast-agent' },
  { key: 'products', label: 'Products', to: '/products', menu: 'products', caret: true },
  { key: 'role', label: 'Role', to: '/roles', menu: 'role', caret: true },
  { key: 'pricing', label: 'Pricing', to: '/#pricing' },
  { key: 'tools', label: 'Free Tools', to: '/tools' },
  { key: 'deal', label: 'Sales Nav Advanced', to: '/sales-nav-advanced', badge: '−75%' },
]

function ItemRow({ emoji, name, desc, tag, to, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/[0.05]">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-brand-gradient-soft text-[17px] leading-none">{emoji}</span>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          <span className="text-sm font-semibold text-ink">{name}</span>
          {tag && <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${TAG[tag]}`}>{tag}</span>}
        </span>
        <span className="mt-0.5 block text-xs leading-snug text-muted">{desc}</span>
      </span>
    </Link>
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
  const [menu, setMenu] = useState(null)
  const [hovered, setHovered] = useState(null)
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

  const linkCls = 'relative z-10 flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white'

  return (
    <>
      <header onMouseLeave={() => { scheduleClose(); setHovered(null) }} className="fixed inset-x-0 top-0 z-[80]">
        <div className="mx-auto max-w-6xl px-4 pt-3 sm:px-6">
          {/* Floating glass pill */}
          <div
            className={`flex h-14 items-center justify-between gap-2 rounded-full border px-3 transition-all duration-300 ${
              scrolled || menu
                ? 'border-white/10 bg-[#0c1226]/85 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl'
                : 'border-white/10 bg-white/[0.05] backdrop-blur-xl'
            }`}
          >
            <Link to="/" onClick={() => setMenu(null)} className="flex shrink-0 items-center gap-2.5 pl-1" aria-label="Coldcast — home">
              <Logo size={32} />
              <span className="text-base font-bold tracking-tight text-white">Coldcast</span>
            </Link>

            {/* Center nav with sliding hover pill */}
            <ul className="relative hidden items-center lg:flex" onMouseLeave={() => setHovered(null)}>
              {NAV.map((item) => (
                <li key={item.key} className="relative" onMouseEnter={() => { setHovered(item.key); openMenu(item.menu || null) }}>
                  {hovered === item.key && (
                    <motion.span layoutId="nav-hover" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />
                  )}
                  {item.placeholder ? (
                    <a href={item.to} className={linkCls} onClick={() => setMenu(null)}>{item.label}</a>
                  ) : (
                    <Link to={item.to} className={linkCls} onClick={() => setMenu(null)} aria-expanded={item.menu ? menu === item.menu : undefined}>
                      {item.label}
                      {item.caret && <ChevronDown size={14} className={`transition-transform ${menu === item.menu ? 'rotate-180' : ''}`} />}
                      {item.badge && <span className="rounded-full bg-brand/20 px-1.5 py-0.5 text-[10px] font-bold text-brand-light">{item.badge}</span>}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2 lg:flex">
              <Button as="a" href={DEMO_URL} variant="outline-light" size="sm">Book a demo</Button>
              <Button as="a" href={TRIAL_URL} variant="primary" size="sm" className="shadow-[0_0_24px_-6px_rgba(79,124,245,0.8)]">Free trial</Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

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
              className="absolute inset-x-0 top-full mx-auto hidden w-[min(60rem,calc(100vw-2rem))] px-4 lg:block"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1226]/95 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                {menu === 'products' && (
                  <div className="grid grid-cols-[1.5fr_1fr]">
                    <div className="grid grid-cols-2 gap-x-8 p-7">
                      {PRODUCT_COLUMNS.map((col) => (
                        <div key={col.heading}>
                          <p className="px-2.5 pb-2 text-xs font-semibold uppercase tracking-wider text-muted/70">{col.heading}</p>
                          <div className="flex flex-col gap-1">
                            {col.items.map((it) => (<ItemRow key={it.name} {...it} onClick={() => setMenu(null)} />))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col justify-between border-l border-white/10 bg-white/[0.02] p-6">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-2.5 py-1 text-[11px] font-semibold text-brand-light"><Bot size={12} /> New</span>
                        <h4 className="mt-3 text-base font-semibold text-ink">Meet your AI SDR</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">Let an autonomous rep write, send and follow up off your enriched lists.</p>
                      </div>
                      <Link to="/#ai-sdr" onClick={() => setMenu(null)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-light hover:text-white">See how it works <ArrowRight size={15} /></Link>
                    </div>
                  </div>
                )}

                {menu === 'role' && (
                  <div className="grid grid-cols-[1.5fr_1fr]">
                    <div className="grid grid-cols-2 gap-x-6 p-7">
                      {ROLES.map((r) => (<ItemRow key={r.name} {...r} onClick={() => setMenu(null)} />))}
                    </div>
                    <div className="flex flex-col justify-between border-l border-white/10 bg-white/[0.02] p-6">
                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-safe/15 px-2.5 py-1 text-[11px] font-semibold text-safe"><ShieldCheck size={12} /> Account-safe</span>
                        <h4 className="mt-3 text-base font-semibold text-ink">Built for trust</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">6+ months of daily use · 0 account suspensions · 97% verified emails.</p>
                      </div>
                      <Link to="/#safety" onClick={() => setMenu(null)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-light hover:text-white">Why it’s safe <ArrowRight size={15} /></Link>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-white/10 px-6 py-3.5">
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
            className="fixed inset-x-0 top-[4.75rem] bottom-0 z-[70] overflow-y-auto border-t border-white/10 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-5">
              <Link to="/coldcast-agent" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white/5">Coldcast Agent</Link>
              <Link to="/products" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white/5">Products</Link>
              {[AI_SDR, ...PRODUCT_COLUMNS.flatMap((c) => c.items)].map((it) => (
                <Link key={it.name} to={it.to} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-ink/90 hover:bg-white/5">
                  <span className="flex items-center gap-2.5"><span className="text-base">{it.emoji}</span>{it.name}</span>
                  {it.tag && <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${TAG[it.tag]}`}>{it.tag}</span>}
                </Link>
              ))}
              <Link to="/roles" onClick={() => setOpen(false)} className="mt-2 rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white/5">Role</Link>
              {ROLES.map((r) => (
                <Link key={r.name} to={r.to} onClick={() => setOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-ink/90 hover:bg-white/5">
                  <span className="text-base">{r.emoji}</span>{r.name}
                </Link>
              ))}
              <Link to="/#pricing" onClick={() => setOpen(false)} className="mt-2 rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white/5">Pricing</Link>
              <Link to="/tools" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white/5">Free Tools</Link>
              <Link to="/sales-nav-advanced" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white/5">
                Sales Nav Advanced
                <span className="rounded-full bg-brand/20 px-1.5 py-0.5 text-[10px] font-bold text-brand-light">−75%</span>
              </Link>
              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-5">
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
