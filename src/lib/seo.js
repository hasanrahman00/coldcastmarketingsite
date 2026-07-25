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
    title: 'Sales Navigator Scraper — Account-Safe | Coldcast',
    description:
      'The account-safe LinkedIn Sales Navigator scraper — export leads with verified emails, phones and buying signals from your own browser. No bans. Try it free.',
    keywords:
      'Sales Navigator scraper, LinkedIn Sales Navigator scraper, account-safe LinkedIn scraper, export Sales Navigator leads, triple-verified emails, buying intent signals, lead enrichment',
    ogTitle: "The world's safest Sales Navigator scraper",
    ogDescription:
      'Scrape Sales Navigator, Apollo and ZoomInfo at zero ban risk — from your own browser, at human pace. Pull triple-verified emails, phones and buying signals.',
  },
  '/products': {
    title: 'Lead Gen Tools: Scrape, Enrich, Verify | Coldcast',
    description:
      'Scrape, enrich, verify and reach — seven account-safe GTM tools in one platform. Chain them into a full pipeline or use just one. Start your free trial.',
    keywords:
      'lead generation platform, Sales Navigator enrichment tools, waterfall enrichment, email verifier, AI SDR, lead scraper suite, GTM tools',
    ogTitle: 'One platform. Seven GTM tools.',
    ogDescription:
      'Scrape, enrich, verify and reach in one account-safe platform. Use a single tool or chain all seven into a full GTM pipeline that runs in your own browser.',
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
    title: 'Sales Navigator Scraper: 20k Leads/Day | Coldcast',
    description:
      'Scrape LinkedIn Sales Navigator from your own browser: 20,000 leads a day at zero ban risk, enriched and AI-scored as you export. Start free today.',
    keywords:
      'Sales Navigator scraper, LinkedIn Sales Navigator export, account-safe LinkedIn scraper, export Sales Nav leads, no ban risk, lead enrichment',
    ogTitle: 'Sales Navigator Scraper — 20,000 Leads/Day, Zero Ban Risk',
    ogDescription:
      'Export Sales Nav leads from your own browser session. 20,000/day, enriched and scored, no code — just paste a search URL.',
  },
  'apollo-scraper': {
    name: 'Apollo Scraper',
    title: 'Apollo Scraper: Fresh, Verified Exports | Coldcast',
    description:
      'Export whole Apollo lists in minutes — re-verified in real time, catch-alls cleaned, and 3x cheaper than per-credit pricing. Pull your first list free.',
    keywords:
      'Apollo scraper, Apollo.io export, export Apollo lists, real-time email verification, catch-all cleaning, cheaper Apollo alternative',
    ogTitle: 'Apollo Scraper — Fresh, Verified, 3x Cheaper Exports',
    ogDescription:
      'Pull entire Apollo searches at once, re-verified live and topped up with waterfall enrichment — a third of per-credit pricing.',
  },
  'zoominfo-scraper': {
    name: 'ZoomInfo Scraper',
    title: 'ZoomInfo Scraper: Export Data, No Lock-In | Coldcast',
    description:
      'Export ZoomInfo company and contact data, re-verified in real time with waterfall enrichment — 3x cheaper and no annual lock-in. Start exporting free.',
    keywords:
      'ZoomInfo scraper, export ZoomInfo data, ZoomInfo company and contact export, cheaper ZoomInfo alternative, no annual contract, real-time firmographics',
    ogTitle: 'ZoomInfo Scraper — Fresh Exports, No Enterprise Lock-In',
    ogDescription:
      'Export ZoomInfo firmographics and contacts together, re-verified live and catch-all cleaned — 3x cheaper, no annual contract.',
  },
  'waterfall-enricher': {
    name: 'Waterfall Enrichment',
    title: 'Waterfall Enrichment: Pay Per Valid Email | Coldcast',
    description:
      'Waterfall enrichment cascades every provider for verified emails and direct dials, cleans catch-alls, and only charges for 99%-valid hits. Try it free.',
    keywords:
      'waterfall enrichment, email waterfall enrichment, verified emails and direct dials, pay per valid email, catch-all cleaning, bulk lead enrichment',
    ogTitle: 'Waterfall Enrichment — Pay Only for 99%-Valid Emails',
    ogDescription:
      'Upload names and domains. Coldcast cascades every provider, cleans catch-alls, and charges only for verified, deliverable contacts.',
  },
  'email-verify': {
    name: 'Email Verification',
    title: 'Email Verification: Real-Time MX + SMTP | Coldcast',
    description:
      'Verify emails in real time with live MX and SMTP checks, flag risky catch-alls, and cut bounces to protect your sender reputation. Try it 3x cheaper.',
    keywords:
      'email verification, bulk email verifier, real-time MX SMTP check, catch-all detection, reduce bounce rate, protect sender reputation',
    ogTitle: 'Email Verification — Real-Time MX + SMTP, Catch-All Aware',
    ogDescription:
      'Clean your whole list with live MX and SMTP checks, detect catch-alls, and slash bounce rates — 3x cheaper than the big verifiers.',
  },
  'domain-enrichment': {
    name: 'Domain Enrichment',
    title: 'Domain Enrichment: Firmographics + Contacts | Coldcast',
    description:
      'Turn any domain into fresh firmographics, technographics and verified contacts — waterfall-enriched and catch-all cleaned, at 3x lower cost. Try it free.',
    keywords:
      'domain enrichment, domain to company data, firmographics and technographics, verified contacts from domain, tech stack lookup, bulk domain enrichment',
    ogTitle: 'Domain Enrichment — Firmographics, Tech & Verified Contacts',
    ogDescription:
      'Give Coldcast a domain, get back fresh firmographics, technographics and waterfall-verified contacts — a third of the usual cost.',
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
