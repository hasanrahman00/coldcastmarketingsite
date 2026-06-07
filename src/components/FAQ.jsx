import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const FAQS = [
  {
    q: 'Is it safe for my LinkedIn account?',
    a: 'Yes — that’s the whole point of Coldcast. It runs through your own browser session and IP, only on pages you’re already logged into, at human pace with natural scrolling and click-to-next pagination. There are no headless browsers, no API hammering, and no bot fingerprints. We’ve used it daily with internal sales teams for 6+ months with zero account bans.',
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
    q: 'Can I cancel anytime?',
    a: 'Yes. Plans are month-to-month and you can upgrade, downgrade, or cancel whenever you like.',
  },
]

function FaqItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-panel/50 backdrop-blur-sm transition-colors hover:border-white/15">
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
            className={`shrink-0 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
            transition={{ duration: 0.28, ease: 'easeInOut' }}
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
          title="Questions, answered."
          subtitle="Everything reps ask before their first export."
        />

        <Reveal delay={0.1} className="mx-auto mt-12 flex max-w-3xl flex-col gap-4">
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
