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
    slug: 'wiza-alternative',
    tag: 'Compare',
    title: 'The Best Wiza Alternative for Account-Safe Sales Navigator Scraping',
    metaTitle: 'Wiza Alternative: Safer Sales Nav Scraping | Coldcast',
    metaDescription:
      'Looking for a Wiza alternative? See why teams switch to Coldcast: account-safe Sales Navigator scraping, waterfall enrichment, and no expiring credits.',
    keywords:
      'wiza alternative, wiza vs coldcast, wiza review, wiza pricing, sales navigator scraper, account-safe linkedin scraper, waterfall enrichment',
    datePublished: '2026-08-12',
    dateModified: '2026-08-15',
    readMinutes: 8,
    image: {
      src: '/images/blog/wiza-alternative-hero.svg',
      width: 1200,
      height: 630,
      alt: 'Coldcast vs Wiza — the account-safe, cloud-based Wiza alternative with waterfall enrichment and no expiring credits',
      caption: 'Coldcast vs Wiza at a glance — the full comparison is below.',
    },
    excerpt:
      'Wiza’s real-time verification is genuinely good — but expiring credits, an “unlimited” tier with a fair-use cap, $0.35 phone numbers and every bulk export riding on your own LinkedIn session push teams to look elsewhere. Here’s the account-safe, waterfall-enriched alternative.',
    sections: [
      {
        h2: 'Why people look for a Wiza alternative',
        blocks: [
          'Wiza is one of the better-known tools for pulling leads out of LinkedIn Sales Navigator, and to be fair, it does some things well — its real-time email verification is a real strength. But if you’re reading this, you’ve probably hit one of Wiza’s pain points: credits that vanish at the end of the month, “unlimited” plans that are only unlimited if you pay annually, phone numbers billed at $0.35 apiece, or the simple discomfort of running a scraper through a Chrome extension tied to your own LinkedIn session.',
          'Coldcast was built as a direct answer to those problems. It’s a [LinkedIn Sales Navigator scraper](/products/sales-navigator-scraper) designed account-safety-first, with [waterfall enrichment](/products/waterfall-enricher) and [email verification](/products/email-verify) built into the same pipeline — so you export clean, verified leads without gambling your LinkedIn account or babysitting a credit meter.',
          'Wiza’s core workflow is solid: run a search in Sales Navigator, trigger Wiza, get verified emails back. The complaints that push people to switch are almost never about whether it works — they’re about *how* it works and what it costs at scale.',
          '**1. The credit model punishes normal usage.** Wiza’s plans (as of August 2026) run from a free tier with 20 email credits a month, through Starter at $49/month for 100 emails and 100 phones, up to Email at $99/month and Email + Phone at $199/month — dropping to $83 and $166/month respectively if you commit annually. Two catches consistently frustrate users. First, unused credits don’t roll over; a slow month is money burned. Second, even the “unlimited” tiers carry a fair-use ceiling — around 2,500 exports a month (30,000 a year) — and phone numbers are billed at $0.35 apiece below the top plan. The list price and the effective price are two different numbers.',
          '**2. Extension-based scraping rides on your LinkedIn session.** Wiza operates through a Chrome extension that works inside your logged-in Sales Navigator session. That architecture is common — Evaboot and Scrupp work in similar territory — but it means extraction activity is directly associated with your browser and your account. LinkedIn’s automated-activity detection has gotten steadily more aggressive, and a restricted Sales Navigator account costs you far more than any scraping tool saves. We’ve written a full guide on [how to scrape Sales Navigator without getting banned](/blog/scrape-sales-navigator-without-getting-banned) if you want the deep dive on what triggers restrictions.',
          '**3. Single-source enrichment leaves emails on the table.** Wiza verifies well, but it’s fundamentally one provider looking for each email. When its source comes up empty, that lead exports without contact info. Waterfall enrichment — querying multiple data providers in sequence until one returns a valid, verified email — consistently finds 15–30% more valid contacts than any single source. That’s the approach Coldcast takes natively; if the concept is new to you, here’s [what waterfall enrichment is and why it wins](/blog/what-is-waterfall-enrichment).',
        ],
      },
      {
        h2: 'Coldcast vs Wiza at a glance',
        blocks: [
          {
            table: [
              ['', 'Coldcast', 'Wiza'],
              ['Architecture', 'Cloud-based, account-safe by design', 'Chrome extension tied to your LinkedIn session'],
              ['Account safety', 'Human-like pacing, rate-limit aware, built to protect your Sales Nav account', 'Depends on your usage; extraction runs through your own session'],
              ['Email enrichment', 'Waterfall across multiple providers', 'Single-source with real-time verification'],
              ['Email verification', 'Built-in on every export', 'Built-in (a genuine Wiza strength)'],
              ['Credit expiry', 'No use-it-or-lose-it pressure', 'Credits don’t roll over month to month'],
              ['“Unlimited” fine print', '—', '~30k/year fair-use cap (about 2,500/month)'],
              ['Phone numbers', 'Included in waterfall flow', '$0.35 each on most plans'],
              ['Data cleaning', 'Auto-cleaned, CRM-ready CSV', 'Good formatting, some manual cleanup'],
              ['Also scrapes', 'Apollo, ZoomInfo', 'LinkedIn only'],
            ],
          },
          '*Wiza pricing and limits verified August 2026 from Wiza’s published plans and independent pricing reviews. Both tools require your own Sales Navigator subscription.*',
        ],
      },
      {
        h2: 'Where Coldcast is different',
        blocks: [
          {
            image: {
              src: '/images/blog/wiza-alternative-diagram.svg',
              width: 1200,
              height: 630,
              alt: 'Single-source lookup finds ~650 emails on a 1,000-lead list and leaves misses empty; Coldcast’s waterfall cascades Provider A, B, C with verification to ~850+ verified emails',
              caption: 'A single lookup stops at the first miss. Coldcast cascades provider after provider, verifying each hit — typically 15–30% more valid emails.',
            },
          },
          '**Account safety is the architecture, not a setting.** Coldcast’s entire design premise is that your LinkedIn account is the most expensive thing in the workflow. Extraction is paced to mimic human browsing, respects Sales Navigator’s rate limits, and avoids the burst patterns that trip LinkedIn’s detection. This isn’t a toggle you enable — it’s how the scraper works, full stop. If you’re scraping daily to feed an outbound motion, this is the difference that matters most.',
          '**Waterfall enrichment, not single-source lookup.** Every lead you export runs through a cascade of enrichment providers until a verified email comes back. One provider missing a contact doesn’t mean *you* miss the contact. Combined with [built-in verification](/products/email-verify) and [domain enrichment](/products/domain-enrichment), the output is a CSV your SDRs can load straight into a sequencer without a cleanup pass. If you’ve been exporting from Wiza and then re-enriching misses through a second tool, Coldcast collapses that into one step.',
          '**One pipeline for more than LinkedIn.** Wiza is a LinkedIn tool. Coldcast covers Sales Navigator plus [Apollo](/products/apollo-scraper) and [ZoomInfo](/products/zoominfo-scraper) scraping in the same platform — useful when your team pulls from multiple databases and wants one consistent, deduplicated output format. And for teams automating the whole motion, the [Coldcast Agent](/coldcast-agent) handles search-to-CSV runs without manual clicking.',
        ],
      },
      {
        h2: 'Where Wiza is still a fine choice',
        blocks: [
          'Honesty matters in these comparisons, so: if you’re an individual user pulling a few hundred leads a month, verifying in real time as you browse, and you’re comfortable with the extension model, Wiza works. Its verification engine is legitimately good — bounce rates on Wiza exports are consistently low, and that’s the thing it was built to do. Its free tier (20 emails/month) is also a low-risk way to test it.',
          'The switch to Coldcast makes sense when volume grows, when the credit math stops working, when you need phone/email coverage a single source can’t deliver, or when account safety moves from “nice to have” to “we cannot lose this Sales Nav seat.”',
        ],
      },
      {
        h2: 'How to switch from Wiza to Coldcast',
        blocks: [
          'Migration is about as light as it gets, because both tools sit on top of Sales Navigator rather than storing your workflow.',
          {
            list: [
              '**Keep your Sales Navigator subscription** — Coldcast uses your existing searches and saved lists.',
              '**Recreate your target searches** in Sales Navigator (they’re already there if you’ve been using Wiza).',
              '**Run your first Coldcast export** — leads come back enriched via waterfall and verified automatically.',
              '**Load the CSV into your CRM or sequencer.** The output is pre-cleaned; here’s our full walkthrough on [exporting Sales Navigator leads to CSV](/blog/export-sales-navigator-leads-to-csv).',
            ],
          },
          'Most teams run one parallel export on both tools, compare valid-email coverage and bounce rates, and make the call from there. We encourage exactly that test.',
        ],
      },
    ],
    faq: [
      { q: 'Is Coldcast safer than Wiza for my LinkedIn account?', a: 'Coldcast is built account-safety-first: cloud-based extraction with human-like pacing and rate-limit awareness, rather than a Chrome extension automating inside your own browser session. No scraper can promise zero risk — anyone who does is overpromising — but minimising detectable automation patterns is Coldcast’s core design goal, not an afterthought. Worried about the legal side too? Read [Is LinkedIn scraping legal?](/blog/is-linkedin-scraping-legal)' },
      { q: 'Does Coldcast require LinkedIn Sales Navigator like Wiza does?', a: 'Yes. Both tools work on top of Sales Navigator search results, so you need your own subscription. The difference is what happens after the search: Coldcast adds waterfall enrichment and verification in one pass, and also supports Apollo and ZoomInfo as sources.' },
      { q: 'How is waterfall enrichment better than Wiza’s email finding?', a: 'Wiza looks up each contact against its own data source and verifies the result. Waterfall enrichment queries multiple providers in sequence until one returns a valid, verified email — which typically recovers 15–30% of the contacts a single source misses. More valid emails per 1,000 leads exported means lower effective cost per contact.' },
      { q: 'Do Coldcast credits expire like Wiza’s?', a: 'No. Wiza credits don’t roll over between billing periods, which is one of its most common user complaints. Coldcast doesn’t pressure you into a use-it-or-lose-it cycle.' },
      { q: 'Can I export phone numbers without paying per number?', a: 'With Wiza, phone numbers cost $0.35 each on most plans (or require the Email + Phone tier). Coldcast includes phone discovery in its waterfall enrichment flow rather than metering it per number.' },
    ],
  },
  {
    slug: 'what-is-waterfall-enrichment',
    tag: 'Guide',
    title: 'What Is Waterfall Enrichment? The Complete 2026 Guide',
    metaTitle: 'What Is Waterfall Enrichment? Complete 2026 Guide',
    metaDescription:
      'Waterfall enrichment queries multiple data providers in sequence to maximize email & phone match rates. Learn how it works, costs, and when to use it in 2026.',
    keywords:
      'what is waterfall enrichment, waterfall enrichment, waterfall email enrichment, multi-provider enrichment, email match rate, pay per valid result, fullenrich, bettercontact',
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    readMinutes: 8,
    image: {
      src: '/images/blog/what-is-waterfall-enrichment-hero.svg',
      width: 1200,
      height: 630,
      alt: 'What is waterfall enrichment — a lead cascading through Provider 1, 2 and 3 until a verified email is found',
      caption: 'Waterfall enrichment cascades a lead through provider after provider until a verified email comes back.',
    },
    excerpt:
      'You scraped 1,000 leads and your email finder returned 550 — with 450 blanks. Waterfall enrichment fixes that 45% hole by cascading through 15+ data providers until each contact has a verified email, charging only for results. Here’s how it works, what it costs and when to use it.',
    sections: [
      {
        h2: 'What waterfall enrichment actually is',
        blocks: [
          'You scraped a clean list of 1,000 prospects from Sales Navigator. You run it through your email finder. It comes back with 550 emails — and 450 blanks. That 45% hole in your list is the problem waterfall enrichment was invented to solve.',
          '**Waterfall enrichment is the practice of querying multiple data providers in sequence** — one after another, like water falling down a series of ledges — until a verified email or phone number is found for each contact. Instead of relying on one vendor’s database, you cascade through five, ten or fifteen. Provider A misses? Ask Provider B. Provider B misses? Ask Provider C. Each contact only stops cascading when a valid result comes back.',
          'At Coldcast, waterfall enrichment is built directly into the [Waterfall Enricher](/products/waterfall-enricher) — and because Coldcast starts from account-safe Sales Navigator scraping, your leads arrive already clean, deduplicated and ready to enrich without ever putting your LinkedIn account at risk.',
        ],
      },
      {
        h2: 'Why single-provider enrichment falls short',
        blocks: [
          'No single B2B data provider covers the whole market. Every vendor — Apollo, Hunter, Dropcontact, Prospeo, Kaspr and the rest — has its own coverage strengths by region, industry and company size. One might be strong on US SaaS contacts but weak on European manufacturing; another is the reverse.',
          'In practice, a single provider typically finds a valid email for somewhere between 40% and 70% of a B2B list. That means for every 1,000 leads you paid to source, 300–600 are unusable — not because those people don’t have emails, but because *that particular database* doesn’t have them.',
          {
            image: {
              src: '/images/blog/waterfall-single-vs-cascade.svg',
              width: 1200,
              height: 630,
              alt: 'Single provider finds a verified email for about 55% of a 1,000-lead list; a 15+ provider waterfall reaches 80% or more on the same list',
              caption: 'Same 1,000-lead list: one database leaves ~450 blanks; a 15-provider waterfall fills most of them.',
            },
          },
          'Waterfall enrichment attacks the coverage problem directly. Vendors that run waterfalls across 10–20 sources routinely report combined match rates of 80% or higher on the same lists, because each provider fills a slice of the gaps the previous one left. The math is simple: the union of fifteen databases is always bigger than any one of them.',
        ],
      },
      {
        h2: 'How waterfall enrichment works, step by step',
        blocks: [
          '**1. Start with an identity anchor.** Every waterfall needs a reliable starting point: usually a LinkedIn profile URL, or a full name plus company domain. The cleaner the input, the better every downstream provider performs — which is why scraping quality matters so much. A Sales Navigator export full of truncated names and “LinkedIn Member” rows will underperform no matter how many providers you cascade through. Coldcast’s [Sales Navigator scraper](/products/sales-navigator-scraper) cleans names, strips emojis and certifications, and resolves company domains before enrichment even begins.',
          '**2. Query providers in sequence.** The engine sends the contact to Provider 1. If a result comes back, the cascade stops for that contact. If not, it moves to Provider 2, then 3, and so on. Good engines order providers dynamically — putting the vendors with the best historical hit rate for that segment (geography, industry, seniority) at the top of the cascade, which finds results faster and cheaper.',
          '**3. Verify every result.** A found email is not a usable email. Catch-all domains, stale records and recycled addresses mean raw finder output can bounce at 10–20% if sent unchecked. Serious waterfall systems verify each result before returning it — checking MX records, mailbox existence and catch-all status. Coldcast runs every waterfall result through its own [email verification](/products/email-verify) layer, so what lands in your CSV is deliverable, not just “found.”',
          '**4. Return one clean field per contact.** The output you want is a single verified email (or phone) per lead — not fifteen conflicting guesses. The waterfall’s job is to collapse a messy multi-vendor landscape into one trustworthy column in your export.',
        ],
      },
      {
        h2: 'Waterfall enrichment vs. buying multiple subscriptions yourself',
        blocks: [
          'You could replicate a waterfall manually: subscribe to Apollo, Hunter, Snov.io and Prospeo, export your misses from each, and re-upload to the next. People genuinely did this in 2022–2023. The problems:',
          {
            list: [
              '**Cost** — you pay four full subscriptions but each one only earns its keep on a fraction of your list.',
              '**Time** — every hop is a manual CSV export/import with dedupe work in between.',
              '**Waste** — most standalone tools charge credits per *lookup*, not per *result*, so you burn credits on misses.',
            ],
          },
          'Waterfall platforms flip that economics. The dominant model in 2026 — used by Coldcast and most credible competitors — is **pay-per-valid-result**: a credit is only consumed when a verified email or phone actually comes back. Misses are free.',
        ],
      },
      {
        h2: 'What does waterfall enrichment cost in 2026?',
        blocks: [
          'Honest market context, verified August 2026:',
          {
            list: [
              '**FullEnrich** cascades across roughly 15+ providers; entry pricing starts around $29/month for 500 credits, at 1 credit per verified business email and 10 credits per mobile number — no credits deducted on misses.',
              '**BetterContact** advertises 20+ data sources; plans start at $15/month for 200 credits, with the same 1-credit-per-email / 10-credits-per-phone structure, charging only on found-and-verified results.',
              '**Apollo** and **Clay** both offer waterfall-style enrichment inside their broader platforms — powerful if you already live in those ecosystems, but you inherit their pricing models and, in Clay’s case, premium-credit multipliers.',
            ],
          },
          'These are capable tools. The difference with Coldcast is **where the waterfall sits in your workflow**. FullEnrich and BetterContact enrich lists you bring to them — the risky part, getting the leads out of Sales Navigator, is your problem. Coldcast handles the full chain: account-safe extraction from Sales Navigator (built to mimic human browsing and respect LinkedIn’s rate limits so your account stays safe), automatic cleaning, waterfall enrichment and verification — one pipeline, one tool. If your leads come from [Apollo](/products/apollo-scraper) or [ZoomInfo](/products/zoominfo-scraper) instead, the same waterfall applies there too.',
        ],
      },
      {
        h2: 'When waterfall enrichment is worth it (and when it isn’t)',
        blocks: [
          '**Use a waterfall when:**',
          {
            list: [
              'You’re running cold outbound at volume, where each 10-point gain in match rate directly multiplies pipeline.',
              'Your ICP spans regions or industries — exactly where single-provider coverage is patchiest.',
              'You need mobile numbers, where individual provider hit rates are low and cascading matters most.',
              'You’re paying an SDR team to prospect; blank rows are payroll waste.',
            ],
          },
          '**Skip it when:**',
          {
            list: [
              'You have a tiny, high-touch target list (25 named accounts) — manual research beats any database.',
              'Your existing single provider already hits 85%+ on your niche (rare, but it happens in dense US tech segments).',
              'Your bottleneck is copy or deliverability, not contact coverage. More emails into a burned domain helps nothing — fix [verification](/products/email-verify) and warm-up first.',
            ],
          },
        ],
      },
      {
        h2: 'Best practices for waterfall enrichment in 2026',
        blocks: [
          '**Start from clean, deduplicated input.** Garbage in, garbage cascaded through fifteen providers, garbage out. Fix names and domains before enriching.',
          '**Always verify, never just find.** If your waterfall doesn’t include a verification pass, add one before sending. Bounce rates above 3% will damage your sender reputation.',
          '**Enrich right after scraping, not weeks later.** B2B data decays at roughly 2–3% per month as people change jobs. The best time to enrich a Sales Navigator export is the same day you pull it. New to exporting? See our guide to [exporting Sales Navigator leads to CSV](/blog/export-sales-navigator-leads-to-csv).',
          '**Watch your cost per *valid* contact, not cost per credit.** A cheaper tool with a 55% match rate is more expensive per usable lead than a pricier one hitting 80%.',
          '**Keep the whole chain account-safe.** Enrichment is only as good as the lead source feeding it. Aggressive scrapers that get your Sales Navigator account restricted don’t just cost you LinkedIn access — they cut off your entire pipeline upstream of the waterfall. It’s covered in depth in [how to scrape Sales Navigator without getting banned](/blog/scrape-sales-navigator-without-getting-banned).',
        ],
      },
      {
        h2: 'The bottom line',
        blocks: [
          'Waterfall enrichment is not a gimmick — it’s the logical response to a fragmented B2B data market. No single database sees everyone, so the winning move is to query many and verify what comes back. In 2026 the technique has gone from a Clay-table power-user trick to table stakes for serious outbound teams.',
          'If you want the waterfall built into the same account-safe pipeline that gets your leads out of Sales Navigator in the first place, try [Coldcast’s Waterfall Enricher](/products/waterfall-enricher) — or let the [Coldcast Agent](/coldcast-agent) run the whole scrape-clean-enrich-verify loop for you.',
        ],
      },
    ],
    faq: [
      { q: 'What is waterfall enrichment in simple terms?', a: 'Waterfall enrichment means checking multiple data providers one after another until a verified email or phone number is found for a contact. If the first provider doesn’t have the data, the request “falls” to the next provider, and so on — which is why combined match rates beat any single database.' },
      { q: 'How much does waterfall enrichment improve match rates?', a: 'A single provider typically finds valid emails for 40–70% of a B2B list. Cascading across 10–20 providers routinely pushes combined match rates to 80% or more, because each provider covers gaps the others miss. Exact gains depend on your list’s geography, industries and seniority mix.' },
      { q: 'Do I pay for contacts the waterfall can’t find?', a: 'Not with modern tools. The standard 2026 model — used by Coldcast, FullEnrich and BetterContact — is pay-per-valid-result: credits are only consumed when a verified email or phone is actually returned. Failed lookups cost nothing.' },
      { q: 'Is waterfall enrichment better than using Apollo or Clay directly?', a: 'Apollo and Clay both offer waterfall-style enrichment inside their platforms, and they’re good options if you already use those ecosystems. A dedicated pipeline like Coldcast differs by combining account-safe Sales Navigator scraping, cleaning, waterfall enrichment and email verification in one flow — so you don’t stitch together a scraper, an enricher and a verifier separately.' },
      { q: 'How many data providers should a waterfall use?', a: 'More providers help, with diminishing returns after roughly 10–15 for emails. Order matters as much as count: good engines rank providers by historical hit rate for your specific segment, so most contacts resolve within the first few hops — faster results and lower provider load.' },
      { q: 'Does waterfall enrichment work for phone numbers too?', a: 'Yes, and it’s arguably even more valuable there. Individual providers’ mobile-number hit rates are much lower than email hit rates, so cascading across many sources makes the biggest relative difference for phone enrichment. Expect phone results to cost more credits than emails (10:1 is the common ratio).' },
    ],
  },
  {
    slug: 'is-linkedin-scraping-legal',
    tag: 'Legal',
    title: 'Is LinkedIn Scraping Legal? What the Law Actually Says in 2026',
    metaTitle: 'Is LinkedIn Scraping Legal? What the Law Says (2026)',
    metaDescription:
      'Is LinkedIn scraping legal? What hiQ v. LinkedIn, GDPR, and LinkedIn’s terms actually say — plus how to export Sales Navigator leads without risking your account.',
    keywords:
      'is linkedin scraping legal, linkedin scraping law, hiq v linkedin, van buren cfaa, meta v bright data, gdpr b2b prospecting, ccpa cold email, sales navigator scraping legal',
    datePublished: '2026-08-09',
    dateModified: '2026-08-12',
    readMinutes: 9,
    image: {
      src: '/images/blog/is-linkedin-scraping-legal-hero.svg',
      width: 1200,
      height: 630,
      alt: 'Is LinkedIn scraping legal — the 2026 verdict: criminal law says not a crime, LinkedIn’s terms drive account risk, GDPR/CCPA make B2B outreach compliant',
      caption: 'The 2026 verdict at a glance — criminal, contract and privacy law each answer a different question.',
    },
    excerpt:
      'Scraping public LinkedIn data isn’t a crime, and no salesperson has been prosecuted for exporting Sales Navigator leads. But “not a crime” isn’t the whole story: criminal law, LinkedIn’s terms, and privacy law each answer a different question. Here’s where you actually stand.',
    sections: [
      {
        h2: 'The short answer',
        blocks: [
          'Scraping publicly available LinkedIn data is **not a crime**, and no salesperson has ever been prosecuted for exporting Sales Navigator leads. But “not a crime” isn’t the whole story. LinkedIn scraping sits at the intersection of three different kinds of rules — criminal law, LinkedIn’s terms of service, and privacy regulations like GDPR — and each one answers a different question.',
          'This guide walks through all three, in plain English, so you know exactly where you stand before you export your next lead list. (The usual caveat: this is general information, not legal advice — if you have a specific compliance question, talk to a lawyer.)',
        ],
      },
      {
        h2: 'The three questions people actually mean by “is it legal?”',
        blocks: [
          {
            image: {
              src: '/images/blog/linkedin-scraping-risk-layers.svg',
              width: 1200,
              height: 630,
              alt: 'The three layers of LinkedIn scraping risk — criminal law (no risk), LinkedIn’s terms of service (the real daily risk), and privacy law (manageable)',
              caption: 'Three separate questions people lump into one word. Only the middle one — LinkedIn’s terms — is a daily risk.',
            },
          },
          'When someone asks whether LinkedIn scraping is legal, they’re usually asking one of three things:',
          {
            list: [
              '**Will I get in trouble with the law?** (criminal and civil liability)',
              '**Will LinkedIn ban my account?** (terms of service)',
              '**Can I lawfully use the data for outreach?** (GDPR, CCPA and privacy law)',
            ],
          },
          'These have different answers, and conflating them is where most of the fear-mongering comes from. Let’s take them in order.',
        ],
      },
      {
        h2: 'Question 1: Is scraping LinkedIn a crime? (hiQ v. LinkedIn)',
        blocks: [
          'The landmark case here is **hiQ Labs v. LinkedIn**, which ran from 2017 to 2022 and shaped how US courts think about web scraping. hiQ was an analytics startup that scraped public LinkedIn profiles. LinkedIn argued the scraping violated the **Computer Fraud and Abuse Act (CFAA)** — the US federal anti-hacking statute — and hiQ sued; the case went up to the Ninth Circuit twice.',
          '**What the courts decided.** The Ninth Circuit ruled (2019, reaffirmed 2022) that scraping publicly accessible data does not violate the CFAA: the statute targets accessing computers “without authorization,” and data open to the public doesn’t require authorization in the first place — you can’t “hack” a page anyone can view. The Supreme Court’s decision in **Van Buren v. United States (2021)** reinforced this “gates-up-or-down” reading. But hiQ still lost the war: in late 2022 the case ended with a settlement and consent judgment after the district court found hiQ had **breached LinkedIn’s User Agreement** — a contract claim, not a hacking claim.',
          '**What that means for you.** Scraping public LinkedIn data is not a criminal act in the US. The real exposure is **contractual**: when you log in, you accept a User Agreement that prohibits automated data collection, and LinkedIn can enforce it — primarily by restricting the account that breaks it. Notably, in **Meta v. Bright Data (2024)**, a court found that logged-*out* scraping of public data didn’t even breach the platform’s terms, underlining that the contract question turns on the account, not the scraping itself. For a sales team, LinkedIn’s realistic enforcement isn’t a lawsuit — you’re not a venture-funded data reseller — it’s account restriction.',
        ],
      },
      {
        h2: 'Question 2: Will LinkedIn ban my account?',
        blocks: [
          'LinkedIn’s User Agreement (Section 8.2) prohibits using bots or other automated methods to copy data from the service. Violating it isn’t illegal — breaching a website’s terms is a contract issue — but LinkedIn’s remedy is swift and practical: **warnings, temporary restrictions and permanent bans.** This is where scraping tools differ enormously, and it’s the risk that should drive your choice of tool:',
          {
            list: [
              '**Machine-speed automation and cookie-replay bots** pilot your LinkedIn session at machine speed — visiting hundreds of profiles an hour, clicking in perfect rhythm, with no real limits. LinkedIn’s detection is built to spot exactly this, and detection means your account (and your Sales Navigator subscription) takes the hit.',
              '**Chrome extensions that inject code into LinkedIn’s pages** are detectable too — LinkedIn can see modified page structures and abnormal request patterns from your session.',
              '**Account-safe scrapers** stay within human-like rate limits, avoid injecting anything detectable into your session, and throttle extraction to mimic normal Sales Navigator usage.',
            ],
          },
          'This is the design philosophy behind [Coldcast’s Sales Navigator scraper](/products/sales-navigator-scraper): the scraping problem isn’t “can you get the data” — any tool can — it’s “can you get the data without LinkedIn noticing anything unusual about your account.” For the operational detail, we’ve written a full guide on [how to scrape Sales Navigator without getting banned](/blog/scrape-sales-navigator-without-getting-banned).',
        ],
      },
      {
        h2: 'Question 3: Can you lawfully use scraped data for outreach? (GDPR & CCPA)',
        blocks: [
          'Even though collecting public data isn’t a crime, the moment you process **personal data** — names, job titles, work emails — privacy law applies. This is the layer most scraping guides skip, and the one with real regulatory teeth in Europe.',
          '**GDPR (EU/UK prospects).** GDPR applies wherever your prospects are in the EU or UK, regardless of where your company sits — and it does **not** prohibit B2B prospecting. Cold outreach to business contacts can rest on the **legitimate interest** basis (Article 6(1)(f)), provided you handle the data responsibly: use business data for business purposes; tell people where you got their data (Article 14 — in practice a line in your first email noting you found them on LinkedIn); honour opt-outs immediately and suppress deleted contacts rather than re-enriching them; and don’t hoard data beyond a genuine prospecting purpose.',
          '**CCPA (California prospects).** California’s CCPA/CPRA is lighter-touch for B2B: the core obligations are disclosure and honouring deletion/opt-out requests. Respond to those promptly and ordinary B2B prospecting is workable.',
          '**Where verification fits.** Regulators care about **data quality** too — GDPR’s accuracy principle means you shouldn’t be emailing stale addresses. Running exports through [email verification](/products/email-verify) and [waterfall enrichment](/products/waterfall-enricher) isn’t just deliverability hygiene; it keeps your outreach list accurate, current and defensible.',
        ],
      },
      {
        h2: 'So what’s actually risky? A practical hierarchy',
        blocks: [
          'Putting the three layers together, here’s how the risk actually stacks up for a typical sales team:',
          {
            list: [
              '**No realistic risk:** criminal prosecution for exporting public B2B lead data. The CFAA question was settled by *hiQ* and *Van Buren*.',
              '**Low, manageable risk:** privacy-law issues — if you follow the B2B outreach practices above (relevance, transparency, opt-outs, accuracy).',
              '**The real risk:** **losing your LinkedIn account** because your tool scraped in a way LinkedIn detects. This is the one that happens every day, and the one entirely within your control through tool choice.',
            ],
          },
          'In other words: the question isn’t so much “is LinkedIn scraping legal?” as “is my scraper safe?”',
        ],
      },
      {
        h2: 'How Coldcast approaches this',
        blocks: [
          'Coldcast was built as the safest way to get leads out of Sales Navigator, and that design maps directly onto the three layers above:',
          {
            list: [
              '**Public-data extraction at human-like rates** keeps your account clear of LinkedIn’s automation detection — no injected code, no machine-speed profile visits.',
              '**[Waterfall enrichment](/products/waterfall-enricher)** finds work emails from multiple providers, and **[email verification](/products/email-verify)** confirms them before you send — so your list stays accurate and GDPR-defensible.',
              '**Clean CSV export** means you control the data: easy to honour deletion requests, easy to document where a contact came from. See our walkthrough on [exporting Sales Navigator leads to CSV](/blog/export-sales-navigator-leads-to-csv).',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'Is scraping LinkedIn a criminal offense?', a: 'No. US courts held in hiQ v. LinkedIn that scraping publicly accessible data does not violate the Computer Fraud and Abuse Act. There is no criminal statute against collecting public profile data, in the US or the EU. The risks are contractual (LinkedIn’s terms) and regulatory (privacy-law compliance) — not criminal.' },
      { q: 'Can LinkedIn sue me for scraping?', a: 'Technically LinkedIn can bring a breach-of-contract claim against users who violate its User Agreement, as it did against hiQ Labs. In practice, LinkedIn litigates against large-scale commercial data resellers, not individual sales professionals. For normal users, LinkedIn’s enforcement is account restriction, not lawsuits.' },
      { q: 'Is it legal to scrape emails from LinkedIn?', a: 'Most scraping tools, including Coldcast, don’t take emails from LinkedIn itself — they enrich scraped names and companies through third-party databases to find work emails. Using business contact data for relevant B2B outreach is lawful under GDPR’s legitimate-interest basis, provided you disclose your data source, keep data accurate, and honour opt-outs.' },
      { q: 'Does GDPR ban cold outreach to scraped leads?', a: 'No. GDPR regulates how you process personal data; it doesn’t prohibit B2B prospecting. Cold email to business contacts can rely on legitimate interest if the pitch is relevant to the recipient’s role, you tell them where you got their data, and you honour opt-outs immediately. Some EU countries layer additional e-privacy rules on top, so check local rules for your key markets.' },
      { q: 'What’s the safest way to export Sales Navigator leads?', a: 'Use a tool that extracts at human-like rates without injecting detectable code into your LinkedIn session, then enrich and verify emails outside LinkedIn. Coldcast’s Sales Navigator scraper was built around exactly this account-safety principle — the difference between tools that get data and tools that get data while keeping your account alive.' },
    ],
  },
  {
    slug: 'apify-alternative',
    tag: 'Compare',
    title: 'The Best Apify Alternative for Lead Generation in 2026',
    metaTitle: 'Apify Alternative for Lead Generation: Safer & Simpler',
    metaDescription:
      'Looking for an Apify alternative for lead generation? See why teams switch to Coldcast: account-safe Sales Navigator scraping, flat pricing, verified emails.',
    keywords:
      'apify alternative, apify alternative for lead generation, apify vs coldcast, apify linkedin scraper, sales navigator scraper, flat pricing lead tool, waterfall enrichment, account-safe linkedin scraper',
    datePublished: '2026-08-09',
    dateModified: '2026-08-09',
    readMinutes: 7,
    image: {
      src: '/images/blog/apify-alternative-hero.png',
      width: 1200,
      height: 630,
      alt: 'Apify alternative for lead generation — Coldcast vs Apify on pricing, account safety and built-in enrichment',
      caption: 'Apify is a developer scraping platform; Coldcast is a purpose-built, account-safe lead engine.',
    },
    excerpt:
      'Apify is a great platform — if you’re a developer building scrapers. For a sales team pulling verified leads out of Sales Navigator, it means renting actors, pasting your session cookie into code you didn’t write, and stacking compute + proxy + rental fees. Here’s the account-safe, purpose-built alternative.',
    sections: [
      {
        h2: 'Why lead-gen teams look for an Apify alternative',
        blocks: [
          'Apify is a marketplace of 10,000+ community-built “actors” (scrapers) that run on rented cloud infrastructure. That model is powerful for general web scraping, but it creates real friction when the job is B2B lead generation.',
          '**1. Usage-based pricing is unpredictable.** Apify’s plans (Free with $5 credit, Starter $29/mo, Scale $199/mo, Business $999/mo as of mid-2026) are prepaid credit pools, not flat prices. On top of the plan you pay per compute unit ($0.13–$0.20 per CU), residential proxy bandwidth (~$7–8/GB), and — for most LinkedIn actors — a separate monthly actor-rental fee plus usage. The popular Sales Navigator actor, for example, runs about $39/month plus usage. For a lead-gen team that just wants a predictable cost per lead, that’s the wrong shape of bill.',
          '**2. Community actors put your LinkedIn account at risk.** LinkedIn scraping actors on Apify are third-party community projects. Quality varies, support can be slow, and most require you to paste in your LinkedIn session cookie — handing your logged-in identity to code you didn’t write and can’t audit. If the actor scrapes too fast or from a suspicious IP, it’s *your* Sales Navigator account that gets restricted. Apify the platform can’t manage that risk for you, because it doesn’t control the actors.',
          '**3. You still have to build the pipeline.** Scraping is maybe 30% of the lead-gen job. On Apify, deduplication, email finding, verification and CRM formatting are all your problem — usually solved by chaining more actors or exporting raw JSON into other tools. Every extra step is another place data breaks.',
        ],
      },
      {
        h2: 'What makes Coldcast different',
        blocks: [
          'Coldcast was built for exactly one workflow: turn a Sales Navigator (or Apollo, or ZoomInfo) search into a clean, verified, CRM-ready lead list — safely.',
          '**Account safety is the core feature, not an afterthought.** Instead of hammering LinkedIn through whatever proxy an actor happens to use, [Coldcast’s Sales Navigator scraper](/products/sales-navigator-scraper) runs your own logged-in LinkedIn session in a secure, isolated cloud browser and mimics human browsing behaviour, respecting conservative hard limits so your account stays under LinkedIn’s radar. You don’t have to choose between volume and keeping the Sales Navigator seat you pay $100+/month for.',
          '**One pipeline: scrape → enrich → verify.**',
          {
            list: [
              '**Scraping** — export leads from [Sales Navigator](/products/sales-navigator-scraper), [Apollo](/products/apollo-scraper) or [ZoomInfo](/products/zoominfo-scraper) searches to CSV in a few clicks.',
              '**Enrichment** — [waterfall enrichment](/products/waterfall-enricher) queries multiple data providers in sequence until it finds a valid email or phone, and [domain enrichment](/products/domain-enrichment) fills in firmographics.',
              '**Verification** — every address passes through [email verification](/products/email-verify) before export, protecting your sender reputation and keeping bounce rates low.',
            ],
          },
          {
            image: {
              src: '/images/blog/apify-alternative-pipeline.png',
              width: 1200,
              height: 630,
              alt: 'An Apify actor stack — scraper actor, proxy config, enrich actor, verify actor — versus Coldcast’s single built-in scrape, waterfall enrichment and email-verification pipeline',
              caption: 'On Apify you rent and wire three or four actors. On Coldcast, scrape → enrich → verify is one pipeline, one predictable price.',
            },
          },
          '**No code, no compute units, no proxy bills.** There are no actors to configure, no memory settings to tune and no surprise proxy line items — and scraping is free, so you only pay to enrich and verify the contacts you actually want ($0.003 per verified email). If you can run a Sales Navigator search, you can use Coldcast. For teams that want automation on top, the [Coldcast AI agent](/coldcast-agent) handles prospecting workflows end to end.',
        ],
      },
      {
        h2: 'Coldcast vs Apify at a glance',
        blocks: [
          {
            table: [
              ['', 'Coldcast', 'Apify'],
              ['Built for', 'Lead generation specifically', 'General web scraping'],
              ['Setup', 'No-code, minutes', 'Actor config, cookies, proxies'],
              ['LinkedIn account safety', 'Core design — human-like behaviour, managed rate limits', 'Depends entirely on the third-party actor'],
              ['Pricing model', 'Scraping free, pay per verified email — predictable', 'Plan + compute units + proxies + actor rental + usage'],
              ['Email enrichment', 'Built-in waterfall across providers', 'Separate actors, separate cost'],
              ['Email verification', 'Built-in', 'Separate actors, separate cost'],
              ['Support', 'Product team owns the whole pipeline', 'Marketplace actor authors'],
              ['Best for', 'Sales, growth, agencies, RevOps', 'Developers scraping arbitrary sites'],
            ],
          },
        ],
      },
      {
        h2: 'When Apify is still the right choice',
        blocks: [
          'Honesty matters: Apify is excellent at what it’s actually for. If you need to scrape e-commerce prices, monitor competitor websites, feed data to AI agents or build a custom scraper for an arbitrary site, Apify’s actor ecosystem and developer tooling are hard to beat — and its $5/month free credit is a generous way to experiment. Choose Apify when you have engineering resources and a scraping problem broader than lead generation. Choose Coldcast when the deliverable is a verified B2B lead list and the constraint is keeping your LinkedIn account safe.',
        ],
      },
      {
        h2: 'How to switch from Apify to Coldcast',
        blocks: [
          {
            list: [
              '**Run your usual Sales Navigator search** — the same filters you’d feed the Apify actor.',
              '**Export with Coldcast** — leads are extracted with account-safe pacing and automatically cleaned (no duplicate rows, no malformed company names).',
              '**Enrich and verify** — waterfall enrichment finds emails; verification flags anything risky before it hits your sequences.',
              '**Download CSV or push to your stack** — your list arrives ready for your CRM or outreach tool.',
            ],
          },
          'Most teams complete their first export in under ten minutes — no documentation required. New to account-safe extraction? Start with [how to scrape Sales Navigator without getting banned](/blog/scrape-sales-navigator-without-getting-banned).',
        ],
      },
    ],
    faq: [
      { q: 'Is Coldcast really safer for my LinkedIn account than Apify actors?', a: 'Yes, by design. Apify actors are third-party scripts with widely varying scraping behaviour, and most require your session cookie. Coldcast controls the entire extraction path and paces requests to mimic normal human usage, which is what keeps accounts off LinkedIn’s restriction radar. No tool can guarantee zero risk, but purpose-built pacing is materially safer than uncontrolled community scripts.' },
      { q: 'How much does Apify actually cost for lead generation?', a: 'More than the sticker price. A realistic Apify lead-gen stack is a paid plan ($29–$199/mo), plus an actor rental (the leading Sales Navigator actor is about $39/mo plus usage), plus compute units and proxy bandwidth. Costs scale unpredictably with volume. Coldcast keeps scraping free and charges per verified email, so cost per lead is known before you start.' },
      { q: 'Can Coldcast scrape sources other than LinkedIn?', a: 'Yes. Coldcast also exports leads from Apollo and ZoomInfo, and enriches any list you upload with waterfall enrichment, domain data and email verification.' },
      { q: 'Do I need my LinkedIn session cookie to use Coldcast?', a: 'No — Coldcast runs your own authenticated LinkedIn session in a secure cloud browser and never asks for your password or cookie, so you never hand your credentials to a third-party script you can’t audit, which is the riskiest pattern with marketplace actors.' },
      { q: 'Is scraping Sales Navigator against LinkedIn’s terms?', a: 'LinkedIn’s user agreement prohibits automated data collection, which is true for Apify actors and every scraper alike. The practical risk is account restriction, which is why extraction behaviour matters so much. See our guide on how to scrape Sales Navigator without getting banned for the full picture.' },
    ],
  },
  {
    slug: 'phantombuster-alternative',
    tag: 'Compare',
    title: 'The PhantomBuster Alternative That Won’t Get Your LinkedIn Account Banned',
    metaTitle: 'PhantomBuster Alternative: Safer LinkedIn Scraping 2026',
    metaDescription:
      'Looking for a PhantomBuster alternative that won’t risk your LinkedIn account? Coldcast scrapes Sales Navigator at human pace — your real session, no stored passwords, hard limits.',
    keywords:
      'phantombuster alternative, phantombuster vs coldcast, phantombuster review, cloud scraper linkedin ban, account-safe linkedin scraper, sales navigator scraper, pay-as-you-go enrichment',
    datePublished: '2026-08-06',
    dateModified: '2026-08-09',
    readMinutes: 8,
    image: {
      src: '/images/blog/phantombuster-alternative-hero.png',
      width: 1200,
      height: 630,
      alt: 'Coldcast vs PhantomBuster comparison — account-safe LinkedIn scraping on your real session at human pace vs machine-speed cookie automation',
      caption: 'PhantomBuster replays your cookie at machine speed; Coldcast runs your own logged-in session at human pace with hard limits.',
    },
    excerpt:
      'PhantomBuster automates dozens of workflows — but LinkedIn lead gen has two catches: it replays your session cookie at machine speed with no real limits, and it meters campaigns in execution hours that run out mid-month. Here’s the human-paced, hard-capped, pay-as-you-go alternative.',
    sections: [
      {
        h2: 'Why people look for a PhantomBuster alternative',
        blocks: [
          'PhantomBuster is a capable general-purpose automation platform, and its “Phantoms” automate dozens of workflows across LinkedIn, Sales Navigator and other sites. The reasons users switch for lead gen tend to fall into four buckets.',
          '**1. Cookie-based automation puts your account at risk.** PhantomBuster works by taking your LinkedIn session cookie and replaying it — signing in as you from stored credentials rather than your own live session. Worse, it fires actions at machine-like speed in bursts, with no real ceiling — the exact pattern its detection systems are tuned to spot. PhantomBuster publishes rate-limit guidance to reduce the risk, but the architecture itself (your stored cookie, machine-speed replay) is the root of the problem.',
          '**2. Execution hours run out mid-campaign.** PhantomBuster’s plans are metered in execution hours: 20 hours/month on Starter ($69/mo), 80 on Pro ($159/mo), 300 on Team ($439/mo). Twenty hours sounds like a lot until you realise it’s roughly 40 minutes of automation a day — and when the hours run out, your Phantoms stop until next month or you upgrade. Unused hours and email credits don’t roll over.',
          '**3. No phone data, and email volume is credit-capped.** PhantomBuster does find and verify professional emails — its Email Discovery add-on runs a provider waterfall on included email credits — but it has no native phone / direct-dial finder; it only captures numbers already public on a profile. If cold calling is part of your motion you still need a separate enrichment tool, and your email volume is gated by a credit pool that resets monthly.',
          '**4. Setup and maintenance overhead.** Phantoms need configuring, session cookies expire and need refreshing, and rate limits need tuning. It’s a power tool that demands power-user attention. If you’re automating non-LinkedIn workflows like Google Maps or Instagram, PhantomBuster is still a solid choice — but if your core job is extracting and enriching leads from Sales Navigator, a purpose-built tool is safer and cheaper.',
        ],
      },
      {
        h2: 'Coldcast vs PhantomBuster at a glance',
        blocks: [
          {
            image: {
              src: '/images/blog/phantombuster-vs-coldcast-architecture.png',
              width: 1200,
              height: 630,
              alt: 'Diagram comparing PhantomBuster’s machine-speed cookie-replay automation with Coldcast’s human-paced, hard-capped scraping running your own authenticated session in a secure cloud browser',
              caption: 'The root difference: PhantomBuster replays your stored cookie at machine speed; Coldcast runs your own logged-in session at human pace with hard limits.',
            },
          },
          {
            table: [
              ['', 'Coldcast', 'PhantomBuster'],
              ['How it runs', 'Your own logged-in session, human-paced in a secure cloud browser', 'Replays your stored session cookie at machine speed'],
              ['LinkedIn detection risk', 'Low — human-pace scrolling, click-to-next pagination, hard limits', 'Elevated — machine-speed bursts, automated patterns'],
              ['Scraping cost', 'Free — pay only for enrichment', 'Metered execution hours ($69–$439/mo)'],
              ['Email enrichment', 'Waterfall across Apollo, Lusha, SalesQL, ContactOut (70–85% match)', 'Built-in email finder + verification, credit-metered (~76% valid)'],
              ['Email verification', 'Built in — pay $0.003 per verified email', 'Built in — drawn from monthly email credits'],
              ['Phone numbers', 'Yes, via waterfall enrichment', 'No native direct-dial finder'],
              ['Platforms scraped', 'Sales Navigator, Apollo, ZoomInfo', 'LinkedIn + many non-LinkedIn platforms'],
              ['Pricing model', 'Pay-as-you-go, no subscription', 'Monthly subscription, credits expire'],
              ['Best for', 'Sales Navigator lead extraction + enrichment', 'Broad multi-platform automation'],
            ],
          },
          '*PhantomBuster pricing verified August 2026 — always check their site for current plans.*',
        ],
      },
      {
        h2: 'The core difference: your real session at human pace',
        blocks: [
          'This is the part that matters most for your LinkedIn account.',
          '**PhantomBuster replays a stored cookie.** You paste your LinkedIn session cookie into their platform, and it signs in as you from stored credentials, firing actions on a schedule at machine speed. LinkedIn sees bursts of automated activity no human could produce. Even with conservative rate-limit guidance, you’re betting your account on LinkedIn not connecting those dots.',
          '**Coldcast runs your own real session.** The [Sales Navigator scraper](/products/sales-navigator-scraper) drives your own logged-in LinkedIn session inside a secure, isolated cloud browser — it’s still your authenticated session, so to LinkedIn the activity looks like a real person browsing at normal speed. It scrolls through search results the way a human does and clicks through pages one at a time, under conservative hard limits, instead of firing hundreds of API-style requests in bursts. There’s no password to store and no cookie replayed as you.',
          'That architectural difference is why Coldcast can credibly call itself the safest way to scrape Sales Navigator: from LinkedIn’s point of view, the activity is nearly indistinguishable from you browsing your own search results. For the full picture, see [how to scrape Sales Navigator without getting banned](/blog/scrape-sales-navigator-without-getting-banned).',
        ],
      },
      {
        h2: 'Pricing: execution hours vs pay-as-you-go',
        blocks: [
          'PhantomBuster’s subscription makes sense when you run many different automations continuously. It makes much less sense when your real goal is “turn this Sales Navigator search into a clean, verified CSV.”',
          'With Coldcast, **scraping is free**. You pay only for what actually has value: verified contact data. Verified emails cost $0.003 each; catch-all emails cost $0.0015. There’s no monthly minimum, no expiring credit pool, and no campaign that dies mid-month because a meter ran out.',
          'A concrete example: enriching 1,000 leads with verified emails costs about $3 with Coldcast’s pay-as-you-go pricing. On PhantomBuster, the same project draws down execution hours and email credits from a $69+ monthly subscription — and anything left unused when the cycle resets is gone, whether you sent 200 leads or 2,000.',
        ],
      },
      {
        h2: 'What you give up',
        blocks: [
          'An honest alternative page should say what PhantomBuster does better. PhantomBuster is a general-purpose automation platform: it can scrape Google Maps, auto-follow on social platforms and run multi-step workflows across tools. Coldcast doesn’t do any of that — it’s deliberately focused on B2B lead extraction and enrichment from Sales Navigator, [Apollo](/products/apollo-scraper) and [ZoomInfo](/products/zoominfo-scraper), plus outreach via the [Coldcast AI agent](/coldcast-agent). If you need broad social-media automation, keep PhantomBuster for those workflows and use Coldcast for LinkedIn lead gen — that’s the combination many switchers land on.',
        ],
      },
      {
        h2: 'Migrating from PhantomBuster to Coldcast',
        blocks: [
          {
            list: [
              '**Connect your LinkedIn account** and sign in — no session cookie or password required.',
              '**Open your Sales Navigator search** with the filters you already use for your Phantom.',
              '**Start the scrape.** Coldcast collects leads at human pace while you keep working — up to 1,000 leads/day on the free trial.',
              '**Enrich with the waterfall.** Coldcast checks Apollo, Lusha, SalesQL and ContactOut in sequence and returns verified emails and phone numbers — typically a 70–85% match rate.',
              '**Export to CSV** or push straight into your outreach tool.',
            ],
          },
          'Your first 1,000 leads and 50 enrichment credits are free, so you can benchmark deliverability against your last PhantomBuster export before spending anything.',
        ],
      },
    ],
    faq: [
      { q: 'Is Coldcast really safer than PhantomBuster for LinkedIn?', a: 'Yes, by design. PhantomBuster replays your stored session cookie at machine speed — the exact pattern LinkedIn’s detection targets. Coldcast runs your own logged-in session at human speed with hard limits, so the activity looks like normal browsing. Coldcast reports 6+ months of daily use with zero account bans.' },
      { q: 'Does Coldcast have a monthly subscription like PhantomBuster?', a: 'No. Scraping is free and enrichment is pay-as-you-go: $0.003 per verified email, $0.0015 per catch-all. PhantomBuster requires a subscription from $69/month, and unused execution hours and credits expire monthly.' },
      { q: 'Can Coldcast automate things other than LinkedIn scraping?', a: 'Coldcast focuses on lead extraction from Sales Navigator, Apollo and ZoomInfo, plus waterfall enrichment, email verification and AI-powered outreach via Coldcast Agent. It does not automate non-LinkedIn platforms like Google Maps or Instagram — for those, PhantomBuster is still the right tool.' },
      { q: 'Do I need LinkedIn Sales Navigator to use Coldcast?', a: 'For LinkedIn scraping, yes — Coldcast works on top of your Sales Navigator subscription, which is also the account-safe way to extract at volume. If you don’t have Sales Navigator, you can still use Coldcast’s Apollo scraper, ZoomInfo scraper and enrichment tools.' },
      { q: 'Are the emails Coldcast finds verified?', a: 'Yes. Every email goes through verification before you’re charged, and you only pay for deliverable results — no monthly minimum. PhantomBuster also finds and verifies emails, but bills them against a monthly credit pool that resets, and it doesn’t surface direct-dial phone numbers.' },
    ],
  },
  {
    slug: 'coldcast-vs-scrupp',
    tag: 'Compare',
    title: 'Coldcast vs Scrupp: Which Sales Navigator Scraper Should You Pick in 2026?',
    metaTitle: 'Coldcast vs Scrupp (2026): Which Sales Nav Scraper Wins?',
    metaDescription:
      'Coldcast vs Scrupp compared: account safety, email find rates, export limits and real pricing. See which LinkedIn Sales Navigator scraper fits your team.',
    keywords:
      'coldcast vs scrupp, scrupp alternative, scrupp review, scrupp pricing, sales navigator scraper comparison, account-safe linkedin scraper, pay-as-you-go lead enrichment, waterfall enrichment',
    datePublished: '2026-07-31',
    dateModified: '2026-08-09',
    readMinutes: 8,
    image: {
      src: '/images/blog/coldcast-vs-scrupp-hero.png',
      width: 1200,
      height: 630,
      alt: 'Coldcast vs Scrupp comparison — LinkedIn Sales Navigator scraper head-to-head on safety, pricing and email find rates',
      caption: 'Coldcast vs Scrupp at a glance — the full breakdown is below.',
    },
    excerpt:
      'Coldcast and Scrupp are both account-safe Sales Navigator scrapers that run your own logged-in session at human pace and enrich leads with verified emails. The difference shows up at volume: export limits, how enrichment is priced, and what a 5,000-lead month actually costs.',
    sections: [
      {
        h2: 'The short answer',
        blocks: [
          '**Choose Coldcast if** you care most about account safety at volume, you want to pay only for the verified emails you actually get (no subscription), and you export more than a few thousand leads a month. Coldcast scrapes for free at up to 10,000 leads per hour and charges $0.003 per waterfall-verified email — there’s no monthly plan to outgrow.',
          '**Choose Scrupp if** you want a simple flat monthly subscription, your volume fits comfortably inside 1,000–5,000 leads a month, and you value its native push integrations to HubSpot, Salesforce, Pipedrive, Notion and Airtable.',
          'Both tools are capable, and both run your own authenticated LinkedIn session at human pace — so this isn’t about where the browser runs. It’s what happens once you scale: how much you can export, how enrichment is priced, and what a list past a monthly credit allowance costs.',
        ],
      },
      {
        h2: 'Coldcast vs Scrupp at a glance',
        blocks: [
          {
            table: [
              ['', 'Coldcast', 'Scrupp'],
              ['How it runs', 'Your own logged-in session, human-paced with hard limits', 'Your own logged-in LinkedIn session'],
              ['Scraping limits', 'Up to 10,000 leads/hour, ~20,000/day', 'Up to 2,500 leads per Sales Navigator search'],
              ['Email enrichment', 'Waterfall across Lusha, SalesQL, ContactOut & more', 'Multi-provider waterfall, SMTP-verified at export'],
              ['Email find rate', '70–85% email/phone match', '~65% verified email find rate (US SaaS)'],
              ['Pricing model', 'Pay-as-you-go: scraping free, $0.003/verified email', 'Subscription: $29/mo (1,000), $99/mo (5,000)'],
              ['Free tier', '1,000 leads/day trial + 50 waterfall credits, no card', '100 verified leads/month, no card'],
              ['Extras', 'Apollo & ZoomInfo scrapers, verifier, domain enrichment, AI agent', 'Native CRM pushes, REST API, phone numbers'],
            ],
          },
          'Scrupp details verified against scrupp.com in August 2026. If anything has changed, tell us and we’ll correct it.',
        ],
      },
      {
        h2: 'How each tool approaches account safety',
        blocks: [
          'This is the deciding factor for most buyers, because a banned Sales Navigator account costs far more than any scraper subscription.',
          '**Coldcast: your real session, human pace, hard limits.** Coldcast drives your own logged-in LinkedIn session inside a secure, isolated cloud browser — it’s still your authenticated session, never a stored password or replayed cookie. Scraping happens at human pace with conservative hard limits, and we report six-plus months of daily internal use with zero account bans. Machine-speed bots get flagged because LinkedIn sees bursts of automated activity no human could produce; Coldcast’s pacing never creates that signal in the first place. That’s the whole thesis behind [Coldcast’s Sales Navigator scraper](/products/sales-navigator-scraper), and it’s why safety is the first line on the homepage rather than a footnote.',
          '**Scrupp: also account-safe, with rate limits.** To its credit, Scrupp takes a similar position: no stored passwords, operating inside LinkedIn’s rate limits on your own logged-in session. If you’re comparing either tool against machine-speed, credential-storing automations like PhantomBuster or Apify actors, both Coldcast and Scrupp are the safer category.',
          'The practical difference is throughput within that safe envelope. Scrupp caps exports at 2,500 leads per search. Coldcast sustains up to 10,000 leads per hour and around 20,000 per day, using pacing tuned to stay under LinkedIn’s detection thresholds — a meaningful gap if you’re building lists for a whole SDR team rather than one rep.',
        ],
      },
      {
        h2: 'Email enrichment and data quality',
        blocks: [
          'Getting the lead out of Sales Navigator is half the job; the other half is a verified email that won’t bounce.',
          'Scrupp reports a ~65% average verified email find rate on US SaaS prospects and an under-5% bounce rate, using a multi-provider waterfall with real-time SMTP verification during export. Those are respectable, honest numbers.',
          'Coldcast’s [waterfall enrichment](/products/waterfall-enricher) cascades across multiple premium providers — Lusha, SalesQL, ContactOut and others — and typically lands a 70–85% email/phone match rate. Because the waterfall queries providers in sequence until one returns a verified hit, coverage is higher than any single source, and you’re only charged when a verified email actually comes back. Every address also passes through [email verification](/products/email-verify) before it reaches your CSV, and catch-all domains can be verified separately at $0.0015 per email.',
          'If phone numbers matter to your outbound motion, both tools return them where available; Coldcast’s multi-provider cascade generally surfaces more mobile numbers on senior titles.',
        ],
      },
      {
        h2: 'Pricing: subscription vs pay-as-you-go',
        blocks: [
          {
            image: {
              src: '/images/blog/coldcast-vs-scrupp-pricing-model.png',
              width: 1200,
              height: 630,
              alt: 'Subscription credits vs pay-as-you-go pricing — Scrupp $99/mo flat for 5,000 lead credits versus Coldcast about $12 metered for 4,000 verified emails',
              caption: 'A 5,000-lead month: Scrupp’s flat $99 subscription vs Coldcast’s ~$12 pay-as-you-go — and nothing expires.',
            },
          },
          '**What Scrupp costs.** Scrupp’s free plan includes 100 verified leads per month. Paid plans run $29/month for 1,000 leads and $99/month for 5,000 leads, with enterprise tiers up to 100,000/month. One credit equals one exported lead with email/phone — roughly $0.020–$0.029 per lead. Simple and predictable, as long as you use your allowance.',
          '**What Coldcast costs.** Coldcast has no subscription at all. Scraping is free — you pay $0.003 per waterfall-verified email and $0.0015 per catch-all verification, only when enrichment succeeds. The free trial includes 1,000 leads per day plus 50 waterfall credits, no card required.',
          'Run the math on a 5,000-lead month: Scrupp’s Pro plan is $99. On Coldcast, 5,000 leads at an 80% email match costs about $12 (4,000 verified emails × $0.003). Even at ten times that volume, Coldcast stays under Scrupp’s Pro price. The gap comes from unbundling — you stop paying for the scraping and only pay for delivered, verified contact data.',
          '**Credits you lose vs credits you don’t buy.** The hidden cost of subscriptions is unused allowance — slow months where you export 800 leads on a 5,000-lead plan and watch 4,200 credits expire. Pay-as-you-go removes that failure mode entirely, which is why agencies and fractional SDR teams with lumpy volume tend to prefer it.',
        ],
      },
      {
        h2: 'Beyond Sales Navigator: platform scope',
        blocks: [
          'Scrupp is focused: Sales Navigator export, enrichment, and solid delivery integrations (HubSpot, Salesforce, Pipedrive, Clay, Notion, Airtable, Slack, plus a REST API and webhooks). If you live in one CRM, its native pushes are convenient.',
          'Coldcast bundles seven tools under the same pay-as-you-go account: the Sales Navigator scraper, an [Apollo scraper](/products/apollo-scraper), a [ZoomInfo scraper](/products/zoominfo-scraper), waterfall enrichment, email verification, [domain enrichment](/products/domain-enrichment), and the [Coldcast AI agent](/coldcast-agent) for automated personalized outreach. It also layers AI lead scoring onto every export and tracks buying-intent signals like job changes, hiring and funding. If your prospecting spans multiple data sources — not just LinkedIn — that consolidation replaces two or three separate subscriptions.',
        ],
      },
      {
        h2: 'Where Scrupp is a fair choice',
        blocks: [
          'Honesty cuts both ways in a comparison you publish yourself. Scrupp is a fair pick if you want one flat, predictable invoice; if your monthly volume sits reliably in the 1,000–5,000 range; or if you need its specific native integrations today. Its safety architecture is legitimate, and its published find-rate and bounce numbers are believable rather than inflated.',
          'Where it gives ground is volume ceilings (2,500 per search), the subscription model itself, and scope — it doesn’t scrape Apollo or ZoomInfo, and it doesn’t include an outreach agent.',
        ],
      },
      {
        h2: 'Getting started with Coldcast',
        blocks: [
          'Setup takes about five minutes: connect your LinkedIn account, open a Sales Navigator search, paste the URL, and export. Your first 1,000 leads per day and 50 waterfall credits are free with no card, so you can benchmark Coldcast’s find rate against Scrupp’s on the same search before spending anything. If you don’t have Sales Navigator yet, Coldcast’s [Sales Navigator Advanced deal](/sales-nav-advanced) gets you a seat at $25/month — 75% off list. For another head-to-head, read our [Evaboot alternative guide](/blog/evaboot-alternative).',
        ],
      },
    ],
    faq: [
      { q: 'Is Coldcast safer than Scrupp for my LinkedIn account?', a: 'Both run your own logged-in LinkedIn session rather than replaying a stored cookie, which puts them in the safer category of scrapers. Coldcast additionally paces every action at human speed with hard limits, and reports zero account bans across 6+ months of daily internal use — while sustaining far higher daily export volumes than Scrupp’s per-search cap.' },
      { q: 'Which is cheaper, Coldcast or Scrupp?', a: 'For most volumes, Coldcast. Scrupp charges $29/month for 1,000 leads or $99/month for 5,000. Coldcast scrapes for free and charges $0.003 per verified email — about $12 for a 5,000-lead month at an 80% match rate. Scrupp’s flat subscription can be simpler to budget if your volume never varies.' },
      { q: 'Can both tools export leads with verified emails to CSV?', a: 'Yes. Scrupp SMTP-verifies emails during export and reports a ~65% find rate. Coldcast runs a multi-provider waterfall (Lusha, SalesQL, ContactOut and more) with a 70–85% match rate, then verifies every address before it lands in your CSV or XLSX.' },
      { q: 'Does Coldcast have a free plan like Scrupp?', a: 'Yes. Scrupp’s free plan is 100 verified leads per month. Coldcast’s free trial is larger: 1,000 leads per day plus 50 waterfall enrichment credits and 50 catch-all credits, with no credit card required.' },
      { q: 'Can I migrate from Scrupp to Coldcast?', a: 'Yes — there’s nothing to migrate. Both tools read your existing Sales Navigator searches, so you can install the Coldcast extension, re-run any saved search, and compare output side by side. Because Coldcast has no subscription, testing it costs nothing beyond the free credits.' },
    ],
  },
  {
    slug: 'how-to-use-linkedin-sales-navigator',
    tag: 'How-to',
    title: 'How to Use LinkedIn Sales Navigator for Lead Generation (2026 Guide)',
    metaTitle: 'How to Use LinkedIn Sales Navigator (2026) | Coldcast',
    metaDescription:
      'Master LinkedIn Sales Navigator in 2026: plans compared, advanced filters, Boolean search, buyer intent, saved searches and how to export your results safely.',
    keywords:
      'how to use linkedin sales navigator, sales navigator tutorial, sales navigator filters, boolean search sales navigator, sales navigator core vs advanced, sales navigator prospecting',
    datePublished: '2026-07-31',
    dateModified: '2026-07-31',
    readMinutes: 12,
    image: {
      src: '/images/blog/how-to-use-linkedin-sales-navigator-guide.png',
      width: 1200,
      height: 630,
      alt: 'How to use LinkedIn Sales Navigator for lead generation — Coldcast master guide covering filters, Boolean search, buyer intent and safe exporting',
    },
    excerpt:
      'Sales Navigator is the best B2B search engine on earth — and most reps use a tenth of it. Plans compared, the filters that actually work, Boolean search, buyer intent, and how to get your results out safely.',
    sections: [
      {
        h2: 'What LinkedIn Sales Navigator actually does',
        blocks: [
          'LinkedIn Sales Navigator is a paid layer on top of LinkedIn that turns roughly a billion member profiles into a searchable B2B database. Where free LinkedIn gives you a handful of filters and cuts off your results after a few pages, Sales Navigator gives you 45+ lead filters and 15+ account filters, unlimited search within its cap, lead lists, alerts on job changes and posts, InMail credits, and buyer-intent signals.',
          'That makes it the single best top-of-funnel source for outbound: fresher than any static database (people update their own profiles), richer in targeting (headcount, tenure, seniority, geography, posted content), and deep enough to build a complete ideal-customer list in an afternoon. What it deliberately does not give you: emails, phone numbers, or an export button — we cover how to solve that at the end of this guide.',
        ],
      },
      {
        h2: 'Sales Navigator plans in 2026: Core vs Advanced vs Advanced Plus',
        blocks: [
          {
            table: [
              ['', 'Core', 'Advanced', 'Advanced Plus'],
              ['Advanced lead & account search', 'Yes', 'Yes', 'Yes'],
              ['Lead lists, alerts, saved searches', 'Yes', 'Yes', 'Yes'],
              ['InMail credits / month', '50', '50', '50'],
              ['Buyer intent signals', 'Basic', 'Full', 'Full'],
              ['Smart Links (tracked content)', 'No', 'Yes', 'Yes'],
              ['TeamLink (warm-intro paths)', 'No', 'Yes', 'Extended'],
              ['CSV upload (match your accounts)', 'No', 'Yes', 'Yes'],
              ['CRM sync', 'No', 'No', 'Yes'],
            ],
          },
          'For most SDRs and founders, **Core is enough to prospect** — the search engine is identical. Advanced adds team features and full buyer intent; Advanced Plus adds CRM sync at enterprise pricing. One tip most people miss: through Coldcast you can get [Sales Navigator Advanced at $25/month — 75% off](/sales-nav-advanced), which makes the Advanced tier cheaper than what most people pay for Core.',
        ],
      },
      {
        h2: 'Set up for prospecting before you search',
        blocks: [
          'Ten minutes of setup saves hours of cleanup. Define your ideal customer profile first — the company traits that predict a deal (industry, headcount, geography, growth stage), then the buyer persona inside that company (title cluster, seniority, function). Write them down as filter values, not vibes: "B2B SaaS, 11–200 employees, US/UK, VP Sales or Head of Growth" is a search; "startups that need leads" is not.',
          'Then set your Sales Navigator preferences (Settings → Sales preferences) to match — region, industry, headcount, function. LinkedIn uses these to pre-rank suggestions and alerts, which quietly improves everything the tool recommends to you.',
        ],
      },
      {
        h2: 'The 13 techniques that do the heavy lifting',
        blocks: [
          '**1. Advanced filters, layered.** The power is in combining: seniority + function + headcount + geography narrows a billion profiles to a few thousand best-fits. Start broad, add one filter at a time, and watch the result count — a good outbound search usually lands between 500 and 2,500 results (more on why 2,500 matters below).',
          '**2. Boolean search in the keyword and title fields.** Quotes for exact phrases, AND / OR / NOT for logic, parentheses for grouping: `("VP Sales" OR "Head of Sales" OR "Sales Director") NOT (assistant OR intern)`. Put title logic in the *Current job title* filter, not the general keyword box — the keyword box searches the entire profile and drags in false positives from skills and old roles.',
          '**3. Saved searches = automated lead gen.** Save any search and Sales Navigator emails you new profiles matching it every week. This is the closest thing to free, automated top-of-funnel that exists: set five saved searches for your core segments and you have a standing stream of net-new, in-ICP leads.',
          '**4. Buyer intent signals.** Sales Navigator scores accounts by how much their employees interact with your company (profile views, ad engagement, InMail acceptance). Sort account searches by intent and start outreach where interest already exists.',
          '**5. "View similar" to expand winners.** Found a perfect-fit lead? "View similar" returns up to 100 lookalike profiles. Do this for each closed-won champion and you effectively clone your best customers.',
          '**6. Lead lists + alerts.** Save leads to lists and Sales Navigator alerts you on job changes, posts and company news. A lead posting about a problem you solve is the single best cold-outreach trigger there is — reference it and reply rates multiply.',
          '**7. Exclude noise.** Save your customers and competitors to account lists, then use the "exclude list" workflow (Blacklist) in searches so reps never prospect existing customers or a competitor\'s employees.',
          '**8. Hunt Open Profiles.** Members with Open Profile can be InMailed for free without burning credits. Filter and prioritize them when you have no email — free InMails at scale is an underrated channel.',
          '**9. Filter by LinkedIn Groups.** Group membership is a self-declared interest signal: someone in three RevOps communities cares about RevOps. Search within relevant groups to find people pre-qualified by their own curiosity — and mention the shared group in your opener.',
          '**10. Track job-change champions.** Filter your saved customer contacts by "changed jobs in the past 90 days." A happy user who just landed at a new company is the warmest deal that exists: they already know the product, and they need a win in their first quarter. This one filter quietly produces the highest close-rate list in outbound.',
          '**11. TeamLink for warm paths (Advanced).** TeamLink shows which prospects your teammates are connected to. A warm intro converts several times better than any cold channel — check for a path before you write a cold line.',
          '**12. Smart Links as engagement bait (Advanced).** Package a case study or one-pager as a Smart Link and you see exactly who opened it, when, and for how long. Every open is a timing signal worth a same-day follow-up.',
          '**13. Upload your own account CSV (Advanced).** Have a target-account list from your CRM or a conference? Upload the CSV and Sales Navigator matches it to company pages — then every lead filter runs against *your* accounts instead of LinkedIn\'s guesses.',
        ],
      },
      {
        h2: 'Boolean patterns worth stealing',
        blocks: [
          'Paste these shapes into the *Current job title* filter and adapt the words — the structure is what matters:',
          {
            table: [
              ['Goal', 'Pattern'],
              ['Catch every title variant', '"VP Sales" OR "VP of Sales" OR "Vice President Sales" OR "Sales VP"'],
              ['Senior only, no juniors', '(sales OR revenue) AND (VP OR head OR director) NOT (assistant OR associate OR intern)'],
              ['Founders who still sell', 'founder OR co-founder OR CEO NOT ("assistant to" OR advisor)'],
              ['Function, any seniority', 'marketing NOT (sales OR "business development")'],
              ['Two roles in one search', '("Head of Growth" OR "Growth Lead") OR ("Demand Gen" AND (manager OR head))'],
            ],
          },
          'Three rules keep Boolean honest: quotes around multi-word phrases, CAPITALS for operators, and parentheses around every OR-group before you mix in AND/NOT. And always test the negative space — run the search once with your NOT terms removed to see what you were about to exclude.',
        ],
      },
      {
        h2: 'A weekly operating cadence that compounds',
        blocks: [
          {
            list: [
              '**Monday — harvest.** Open your saved-search alerts: every new profile matching your ICP from last week, pre-filtered. Save the good ones to this month\'s lead list.',
              '**Tuesday — triggers.** Work the alert feed: job changes, funding news, prospect posts. Each one is a first line that writes itself.',
              '**Wednesday — export + enrich.** Push the week\'s list through [an account-safe export](/products/sales-navigator-scraper) so verified emails and phones land in your sequencer while the trigger is still fresh.',
              '**Thursday — multithread.** For accounts already in sequence, add the second and third contact (budget owner, end user) so deals stop dying with one champion.',
              '**Friday — prune.** Kill saved searches that returned junk, tighten filters that drifted, and log reply rates by search so next month\'s targeting is data, not vibes.',
            ],
          },
          'One hour a day on this loop beats eight hours of Sunday-night list building — because every list arrives fresh, triggered, and already enriched.',
        ],
      },
      {
        h2: 'Bonus: Sales Navigator for recruiting',
        blocks: [
          'The same machinery sources candidates: title + seniority + geography filters find them, "changed jobs" *excludes* people who just started somewhere (they won\'t move), Open Profiles take free InMails, and [candidate contact enrichment](/roles/recruiters) turns a shortlist into reachable emails and numbers. Recruiters at agencies often run Sales Navigator instead of LinkedIn Recruiter at a fraction of the seat price — Recruiter only becomes necessary for collaborative pipelines and its projects/ATS workflow.',
        ],
      },
      {
        h2: 'Filter pitfalls that quietly ruin lead quality',
        blocks: [
          {
            list: [
              '**The keyword filter is a shotgun.** It matches anywhere on the profile — a "marketing" keyword hits salespeople who list a marketing skill from 2016. Prefer title, function and seniority filters.',
              '**Industry follows the person, not the company.** People self-select industries loosely, and profiles with multiple positions can match on an old job. Cross-check the current company where it matters.',
              '**Seniority is inferred.** LinkedIn guesses seniority from titles, and "Director" at a 10-person company is not "Director" at a bank. Combine seniority with headcount to keep it honest.',
              '**Always sanity-check page 3.** Any search will look great on page 1. Quality on page 3+ tells you whether the whole list is exportable or needs tighter filters.',
            ],
          },
        ],
      },
      {
        h2: 'Account-based approach: start from companies',
        blocks: [
          'For ABM motions, invert the flow: search *accounts* first with company filters (headcount, growth, industry, tech signals), use Spotlights like "senior leadership changes in last 3 months" or "funded in past 12 months" as timing triggers, save the winners to an account list — then run a lead search filtered to that list to pull the 2–4 decision makers per account. Multithread: the champion, the budget owner, and the end user, each with an angle that fits their seat.',
        ],
      },
      {
        h2: 'Getting your results out (the part LinkedIn doesn\'t help with)',
        blocks: [
          'Sales Navigator has no export button and shows no emails — by design. That is where the workflow usually breaks: a great 2,000-lead search is worth nothing stuck in a browser tab. The account-safe way out is extraction that runs your own logged-in session at human pace with hard limits, like [Coldcast\'s Sales Navigator scraper](/products/sales-navigator-scraper) — paste your search URL, and every lead comes back cleaned, [waterfall-enriched](/products/waterfall-enricher) with verified emails and phone numbers, and [verified in real time](/products/email-verify) before it hits your CSV.',
          'Two companion guides finish the job: [how to export Sales Navigator leads to Excel/CSV](/blog/export-sales-navigator-leads-to-csv) step by step, and [how to get verified emails from Sales Navigator](/blog/get-emails-from-linkedin-sales-navigator). And before you export anything at volume, read [how to scrape Sales Navigator without getting banned](/blog/scrape-sales-navigator-without-getting-banned) — the safety rules matter more than any feature.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is LinkedIn Sales Navigator worth it in 2026?',
        a: 'For B2B outbound, yes — no static database matches its freshness or filter depth, because prospects maintain their own profiles. It pays for itself if you actually work the searches: layered filters, saved searches and lead alerts. If you only ever run one broad search a month, free LinkedIn plus a good data tool may be enough.',
      },
      {
        q: 'What is the difference between Sales Navigator Core and Advanced?',
        a: 'The search engine is identical. Advanced adds full buyer-intent signals, Smart Links content tracking, TeamLink warm-intro paths, and CSV account upload. Advanced Plus adds CRM sync. Most individual prospectors are fine on Core — and Coldcast users can get Advanced at $25/month, 75% off list price.',
      },
      {
        q: 'How many search results does Sales Navigator show?',
        a: 'A maximum of 2,500 results per search (100 pages of 25), regardless of how many profiles match. To cover a bigger audience, slice the search by geography, headcount or industry into segments that each return under 2,500, then work each segment.',
      },
      {
        q: 'Can I export leads from Sales Navigator to Excel?',
        a: 'Not natively — no plan has an export button. Teams use account-safe extraction tools; the safe approach runs your own logged-in session at human pace with hard limits, the way Coldcast does, and enriches each lead with verified emails and phone numbers on the way out.',
      },
      {
        q: 'Does Sales Navigator show email addresses?',
        a: 'Only rarely — an email appears on a profile\'s contact info only if that member added one and you are connected. For outbound lists you need an enrichment step after extraction; waterfall enrichment across multiple providers finds and verifies emails for the majority of exported leads.',
      },
    ],
  },
  {
    slug: 'get-emails-from-linkedin-sales-navigator',
    tag: 'How-to',
    title: 'How to Get Verified Emails from LinkedIn Sales Navigator (2026)',
    metaTitle: 'Get Verified Emails from Sales Navigator | Coldcast',
    metaDescription:
      'Sales Navigator hides emails. Here is how to get verified work emails for every lead: manual methods, how email finders work, waterfall enrichment and verification.',
    keywords:
      'get emails from sales navigator, linkedin email finder, sales navigator email export, find verified b2b emails, waterfall enrichment, catch-all email verification',
    datePublished: '2026-07-31',
    dateModified: '2026-07-31',
    readMinutes: 10,
    image: {
      src: '/images/blog/get-emails-from-sales-navigator-guide.png',
      width: 1200,
      height: 630,
      alt: 'How to get verified emails from LinkedIn Sales Navigator — Coldcast guide to email finders, waterfall enrichment and catch-all verification',
    },
    excerpt:
      'Sales Navigator gives you perfect targeting and zero email addresses. Here is the complete playbook: where emails hide on profiles, why manual hunting fails, how email finders actually work, and how waterfall enrichment gets verified addresses for most of your list.',
    sections: [
      {
        h2: 'Does Sales Navigator provide email addresses?',
        blocks: [
          'No — and it never will, because selling contact data would cannibalize LinkedIn\'s own products and violate the privacy expectations of its members. A profile shows an email only in one narrow case: the member typed one into their contact-info section *and* you are connected to them. In practice that surfaces mostly personal Gmail addresses for a small fraction of your first-degree network — useless for B2B outbound at any scale.',
          'So every Sales Navigator workflow needs an email step bolted on after targeting. There are exactly two ways to do it: hunt manually, or enrich automatically. Let\'s be honest about both.',
        ],
      },
      {
        h2: 'Where emails hide on a profile (and why manual hunting fails)',
        blocks: [
          'Manually, there are three places to look: the **Contact info** panel (connections only), the **About section** (some founders and sellers paste an email there — searching the profile for "@" finds it), and occasionally the **banner image**, where people embed contact details as pixels.',
          'Why this doesn\'t scale:',
          {
            list: [
              '**Hit rates are tiny** — roughly a third of first-degree connections expose any email, and low single digits for everyone else.',
              '**What you find is often personal** — Gmail and Outlook addresses convert worse and look unprofessional for B2B outreach.',
              '**It\'s stale** — people set contact info once and never update it; job changes make it wrong.',
              '**It\'s unverified** — a typed-in email tells you nothing about whether the mailbox still accepts mail; bounces poison your sender reputation.',
              '**It\'s hours of clicking** — 30 seconds per profile times 2,000 leads is a work week.',
            ],
          },
        ],
      },
      {
        h2: 'How email finders actually work',
        blocks: [
          'Email finding tools combine three techniques. **Database lookup**: providers maintain hundreds of millions of previously-verified work emails, keyed to people and companies. **Pattern matching**: most companies use one format — first.last@, f.last@, first@ — so from a name plus the company domain, a finder generates candidates and tests them. **Live verification**: candidates are checked against the mail server (MX and SMTP checks) to confirm the mailbox exists before you ever send.',
          'The critical thing to understand: **every provider has blind spots.** Each database skews toward certain regions, industries and seniority levels. A finder that is excellent on US tech VPs may be poor on German manufacturing managers. That single fact explains the biggest lever in this whole topic — waterfall enrichment.',
        ],
      },
      {
        h2: 'The bulk answer: waterfall enrichment',
        blocks: [
          'Waterfall enrichment queries multiple providers **in sequence**: if provider 1 misses, ask provider 2, then 3, until a verified email comes back. Because providers\' blind spots don\'t overlap much, cascading them typically yields 30–50% more verified emails than any single source on the same list.',
          {
            image: {
              src: '/images/blog/waterfall-enrichment-diagram.png',
              width: 1200,
              height: 630,
              alt: 'Waterfall enrichment diagram — Coldcast queries multiple email data providers in sequence until a verified email and phone number come back',
              caption: 'Single-source finders stop at provider 1. Waterfall keeps going until a verified email comes back.',
            },
          },
          'This is how [Coldcast](/products/sales-navigator-scraper) handles emails end-to-end: paste a Sales Navigator search URL, extraction runs safely on your own logged-in session at human pace, and every lead cascades through [waterfall enrichment](/products/waterfall-enricher) — multiple independent providers plus pattern testing — with each hit [verified in real time](/products/email-verify) before it lands in your CSV. One pass, one file, no spreadsheet-merging between four tools. You pay only for valid hits, not for misses.',
        ],
      },
      {
        h2: 'Verification: safe, catch-all, and unfound',
        blocks: [
          {
            image: {
              src: '/images/blog/email-verification-buckets-safe-catchall-unfound.png',
              width: 1200,
              height: 630,
              alt: 'Email verification buckets for Sales Navigator exports — safe deliverable emails, risky catch-all domains, and unfound leads with fallback channels',
              caption: 'Every found email lands in one of three buckets — and each bucket gets a different playbook.',
            },
          },
          'Every found email lands in one of three buckets, and treating them the same is how sender reputations die:',
          {
            list: [
              '**Safe / deliverable** — the mail server confirmed this exact mailbox exists. Send freely.',
              '**Risky / catch-all** — the domain accepts mail for *any* address, so the specific mailbox can\'t be confirmed. Some are real, some are black holes. Send from a separate warmed inbox, in smaller volumes, or run them through a catch-all cleaning step first.',
              '**Unfound** — no provider returned an address. Don\'t guess: switch channels instead (see below).',
            ],
          },
          'Also remember decay: B2B emails go stale at roughly 2–3% per month as people change jobs. A list enriched in January is measurably worse by June — verify at send time, not just at export time.',
        ],
      },
      {
        h2: 'Choosing an email finder: the checklist that matters',
        blocks: [
          'Every tool\'s landing page claims the best hit rate. Ignore the claims and compare on structure:',
          {
            table: [
              ['What to compare', 'Why it decides your results'],
              ['Sources: single database vs waterfall', 'Waterfall across providers typically finds 30–50% more — no single database covers every market'],
              ['Verification: built-in vs bolt-on', 'Unverified "found" emails are just guesses; you want live MX/SMTP checks before delivery'],
              ['Catch-all handling', 'Tools that dump catch-alls into your "valid" column inflate hit rates and your bounce rate'],
              ['Pricing: per attempt vs per valid hit', 'Per-attempt pricing charges you for misses; pay-per-valid aligns cost with results'],
              ['Phone numbers in the same pass', 'A second tool for direct dials doubles cost and spreadsheet surgery'],
              ['How extraction authenticates', 'Tools that store your password or replay your cookie risk the LinkedIn account feeding the whole pipeline'],
            ],
          },
          'The honest test costs nothing: take the same 200-lead search, run it through two tools\' free tiers, and compare verified-email counts and bounce rates after a small send. Ten minutes of testing beats any comparison page — including ours.',
        ],
      },
      {
        h2: 'After the emails: deliverability decides everything',
        blocks: [
          'A verified list sent badly still lands in spam. The email step doesn\'t end at enrichment:',
          {
            list: [
              '**Authenticate your domain** — SPF, DKIM and DMARC records are table stakes; without them, mailbox providers distrust you before reading a word.',
              '**Warm up before volume** — new inboxes need 2–4 weeks of gradually increasing sends; cold-starting at 500/day torches the domain.',
              '**Send from a separate domain** — outbound runs on a cousin domain (getcoldcast.com style), never your main company domain, so experiments can\'t hurt the mothership.',
              '**Watch the 2% line** — keep bounce rates under ~2%; above it, providers start filtering everything. This is exactly why verified-at-export beats verified-never.',
              '**Segment catch-alls out** — send them from a secondary warmed inbox at lower volume, and promote them to the main sequence only after a reply or open proves the mailbox is real.',
            ],
          },
        ],
      },
      {
        h2: 'When there\'s no email: the fallback stack',
        blocks: [
          '**Open Profile InMails** — members with Open Profile can be InMailed free, without credits. **Your 50 monthly InMail credits** — spend them on high-value unfound leads; keep them under 400 characters and expect better response than cold email for senior titles. **Phone numbers** — Coldcast\'s waterfall also returns direct dials where available, so unfound-email leads can move to a calling sequence instead of dying in the CSV. **Connection requests** — slowest, but a small personalized batch to top-tier unfound leads still works.',
          'The complete workflow, start to finish, is covered in [how to export Sales Navigator leads to Excel/CSV](/blog/export-sales-navigator-leads-to-csv) — and if you\'re exporting at volume, read [the account-safety rules](/blog/scrape-sales-navigator-without-getting-banned) first.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can you get emails directly from LinkedIn Sales Navigator?',
        a: 'Not at scale. A profile shows an email only if the member added one to their contact info and you are connected — mostly personal addresses, at tiny hit rates. Real coverage comes from an enrichment step after extraction, using providers\' databases, pattern matching and live verification.',
      },
      {
        q: 'What percentage of Sales Navigator leads can get a verified email?',
        a: 'With a single email finder, commonly 40–60% depending on your market. With waterfall enrichment across multiple providers, coverage typically rises 30–50% above any single source — and every hit is verified before delivery, so the found emails are actually sendable.',
      },
      {
        q: 'What is a catch-all email and should I send to it?',
        a: 'A catch-all domain accepts mail for any address, so verification can\'t confirm the specific mailbox. Treat them as a separate, riskier segment: clean them with a catch-all resolution step, or send from a separate warmed inbox at lower volume. Never mix them into your main sequences unfiltered.',
      },
      {
        q: 'Are LinkedIn email finder tools legal?',
        a: 'Finding and verifying business contact data is a standard, lawful B2B practice in most jurisdictions, but privacy rules like GDPR govern how you use it: relevant business-purpose targeting, a clear opt-out, and prompt deletion on request. Scraping does violate LinkedIn\'s terms of service, which is why account-safe architecture matters — see our safety guide.',
      },
      {
        q: 'How does Coldcast find emails from Sales Navigator?',
        a: 'Extraction runs your own logged-in session at human pace with hard limits; each exported lead then cascades through multiple independent email providers (waterfall enrichment) plus pattern testing, and every candidate is verified with live MX/SMTP checks before it lands in your file. Phone numbers are returned the same way where available.',
      },
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
      alt: 'Coldcast vs Evaboot comparison — Coldcast Evaboot alternative with account-safe human-paced scraping, waterfall enrichment, phone numbers and AI lead scoring',
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
          '**4. Safety is a spectrum, not a checkbox.** Every scraper claims to be safe — the mechanics matter. Coldcast runs your own logged-in session in a secure, isolated cloud browser, at human speed with hard limits. To LinkedIn, your activity looks like you — because it is you. That architecture is why Coldcast maintains a record of zero account bans, as we explain in [our account-safety guide](/blog/scrape-sales-navigator-without-getting-banned).',
        ],
      },
      {
        h2: 'Coldcast vs Evaboot at a glance',
        blocks: [
          {
            table: [
              ['', 'Coldcast', 'Evaboot'],
              ['How it runs', 'Your own logged-in session, human-paced with hard limits', 'Chrome extension, own infrastructure'],
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
          '**Account safety as the core design decision.** Coldcast was built backwards from one constraint: your LinkedIn account must survive. A banned account costs you your network, your Sales Navigator subscription, and often your sending domain\'s warm-up work — far more than any scraper subscription. Everything else is designed within that constraint: human-paced extraction on [your own logged-in session](/products/sales-navigator-scraper), conservative hard limits, no stored passwords.',
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
          '**Five-minute setup.** Connect your LinkedIn account (Coldcast never stores your password), paste your Sales Navigator search URL, and start the export. No proxies, no cookies to paste.',
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
              '**Connect your LinkedIn account** and sign in — your Sales Navigator subscription works as-is.',
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
        a: 'Both tools are safer than machine-speed, credential-storing bots. The difference is architectural: Coldcast drives your own logged-in session at human speed with hard limits, so there is no separate login, no stored password, and no generic automation fingerprint for LinkedIn to detect. Coldcast has recorded zero account bans.',
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
        a: 'No. Coldcast runs your own logged-in session in a secure cloud browser — no local software to babysit. Setup takes about five minutes and requires no proxies, no cookies to paste, and no technical configuration. Your LinkedIn password is never stored.',
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
      'Why LinkedIn restricts accounts that scrape Sales Navigator — and the 7 rules that keep yours safe: your real authenticated session, human pacing, hard daily limits and more.',
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
      caption: 'Coldcast runs your own logged-in session at human pace, so LinkedIn only ever sees you browsing.',
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
              '**Logins from outside your session** — automation that signs in as you from its own infrastructure, rather than driving your real logged-in session, surfaces as a login LinkedIn doesn’t recognize and flags instantly, often from a different country than your usual activity.',
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
          '**1. Use your own authenticated session.** The single biggest safety factor. When extraction drives the LinkedIn session you are already logged into — never a stored password or replayed cookie — LinkedIn sees your genuine authenticated activity, not a second impersonating login. This is how [Coldcast\'s Sales Navigator scraper](/products/sales-navigator-scraper) works: your real session, run in a secure cloud browser, and it is the reason no tool that asks for your password or cookie can match it for safety.',
          '**2. Stay at human pace.** Safe tools throttle requests to the rhythm of a person browsing — with random delays, pauses and realistic scroll behavior. If a tool brags about raw speed with no mention of pacing, that speed is being paid for with your account risk.',
          '**3. Respect daily limits.** Sales Navigator search results cap at 2,500 leads per search. Beyond per-search caps, keep daily profile-view volume in a range consistent with your account\'s history and warm newer accounts up gradually.',
          '**4. Never hand over your credentials.** Any tool that wants your LinkedIn password or your li_at session cookie is asking to open a second session from its own infrastructure. That is the highest-risk architecture that exists.',
          '**5. Insist on hard rate limits.** Safe extraction isn’t just slow on average — it enforces conservative hard caps on volume and rhythm, so activity never spikes into machine-speed bursts. A tool that lets you crank speed with no ceiling is handing you the risk; Coldcast’s pacing and hard limits are built in, not optional.',
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
          'Coldcast was designed from the first line of code around one principle: your account is irreplaceable, your leads are not. Extraction runs your own authenticated session at human pace with hard limits — no password sharing, no cookie replay, no machine-speed bursts, no second impersonating session. Enrichment happens downstream of LinkedIn entirely: emails and phone numbers come from [waterfall enrichment](/products/waterfall-enricher) across independent data providers and are [verified in real time](/products/email-verify), so nothing about finding contact data touches your LinkedIn account at all.',
          'That architecture is why Coldcast can sustain up to 20,000 exported leads a day without the risk profile of machine-speed, credential-storing scrapers: the heavy lifting happens outside LinkedIn, and everything inside LinkedIn looks like you, browsing.',
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
        a: 'It depends on account age and history. Established accounts using a human-paced tool that drives your own authenticated session comfortably sustain thousands of leads per day — Coldcast supports up to 20,000/day — because list-page extraction is far lighter than profile visits. New accounts should ramp up gradually over a few weeks.',
      },
      {
        q: 'Can LinkedIn detect Chrome extensions?',
        a: 'LinkedIn can detect what a tool does, not what is installed. An extension that fires hundreds of requests a minute gets flagged by its behavior; an extension that reads pages at human pace inside your normal session leaves the same footprint as ordinary browsing.',
      },
      {
        q: 'Why is machine-speed cookie replay riskier than running your own session?',
        a: 'Machine-speed automation replays your stored cookie or password from its own infrastructure — a second parallel session, a new device fingerprint and bursts of activity no human could produce, all at once. That combination is exactly what LinkedIn\'s anomaly detection looks for. Driving your own authenticated session at human pace adds no second session and no generic automation fingerprint.',
      },
    ],
  },
  {
    slug: 'export-sales-navigator-leads-to-csv',
    tag: 'How-to',
    title: 'How to Export Leads from LinkedIn Sales Navigator to Excel or CSV (2026)',
    metaTitle: 'Export Sales Navigator Leads to Excel/CSV (2026) | Coldcast',
    metaDescription:
      'Sales Navigator has no export button. Compare the 4 ways to get your leads into Excel or CSV — manual, extensions, cookie-replay bots and Coldcast — step by step.',
    keywords:
      'export sales navigator leads, sales navigator to excel, sales navigator export csv, linkedin lead list export, sales navigator scraper, download sales navigator leads',
    datePublished: '2026-07-29',
    dateModified: '2026-07-31',
    readMinutes: 10,
    image: {
      src: '/images/blog/export-sales-navigator-leads-excel-csv-guide.png',
      width: 1200,
      height: 630,
      alt: 'How to export LinkedIn Sales Navigator leads to Excel and CSV — Coldcast step-by-step guide with enrichment and verified emails',
    },
    excerpt:
      'LinkedIn gives you world-class search filters and then no export button. Here are the four ways teams actually get Sales Navigator leads into a spreadsheet — and how to do it without risking your account.',
    sections: [
      {
        h2: 'Sales Navigator has no export button — by design',
        blocks: [
          'Sales Navigator is the best B2B search engine on the planet: 45+ filters over roughly a billion profiles. But LinkedIn deliberately ships no "download CSV" button, because your lead lists are the product it wants to keep inside its walls. CRM sync exists only on the Advanced Plus tier and only writes to connected CRMs — there is still no spreadsheet export.',
          'So every team that runs cold outreach from Sales Navigator ends up choosing one of four extraction methods. They differ enormously in speed, data quality and — most importantly — account risk. (If you\'re still building your search, start with [our full Sales Navigator guide](/blog/how-to-use-linkedin-sales-navigator) — a tight, in-ICP search is what makes any export worth having.)',
        ],
      },
      {
        h2: 'What data can you actually export?',
        blocks: [
          'From the profiles in a search or lead list, extraction captures the fields LinkedIn renders: full name, current title, company, company URL and domain, location, profile URL, headcount range, industry, and tenure. Company-level (account) searches add firmographics: headcount, industry, growth signals and the company page data.',
          'What is **never** on LinkedIn: reliable work emails and phone numbers. Those come from an enrichment step after extraction — Coldcast runs [waterfall enrichment](/products/waterfall-enricher) across multiple data providers during the export, then [verifies every email in real time](/products/email-verify), so contact data arrives in the same file instead of requiring a second and third tool. The full email playbook is in [how to get verified emails from Sales Navigator](/blog/get-emails-from-linkedin-sales-navigator).',
        ],
      },
      {
        h2: 'Know the limits before you export',
        blocks: [
          {
            list: [
              '**2,500 results per search.** Sales Navigator displays at most 100 pages of 25 results no matter how many profiles match. Slice bigger audiences by geography, headcount or industry into sub-2,500 segments and export each.',
              '**Daily pace matters more than any hard number.** Extraction speed should match an established account\'s normal behavior — Coldcast paces every action like a human session and supports up to 20,000 leads/day safely. New accounts should ramp up gradually.',
              '**25 lead lists of 1,000** is the cap on native lists — another reason exports beat trying to manage pipeline inside LinkedIn.',
            ],
          },
          {
            image: {
              src: '/images/blog/sales-navigator-2500-limit-search-slicing.png',
              width: 1200,
              height: 630,
              alt: 'How to beat the Sales Navigator 2,500 result limit — slice one oversized search into sub-2,500 segments by geography and headcount, export each segment',
              caption: 'One 9,400-result search shows only 2,500 profiles. Three sliced searches capture all of them.',
            },
          },
          'Slicing sounds tedious; it isn\'t. Pick one high-cardinality filter — headcount bands or regions work best — and duplicate the search once per band. Three to five segments cover almost any market, each lands under the cap, and the segment label itself becomes useful metadata in your CRM ("EU · 51-200" tells a rep the context before the first call).',
        ],
      },
      {
        h2: 'Exporting account lists (companies), not just leads',
        blocks: [
          'Lead exports get the attention, but account exports run ABM. A Sales Navigator *account* search — filtered by headcount, industry, growth or funding Spotlights — exports the company-level view: name, domain, headcount, industry, and the firmographics enrichment adds. Two plays make it valuable: **domain-first enrichment**, where the exported domains feed [domain enrichment](/products/domain-enrichment) to return technographics and verified decision-maker contacts per company; and **the two-step ABM export** — export accounts first, pick the best 100 by fit, then run a lead search filtered to those accounts and export the 2–4 buyers per company. You get a multithreaded contact map instead of a flat list.',
        ],
      },
      {
        h2: 'Excel cleanup recipes for exported lists',
        blocks: [
          'Coldcast exports arrive clean (no "LinkedIn Member" rows, normalized names), but every workflow has its own last mile. The four recipes that cover most of it:',
          {
            list: [
              '**Dedupe against your CRM:** paste your CRM\'s email column on a second sheet, then flag matches with =IF(COUNTIF(Sheet2!A:A, C2)>0, "IN CRM", "NEW") and filter to NEW before importing.',
              '**Split full names when a tool needs them separate:** =TEXTBEFORE(A2, " ") and =TEXTAFTER(A2, " ") (or Data → Text to Columns on older Excel).',
              '**Standardize company suffixes:** =TRIM(SUBSTITUTE(SUBSTITUTE(B2, " Inc.", ""), " Ltd", "")) keeps "Acme" and "Acme Inc." from becoming two accounts.',
              '**Build the suppression check into the sheet:** a SUPPRESS tab with customer + competitor domains, then =IF(COUNTIF(SUPPRESS!A:A, TEXTAFTER(C2,"@"))>0, "SKIP", "OK") — nobody cold-emails a customer again.',
            ],
          },
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
        h2: 'Method 3: Credential-replay automation',
        blocks: [
          'These platforms authenticate the risky way: with your stored session cookie or password, replayed from their own infrastructure at machine speed. That creates a second, parallel session that impersonates you and fires bursts of automated activity LinkedIn does not recognize as human — the highest-risk architecture there is, as we cover in detail in [our guide to scraping without getting banned](/blog/scrape-sales-navigator-without-getting-banned).',
        ],
      },
      {
        h2: 'Method 4: Account-safe session extraction (Coldcast)',
        blocks: [
          'The approach built for teams that need volume and need their accounts alive. [Coldcast](/products/sales-navigator-scraper) extracts search results using your own logged-in session at human pace with hard limits, then does everything heavy — enrichment, verification, scoring — outside LinkedIn:',
          {
            list: [
              '**Step 1.** Build your search in Sales Navigator with all your filters applied.',
              '**Step 2.** Paste the search URL into Coldcast (or use the extension) and start the export.',
              '**Step 3.** Extraction runs on your own logged-in session at human pace — no password, no cookie hand-over, no second session, up to 20,000 leads/day.',
              '**Step 4.** Each lead is cleaned (no "LinkedIn Member" rows, normalized names and companies) and enriched with [waterfall enrichment](/products/waterfall-enricher) across independent providers for emails and direct dials.',
              '**Step 5.** Every email is [verified in real time](/products/email-verify) — MX, SMTP and catch-all checks — before it reaches your file.',
              '**Step 6.** Download your CSV/Excel file, or push the list straight into your outreach stack.',
            ],
          },
          {
            image: {
              src: '/images/coldcast-sales-navigator-scraper-app.png',
              width: 1280,
              height: 800,
              alt: 'Coldcast app exporting enriched LinkedIn Sales Navigator leads to CSV and XLSX with verified business emails',
              caption: 'Capture prospects as you browse, enrich with verified emails, export to CSV/XLSX in one click.',
            },
          },
          'The result is not a raw scrape but a send-ready list: verified emails, phones, firmographics and AI fit-scoring, with bounces filtered out before you ever hit send.',
        ],
      },
      {
        h2: 'Getting the export into your CRM',
        blocks: [
          'A clean CSV drops into any CRM\'s import wizard — map name, title, company, email, phone and profile URL to your fields, and keep two habits: **dedupe on import** (match on email first, then profile URL) so re-exports never create duplicate records, and **tag the import batch** (source + date + search name) so you can measure which Sales Navigator searches actually produce pipeline. For sequencers like Instantly, Smartlead or Clay the same file works as-is — Coldcast\'s columns are named for direct mapping.',
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
        a: 'It depends entirely on the method. Extraction that runs your own logged-in session at human pace with hard limits is the safest architecture available; tools that replay your session cookie at machine speed are the riskiest. See our full guide on scraping Sales Navigator without getting banned.',
      },
    ],
  },
]

export const postPath = (slug) => '/blog/' + slug

export function getPost(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
