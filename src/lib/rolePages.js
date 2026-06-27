// Content for every "by role" detail page, keyed by slug.
// Same schema as productPages.js — rendered by the shared <ProductDetailPage>.

export const ROLE_PAGES = {
  // ───────────────────────────── SDRs & AEs ─────────────────────────────────
  'sdrs-aes': {
    slug: 'sdrs-aes',
    kind: 'role',
    emoji: '🎯',
    color: 'brand',
    hero: {
      eyebrow: 'For SDRs & AEs',
      title: 'Hit quota without the grind of building lists.',
      subtitle:
        'Coldcast finds, enriches and writes to your best-fit prospects — so you spend your day in conversations, not in spreadsheets and tab-hopping.',
      badges: ['Fuller pipeline', 'Less busywork', 'Personalised at scale'],
    },
    how: {
      heading: 'Your prospecting day, automated.',
      subtitle: 'From a search to a sequence, without the manual steps in between.',
      steps: [
        { emoji: '🎯', title: 'Define your ICP', desc: 'Build a Sales Navigator or Apollo search of exactly the buyers you want.' },
        { emoji: '⚡', title: 'Export at scale', desc: 'Pull thousands of leads in an hour — account-safe, from your own browser.' },
        { emoji: '💧', title: 'Enrich & verify', desc: 'Verified emails and direct dials are added automatically, ready to send.' },
        { emoji: '✍️', title: 'Personalise instantly', desc: 'Signal-based first lines are written for every contact, not copy-pasted.' },
        { emoji: '🚀', title: 'Push to your sequencer', desc: 'Send straight into Instantly, Smartlead or your CRM and start booking.' },
      ],
    },
    features: {
      heading: 'Everything you need to fill your own pipeline.',
      subtitle: 'The full outbound motion, minus the manual work.',
      items: [
        { emoji: '🧰', title: 'A pipeline, not a CSV', desc: 'Scrape, enrich, verify and personalise in one pass.' },
        { emoji: '🛡️', title: 'Account-safe', desc: 'Runs in your own browser at human pace — no risk to your LinkedIn.' },
        { emoji: '🧠', title: 'AI lead scoring', desc: 'Work the best-fit accounts first, not whoever’s at the top of the list.' },
        { emoji: '✍️', title: 'Signal-based copy', desc: 'Open every email with a real, specific reason to reply.' },
        { emoji: '⚡', title: 'Fast', desc: 'A full campaign’s worth of leads in a single sitting.' },
        { emoji: '🔌', title: 'Works with your stack', desc: 'Syncs to the sender and CRM you already use.' },
      ],
    },
    stats: [
      { value: '20k', label: 'leads / day' },
      { value: '10k', label: 'leads / hour' },
      { value: '3', label: '-step sequences' },
      { value: '0', label: 'account bans' },
    ],
    benefits: {
      heading: 'Why reps run Coldcast.',
      items: [
        { emoji: '📈', title: 'More meetings', desc: 'A fuller top-of-funnel means more booked calls every week.' },
        { emoji: '⏱️', title: 'Less admin', desc: 'Stop building lists by hand and get hours back for selling.' },
        { emoji: '🎯', title: 'Quota, hit', desc: 'Consistent, personalised volume is how you stay ahead of target.' },
      ],
    },
    faq: [
      { q: 'Will this get my LinkedIn flagged?', a: 'No — Coldcast runs in your own browser at human pace, the opposite of the cloud bots that get accounts suspended.' },
      { q: 'Do I still write the emails?', a: 'You don’t have to. Coldcast writes a signal-based first line and a 3-step sequence for every contact — edit if you like.' },
      { q: 'Does it fit my existing tools?', a: 'Yes — push enriched, verified leads straight into your sequencer and CRM.' },
    ],
    cta: {
      title: 'Spend your day selling, not list-building.',
      subtitle: 'Let Coldcast build and personalise your pipeline while you take the calls.',
    },
  },

  // ─────────────────────────────── Founders ─────────────────────────────────
  founders: {
    slug: 'founders',
    kind: 'role',
    emoji: '🚀',
    color: 'violet',
    hero: {
      eyebrow: 'For Founders',
      title: 'Go to market without a data budget or an SDR.',
      subtitle:
        'Coldcast is your whole outbound stack in one login — find buyers, verify them, and let the AI agent run sequences while you build the product.',
      badges: ['No team needed', 'One affordable login', 'Runs hands-off'],
    },
    how: {
      heading: 'Founder-led outbound, on autopilot.',
      subtitle: 'You set the target; the agent does the prospecting.',
      steps: [
        { emoji: '🎯', title: 'Describe your ICP', desc: 'Upload a list of target companies or a Sales Nav search of your buyers.' },
        { emoji: '🤖', title: 'Let the agent run', desc: 'Coldcast Agent extracts, scores, enriches and writes — completely hands-off.' },
        { emoji: '✍️', title: 'Personalised sequences', desc: 'Every contact gets a signal-based, 3-step cold sequence.' },
        { emoji: '🚀', title: 'Sent from your stack', desc: 'Sequences land in your sender or CRM, ready to go out.' },
        { emoji: '📈', title: 'Book meetings', desc: 'Wake up to replies while you focus on building.' },
      ],
    },
    features: {
      heading: 'The whole GTM stack, one founder can run.',
      subtitle: 'No data contracts, no headcount, no busywork.',
      items: [
        { emoji: '🤖', title: 'Hands-off agent', desc: 'Outbound that runs itself while you ship product.' },
        { emoji: '💸', title: 'Affordable', desc: 'One subscription replaces a stack of pricey tools.' },
        { emoji: '🧰', title: 'All-in-one', desc: 'Scrape, enrich, verify and send from a single login.' },
        { emoji: '🛡️', title: 'Account-safe', desc: 'No risk to your LinkedIn — runs in your own browser.' },
        { emoji: '⚡', title: 'Live in minutes', desc: 'No technical setup; install and go.' },
        { emoji: '🎯', title: 'ICP-scored', desc: 'Spend your limited time only on real fits.' },
      ],
    },
    stats: [
      { value: '6→1', label: 'tools replaced' },
      { value: '24/7', label: 'agent working' },
      { value: '0', label: 'SDRs to hire' },
      { value: '3x', label: 'cheaper stack' },
    ],
    benefits: {
      heading: 'Why founders start with Coldcast.',
      items: [
        { emoji: '⏱️', title: 'Your time back', desc: 'Outbound runs without you in the loop all day.' },
        { emoji: '💸', title: 'Capital-efficient', desc: 'One affordable tool instead of five subscriptions and a hire.' },
        { emoji: '📈', title: 'Pipeline from day one', desc: 'Start booking calls before you can afford a sales team.' },
      ],
    },
    faq: [
      { q: 'I’m not technical — can I run this?', a: 'Yes. Install the extension, connect your profile, and the agent does the rest. No code, no proxies.' },
      { q: 'Do I need to hire an SDR?', a: 'No — the Coldcast Agent handles research, enrichment and copywriting that an SDR would normally do.' },
      { q: 'Is it affordable for an early-stage team?', a: 'Yes — one subscription replaces a whole stack and starts on a free trial.' },
    ],
    cta: {
      title: 'Start a pipeline before you build a team.',
      subtitle: 'One login to find, verify and email your first thousand customers.',
    },
  },

  // ───────────────────────────── Sales leaders ──────────────────────────────
  'sales-leaders': {
    slug: 'sales-leaders',
    kind: 'role',
    emoji: '📈',
    color: 'cyan',
    hero: {
      eyebrow: 'For Sales leaders',
      title: 'Scale outbound your reps can trust — safely.',
      subtitle:
        'Give the team clean, enriched, scored pipeline and a scraper that won’t get accounts banned — so volume goes up and risk goes down.',
      badges: ['No account bans', 'Consistent data quality', 'Reps ramp faster'],
    },
    how: {
      heading: 'Standardise prospecting across the team.',
      subtitle: 'One safe, repeatable motion every rep can follow.',
      steps: [
        { emoji: '🎯', title: 'Set the ICP', desc: 'Define the searches and scoring that match your best customers.' },
        { emoji: '🛡️', title: 'Roll out safely', desc: 'Every rep scrapes from their own browser — no shared cloud, no bans.' },
        { emoji: '💧', title: 'Enrich & verify', desc: 'The team works from the same clean, validated contact data.' },
        { emoji: '🧠', title: 'Score & prioritise', desc: 'AI scoring keeps reps focused on the highest-fit accounts.' },
        { emoji: '📈', title: 'Push to the CRM', desc: 'Consistent, enriched records flow into your pipeline and reporting.' },
      ],
    },
    features: {
      heading: 'Volume and control, finally on the same team.',
      subtitle: 'Predictable pipeline without the account-risk headaches.',
      items: [
        { emoji: '🛡️', title: 'Account safety', desc: 'No foreign cloud bots — nothing that gets your reps suspended.' },
        { emoji: '🎯', title: 'Data quality', desc: 'Verified, catch-all-cleaned contacts the whole team can rely on.' },
        { emoji: '🧠', title: 'AI lead scoring', desc: 'Direct effort at the accounts most likely to close.' },
        { emoji: '🚀', title: 'Faster ramp', desc: 'New reps are productive on day one with a guided motion.' },
        { emoji: '📊', title: 'Predictable pipeline', desc: 'Consistent volume makes the forecast more reliable.' },
        { emoji: '🔌', title: 'CRM-native', desc: 'Clean records sync straight into your system of record.' },
      ],
    },
    stats: [
      { value: '0', label: 'account bans' },
      { value: '20k', label: 'leads / rep / day' },
      { value: '99%', label: 'valid contacts' },
      { value: '3x', label: 'cheaper stack' },
    ],
    benefits: {
      heading: 'Why sales leaders standardise on Coldcast.',
      items: [
        { emoji: '🛡️', title: 'Lower risk', desc: 'Protect the team’s LinkedIn accounts and your domain reputation.' },
        { emoji: '📈', title: 'More predictable', desc: 'Consistent, scored volume makes pipeline forecastable.' },
        { emoji: '💸', title: 'Lower cost per lead', desc: 'One tool replaces several, at a fraction of the cost.' },
      ],
    },
    faq: [
      { q: 'Is it safe to roll out across a whole team?', a: 'Yes — each rep runs in their own browser session and proxy, so there’s no shared cloud footprint to get flagged.' },
      { q: 'Will the data be consistent across reps?', a: 'Yes — everyone works from the same enrichment, verification and scoring, so quality is uniform.' },
      { q: 'Does it fit our CRM and reporting?', a: 'Yes — clean, enriched records sync into your CRM so your pipeline data stays trustworthy.' },
    ],
    cta: {
      title: 'Scale outbound without scaling risk.',
      subtitle: 'Give every rep a safe, repeatable, high-quality prospecting motion.',
    },
  },

  // ─────────────────────────────── Agencies ─────────────────────────────────
  agencies: {
    slug: 'agencies',
    kind: 'role',
    emoji: '💼',
    color: 'amber',
    hero: {
      eyebrow: 'For Agencies',
      title: 'Deliver verified leads for every client — profitably.',
      subtitle:
        'One platform to scrape, enrich and verify across all your client campaigns, at a cost that protects your margin and a quality that keeps clients.',
      badges: ['Every client, one login', 'Protects your margin', 'White-glove data'],
    },
    how: {
      heading: 'Run every client campaign from one place.',
      subtitle: 'Spin up, deliver and report — without a tool per client.',
      steps: [
        { emoji: '🗂️', title: 'Set up per client', desc: 'Define each client’s ICP and searches in one dashboard.' },
        { emoji: '⚡', title: 'Scrape at scale', desc: 'Pull big, account-safe lists for every campaign.' },
        { emoji: '💧', title: 'Enrich & verify', desc: 'Deliver only clean, validated, send-ready contacts.' },
        { emoji: '✍️', title: 'Personalise', desc: 'Signal-based copy per contact lifts every client’s reply rate.' },
        { emoji: '📤', title: 'Hand off', desc: 'Export or sync straight into the client’s CRM or sender.' },
      ],
    },
    features: {
      heading: 'Built for agency economics.',
      subtitle: 'Quality your clients notice, at a cost that keeps you profitable.',
      items: [
        { emoji: '🗂️', title: 'Multi-client', desc: 'Manage every campaign from a single platform.' },
        { emoji: '💸', title: '3x cheaper', desc: 'Lower data cost means a healthier margin on every retainer.' },
        { emoji: '🎯', title: 'White-glove data', desc: 'Catch-all-cleaned, 99%-valid contacts that make you look good.' },
        { emoji: '🛡️', title: 'Account-safe', desc: 'No bans — protect your clients’ LinkedIn accounts.' },
        { emoji: '⚡', title: 'Fast turnaround', desc: 'Deliver lists in hours, not days.' },
        { emoji: '🔌', title: 'Easy handoff', desc: 'Export or sync directly into each client’s stack.' },
      ],
    },
    stats: [
      { value: '∞', label: 'client campaigns' },
      { value: '3x', label: 'better margin' },
      { value: '99%', label: 'valid delivered' },
      { value: '0', label: 'account bans' },
    ],
    benefits: {
      heading: 'Why agencies run on Coldcast.',
      items: [
        { emoji: '💸', title: 'Higher margin', desc: 'Cut data costs without cutting quality.' },
        { emoji: '🎯', title: 'Happier clients', desc: 'Cleaner lists mean better results and longer retainers.' },
        { emoji: '⚡', title: 'Faster delivery', desc: 'Turn campaigns around in hours across every account.' },
      ],
    },
    faq: [
      { q: 'Can I manage multiple clients?', a: 'Yes — run every client’s searches, enrichment and exports from one platform.' },
      { q: 'How does it protect my margin?', a: 'Data and enrichment cost roughly 3x less than the big tools, so more of each retainer is profit.' },
      { q: 'Is it safe for client accounts?', a: 'Yes — scraping runs in-browser at human pace, so client LinkedIn accounts stay safe.' },
    ],
    cta: {
      title: 'Deliver better leads for less.',
      subtitle: 'Run every client campaign from one platform — and keep the margin.',
    },
  },

  // ──────────────────────────────── RevOps ──────────────────────────────────
  revops: {
    slug: 'revops',
    kind: 'role',
    emoji: '⚙️',
    color: 'safe',
    hero: {
      eyebrow: 'For RevOps',
      title: 'Clean, enriched, verified data on tap.',
      subtitle:
        'Feed your CRM and sequences a single source of fresh, validated contacts — no stale databases, no bounce problems, no duplicate sprawl.',
      badges: ['Real-time fresh', 'Catch-all cleaned', 'CRM-native'],
    },
    how: {
      heading: 'A clean data pipeline into your CRM.',
      subtitle: 'Fresh in, validated out — on demand or on schedule.',
      steps: [
        { emoji: '📥', title: 'Bring your records', desc: 'Names, domains or whole CRM segments that need enriching.' },
        { emoji: '🔄', title: 'Fetch fresh data', desc: 'Real-time enrichment, never a stale recycled database.' },
        { emoji: '✅', title: 'Verify & clean', desc: 'MX/SMTP checks and catch-all cleaning strip the risky rows.' },
        { emoji: '🧹', title: 'Dedupe & standardise', desc: 'Consistent, deduplicated records ready for the CRM.' },
        { emoji: '🔌', title: 'Sync', desc: 'Push clean contacts straight into your system of record.' },
      ],
    },
    features: {
      heading: 'The data layer your GTM team can trust.',
      subtitle: 'Hygiene, freshness and validation in one pipeline.',
      items: [
        { emoji: '🔄', title: 'Real-time freshness', desc: 'Data pulled live, so records don’t decay in a static table.' },
        { emoji: '✅', title: 'Catch-all cleaning', desc: 'Separate safe-to-send from risky, before it bounces.' },
        { emoji: '🧹', title: 'Hygiene & dedupe', desc: 'Standardised, deduplicated, consistent records.' },
        { emoji: '💧', title: 'Waterfall enrichment', desc: 'Fill gaps with verified emails, phones and firmographics.' },
        { emoji: '💸', title: '3x affordable', desc: 'Enterprise-grade data quality at a fraction of the cost.' },
        { emoji: '🔌', title: 'CRM integration', desc: 'Clean rows flow straight into your system of record.' },
      ],
    },
    stats: [
      { value: '99%', label: 'valid contacts' },
      { value: 'Real-time', label: 'fresh data' },
      { value: '3x', label: 'more affordable' },
      { value: '0', label: 'stale databases' },
    ],
    benefits: {
      heading: 'Why RevOps standardises on Coldcast.',
      items: [
        { emoji: '📬', title: 'Better deliverability', desc: 'Clean lists keep bounce rates and spam complaints down.' },
        { emoji: '🎯', title: 'Trustworthy CRM', desc: 'Fresh, deduplicated records your team actually believes.' },
        { emoji: '💸', title: 'Lower data spend', desc: 'One affordable source replaces several data vendors.' },
      ],
    },
    faq: [
      { q: 'Can it keep our CRM clean over time?', a: 'Yes — enrich and re-verify records on demand or in batches so your data doesn’t decay.' },
      { q: 'Do you handle catch-all domains?', a: 'Yes — catch-alls are tested and the risky ones separated to protect deliverability.' },
      { q: 'Does it integrate with our stack?', a: 'Yes — clean, enriched contacts sync straight into your CRM and sequences.' },
    ],
    cta: {
      title: 'Give your team data they can trust.',
      subtitle: 'Fresh, verified, deduplicated contacts flowing straight into your CRM.',
    },
  },

  // ─────────────────────────────── Recruiters ───────────────────────────────
  recruiters: {
    slug: 'recruiters',
    kind: 'role',
    emoji: '🔎',
    color: 'magenta',
    hero: {
      eyebrow: 'For Recruiters',
      title: 'Source verified candidate contacts, fast.',
      subtitle:
        'Find and verify candidate emails and direct dials from LinkedIn at scale — without risking your account or paying per-credit data prices.',
      badges: ['Verified contacts', 'No account bans', '3x more affordable'],
    },
    how: {
      heading: 'From a LinkedIn search to outreach-ready candidates.',
      subtitle: 'Source, verify and reach — in one safe workflow.',
      steps: [
        { emoji: '🔎', title: 'Search your talent pool', desc: 'Build a Sales Navigator search for the roles and skills you need.' },
        { emoji: '⚡', title: 'Export candidates', desc: 'Pull large candidate lists, account-safe, from your own browser.' },
        { emoji: '💧', title: 'Enrich & verify', desc: 'Add verified personal and work emails plus direct dials.' },
        { emoji: '✍️', title: 'Personalise outreach', desc: 'Signal-based first lines lift candidate reply rates.' },
        { emoji: '🔌', title: 'Sync to your ATS', desc: 'Push candidates straight into your ATS or CRM.' },
      ],
    },
    features: {
      heading: 'Candidate sourcing that actually reaches people.',
      subtitle: 'Real contact info, safely, at a price that scales.',
      items: [
        { emoji: '🔎', title: 'Candidate sourcing', desc: 'Export talent from LinkedIn Sales Navigator at scale.' },
        { emoji: '💧', title: 'Verified contact info', desc: 'Personal and work emails plus direct dials, validated.' },
        { emoji: '🛡️', title: 'Account-safe', desc: 'Runs in your own browser — no risk to your LinkedIn.' },
        { emoji: '⚡', title: 'Fast', desc: 'Thousands of candidate contacts in an hour.' },
        { emoji: '✍️', title: 'Signal-based outreach', desc: 'Personalised first lines that get candidates to respond.' },
        { emoji: '🔌', title: 'ATS / CRM sync', desc: 'Drop sourced candidates into the tools you already use.' },
      ],
    },
    stats: [
      { value: '10k', label: 'candidates / hour' },
      { value: '99%', label: 'valid contacts' },
      { value: '0', label: 'account bans' },
      { value: '3x', label: 'more affordable' },
    ],
    benefits: {
      heading: 'Why recruiters source with Coldcast.',
      items: [
        { emoji: '📈', title: 'More candidates reached', desc: 'Verified contact info means more replies per search.' },
        { emoji: '🛡️', title: 'Account stays safe', desc: 'Source at volume without getting your LinkedIn flagged.' },
        { emoji: '💸', title: 'Lower cost per hire', desc: 'A fraction of per-credit data-tool pricing.' },
      ],
    },
    faq: [
      { q: 'Do I get personal or work emails?', a: 'Both where available — waterfall enrichment finds and verifies the best contact for each candidate.' },
      { q: 'Is my LinkedIn at risk?', a: 'No — sourcing runs in your own browser at human pace, so your account stays safe.' },
      { q: 'Can I push candidates to my ATS?', a: 'Yes — export or sync sourced, verified candidates straight into your ATS or CRM.' },
    ],
    cta: {
      title: 'Reach more candidates, faster.',
      subtitle: 'Source verified candidate contacts at scale — safely and affordably.',
    },
  },
}
