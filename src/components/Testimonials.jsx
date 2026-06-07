import { Star, Quote } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

// [PLACEHOLDER] Sample testimonials shown for layout. Replace every quote and
// attribution with real, consenting customers (ideally photo + LinkedIn handle)
// and make sure each number matches that user's real export logs before launch.
const TESTIMONIALS = [
  {
    quote:
      'We pulled thousands of leads with verified emails over weeks of daily exports — zero warnings on my Sales Nav account. The signal columns are the real unlock: I filter for job changes plus headcount growth and only reach people who actually have a reason to reply.',
    name: 'Alex Rivera',
    role: 'Founder',
    company: 'Northbeam Outbound',
  },
  {
    quote:
      'It runs in my own browser at my pace, so I stopped worrying about a ban every time I exported. One pass gives me the list and verified emails and phones together — I’m not dumping a CSV into three other tools anymore.',
    name: 'Dana Whitfield',
    role: 'SDR Lead',
    company: 'Loop Analytics',
  },
  {
    quote:
      'Sorting exports by new-in-role and recent funding changed how my team books meetings — we hit the new VPs inside their first 90 days instead of cold-listing everyone. Same effort, far better timing.',
    name: 'Marco Ferraro',
    role: 'Head of Growth',
    company: 'Cadence Labs',
  },
]

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
}

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Proof"
          title="Reps run it daily. Their accounts are still fine."
          subtitle="Operators using Coldcast to export, enrich, and time outreach on live Sales Navigator signals — without trading away their accounts."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-hairline bg-panel/60 p-6 backdrop-blur-sm sm:p-7">
                <Quote size={26} className="text-accent/40" aria-hidden />
                <div className="mt-3 flex items-center gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} className="fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                    {initials(t.name)}
                  </span>
                  <span className="text-sm">
                    <span className="block font-semibold text-ink">{t.name}</span>
                    <span className="block text-muted">
                      {t.role}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted/60">
          Sample testimonials shown for layout — replace with real, consenting customers before launch.
        </p>
      </div>
    </section>
  )
}
