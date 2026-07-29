// Blog posts for the Coldcast marketing site — pure data, rendered by
// src/pages/BlogPostPage.jsx and listed by src/pages/BlogIndexPage.jsx.
//
// Each post ships its own SEO meta (unique title/description/keywords), a FAQ
// block (rendered on-page AND emitted as FAQPage JSON-LD), and body sections.
// Paragraph strings support inline links with [text](/path) — internal paths
// become client-side <Link>s, absolute URLs become <a rel="noopener">.
//
// ADDING A POST: append an object here, then add its URL to public/sitemap.xml
// — scripts/prerender.mjs derives the prerender route list from the sitemap,
// so a post missing there ships as an empty SPA shell to crawlers.

export const BLOG_POSTS = [
  {
    slug: 'scrape-sales-navigator-without-getting-banned',
    tag: 'Account safety',
    title: 'How to Scrape LinkedIn Sales Navigator Without Getting Banned (2026 Guide)',
    metaTitle: 'Scrape Sales Navigator Without Getting Banned | Coldcast',
    metaDescription:
      'Why LinkedIn restricts accounts that scrape Sales Navigator — and the 7 rules that keep yours safe: own-browser sessions, human pacing, daily limits and more.',
    keywords:
      'scrape sales navigator safely, linkedin scraping without getting banned, linkedin account restricted scraping, sales navigator scraping limits, account-safe linkedin scraper',
    datePublished: '2026-07-29',
    dateModified: '2026-07-29',
    readMinutes: 7,
    excerpt:
      'LinkedIn restricts thousands of accounts a week for automation. Here is what actually triggers a ban — and the seven rules that keep your Sales Navigator account safe while you export leads.',
    sections: [
      {
        h2: 'Why LinkedIn bans accounts that scrape',
        blocks: [
          'LinkedIn is one of the most aggressively defended platforms on the web. Its terms of service prohibit automated data collection, and its detection systems watch every account for the fingerprints of automation: request volume, timing patterns, IP reputation, browser fingerprints and session anomalies. When something looks non-human, the account gets a warning, a temporary restriction, or — for repeat offenses — a permanent ban.',
          'For a sales team, losing a LinkedIn account is not a minor inconvenience. Your Sales Navigator subscription, your connections, your InMail history and your social selling index all live there. That is why the single most important question to ask about any scraping tool is not "how many leads can it pull?" but "what does it do to keep my account alive?"',
        ],
      },
      {
        h2: 'What actually triggers a restriction',
        blocks: [
          'Most bans trace back to a handful of detection signals. Understanding them is the foundation of safe extraction:',
          {
            list: [
              '**Inhuman speed** — viewing hundreds of profiles or search pages per hour, faster than any person could read them.',
              '**Datacenter IPs** — cloud-based scrapers log into your account from AWS or similar IP ranges that LinkedIn flags instantly, often from a different country than your usual login.',
              '**Shared or stolen sessions** — tools that ask for your LinkedIn password or session cookie and replay it from their own servers create a second, suspicious session.',
              '**Fingerprint mismatches** — headless browsers and automation frameworks leak fingerprints (missing plugins, unusual screen sizes, webdriver flags) that LinkedIn tests for.',
              '**Volume cliffs** — a brand-new or dormant account that suddenly views 2,000 profiles in a day is an obvious anomaly. Established accounts with gradual ramp-up get far more headroom.',
            ],
          },
        ],
      },
      {
        h2: 'The 7 rules of account-safe scraping',
        blocks: [
          '**1. Extract from your own browser session.** The single biggest safety factor. When extraction runs inside the browser where you are already logged in, LinkedIn sees your normal device, your normal IP and your normal fingerprint — one session, no anomalies. This is how [Coldcast\'s Sales Navigator scraper](/products/sales-navigator-scraper) works, and it is the reason no tool that asks for your password or cookie can match it for safety.',
          '**2. Stay at human pace.** Safe tools throttle requests to the rhythm of a person browsing — with random delays, pauses and realistic scroll behavior. If a tool brags about raw speed with no mention of pacing, that speed is being paid for with your account risk.',
          '**3. Respect daily limits.** Sales Navigator search results cap at 2,500 leads per search. Beyond per-search caps, keep daily profile-view volume in a range consistent with your account\'s history and warm newer accounts up gradually.',
          '**4. Never hand over your credentials.** Any tool that wants your LinkedIn password or your li_at session cookie is asking to open a second session from its own infrastructure. That is the highest-risk architecture that exists.',
          '**5. Avoid datacenter IPs.** If extraction must run remotely, it should at minimum use residential proxies — but running in your own browser makes the problem disappear entirely, because there is no second IP at all.',
          '**6. Do not stack automation tools.** Two tools acting on one account multiply the request volume and can interleave in inhuman patterns. Consolidate on one account-safe tool.',
          '**7. Split searches instead of forcing volume.** Need more than 2,500 results? Slice the search by geography, headcount or industry into multiple sub-2,500 searches instead of hammering pagination — you get complete coverage with none of the risk spikes.',
        ],
      },
      {
        h2: 'What to do if LinkedIn warns you',
        blocks: [
          'A warning or temporary restriction is recoverable if you act on it. Stop all automation immediately, use LinkedIn manually and lightly for one to two weeks, and review which tool or behavior triggered the flag before resuming with stricter limits. Accounts usually survive a first warning; they rarely survive a pattern.',
          'If your outreach depends on Sales Navigator access, consider running prospecting from a dedicated seat rather than your personal profile — and note that Coldcast users can get [Sales Navigator Advanced at $25/month](/sales-nav-advanced), which makes a dedicated prospecting seat inexpensive insurance.',
        ],
      },
      {
        h2: 'How Coldcast is built around account safety',
        blocks: [
          'Coldcast was designed from the first line of code around one principle: your account is irreplaceable, your leads are not. Extraction runs in your own browser session at human pace — no password sharing, no cookie replay, no datacenter IPs, no second session. Enrichment happens downstream of LinkedIn entirely: emails and phone numbers come from [waterfall enrichment](/products/waterfall-enricher) across independent data providers and are [verified in real time](/products/email-verify), so nothing about finding contact data touches your LinkedIn account at all.',
          'That architecture is why Coldcast can sustain up to 20,000 exported leads a day without the risk profile of cloud scrapers: the heavy lifting happens outside LinkedIn, and everything inside LinkedIn looks like you, browsing.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is scraping LinkedIn Sales Navigator legal?',
        a: 'Scraping publicly accessible data has repeatedly been found lawful in US courts (most notably hiQ v. LinkedIn), but it does violate LinkedIn\'s terms of service, which is a contractual matter between you and LinkedIn — the practical consequence is account restriction, not legal liability. Privacy laws like GDPR govern how you store and use the personal data afterwards, so B2B outreach teams should follow legitimate-interest practices: relevant targeting, easy opt-out, prompt deletion on request.',
      },
      {
        q: 'How many leads per day is safe to export?',
        a: 'It depends on account age and history. Established accounts using an own-browser, human-paced tool comfortably sustain thousands of leads per day — Coldcast supports up to 20,000/day — because list-page extraction is far lighter than profile visits. New accounts should ramp up gradually over a few weeks.',
      },
      {
        q: 'Can LinkedIn detect Chrome extensions?',
        a: 'LinkedIn can detect what a tool does, not what is installed. An extension that fires hundreds of requests a minute gets flagged by its behavior; an extension that reads pages at human pace inside your normal session leaves the same footprint as ordinary browsing.',
      },
      {
        q: 'Why are cloud scrapers riskier than browser-based tools?',
        a: 'Cloud scrapers log into your account from their own servers — a new IP (usually datacenter), a new device fingerprint and a parallel session, all at once. That combination is exactly what LinkedIn\'s anomaly detection looks for. Browser-based extraction adds no new session, no new IP and no new fingerprint.',
      },
    ],
  },
  {
    slug: 'export-sales-navigator-leads-to-csv',
    tag: 'How-to',
    title: 'How to Export Leads from LinkedIn Sales Navigator to Excel or CSV (2026)',
    metaTitle: 'Export Sales Navigator Leads to Excel/CSV (2026) | Coldcast',
    metaDescription:
      'Sales Navigator has no export button. Compare the 4 ways to get your leads into Excel or CSV — manual, extensions, cloud scrapers and Coldcast — step by step.',
    keywords:
      'export sales navigator leads, sales navigator to excel, sales navigator export csv, linkedin lead list export, sales navigator scraper, download sales navigator leads',
    datePublished: '2026-07-29',
    dateModified: '2026-07-29',
    readMinutes: 6,
    excerpt:
      'LinkedIn gives you world-class search filters and then no export button. Here are the four ways teams actually get Sales Navigator leads into a spreadsheet — and how to do it without risking your account.',
    sections: [
      {
        h2: 'Sales Navigator has no export button — by design',
        blocks: [
          'Sales Navigator is the best B2B search engine on the planet: 45+ filters over roughly a billion profiles. But LinkedIn deliberately ships no "download CSV" button, because your lead lists are the product it wants to keep inside its walls. CRM sync exists only on the Advanced Plus tier and only writes to connected CRMs — there is still no spreadsheet export.',
          'So every team that runs cold outreach from Sales Navigator ends up choosing one of four extraction methods. They differ enormously in speed, data quality and — most importantly — account risk.',
        ],
      },
      {
        h2: 'Method 1: Copy-paste by hand',
        blocks: [
          'The zero-tooling option: open each search result, copy name, title, company and profile URL into a spreadsheet. It is completely safe and completely impractical — at 25 results per page, a 2,500-lead search means an hour of pasting per hundred leads, with typos, no emails and no phone numbers. Fine for a ten-lead ABM list; a non-starter for real volume.',
        ],
      },
      {
        h2: 'Method 2: Generic scraping extensions',
        blocks: [
          'Dozens of Chrome extensions will pull whatever page you are looking at into a CSV. They are cheap, but most are generic scrapers with no LinkedIn-specific safety engineering: no pacing, no volume governance, and no data hygiene — you get raw scraped fields full of "LinkedIn Member" placeholders, emoji-decorated names and stale titles. The account bans they cause cost far more than the subscription they save.',
        ],
      },
      {
        h2: 'Method 3: Cloud-based scrapers',
        blocks: [
          'Cloud platforms run extraction on their servers, which sounds convenient until you look at how they authenticate: with your session cookie or password, replayed from datacenter IPs. That creates a second, parallel session on your account from an address LinkedIn does not recognize — the highest-risk architecture there is, as we cover in detail in [our guide to scraping without getting banned](/blog/scrape-sales-navigator-without-getting-banned).',
        ],
      },
      {
        h2: 'Method 4: Account-safe browser extraction (Coldcast)',
        blocks: [
          'The approach built for teams that need volume and need their accounts alive. [Coldcast](/products/sales-navigator-scraper) extracts search results inside your own browser session at human pace, then does everything heavy — enrichment, verification, scoring — outside LinkedIn:',
          {
            list: [
              '**Step 1.** Build your search in Sales Navigator with all your filters applied.',
              '**Step 2.** Paste the search URL into Coldcast (or use the extension) and start the export.',
              '**Step 3.** Extraction runs in your logged-in browser — no password, no cookie hand-over, no second session, up to 20,000 leads/day.',
              '**Step 4.** Each lead is cleaned (no "LinkedIn Member" rows, normalized names and companies) and enriched with [waterfall enrichment](/products/waterfall-enricher) across independent providers for emails and direct dials.',
              '**Step 5.** Every email is [verified in real time](/products/email-verify) — MX, SMTP and catch-all checks — before it reaches your file.',
              '**Step 6.** Download your CSV/Excel file, or push the list straight into your outreach stack.',
            ],
          },
          'The result is not a raw scrape but a send-ready list: verified emails, phones, firmographics and AI fit-scoring, with bounces filtered out before you ever hit send.',
        ],
      },
      {
        h2: 'After the export: three habits that protect deliverability',
        blocks: [
          {
            list: [
              '**Verify before every send, not once.** Emails decay ~2-3% a month; a list verified at export stays clean, a list exported months ago does not.',
              '**Split searches over 2,500 results** by region, headcount or industry — Sales Navigator caps what any search returns, and slicing gets you full coverage safely.',
              '**Suppress before you sequence.** De-dupe new exports against your CRM and past campaigns so the same prospect never gets two cold opens.',
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Does LinkedIn Sales Navigator have a built-in export to Excel?',
        a: 'No. No Sales Navigator tier offers CSV or Excel export of lead lists. The Advanced Plus tier can sync data to connected CRMs, but there is no native spreadsheet download on any plan — third-party extraction is the only way to get leads into a file.',
      },
      {
        q: 'How many leads can I export from one Sales Navigator search?',
        a: 'Sales Navigator shows at most 2,500 results per search (100 pages of 25). To capture a larger audience, split the search into segments — by geography, company size or industry — that each return under 2,500, then export each segment.',
      },
      {
        q: 'Do exported leads include email addresses?',
        a: 'Not from LinkedIn itself — profiles rarely expose emails. Contact data comes from an enrichment step after extraction: Coldcast cascades multiple independent data providers (waterfall enrichment) and verifies every address in real time, so the file you download has deliverable emails rather than guesses.',
      },
      {
        q: 'Is it safe to export leads from Sales Navigator?',
        a: 'It depends entirely on the method. Extraction that runs in your own browser session at human pace is the safest architecture available; cloud tools that replay your session cookie from datacenter IPs are the riskiest. See our full guide on scraping Sales Navigator without getting banned.',
      },
    ],
  },
]

export const postPath = (slug) => '/blog/' + slug

export function getPost(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
