import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

// Editorial nav — mono labels, one ink CTA, ruled hairline. No mega-menus.
const NAV = [
  { label: 'Agent', to: '/coldcast-agent' },
  { label: 'Products', to: '/products' },
  { label: 'Roles', to: '/roles' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Free tools', to: '/tools' },
]

const MOBILE_EXTRA = [
  { label: 'Sales Nav Advanced — 75% off', to: '/sales-nav-advanced' },
  { label: 'Book a demo', href: DEMO_URL },
]

export default function Navbar({ barOffset = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the drawer on navigation + lock scroll while open
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 z-[80] transition-all duration-300 ${barOffset ? 'top-9' : 'top-0'} ${
          scrolled ? 'border-b border-hairline bg-bg/90 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-px flex h-16 items-center justify-between gap-6">
          {/* Wordmark */}
          <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Coldcast — home">
            <Logo size={30} />
            <span className="font-display text-[22px] font-bold tracking-tight text-ink">Coldcast</span>
          </Link>

          {/* Center links — mono, uppercase */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="link-draw font-mono text-[11.5px] font-medium uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/sales-nav-advanced"
              className="flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/[0.06] px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              Sales Nav −75%
            </Link>
          </nav>

          {/* Right CTAs */}
          <div className="hidden items-center gap-5 lg:flex">
            <a href={DEMO_URL} className="link-draw text-sm font-medium text-ink/80 hover:text-ink">
              Book a demo
            </a>
            <Button as="a" href={TRIAL_URL} variant="primary" size="sm">
              Start free
              <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer — full paper sheet, big serif links */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[75] bg-bg pt-24 lg:hidden"
          >
            <div className="container-px flex h-full flex-col">
              <nav className="flex flex-col divide-y divide-hairline border-y border-hairline" aria-label="Mobile">
                {[...NAV, ...MOBILE_EXTRA].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    {item.href ? (
                      <a href={item.href} className="flex items-center justify-between py-4 font-display text-2xl font-semibold text-ink">
                        {item.label}
                        <ArrowUpRight size={20} className="text-muted" />
                      </a>
                    ) : (
                      <Link to={item.to} onClick={() => setOpen(false)} className="flex items-center justify-between py-4 font-display text-2xl font-semibold text-ink">
                        {item.label}
                        <ArrowUpRight size={20} className="text-muted" />
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>
              <div className="mt-8">
                <Button as="a" href={TRIAL_URL} variant="primary" size="lg" className="w-full">
                  Start free trial
                </Button>
              </div>
              <p className="kicker mt-auto pb-8">Coldcast — account-safe GTM suite</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
