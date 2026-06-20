import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { TRIAL_URL, DEMO_URL, SALES_URL, NAV_LINKS } from '../lib/constants'

// Big editorial links inside the full-screen overlay.
const MENU_LINKS = [
  ...NAV_LINKS,
  { href: '#safety', label: 'Safety' },
  { href: '#faq', label: 'FAQ' },
]

// "The platform" column — shows the product breadth (no per-product pages yet).
const PRODUCTS = [
  { label: 'Sales Navigator Scraper', tag: 'Live' },
  { label: 'Apollo Scraper', tag: 'Soon' },
  { label: 'ZoomInfo Scraper', tag: 'Soon' },
  { label: 'Waterfall Enricher', tag: 'Soon' },
  { label: 'Email Verify', tag: 'Soon' },
  { label: 'Domain Enrichment', tag: 'Soon' },
  { label: 'AI SDR', tag: 'New' },
]

const TAG_STYLE = {
  Live: 'bg-safe/20 text-[#5dd3a8]',
  Soon: 'bg-white/10 text-white/50',
  New: 'bg-brand/30 text-[#9db4ff]',
}

const overlayV = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut', staggerChildren: 0.05, delayChildren: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}
const itemV = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll + close on Escape while the overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // White text over the dark hero and while the (dark) overlay is open.
  const onDark = open || !scrolled

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-300 ${
          open
            ? 'border-b border-transparent bg-transparent'
            : scrolled
              ? 'border-b border-hairline bg-bg/80 backdrop-blur-xl'
              : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center justify-between px-6 sm:px-8"
          aria-label="Primary"
        >
          <a href="#top" onClick={() => setOpen(false)} className="flex items-center gap-2.5" aria-label="Coldcast — home">
            <Logo size={36} />
            <span className={`text-lg font-bold tracking-tight ${onDark ? 'text-white' : 'text-ink'}`}>
              Coldcast
            </span>
          </a>

          <div className="flex items-center gap-2.5">
            <Button
              as="a"
              href={TRIAL_URL}
              variant={onDark ? 'light' : 'primary'}
              size="sm"
              className="hidden sm:inline-flex"
            >
              Free trial
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="full-menu"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                onDark
                  ? 'border-white/30 bg-white/[0.06] text-white hover:bg-white/[0.12]'
                  : 'border-hairline bg-black/[0.04] text-ink hover:bg-black/[0.07]'
              }`}
            >
              {open ? 'Close' : 'Menu'}
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="full-menu"
            variants={overlayV}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-[60] overflow-y-auto"
            style={{
              backgroundImage:
                'radial-gradient(90% 60% at 80% 0%, rgba(79,124,245,0.22), transparent 55%), radial-gradient(70% 60% at 5% 100%, rgba(124,58,237,0.20), transparent 55%), linear-gradient(180deg, #0a1020, #0c1226)',
            }}
          >
            <div className="container-px flex min-h-full flex-col pb-12 pt-28">
              <div className="grid flex-1 grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
                {/* Big editorial links */}
                <nav aria-label="Menu">
                  <ul className="flex flex-col gap-1">
                    {MENU_LINKS.map((link, i) => (
                      <motion.li key={link.href} variants={itemV}>
                        <a
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-4 py-2 text-4xl font-bold tracking-tight text-white/80 transition-colors hover:text-white sm:text-5xl lg:text-6xl"
                        >
                          <span className="font-mono text-sm font-normal text-white/30">
                            0{i + 1}
                          </span>
                          {link.label}
                          <ArrowUpRight
                            className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                            size={28}
                          />
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* The platform — product list */}
                <motion.div variants={itemV} className="lg:border-l lg:border-white/10 lg:pl-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                    The platform
                  </p>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {PRODUCTS.map((p) => (
                      <li key={p.label} className="flex items-center justify-between gap-3">
                        <span className="text-sm text-white/75">{p.label}</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${TAG_STYLE[p.tag]}`}>
                          {p.tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Footer CTAs */}
              <motion.div
                variants={itemV}
                className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
              >
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button as="a" href={TRIAL_URL} variant="primary" size="lg" onClick={() => setOpen(false)}>
                    Start free trial
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                  </Button>
                  <Button as="a" href={DEMO_URL} variant="outline-light" size="lg" onClick={() => setOpen(false)}>
                    Book a demo
                  </Button>
                </div>
                <a href={SALES_URL} className="text-sm text-white/55 transition-colors hover:text-white">
                  hello@coldcast.io
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
