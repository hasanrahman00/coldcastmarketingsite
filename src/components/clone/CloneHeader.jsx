import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Compass, Building2, MapPin, Search, UserSearch, Heart, Link2, Layers, MailCheck,
  Globe, Sparkles, CheckCheck, Puzzle, Users, Flag, Rocket, Flame, ArrowLeftRight,
  ShieldCheck, DollarSign, AtSign, FileText, HelpCircle, TrendingUp, Columns2,
} from 'lucide-react'
import { APP_URL, TRIAL_URL, DEMO_URL, CHROME_STORE_URL } from '../../lib/constants'
import BrandLogo from '../Logo'

// The real Coldcast brand mark — the lime swirl tile, kept exactly as the current
// site logo (per "keep the old logo"). BrandLogo carries its own lime tile.
function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Coldcast home">
      <BrandLogo size={28} />
      Coldcast
    </Link>
  )
}

// One mega-menu entry: { to?, href?, Icon, title, sub }. `to` = internal route
// (react-router), `href` = external (full reload / new tab handled by caller).
const MENUS = [
  {
    key: 'products',
    label: 'Products',
    foot: { to: '/tools', label: 'View all tools →' },
    cols: [
      {
        h: 'Scrapers',
        items: [
          { to: '/products/sales-navigator-scraper', Icon: Compass, title: 'Sales Navigator', sub: 'Lead searches and saved lists to verified CSV' },
          { to: '/products/sales-navigator-account-scraper', Icon: Building2, title: 'Sales Nav Accounts', sub: 'Company lists, domain-enriched' },
          { to: '/products/apollo-scraper', Icon: MapPin, title: 'Apollo', sub: 'Export searches without Apollo credits' },
          { to: '/products/zoominfo-scraper', Icon: Search, title: 'ZoomInfo', sub: 'Contacts and accounts with direct dials' },
          { to: '/products', Icon: UserSearch, title: 'LinkedIn Search', sub: 'Any People or Services search' },
          { to: '/products/linkedin-post-scraper', Icon: Heart, title: 'Post Engagers', sub: 'Everyone who liked or commented on a post' },
        ],
      },
      {
        h: 'Enrichment',
        items: [
          { to: '/products/waterfall-enricher', Icon: Link2, title: 'LinkedIn URL Enrich', sub: 'Upload profile URLs, get names, emails, firmographics' },
          { to: '/products/waterfall-enricher', Icon: Layers, title: 'Waterfall Enrich', sub: 'Cascading multi-source email enrichment' },
          { to: '/products/email-verify', Icon: MailCheck, title: 'Email Verify', sub: 'Syntax, MX, SMTP and catch-all clean' },
          { to: '/products/domain-enrichment', Icon: Globe, title: 'AI SDR · Domain', sub: 'Firmographics, buying signals, first lines' },
        ],
      },
      {
        h: 'Services',
        items: [
          { to: '/sales-nav-advanced', Icon: Sparkles, title: 'Sales Nav Deal', sub: 'Discounted Sales Navigator seats, 75% off' },
          { href: DEMO_URL, Icon: CheckCheck, title: 'Done-for-you', sub: 'We build and verify the list for you' },
          { href: CHROME_STORE_URL, Icon: Puzzle, title: 'Chrome extension', sub: 'Connect your browser in one click' },
        ],
      },
    ],
  },
  {
    key: 'solutions',
    label: 'Solutions',
    cols: [
      {
        h: 'By team',
        items: [
          { to: '/roles/agencies', Icon: Users, title: 'Lead-gen agencies', sub: 'Per-client workspaces, volume pricing' },
          { to: '/roles/sdrs-aes', Icon: Flag, title: 'SDRs and AEs', sub: 'Daily lists without the ban risk' },
          { to: '/roles/founders', Icon: Rocket, title: 'Founders and GTM teams', sub: 'Replace five tools with one' },
          { to: '/roles/recruiters', Icon: UserSearch, title: 'Recruiters', sub: 'Candidate lists with verified contacts' },
        ],
      },
      {
        h: 'By use case',
        items: [
          { to: '/roles/sdrs-aes', Icon: Flame, title: 'Find high-intent warm leads', sub: 'Job changes, hiring, funding, post engagers' },
          { to: '/products/apollo-scraper', Icon: ArrowLeftRight, title: 'Replace Apollo or ZoomInfo seats', sub: 'Scrape what you already have access to' },
          { to: '/products/email-verify', Icon: ShieldCheck, title: 'Protect deliverability', sub: 'Verified lists, under 2% bounce' },
        ],
      },
    ],
  },
  {
    key: 'freetools',
    label: 'Free tools',
    cols: [
      {
        h: 'No signup needed',
        items: [
          { to: '/tools', Icon: DollarSign, title: 'Scrape cost preview', sub: 'Paste a Sales Nav URL, see lead count and cost' },
          { to: '/tools', Icon: MailCheck, title: 'Free email verifier', sub: 'Check 25 emails a day' },
        ],
      },
      {
        h: ' ',
        items: [
          { to: '/tools', Icon: AtSign, title: 'Email finder', sub: 'Name plus domain to email' },
          { to: '/tools', Icon: Link2, title: 'LinkedIn URL lookup', sub: 'Profile URL to title, company, domain' },
        ],
      },
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    cols: [
      {
        h: 'Learn',
        items: [
          { to: '/blog', Icon: FileText, title: 'Blog', sub: 'Cold outbound, GTM data, playbooks' },
          { to: '/tools', Icon: HelpCircle, title: 'Help center', sub: 'Setup, credits, troubleshooting' },
          { to: '/blog', Icon: TrendingUp, title: 'Changelog', sub: 'What shipped this week' },
        ],
      },
      {
        h: 'Compare',
        items: [
          { to: '/blog/evaboot-alternative', Icon: Columns2, title: 'Coldcast vs Evaboot', sub: 'Safety, speed, price' },
          { to: '/blog/phantombuster-alternative', Icon: Columns2, title: 'Coldcast vs Phantombuster', sub: 'Your session vs their servers' },
          { to: '/blog/wiza-alternative', Icon: Columns2, title: 'Coldcast vs Wiza', sub: 'Credits that do not burn on misses' },
        ],
      },
    ],
  },
]

// Renders one panel link — internal via <Link>, external via <a target=_blank>.
function PanelLink({ item, onNav }) {
  const inner = (
    <>
      <div>
        <b>{item.title}</b>
        <span>{item.sub}</span>
      </div>
      <item.Icon strokeWidth={1.5} />
    </>
  )
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onNav}>
        {inner}
      </a>
    )
  }
  return (
    <Link to={item.to} onClick={onNav}>
      {inner}
    </Link>
  )
}

export default function CloneHeader() {
  const [open, setOpen] = useState(null) // which mega-menu key is open (click/touch)
  const [mobile, setMobile] = useState(false)
  const navRef = useRef(null)

  // Close menus on outside click + Escape (mirrors the mockup's script).
  useEffect(() => {
    const onDoc = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(null)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(null); setMobile(false) }
    }
    document.addEventListener('click', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const closeAll = () => { setOpen(null); setMobile(false) }

  const renderMenu = (m) => (
    <div key={m.key} className={`menu${open === m.key ? ' open' : ''}`}>
      <button
        className="dd"
        aria-haspopup="true"
        aria-expanded={open === m.key}
        onClick={(e) => { e.stopPropagation(); setOpen(open === m.key ? null : m.key) }}
      >
        {m.label}
      </button>
      <div className="panel">
        <div className="cols">
          {m.cols.map((col) => (
            <div key={col.h} className="col">
              <h6>{col.h}</h6>
              {col.items.map((it) => (
                <PanelLink key={it.title} item={it} onNav={closeAll} />
              ))}
            </div>
          ))}
        </div>
        {m.foot && (
          <div className="foot">
            <Link to={m.foot.to} onClick={closeAll}>{m.foot.label}</Link>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <header className="site-header">
      <div className="rail">
        <Logo />
        <nav id="cc-main-nav" ref={navRef} className={`nav${mobile ? ' open' : ''}`} aria-label="Main">
          {renderMenu(MENUS[0])}
          <Link to="/pricing" className="lnk" onClick={closeAll}>Pricing</Link>
          {MENUS.slice(1).map(renderMenu)}
          <Link to="/blog" className="lnk" onClick={closeAll}>Docs ↗</Link>
        </nav>
        <div className="navr">
          <a href={APP_URL} className="btn ghost sm">Log in</a>
          <a href={TRIAL_URL} className="btn sm">Sign up</a>
          <button className="burger" aria-label="Menu" aria-expanded={mobile} aria-controls="cc-main-nav" onClick={(e) => { e.stopPropagation(); setMobile((v) => !v) }}>☰</button>
        </div>
      </div>
    </header>
  )
}
