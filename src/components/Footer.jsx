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
    <footer
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #3a10a0 0%, #2c0c74 100%)' }}
    >
      <div className="container-px py-12 sm:py-16">
        <div className="rounded-[2.25rem] border border-white/12 bg-white/[0.06] p-8 backdrop-blur-sm sm:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1.2fr]">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-flex items-center gap-3" aria-label="Coldcast — home">
                <Logo size={44} />
                <span className="font-display text-2xl font-bold tracking-tight text-white">Coldcast</span>
              </Link>
              <p className="mt-6 max-w-xs text-xl font-semibold leading-snug text-white">
                The world&rsquo;s safest Sales Navigator scraper.
              </p>
              <p className="mt-8 text-sm text-white/55">© 2026 Coldcast. All rights reserved.</p>
            </div>

            {/* Tool pills */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.15em] text-white/55">Discover our tools</div>
              <div className="mt-5 flex flex-col gap-3">
                {TOOLS.map((t) => (
                  <Link
                    key={t.label}
                    to={t.to}
                    className="group flex items-center justify-between gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.14]"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{t.emoji}</span>
                      {t.label}
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
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
                className="inline-block text-2xl font-bold tracking-tight text-white underline decoration-white/25 decoration-2 underline-offset-4 transition-colors hover:text-white/85 hover:decoration-white/60 sm:text-3xl"
              >
                hello@coldcast.io
              </a>
              <div className="mt-6 flex items-center gap-3 lg:justify-end">
                {SOCIALS.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white/85 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.14] hover:text-white"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/60 lg:justify-end">
                <a href="/privacy/" className="transition-colors hover:text-white">Privacy Policy</a>
                <a href="/terms/" className="transition-colors hover:text-white">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
