import { Link } from 'react-router-dom'
import { Linkedin, Youtube } from 'lucide-react'
import Logo from './Logo'

// All internal links are real, server-rendered <Link>/<a> elements (crawlable in
// the prerendered HTML) with keyword-led anchor text — footer anchors are sitewide
// signals, so they carry the destination page's target keyword, not a nickname.
const PRODUCTS = [
  { label: 'Sales Navigator Scraper', to: '/products/sales-navigator-scraper' },
  { label: 'Apollo Scraper', to: '/products/apollo-scraper' },
  { label: 'ZoomInfo Scraper', to: '/products/zoominfo-scraper' },
  { label: 'Waterfall Enrichment', to: '/products/waterfall-enricher' },
  { label: 'Email Verification', to: '/products/email-verify' },
  { label: 'Domain Enrichment', to: '/products/domain-enrichment' },
  { label: 'Coldcast Agent', to: '/coldcast-agent' },
]

// Grows as each vs / alternative page ships.
const COMPARE = [{ label: 'Evaboot Alternative', to: '/blog/evaboot-alternative' }]

const RESOURCES = [
  { label: 'Blog & Guides', to: '/blog' },
  { label: 'Sales Navigator Advanced', to: '/sales-nav-advanced' },
]

// Only live profiles — X (Twitter) and Instagram to be added later.
const SOCIALS = [
  { label: 'Coldcast on LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/coldcast-io/' },
  { label: 'Coldcast on YouTube', icon: Youtube, href: 'https://www.youtube.com/@coldcastio' },
]

const colHeading = 'text-[11.5px] font-bold uppercase tracking-[0.12em] text-faint'
const linkCls = 'text-sm text-muted transition-colors hover:text-lime'

export default function Footer() {
  return (
    // Last child of the app frame — rounds its own bottom corners to match.
    <footer className="relative overflow-hidden rounded-b-[24px] border-t border-hairline bg-bg2">
      <div className="container-px py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand + keyword-rich description + contact + socials */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Coldcast — home">
              <Logo size={44} />
              <span className="font-display text-2xl font-bold tracking-tight text-ink">Coldcast</span>
            </Link>
            {/* Real crawlable sitewide copy carrying the primary keyword clusters —
                not an image, not a thin tagline. */}
            <p className="mt-5 max-w-[340px] text-sm leading-relaxed text-faint">
              Coldcast is the safest LinkedIn Sales Navigator scraper. Export Sales Navigator leads to CSV with
              waterfall enrichment, verified emails and phone numbers — at zero ban risk, from your own browser.
            </p>
            <a
              href="mailto:contact@coldcast.io"
              className="mt-6 inline-block text-lg font-bold tracking-tight text-ink underline decoration-lime/35 decoration-2 underline-offset-4 transition-colors hover:text-lime hover:decoration-lime/70"
            >
              contact@coldcast.io
            </a>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-panel text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/40 hover:bg-lime/[0.06] hover:text-lime"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <p className="mt-8 text-[13px] text-faint">© 2026 Coldcast. All rights reserved.</p>
          </div>

          {/* Products — every tool linked with keyword anchor text */}
          <nav aria-label="Products">
            <h3 className={colHeading}>Products</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {PRODUCTS.map((p) => (
                <li key={p.to}>
                  <Link to={p.to} className={linkCls}>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Compare + Resources */}
          <div className="flex flex-col gap-10">
            <nav aria-label="Compare">
              <h3 className={colHeading}>Compare</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {COMPARE.map((p) => (
                  <li key={p.to}>
                    <Link to={p.to} className={linkCls}>
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Resources">
              <h3 className={colHeading}>Resources</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {RESOURCES.map((p) => (
                  <li key={p.to}>
                    <Link to={p.to} className={linkCls}>
                      {p.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="/privacy/" className={linkCls}>Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms/" className={linkCls}>Terms</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
