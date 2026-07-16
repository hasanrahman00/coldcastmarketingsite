import { useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, Database, Linkedin, Rocket } from 'lucide-react'
import { TRIAL_URL, DEMO_URL, CUSTOMER_COUNT, SAMPLE_LEADS } from '../lib/constants'

// ── Hero content ─────────────────────────────────────────────
const STATS = [
  { num: '20,000', label: 'leads / day', mint: false },
  { num: '10,000', label: 'leads / hour', mint: false },
  { num: '0', label: 'account bans', mint: true },
  { num: '99%', label: 'valid emails', mint: true },
]

// Overlapping proof avatars — descending mint shades, dark initials.
const AVATARS = [
  { initials: 'JT', bg: '#63e6c5', fg: '#062119' },
  { initials: 'MK', bg: '#3fc9a8', fg: '#062119' },
  { initials: 'AL', bg: '#2ba98c', fg: '#062119' },
  { initials: '+', bg: '#1f8c74', fg: '#c9f6ea' },
]

// ── Dashboard mock content ───────────────────────────────────
const MINI_STATS = [
  { num: '20,000', label: 'leads / day', mint: false },
  { num: '99%', label: 'valid emails', mint: true },
  { num: '0', label: 'account bans', mint: true },
]

// Sidebar skeleton bars — the first one is the "active" nav item.
const SKELETONS = [
  { w: '82%', active: true },
  { w: '64%' },
  { w: '74%' },
  { w: '52%' },
  { w: '68%' },
  { w: '44%' },
  { gap: true },
  { w: '74%' },
  { w: '44%' },
]

const BARS = [
  { label: 'Scrape queue · Sales Navigator', pct: '62%', delay: '.6s' },
  { label: 'Waterfall enrichment', pct: '87%', delay: '.75s' },
  { label: 'Email verification', pct: '99%', delay: '.9s' },
]

// Chart geometry — copied verbatim from the mock.
const CHART_LINE = 'M0 132 C55 124 85 88 135 92 C185 96 205 62 255 66 C305 70 325 44 375 34 C415 26 465 34 520 16'
const CHART_AREA = `${CHART_LINE} L520 170 L0 170 Z`

const SOURCES = [
  { name: 'LinkedIn Sales Navigator', icon: Linkedin },
  { name: 'Apollo', icon: Rocket },
  { name: 'ZoomInfo', icon: Database },
]

export default function Hero() {
  const reduce = useReducedMotion()

  // CSS-driven entrance/draw/fill animations, gated on reduced-motion.
  const anim = (value) => (reduce ? undefined : value)

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-40 sm:pt-44">
      <div className="container-px">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
          {/* ── Left column ─────────────────────────────── */}
          <div>
            <span className="mb-7 inline-flex items-center gap-[9px] rounded-full border border-[rgba(53,224,184,0.28)] bg-brand/15 px-[15px] py-[7px] text-[13px] font-semibold tracking-[0.01em] text-accent">
              <span
                aria-hidden
                className="h-[7px] w-[7px] flex-none rounded-full bg-brand"
                style={{ animation: anim('pill-pulse 2.4s ease-in-out infinite') }}
              />
              Premium account-safe scraping
            </span>

            <h1 className="mb-6 font-display text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-[1.04] tracking-[-0.035em] text-ink">
              The world&rsquo;s{' '}
              <span className="bg-[linear-gradient(100deg,#4ce8c3,#8ff2da)] bg-clip-text text-transparent">
                safest
              </span>{' '}
              Sales Navigator scraper.
            </h1>

            <p className="mb-9 max-w-[520px] text-[17.5px] leading-[1.65] text-muted">
              One subscription replaces your GTM stack — scrape Sales Navigator, Apollo &amp; ZoomInfo at zero
              ban risk, pull triple-verified emails &amp; phone numbers, and let the AI SDR run your outreach.
            </p>

            <div className="mb-8 flex flex-wrap gap-[14px]">
              <a
                href={TRIAL_URL}
                className="group inline-flex items-center justify-center gap-[9px] rounded-xl bg-brand-gradient px-7 py-[15px] text-[15.5px] font-semibold text-[#062119] shadow-brand-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-brand-btn-hover"
              >
                Start free trial
                <ArrowRight size={15} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={DEMO_URL}
                className="inline-flex items-center justify-center rounded-xl border border-hairline-strong px-7 py-[15px] text-[15.5px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-light/50 hover:bg-brand/[0.06]"
              >
                Book a demo
              </a>
            </div>

            {/* Proof row */}
            <div className="flex items-center gap-[14px] text-[13.5px] font-medium text-faint">
              <div aria-hidden className="flex">
                {AVATARS.map((a) => (
                  <span
                    key={a.initials}
                    className="-mr-[9px] grid h-7 w-7 flex-none place-items-center rounded-full border-2 border-bg text-[10px] font-bold"
                    style={{ background: a.bg, color: a.fg }}
                  >
                    {a.initials}
                  </span>
                ))}
              </div>
              <span className="pl-[9px]">Tested by {CUSTOMER_COUNT} sales professionals</span>
            </div>

            {/* Stats row */}
            <div className="mt-11 grid w-fit grid-cols-2 gap-8 border-t border-hairline pt-8 sm:grid-cols-4 sm:gap-10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div
                    className={`font-display text-[26px] font-bold tracking-[-0.02em] ${
                      s.mint ? 'text-accent' : 'text-ink'
                    }`}
                  >
                    {s.num}
                  </div>
                  <div className="mt-0.5 text-[12.5px] font-medium text-faint">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — dashboard mock ───────────── */}
          <div className="relative">
            <div
              className="overflow-hidden rounded-2xl border border-hairline-strong bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              style={{ animation: anim('rise .9s cubic-bezier(.2,.7,.2,1) both') }}
            >
              {/* Browser chrome */}
              <div className="flex h-[42px] items-center gap-2 bg-[linear-gradient(90deg,#35e0b8,#4ce8c3)] px-4">
                <span className="h-2.5 w-2.5 flex-none rounded-full bg-[rgba(6,33,25,0.55)]" />
                <span className="h-2.5 w-2.5 flex-none rounded-full bg-[rgba(6,33,25,0.38)]" />
                <span className="h-2.5 w-2.5 flex-none rounded-full bg-[rgba(6,33,25,0.22)]" />
                <span className="ml-[14px] flex h-[22px] max-w-[230px] flex-1 items-center overflow-hidden rounded-md bg-[rgba(6,33,25,0.28)] px-2.5 text-[10.5px] font-semibold tracking-[0.02em] text-[#06382b]">
                  app.coldcast.io/scrape
                </span>
              </div>

              <div className="grid min-h-[392px] grid-cols-[148px_1fr]">
                {/* Sidebar */}
                <div aria-hidden className="flex flex-col gap-[13px] border-r border-hairline bg-inset px-[14px] py-4">
                  {SKELETONS.map((s, i) =>
                    s.gap ? (
                      <div key="gap" className="flex-1" />
                    ) : (
                      <div
                        key={i}
                        className={`relative h-[9px] rounded-[5px] ${s.active ? 'bg-brand/15' : 'bg-white/[0.08]'}`}
                        style={{ width: s.w }}
                      >
                        {s.active && (
                          <span className="absolute -left-2 top-0.5 h-[5px] w-[5px] rounded-full bg-brand" />
                        )}
                      </div>
                    ),
                  )}
                </div>

                {/* Main */}
                <div className="flex flex-col gap-[14px] p-4">
                  {/* Mini stat cards */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {MINI_STATS.map((m) => (
                      <div key={m.label} className="rounded-[10px] border border-hairline bg-panel2 px-3 py-[11px]">
                        <div
                          className={`font-display text-base font-bold tracking-[-0.02em] ${
                            m.mint ? 'text-accent' : 'text-ink'
                          }`}
                        >
                          {m.num}
                        </div>
                        <div className="text-[10px] font-medium text-faint">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="rounded-[10px] border border-hairline bg-panel2 px-[14px] pb-2 pt-[13px]">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-faint">Leads scraped — last 7 days</span>
                      <span className="rounded-[5px] bg-brand/15 px-[7px] py-[3px] text-[10px] font-bold text-accent">
                        +2,431 today
                      </span>
                    </div>
                    <svg viewBox="0 0 520 170" fill="none" className="block h-auto w-full" aria-hidden>
                      <defs>
                        <linearGradient id="hero-chart-area" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="#35e0b8" stopOpacity=".28" />
                          <stop offset="1" stopColor="#35e0b8" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <g stroke="rgba(255,255,255,.06)" strokeWidth="1">
                        <line x1="0" y1="42" x2="520" y2="42" />
                        <line x1="0" y1="84" x2="520" y2="84" />
                        <line x1="0" y1="126" x2="520" y2="126" />
                      </g>
                      <path d={CHART_AREA} fill="url(#hero-chart-area)" />
                      <path
                        d={CHART_LINE}
                        fill="none"
                        stroke="#4ce8c3"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        style={
                          reduce
                            ? undefined
                            : {
                                strokeDasharray: 900,
                                strokeDashoffset: 900,
                                animation: 'draw 2.2s .4s cubic-bezier(.4,0,.2,1) forwards',
                              }
                        }
                      />
                      <circle cx="375" cy="34" r="4" fill="#0f1214" stroke="#4ce8c3" strokeWidth="2.5" />
                    </svg>
                  </div>

                  {/* Progress bars */}
                  <div className="flex flex-col gap-2.5">
                    {BARS.map((b) => (
                      <div key={b.label}>
                        <div className="mb-[5px] flex justify-between text-[10.5px] font-semibold text-faint">
                          <span>{b.label}</span>
                          <span className="text-muted">{b.pct}</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-[4px] bg-hairline">
                          <div
                            className="h-full origin-left rounded-[4px] bg-[linear-gradient(90deg,#35e0b8,#4ce8c3)]"
                            style={{
                              width: b.pct,
                              animation: anim(`fill 1.4s ${b.delay} cubic-bezier(.2,.7,.2,1) both`),
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating verified chip — overlaps the card edge on desktop */}
            <div
              className="mt-4 flex w-fit items-center gap-2.5 rounded-xl border border-[rgba(53,224,184,0.35)] bg-panel2 px-4 py-[11px] shadow-[0_18px_50px_rgba(0,0,0,0.55),0_0_24px_rgba(53,224,184,0.12)] lg:absolute lg:-left-7 lg:bottom-[34px] lg:mt-0"
              style={{ animation: anim('rise 1s .5s cubic-bezier(.2,.7,.2,1) both') }}
            >
              <span className="grid h-[30px] w-[30px] flex-none place-items-center rounded-full bg-brand/15">
                <Check size={14} strokeWidth={2.2} className="text-accent" />
              </span>
              <span>
                <small className="block text-[10px] font-semibold uppercase tracking-[0.06em] text-faint">
                  Verified
                </small>
                <b className="text-[12.5px] font-semibold text-ink">{SAMPLE_LEADS[0].email}</b>
              </span>
            </div>
          </div>
        </div>

        {/* ── Logo chips ───────────────────────────────── */}
        <div className="mt-[72px]">
          <div className="mb-[22px] text-center text-[12.5px] font-semibold uppercase tracking-[0.14em] text-faint">
            Works with the sources your pipeline already lives in
          </div>
          <div className="flex flex-wrap justify-center gap-[18px]">
            {SOURCES.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-[11px] rounded-2xl border border-hairline bg-panel px-7 py-[15px] text-[14.5px] font-semibold text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/35 hover:text-ink"
              >
                <Icon size={18} strokeWidth={1.6} className="flex-none opacity-85" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
