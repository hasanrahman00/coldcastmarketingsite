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
    slug: 'is-linkedin-scraping-legal',
    tag: 'Legal',
    title: 'Is LinkedIn Scraping Legal? What the Law Actually Says in 2026',
    metaTitle: 'Is LinkedIn Scraping Legal? 2026 Laws, Cases & Rules',
    metaDescription:
      'Is LinkedIn scraping legal in 2026? What hiQ v. LinkedIn and the Proxycurl lawsuit really decided, how GDPR applies, and how to export leads without risk.',
    keywords:
      'is linkedin scraping legal, linkedin scraping law, hiq v linkedin, van buren cfaa, proxycurl lawsuit, gdpr b2b prospecting, sales navigator scraping legal, cfaa scraping',
    datePublished: '2026-08-09',
    dateModified: '2026-08-09',
    readMinutes: 9,
    image: {
      src: '/images/blog/is-linkedin-scraping-legal-hero.png',
      width: 1200,
      height: 630,
      alt: 'Is LinkedIn scraping legal — timeline of hiQ v. LinkedIn and Proxycurl rulings on a dark legal-themed graphic',
      caption: 'The short answer isn’t yes or no — it’s three different layers of risk. Timeline below.',
    },
    excerpt:
      'In the US, scraping data you can lawfully see on LinkedIn isn’t a crime — hiQ v. LinkedIn settled that. But it breaches LinkedIn’s User Agreement, GDPR adds a lawful-basis layer, and the risk that actually touches a sales rep is account restriction. Here’s each layer, plainly.',
    sections: [
      {
        h2: 'The short answer',
        blocks: [
          'In the United States, scraping data you can lawfully see on LinkedIn is not a crime — courts settled that in *hiQ Labs v. LinkedIn*. But it almost certainly violates LinkedIn’s User Agreement, which is a contract, and LinkedIn has become far more aggressive about enforcing that contract in civil court. In Europe, the GDPR adds a second layer: even publicly visible profile data is personal data, and you need a lawful basis to process it.',
          'So the honest answer isn’t “yes” or “no.” LinkedIn scraping lives in three different layers of risk — criminal law, civil law, and platform enforcement — and they have very different consequences. This guide walks through each one, what the major cases actually decided, and how sales teams export Sales Navigator leads in practice without putting their accounts or their companies at risk.',
          '*This article is general information, not legal advice. If you’re building a business on scraped data, talk to a lawyer.*',
        ],
      },
      {
        h2: 'The three layers of LinkedIn scraping risk',
        blocks: [
          {
            image: {
              src: '/images/blog/linkedin-scraping-risk-layers.png',
              width: 1200,
              height: 630,
              alt: 'Diagram of the three layers of LinkedIn scraping risk: criminal law (CFAA), civil contract claims, and platform account enforcement',
              caption: 'Three separate questions people lump into one word, “legal.” Only Layer 3 touches the average sales rep.',
            },
          },
          'Most confusion about scraping legality comes from mixing up three separate questions.',
          '**Layer 1 — Criminal law.** Is scraping a federal crime under the Computer Fraud and Abuse Act (CFAA)? For data you can lawfully access, the answer after *hiQ* and *Van Buren* is no. This is the layer that made headlines, and it’s the one where scrapers won.',
          '**Layer 2 — Civil claims.** Can LinkedIn sue you for breach of contract, fraud, or unfair competition? Yes — and this is where LinkedIn now fights, and wins. The *hiQ* litigation ended with a court finding that hiQ breached LinkedIn’s User Agreement, and the 2025 Proxycurl case showed LinkedIn is willing to pursue scraping *companies* on contract and related claims.',
          '**Layer 3 — Platform enforcement.** Can LinkedIn restrict or ban your account? Absolutely, and this is the only layer that touches the average sales rep. LinkedIn’s detection targets abnormal behaviour: too many profile views per day, robotic viewing patterns, automated tools that click and load pages for you, and data-center IP addresses. For 99% of people asking “is LinkedIn scraping legal,” the practical question is really “will I lose my account” — and that depends entirely on *how* the scraping is done.',
        ],
      },
      {
        h2: 'hiQ v. LinkedIn: the case everyone cites (and mostly misreads)',
        blocks: [
          '*hiQ Labs v. LinkedIn* is the landmark US scraping case, and it’s usually summarised as “courts said scraping is legal.” The full story is more useful than the summary.',
          '**2019 — the Ninth Circuit sides with hiQ.** hiQ Labs scraped public LinkedIn profiles to build HR analytics products. When LinkedIn sent a cease-and-desist, hiQ sued — and in September 2019 the Ninth Circuit upheld a preliminary injunction in hiQ’s favour, reasoning that accessing *publicly available* data likely doesn’t violate the CFAA, the federal anti-hacking statute.',
          '**2021 — the Supreme Court and Van Buren.** LinkedIn appealed, and the Supreme Court vacated the ruling in light of *Van Buren v. United States*, which narrowed the CFAA to a “gates-up-or-down” test: the law targets access to systems you’re not entitled to enter, not misuse of data you can lawfully see.',
          '**2022 — reaffirmed, then hiQ loses anyway.** On remand, the Ninth Circuit reaffirmed in April 2022 that scraping public data likely doesn’t violate the CFAA. But in November 2022, the district court ruled that hiQ had *breached LinkedIn’s User Agreement* — a straightforward contract claim — and the parties settled. hiQ, by then, was effectively out of business.',
          'The real lesson of *hiQ* isn’t “scraping is legal.” It’s that the CFAA won’t make scraping criminal, but LinkedIn’s Terms of Service remain an enforceable contract — and litigation can outlast the company being sued.',
        ],
      },
      {
        h2: 'Proxycurl (2025): LinkedIn’s playbook today',
        blocks: [
          'In January 2025, LinkedIn sued Proxycurl — then one of the largest LinkedIn data API providers — along with its Singapore parent company Nubela and its founders personally, in the Northern District of California (Case No. 3:25-cv-00828). The complaint stacked six claims: breach of contract, fraud, CFAA violations, California unfair competition, trademark dilution, and misappropriation. Proxycurl settled and wound its LinkedIn data products down.',
          'Two things in that case matter for anyone in lead generation. First, LinkedIn’s User Agreement (Section 8.2) prohibits using data obtained “directly or through third parties (such as search tools or data aggregators or brokers)” — language aimed not just at scrapers but at *resellers of scraped data*. Second, LinkedIn targets companies that scrape and resell LinkedIn data at industrial scale as a product. That’s a fundamentally different activity from a sales team exporting its own Sales Navigator search results into a CSV for outreach.',
        ],
      },
      {
        h2: 'What about GDPR and privacy laws?',
        blocks: [
          'If your prospects are in the EU or UK, US case law is only half the picture. Under the GDPR, publicly visible profile data is still **personal data**, and “it was public” is not a lawful basis by itself. In practice, B2B prospecting teams rely on **legitimate interest** (Article 6(1)(f)) — workable for business contact data used for relevant B2B outreach, provided you can pass a balancing test and honour your obligations: tell people where their data came from when you contact them (Article 14), make opting out easy, delete on request, don’t hoard data you’re not using, and never process sensitive categories of data. California’s CCPA/CPRA adds similar transparency and deletion obligations for California residents.',
          'None of this makes scraping-based prospecting illegal in Europe — cold B2B outreach on legitimate-interest grounds is standard practice — but it does make *how you store, use, and honour objections to* the data a compliance question in its own right.',
        ],
      },
      {
        h2: 'What this means if you use Sales Navigator',
        blocks: [
          'Here’s the practical translation for a sales team paying for Sales Navigator. You are a licensed, logged-in user viewing data LinkedIn shows you as part of a product you pay for. Exporting the leads you can already see — name, title, company, profile URL — into a spreadsheet for your own prospecting is a Terms of Service issue, not a criminal one. Nobody has ever faced criminal charges for exporting their own lead lists, and LinkedIn’s civil lawsuits target data resellers, not end users. The realistic risk you carry is **account restriction** — and that risk is driven almost entirely by detection: how fast you scrape, from what IP, with what behaviour, in what pattern.',
          'That’s why account safety, not legal theory, is the thing to optimise. A few rules cover most of it: keep daily volumes inside human-plausible limits instead of hammering thousands of profiles an hour; avoid tools that automate at machine speed or inject scripted actions into LinkedIn pages, which LinkedIn can detect directly; work from your own logged-in session and residential IP rather than a data-center one or a replayed cookie; scrape only what’s visible in your own licensed seat; and enrich emails from sources *outside* LinkedIn (waterfall enrichment against public web and database sources) rather than pulling contact details LinkedIn doesn’t display. We’ve written a full guide on this: [how to scrape Sales Navigator without getting banned](/blog/scrape-sales-navigator-without-getting-banned).',
        ],
      },
      {
        h2: 'Where Coldcast stands',
        blocks: [
          'Coldcast was built around exactly this reading of the landscape: the law is manageable, the ToS risk sits with data resellers, and the account risk sits with you — so the product’s job is to make that account risk as close to zero as possible. [Coldcast’s Sales Navigator scraper](/products/sales-navigator-scraper) runs in your own browser and your own logged-in session, reading the results you’re already licensed to see at human pace — no data-center IPs, no session cookie handed to a cloud server, no automated blasting that trips LinkedIn’s thresholds. Emails come from [waterfall enrichment](/products/waterfall-enricher) across external data sources — not from LinkedIn itself — and pass through [built-in verification](/products/email-verify) so you’re not burning your sender domain on guesses.',
          'If you’re comparing approaches, our [Evaboot alternative breakdown](/blog/evaboot-alternative) covers how different export tools handle safety, and the [step-by-step CSV export guide](/blog/export-sales-navigator-leads-to-csv) shows the full workflow.',
        ],
      },
    ],
    faq: [
      { q: 'Is scraping LinkedIn a crime?', a: 'No — not in the US for data you can lawfully access. hiQ v. LinkedIn and the Supreme Court’s Van Buren decision established that the CFAA targets breaking into systems, not collecting data you’re allowed to see. Scraping remains a breach of LinkedIn’s User Agreement, which is a civil (contract) matter.' },
      { q: 'Can LinkedIn sue me for scraping?', a: 'LinkedIn’s lawsuits (hiQ, Proxycurl, and others) have targeted companies scraping at massive scale to resell LinkedIn data as a product. There’s no known case of LinkedIn suing an individual sales professional for exporting their own Sales Navigator leads. The realistic consequence for individuals is account restriction, not litigation.' },
      { q: 'Is scraping LinkedIn legal under GDPR?', a: 'GDPR doesn’t ban collecting publicly available B2B data, but it regulates it: you need a lawful basis (usually legitimate interest for B2B prospecting), you must tell contacts where their data came from, honour opt-outs and deletion requests, and avoid sensitive data. Compliance depends on how you use and manage the data, not just how you got it.' },
      { q: 'Will I get banned from LinkedIn for using a scraper?', a: 'It depends on the tool’s detection profile. Tools that automate actions or inject scripts into LinkedIn pages, or that scrape at inhuman speed or from data-center IPs, get accounts flagged. Tools that read your own licensed view at human-plausible volumes, from your own session and IP, carry far lower risk. See our account-safety guide for specifics.' },
      { q: 'Can I use scraped LinkedIn data for cold email?', a: 'Emailing scraped profile data is the wrong model — LinkedIn doesn’t show most emails anyway. The standard compliant workflow is: export the lead list (name, company, title), then find emails via enrichment providers that source from outside LinkedIn, verify them, and run outreach that complies with GDPR/PECR (EU/UK) or CAN-SPAM (US) rules for B2B contact.' },
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
          '**Account safety is the core feature, not an afterthought.** Instead of hammering LinkedIn through whatever proxy an actor happens to use, [Coldcast’s Sales Navigator scraper](/products/sales-navigator-scraper) runs in your own browser and mimics human browsing behaviour, respecting conservative rate limits so your account stays under LinkedIn’s radar. You don’t have to choose between volume and keeping the Sales Navigator seat you pay $100+/month for.',
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
      { q: 'Do I need my LinkedIn session cookie to use Coldcast?', a: 'No — Coldcast runs in your own logged-in browser session, so you never paste your cookie into a third-party script you can’t audit, which is the riskiest pattern with marketplace actors.' },
      { q: 'Is scraping Sales Navigator against LinkedIn’s terms?', a: 'LinkedIn’s user agreement prohibits automated data collection, which is true for Apify actors and every scraper alike. The practical risk is account restriction, which is why extraction behaviour matters so much. See our guide on how to scrape Sales Navigator without getting banned for the full picture.' },
    ],
  },
  {
    slug: 'phantombuster-alternative',
    tag: 'Compare',
    title: 'The PhantomBuster Alternative That Won’t Get Your LinkedIn Account Banned',
    metaTitle: 'PhantomBuster Alternative: Safer LinkedIn Scraping 2026',
    metaDescription:
      'Looking for a PhantomBuster alternative that won’t risk your LinkedIn account? Coldcast scrapes Sales Navigator at human pace — no cookies, no cloud bots.',
    keywords:
      'phantombuster alternative, phantombuster vs coldcast, phantombuster review, cloud scraper linkedin ban, account-safe linkedin scraper, sales navigator scraper, pay-as-you-go enrichment',
    datePublished: '2026-08-06',
    dateModified: '2026-08-09',
    readMinutes: 8,
    image: {
      src: '/images/blog/phantombuster-alternative-hero.png',
      width: 1200,
      height: 630,
      alt: 'Coldcast vs PhantomBuster comparison — browser-native account-safe LinkedIn scraping vs cloud-based cookie automation',
      caption: 'PhantomBuster runs your cookie in the cloud; Coldcast runs in your own browser at human pace.',
    },
    excerpt:
      'PhantomBuster automates dozens of workflows from the cloud — but LinkedIn lead gen has two catches: it replays your session cookie from datacenter IPs, and it meters campaigns in execution hours that run out mid-month. Here’s the browser-native, pay-as-you-go alternative.',
    sections: [
      {
        h2: 'Why people look for a PhantomBuster alternative',
        blocks: [
          'PhantomBuster is a capable general-purpose automation platform, and its “Phantoms” automate dozens of workflows across LinkedIn, Sales Navigator and other sites. The reasons users switch for lead gen tend to fall into four buckets.',
          '**1. Cookie-based cloud automation puts your account at risk.** PhantomBuster works by taking your LinkedIn session cookie and replaying it from its cloud servers. That means LinkedIn sees your account active from a datacenter IP that isn’t yours, often at machine-like speed — the exact pattern its detection systems are tuned to spot. PhantomBuster publishes rate-limit guidance to reduce the risk, but the architecture itself (your cookie, their servers) is the root of the problem.',
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
              alt: 'Diagram comparing PhantomBuster’s cloud cookie-session scraping on a datacenter IP with Coldcast’s in-browser human-pace scraping on your own IP',
              caption: 'The root difference: PhantomBuster runs your cookie on a cloud server; Coldcast runs in the browser LinkedIn already trusts.',
            },
          },
          {
            table: [
              ['', 'Coldcast', 'PhantomBuster'],
              ['How it runs', 'In your browser, your session, your IP', 'Cloud servers using your session cookie'],
              ['LinkedIn detection risk', 'Low — human-pace scrolling, click-to-next pagination', 'Elevated — datacenter IPs, automated patterns'],
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
        h2: 'The core difference: where the automation runs',
        blocks: [
          'This is the part that matters most for your LinkedIn account.',
          '**PhantomBuster is cloud-based.** You paste your LinkedIn session cookie into their platform, and their servers impersonate your browser. LinkedIn now sees your account logging in from an IP address you’ve never used, running actions on a schedule. Even with conservative rate limits, you’re betting your account on LinkedIn not connecting those dots.',
          '**Coldcast is browser-native.** The [Sales Navigator scraper](/products/sales-navigator-scraper) runs inside your own Chrome browser, in the Sales Navigator session you already have open — same IP, same device, same fingerprint LinkedIn already trusts. It scrolls through search results the way a human does and clicks through pages one at a time, instead of firing hundreds of API-style requests. There’s no cookie to hand over and no password to share.',
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
              '**Install the Coldcast extension** and sign in — no session cookie or password required.',
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
      { q: 'Is Coldcast really safer than PhantomBuster for LinkedIn?', a: 'Yes, by design. PhantomBuster runs your session cookie from cloud servers on datacenter IPs — the exact pattern LinkedIn’s detection targets. Coldcast runs inside your own browser on your own IP at human speed, so the activity looks like normal browsing. Coldcast reports 6+ months of daily use with zero account bans.' },
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
      'Coldcast and Scrupp are both Chrome-extension Sales Navigator scrapers that run in your own browser and enrich leads with verified emails. The difference shows up at volume: export limits, how enrichment is priced, and what a 5,000-lead month actually costs.',
    sections: [
      {
        h2: 'The short answer',
        blocks: [
          '**Choose Coldcast if** you care most about account safety at volume, you want to pay only for the verified emails you actually get (no subscription), and you export more than a few thousand leads a month. Coldcast scrapes for free at up to 10,000 leads per hour and charges $0.003 per waterfall-verified email — there’s no monthly plan to outgrow.',
          '**Choose Scrupp if** you want a simple flat monthly subscription, your volume fits comfortably inside 1,000–5,000 leads a month, and you value its native push integrations to HubSpot, Salesforce, Pipedrive, Notion and Airtable.',
          'Both tools are capable, and both run as Chrome extensions inside your own browser session — so this isn’t browser-vs-cloud. It’s what happens once you scale: how much you can export, how enrichment is priced, and what a list past a monthly credit allowance costs.',
        ],
      },
      {
        h2: 'Coldcast vs Scrupp at a glance',
        blocks: [
          {
            table: [
              ['', 'Coldcast', 'Scrupp'],
              ['How it runs', 'Chrome extension — your browser, session, IP & proxy', 'Chrome extension — your logged-in browser session'],
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
          '**Coldcast: your device, your session, your IP.** Coldcast runs entirely in your own browser, on your real device, with your own session and IP — never on a cloud server. Scraping happens at human pace, and we report six-plus months of daily internal use with zero account bans. Cloud bots get flagged because LinkedIn sees a login from an unfamiliar datacenter IP; Coldcast’s architecture never creates that signal in the first place. That’s the whole thesis behind [Coldcast’s Sales Navigator scraper](/products/sales-navigator-scraper), and it’s why safety is the first line on the homepage rather than a footnote.',
          '**Scrupp: also browser-based, with rate limits.** To its credit, Scrupp takes the same architectural position: no passwords, no headless scraping from remote servers, operating inside LinkedIn’s rate limits from your logged-in browser. If you’re comparing either tool against cloud-based scrapers like PhantomBuster automations or Apify actors, both Coldcast and Scrupp are the safer category.',
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
          'Setup takes about five minutes: install the Chrome extension, open a Sales Navigator search, paste the URL, and export. Your first 1,000 leads per day and 50 waterfall credits are free with no card, so you can benchmark Coldcast’s find rate against Scrupp’s on the same search before spending anything. If you don’t have Sales Navigator yet, Coldcast’s [Sales Navigator Advanced deal](/sales-nav-advanced) gets you a seat at $25/month — 75% off list. For another head-to-head, read our [Evaboot alternative guide](/blog/evaboot-alternative).',
        ],
      },
    ],
    faq: [
      { q: 'Is Coldcast safer than Scrupp for my LinkedIn account?', a: 'Both run in your own browser session rather than the cloud, which puts them in the safer category of scrapers. Coldcast additionally paces every action at human speed on your real device and IP, and reports zero account bans across 6+ months of daily internal use — while sustaining far higher daily export volumes than Scrupp’s per-search cap.' },
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
          'Sales Navigator has no export button and shows no emails — by design. That is where the workflow usually breaks: a great 2,000-lead search is worth nothing stuck in a browser tab. The account-safe way out is extraction that runs inside your own logged-in browser at human pace, like [Coldcast\'s Sales Navigator scraper](/products/sales-navigator-scraper) — paste your search URL, and every lead comes back cleaned, [waterfall-enriched](/products/waterfall-enricher) with verified emails and phone numbers, and [verified in real time](/products/email-verify) before it hits your CSV.',
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
        a: 'Not natively — no plan has an export button. Teams use browser-based extraction tools; the account-safe approach runs inside your own logged-in session at human pace, the way Coldcast does, and enriches each lead with verified emails and phone numbers on the way out.',
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
          'This is how [Coldcast](/products/sales-navigator-scraper) handles emails end-to-end: paste a Sales Navigator search URL, extraction runs safely in your own browser, and every lead cascades through [waterfall enrichment](/products/waterfall-enricher) — multiple independent providers plus pattern testing — with each hit [verified in real time](/products/email-verify) before it lands in your CSV. One pass, one file, no spreadsheet-merging between four tools. You pay only for valid hits, not for misses.',
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
              ['Where extraction runs', 'Cloud tools that replay your session risk the LinkedIn account feeding the whole pipeline'],
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
        a: 'Extraction runs in your own browser session at human pace; each exported lead then cascades through multiple independent email providers (waterfall enrichment) plus pattern testing, and every candidate is verified with live MX/SMTP checks before it lands in your file. Phone numbers are returned the same way where available.',
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
        a: 'It depends entirely on the method. Extraction that runs in your own browser session at human pace is the safest architecture available; cloud tools that replay your session cookie from datacenter IPs are the riskiest. See our full guide on scraping Sales Navigator without getting banned.',
      },
    ],
  },
]

export const postPath = (slug) => '/blog/' + slug

export function getPost(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
