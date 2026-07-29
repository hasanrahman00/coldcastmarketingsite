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
    slug: 'evaboot-alternative',
    tag: 'Comparison',
    title: 'The Evaboot Alternative Built for Account Safety',
    metaTitle: 'Evaboot Alternative: Safer Sales Nav Scraping | Coldcast',
    metaDescription:
      'Looking for an Evaboot alternative? Coldcast exports Sales Navigator leads with zero ban risk, waterfall enrichment and verified emails built in. Try it free.',
    keywords:
      'evaboot alternative, evaboot vs coldcast, sales navigator scraper, account-safe linkedin scraper, waterfall enrichment, export sales navigator leads',
    datePublished: '2026-07-30',
    dateModified: '2026-07-30',
    readMinutes: 7,
    image: {
      src: '/images/blog/coldcast-vs-evaboot-hero.png',
      width: 1200,
      height: 630,
      alt: 'Coldcast vs Evaboot — the Evaboot alternative with browser-session scraping, waterfall enrichment, phone numbers and AI lead scoring',
      caption: 'Coldcast is the Evaboot alternative built for teams that refuse to gamble with their LinkedIn accounts.',
    },
    excerpt:
      'Evaboot made Sales Navigator exports simple. If you’re weighing alternatives, it usually comes down to credit costs, single-source emails, missing phone numbers, or account safety — here’s an honest, verified comparison.',
    intro: [
      'Coldcast is the Evaboot alternative for teams that refuse to gamble with their LinkedIn accounts. It runs on your real browser session and IP, scrapes at a human pace, and enriches every lead through a [waterfall of providers](/products/waterfall-enricher) — so you export more verified emails per list without tripping LinkedIn’s detection systems.',
    ],
    sections: [
      {
        h2: 'Why people look for an Evaboot alternative',
        blocks: [
          'Evaboot is a solid, well-known Chrome extension, and for basic exports it does the job. From public reviews and its own pricing page, the reasons teams switch tend to fall into four buckets:',
          '**1. Credit costs stack up.** Evaboot starts at $9/month for 100 credits, and a lead that comes with a verified email costs 2 credits — so a 2,000-lead list with emails is 4,000 credits a month, several tiers up the pricing ladder. If you run continuous outbound, the effective cost per enriched lead matters more than the entry price.',
          '**2. Single-source email finding.** Evaboot finds and verifies emails with its own built-in finder. No single provider covers every industry, geography and seniority — [waterfall enrichment](/products/waterfall-enricher), which queries multiple providers in sequence until one returns a valid email, consistently finds more contacts on the same list. Evaboot doesn’t offer it; Coldcast runs it on every export by default.',
          '**3. No phone numbers.** Evaboot’s plans cover lead export, email finding and email verification — there’s no mobile-number enrichment. If your sequences include cold calling, you’ll need a second tool. Coldcast’s waterfall enrichment adds phone numbers during the same export pass.',
          '**4. Safety is a spectrum, not a checkbox.** Every scraper claims to be safe; the mechanics matter. Tools that log into your account from cloud servers or datacenter IPs create exactly the session anomalies LinkedIn looks for. Coldcast runs inside your own browser, on your own session and IP, at human speed — to LinkedIn, your activity looks like you, because it is you.',
        ],
      },
      {
        h2: 'Coldcast vs Evaboot at a glance',
        blocks: [
          {
            table: {
              headers: ['', 'Coldcast', 'Evaboot'],
              rows: [
                ['How it runs', 'Your own browser session + IP', 'Chrome extension, own pacing'],
                ['Ban-risk architecture', 'Human-paced, real session — zero bans to date', 'Imposes an automatic daily export limit'],
                ['Email finding', 'Waterfall across multiple providers', 'Single built-in finder'],
                ['Email verification', 'Included on every found email', 'Included (0.5 credit each)'],
                ['Phone numbers', 'Included via waterfall enrichment', 'Not offered'],
                ['AI lead scoring', 'Yes — buying signals + fit scoring', 'No'],
                ['Company (account) search', 'Yes', 'Yes'],
                ['Speed', 'Up to 10,000 leads/hour, 20,000/day', 'Export-dependent'],
                ['1 lead + verified email', 'Included in your credits', '2 credits'],
                ['Entry pricing', 'Free trial, then pay-as-you-go', 'From $9/mo for 100 credits'],
                ['Seats', 'Multi-account on agency plans', 'Unlimited seats, all plans'],
              ],
            },
          },
          'Evaboot details verified against evaboot.com’s live pricing page on July 30, 2026. If anything has changed, [tell us](mailto:contact@coldcast.io) and we’ll correct it.',
        ],
      },
      {
        h2: 'What makes Coldcast different',
        blocks: [
          '**Account safety as the core design decision.** Coldcast was built backwards from one constraint: your LinkedIn account must survive. A banned account costs you your network, your Sales Navigator subscription and your sending-domain warmup — far more than any scraper subscription. Everything else is designed within that constraint: human-paced extraction, your real session, your real IP, no stored passwords.',
          '**Waterfall enrichment, built in — not bolted on.**',
          {
            image: {
              src: '/images/blog/waterfall-enrichment-diagram.png',
              width: 1200,
              height: 630,
              alt: 'How waterfall enrichment works — Coldcast queries multiple email providers in sequence until a verified email and phone number come back',
              caption: 'Waterfall enrichment cascades independent providers until a verified email and phone number come back.',
            },
          },
          'A typical Evaboot workflow is: export from Evaboot → upload the misses to a second email finder → upload the results to a verifier → merge spreadsheets. Coldcast collapses that into one pass. During export, each lead runs through multiple email providers until a verified address comes back, then through [real-time verification](/products/email-verify), then phone lookup. You download one send-ready file.',
          '**AI lead scoring on every export.** Coldcast scores each lead with AI (Claude and DeepSeek under the hood), surfacing buying signals you can drop straight into a first line — a ranked list instead of 2,000 undifferentiated rows. That’s the idea behind [Coldcast Agent](/coldcast-agent).',
          '**Five-minute setup.** Install the Chrome extension, sign in to LinkedIn (Coldcast never stores your password), paste your [Sales Navigator search URL](/products/sales-navigator-scraper), and start the export. No proxies to configure, no cloud accounts to connect.',
        ],
      },
      {
        h2: 'Who should stay on Evaboot?',
        blocks: [
          'Honesty cuts both ways. Evaboot is a reasonable fit if you export small lists occasionally, don’t need phone numbers, and its single email finder covers your market well — its data-cleaning is genuinely good, and unlimited seats at every tier is generous for teams that export rarely but broadly. If that’s you, you may not need to switch. If you run outbound every week and your email hit-rate or account safety keeps you up at night, that’s the gap Coldcast was built to close.',
        ],
      },
      {
        h2: 'Switching from Evaboot to Coldcast',
        blocks: [
          {
            list: [
              '**Install the Coldcast Chrome extension** and sign in — your Sales Navigator subscription works as-is.',
              '**Re-run your saved searches.** Paste each Sales Navigator search URL into Coldcast; there’s nothing to migrate.',
              '**Compare the output.** Run the same list you last exported from Evaboot and compare verified-email coverage — the free trial exists precisely for this test.',
              '**Point the CSV at your stack.** Coldcast exports CSV/XLSX that drops into Clay, HubSpot, Salesforce or any sequencer. Also scraping [Apollo](/products/apollo-scraper) or [ZoomInfo](/products/zoominfo-scraper)? Same export, same file.',
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: 'Is Coldcast really safer than Evaboot?',
        a: 'Both are safer than cloud-based bots. The difference is architectural: Coldcast operates entirely inside your own browser session on your own IP at human speed, so there is no separate login, no datacenter IP and no automation fingerprint for LinkedIn to detect. Coldcast has recorded zero account bans to date.',
      },
      {
        q: 'Does Coldcast find more emails than Evaboot?',
        a: 'Typically yes, because Coldcast uses waterfall enrichment — querying multiple email providers in sequence — while Evaboot uses a single built-in finder. Cascading providers returns a verified email for more of your list. Run your last Evaboot export through Coldcast’s free trial and compare.',
      },
      {
        q: 'Can I get phone numbers with Coldcast?',
        a: 'Yes. Coldcast’s waterfall enrichment adds phone numbers alongside verified emails during the same export pass. Evaboot does not currently offer phone-number enrichment.',
      },
      {
        q: 'Do I need my own proxies or any technical setup?',
        a: 'No. Coldcast runs in your browser through a Chrome extension. Setup takes about five minutes and requires no proxies, no cookies to paste and no technical configuration. Your LinkedIn password is never stored.',
      },
      {
        q: 'How fast can Coldcast export Sales Navigator leads?',
        a: 'Up to 10,000 leads per hour and 20,000 per day, while still pacing each action like a human session. The speed limits exist to protect your account, not to upsell you.',
      },
      {
        q: 'Does Coldcast work with company (account) searches?',
        a: 'Yes. Coldcast supports both people searches and company-level Sales Navigator searches, so you can export account lists as well as lead lists.',
      },
    ],
  },
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
    image: {
      src: '/images/coldcast-b2b-lead-list-builder.png',
      width: 1400,
      height: 560,
      alt: 'Coldcast — the account-safe LinkedIn Sales Navigator scraper for building and exporting enriched B2B lead lists',
      caption: 'Coldcast runs in your own browser session, so LinkedIn only ever sees you browsing.',
    },
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
    image: {
      src: '/images/coldcast-sales-navigator-scraper-app.png',
      width: 1280,
      height: 800,
      alt: 'Coldcast app exporting enriched LinkedIn Sales Navigator leads to CSV and XLSX with verified business emails',
      caption: 'Capture prospects as you browse, enrich with verified emails, export to CSV/XLSX in one click.',
    },
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
