import { Twitter, Linkedin, Github } from 'lucide-react'
import Wordmark from './Wordmark'
import { APP_URL, LOGIN_URL } from '../lib/constants'

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How it works', href: '#how' },
    ],
  },
  {
    title: 'Company',
    links: [
      // [PLACEHOLDER] point these at real pages
      { label: 'About', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
]

// [PLACEHOLDER] social links
const SOCIALS = [
  { label: 'Coldcast on X', icon: Twitter, href: '#' },
  { label: 'Coldcast on LinkedIn', icon: Linkedin, href: '#' },
  { label: 'Coldcast on GitHub', icon: Github, href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-bg">
      <div className="container-px py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#top" className="inline-flex" aria-label="Coldcast — home">
              <Wordmark size={40} />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Export and enrich LinkedIn Sales Navigator leads — clean spreadsheets, verified data,
              and an account that stays safe.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline bg-white/5 text-muted transition-colors hover:bg-white/10 hover:text-ink"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-7 sm:flex-row">
          <p className="text-sm text-muted">© 2026 Coldcast · coldcast.io</p>
          <div className="flex items-center gap-5 text-sm">
            <a href={LOGIN_URL} className="text-muted transition-colors hover:text-ink">
              Log in
            </a>
            <a href={APP_URL} className="font-medium text-accent transition-colors hover:text-white">
              Get started
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
