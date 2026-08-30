import { useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../../components/Seo'
import { TRIAL_URL, DEMO_URL } from '../../lib/constants'

const hideOnError = (e) => { e.currentTarget.style.display = 'none' }

/* ── Plans + segmented switch (Scraping vs Verify & Enrichment) ───────────── */
function PricingPlans() {
  const [panel, setPanel] = useState('scrape')
  const [ccy, setCcy] = useState('USD')

  return (
    <>
      <div className="switch-row">
        <div className="seg" role="tablist" aria-label="Pricing type">
          <button id="cc-tab-scrape" className={panel === 'scrape' ? 'on' : ''} role="tab" aria-selected={panel === 'scrape'} aria-controls="cc-panel-scrape" onClick={() => setPanel('scrape')}>
            Scraping credits <small>Never expire</small>
          </button>
          <button id="cc-tab-enrich" className={panel === 'enrich' ? 'on' : ''} role="tab" aria-selected={panel === 'enrich'} aria-controls="cc-panel-enrich" onClick={() => setPanel('enrich')}>
            Verify &amp; Enrichment credits <small>Never expire</small>
          </button>
        </div>
        <div className="seg small">
          <button className={ccy === 'USD' ? 'on' : ''} aria-pressed={ccy === 'USD'} onClick={() => setCcy('USD')}>USD</button>
          <button className={ccy === 'EUR' ? 'on' : ''} aria-pressed={ccy === 'EUR'} onClick={() => setCcy('EUR')}>EUR</button>
        </div>
      </div>

      {/* SCRAPING */}
      <div id="cc-panel-scrape" role="tabpanel" aria-labelledby="cc-tab-scrape" className={`p-panel${panel === 'scrape' ? ' on' : ''}`}>
        <div className="plans">
          <div className="plan">
            <h3 className="tier">Free trial</h3>
            <div className="price">$0<small> / 1 day</small></div>
            <div className="credits">100 scraping credits / day <span>· try every scraper</span></div>
            <a href={TRIAL_URL} className="btn outline">Start free</a>
            <hr />
            <p className="incl">What’s included:</p>
            <ul>
              <li>All 7 scrapers unlocked</li>
              <li>Runs in your own logged-in browser</li>
              <li>Secure cloud browser, human-paced</li>
              <li>50 enrich + 50 verify credits to test</li>
              <li>CSV export</li>
            </ul>
          </div>

          <div className="plan pop">
            <h3 className="tier">Scraping credits <em>Most popular</em></h3>
            <div className="price">$3<small> / 10,000</small></div>
            <div className="credits">Pay-as-you-go scraping credits <span>· never expire</span></div>
            <span className="per">$0.0003 per credit · from $0.30 / 1,000 rows</span>
            <a href={TRIAL_URL} className="btn">Buy credits</a>
            <hr />
            <p className="incl">What’s included:</p>
            <ul>
              <li>Sales Navigator leads, Apollo &amp; ZoomInfo · 1 credit per row</li>
              <li>Sales Nav Accounts, LinkedIn Search &amp; Services URLs · 2 credits per row</li>
              <li>LinkedIn post comments &amp; reactors · 10 credits per row</li>
              <li>Upload LinkedIn URLs (profile enrich) · 10 credits per row</li>
              <li>20,000-row daily cap keeps your LinkedIn account safe · 0 bans in 6+ months</li>
              <li>AI SDR, buying signals, CSV / Sheets / CRM export</li>
              <li>Scraping never uses enrichment credits</li>
            </ul>
            <div className="math">10,000 scraping credits = up to <b>10,000</b> Sales Nav / Apollo / ZoomInfo rows, or <b>5,000</b> account &amp; search rows, or <b>1,000</b> post engagers or uploaded LinkedIn URLs.</div>
          </div>

          <div className="plan">
            <h3 className="tier">Agency</h3>
            <div className="price" style={{ fontSize: 30, paddingTop: 6 }}>Custom</div>
            <div className="selectbox"><span>1,000,000+ credits</span><span>⌄</span></div>
            <a href={DEMO_URL} className="btn outline">Talk to us</a>
            <hr />
            <p className="incl">What’s included:</p>
            <ul>
              <li>Everything in Scraping credits</li>
              <li>Unlimited seats, per-client workspaces</li>
              <li>Custom daily caps</li>
              <li>Discounted per-credit rate</li>
              <li>Priority support &amp; onboarding</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ENRICH & VERIFY */}
      <div id="cc-panel-enrich" role="tabpanel" aria-labelledby="cc-tab-enrich" className={`p-panel${panel === 'enrich' ? ' on' : ''}`}>
        <div className="plans four">
          <div className="plan">
            <h3 className="tier">Verify</h3>
            <div className="price">$10<small> one-time</small></div>
            <div className="credits">10,000 verify credits <span>· 1 credit per email</span></div>
            <span className="per">$0.001 per email</span>
            <a href={TRIAL_URL} className="btn outline">Buy credits</a>
            <hr />
            <p className="incl">What’s included:</p>
            <ul>
              <li>10,000 catch-all clean email verifications</li>
              <li>Syntax, MX, SMTP &amp; catch-all detection</li>
              <li>Bulk CSV upload, results in minutes</li>
              <li>Credits never expire</li>
            </ul>
            <div className="math">10,000 credits = <b>10,000 emails</b> verified at <b>$0.001 each</b>.</div>
          </div>

          <div className="plan pop">
            <h3 className="tier">Waterfall Email &amp; Domain Enrichment <em>Best value</em></h3>
            <div className="price">$30<small> one-time</small></div>
            <div className="credits">10,000 enrichment credits <span>· 1 per found email · 3 per domain</span></div>
            <span className="per">$0.003 per email · $0.009 per domain</span>
            <a href={TRIAL_URL} className="btn">Buy credits</a>
            <hr />
            <p className="incl">What’s included:</p>
            <ul>
              <li>Email waterfall across 10+ data sources, verified before export</li>
              <li>Domain enrichment: headcount, industry, funding, tech stack, hiring signals</li>
              <li>Rows with no email found are not charged</li>
              <li>Credits never expire</li>
            </ul>
            <div className="math">10,000 credits = <b>10,000 found emails</b> at <b>$0.003 each</b>, or <b>3,333 domains</b> at <b>$0.009 each</b>, or any mix.</div>
          </div>

          <div className="plan">
            <h3 className="tier">Scale</h3>
            <div className="price">$90<small> one-time</small></div>
            <div className="credits">30,000 enrichment credits <span>· 1 per found email · 3 per domain</span></div>
            <span className="per">3 packs in one · priority queue</span>
            <a href={TRIAL_URL} className="btn outline">Buy credits</a>
            <hr />
            <p className="incl">What’s included:</p>
            <ul>
              <li>Up to 30,000 found emails or 10,000 domains</li>
              <li>Everything in Waterfall Email &amp; Domain Enrichment</li>
              <li>Priority queue on large jobs</li>
              <li>Credits never expire</li>
            </ul>
          </div>

          <div className="plan">
            <h3 className="tier">Volume</h3>
            <div className="price" style={{ fontSize: 30, paddingTop: 6 }}>Custom</div>
            <div className="selectbox"><span>100,000+ credits</span><span>⌄</span></div>
            <a href={DEMO_URL} className="btn outline">Talk to us</a>
            <hr />
            <p className="incl">What’s included:</p>
            <ul>
              <li>Discounted per-credit rate</li>
              <li>Dedicated provider routing</li>
              <li>Invoice billing</li>
              <li>Credits never expire</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

/* ── Cost calculator (ported from the mockup's inline script) ─────────────── */
const CCY = (n) => n.toLocaleString('en-US')

function Calculator() {
  const [v, setV] = useState({ r1: 20000, r2: 2000, r3: 1000, e1: 10000, mr: '.925', d1: 2000, v1: 10000 })
  const num = (k) => Math.max(0, +v[k] || 0)
  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }))

  const sc = num('r1') * 1 + num('r2') * 2 + num('r3') * 10
  const found = Math.round(num('e1') * +v.mr)
  const ec = found * 1 + num('d1') * 3
  const vc = num('v1')

  // Everything is 10,000-credit packs: scraping $3, enrichment $30, verify $10.
  const sPacks = Math.ceil(sc / 10000)
  const ePacks = Math.ceil(ec / 10000)
  const vPacks = Math.ceil(vc / 10000)
  const total = sPacks * 3 + ePacks * 30 + vPacks * 10
  const packs =
    [
      sPacks ? `${sPacks} × Scraping ($3)` : '',
      ePacks ? `${ePacks} × Enrichment ($30)` : '',
      vPacks ? `${vPacks} × Verify ($10)` : '',
    ].filter(Boolean).join(' + ') || '—'

  return (
    <section className="sec calc">
      <div className="center">
        <span className="label">Calculator</span>
        <h2 style={{ marginTop: 12 }}>Estimate your cost</h2>
        <p className="lead" style={{ fontSize: 16, marginTop: 8 }}>Type your volumes. The maths uses the credit rules above.</p>
      </div>
      <div className="calc-box">
        <div className="calc-in">
          <label htmlFor="calc-r1">Sales Nav / Apollo / ZoomInfo rows per month</label>
          <input id="calc-r1" type="number" min="0" value={v.r1} onChange={set('r1')} />
          <label htmlFor="calc-r2">Account, LinkedIn Search &amp; Services rows</label>
          <input id="calc-r2" type="number" min="0" value={v.r2} onChange={set('r2')} />
          <label htmlFor="calc-r3">Post comment &amp; reactor rows + uploaded LinkedIn URLs</label>
          <input id="calc-r3" type="number" min="0" value={v.r3} onChange={set('r3')} />
          <label htmlFor="calc-e1">Rows to enrich with email waterfall</label>
          <input id="calc-e1" type="number" min="0" value={v.e1} onChange={set('e1')} />
          <label htmlFor="calc-mr">Expected match rate</label>
          <select id="calc-mr" value={v.mr} onChange={set('mr')}>
            <option value=".9">90%</option>
            <option value=".925">92.5%</option>
            <option value=".95">95%</option>
          </select>
          <label htmlFor="calc-d1">Domains to enrich (firmographics &amp; signals)</label>
          <input id="calc-d1" type="number" min="0" value={v.d1} onChange={set('d1')} />
          <label htmlFor="calc-v1">Emails to verify (found emails + your own lists)</label>
          <input id="calc-v1" type="number" min="0" value={v.v1} onChange={set('v1')} />
        </div>
        <div className="calc-out">
          <div className="row"><span>Scraping credits used</span><b>{CCY(sc)}</b></div>
          <div className="row"><span>Emails found (≈)</span><b>{CCY(found)}</b></div>
          <div className="row"><span>Enrichment credits (1 × email + 3 × domain)</span><b>{CCY(ec)}</b></div>
          <div className="row"><span>Verify credits (1 × each)</span><b>{CCY(vc)}</b></div>
          <div className="row"><span>Credit packs</span><b>{packs}</b></div>
          <div className="tot"><span>Estimated total</span><b>${CCY(total)}</b></div>
          <p className="note">All packs are 10,000 credits each; leftover credits never expire.</p>
        </div>
      </div>
    </section>
  )
}

const LOGO_DOMAINS = [
  ['signalhire.com', 'SignalHire'], ['lusha.com', 'Lusha'], ['contactout.com', 'ContactOut'],
  ['salesql.com', 'SalesQL'], ['apollo.io', 'Apollo'], ['clay.com', 'Clay'],
  ['zoominfo.com', 'ZoomInfo'], ['hubspot.com', 'HubSpot'],
]

const USAGE = [
  ['SN', 'Sales Navigator leads', <><b>1 credit</b> per scraped lead</>, 's', 'Scraping credits'],
  ['AP', 'Apollo', <><b>1 credit</b> per scraped contact</>, 's', 'Scraping credits'],
  ['ZI', 'ZoomInfo', <><b>1 credit</b> per scraped contact</>, 's', 'Scraping credits'],
  ['AC', 'Sales Nav Accounts', <><b>2 credits</b> per company row, domain-enriched</>, 's', 'Scraping credits'],
  ['LI', 'LinkedIn Search', <><b>2 credits</b> per People-search row</>, 's', 'Scraping credits'],
  ['SV', 'Services URLs', <><b>2 credits</b> per Services-page row</>, 's', 'Scraping credits'],
  ['PE', 'Post comments & reactors', <><b>10 credits</b> per engager row (warm intent leads)</>, 's', 'Scraping credits'],
  ['UL', 'Upload LinkedIn URLs', <><b>10 credits</b> per profile URL row you upload for enrichment</>, 's', 'Scraping credits'],
  ['WF', 'Waterfall email enrichment', <><b>1 credit</b> per row where an email is found · misses are free</>, 'e', 'Enrichment credits'],
  ['DM', 'Domain enrichment', <><b>3 credits</b> per domain: firmographics, funding, tech stack, hiring</>, 'e', 'Enrichment credits'],
  ['EV', 'Email verification', <><b>1 credit</b> per email · catch-all clean · $0.001 each</>, 'v', 'Verify credits'],
  ['AI', 'AI SDR first lines', <><b>0 credits</b> · personalised openers from buying signals, included free</>, '', 'Included'],
]

const CMP = [
  ['Coldcast', '$0.30 (1,000 credits @ $3/10k)', <>≈ $4.00 ($3 find + $1 verify)<span className="save">up to 90% less</span></>, ['yes', 'Yes'], ['yes', 'Yes (all packs)'], true],
  ['Evaboot', '≈ $19.60', 'Included, unverified extras', ['no', 'Extension'], ['no', 'No']],
  ['Phantombuster', '≈ $28.00', 'Separate tool', ['no', 'Their servers'], ['no', 'No']],
  ['Apollo export credits', 'n/a', '≈ $24.83', ['no', 'Database'], ['no', 'No']],
  ['Clay waterfall', 'n/a', '≈ $39.00', ['no', 'n/a'], ['no', 'No']],
  ['FullEnrich', 'n/a', '≈ $39.00', ['no', 'n/a'], ['no', 'No']],
]

const FAQS = [
  {
    q: 'How are scraping credits deducted?',
    a: '1 credit per row for Sales Navigator leads, Apollo and ZoomInfo. 2 credits per row for Sales Nav Accounts, LinkedIn Search and Services URLs. 10 credits per row for LinkedIn post comments and reactors, and for LinkedIn URLs you upload. Scraping credits are $3 per 10,000, never expire, and a 20,000-row daily cap keeps your account safe.',
  },
  {
    q: 'How are verification and enrichment credits deducted?',
    a: 'Two separate packs. Verify credits ($10 per 10,000) are 1 credit per email, catch-all clean. Enrichment credits ($30 per 10,000) are 1 credit per row where the waterfall finds an email and 3 credits per domain enriched. Rows where no provider finds an email are not charged.',
  },
  {
    q: 'Why is there a daily cap on scraping?',
    a: '20,000 rows a day is the ceiling we’ve found keeps a Sales Navigator account inside LinkedIn’s normal usage. It’s why we’ve had zero bans in 6+ months of daily use.',
  },
  {
    q: 'Do credits roll over or expire?',
    a: 'None of them expire. Scraping, verify and enrichment credits are all one-time packs that stay in your account until you use them.',
  },
  {
    q: 'Do I need a subscription?',
    a: 'No. Everything is pay-as-you-go: buy scraping ($3 per 10,000), verify ($10 per 10,000) or enrichment ($30 per 10,000) credits in any amount and use them whenever. No monthly commitment.',
  },
  {
    q: 'What if I scrape at high volume?',
    a: 'The Agency plan has discounted per-credit rates, custom daily caps, unlimited seats and per-client workspaces. Book a call and we’ll size it.',
  },
  {
    q: 'Is there anything to cancel?',
    a: 'No subscription, so nothing to cancel. Credits are one-time purchases that never expire — you only pay when you buy more.',
  },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function ClonePricing() {
  return (
    <>
      <Seo
        path="/pricing"
        title="Coldcast Pricing: Scraping from $3 per 10,000 Credits + Pay-Per-Email Enrichment"
        description="Coldcast pricing. Pay-as-you-go credit packs that never expire: scraping $3 per 10,000 credits across Sales Navigator, Apollo, ZoomInfo and LinkedIn; verification $10 per 10,000; waterfall email & domain enrichment $30 per 10,000. Rows with no email found cost nothing."
        keywords="coldcast pricing, sales navigator scraper pricing, email enrichment credits, email verification pricing, apollo scraper cost, zoominfo scraper cost"
        jsonLd={faqLd}
      />

      {/* Hero */}
      <section className="p-hero">
        <span className="pill">Pricing</span>
        <h1>Pay for what you scrape.<br />Pay for <span className="mark">found emails</span> only.</h1>
        <p className="lead">Scraping, verification and enrichment are simple credit packs that never expire — scraping starts at $3 per 10,000 credits, and a row with no email found costs nothing.</p>
        <div className="trust">
          <span>No credit card for the trial</span><span>0 bans in 6+ months</span>
          <span>No subscription</span><span>Credits never expire</span>
        </div>
      </section>

      <PricingPlans />

      <div className="logos-row">
        <span>Works with</span>
        {LOGO_DOMAINS.map(([domain, name]) => (
          <img key={domain} src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`} alt={name} title={name} loading="lazy" onError={hideOnError} />
        ))}
      </div>

      <div className="band">
        <div>
          <h4>Need more credits?</h4>
          <p>Agencies and outbound teams get custom volume pricing. Let’s size your plan together.</p>
        </div>
        <a href={DEMO_URL} className="btn">Book a call</a>
      </div>

      {/* How credits work */}
      <section className="sec how">
        <div className="center">
          <span className="label">How credits work</span>
          <h2 style={{ marginTop: 12 }}>Three credit types. Each does one job.</h2>
        </div>
        <div className="how-grid">
          <div className="how-card s">
            <div className="n">01 · SCRAPING CREDITS</div>
            <h3>Pay for what you scrape</h3>
            <p>1 credit per Sales Nav / Apollo / ZoomInfo row, 2 per account or search row, 10 per post engager or uploaded URL. Buy in packs and a 20,000-row daily cap keeps your account safe.</p>
            <span className="chip">$3 / 10,000 · never expire</span>
          </div>
          <div className="how-card e">
            <div className="n">02 · ENRICHMENT CREDITS</div>
            <h3>Pay only when an email is found</h3>
            <p>The waterfall tries 10+ data sources until one hits. 1 credit per found email, 3 credits per domain enriched with firmographics and signals. Misses cost nothing.</p>
            <span className="chip">$30 / 10,000 · never expire</span>
          </div>
          <div className="how-card v">
            <div className="n">03 · VERIFY CREDITS</div>
            <h3>Catch-all clean, 1 credit each</h3>
            <p>Syntax, MX, SMTP and catch-all detection so your domains never bounce their way into spam. Use them on found emails or on lists you already have.</p>
            <span className="chip">$10 / 10,000 · never expire</span>
          </div>
        </div>
      </section>

      {/* Credit usage */}
      <section className="sec usage">
        <div className="center">
          <span className="label">Credit usage</span>
          <h2 style={{ marginTop: 12 }}>What each tool costs per row</h2>
        </div>
        <div className="usage-grid">
          {USAGE.map(([ic, title, body, tag, tagLabel]) => (
            <div className="u" key={ic}>
              <div className="ic">{ic}</div>
              <h3>{title}</h3>
              <p>{body}</p>
              <span className={`tag${tag ? ' ' + tag : ''}`}>{tagLabel}</span>
            </div>
          ))}
        </div>
      </section>

      <Calculator />

      {/* Comparator */}
      <section className="sec cmp">
        <div className="center">
          <span className="label">Price comparator</span>
          <h2 style={{ marginTop: 12 }}>Cost per 1,000 Sales Navigator leads with a verified email</h2>
          <p className="lead" style={{ fontSize: 16, marginTop: 8 }}>Scraping plus enrichment, using each tool’s public list price.</p>
        </div>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Tool</th><th>Scrape 1,000 leads</th><th>Find &amp; verify 1,000 emails</th>
                <th>Runs in your own session</th><th>Credits never expire</th>
              </tr>
            </thead>
            <tbody>
              {CMP.map(([tool, scrape, enrich, sess, exp, me]) => (
                <tr key={tool} className={me ? 'me' : ''}>
                  <td>{tool}</td>
                  <td className="m">{scrape}</td>
                  <td className="m">{enrich}</td>
                  <td className={sess[0]}>{sess[1]}</td>
                  <td className={exp[0]}>{exp[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="foot">Competitor figures are estimates from public pricing pages, August 2026.</p>
      </section>

      {/* FAQ */}
      <section className="sec" style={{ padding: '56px 32px' }}>
        <div className="center"><h2>Pricing questions</h2></div>
        <div className="faq">
          {FAQS.map((f, i) => (
            <details key={f.q} {...(i === 0 ? { open: true } : {})}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final */}
      <section className="sec final">
        <h2>Ready to give it a try?</h2>
        <p className="lead">100 leads a day free for a day, plus 50 enrichment and 50 verify credits. No credit card.</p>
        <div className="cta" style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          <a href={TRIAL_URL} className="btn">Start free trial</a>
          <Link to="/" className="btn ghost">Back to home</Link>
        </div>
      </section>
    </>
  )
}
