import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Bot,
  ShieldCheck,
  Search,
  Rocket,
  Building2,
  Droplets,
  MailCheck,
  Globe,
  Target,
  TrendingUp,
  Briefcase,
  Settings2,
  UserSearch,
  Wrench,
  BadgePercent,
} from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

// Both pills sit in an ItemRow beside the IconTile, which is MINT — so they are
// mint too. Leaving them lime would put a lime pill 12px from a mint tile, which
// is the two-accents-in-one-component mistake the whole system exists to avoid.
const TAG = {
  New: 'bg-brand/15 text-accent',
  '−75%': 'bg-brand/15 text-accent',
}

const AI_SDR = { icon: Bot, name: 'AI SDR', desc: 'Autonomous outreach, 24/7', tag: 'New', to: '/coldcast-agent' }

const PRODUCT_COLUMNS = [
  {
    heading: 'Scrape',
    items: [
      { icon: Search, name: 'Sales Nav Scraper', desc: 'Export any Sales Navigator search', to: '/products/sales-navigator-scraper' },
      { icon: Rocket, name: 'Apollo Scraper', desc: 'Pull lists from Apollo', to: '/products/apollo-scraper' },
      { icon: Building2, name: 'ZoomInfo Scraper', desc: 'Export ZoomInfo data', to: '/products/zoominfo-scraper' },
    ],
  },
  {
    heading: 'Enrich & verify',
    items: [
      { icon: Droplets, name: 'Waterfall Enricher', desc: 'Verified emails & phones', to: '/products/waterfall-enricher' },
      { icon: MailCheck, name: 'Email Verify', desc: 'Validate before you send', to: '/products/email-verify' },
      { icon: Globe, name: 'Domain Enrichment', desc: 'Company data from a domain', to: '/products/domain-enrichment' },
    ],
  },
  {
    heading: 'More',
    items: [
      { icon: Wrench, name: 'Free Tools', desc: 'Free email verifier & more', to: '/tools' },
      { icon: BadgePercent, name: 'Sales Nav Advanced', desc: 'Sales Nav power search — $25/mo', tag: '−75%', to: '/sales-nav-advanced' },
    ],
  },
]

const ROLES = [
  { icon: Target, name: 'SDRs & AEs', desc: 'Fill your pipeline faster', to: '/roles/sdrs-aes' },
  { icon: Rocket, name: 'Founders', desc: 'Go to market without a data budget', to: '/roles/founders' },
  { icon: TrendingUp, name: 'Sales leaders', desc: 'Scale outbound, safely', to: '/roles/sales-leaders' },
  { icon: Briefcase, name: 'Agencies', desc: 'Deliver leads for every client', to: '/roles/agencies' },
  { icon: Settings2, name: 'RevOps', desc: 'Clean, enriched data on tap', to: '/roles/revops' },
  { icon: UserSearch, name: 'Recruiters', desc: 'Source verified candidate contacts', to: '/roles/recruiters' },
]

const NAV = [
  { key: 'agent', label: 'Coldcast Agent', to: '/coldcast-agent' },
  // Labelled "Scrapers" — the word the audience actually searches for. Clicking
  // it scrolls to the homepage product section (#products, the "Seven tools"
  // block) rather than routing to the standalone /products page — hovering still
  // opens the mega-menu, and the sub-items keep deep-linking to /products/*.
  // The /products route stays defined in App.jsx (direct URL + invalid-slug
  // fallback), it's just no longer the top-level destination.
  { key: 'products', label: 'Scrapers', to: '/#products', menu: 'products', caret: true },
  { key: 'pricing', label: 'Pricing', to: '/#pricing' },
  { key: 'role', label: 'Role', to: '/roles', menu: 'role', caret: true },
]

// Small MINT tile + lucide glyph, for both the Scrapers and Role menus.
// A mint WASH (not a fill) means the glyph can stay bright mint and still read:
// bg-brand/15 over the graphite panel is dark, so text-accent lands ~10:1 on it.
// (A solid mint fill would need #062119 ink instead — see Button.jsx.)
function IconTile({ icon: Icon, size = 17 }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand/25 bg-brand/15 text-accent">
      <Icon size={size} strokeWidth={1.8} />
    </span>
  )
}

function ItemRow({ icon, name, desc, tag, to, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/[0.05]">
      <span className="mt-0.5 shrink-0">
        <IconTile icon={icon} />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-2">
          {/* Variant B: LIME label against the MINT icon tile. */}
          <span className="text-sm font-semibold text-lime">{name}</span>
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

// Top-level nav links are MINT at rest, brightening to the light mint on hover.
// The hover pill (bg-white/[0.06]) still carries most of the feedback, so the
// colour shift stays subtle rather than fighting the lime Free trial button.
const linkCls =
  'relative z-10 flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-brand transition-colors hover:text-accent'

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

  // The bar is translucent graphite at rest and firms up once you scroll —
  // also forced solid whenever a panel is open so the dropdown has an anchor.
  const solid = scrolled || !!menu || open

  return (
    <header
      onMouseLeave={() => { scheduleClose(); setHovered(null) }}
      // Sticks inside the app-frame rather than spanning the viewport, so it
      // never spills past the frame's rounded edges. AnnouncementBar is in-flow
      // above it and scrolls away, so no offset reservation is needed.
      className={`sticky top-0 z-[80] rounded-t-none border-b backdrop-blur-[14px] transition-colors duration-300 sm:rounded-t-[24px] ${
        solid
          ? 'border-hairline-strong bg-bg/[0.92] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]'
          : 'border-hairline bg-bg/[0.82]'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-5 py-[18px] sm:px-10">
        {/* Mark only — the wordmark moved to the hero, above the H1. The
            aria-label still carries "Coldcast" so the link is announced by name
            to screen readers and read as the brand by crawlers. */}
        <Link to="/" onClick={() => setMenu(null)} className="flex shrink-0 items-center" aria-label="Coldcast — home">
          <Logo size={34} />
        </Link>

        {/* Center nav with sliding hover pill */}
        <ul className="relative hidden items-center lg:flex" onMouseLeave={() => setHovered(null)}>
          {NAV.map((item) => (
            <li key={item.key} className="relative" onMouseEnter={() => { setHovered(item.key); openMenu(item.menu || null) }}>
              {hovered === item.key && (
                <motion.span layoutId="nav-hover" className="absolute inset-0 rounded-full bg-white/[0.06]" transition={{ type: 'spring', stiffness: 420, damping: 32 }} />
              )}
              {item.placeholder ? (
                <a href={item.to} className={linkCls} onClick={() => setMenu(null)}>{item.label}</a>
              ) : (
                <Link to={item.to} className={linkCls} onClick={() => setMenu(null)} aria-expanded={item.menu ? menu === item.menu : undefined}>
                  {item.label}
                  {item.caret && <ChevronDown size={14} className={`transition-transform ${menu === item.menu ? 'rotate-180' : ''}`} />}
                  {/* A top-level badge used to render here for Sales Nav Advanced's
                      −75%. That item moved into the Scrapers menu (where its badge
                      lives on the ItemRow), so no NAV entry carries `badge` any
                      more and this branch was unreachable. Removed rather than
                      left as dead lime in a mint nav. */}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button as="a" href={DEMO_URL} variant="mint" size="sm">Book a demo</Button>
          <Button as="a" href={TRIAL_URL} variant="primary" size="sm">Free trial</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong bg-white/[0.05] text-ink transition-colors hover:bg-white/[0.09] lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
            // Products carries a third column now, so it gets a wider shell; the
            // role panel keeps its original width. Both stay clamped to the viewport.
            className={`absolute inset-x-0 top-full mx-auto hidden px-4 lg:block ${
              menu === 'products' ? 'w-[min(76rem,calc(100vw-2rem))]' : 'w-[min(60rem,calc(100vw-2rem))]'
            }`}
          >
            <div className="overflow-hidden rounded-2xl border border-hairline-strong bg-panel shadow-card">
              {menu === 'products' && (
                <div className="grid grid-cols-[2.7fr_1fr]">
                  <div className="grid grid-cols-3 gap-x-4 p-7">
                    {PRODUCT_COLUMNS.map((col) => (
                      <div key={col.heading}>
                        {/* Variant B: column headings ride with the lime labels. */}
                        <p className="px-2.5 pb-2 text-xs font-semibold uppercase tracking-wider text-lime">{col.heading}</p>
                        <div className="flex flex-col gap-1">
                          {col.items.map((it) => (<ItemRow key={it.name} {...it} onClick={() => setMenu(null)} />))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-between border-l border-hairline bg-inset p-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-2.5 py-1 text-[11px] font-semibold text-accent"><Bot size={12} /> New</span>
                      <h4 className="mt-3 text-base font-semibold text-ink">Meet your AI SDR</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">Let an autonomous rep write, send and follow up off your enriched lists.</p>
                    </div>
                    <Link to="/#ai-sdr" onClick={() => setMenu(null)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-ink">See how it works <ArrowRight size={15} /></Link>
                  </div>
                </div>
              )}

              {menu === 'role' && (
                <div className="grid grid-cols-[1.5fr_1fr]">
                  <div className="grid grid-cols-2 gap-x-6 p-7">
                    {ROLES.map((r) => (<ItemRow key={r.name} {...r} onClick={() => setMenu(null)} />))}
                  </div>
                  <div className="flex flex-col justify-between border-l border-hairline bg-inset p-6">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-2.5 py-1 text-[11px] font-semibold text-accent"><ShieldCheck size={12} /> Account-safe</span>
                      <h4 className="mt-3 text-base font-semibold text-ink">Built for trust</h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">6+ months of daily use · 0 account suspensions · 97% verified emails.</p>
                    </div>
                    <Link to="/#safety" onClick={() => setMenu(null)} className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-ink">Why it’s safe <ArrowRight size={15} /></Link>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between border-t border-hairline px-6 py-3.5">
                <span className="text-xs text-muted">One account-safe platform · scrape → enrich → reach</span>
                <div className="flex items-center gap-2.5">
                  <Button as="a" href={DEMO_URL} variant="mint" size="sm" onClick={() => setMenu(null)}>Book a demo</Button>
                  <Button as="a" href={TRIAL_URL} variant="primary" size="sm" onClick={() => setMenu(null)}>Free trial</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile slide-down — anchored to the sticky bar instead of a hard-coded
          viewport offset, so it tracks the bar's real height. */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-7rem)] overflow-y-auto border-b border-hairline-strong bg-panel shadow-card lg:hidden"
          >
            <div className="container-px flex flex-col gap-1 py-5">
              <Link to="/coldcast-agent" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-brand hover:bg-white/[0.05]">Coldcast Agent</Link>
              {/* Label AND target pulled from NAV so desktop and mobile can't
                  drift apart — both now scroll to the homepage #products section
                  rather than routing to /products. */}
              <Link to={NAV.find((n) => n.key === 'products')?.to ?? '/#products'} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-brand hover:bg-white/[0.05]">
                {NAV.find((n) => n.key === 'products')?.label ?? 'Scrapers'}
              </Link>
              {[AI_SDR, ...PRODUCT_COLUMNS.flatMap((c) => c.items)].map((it) => (
                <Link key={it.name} to={it.to} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-lime hover:bg-white/[0.05]">
                  <span className="flex items-center gap-2.5"><IconTile icon={it.icon} size={15} />{it.name}</span>
                  {it.tag && <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${TAG[it.tag]}`}>{it.tag}</span>}
                </Link>
              ))}
              <Link to="/#pricing" onClick={() => setOpen(false)} className="mt-2 rounded-lg px-3 py-3 text-base font-medium text-brand hover:bg-white/[0.05]">Pricing</Link>
              <Link to="/roles" onClick={() => setOpen(false)} className="mt-2 rounded-lg px-3 py-3 text-base font-medium text-brand hover:bg-white/[0.05]">Role</Link>
              {ROLES.map((r) => (
                <Link key={r.name} to={r.to} onClick={() => setOpen(false)} className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold text-lime hover:bg-white/[0.05]">
                  <IconTile icon={r.icon} size={15} />{r.name}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-hairline pt-5">
                <Button as="a" href={TRIAL_URL} variant="primary" size="lg" onClick={() => setOpen(false)}>Free trial</Button>
                <Button as="a" href={DEMO_URL} variant="mint" size="lg" onClick={() => setOpen(false)}>Book a demo</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
