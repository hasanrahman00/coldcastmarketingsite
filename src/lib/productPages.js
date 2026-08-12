// Content for every product / agent detail page, keyed by slug.
// The <ProductDetailPage> template renders these into 6–7 animated sections.
// Schema: { slug, kind, emoji, color, hero{eyebrow,title,subtitle,badges[]},
//   how{heading,subtitle,steps[]}, features{heading,subtitle,items[]},
//   stats[], benefits{heading,items[]}, faq[], cta{title,subtitle} }

export const PRODUCT_PAGES = {
  // ──────────────────────── LinkedIn Post Scraper ───────────────────────────
  'linkedin-post-scraper': {
    slug: 'linkedin-post-scraper',
    kind: 'product',
    emoji: '💬',
    color: 'brand',
    heroVariant: 'centered',
    howVariant: 'rail',
    featuresVariant: 'grid',
    order: ['how', 'stats', 'features', 'comparison', 'benefits', 'faq'],
    comparison: {
      heading: 'A warm audience beats a cold one.',
      rows: [
        { label: 'Who you reach', them: 'Cold ICP guesses', us: 'People who just engaged' },
        { label: 'Signal', them: 'None', us: 'Reacted / commented / reposted' },
        { label: 'Emails', them: 'Separate tool', us: 'Verified, built in' },
        { label: 'Account risk', them: 'Cloud bot', us: 'Your browser, 0 bans' },
        { label: 'Setup', them: 'Proxies & code', us: 'Paste the post URL' },
      ],
    },
    hero: {
      eyebrow: 'LinkedIn Post Scraper',
      title: 'Scrape everyone who engaged with a LinkedIn post — reactions, comments and reposts.',
      subtitle:
        'Paste any LinkedIn or Sales Navigator post URL and Coldcast exports every reactor, commenter and reposter, enriched with verified emails — from your own browser, at zero ban risk.',
      badges: ['0 account bans', 'Reactors + commenters + reposters', 'Verified emails built in'],
    },
    how: {
      heading: 'From a post URL to a warm, enriched list — in minutes.',
      subtitle: 'The people who engaged already raised their hand. Turn them into pipeline.',
      steps: [
        { emoji: '🧩', title: 'Install the extension', desc: 'Add the Coldcast Chrome extension in one click and sign in to your own LinkedIn.' },
        { emoji: '🔗', title: 'Paste the post URL', desc: 'Any public LinkedIn or Sales Navigator post — yours, a competitor’s, or a viral thread.' },
        { emoji: '🎚️', title: 'Pick the engagement', desc: 'Reactions, comments, reposts — or all three. Coldcast dedupes across them for you.' },
        { emoji: '▶️', title: 'Hit start', desc: 'Coldcast collects every engager at a smooth, human pace — no bot, no ban risk.' },
        { emoji: '💧', title: 'Enrich automatically', desc: 'Waterfall enrichment adds verified emails and direct dials as it exports.' },
        { emoji: '⬇️', title: 'Export the list', desc: 'Download a clean CSV/XLSX or push straight into your sequencer.' },
      ],
    },
    features: {
      heading: 'Turn engagement into an outreach list.',
      subtitle: 'The warmest audience on LinkedIn is the one that just interacted with a post.',
      items: [
        { emoji: '👍', title: 'Every reactor', desc: 'Capture all reactions — like, celebrate, support, love, insightful and funny.' },
        { emoji: '💬', title: 'Every commenter', desc: 'Pull everyone who commented, plus the comment text for instant personalisation.' },
        { emoji: '🔁', title: 'Every reposter', desc: 'Reposters amplified you publicly — the strongest signal of all.' },
        { emoji: '🧹', title: 'Deduped across signals', desc: 'Someone who liked and commented shows once, with every signal flagged.' },
        { emoji: '💧', title: 'Verified emails built in', desc: 'Waterfall enrichment finds and verifies work emails on the same pass.' },
        { emoji: '🛡️', title: 'Account-safe', desc: 'Runs in your own browser session at human pace — LinkedIn only sees you.' },
      ],
    },
    stats: [
      { value: '3', label: 'engagement types' },
      { value: '70–85%', label: 'email match' },
      { value: '0', label: 'account bans' },
      { value: '1', label: 'post URL to start' },
    ],
    benefits: {
      heading: 'Why post engagers convert better.',
      items: [
        { emoji: '🔥', title: 'Warm, not cold', desc: 'They just engaged with the topic — your opener writes itself.' },
        { emoji: '🎯', title: 'Built-in relevance', desc: 'Interest is proven, so replies and positive sentiment run higher.' },
        { emoji: '⚡', title: 'Fast to fire', desc: 'A viral post becomes a ready-to-send list in a single sitting.' },
      ],
    },
    faq: [
      { q: 'Whose posts can I scrape?', a: 'Any public LinkedIn post — your own, a competitor’s, an influencer’s or a viral thread. Paste the post URL and Coldcast pulls its engagers.' },
      { q: 'Does it get comments and reposts too, not just likes?', a: 'Yes. Coldcast captures reactions, comments (with the comment text) and reposts, and dedupes anyone who did more than one.' },
      { q: 'Are emails included?', a: 'Yes — waterfall enrichment finds and verifies work emails as it exports, so you get a send-ready list, not just names.' },
      { q: 'Is it safe for my account?', a: 'Yes. Extraction runs in your own browser session at human pace — there is no cloud bot and no datacenter IP, which is why Coldcast records zero account bans.' },
      { q: 'Do I need Sales Navigator?', a: 'No. The post scraper works on standard LinkedIn posts; Sales Navigator is optional. You do need to be signed in to your own LinkedIn.' },
      { q: 'Can I export to CSV?', a: 'Yes — clean, deduplicated, verification-flagged CSV or XLSX, or push straight into your outreach tool.' },
    ],
    cta: {
      title: 'Turn your next post into pipeline.',
      subtitle: 'Paste a post URL and export every engager, enriched and ready to send.',
    },
  },

  // ─────────────────────── Sales Nav Account Scraper ────────────────────────
  'sales-navigator-account-scraper': {
    slug: 'sales-navigator-account-scraper',
    kind: 'product',
    emoji: '🏦',
    color: 'brand',
    heroVariant: 'centered',
    howVariant: 'rail',
    featuresVariant: 'grid',
    order: ['how', 'stats', 'features', 'comparison', 'benefits', 'faq'],
    comparison: {
      heading: 'Account search, exported the safe way.',
      rows: [
        { label: 'Search type', them: 'People only', us: 'Company / account search' },
        { label: 'Where it runs', them: 'Cloud bot', us: 'Your browser' },
        { label: 'Firmographics', them: 'Separate tool', us: 'Enriched on export' },
        { label: 'Domains', them: 'Missing', us: 'Resolved per account' },
        { label: 'Account risk', them: 'High', us: 'Zero' },
      ],
    },
    hero: {
      eyebrow: 'Sales Nav Account Scraper',
      title: 'Export whole company lists from a Sales Navigator account search.',
      subtitle:
        'Point Coldcast at any Sales Navigator account (company) search and export every company with firmographics and a resolved domain — account-safe, from your own browser, ready to enrich into contacts.',
      badges: ['0 account bans', 'Firmographics + domains', 'Feeds people & email enrichment'],
    },
    how: {
      heading: 'Company search → clean account list, in minutes.',
      subtitle: 'Build target-account lists for ABM without copy-pasting company pages.',
      steps: [
        { emoji: '🧩', title: 'Install the extension', desc: 'Add the Coldcast Chrome extension and sign in to your own LinkedIn.' },
        { emoji: '🏢', title: 'Build an account search', desc: 'Use Sales Navigator’s company filters — headcount, industry, geography, growth.' },
        { emoji: '📋', title: 'Paste the search URL', desc: 'Copy your account-search URL into Coldcast — no proxies, no code.' },
        { emoji: '▶️', title: 'Hit start', desc: 'Coldcast exports every account at a smooth, human pace, zero ban risk.' },
        { emoji: '🌐', title: 'Enrich firmographics & domains', desc: 'Company size, industry and a resolved website domain attach to each row.' },
        { emoji: '⬇️', title: 'Export or hand off', desc: 'Download a clean CSV, or feed it into domain enrichment to find contacts.' },
      ],
    },
    features: {
      heading: 'Built for account-based targeting.',
      subtitle: 'Turn a company search into a structured, enrich-ready account list.',
      items: [
        { emoji: '🏦', title: 'Company-level export', desc: 'Export account (company) searches, not just people — the ABM starting point.' },
        { emoji: '🌐', title: 'Domains resolved', desc: 'Every account gets its real website domain, ready for enrichment.' },
        { emoji: '📊', title: 'Firmographics attached', desc: 'Headcount, industry, HQ and more, pulled onto every row.' },
        { emoji: '🔗', title: 'Feeds the people scraper', desc: 'Hand the account list to Coldcast to find and verify the right contacts.' },
        { emoji: '🛡️', title: 'Account-safe', desc: 'Runs in your own browser at human pace — no cloud bot, zero bans.' },
        { emoji: '⚡', title: 'Whole lists at once', desc: 'Export the full account search in one sitting instead of page by page.' },
      ],
    },
    stats: [
      { value: '20,000', label: 'accounts / day' },
      { value: '100%', label: 'domains resolved' },
      { value: '0', label: 'account bans' },
      { value: '1', label: 'search URL to start' },
    ],
    benefits: {
      heading: 'Why teams start ABM with account search.',
      items: [
        { emoji: '🎯', title: 'Target the company first', desc: 'Lock the account list, then find the right people inside each one.' },
        { emoji: '🧭', title: 'Clean firmographics', desc: 'Domains and company data ready for routing, scoring and enrichment.' },
        { emoji: '🛡️', title: 'No account risk', desc: 'Human-paced extraction in your own session keeps your seat safe.' },
      ],
    },
    faq: [
      { q: 'How is this different from the Sales Nav lead scraper?', a: 'The lead scraper exports people from a lead search. This exports companies from a Sales Navigator account (company) search — the account list you build ABM on.' },
      { q: 'Do I get each company’s website?', a: 'Yes. Coldcast resolves a real website domain for every account, so the list is ready for domain enrichment and contact finding.' },
      { q: 'Can I then find contacts at those companies?', a: 'Yes — hand the account list to Coldcast’s domain enrichment or people scraping to pull and verify the right decision-makers.' },
      { q: 'Is it account-safe?', a: 'Yes. Extraction runs in your own browser session at human pace — no cloud bot, no datacenter IP, zero recorded bans.' },
      { q: 'How many accounts can I export?', a: 'Up to roughly 20,000 a day at a human pace, so a full account-search list exports in one sitting.' },
      { q: 'What format is the export?', a: 'Clean CSV/XLSX with firmographics and domains per account, ready for your CRM or enrichment pipeline.' },
    ],
    cta: {
      title: 'Build your target-account list, safely.',
      subtitle: 'Export a whole Sales Navigator account search with domains and firmographics in minutes.',
    },
  },

  // ───────────────────────────── Coldcast Agent ─────────────────────────────
  'coldcast-agent': {
    slug: 'coldcast-agent',
    kind: 'agent',
    emoji: '🤖',
    color: 'brand',
    heroVariant: 'centered',
    howVariant: 'timeline',
    featuresVariant: 'bento',
    order: ['visual', 'how', 'features', 'stats', 'benefits', 'faq'],
    hero: {
      eyebrow: 'Coldcast Agent',
      title: 'Upload your list — your AI outbound agent runs the whole play.',
      subtitle:
        'Coldcast Agent works your target accounts completely hands-off — extracting, scoring, enriching, writing and pushing live sequences while you do nothing.',
      badges: ['Fully hands-off', 'AI-scored ICP', 'Sequences auto-pushed'],
    },
    how: {
      heading: 'From a list of websites to live sequences — automatically.',
      subtitle: 'You give it targets and what you sell. It does the other seven steps.',
      steps: [
        { emoji: '🌐', title: 'You upload websites + your offer', desc: 'Drop in a list of target company websites and a short description of your service. That’s your entire job.' },
        { emoji: '🔎', title: 'Extracts each website', desc: 'The agent visits every site one by one and pulls out what the company does, its size and its stack.' },
        { emoji: '🎯', title: 'Scores ICP fit', desc: 'Each account is scored against your ideal customer profile, so budget only goes to real fits.' },
        { emoji: '🧑‍💼', title: 'Finds the right title', desc: 'It identifies the most relevant decision-maker to email for your specific offer at each company.' },
        { emoji: '💧', title: 'Enriches company & person', desc: 'Waterfall enrichment adds verified emails, direct dials and firmographics for every contact.' },
        { emoji: '✍️', title: 'Finds the personal signal', desc: 'It mines a real, specific buying signal to open the first line of every cold email.' },
        { emoji: '📨', title: 'Writes a 3-step sequence', desc: 'A full, personalised three-email sequence is written for each contact — not a single template.' },
        { emoji: '🚀', title: 'Pushes to your stack', desc: 'Finished sequences land straight in your cold-outbound platform or CRM, ready to send.' },
      ],
    },
    features: {
      heading: 'An SDR team’s whole workflow, in one agent.',
      subtitle: 'Research, enrichment, copywriting and handoff — done while you sleep.',
      items: [
        { emoji: '🤖', title: 'Hands-off autopilot', desc: 'Set it once; it works account by account without you touching a thing.' },
        { emoji: '🎯', title: 'AI ICP scoring', desc: 'Claude & DeepSeek score fit, so your spend goes only to real prospects.' },
        { emoji: '🧑‍💼', title: 'Decision-maker targeting', desc: 'Finds the exact title worth emailing at each account.' },
        { emoji: '💧', title: 'Built-in enrichment', desc: 'Verified emails and direct phones with no separate enrichment tool.' },
        { emoji: '✍️', title: 'Signal-based first lines', desc: 'Every email opens with a real, specific reason to reply.' },
        { emoji: '🔁', title: '3-step sequences written for you', desc: 'Full multi-touch copy per contact, auto-synced to your sender.' },
      ],
    },
    stats: [
      { value: '8', label: 'steps automated' },
      { value: '3', label: 'emails per lead' },
      { value: '24/7', label: 'always working' },
      { value: '0', label: 'manual research' },
    ],
    benefits: {
      heading: 'Why teams hand their outbound to the agent.',
      items: [
        { emoji: '⏱️', title: 'Hours back every day', desc: 'No more manual research, list-building or cold-copy writing.' },
        { emoji: '💸', title: 'Spend only on fits', desc: 'ICP scoring filters out the accounts that would never buy.' },
        { emoji: '📈', title: 'Pipeline that never goes quiet', desc: 'It runs every day, so your top-of-funnel keeps filling itself.' },
      ],
    },
    faq: [
      { q: 'Do I need to write any copy?', a: 'No. You give your offer once; the agent writes every first line and a full 3-step sequence for every contact.' },
      { q: 'What do I actually upload?', a: 'A list of target company websites and a short description of what you sell. That’s it — the agent handles the rest.' },
      { q: 'Where do the finished sequences go?', a: 'Straight into your cold-outbound platform (Instantly, Smartlead and more) or your CRM, ready to send.' },
      { q: 'Is it account-safe?', a: 'Yes — all scraping runs in your own browser at human pace, never a bot in someone’s cloud.' },
      { q: 'Which AI models does it use?', a: 'Claude and DeepSeek for ICP scoring and copywriting, so the reasoning and the writing are genuinely good.' },
      { q: 'Is Coldcast Agent an AI SDR?', a: 'Yes — Coldcast Agent is an AI SDR that runs the full outbound play: it researches each account, ICP-scores it, finds and enriches the right contact, writes a personalised 3-step sequence, and pushes it to your sender — hands-off.' },
    ],
    cta: {
      title: 'Let the agent run your outbound.',
      subtitle: 'Upload a list, describe your offer, and watch verified, personalised sequences build themselves.',
    },
  },

  // ─────────────────────────── Sales Nav Scraper ────────────────────────────
  'sales-navigator-scraper': {
    slug: 'sales-navigator-scraper',
    kind: 'product',
    emoji: '🎯',
    color: 'brand',
    heroVariant: 'split',
    howVariant: 'rail',
    featuresVariant: 'grid',
    order: ['how', 'stats', 'features', 'comparison', 'benefits', 'faq'],
    comparison: {
      heading: 'Built different from every other scraper.',
      rows: [
        { label: 'Where it runs', them: 'Cloud bot', us: 'Your browser' },
        { label: 'Account ban risk', them: 'High', us: 'Zero' },
        { label: 'Daily volume', them: '~2,500', us: '20,000' },
        { label: 'Enrichment', them: 'Separate tool', us: 'Built in' },
        { label: 'Setup', them: 'Proxies & code', us: 'Paste a URL' },
      ],
    },
    hero: {
      eyebrow: 'Sales Navigator Scraper',
      title: 'The safest LinkedIn Sales Navigator scraper — export 20,000 leads a day at zero ban risk.',
      subtitle:
        'Coldcast scrapes LinkedIn Sales Navigator from your own browser session and proxy, so every request looks 100% human. Enriched, scored and ready to send.',
      badges: ['0 account bans', '10,000 leads / hour', 'No code — just an extension'],
    },
    how: {
      heading: 'Live in five minutes. No technical setup.',
      subtitle: 'If you can paste a URL, you can run it — no proxies to configure, no code.',
      steps: [
        { emoji: '🧩', title: 'Install the extension', desc: 'Add the Coldcast Chrome extension in a single click.' },
        { emoji: '🔗', title: 'Connect your profile', desc: 'Sign in to your own LinkedIn — Coldcast never asks for or stores your password.' },
        { emoji: '📋', title: 'Paste your filter URL', desc: 'Build any Sales Navigator search and copy its URL into the dashboard.' },
        { emoji: '▶️', title: 'Hit start', desc: 'Coldcast scrapes at a smooth, human pace — up to 10,000 leads an hour.' },
        { emoji: '💧', title: 'Enrich & score automatically', desc: 'Waterfall enrichment and Claude/DeepSeek scoring run as it exports.' },
        { emoji: '⬇️', title: 'Export clean rows', desc: 'Download a verified CSV/XLSX or push straight to your stack.' },
      ],
    },
    features: {
      heading: 'Built to scrape Sales Navigator at scale — safely.',
      subtitle: 'Volume and account safety, in the same tool.',
      items: [
        { emoji: '🛡️', title: '0 ban risk', desc: 'Runs on your real browser session and proxy, so LinkedIn only ever sees a human.' },
        { emoji: '⚡', title: '20,000 leads / day', desc: 'Up to 10,000 an hour — a full campaign’s worth in one sitting.' },
        { emoji: '💧', title: 'Waterfall enrichment built in', desc: 'Verified emails and direct phones cascade in as you scrape.' },
        { emoji: '🧠', title: 'AI lead scoring', desc: 'Claude & DeepSeek score every lead so you work the best ones first.' },
        { emoji: '✍️', title: 'Personalisation signals', desc: 'Scrapes the buying signals that power signal-based cold copy.' },
        { emoji: '🏢', title: 'Company search too', desc: 'Export company-level Sales Navigator searches, not just people.' },
      ],
    },
    stats: [
      { value: '20,000', label: 'leads / day' },
      { value: '10,000', label: 'leads / hour' },
      { value: '0', label: 'account bans' },
      { value: '5 min', label: 'to first export' },
    ],
    benefits: {
      heading: 'Why it beats every other scraper.',
      items: [
        { emoji: '🔒', title: 'Account-safe by design', desc: 'Your session, your IP, human pace — never a foreign cloud bot.' },
        { emoji: '🧰', title: 'A pipeline, not a CSV', desc: 'Scrape, enrich, verify and score in a single pass.' },
        { emoji: '🙌', title: 'Anyone can run it', desc: 'No proxies to set up, no code — install and paste a URL.' },
      ],
    },
    faq: [
      { q: 'Will my LinkedIn get banned?', a: 'No. Coldcast runs in your own browser at human pace with your own session and proxy — the opposite of the cloud bots that get flagged and suspended.' },
      { q: 'Do I need to be technical?', a: 'Not at all. Install the extension, connect your profile, paste a Sales Nav filter URL, and start.' },
      { q: 'How fast is it?', a: 'Up to 10,000 leads an hour and 20,000 a day, under normal account standing.' },
      { q: 'Do I get emails and phones?', a: 'Yes — waterfall enrichment runs as you scrape, adding verified emails and direct dials.' },
      { q: 'Can I scrape companies, not just people?', a: 'Yes — company-level Sales Navigator searches are supported too.' },
      { q: 'Is Coldcast a Sales Navigator scraper Chrome extension?', a: 'Yes — Coldcast is a Chrome extension that scrapes LinkedIn Sales Navigator from your own browser session. Install it, sign in to your own LinkedIn, paste a search URL and export.' },
      { q: 'How do I export Sales Navigator leads to CSV or Excel?', a: 'Paste your Sales Navigator search URL into Coldcast, run the export, and download a clean CSV or XLSX — enriched with verified emails and phones, de-duplicated and ready for your CRM or sequencer.' },
    ],
    cta: {
      title: 'Export your next 20,000 leads — safely.',
      subtitle: 'Install the extension, paste a search URL, and watch verified leads flow in.',
    },
  },

  // ───────────────────────────── Apollo Scraper ─────────────────────────────
  'apollo-scraper': {
    slug: 'apollo-scraper',
    kind: 'product',
    emoji: '🚀',
    color: 'violet',
    heroVariant: 'split',
    howVariant: 'timeline',
    featuresVariant: 'list',
    order: ['how', 'features', 'comparison', 'stats', 'benefits', 'faq'],
    comparison: {
      heading: 'No more Apollo export limits.',
      rows: [
        { label: 'Data freshness', them: 'Stale cache', us: 'Real-time' },
        { label: 'Export limits', them: 'Page-by-page', us: 'Whole list' },
        { label: 'Catch-all cleaning', them: 'No', us: 'Yes' },
        { label: 'Price', them: 'Per-credit', us: '3x cheaper' },
      ],
    },
    hero: {
      eyebrow: 'Apollo Scraper',
      title: 'Apollo scraper: export whole Apollo.io lists — fresh, verified, a third of the price.',
      subtitle:
        'Export any Apollo search in minutes. Coldcast re-verifies every contact in real time and fills the gaps with its own waterfall enrichment — at 3x lower cost.',
      badges: ['Real-time fresh data', 'Catch-all verified', '3x more affordable'],
    },
    how: {
      heading: 'Any Apollo search to a clean list — fast.',
      subtitle: 'No page-by-page limits, no stale credits.',
      steps: [
        { emoji: '🧩', title: 'Install the extension', desc: 'One-click Chrome extension — no setup.' },
        { emoji: '🔗', title: 'Open your Apollo search', desc: 'Build any people or company search in Apollo.' },
        { emoji: '📋', title: 'Start the export', desc: 'Pull entire lists at once — not 25 rows at a time.' },
        { emoji: '💧', title: 'Waterfall re-enrichment', desc: 'Every contact is re-enriched and re-verified live as it exports.' },
        { emoji: '✅', title: 'Catch-alls cleaned', desc: 'Risky catch-all addresses are tested and filtered out.' },
        { emoji: '⬇️', title: 'Export or sync', desc: 'Download a clean file or push to your CRM and sender.' },
      ],
    },
    features: {
      heading: 'Apollo data, but fresh and verified.',
      subtitle: 'Everything Apollo gives you — re-checked and topped up.',
      items: [
        { emoji: '🔄', title: 'Real-time fresh data', desc: 'Scraped and re-verified live — never a stale, recycled cache.' },
        { emoji: '💧', title: 'Waterfall enrichment', desc: 'Fills the gaps Apollo leaves with verified emails and phones.' },
        { emoji: '✅', title: 'Catch-all verification', desc: 'Every risky address is tested before it reaches your list.' },
        { emoji: '💸', title: '3x more affordable', desc: 'A fraction of per-credit pricing for the same — cleaner — data.' },
        { emoji: '📤', title: 'Whole-list export', desc: 'No page limits and no export caps.' },
        { emoji: '🔌', title: 'CRM & outbound sync', desc: 'Send clean rows straight to your stack.' },
      ],
    },
    stats: [
      { value: '3x', label: 'more affordable' },
      { value: '99%', label: 'valid emails' },
      { value: 'Real-time', label: 'fresh data' },
      { value: '1-click', label: 'whole-list export' },
    ],
    benefits: {
      heading: 'Why export Apollo through Coldcast.',
      items: [
        { emoji: '🔄', title: 'Always fresh', desc: 'Live re-verification beats a database that decays by the day.' },
        { emoji: '🎯', title: 'Send-ready', desc: 'Catch-all cleaning and 99% validity mean fewer bounces.' },
        { emoji: '💸', title: 'Three times cheaper', desc: 'More usable contacts for a fraction of the credit cost.' },
      ],
    },
    faq: [
      { q: 'How is this different from Apollo’s own export?', a: 'Coldcast re-verifies every contact in real time and tops up missing emails and phones with its own waterfall — so the list is fresher and cleaner than the raw export.' },
      { q: 'Is it really cheaper?', a: 'Yes — roughly 3x more affordable than equivalent per-credit pricing.' },
      { q: 'Do you clean catch-all emails?', a: 'Yes — catch-alls are tested and the risky ones removed before you send.' },
      { q: 'Can I export whole lists?', a: 'Yes — no page-by-page caps. Pull the entire search at once.' },
      { q: 'What is the Apollo export limit, and how do I get past it?', a: 'Apollo caps exports page-by-page. Coldcast pulls the entire Apollo search at once — no per-page caps — and re-verifies every contact live as it exports.' },
      { q: 'How do I export Apollo leads to CSV?', a: 'Open your Apollo search, start the Coldcast export, and download a clean CSV or XLSX — re-verified in real time and catch-all cleaned.' },
    ],
    cta: {
      title: 'Export Apollo — fresh, clean and cheaper.',
      subtitle: 'Pull any search, re-verified in real time, for a third of the price.',
    },
  },

  // ──────────────────────────── ZoomInfo Scraper ────────────────────────────
  'zoominfo-scraper': {
    slug: 'zoominfo-scraper',
    kind: 'product',
    emoji: '🏢',
    color: 'amber',
    heroVariant: 'split',
    howVariant: 'rail',
    featuresVariant: 'grid',
    order: ['how', 'stats', 'features', 'comparison', 'benefits', 'faq'],
    comparison: {
      heading: 'Enterprise data, without the lock-in.',
      rows: [
        { label: 'Data freshness', them: 'Snapshot', us: 'Real-time' },
        { label: 'Contract', them: 'Annual lock-in', us: 'None' },
        { label: 'Verification', them: 'Add-on', us: 'Built in' },
        { label: 'Price', them: 'Enterprise', us: '3x cheaper' },
      ],
    },
    hero: {
      eyebrow: 'ZoomInfo Scraper',
      title: 'ZoomInfo scraper: export company & contact data — fresh and verified.',
      subtitle:
        'Pull ZoomInfo firmographics and contacts in minutes. Coldcast re-verifies every record in real time and enriches with its own waterfall — at 3x lower cost.',
      badges: ['Real-time fresh data', 'Catch-all verified', '3x more affordable'],
    },
    how: {
      heading: 'ZoomInfo data, cleaned on the way out.',
      subtitle: 'Company and contact exports without the enterprise price tag.',
      steps: [
        { emoji: '🧩', title: 'Install the extension', desc: 'One-click Chrome extension — nothing to configure.' },
        { emoji: '🔗', title: 'Open your ZoomInfo search', desc: 'Build any company or contact search.' },
        { emoji: '📋', title: 'Start the export', desc: 'Export company and contact data together in one run.' },
        { emoji: '💧', title: 'Waterfall re-enrichment', desc: 'Every record re-enriched and re-verified live.' },
        { emoji: '✅', title: 'Catch-alls cleaned', desc: 'Risky addresses tested and filtered before they reach you.' },
        { emoji: '⬇️', title: 'Export or sync', desc: 'Clean CSV/XLSX, or push to your CRM and sender.' },
      ],
    },
    features: {
      heading: 'Enterprise data, without the enterprise lock-in.',
      subtitle: 'Firmographics and contacts, fresh and send-ready.',
      items: [
        { emoji: '🔄', title: 'Real-time fresh data', desc: 'Re-verified live, never a stale snapshot.' },
        { emoji: '🏢', title: 'Company + contact', desc: 'Firmographics and the people, in one export.' },
        { emoji: '💧', title: 'Waterfall enrichment', desc: 'Verified emails and direct dials topped up automatically.' },
        { emoji: '✅', title: 'Catch-all verification', desc: 'Every risky address tested before it lands.' },
        { emoji: '💸', title: '3x more affordable', desc: 'A fraction of enterprise per-seat pricing.' },
        { emoji: '🔌', title: 'CRM & outbound sync', desc: 'Straight into the tools you already use.' },
      ],
    },
    stats: [
      { value: '3x', label: 'more affordable' },
      { value: '99%', label: 'valid emails' },
      { value: 'Real-time', label: 'fresh data' },
      { value: 'Company', label: '+ contact export' },
    ],
    benefits: {
      heading: 'Why pull ZoomInfo through Coldcast.',
      items: [
        { emoji: '🔄', title: 'Fresh, not snapshot', desc: 'Live re-verification keeps records current.' },
        { emoji: '🎯', title: 'Send-ready contacts', desc: 'Catch-all cleaning means cleaner deliverability.' },
        { emoji: '💸', title: 'No enterprise contract', desc: 'The same data, a third of the cost, no lock-in.' },
      ],
    },
    faq: [
      { q: 'Do I get company and contact data?', a: 'Yes — firmographics and the associated contacts export together in a single run.' },
      { q: 'Is the data fresh?', a: 'Every record is re-verified in real time, so you’re not relying on a stale snapshot.' },
      { q: 'How much cheaper is it?', a: 'Around 3x more affordable than enterprise per-seat pricing — with no long contract.' },
      { q: 'Are emails verified?', a: 'Yes — waterfall enrichment plus catch-all cleaning produces send-ready addresses.' },
      { q: 'How do I export ZoomInfo data without an annual contract?', a: 'Coldcast scrapes ZoomInfo company and contact data on demand — no enterprise seat and no annual lock-in — re-verifying every record in real time.' },
    ],
    cta: {
      title: 'Export ZoomInfo — fresh and affordable.',
      subtitle: 'Company and contact data, re-verified in real time, at a third of the cost.',
    },
  },

  // ───────────────────────────── Waterfall Enricher ─────────────────────────
  'waterfall-enricher': {
    slug: 'waterfall-enricher',
    kind: 'product',
    emoji: '💧',
    color: 'cyan',
    heroVariant: 'split',
    howVariant: 'timeline',
    featuresVariant: 'bento',
    order: ['how', 'stats', 'features', 'benefits', 'faq'],
    hero: {
      eyebrow: 'Waterfall Enricher',
      title: 'Waterfall enrichment: verified emails & direct dials you won’t find anywhere else.',
      subtitle:
        'Upload a name and domain; Coldcast cascades across every provider, cleans the catch-alls, and only charges you for results that come back 99% valid.',
      badges: ['99%-valid only', 'Pay per valid email', 'Catch-alls cleaned'],
    },
    how: {
      heading: 'Name + domain in. Verified contact out.',
      subtitle: 'Drop in a sheet — Coldcast runs the cascade.',
      steps: [
        { emoji: '📤', title: 'Upload your list', desc: 'First name, last name and a domain — that’s all it needs to start.' },
        { emoji: '🌐', title: 'Map your columns', desc: 'Supports website_one and website_two columns for contacts with multiple domains.' },
        { emoji: '💧', title: 'Waterfall across providers', desc: 'It cascades source after source until it finds a verified hit.' },
        { emoji: '✅', title: 'Clean the catch-alls', desc: 'Risky catch-all addresses are tested and filtered out.' },
        { emoji: '💳', title: 'Pay only for valid', desc: 'You’re charged only for emails that come back 99% valid — never for bounces or unknowns.' },
        { emoji: '🔌', title: 'Sync to your stack', desc: 'Push enriched rows to your CRM or cold-outbound platform.' },
      ],
    },
    features: {
      heading: 'Waterfall enrichment that’s actually accurate — and affordable.',
      subtitle: 'Match rates the big tools can’t touch, at a price that undercuts them.',
      items: [
        { emoji: '💧', title: 'True waterfall', desc: 'Cascades multiple providers for the maximum possible match rate.' },
        { emoji: '🎯', title: '99%-valid only', desc: 'Verified deliverable — not a “best guess” address.' },
        { emoji: '🧹', title: 'Catch-all cleaning', desc: 'Separates safe-to-send catch-alls from the risky ones.' },
        { emoji: '💳', title: 'Pay per valid email', desc: 'No spend wasted on bounces, unknowns or duplicates.' },
        { emoji: '🌐', title: 'Multi-domain columns', desc: 'website_one and website_two supported out of the box.' },
        { emoji: '⚡', title: 'Fast & affordable', desc: 'Bulk enrichment at a price that undercuts the big tools.' },
      ],
    },
    stats: [
      { value: '99%', label: 'valid guarantee' },
      { value: '2x', label: 'match rate' },
      { value: '3x', label: 'more affordable' },
      { value: 'CRM', label: '+ outbound synced' },
    ],
    benefits: {
      heading: 'Why teams switch their enrichment to Coldcast.',
      items: [
        { emoji: '🎯', title: 'Accuracy you can send on', desc: 'Catch-all cleaning plus 99% validity means far fewer bounces.' },
        { emoji: '💸', title: 'You only pay for wins', desc: 'Charged per valid email, not per row attempted.' },
        { emoji: '🔌', title: 'Drops into your workflow', desc: 'CRM and cold-outbound integrations built in.' },
      ],
    },
    faq: [
      { q: 'What do I upload?', a: 'First name, last name and a domain. We also support website_one and website_two columns for contacts with multiple domains.' },
      { q: 'What does “pay only for valid” mean?', a: 'You’re charged only for emails that verify at 99% confidence — never for catch-alls, unknowns or bounces.' },
      { q: 'Do you clean catch-all emails?', a: 'Yes — every catch-all is tested, and the risky ones are filtered out.' },
      { q: 'How accurate is it really?', a: 'The waterfall cascade plus catch-all cleaning produces match accuracy most teams simply can’t get anywhere else.' },
      { q: 'Does it connect to my CRM?', a: 'Yes — push enriched contacts straight into your CRM or cold-outbound tool.' },
      { q: 'What is waterfall enrichment?', a: 'Waterfall enrichment queries multiple data providers in sequence for each contact, moving to the next source only when one doesn’t return a verified result. Cascading providers this way finds a valid email or direct dial for far more of your list than any single provider can.' },
    ],
    cta: {
      title: 'Enrich your list — pay only for what’s valid.',
      subtitle: 'Upload a sheet of names and domains and get verified, ready-to-send contacts back.',
    },
  },

  // ─────────────────────────────── Email Verify ─────────────────────────────
  'email-verify': {
    slug: 'email-verify',
    kind: 'product',
    emoji: '✅',
    color: 'safe',
    heroVariant: 'split',
    howVariant: 'rail',
    featuresVariant: 'list',
    signature: 'verifier',
    order: ['signature', 'how', 'features', 'comparison', 'faq'],
    comparison: {
      heading: 'Verification that actually protects your domain.',
      rows: [
        { label: 'Checks', them: 'Static lookup', us: 'Live MX + SMTP' },
        { label: 'Catch-all', them: 'Missed', us: 'Detected' },
        { label: 'Bulk speed', them: 'Slow', us: 'Fast' },
        { label: 'Price', them: 'Premium', us: '3x cheaper' },
      ],
    },
    hero: {
      eyebrow: 'Email Verify',
      title: 'Email verification: verify every address before you send — catch-alls included.',
      subtitle:
        'Real-time MX and SMTP checks clean your whole list, separate the risky catch-alls, and protect your sender reputation — at 3x lower cost than the big verifiers.',
      badges: ['Real-time MX + SMTP', 'Catch-all detection', '3x more affordable'],
    },
    how: {
      heading: 'Upload a list. Get a clean, send-safe one back.',
      subtitle: 'Single address or a million rows — same checks.',
      steps: [
        { emoji: '📤', title: 'Upload or paste', desc: 'A single email, a CSV, or a whole list — however you have it.' },
        { emoji: '🔄', title: 'Real-time checks', desc: 'Live syntax, MX and SMTP checks run on every address.' },
        { emoji: '✅', title: 'Catch-all detection', desc: 'Risky catch-all domains are flagged and separated.' },
        { emoji: '🧹', title: 'Clean & segment', desc: 'Valid, risky and invalid are split so you only send to safe ones.' },
        { emoji: '⬇️', title: 'Export or sync', desc: 'Download the cleaned list or push it to your sender.' },
      ],
    },
    features: {
      heading: 'Protect your domain. Cut your bounce rate.',
      subtitle: 'Deliverability checks that don’t cost a fortune.',
      items: [
        { emoji: '🔄', title: 'Real-time MX + SMTP', desc: 'Live inbox checks, not a stale lookup table.' },
        { emoji: '✅', title: 'Catch-all detection', desc: 'Separates safe-to-send catch-alls from the risky ones.' },
        { emoji: '📉', title: 'Lower bounce rate', desc: 'Strip invalids before they ever hit your sequences.' },
        { emoji: '🛡️', title: 'Protect sender reputation', desc: 'Keep bounces low so your inbox placement stays high.' },
        { emoji: '📋', title: 'Bulk verification', desc: 'Clean entire lists in one pass, at speed.' },
        { emoji: '💸', title: '3x more affordable', desc: 'A fraction of the cost of the big verification tools.' },
      ],
    },
    stats: [
      { value: '99%', label: 'accuracy' },
      { value: 'Real-time', label: 'MX + SMTP' },
      { value: 'Catch-all', label: 'detection' },
      { value: '3x', label: 'more affordable' },
    ],
    benefits: {
      heading: 'Why verify with Coldcast.',
      items: [
        { emoji: '📬', title: 'Land in the inbox', desc: 'Low bounce rates keep your deliverability healthy.' },
        { emoji: '🎯', title: 'No more wasted sends', desc: 'Only email addresses that actually exist.' },
        { emoji: '💸', title: 'A third of the price', desc: 'Enterprise-grade checks without the enterprise bill.' },
      ],
    },
    faq: [
      { q: 'How do you verify an email?', a: 'Live syntax, MX and SMTP checks confirm the mailbox actually exists — not just a static lookup.' },
      { q: 'Do you detect catch-all domains?', a: 'Yes — catch-alls are flagged and separated so you can decide whether to send.' },
      { q: 'Can I verify in bulk?', a: 'Yes — upload a whole list and get a cleaned, segmented file back.' },
      { q: 'Is there a free way to try it?', a: 'Yes — try the free single-email verifier on our Free Tools page first.' },
      { q: 'Can I use it as a bulk email verifier for scraped or purchased lists?', a: 'Yes — upload any list, scraped, purchased or exported, and Coldcast runs live MX and SMTP checks on every address, flags catch-alls, and returns a clean, segmented, send-safe file.' },
    ],
    cta: {
      title: 'Clean your list before you send.',
      subtitle: 'Real-time, catch-all-aware verification that protects your sender reputation.',
    },
  },

  // ──────────────────────────── Domain Enrichment ───────────────────────────
  'domain-enrichment': {
    slug: 'domain-enrichment',
    kind: 'product',
    emoji: '🌐',
    color: 'magenta',
    heroVariant: 'split',
    howVariant: 'timeline',
    featuresVariant: 'grid',
    order: ['how', 'features', 'stats', 'benefits', 'faq'],
    hero: {
      eyebrow: 'Domain Enrichment',
      title: 'Domain enrichment: turn any domain into firmographics, tech & contacts.',
      subtitle:
        'Give Coldcast a domain; get back fresh company data, technographics and verified contacts — enriched with waterfall and catch-all-cleaned, at 3x lower cost.',
      badges: ['Real-time fresh data', 'Verified contacts', '3x more affordable'],
    },
    how: {
      heading: 'A domain in. A full company profile out.',
      subtitle: 'One column of domains becomes a complete dataset.',
      steps: [
        { emoji: '📤', title: 'Upload domains', desc: 'A single domain or a whole column of them.' },
        { emoji: '🔎', title: 'Fetch fresh firmographics', desc: 'Industry, size, location and description, pulled live.' },
        { emoji: '🧱', title: 'Detect the tech stack', desc: 'Technographics reveal what each company runs.' },
        { emoji: '💧', title: 'Find & enrich contacts', desc: 'Waterfall enrichment adds verified people at the company.' },
        { emoji: '✅', title: 'Verify catch-alls', desc: 'Every email is checked and risky catch-alls removed.' },
        { emoji: '🔌', title: 'Export or sync', desc: 'Clean profiles into your CRM or sequences.' },
      ],
    },
    features: {
      heading: 'Everything behind a domain, in one row.',
      subtitle: 'Firmographics, technographics and people — verified.',
      items: [
        { emoji: '🔄', title: 'Real-time fresh data', desc: 'Pulled live, never a stale database row.' },
        { emoji: '🏢', title: 'Firmographics', desc: 'Industry, headcount, location and description.' },
        { emoji: '🧱', title: 'Technographics', desc: 'See the tools and stack each company runs.' },
        { emoji: '💧', title: 'Verified contacts', desc: 'Waterfall-enriched people with valid emails and phones.' },
        { emoji: '✅', title: 'Catch-all verified', desc: 'Risky addresses tested and filtered out.' },
        { emoji: '💸', title: '3x more affordable', desc: 'A fraction of what the data giants charge.' },
      ],
    },
    stats: [
      { value: '3x', label: 'more affordable' },
      { value: 'Real-time', label: 'fresh data' },
      { value: 'Tech', label: '+ firmographics' },
      { value: '99%', label: 'valid contacts' },
    ],
    benefits: {
      heading: 'Why enrich domains with Coldcast.',
      items: [
        { emoji: '🎯', title: 'Target with context', desc: 'Firmographics and tech help you pick and pitch the right accounts.' },
        { emoji: '💧', title: 'Contacts included', desc: 'Not just company data — the verified people to reach.' },
        { emoji: '💸', title: 'Three times cheaper', desc: 'Enterprise-grade enrichment without the enterprise bill.' },
      ],
    },
    faq: [
      { q: 'What do I get from a domain?', a: 'Firmographics (industry, size, location), technographics, and verified contacts at the company.' },
      { q: 'Are the contacts verified?', a: 'Yes — waterfall enrichment plus catch-all cleaning means send-ready emails.' },
      { q: 'Is the data fresh?', a: 'Everything is pulled in real time, so you’re not relying on a stale database.' },
      { q: 'How affordable is it?', a: 'Around 3x cheaper than the big data providers, with no contract.' },
      { q: 'How does domain-to-company enrichment work?', a: 'Give Coldcast a domain and it returns that company’s firmographics (industry, size, location), its tech stack, and verified contacts at the company — waterfall-enriched and catch-all cleaned.' },
    ],
    cta: {
      title: 'Turn a list of domains into pipeline.',
      subtitle: 'Fresh firmographics, tech and verified contacts — for a third of the price.',
    },
  },
}
