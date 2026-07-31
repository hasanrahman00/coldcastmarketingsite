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
    slug: 'coldcast-vs-scrupp',
    tag: 'Compare',
    title: 'Coldcast vs Scrupp: Which Sales Navigator Scraper Should You Use in 2026?',
    metaTitle: 'Coldcast vs Scrupp: Which Sales Nav Scraper Wins in 2026?',
    metaDescription:
      'Coldcast vs Scrupp compared: account safety, waterfall enrichment, email accuracy and pricing. See why teams pick a cloud-safe scraper over a Chrome extension.',
    keywords:
      'coldcast vs scrupp, scrupp alternative, scrupp review, sales navigator scraper comparison, account-safe linkedin scraper, waterfall enrichment',
    datePublished: '2026-07-31',
    dateModified: '2026-07-31',
    readMinutes: 8,
    image: {
      src: '/images/blog/coldcast-vs-scrupp-hero.png',
      width: 1200,
      height: 630,
      alt: 'Coldcast vs Scrupp — LinkedIn Sales Navigator scraper comparison',
      caption: 'Coldcast vs Scrupp at a glance — the full comparison is below.',
    },
    excerpt:
      'Scrupp is a capable Chrome-extension Sales Navigator scraper with clean exports and built-in email verification. Coldcast takes a different approach to the same job — and the difference comes down to one question: what happens to your LinkedIn account?',
    sections: [
      {
        h2: 'The short version',
        blocks: [
          'Scrupp is a solid, affordable Chrome extension for exporting Sales Navigator searches with verified emails. Coldcast is built for teams that can’t afford to lose a LinkedIn account: it scrapes without running risky automation inside your logged-in browser session, then layers [waterfall enrichment](/products/waterfall-enricher) across multiple data providers and verifies every email before you export.',
          'If account safety and email coverage are your priorities, Coldcast is the stronger pick. If you want the cheapest possible entry point and accept some account risk, Scrupp’s free tier is a reasonable place to start.',
        ],
      },
      {
        h2: 'How each tool works',
        blocks: [
          '**Scrupp: a Chrome extension inside your session.** Scrupp runs as a Chrome extension in your own logged-in browser. You run a Sales Navigator search, hit export, and the extension reads profile data from the pages at browsing speed, verifying emails via SMTP along the way. It exports up to 2,500 leads per search with 15+ data columns to CSV, Excel or CRM integrations. That architecture is simple and fast — but the scraping happens under your LinkedIn identity, in your session, from your browser fingerprint, which is the single biggest source of Sales Navigator account restrictions.',
          '**Coldcast: account-safe scraping by design.** Coldcast’s [Sales Navigator scraper](/products/sales-navigator-scraper) is engineered to extract search results without the high-risk automation patterns that get accounts flagged — no bulk profile-by-profile crawling from your own session at machine speed.',
          {
            image: {
              src: '/images/blog/coldcast-vs-scrupp-pipeline.png',
              width: 1200,
              height: 630,
              alt: 'How Coldcast’s account-safe scraping and waterfall enrichment pipeline works — scrape, enrich, verify, export',
              caption: 'Coldcast’s pipeline: scrape safely, waterfall-enrich, verify, then export a send-ready CSV.',
            },
          },
          'From there the pipeline goes further than a scraper: exported leads flow into Coldcast’s [waterfall enricher](/products/waterfall-enricher), which queries multiple providers in sequence until it finds a valid email — instead of relying on a single source. Every address then passes through [email verification](/products/email-verify) before it reaches your CSV, so bounces are caught before they hurt your sender reputation, not after.',
        ],
      },
      {
        h2: 'Coldcast vs Scrupp: feature comparison',
        blocks: [
          {
            table: [
              ['', 'Coldcast', 'Scrupp'],
              ['Architecture', 'Account-safe scraping, cloud pipeline', 'Chrome extension in your logged-in session'],
              ['Account risk profile', 'Designed to minimise flag-risk patterns', 'Session-based automation; category-typical suspension risk'],
              ['Email finding', 'Waterfall across multiple providers', 'Single built-in finder (~65% find rate, per Scrupp)'],
              ['Email verification', 'Built in, every email verified pre-export', 'SMTP check during export'],
              ['Beyond Sales Navigator', 'Apollo scraper, ZoomInfo scraper, domain enrichment', 'Sales Navigator only'],
              ['Export', 'Clean, deduplicated CSV', 'CSV / Excel, CRM integrations, dedupe'],
              ['Entry price', 'Free trial, then usage-based', 'Free tier (100 leads/mo); paid from $29/mo'],
            ],
          },
          'Scrupp details verified against scrupp.com in July 2026. If anything has changed, tell us and we’ll correct it.',
        ],
      },
      {
        h2: 'Where Scrupp is strong',
        blocks: [
          'Credit where due. Scrupp’s pricing is transparent and cheap to start: a permanent free tier of 100 verified leads a month with no credit card, then roughly $29/month for 1,000 leads and $99/month for 5,000. Its export workflow is quick, its CRM integrations are broad, and it offers an API. For a solo founder doing small-volume prospecting who understands the risk trade-off of extension scraping, it does the job.',
        ],
      },
      {
        h2: 'Where Coldcast pulls ahead',
        blocks: [
          '**1. Your account doesn’t do the dirty work.** The failure mode with extension scrapers isn’t the tool breaking — it’s LinkedIn restricting you. A Sales Navigator seat costs real money, and a restricted account stalls your entire outbound motion. Coldcast’s architecture exists so scraping activity doesn’t look like bot behaviour on your account.',
          '**2. Waterfall enrichment beats a single email source.** Scrupp reports finding verified emails for roughly 65% of leads with its single finder. A waterfall approach — trying provider after provider until one hits — is how the highest find rates in the industry are achieved. Coldcast builds the waterfall into the same flow as the scrape, so you’re not stitching two tools together.',
          '**3. One stack, more sources.** Sales Navigator isn’t the only pond. Coldcast also ships an [Apollo scraper](/products/apollo-scraper) and a [ZoomInfo scraper](/products/zoominfo-scraper), plus [domain enrichment](/products/domain-enrichment) for account-based workflows — all feeding the same enrichment and verification pipeline. Scrupp extracts from Sales Navigator only.',
          '**4. Verified means verified.** Sending to unverified emails burns domains. Coldcast verifies every email before export as a first-class step — the same engine behind our standalone [email verifier](/products/email-verify) — so the list you download is the list you can safely send to.',
        ],
      },
      {
        h2: 'Which should you choose?',
        blocks: [
          '**Choose Scrupp if** you’re a solo operator or small team on a tight budget, your volumes are low, you only prospect from Sales Navigator, and you’re comfortable running automation inside your own LinkedIn session.',
          '**Choose Coldcast if** your LinkedIn account (or your clients’ accounts, if you’re an agency) is something you can’t afford to lose, you want higher email coverage than a single-source finder delivers, you also pull leads from Apollo or ZoomInfo, and you want scraping, waterfall enrichment and verification in one pipeline instead of three subscriptions.',
          'For agencies especially, the calculus is lopsided: one restricted client account costs more in trust and revenue than a year of tooling. See how teams use Coldcast on our [roles pages](/roles), or read our [Evaboot comparison](/blog/coldcast-vs-evaboot) for another head-to-head.',
        ],
      },
    ],
    faq: [
      { q: 'Is Scrupp safe for my LinkedIn account?', a: 'Scrupp runs as a Chrome extension inside your logged-in LinkedIn session, so the scraping activity is tied to your account, browser and IP. It throttles to normal browsing speed, which reduces risk, but session-based automation carries inherent suspension risk. Coldcast was designed specifically to avoid this pattern with account-safe scraping.' },
      { q: 'Is Coldcast just a scraper like Scrupp?', a: 'No. Scraping is the first step of Coldcast’s pipeline. Exported leads go through waterfall enrichment across multiple providers and full email verification before you download them. Scrupp covers scraping plus a single-source email finder.' },
      { q: 'How do the email find rates compare?', a: 'Scrupp states a roughly 65% verified email find rate from its built-in finder. Coldcast uses waterfall enrichment — querying multiple providers in sequence — the industry-standard method for pushing find rates meaningfully higher than any single source.' },
      { q: 'Can either tool scrape Apollo or ZoomInfo?', a: 'Scrupp extracts from LinkedIn Sales Navigator only. Coldcast supports Sales Navigator, Apollo and ZoomInfo scraping, plus domain enrichment for company lists.' },
      { q: 'How much does each tool cost?', a: 'Scrupp offers a free tier (100 verified leads/month), then about $29/month for 1,000 leads and $99/month for 5,000. Coldcast is free to start with a trial, then usage-based — no sales call required.' },
      { q: 'Can I export Sales Navigator leads to CSV with Coldcast?', a: 'Yes — clean, deduplicated, verification-flagged CSV built for cold outreach tools and CRMs.' },
    ],
  },
  {
    slug: 'coldcast-vs-evaboot',
    tag: 'Compare',
    title: 'Coldcast vs Evaboot: Which Sales Navigator Scraper Should You Trust in 2026?',
    metaTitle: 'Coldcast vs Evaboot: Which Sales Nav Scraper Wins? (2026)',
    metaDescription:
      'Coldcast vs Evaboot compared: account safety, email find rates, waterfall enrichment, pricing and CRM workflows — so you pick the right Sales Nav scraper.',
    keywords:
      'coldcast vs evaboot, evaboot vs coldcast, evaboot review, evaboot pricing, sales navigator scraper comparison, waterfall enrichment',
    datePublished: '2026-07-31',
    dateModified: '2026-07-31',
    readMinutes: 8,
    image: {
      src: '/images/blog/coldcast-vs-evaboot-compare-hero.png',
      width: 1200,
      height: 630,
      alt: 'Coldcast vs Evaboot — which Sales Navigator scraper should you trust in 2026',
      caption: 'Coldcast vs Evaboot — the head-to-head comparison is below.',
    },
    excerpt:
      'Coldcast and Evaboot both turn Sales Navigator searches into clean lead lists, but they take different approaches to account safety, enrichment depth and what happens to your data after export. Here is the head-to-head.',
    sections: [
      {
        h2: 'The short answer',
        blocks: [
          'Evaboot is a well-known Chrome extension that exports and cleans Sales Navigator searches and finds work emails from a single source. It’s simple and affordable to start with.',
          'Coldcast is built around a different premise: scraping should be account-safe first, and a single email source is never enough. Coldcast pairs human-like, rate-controlled extraction with [waterfall enrichment](/products/waterfall-enricher) across multiple data providers and built-in [email verification](/products/email-verify) — so you get more valid emails per 1,000 leads, with less risk to the LinkedIn account doing the exporting.',
          'If you export a few hundred leads occasionally and only need emails, Evaboot will do the job. If outbound is your pipeline engine and a restricted LinkedIn account or a burned sending domain is unacceptable, Coldcast is the safer, more complete system.',
        ],
      },
      {
        h2: 'Coldcast vs Evaboot at a glance',
        blocks: [
          {
            table: [
              ['', 'Coldcast', 'Evaboot'],
              ['Core job', 'Account-safe scraping + enrichment + verification', 'Sales Nav export + data cleaning + email finding'],
              ['Account safety', 'Human-like pacing, rate limits tuned to stay under LinkedIn’s radar', 'Chrome-extension export; safety depends on your own volume discipline'],
              ['Email finding', 'Waterfall across multiple providers', 'Single-source email finder'],
              ['Email verification', 'Built in, applied before you download', 'Flags undeliverable addresses'],
              ['Phone numbers', 'Available via waterfall enrichment', 'Not offered'],
              ['Beyond Sales Navigator', 'Apollo & ZoomInfo scraping, domain enrichment', 'Sales Navigator only'],
              ['Automation', 'Coldcast Agent for hands-off list building', 'Manual, search-by-search exports'],
              ['Entry price', 'Free trial, then usage-based', 'From ~$9/mo (credit-based)'],
            ],
          },
        ],
      },
      {
        h2: 'Where Evaboot is genuinely good',
        blocks: [
          '**Data cleaning.** Sales Navigator results are notoriously noisy — Evaboot’s filtering removes a large share of results that don’t actually match your criteria, and independent reviews consistently praise this.',
          '**Simplicity.** It’s a Chrome extension: install, run a search, click export. There’s very little to learn.',
          '**Low entry price.** Paid plans start around $9/month on a credit model, easy to justify for light usage.',
        ],
      },
      {
        h2: 'Where the two tools diverge',
        blocks: [
          '**1. Account safety is a feature, not a footnote.** Every Sales Navigator scraper operates in territory LinkedIn actively polices — request velocity, viewing patterns and volume anomalies — and the penalty for tripping it lands on your account, not your vendor’s. Coldcast’s [Sales Navigator scraper](/products/sales-navigator-scraper) mimics human browsing, throttles against LinkedIn’s practical limits, and keeps your account’s behaviour inside normal bounds. That’s why Coldcast positions itself as the safest Sales Navigator scraper — safety is the architecture, not a setting.',
          '**2. One email source vs a waterfall.** Third-party testing has reported Evaboot find rates in the 55–65% range, lower for SMB contacts. Coldcast runs [waterfall enrichment](/products/waterfall-enricher): each lead is checked against multiple providers in sequence until a valid, verified email (and optionally a phone) is found. If one provider finds 60%, cascading three or four pushes coverage meaningfully higher on the same list.',
          {
            image: {
              src: '/images/blog/coldcast-vs-evaboot-waterfall-diagram.png',
              width: 1200,
              height: 630,
              alt: 'How Coldcast’s waterfall enrichment cascades a lead through multiple email providers and verification before export',
              caption: 'Single-source finders stop at provider 1. Waterfall keeps going until a verified email comes back.',
            },
          },
          '**3. Verification before your CRM ever sees the list.** A lead list is only as good as its bounce rate. Coldcast applies [email verification](/products/email-verify) as part of the pipeline, so what you download is already deliverability-checked — protecting the sending domains your outbound depends on. Evaboot flags undeliverables it detects, but a single-pass check on a single source leaves more risk in the list.',
          '**4. Phones, other databases and automation.** Evaboot is deliberately narrow: Sales Navigator in, emails out. Coldcast also scrapes [Apollo](/products/apollo-scraper) and [ZoomInfo](/products/zoominfo-scraper), enriches from a domain list, and runs recurring, hands-off builds through the [Coldcast Agent](/coldcast-agent). If your prospecting spans more than one database, that consolidation replaces two or three subscriptions.',
        ],
      },
      {
        h2: 'Pricing: read the fine print on credits',
        blocks: [
          'Both tools are credit-based and both require your own Sales Navigator subscription (roughly $100/month from LinkedIn), so the real cost of either stack starts there.',
          'Evaboot’s entry price is low, but note two things: a lead with a found and verified email consumes more than one credit, and a lower find rate means paying to export leads you can’t actually email. At higher volumes, per-lead economics matter more than the headline price. For a fair comparison, price both tools per valid, verified email delivered on the same 1,000-lead list — that’s the number that predicts pipeline.',
        ],
      },
      {
        h2: 'Which should you choose?',
        blocks: [
          '**Choose Evaboot if** you export occasionally, your targets are mostly enterprise contacts (where single-source find rates are strongest), you don’t need phone numbers, and you’re comfortable managing your own export volumes.',
          '**Choose Coldcast if** outbound is a core channel and you can’t risk your LinkedIn account; you want the highest email coverage per list via waterfall enrichment; you need verified emails (and phones) in your CRM without a second tool; or you prospect beyond Sales Navigator. See how [teams in different roles](/roles) use Coldcast, or read our guide to [Evaboot alternatives](/blog/evaboot-alternative).',
        ],
      },
    ],
    faq: [
      { q: 'Is Coldcast safer than Evaboot for my LinkedIn account?', a: 'Coldcast is built account-safety-first: it paces extraction to mimic human browsing and enforces limits designed to keep your account under LinkedIn’s detection thresholds. Evaboot can be used safely at modest volumes, but managing risk is largely up to the user.' },
      { q: 'Does Evaboot find phone numbers?', a: 'No. Evaboot returns work emails only. Coldcast can return phone numbers through its waterfall enrichment step.' },
      { q: 'Do I need LinkedIn Sales Navigator for both tools?', a: 'Yes. Both Coldcast and Evaboot export data from Sales Navigator searches, so an active Sales Navigator subscription is required either way.' },
      { q: 'What is waterfall enrichment and why does it beat a single email finder?', a: 'Waterfall enrichment checks each lead against multiple data providers in sequence until a valid email is found, instead of relying on one source. Because providers have different coverage, cascading them raises the share of leads you can actually contact — typically well above single-source find rates.' },
      { q: 'Can I switch from Evaboot to Coldcast easily?', a: 'Yes. Both tools work on top of your existing Sales Navigator searches, so there’s no data migration — point Coldcast at the same saved searches and re-enrich past exports to recover emails Evaboot couldn’t find.' },
    ],
  },
  {
    slug: 'evaboot-alternative',
    tag: 'Compare',
    title: 'The Evaboot Alternative Built for Account Safety',
    metaTitle: 'Evaboot Alternative: Safer Sales Nav Scraping | Coldcast',
    metaDescription:
      'Looking for an Evaboot alternative? Coldcast exports Sales Navigator leads with zero ban risk, waterfall enrichment and verified emails built in. Try it free.',
    keywords:
      'evaboot alternative, evaboot vs coldcast, sales navigator scraper comparison, evaboot pricing, waterfall enrichment, linkedin scraper with phone numbers',
    datePublished: '2026-07-29',
    dateModified: '2026-07-29',
    readMinutes: 8,
    image: {
      src: '/images/blog/coldcast-vs-evaboot-hero.png',
      width: 1200,
      height: 630,
      alt: 'Coldcast vs Evaboot comparison — Coldcast Evaboot alternative with browser-session scraping, waterfall enrichment, phone numbers and AI lead scoring',
      caption: 'Coldcast vs Evaboot at a glance — the full comparison table is below.',
    },
    excerpt:
      'Evaboot made Sales Navigator exports simple. But if credits stack up, single-source email finding misses too many contacts, or account safety keeps you up at night — here is the honest comparison.',
    sections: [
      {
        h2: 'Why people look for an Evaboot alternative',
        blocks: [
          'Evaboot is a solid, well-known Chrome extension, and for basic exports it does the job. From public reviews and our own testing, the reasons users switch tend to fall into four buckets.',
          '**1. Credit costs stack up fast.** Evaboot\'s pricing starts at $9/month for 100 credits. One credit gets you one exported lead — but a lead *with* a found and verified email costs two credits. A 2,000-lead list with emails means 4,000 credits a month, several tiers up the pricing ladder. If you run continuous outbound, the effective cost per enriched lead matters more than the entry price.',
          '**2. Single-source email finding.** Evaboot finds emails with its own built-in finder. That is fine when it hits, but no single provider covers every industry, geography and seniority level. [Waterfall enrichment](/products/waterfall-enricher) — querying multiple data providers in sequence until one returns a valid email — typically produces 30–50% more verified emails on the same list. Evaboot does not offer it; Coldcast runs it on every export by default.',
          '**3. No phone numbers.** Evaboot\'s plans cover export, email finding and verification. If your sequences include cold calling, you need a second tool for numbers. Coldcast\'s waterfall adds direct dials during the same export pass.',
          '**4. Safety is a spectrum, not a checkbox.** Every scraper claims to be safe — the mechanics matter. Coldcast runs inside your own browser, on your own session and IP, at human speed. To LinkedIn, your activity looks like you — because it is you. That architecture is why Coldcast maintains a record of zero account bans, as we explain in [our account-safety guide](/blog/scrape-sales-navigator-without-getting-banned).',
        ],
      },
      {
        h2: 'Coldcast vs Evaboot at a glance',
        blocks: [
          {
            table: [
              ['', 'Coldcast', 'Evaboot'],
              ['How it runs', 'Your own browser session + IP', 'Chrome extension, own infrastructure'],
              ['Ban-risk architecture', 'Human-paced, real session — zero bans to date', 'Generally regarded as safe'],
              ['Email finding', 'Waterfall across multiple providers', 'Single built-in finder'],
              ['Email verification', 'Included on every found email', 'Included (0.5 credit per verification)'],
              ['Phone numbers', 'Included via waterfall enrichment', 'Not offered'],
              ['AI lead scoring', 'Yes — buying signals + fit scoring', 'No'],
              ['Company-level searches', 'Yes', 'Yes'],
              ['Speed', 'Up to 10,000 leads/hour, 20,000/day', 'Export-dependent'],
              ['Entry pricing', 'Free trial, then pay-as-you-go credits', 'From $9/mo for 100 credits'],
              ['Seats', 'Multi-account support on agency plans', 'Unlimited seats on all plans'],
            ],
          },
          '*Evaboot details verified against evaboot.com\'s live pricing page in July 2026. If anything has changed, tell us and we\'ll correct it.*',
        ],
      },
      {
        h2: 'What makes Coldcast different',
        blocks: [
          '**Account safety as the core design decision.** Coldcast was built backwards from one constraint: your LinkedIn account must survive. A banned account costs you your network, your Sales Navigator subscription, and often your sending domain\'s warm-up work — far more than any scraper subscription. Everything else is designed within that constraint: human-paced extraction from [your own browser session](/products/sales-navigator-scraper), your real IP, no stored passwords.',
          '**Waterfall enrichment built in — not bolted on.** Most Evaboot workflows look like: export → upload the misses to a second email finder → upload to a verifier → merge spreadsheets. Coldcast collapses that into one pass — each lead runs through multiple providers until a verified address comes back, then through [real-time verification](/products/email-verify), then phone lookup. One file, ready for your sequencer.',
          {
            image: {
              src: '/images/blog/waterfall-enrichment-diagram.png',
              width: 1200,
              height: 630,
              alt: 'How waterfall enrichment works — Coldcast queries multiple email providers in sequence until a verified email and phone number come back',
              caption: 'Single-source finders stop at provider 1. Waterfall keeps going until a verified email comes back.',
            },
          },
          '**AI lead scoring on every export.** Coldcast scores each lead and surfaces buying signals you can drop straight into a first line. Instead of 2,000 undifferentiated rows, you get a ranked list — start where conversion is most likely.',
          '**Five-minute setup.** Install the Chrome extension, sign in to LinkedIn (Coldcast never stores your password), paste your Sales Navigator search URL, and start the export. No proxies, no cloud accounts.',
        ],
      },
      {
        h2: 'Who should stay on Evaboot?',
        blocks: [
          'Honesty cuts both ways. Evaboot is a reasonable fit if you export small lists occasionally, don\'t need phone numbers, and its single email finder covers your market well — its data cleaning is genuinely good, and unlimited seats at every tier is generous for teams that export rarely but broadly. If that\'s you, you may not need to switch. If you run outbound every week and your email hit rate or account safety keeps you up at night, that\'s the gap Coldcast was built to close.',
        ],
      },
      {
        h2: 'Switching from Evaboot to Coldcast',
        blocks: [
          {
            list: [
              '**Install the Coldcast Chrome extension** and sign in — your Sales Navigator subscription works as-is.',
              '**Re-run your saved Sales Navigator searches.** Paste each search URL into Coldcast; there is nothing to migrate.',
              '**Compare the output.** Run the same list you last exported from Evaboot and compare verified-email coverage — the free trial exists precisely for this test.',
              '**Point the CSV at your existing stack.** Coldcast exports CSV/XLSX that drops into Clay, HubSpot, Salesforce, or any sequencer.',
            ],
          },
          'Also scraping other databases? Coldcast covers [Apollo](/products/apollo-scraper) and [ZoomInfo](/products/zoominfo-scraper) exports with the same enrichment pipeline.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Coldcast really safer than Evaboot?',
        a: 'Both tools are safer than cloud-based bots. The difference is architectural: Coldcast operates entirely inside your own browser session on your own IP at human speed, so there is no separate login, no datacenter IP, and no automation fingerprint for LinkedIn to detect. Coldcast has recorded zero account bans.',
      },
      {
        q: 'Does Coldcast find more emails than Evaboot?',
        a: 'Typically yes, because Coldcast uses waterfall enrichment — querying multiple email providers in sequence — while Evaboot uses a single built-in finder. Waterfall approaches usually return 30–50% more verified emails on the same list. Run your last Evaboot export through Coldcast\'s free trial and compare.',
      },
      {
        q: 'Can I get phone numbers with Coldcast?',
        a: 'Yes. Coldcast\'s waterfall enrichment adds phone numbers alongside verified emails during the same export. Evaboot does not currently offer phone number enrichment.',
      },
      {
        q: 'Do I need my own proxies or any technical setup?',
        a: 'No. Coldcast runs in your browser through a Chrome extension. Setup takes about five minutes and requires no proxies, no cookies to paste, and no technical configuration. Your LinkedIn password is never stored.',
      },
      {
        q: 'How fast can Coldcast export Sales Navigator leads?',
        a: 'Up to 10,000 leads per hour and 20,000 per day, while still pacing each action like a human session. Speed limits exist to protect your account.',
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
