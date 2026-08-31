import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { TRIAL_URL, DEMO_URL } from '../../lib/constants'

const HERO_DOTS = [
  { left: '6%', top: '22%' }, { left: '12%', top: '58%' }, { left: '28%', top: '78%' },
  { left: '74%', top: '18%' }, { left: '88%', top: '44%' }, { left: '81%', top: '74%' },
  { left: '48%', top: '12%' },
]

const LOGO_DOMAINS = [
  ['signalhire.com', 'SignalHire'], ['lusha.com', 'Lusha'], ['contactout.com', 'ContactOut'],
  ['salesql.com', 'SalesQL'], ['apollo.io', 'Apollo'], ['clay.com', 'Clay'],
  ['zoominfo.com', 'ZoomInfo'], ['hubspot.com', 'HubSpot'],
]

const hideOnError = (e) => { e.currentTarget.style.display = 'none' }
const initials = (name) => name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase()

// Tools tabs — state lives HERE (not in CloneHome) so switching tabs never
// re-renders the page's <details open> FAQ and forces it back open.
const TOOL_TABS = [
  {
    tab: '⊕ Sales Navigator scraper',
    h3: 'Turn any Sales Navigator search into a verified CSV',
    p: 'Paste a lead-search URL to see the lead count and exact enrichment cost before anything runs.',
    ph: '⌕ https://www.linkedin.com/sales/search/people?query=…',
    go: '⟳ Preview cost',
  },
  {
    tab: '✉ Waterfall email finder',
    h3: 'Find and verify every email in one run',
    p: 'Upload LinkedIn URLs or name + company. The 10-provider waterfall finds the email and verifies it before export — you only pay for hits.',
    ph: '⌕ Upload leads.csv — name, company, LinkedIn URL…',
    go: '✉ Find emails',
  },
  {
    tab: '⛨ Email verification',
    h3: 'Clean any list before you hit send',
    p: 'Syntax, MX, SMTP and catch-all checks on every address, so new sending domains never bounce into spam.',
    ph: '⌕ Paste or upload a list of emails to verify…',
    go: '⛨ Verify list',
  },
]

function ToolsTabs() {
  const [active, setActive] = useState(0)
  const t = TOOL_TABS[active]
  return (
    <>
      <div className="ttabs" role="tablist" aria-label="Tool preview">
        {TOOL_TABS.map((x, i) => (
          <div
            key={x.tab}
            role="tab"
            id={`cc-tooltab-${i}`}
            tabIndex={0}
            aria-selected={active === i}
            aria-controls="demo"
            className={active === i ? 'on' : ''}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i) }
              else if (e.key === 'ArrowRight') { e.preventDefault(); setActive((i + 1) % TOOL_TABS.length) }
              else if (e.key === 'ArrowLeft') { e.preventDefault(); setActive((i - 1 + TOOL_TABS.length) % TOOL_TABS.length) }
            }}
          >
            {x.tab}
          </div>
        ))}
      </div>
      <div id="demo" className="tool-demo" role="tabpanel" aria-labelledby={`cc-tooltab-${active}`}>
        <h3>{t.h3}</h3>
        <p>{t.p}</p>
        <div className="lookup">
          <div className="in">{t.ph}</div>
          <div className="go">{t.go}</div>
        </div>
      </div>
    </>
  )
}

const TRUST_CARDS = [
  {
    title: 'Your session, never your password',
    body: 'Coldcast connects to the browser you’re already logged into. No stored credentials, no proxy farm behind your account.',
    icon: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z M9 12l2 2 4-4" />,
  },
  {
    title: 'Human-paced, hard daily caps',
    body: 'Scrolls and page loads mirror a real person. A 20,000-row daily ceiling keeps every account inside LinkedIn’s normal range.',
    icon: <><path d="M4 14a8 8 0 0116 0" /><path d="M12 14l3-4" /><path d="M2 14h3M19 14h3" /></>,
  },
  {
    title: 'Verified before export',
    body: 'Syntax, MX, SMTP and catch-all checks run in the same job, so new sending domains never bounce into spam.',
    icon: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 8l9 6 9-6" /><path d="M8 15l2 2 4-4" /></>,
  },
  {
    title: 'Your data stays yours',
    body: 'Exports are never pooled, resold or used for training. Delete any job and its results whenever you want. GDPR-aware.',
    icon: <><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 018 0v3" /><path d="M12 14v3" /></>,
  },
  {
    title: 'Cost shown before a job runs',
    body: 'Every job previews lead count and exact credit cost. Enrichment only charges when an email is found.',
    icon: <><path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" /><circle cx="12" cy="12" r="2.5" /><path d="M12 3v2M12 19v2" /></>,
  },
  {
    title: 'Straight into your sending stack',
    body: 'CSV, Google Sheets, HubSpot, Salesforce, Instantly, Smartlead, Lemlist, Reachinbox. No Zapier chains to babysit.',
    icon: <><path d="M4 12l16-8-6 16-2-6-8-2z" /><path d="M12 14l8-10" /></>,
  },
]

const TESTIMONIALS = [
  {
    q: '"Cancelled Apollo and our verifier the same week. One tool, one bill, and the bounce rate on new domains went under 2%."',
    name: 'Tyler B.', role: 'Founder, lead-gen agency',
  },
  {
    q: '"I got restricted with another scraper last year. Six months on Coldcast, not a single warning. Running in my own session was the difference."',
    name: 'Camille H.', role: 'SDR, Series B SaaS',
  },
  {
    q: '"Paste URL, five minutes, upload to Instantly. That’s my entire list-building process now."',
    name: 'Kenneth F.', role: 'Solo founder',
  },
]

const FAQS = [
  {
    q: 'Is it safe to scrape Sales Navigator with Coldcast?',
    a: 'Yes. It runs in your own logged-in session at human pace with daily caps, and we never store your password. Zero account bans in 6+ months of daily internal use.',
  },
  {
    q: 'Do I still need Apollo, ZoomInfo or a separate email finder?',
    a: 'Only if you want to scrape from them. Email finding is covered by the 10+ provider waterfall, so most customers cancel their standalone database and enrichment tools within a month.',
  },
  {
    q: 'How does pricing work?',
    a: 'Everything is pay-as-you-go credit packs that never expire: scraping is $3 per 10,000 credits (1 per Sales Nav/Apollo/ZoomInfo row), enrichment $30 per 10,000 (1 per found email, 3 per domain), and verification $10 per 10,000. Rows with no email found are free, and there is no subscription.',
    link: { to: '/pricing', label: 'Full pricing →' },
  },
  {
    q: 'How much does scraping cost, and is there a daily limit?',
    a: 'Scraping credits are $3 per 10,000 — 1 credit per Sales Nav, Apollo or ZoomInfo row (2 for accounts/search, 10 for post engagers and uploaded URLs). A 20,000-row daily cap keeps your LinkedIn account inside safe limits.',
  },
  {
    q: 'How accurate are the emails?',
    a: '90–95% of leads get a valid email, and every one is verified (syntax, MX, SMTP, catch-all) before export. You only pay for emails that are found.',
  },
  {
    q: 'Is it GDPR compliant? Who owns the data?',
    a: 'You do. We don’t pool or resell exports, and you can delete jobs and results at any time.',
  },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function CloneHome() {
  return (
    <>
      <Seo
        path="/"
        title="Coldcast — Account-Safe LinkedIn Sales Navigator Scraper"
        description="Coldcast scrapes Sales Navigator, Apollo and ZoomInfo from your own session, finds and verifies emails via a 10-provider waterfall, and exports to CSV or CRM."
        ogTitle="Coldcast: Scrape, Enrich, Verify — One Workbench, Zero Bans"
        ogDescription="Scrape Sales Navigator, Apollo and ZoomInfo from your own session, enrich every lead through a 10-provider email waterfall, verify, and export a send-ready CSV. Zero bans."
        jsonLd={faqLd}
      />

      {/* Hero */}
      <section className="hero">
        {HERO_DOTS.map((d, i) => (
          <i key={i} className="dot" style={{ left: d.left, top: d.top }} />
        ))}
        <span className="label" style={{ display: 'block', marginBottom: 22 }}>
          Sales Navigator · Apollo · ZoomInfo · LinkedIn Post Engagers
        </span>
        <h1>
          Find high-intent warm leads.<br />
          <span className="h1-sub">Scrape, enrich, verify.</span> One workbench. Zero bans.
        </h1>
        <p className="lead">
          Coldcast is the account-safe LinkedIn Sales Navigator scraper. Pull leads who just changed jobs,
          are hiring, raised money, or engaged with a post — scrape them from your own session, find and
          verify every email in one run, and export a send-ready CSV. No five-tool stack, no banned account.
        </p>
        <div className="cta">
          <a href={TRIAL_URL} className="btn">Start free trial</a>
          <a href="#demo" className="btn ghost">Try it live, no signup</a>
        </div>
        <div className="checks">
          <span className="check">No credit card required</span>
          <span className="check">90–95% match rate</span>
          <span className="check">0 bans in 6+ months</span>
        </div>
        <div className="backed"><span>Trusted by</span><span><b>10,000+ sales professionals</b></span></div>
      </section>

      {/* Logos strip */}
      <section className="sec logos">
        <div className="stat">
          <b>48.2M+</b>
          <span>Leads exported in the last 30 days · 10+ enrichment providers &amp; CRMs connected</span>
        </div>
        <div className="row">
          {LOGO_DOMAINS.map(([domain, name]) => (
            <span className="brand" key={domain}>
              <img
                src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
                alt={`${name} logo`} title={name} width="22" height="22" loading="lazy" onError={hideOnError}
              />
            </span>
          ))}
        </div>
      </section>

      {/* Dashboard */}
      <section className="sec dash">
        <span className="label">Scrape &amp; build fresh lead lists</span>
        <h2 style={{ marginTop: 12 }}>Everything you need to build a send-ready list</h2>
        <p className="lead">
          Scrape fresh leads from Sales Navigator, Apollo, ZoomInfo and LinkedIn, find and verify every
          email, and export a clean CSV. One workbench replaces your scraper, database, enrichment tool and verifier.
        </p>
        <div className="browser" aria-hidden="true">
          <div className="tabsbar">
            <i style={{ background: '#FF5F57' }} /><i style={{ background: '#FEBC2E' }} /><i style={{ background: '#28C840' }} />
            <span className="t on">✦ Workbench</span><span className="t">Sales Navigator</span><span className="t">Apollo</span>
            <span className="t">Waterfall Enrich</span><span className="t">Email Verify</span><span className="t">AI SDR</span>
          </div>
          <div className="url">‹ › ⟳ <span>app.coldcast.io/dashboard</span></div>
          <div className="app">
            <aside>
              <div className="ws">◉ Coldcast · Workspace</div>
              <a className="on">Dashboard</a><a>Workbench</a><a>Leads</a>
              <div className="grp">Scrapers</div>
              <a>Sales Navigator <small>1</small></a><a>Sales Nav Accounts <small>1</small></a><a>Apollo</a>
              <a>ZoomInfo</a><a>LinkedIn Search</a><a>Post Engagers <small>1</small></a>
              <div className="grp">Enrichment</div>
              <a>LinkedIn URL Enrich</a><a>Waterfall Enrich</a><a>Email Verify</a><a>AI SDR · Domain</a>
            </aside>
            <main>
              <div className="top"><span>Dashboard</span><span>50,000 scrapes · 80,514 credits · ● Connected</span></div>
              <div className="greet">Working late?</div>
              <div className="ask">Paste a Sales Navigator, Apollo or ZoomInfo search URL. For example: VP Sales at Series A SaaS companies in the US<i>↑</i></div>
              <div className="chips">
                <span>Scrape a Sales Nav search</span><span>Enrich a CSV of LinkedIn URLs</span>
                <span>Verify a list of emails</span><span>Everyone who liked a post</span>
              </div>
              <div className="foot">Every job shows its cost before it runs <b>Export 100 leads free</b></div>
            </main>
          </div>
        </div>
      </section>

      {/* Tools tabs */}
      <section id="tools" className="sec">
        <div className="tools-head">
          <h2>A LinkedIn lead scraper designed for sales and GTM teams who want to send more, safely.</h2>
          <p className="body">Clean data, verified emails, no account risk. Built for teams that treat their lead list as a competitive advantage.</p>
        </div>
        <ToolsTabs />
        <div className="cta-strip">
          <div>
            <h3>Ready to try every tool?</h3>
            <p>Sign up free and get 100 leads, 50 enrichment credits and 50 verify credits to explore everything.</p>
          </div>
          <a href={TRIAL_URL} className="btn sans">Start Free Trial</a>
        </div>
      </section>

      {/* Safety split */}
      <section className="sec split">
        <div>
          <span className="label">Account safety</span>
          <h2>Built for how LinkedIn actually polices scrapers in 2026</h2>
          <ul>
            <li><i>01</i><div><b>Your session, not ours</b>Coldcast connects to the browser you’re already logged into. We never see or store your password.</div></li>
            <li><i>02</i><div><b>Human-paced requests</b>Scrolling, delays and page loads mirror a real person. Daily caps keep you inside LinkedIn’s normal range.</div></li>
            <li><i>03</i><div><b>Isolated cloud browser</b>Jobs run in a browser only you control. Close your laptop and the export still finishes.</div></li>
            <li><i>04</i><div><b>Your data stays yours</b>Nothing is pooled or resold. Delete any job and its results whenever you want. GDPR-aware.</div></li>
          </ul>
        </div>
        <div>
          <div className="works">
            <span>Works with Sales Navigator · Apollo · ZoomInfo · LinkedIn</span>
            <span className="cmd">$ coldcast run sales-nav --pace human</span>
          </div>
          <div className="code">
            <span className="c"># job_5f21 · runs in your logged-in Chrome session</span><br />
            <span className="k">source</span>      sales-navigator<br />
            <span className="k">query</span>       "VP Sales · SaaS · 51–200 · US"<br />
            <span className="k">session</span>     yours (no password stored)<br />
            <span className="k">pace</span>        human · daily cap 20,000<br />
            <span className="k">scrape</span>      2,500 credits · $3 / 10,000<br />
            <span className="k">enrich</span>      waterfall · 10 providers · pay per hit<br />
            <span className="k">verify</span>      syntax + mx + smtp + catch-all<br />
            <br />
            <span className="c"># preview</span><br />
            leads       2,500<br />
            cost        <span className="g">~$0.75 scrape</span> + ~$57 enrich<br />
            eta         ~5 min<br />
            bans        <span className="g">0 (6+ months of daily use)</span>
          </div>
        </div>
      </section>

      {/* Activity */}
      <section className="sec activity">
        <span className="label">Detailed activity</span>
        <h2 style={{ marginTop: 14 }}>Know exactly what happened to every scraped lead</h2>
        <p className="lead">Real-time job logs for every scrape, enrichment and verification. Filter, search and export in seconds.</p>
        <div className="log" aria-hidden="true">
          <div className="kpis">
            <div><b>2,500</b><span>Leads</span></div>
            <div><b className="g">2,318</b><span>Verified</span></div>
            <div><b>112</b><span>Not found</span></div>
            <div><b>70</b><span>Catch-all</span></div>
            <div><b>4m 12s</b><span>Job time</span></div>
            <div><b className="g">92.7%</b><span>Match rate</span></div>
          </div>
          <div className="logbody">
            <div className="rows">
              <div className="row"><span className="a">P</span><div className="e">priya@northwind.io<span>VP Sales · Northwind · found via SalesQL</span></div><span className="t">3 credits</span><span className="st ok">● Verified</span></div>
              <div className="row"><span className="a">D</span><div className="e">d.osei@lumenlabs.com<span>Head of Revenue · Lumen Labs · found via Lusha</span></div><span className="t">3 credits</span><span className="st ok">● Verified</span></div>
              <div className="row"><span className="a">M</span><div className="e">marta.k@fjordline.co<span>VP Sales EMEA · Fjordline · found via Hunter</span></div><span className="t">3 credits</span><span className="st ok">● Verified</span></div>
              <div className="row"><span className="a">C</span><div className="e">chen@pathway.ai<span>CRO · Pathway AI · domain accepts all</span></div><span className="t">3 credits</span><span className="st warn">● Catch-all</span></div>
              <div className="row"><span className="a">R</span><div className="e">r.singh@vantacorp.com<span>No provider match · not charged</span></div><span className="t">0 credits</span><span className="st bad">● Not found</span></div>
            </div>
            <div className="timeline">
              <div className="tl-h">Lead timeline</div>
              <div>→ Scraped from Sales Nav<span>0s</span></div>
              <div>◎ Profile parsed<span>0.4s</span></div>
              <div>⌕ Waterfall · Lusha<span>1.1s</span></div>
              <div>⌕ Waterfall · SalesQL<span>2.3s</span></div>
              <div>✓ Email found<span>2.3s</span></div>
              <div>⛨ SMTP verified<span>3.0s</span></div>
              <div className="tot">Total per lead<span>3.0s</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section id="trust" className="sec trustsec">
        <div className="trust-head">
          <div>
            <span className="label">Why teams trust Coldcast</span>
            <h2 style={{ marginTop: 12 }}>Zero bans. Verified emails.<br />Your data, your rules.</h2>
          </div>
          <p className="lead" style={{ fontSize: 16, maxWidth: 440 }}>
            The rules we follow so your LinkedIn seat and your sending domains stay healthy, and the numbers that prove they work.
          </p>
        </div>
        <div className="trust-stats">
          <div><b>0</b><span>Account bans</span><small>6+ months of daily use</small></div>
          <div><b>10,000+</b><span>Sales professionals</span><small>SDRs, agencies, founders</small></div>
          <div><b>48.2M+</b><span>Leads exported</span><small>last 30 days</small></div>
          <div><b>90–95%</b><span>Verified match rate</span><small>on Sales Navigator lists</small></div>
        </div>
        <div className="trust-grid">
          {TRUST_CARDS.map((c) => (
            <div className="tcard" key={c.title}>
              <div className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {c.icon}
                </svg>
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
        <div className="trust-cta">
          <div><b>Simple pricing.</b> Pay-as-you-go credit packs that never expire — scraping from $3 per 10,000.</div>
          <Link to="/pricing" className="btn" style={{ width: 'auto' }}>See pricing →</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="sec">
        <div className="center" style={{ padding: '56px 32px 0' }}>
          <span className="label">Customers</span>
          <h2 style={{ marginTop: 14 }}>What they cancelled after switching</h2>
        </div>
        <div className="quotes" style={{ marginTop: 36 }}>
          {TESTIMONIALS.map((t) => (
            <div className="quote" key={t.name}>
              <p>{t.q}</p>
              <div className="who">
                <div className="who-av" aria-hidden="true">{initials(t.name)}</div>
                <div><b>{t.name}</b><span>{t.role}</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" style={{ padding: '56px 32px' }}>
        <div className="center"><h2>Frequently asked questions</h2></div>
        <div className="faq">
          {FAQS.map((f, i) => (
            <details key={f.q} {...(i === 0 ? { open: true } : {})}>
              <summary>{f.q}</summary>
              <p>
                {f.a}{f.link ? <> <Link to={f.link.to}>{f.link.label}</Link></> : null}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="sec final">
        <h2>The lead list your campaigns deserve</h2>
        <p className="lead" style={{ fontSize: 17 }}>100 leads free. No credit card, no password stored, no bans.</p>
        <div className="cta" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href={TRIAL_URL} className="btn">Start free trial</a>
          <a href={DEMO_URL} className="btn ghost">Book a demo</a>
        </div>
      </section>
    </>
  )
}
