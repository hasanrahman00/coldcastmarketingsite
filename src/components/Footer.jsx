import { Link } from 'react-router-dom'
import { Linkedin, Youtube } from 'lucide-react'
import Logo from './Logo'

// Footer link columns. Anchor text = the destination page's target keyword
// (sitewide internal-link signal), so "Waterfall Enrichment" not "Waterfall
// Enricher". These render server-side via prerender, so crawlers see them.
const PRODUCTS = [
  { label: 'Sales Navigator Scraper', to: '/products/sales-navigator-scraper' },
  { label: 'Apollo Scraper', to: '/products/apollo-scraper' },
  { label: 'ZoomInfo Scraper', to: '/products/zoominfo-scraper' },
  { label: 'Waterfall Enrichment', to: '/products/waterfall-enricher' },
  { label: 'Email Verification', to: '/products/email-verify' },
  { label: 'Domain Enrichment', to: '/products/domain-enrichment' },
  { label: 'Coldcast Agent', to: '/coldcast-agent' },
  { label: 'Free Tools', to: '/tools' },
]

// Grows as vs/alternative pages ship.
const COMPARE = [
  { label: 'Evaboot Alternative', to: '/blog/evaboot-alternative' },
  { label: 'Scrape Sales Nav Safely', to: '/blog/scrape-sales-navigator-without-getting-banned' },
  { label: 'Export Sales Nav to CSV', to: '/blog/export-sales-navigator-leads-to-csv' },
]

// Only live, confirmed profiles — X (Twitter) and Instagram get added once the
// real handles exist. Do NOT guess handles here: these URLs also feed the
// Organization sameAs entity links.
const SOCIALS = [
  { label: 'Coldcast on LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/coldcast-io/' },
  { label: 'Coldcast on YouTube', icon: Youtube, href: 'https://www.youtube.com/@coldcastio' },
]

const colClass = 'block text-sm text-muted transition-colors hover:text-lime'

export default function Footer() {
  return (
    // Last child of the app frame — rounds its own bottom corners to match.
    <footer className="relative overflow-hidden rounded-b-[24px] border-t border-hairline bg-bg2">
      <div className="container-px py-14 sm:py-16">
        <nav aria-label="Footer" className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3" aria-label="Coldcast — home">
              <Logo size={44} />
              <span className="font-jakarta text-2xl font-bold tracking-tight text-[#111827]">Coldcast</span>
            </Link>
            {/* Keyword-rich, crawlable sitewide description (real <p>, not an image). */}
            <p className="mt-5 max-w-[300px] text-sm leading-relaxed text-faint">
              Coldcast is the safest LinkedIn Sales Navigator scraper. Export Sales Navigator leads to
              CSV with waterfall enrichment, verified emails and phone numbers — zero ban risk.
            </p>
            <p className="mt-8 text-[13px] text-faint">© 2026 Coldcast. All rights reserved.</p>
          </div>

          {/* Products */}
          <div>
            <div className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-faint">Products</div>
            <div className="mt-5 flex flex-col gap-3">
              {PRODUCTS.map((l) => (
                <Link key={l.to} to={l.to} className={colClass}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Compare & guides */}
          <div>
            <div className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-faint">Compare &amp; Guides</div>
            <div className="mt-5 flex flex-col gap-3">
              {COMPARE.map((l) => (
                <Link key={l.to} to={l.to} className={colClass}>
                  {l.label}
                </Link>
              ))}
              <Link to="/blog" className={colClass}>
                All guides →
              </Link>
            </div>
          </div>

          {/* Contact + socials */}
          <div className="lg:text-right">
            <a
              href="mailto:contact@coldcast.io"
              className="inline-block text-2xl font-bold tracking-tight text-ink underline decoration-lime/35 decoration-2 underline-offset-4 transition-colors hover:text-lime hover:decoration-lime/70 sm:text-3xl"
            >
              contact@coldcast.io
            </a>
            <div className="mt-6 flex items-center gap-3 lg:justify-end">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-panel text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/40 hover:bg-lime/[0.06] hover:text-lime"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-[13px] text-faint lg:justify-end">
              <Link to="/blog" className="transition-colors hover:text-lime">Blog</Link>
              <a href="/privacy/" className="transition-colors hover:text-lime">Privacy Policy</a>
              <a href="/terms/" className="transition-colors hover:text-lime">Terms</a>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}
