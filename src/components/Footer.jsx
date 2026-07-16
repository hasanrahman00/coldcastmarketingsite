import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

// Ink footer — ruled mono columns under a giant serif contact line.
const COLUMNS = [
  {
    title: 'Suite',
    links: [
      { label: 'Coldcast Agent', to: '/coldcast-agent' },
      { label: 'Sales Nav Scraper', to: '/products/sales-navigator-scraper' },
      { label: 'Waterfall Enricher', to: '/products/waterfall-enricher' },
      { label: 'Email Verify', to: '/products/email-verify' },
      { label: 'All products', to: '/products' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'By role', to: '/roles' },
      { label: 'Pricing', to: '/#pricing' },
      { label: 'Free tools', to: '/tools' },
      { label: 'Sales Nav −75%', to: '/sales-nav-advanced' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy/', external: true },
      { label: 'Terms', to: '/terms/', external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-bg">
      <div className="container-px pb-10 pt-16 sm:pt-20">
        {/* Contact line */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="kicker !text-bg/40">Talk to a human</p>
            <a
              href="mailto:hello@coldcast.io"
              className="link-draw mt-3 inline-block font-display text-3xl font-semibold tracking-tight text-bg sm:text-5xl"
            >
              hello@coldcast.io
            </a>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-bg/50">
            The world&rsquo;s safest Sales Navigator scraper — verified leads, zero bans, one
            subscription.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.2em] text-bg/40">{col.title}</h4>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.to} className="group inline-flex items-center gap-1 text-[15px] text-bg/75 transition-colors hover:text-bg">
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.to} className="group inline-flex items-center gap-1 text-[15px] text-bg/75 transition-colors hover:text-bg">
                        {link.label}
                        <ArrowUpRight size={13} className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-60" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Giant wordmark */}
        <div aria-hidden className="select-none overflow-hidden border-t border-white/10 pt-8">
          <p className="font-display text-[19vw] font-bold leading-[0.8] tracking-[-0.03em] text-bg/[0.07] lg:text-[13rem]">
            Coldcast
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-bg/40 sm:flex-row sm:items-center">
          <span>© 2026 Coldcast · coldcast.io</span>
          <span>Built for people who live in Sales Navigator</span>
        </div>
      </div>
    </footer>
  )
}
