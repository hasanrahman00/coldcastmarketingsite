// Per-page SEO copy + JSON-LD builders for the Coldcast marketing site.
// <Seo> (src/components/Seo.jsx) reads these and renders them into <head> via
// react-helmet-async, so every route gets a UNIQUE title, meta description,
// canonical URL, Open Graph / Twitter card, keywords, and structured data —
// instead of all ~18 routes sharing the single static tag set in index.html.

const SITE = 'https://www.coldcast.io'
const abs = (p) => SITE + (p === '/' ? '/' : '/' + String(p).replace(/^\/+|\/+$/g, ''))

// ── Static pages (keyed by pathname) ─────────────────────────────────────────
export const STATIC_SEO = {
  '/': {
    title: 'LinkedIn Sales Navigator Scraper — Account-Safe | Coldcast',
    description:
      'The account-safe LinkedIn Sales Navigator scraper — export leads with verified emails, phones and buying signals from your own logged-in session, human-paced in a secure cloud browser. No bans. Try it free.',
    keywords:
      'Sales Navigator scraper, LinkedIn Sales Navigator scraper, account-safe LinkedIn scraper, export Sales Navigator leads, triple-verified emails, buying intent signals, lead enrichment',
    ogTitle: "The world's safest Sales Navigator scraper",
    ogDescription:
      'Scrape Sales Navigator, Apollo and ZoomInfo at zero ban risk — your own session, human pace, hard limits. Pull triple-verified emails, phones and buying signals.',
  },
  '/products': {
    title: 'Lead Gen Tools: Scrape, Enrich, Verify | Coldcast',
    description:
      'Scrape, enrich, verify and reach — seven account-safe GTM tools in one platform. Chain them into a full pipeline or use just one. Start your free trial.',
    keywords:
      'lead generation platform, Sales Navigator enrichment tools, waterfall enrichment, email verifier, AI SDR, lead scraper suite, GTM tools',
    ogTitle: 'One platform. Seven GTM tools.',
    ogDescription:
      'Scrape, enrich, verify and reach in one account-safe platform. Use a single tool or chain all seven into a full GTM pipeline that runs your own logged-in session at human pace.',
    image: '/images/coldcast-sales-navigator-scraper-app.png',
  },
  '/roles': {
    title: 'Sales Navigator by Role — SDR to Agency | Coldcast',
    description:
      'From solo SDR to lead-gen agency — turn Sales Navigator searches into clean, enriched, ready-to-send lists, account-safe. See where you fit. Start free.',
    keywords:
      'Sales Navigator for SDRs, lead generation for agencies, GTM tools by role, sales prospecting tools, lead-gen agency software, account-safe scraping',
    ogTitle: 'Built for your role in GTM',
    ogDescription:
      "Whether you're a solo SDR or a lead-gen agency, Coldcast turns Sales Navigator searches into clean, enriched, ready-to-send lists — account-safe.",
    image: '/images/coldcast-b2b-lead-list-builder.png',
  },
  '/tools': {
    title: 'Free Email Verifier & GTM Tools | Coldcast',
    description:
      'Verify an email free, right in your browser — MX, SMTP and catch-all checks, no login or card. Plus email finder, domain enrichment and more. Try them now.',
    keywords:
      'free email verifier, email verification tool, MX SMTP catch-all check, email finder, domain enrichment, catch-all cleaner, free GTM tools',
    ogTitle: 'Free GTM tools — no login, no card',
    ogDescription:
      'Verify emails, find work emails and enrich domains free in your browser — no login, no card. Bulk, automated versions live inside the Coldcast app.',
  },
  '/blog': {
    title: 'Blog: Account-Safe Lead Gen Guides | Coldcast',
    description:
      'Guides on scraping Sales Navigator safely, exporting leads, waterfall enrichment and email deliverability — from the team behind the safest LinkedIn scraper.',
    keywords:
      'linkedin scraping guides, sales navigator export guide, account-safe scraping, waterfall enrichment guide, cold outreach data, lead generation blog',
    ogTitle: 'The Coldcast Blog — Account-Safe Lead Gen',
    ogDescription:
      'Practical guides on Sales Navigator scraping, lead exports, enrichment and deliverability — written by the team behind the safest LinkedIn scraper.',
  },
  '/sales-nav-advanced': {
    title: 'Sales Navigator Advanced — $25/month | Coldcast',
    description:
      'Get the full LinkedIn Sales Navigator Advanced plan — advanced search, 50 InMails, alerts, lists and TeamLink — for $25/month, 75% off. Activate with email.',
    keywords:
      'Sales Navigator Advanced, Sales Navigator Advanced discount, cheap Sales Navigator, LinkedIn Sales Navigator $25, 75% off Sales Navigator, Sales Nav Advanced deal',
    ogTitle: 'Sales Navigator Advanced for $25/month',
    ogDescription:
      'The full Sales Navigator Advanced plan — advanced search, 50 InMails, alerts, lists and TeamLink — for $25/month, 75% off. Activate with just your email.',
  },
}

// ── Product detail pages (keyed by slug) ─────────────────────────────────────
export const PRODUCT_SEO = {
  'coldcast-agent': {
    name: 'Coldcast Agent',
    title: 'AI Outbound Agent: Hands-Off Cold Email | Coldcast',
    description:
      "Coldcast's AI outbound agent extracts, ICP-scores, enriches and writes 3-step cold email sequences fully hands-off — zero manual research. Try it free.",
    keywords:
      'AI outbound agent, autonomous AI SDR, automated cold email sequences, ICP scoring, hands-off lead enrichment, AI sales agent',
    ogTitle: 'AI Outbound Agent That Runs Your Whole Play',
    ogDescription:
      'Upload websites and your offer. Coldcast Agent extracts, scores, enriches and writes 3-step sequences — fully hands-off, 24/7.',
  },
  'sales-navigator-scraper': {
    name: 'Sales Navigator Scraper',
    title: 'LinkedIn Sales Navigator Scraper: Export 20k/Day | Coldcast',
    description:
      'Export LinkedIn Sales Navigator leads to CSV/Excel from your own logged-in session, human-paced, zero bans tracked. 20,000 leads/day, 29 columns. Start free.',
    keywords:
      'linkedin sales navigator scraper, sales navigator scraper, export sales navigator leads, export sales navigator leads to excel, sales navigator to csv, sales navigator lead list export, export sales navigator account lists, sales navigator email finder, sales navigator scraper chrome extension, account-safe linkedin scraper, no cookie upload, 2,500 leads per search, pay per lead sales navigator export, sales navigator export tool, sync sales navigator leads to hubspot, export sales navigator leads to google sheets, saved lead list export, verified work emails, direct dials, waterfall enrichment, pay-as-you-go credits',
    ogTitle: 'Sales Navigator Scraper — Export 20,000 Leads/Day, Zero Bans Tracked',
    ogDescription:
      'Export any Sales Navigator search or saved lead list to CSV or Excel from your own logged-in session, human-paced in a secure cloud browser — 20,000 leads a day, 29 LinkedIn-native columns, no password, cookies or API key. 100 leads free.',
  },
  'linkedin-post-scraper': {
    name: 'LinkedIn Post Scraper',
    title: 'LinkedIn Post Scraper: Likers, Comments & Emails | Coldcast',
    description:
      'Scrape every liker, commenter and reposter on any LinkedIn post, with verified emails. Runs in your own session, no cookie upload, zero bans tracked. Try free.',
    keywords:
      'linkedin post scraper, scrape linkedin post comments, linkedin reactions scraper, linkedin comments scraper, export linkedin post likers, linkedin post likers scraper, linkedin post engagers, scrape linkedin post engagers, likers and commenters, who reacted to a linkedin post, linkedin post engagement scraper, scrape linkedin comments, scrape post reactions, intent signals, buyer intent, warm lead list, no cookie linkedin scraper, account-safe linkedin scraper, linkedin post scraper chrome extension, export linkedin post engagers to google sheets, sync linkedin post engagers to hubspot, verified work emails, waterfall enrichment, warm outbound leads',
    ogTitle: 'LinkedIn Post Scraper — Export Every Liker, Commenter and Reposter, With Verified Emails',
    ogDescription:
      'Paste a post URL and export every liker, commenter and reposter with verified emails — one-click Chrome extension, your own logged-in session, human-paced in a secure cloud browser with hard daily caps, no password or cookie upload, zero bans tracked in 6+ months. 10 credits per row, 100 leads free.',
  },
  'linkedin-search-scraper': {
    name: 'LinkedIn Search Scraper',
    title: 'LinkedIn Search Scraper: Export Results to CSV | Coldcast',
    description:
      'Scrape LinkedIn search results into a clean CSV or Excel with verified emails. People & Services search, no Sales Navigator, no cookie upload. Start free.',
    keywords:
      'linkedin search scraper, scrape linkedin search results, linkedin people search export, export linkedin search results to excel, export linkedin search results to csv, linkedin search export, linkedin search exporter, linkedin profile search scraper, extract linkedin profiles from search results, export linkedin search results with email, linkedin search export chrome extension, linkedin services search scraper, export linkedin search, no cookie linkedin scraper, account-safe linkedin scraper, no sales navigator, build lead lists from linkedin search, export linkedin search to google sheets, sync linkedin search to hubspot, pay per row linkedin export, waterfall enrichment, verified work emails',
    ogTitle: 'LinkedIn Search Scraper — Export Any People or Services Search to CSV, Zero Bans Tracked',
    ogDescription:
      'Paste a standard LinkedIn People or Services search URL and export every result to CSV or Excel with verified emails and direct dials — one-click Chrome extension, your own logged-in session, human-paced with hard daily caps, no password or cookie upload. 2 credits per row, 100 leads free.',
  },
  'sales-navigator-account-scraper': {
    name: 'Sales Nav Account Scraper',
    title: 'Sales Navigator Account Scraper: Export Companies | Coldcast',
    description:
      'Export every company from a Sales Navigator account search to CSV/Excel — firmographics + resolved domains. Your own session, human-paced, zero bans tracked.',
    keywords:
      'sales navigator account scraper, sales navigator company scraper, sales navigator companies scraper, export companies from sales navigator, export sales navigator accounts, export sales nav accounts, sales navigator account search export, sales navigator account list export, sales navigator company list export, export sales navigator to csv, export sales navigator to excel, sales navigator account search url, target account list, abm account list, account based marketing list, company search export, firmographics scraper, company domain export, no cookie sales navigator scraper, account-safe sales navigator scraper, evaboot alternative, phantombuster alternative, wiza account export alternative, apify sales navigator account scraper alternative',
    ogTitle: 'Sales Navigator Account Scraper — Export Companies to CSV, Zero Bans Tracked',
    ogDescription:
      'Export every company from any Sales Navigator account search with firmographics and a resolved domain per row — from your own logged-in session, human-paced with hard daily caps, no password, cookie upload or API key. 2 credits per account row, 100 leads free.',
  },
  'apollo-scraper': {
    name: 'Apollo Scraper',
    title: 'Apollo Scraper: Export Leads to CSV, No Credits | Coldcast',
    description:
      'Account-safe Apollo.io scraper: export any people or company search to CSV/Excel with no export credits, emails SMTP-verified live, 3x cheaper. 100 free leads.',
    keywords:
      'apollo scraper, apollo.io scraper, apollo scraper 2026, apollo email extractor, apollo lead scraper, apollo leads scraper, apollo exporter, export apollo leads, export apollo leads to csv, export apollo to excel, export apollo to csv, scrape apollo.io, how to scrape apollo.io, apollo export limit, apollo free plan export limit, bypass apollo export limit, apollo export credits, apollo record selection limit, apollo scraper chrome extension, free apollo scraper, free apollo account scraper, bulk apollo export, apollo company scraper, apollo people search export, apollo search url export, apify apollo alternative, account-safe apollo scraper, apollo lead generation, apollo b2b leads, apollo verified emails, real-time email verification, smtp email verification, waterfall enrichment, pay-as-you-go credits, sales navigator scraper',
    ogTitle: 'Apollo Scraper — Export Whole Apollo Lists to CSV, No Credits',
    ogDescription:
      'Paste an Apollo people or company search URL and export the whole list (up to 12,000 rows) — no export credits, SMTP-verified live, waterfall-enriched, pay-as-you-go credits that never expire.',
  },
  'zoominfo-scraper': {
    name: 'ZoomInfo Scraper',
    title: 'ZoomInfo Scraper: Export Data to CSV, No Credits | Coldcast',
    description:
      'Account-safe ZoomInfo scraper: export any people or company search to CSV/Excel without using export credits. Re-verified live, no contract. 100 free leads.',
    keywords:
      'zoominfo scraper, zoominfo scraper chrome extension, zoominfo scraper 2026, export zoominfo data, zoominfo export to csv, export zoominfo contacts to csv, export zoominfo to excel, export zoominfo search results, zoominfo bulk export, zoominfo export limit, zoominfo export credits, zoominfo bulk credits, zoominfo credits expire, scrape zoominfo, how to scrape zoominfo, zoominfo data extraction, zoominfo contact export, zoominfo company export, zoominfo people search export, zoominfo firmographics export, account-safe zoominfo scraper, no-code zoominfo scraper, cheaper zoominfo alternative, no annual contract, pay-as-you-go credits, real-time email verification, waterfall enrichment, direct dials, hubspot salesforce sync, apollo scraper, sales navigator scraper',
    ogTitle: 'ZoomInfo Scraper — Export Any People or Company Search to CSV, No Export Credits',
    ogDescription:
      'Open any ZoomInfo people or company search and export the whole thing to CSV or Excel — one-click Chrome extension, your own logged-in session, human-paced in a secure cloud browser with hard daily caps, no password, cookie upload or API key, zero bans tracked in 6+ months. 1 credit per row, credits never expire, 100 leads free.',
  },
  'waterfall-enricher': {
    name: 'Waterfall Enrichment',
    title: 'Waterfall Email Enrichment Tool: Pay Per Find | Coldcast',
    description:
      'Waterfall email enrichment that cascades up to 10 data providers, verifies every hit, and charges 1 credit only when an email is found. Try free, no card.',
    keywords:
      'waterfall enrichment, waterfall email enrichment tool, email enrichment tool, waterfall enrichment tool, email waterfall enrichment, waterfall enrichment 2026, email find rate, verified work emails, direct dials, direct dial enrichment, pay per find, pay only when email found, pay per valid email, catch-all cleaning, SMTP verification, syntax MX SMTP verification, bulk email enrichment, bulk lead enrichment, enrich CSV names and domains, single-source vs waterfall enrichment, Clay alternative, Clay waterfall alternative, Apollo waterfall enrichment alternative, better than Apollo or ZoomInfo alone, no subscription enrichment credits, credits never expire, HubSpot Salesforce enrichment sync, Instantly Smartlead Lemlist sync, B2B data coverage, protect sender reputation, GTM teams SDR agencies',
    ogTitle: 'Waterfall Email Enrichment Tool — Up to 10 Providers, Pay Only When Found',
    ogDescription:
      'Upload names and domains. Coldcast cascades up to 10 data providers for verified work emails and direct dials, verifies every hit (syntax, MX, SMTP mailbox, catch-all), and charges 1 credit only when an email is found — $30 per 10,000 credits, no subscription, credits never expire, 50 enrichment credits free with no card.',
  },
  'email-verify': {
    name: 'Email Verification',
    title: 'Bulk Email Verifier + Catch-All Verification | Coldcast',
    description:
      'Bulk email verifier with real-time syntax, MX, SMTP and catch-all checks. Pay-as-you-go, $10 per 10,000 emails, credits never expire. 50 free credits, no card.',
    keywords:
      'bulk email verifier, email verification tool, email verification, catch-all email verification, catch-all detection, accept-all email, email list cleaning, clean your email list, verify email list, verify email addresses in bulk, bulk email validator, email validation, email checker, bulk email checker, real-time MX SMTP check, SMTP mailbox check, reduce bounce rate, hard bounce, improve email deliverability, protect sender reputation, pay-as-you-go email verification, no subscription email verifier, credits never expire, cold email verification, cold email outreach, email validation vs verification, deduplicated email list, CSV XLSX email verification, sync to Instantly Smartlead Lemlist HubSpot Salesforce Google Sheets, free email verifier, bulk email verifier 2026',
    ogTitle: 'Bulk Email Verifier — Real-Time MX + SMTP, Catch-All Verification, $10 per 10,000',
    ogDescription:
      'Clean your email list with live syntax, MX and SMTP mailbox checks, separate accept-all (catch-all) domains into their own segment, and cut hard bounces — deduplicated CSV/XLSX or sync to Instantly, Smartlead, Lemlist, HubSpot, Salesforce and Google Sheets. 1 credit per email, $10 per 10,000, pay-as-you-go, credits never expire, 50 free verify credits with no card.',
  },
  'domain-enrichment': {
    name: 'Domain Enrichment',
    title: 'Domain Enrichment & Company Enrichment Tool | Coldcast',
    description:
      'Turn any domain into company data: firmographics, tech stack and verified contacts. Bulk CSV upload, up to 10 providers, 3 credits per domain, no subscription.',
    keywords:
      'domain enrichment, company enrichment tool, domain to company data, company data from domain, enrich company by domain, enrich a company from a domain, bulk domain enrichment, bulk CSV domain upload, firmographic data, firmographics and technographics, technographic data, tech stack lookup, tech stack detection, employee count, verified contacts from domain, CRM enrichment, bulk CRM cleanup, lead scoring, ICP targeting, waterfall enrichment, pay-as-you-go enrichment credits, credits never expire, no API key domain enrichment, domain enrichment 2026',
    ogTitle: 'Domain Enrichment Tool — Company Data, Tech Stack & Verified Contacts from Any Domain',
    ogDescription:
      'Upload a CSV of domains. Coldcast returns fresh firmographics (industry, employee count, location), technographics and waterfall-verified contacts from up to 10 providers, catch-all cleaned — 3 credits per domain, $30 per 10,000 enrichment credits, no API key, no subscription, credits never expire. Free trial with 50 enrichment credits, no card.',
  },
}

// ── Role / use-case pages (keyed by slug) ────────────────────────────────────
export const ROLE_SEO = {
  'sdrs-aes': {
    name: 'For SDRs & AEs',
    title: 'Prospecting & Lead Lists for SDRs & AEs | Coldcast',
    description:
      'Hit quota without building lists by hand. Coldcast finds, verifies and personalizes best-fit prospects for SDRs & AEs so you sell more. Start free today.',
    keywords:
      'prospecting for SDRs, lead lists for AEs, cold email tool for sales reps, account-safe sales navigator scraper, lead enrichment, signal-based personalization',
    ogTitle: 'Prospecting on Autopilot for SDRs & AEs',
    ogDescription:
      'Coldcast finds, enriches and personalizes your best-fit prospects — so SDRs and AEs spend the day in conversations, not spreadsheets and tab-hopping.',
  },
  founders: {
    name: 'For Founders',
    title: 'Outbound & Lead Gen for Founders | Coldcast',
    description:
      'Go to market without a data budget or an SDR. Coldcast gives founders an all-in-one outbound stack with an AI agent that runs cold sequences. Try it free.',
    keywords:
      'outbound for founders, cold email for founders, lead gen for startups, all-in-one outbound stack, AI sales agent, founder-led sales',
    ogTitle: 'Go to Market Without a Data Budget or an SDR',
    ogDescription:
      "Coldcast is a founder's whole outbound stack in one login — find buyers, verify them, and let the AI agent run cold sequences while you build.",
  },
  'sales-leaders': {
    name: 'For Sales Leaders',
    title: 'Scale Outbound for Sales Leaders | Coldcast',
    description:
      "Scale outbound your reps can trust. Coldcast gives sales leaders clean, scored pipeline and a scraper that won't get accounts banned. Book a demo today.",
    keywords:
      'outbound for sales teams, prospecting for sales leaders, account-safe LinkedIn scraper, AI lead scoring, predictable pipeline, sales data quality',
    ogTitle: 'Scale Outbound Your Reps Can Trust — Safely',
    ogDescription:
      "Give the team clean, enriched, scored pipeline and a scraper that won't get LinkedIn accounts banned. Volume goes up, risk goes down.",
  },
  agencies: {
    name: 'For Agencies',
    title: 'Lead Generation for Agencies | Coldcast',
    description:
      'Deliver verified leads for every client, profitably. Coldcast scrapes, enriches and verifies all your agency campaigns from one login. Protect your margin.',
    keywords:
      'lead generation for agencies, agency prospecting, multi-client lead scraping, verified B2B leads, white-glove data, lead gen agency margin',
    ogTitle: 'Deliver Verified Leads for Every Client — Profitably',
    ogDescription:
      'One platform to scrape, enrich and verify across all your client campaigns — at a cost that protects your margin and quality that keeps clients.',
  },
  revops: {
    name: 'For RevOps',
    title: 'CRM Data Enrichment for RevOps | Coldcast',
    description:
      'Clean, enriched, verified data on tap. Coldcast feeds RevOps teams fresh, validated contacts — no stale databases, no bounces, no dupes. Start free today.',
    keywords:
      'data enrichment for RevOps, CRM data hygiene, real-time contact enrichment, catch-all email verification, waterfall enrichment, CRM deduplication',
    ogTitle: 'Clean, Enriched, Verified Data on Tap',
    ogDescription:
      'Feed your CRM and sequences a single source of fresh, validated contacts — no stale databases, no bounce problems, no duplicate sprawl.',
  },
  recruiters: {
    name: 'For Recruiters',
    title: 'Candidate Sourcing for Recruiters | Coldcast',
    description:
      'Source verified candidate contacts, fast. Coldcast finds and verifies candidate emails and direct dials from LinkedIn at scale — no account bans. Try it free.',
    keywords:
      'candidate sourcing for recruiters, verified candidate emails, LinkedIn recruiter sourcing, direct dials for recruiters, ATS contact enrichment, talent sourcing tool',
    ogTitle: 'Source Verified Candidate Contacts, Fast',
    ogDescription:
      'Find and verify candidate emails and direct dials from LinkedIn at scale — without risking your account or paying per-credit data prices.',
  },
}

// Section-level social share cards (og:image / twitter:image). Home and anything
// unspecified keep the global 1200×630 og-image.png in index.html; product and
// role pages get their own branded card. Any entry can override `image` above.
Object.values(PRODUCT_SEO).forEach((e) => {
  if (!e.image) e.image = '/images/coldcast-sales-navigator-scraper-app.png'
})
Object.values(ROLE_SEO).forEach((e) => {
  if (!e.image) e.image = '/images/coldcast-b2b-lead-list-builder.png'
})

// Canonical path for a product/role detail slug. coldcast-agent has its own
// top-level route; every other product lives under /products/, roles under /roles/.
export function detailPath(slug, kind) {
  if (slug === 'coldcast-agent') return '/coldcast-agent'
  if (kind === 'role') return '/roles/' + slug
  return '/products/' + slug
}

// ── JSON-LD builders ─────────────────────────────────────────────────────────
export function breadcrumbLd(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  }
}

export function faqLd(faq) {
  if (!faq || !faq.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function articleLd({ title, description, path, datePublished, dateModified, image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: abs(path),
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(path) },
    image: image ? SITE + image : SITE + '/og-image.png',
    datePublished,
    dateModified: dateModified || datePublished,
    author: { '@type': 'Organization', name: 'Coldcast', url: SITE + '/' },
    publisher: {
      '@type': 'Organization',
      name: 'Coldcast',
      url: SITE + '/',
      logo: { '@type': 'ImageObject', url: SITE + '/favicon-512x512.png' },
    },
  }
}

export function softwareLd({ name, description, path, price = '0' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web-based, Google Chrome extension',
    url: abs(path),
    description,
    offers: { '@type': 'Offer', price, priceCurrency: 'USD' },
    publisher: { '@type': 'Organization', name: 'Coldcast', url: SITE + '/' },
  }
}
