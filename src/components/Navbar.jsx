import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import { TRIAL_URL, DEMO_URL, NAV_LINKS } from '../lib/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Navy + blur after scrolling; transparent over the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile panel when resizing up to desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Over the dark hero the nav uses light text; once scrolled (or the mobile
  // panel opens) the header goes light, so text flips back to ink.
  const overHero = !scrolled && !open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-hairline bg-bg/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center justify-between px-6 sm:px-8"
        aria-label="Primary"
      >
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5" aria-label="Coldcast — home">
          <Logo size={36} />
          <span
            className={`text-lg font-bold tracking-tight ${overHero ? 'text-white' : 'text-ink'}`}
          >
            Coldcast
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded text-sm font-medium transition-colors ${
                  overHero ? 'text-white/75 hover:text-white' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <Button as="a" href={DEMO_URL} variant={overHero ? 'outline-light' : 'ghost'} size="sm">
            Book a demo
          </Button>
          <Button as="a" href={TRIAL_URL} variant="primary" size="sm">
            Free trial
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden ${
            overHero
              ? 'border-white/25 bg-white/10 text-white'
              : 'border-hairline bg-white/5 text-ink'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile slide-down panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-hairline bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-ink/90 transition-colors hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3 flex flex-col gap-3 border-t border-hairline pt-4">
                <Button as="a" href={TRIAL_URL} variant="primary" size="lg" onClick={() => setOpen(false)}>
                  Free trial
                </Button>
                <Button as="a" href={DEMO_URL} variant="ghost" size="lg" onClick={() => setOpen(false)}>
                  Book a demo
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
