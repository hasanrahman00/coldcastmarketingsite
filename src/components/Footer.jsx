import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github, ArrowRight } from 'lucide-react'
import Logo from './Logo'

// Tool quick-links shown as pills in the footer.
const TOOLS = [
  { emoji: '🎯', label: 'Sales Nav Scraper', to: '/products/sales-navigator-scraper' },
  { emoji: '💧', label: 'Waterfall Enricher', to: '/products/waterfall-enricher' },
  { emoji: '✅', label: 'Email Verify', to: '/products/email-verify' },
  { emoji: '🤖', label: 'Coldcast Agent', to: '/coldcast-agent' },
]

const SOCIALS = [
  { label: 'Coldcast on X', icon: Twitter, href: '#' },
  { label: 'Coldcast on LinkedIn', icon: Linkedin, href: '#' },
  { label: 'Coldcast on GitHub', icon: Github, href: '#' },
]

export default function Footer() {
  return (
    // Last child of the app frame — rounds its own bottom corners to match.
    <footer className="relative overflow-hidden rounded-b-[24px] border-t border-hairline bg-bg2">
      <div className="container-px py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Coldcast — home">
              <Logo size={44} />
              <span className="font-display text-2xl font-bold tracking-tight text-ink">Coldcast</span>
            </Link>
            <p className="mt-5 max-w-[280px] text-sm leading-relaxed text-faint">
              The world&rsquo;s safest Sales Navigator scraper.
            </p>
            <p className="mt-8 text-[13px] text-faint">© 2026 Coldcast. All rights reserved.</p>
          </div>

          {/* Tool pills */}
          <div>
            <div className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-faint">Discover our tools</div>
            <div className="mt-5 flex flex-col gap-3">
              {TOOLS.map((t) => (
                <Link
                  key={t.label}
                  to={t.to}
                  className="group flex items-center justify-between gap-3 rounded-full border border-hairline bg-panel px-4 py-2.5 text-sm font-semibold text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/40 hover:bg-lime/[0.06] hover:text-lime"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{t.emoji}</span>
                    {t.label}
                  </span>
                  {/* Graphite at rest: the whole pill lights lime together on hover, so
                      this chip is never a mint spot inside a lime element. */}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.06] text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:bg-lime/15 group-hover:text-lime">
                    <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + socials */}
          <div className="lg:text-right">
            <a
              href="mailto:hello@coldcast.io"
              className="inline-block text-2xl font-bold tracking-tight text-ink underline decoration-lime/35 decoration-2 underline-offset-4 transition-colors hover:text-lime hover:decoration-lime/70 sm:text-3xl"
            >
              hello@coldcast.io
            </a>
            <div className="mt-6 flex items-center gap-3 lg:justify-end">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-panel text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/40 hover:bg-lime/[0.06] hover:text-lime"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-[13px] text-faint lg:justify-end">
              <a href="/privacy/" className="transition-colors hover:text-lime">Privacy Policy</a>
              <a href="/terms/" className="transition-colors hover:text-lime">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
