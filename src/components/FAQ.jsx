import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const FAQS = [
  {
    q: 'Is it safe for my LinkedIn account?',
    a: 'Yes — that’s the whole point of Coldcast. It runs through your own browser session and IP, only on pages you’re already logged into, at human pace with natural scrolling and click-to-next pagination. There are no headless browsers, no API hammering, and no bot fingerprints. We’ve used it daily with internal sales teams for 6+ months with zero account bans.',
  },
  {
    q: 'How is Coldcast different from other Sales Navigator scrapers?',
    a: 'Three ways. Speed: a typical 2,500-lead export takes minutes, not the 30 minutes to two hours cloud scrapers need. Safety: Coldcast runs in your own browser on your own IP and session — most other scrapers spin up a cloud browser on shared IPs and ask for your LinkedIn password, which is exactly what gets accounts suspended. And data: every lead comes back already enriched with verified emails, phone numbers and buying-intent signals, where other tools hand you a raw export you still have to clean and enrich yourself.',
  },
  {
    q: 'What intent signals does Coldcast capture?',
    a: 'Every export doubles as a signal layer, pulled live from your own Sales Navigator session — not from a stale third-party database. On the person side: job changes and new roles, promotions, time in current role, seniority and decision-maker fit, and recent LinkedIn activity. On the company side: headcount and growth, hiring activity, industry and firmographics, and company size. We tier them honestly — a recent job change or fast headcount growth carries real weight, while lighter signals are labelled as supporting context — so you can filter for clusters and time your outreach instead of blasting a flat list. (The richest signals depend on your Sales Navigator plan.)',
  },
  {
    q: 'Do I need Lusha, SalesQL, or ContactOut accounts?',
    a: 'They’re optional. Coldcast enriches using whichever of these sources you’re already logged into — the more sources you connect, the more coverage you get on emails and phone numbers. You can also run it with just LinkedIn data if you prefer.',
  },
  {
    q: 'How accurate is the data, and how many data points do I get per lead?',
    a: 'Coldcast captures 30+ fields per lead — the profile and company data from Sales Navigator, plus emails and phones run through a waterfall across Lusha, SalesQL, and ContactOut in a single pass, so you export already enriched instead of cleaning up a raw CSV later. Contacts are verified, not guessed: every email passes a validation step before it lands in your file, so you can trust what you send.',
  },
  {
    q: 'How fast is Coldcast — how long does it take to export leads?',
    a: 'Fast. Most exports finish in minutes — a 2,500-lead list typically takes around five minutes, where other Sales Navigator scrapers can take 30 minutes to two hours for the same job. Because it runs at a natural, human pace in your own browser, you get the speed without the bot-like bursts that trip LinkedIn’s defences. You can pull up to roughly 20,000 leads per account, per day.',
  },
  {
    q: 'Does “unlimited scraping” really mean unlimited?',
    a: 'Unlimited scraping means there’s no monthly quota and no per-export cap — connect as many accounts as you like and run as many jobs as you need. For fair use, and to protect every account from abuse, there’s a safety ceiling of roughly 20,000 leads per account, per day — which also happens to be the safe daily limit for keeping a LinkedIn account healthy. In normal day-to-day prospecting you’ll never hit it.',
  },
  {
    q: 'What formats can I export?',
    a: 'CSV and XLSX. Both download as clean, de-duplicated spreadsheets — signal columns included — that drop straight into your CRM or sequencer.',
  },
  {
    q: 'Does it work with regular LinkedIn or just Sales Navigator?',
    a: 'Coldcast is built specifically for Sales Navigator search — that’s where the structured, filterable lead data and richest signals live, and where Coldcast captures the exact search you’re viewing.',
  },
  {
    q: 'Is Coldcast GDPR-ready, and who owns the exported data?',
    a: 'Your data stays yours. Scraping runs entirely in your own browser session, so your leads never pass through our servers, and we never sell your data or ask for your LinkedIn password. We handle personal data on a compliant footing and support data-access and deletion requests — full detail lives in our Privacy Policy. One honest note: scraping LinkedIn runs against its Terms of Service no matter which tool you use. Coldcast is built to reduce account risk — your own session, human pace, no headless bots, no API hammering — not to promise something we can’t guarantee.',
  },
  {
    q: 'Where does my data go?',
    a: 'Only to your own Coldcast workspace. Your leads are yours — we don’t sell or share your data with anyone.',
  },
  {
    q: 'Is Coldcast free to try?',
    a: 'Yes. Every account starts with a free trial — connect an account, scrape unlimited leads, and use your free enrichment credits to test the verified emails and catch-all cleaning before you pay anything. No credit card is required to start, and scraping itself stays free on every plan; you only pay to enrich and verify the contacts you choose.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Plans are month-to-month and you can upgrade, downgrade, or cancel whenever you like.',
  },
]

function FaqItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-panel/60 shadow-card backdrop-blur-sm transition-colors hover:border-hairline-strong">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        >
          <span className="text-base font-semibold text-ink">{item.q}</span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-accent transition-transform duration-[400ms] ease-[cubic-bezier(.22,.61,.36,1)] ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="FAQ"
          eyebrowIcon={HelpCircle}
          title="Questions, answered."
          subtitle="Everything reps ask before their first export."
        />

        <Reveal delay={0.1} className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
