import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import EmailVerifier from '../components/EmailVerifier'
import FinalCTA from '../components/FinalCTA'
import { TRIAL_URL } from '../lib/constants'

const MORE_TOOLS = [
  { emoji: '📋', title: 'Bulk email verification', desc: 'Clean a whole list — MX, SMTP & catch-all checks at scale.', tag: 'In the app', to: TRIAL_URL },
  { emoji: '🔎', title: 'Email finder', desc: 'Find a verified work email from a name + company.', tag: 'In the app', to: TRIAL_URL },
  { emoji: '🌐', title: 'Domain enrichment', desc: 'Turn a domain into firmographics, tech & contacts.', tag: 'In the app', to: TRIAL_URL },
  { emoji: '🧹', title: 'Catch-all cleaner', desc: 'Separate safe-to-send catch-alls from the risky ones.', tag: 'In the app', to: TRIAL_URL },
]

export default function FreeToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tools"
        title="Free GTM tools. No login, no card."
        subtitle="Run them right here in your browser. When you need scale, the full toolkit is one trial away."
      />

      <EmailVerifier />

      <section className="container-px pb-8 sm:pb-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">More tools in Coldcast</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-sm leading-relaxed text-muted">
          Bulk, automated versions of every free tool — plus finding, enriching and sending — live inside the app.
        </p>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {MORE_TOOLS.map((t) => (
            <a
              key={t.title}
              href={t.to}
              className="group flex items-start gap-4 rounded-2xl border border-hairline bg-black/[0.025] p-5 transition-colors hover:border-black/15 hover:bg-black/[0.05]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-hairline bg-brand-gradient-soft text-[20px] leading-none">
                {t.emoji}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-ink">{t.title}</h3>
                  <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-semibold text-brand">{t.tag}</span>
                </div>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{t.desc}</p>
              </div>
              <ArrowRight size={16} className="ml-auto mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
