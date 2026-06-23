import { Bot, PenLine, CalendarCheck, Repeat, ArrowRight } from 'lucide-react'
import Reveal from './Reveal'
import Button from './Button'
import { Eyebrow } from './SectionHeading'
import { TRIAL_URL } from '../lib/constants'

const POINTS = [
  { icon: PenLine, title: 'Personalised at scale', desc: 'Opens with the exact buying signal it found on each lead.' },
  { icon: Repeat, title: 'Follows up for you', desc: 'Handles replies and multi-step sequences automatically.' },
  { icon: CalendarCheck, title: 'Books the meeting', desc: 'Keeps going until it lands a slot on your calendar.' },
]

export default function AiSdr() {
  return (
    <section id="ai-sdr" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/12 blur-[150px]" />
      </div>

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <Reveal>
              <Eyebrow>
                <Bot size={13} className="text-brand-light" />
                AI SDR · new
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-7 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Your leads don’t sit in a CSV. Your{' '}
                <span className="text-gradient">AI SDR</span> works them.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                The moment a lead is scraped, enriched and verified, your AI SDR can take over —
                writing, sending and following up so the pipeline runs while you sleep.
              </p>
            </Reveal>

            <ul className="mt-8 flex flex-col gap-5">
              {POINTS.map(({ icon: Icon, title, desc }, i) => (
                <Reveal as="li" key={title} delay={0.12 + i * 0.06} className="flex gap-3.5">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-brand-gradient-soft text-brand-light">
                    <Icon size={17} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.32} className="mt-9">
              <Button as="a" href={TRIAL_URL} variant="primary" size="lg">
                Try the AI SDR free
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Reveal>
          </div>

          {/* Faux AI email card */}
          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-md rounded-2xl border border-hairline bg-white/[0.04] p-5 shadow-card backdrop-blur-md">
              <div className="flex items-center gap-3 border-b border-hairline pb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-xs font-semibold text-white">
                  AI
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-ink">AI SDR</div>
                  <div className="text-xs text-muted">drafting · just now</div>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-safe/15 px-2.5 py-1 text-[11px] font-medium text-safe">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-safe opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-safe" />
                  </span>
                  live
                </span>
              </div>

              <div className="mt-4 space-y-1 text-sm">
                <div className="text-xs text-muted">To: tiffanie.k@illumenature.com</div>
                <div className="font-medium text-ink">Quick one on your new CRO role 👋</div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink/85">
                Hi Tiffanie — saw you just stepped into the CRO seat at illumenature. Most new revenue
                leaders are rebuilding their outbound stack in month one — worth 15 minutes on how teams
                like yours pull verified pipeline without the busywork?
              </p>

              <div className="mt-4 flex items-center gap-2 border-t border-hairline pt-4">
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-muted">
                  signal: new-in-role
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand/20 px-2.5 py-1 text-[11px] font-medium text-brand-light">
                  sent
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-safe/15 px-2.5 py-1 text-[11px] font-medium text-safe">
                  replied
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
