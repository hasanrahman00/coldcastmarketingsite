import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight, Check, Mail, Search, Bell, Inbox, Users, Link2, Eye, ListChecks, ShieldCheck, Zap, BadgePercent,
} from 'lucide-react'
import Reveal from './../components/Reveal'
import SectionHeading, { Eyebrow } from './../components/SectionHeading'

// ── Email activation form ─────────────────────────────────────────────────────
// [PLACEHOLDER] Wire `submit` to a real endpoint (Formspree / Resend / your API)
// that emails the activation link. Right now it validates + shows a success state.
function ActivationForm({ id = 'activate', autoFocus = false }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  const submit = (e) => {
    e.preventDefault()
    if (!valid) return
    // TODO: POST { email } to the activation endpoint here.
    setSent(true)
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-3 rounded-2xl border border-safe/30 bg-safe/10 p-5 text-left"
      >
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-safe/20 text-safe">
          <Check size={18} strokeWidth={3} />
        </span>
        <div>
          <div className="text-sm font-semibold text-ink">Activation link on its way 🎉</div>
          <p className="mt-1 text-sm leading-relaxed text-muted">
            We’ve sent your Sales Navigator Advanced activation link to{' '}
            <span className="font-medium text-ink">{email.trim()}</span>. Click it to switch your plan
            on — usually within a few minutes.
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <div className="relative flex-1">
          <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            id={id}
            type="email"
            autoFocus={autoFocus}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            aria-label="Your email for the activation link"
            className="w-full rounded-xl border border-hairline bg-white/[0.05] py-3.5 pl-10 pr-3 text-sm text-ink placeholder:text-muted/60 focus:border-lime/50 focus:outline-none focus:ring-2 focus:ring-lime/30"
          />
        </div>
        <button
          type="submit"
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-lime-gradient px-6 py-3.5 text-sm font-semibold text-lime-ink shadow-lime-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lime-btn-hover focus-visible:ring-lime"
        >
          Get my activation link
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
      <p className="mt-2.5 text-xs text-muted">No card needed to start · activation link sent to your inbox · cancel anytime.</p>
    </form>
  )
}

// ── Plan card (hero visual) ───────────────────────────────────────────────────
const INCLUDED = ['50 InMail credits / month', 'Advanced search filters', 'Saved searches & alerts', 'Lead & account lists', 'TeamLink network access', 'Smart Links tracking']
function PlanCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-hairline bg-white/[0.04] p-7 shadow-card backdrop-blur-md">
      <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand/25 blur-[70px]" />
      <div className="relative flex items-center justify-between">
        <span className="text-sm font-semibold text-ink">Sales Navigator Advanced</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-brand/20 px-2.5 py-1 text-[11px] font-bold text-brand">−75%</span>
      </div>
      <div className="relative mt-5 flex items-end gap-2">
        <span className="font-display text-5xl font-bold tracking-tight text-ink">$25</span>
        <span className="pb-1.5 text-sm text-muted">/ month</span>
        <span className="pb-2 ml-1 text-sm text-muted line-through">$99</span>
      </div>
      <ul className="relative mt-6 space-y-2.5">
        {INCLUDED.map((f, i) => (
          <motion.li
            key={f}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex items-center gap-2.5 text-sm text-ink/85"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand">
              <Check size={11} strokeWidth={3} />
            </span>
            {f}
          </motion.li>
        ))}
      </ul>
      <div className="relative mt-6 rounded-xl bg-brand-gradient px-4 py-2.5 text-center text-sm font-semibold text-[#062119]">
        Activate with just your email
      </div>
    </div>
  )
}

const FEATURES = [
  { icon: Search, title: 'Advanced lead & account search', desc: 'Unlock the full filter set — seniority, headcount growth, intent and Boolean search.' },
  { icon: Inbox, title: '50 InMail credits a month', desc: 'Message prospects directly, even when you’re not connected.' },
  { icon: Bell, title: 'Saved searches & real-time alerts', desc: 'Get pinged the moment a lead changes role, posts, or matches your filters.' },
  { icon: ListChecks, title: 'Lead & account lists', desc: 'Organise and track your entire book of business in one place.' },
  { icon: Eye, title: 'Who viewed your profile (90 days)', desc: 'Full visibility into who’s checking you out — and a reason to reach back.' },
  { icon: Users, title: 'TeamLink network access', desc: 'See and tap warm-intro paths across your whole network.' },
  { icon: Link2, title: 'Smart Links', desc: 'Share content and see exactly who opened it and how long they spent.' },
  { icon: Zap, title: 'Unlimited search', desc: 'No commercial-use limit — prospect as much as you want.' },
]

const STEPS = [
  { icon: Mail, title: 'Enter your email', desc: 'Drop in the email tied to your LinkedIn account.' },
  { icon: Link2, title: 'We send an activation link', desc: 'Check your inbox — your secure activation link arrives in minutes.' },
  { icon: Check, title: 'Click to activate', desc: 'Sales Navigator Advanced switches on for your account. Done.' },
]

const BENEFITS = [
  { icon: BadgePercent, title: '75% off list price', desc: 'The full Advanced plan for $25/month instead of $99+.' },
  { icon: Zap, title: 'Activate in minutes', desc: 'No sales call, no setup — just your email and a click.' },
  { icon: ShieldCheck, title: 'Pairs with Coldcast', desc: 'Find leads in Advanced, then export them account-safely with Coldcast.' },
]

const FAQ = [
  { q: 'Is this the real Sales Navigator Advanced?', a: 'Yes — the full Advanced plan with every feature, on your own LinkedIn account. Nothing is stripped out.' },
  { q: 'How do I activate it?', a: 'Enter your email, open the activation link we send you, and click it. Advanced switches on for your account within minutes.' },
  { q: 'How is it 75% cheaper?', a: 'Through our partner program we secure Advanced seats in volume and pass the savings straight on to you — so you pay $25/month instead of $99+.' },
  { q: 'Is my LinkedIn account safe?', a: 'It’s a standard upgrade on your own account. And when you pair it with Coldcast, your scraping runs in your own browser at human pace — never a cloud bot.' },
  { q: 'Can I cancel?', a: 'Yes — it’s billed monthly and you can cancel anytime.' },
]

export default function SalesNavAdvancedPage() {
  const reduce = useReducedMotion()
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ backgroundImage: 'radial-gradient(95% 75% at 50% -10%, rgba(53,224,184,0.16), transparent 60%), radial-gradient(60% 50% at 85% 0%, rgba(34,211,238,0.10), transparent 55%), linear-gradient(180deg,#0f1214,#08090b)' }}
        />
        <div className="container-px relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-lime">
                <BadgePercent size={13} /> 75% off · limited deal
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.1rem]">
                LinkedIn Sales Navigator Advanced — <span className="text-gradient">$25/month</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink/65 sm:text-lg">
                The full Advanced plan — advanced search, 50 InMails, alerts, lists and TeamLink — for a flat
                <span className="font-semibold text-ink"> $25 a month</span>, not $99+. Activate with just your email.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <ActivationForm autoFocus />
            </Reveal>
            <Reveal delay={0.26} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink/60">
              {['Full Advanced features', 'Activates in minutes', 'Cancel anytime'].map((b) => (
                <span key={b} className="inline-flex items-center gap-1.5"><Check size={15} className="text-brand" />{b}</span>
              ))}
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative">
              <motion.span
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand/20 blur-2xl"
                animate={reduce ? {} : { opacity: [0.5, 0.85, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <PlanCard />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What you get */}
      <section className="container-px py-20 sm:py-24">
        <SectionHeading
          eyebrow="What you get"
          title="Every Sales Navigator Advanced feature — unlocked."
          subtitle="The complete Advanced toolkit that serious prospectors pay full price for."
        />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, delay: (i % 4) * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
              className="group rounded-2xl border border-hairline bg-white/[0.03] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white/[0.05] hover:shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand ring-1 ring-brand/30">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Price comparison strip */}
      <section className="container-px py-8">
        <Reveal className="floating-panel mx-auto flex max-w-3xl flex-col items-center gap-6 p-8 text-center sm:flex-row sm:justify-between sm:p-10 sm:text-left">
          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-muted">LinkedIn list price</div>
            <div className="mt-1 font-display text-3xl font-bold text-muted line-through">$99<span className="text-lg">/mo</span></div>
          </div>
          <ArrowRight className="hidden text-brand sm:block" size={24} />
          <div>
            <div className="text-sm font-medium uppercase tracking-wider text-brand">Your price with Coldcast</div>
            <div className="mt-1 bg-gradient-to-br from-brand via-brand-light to-accent bg-clip-text font-display text-4xl font-bold text-transparent">$25<span className="text-xl text-muted">/mo</span></div>
          </div>
          <div className="rounded-full bg-brand/15 px-4 py-2 text-sm font-bold text-brand">You save 75%</div>
        </Reveal>
      </section>

      {/* Benefits */}
      <section className="container-px py-20 sm:py-24">
        <SectionHeading eyebrow="Why grab it" title="The same plan, three quarters off." />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.12}>
              <div className="h-full rounded-2xl border border-hairline bg-white/[0.03] p-6 shadow-card">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand ring-1 ring-brand/30">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How activation works */}
      <section className="container-px py-20 sm:py-24">
        <SectionHeading eyebrow="Activation" title="All it takes is your email." subtitle="No sales call, no paperwork — three steps and you’re live." />
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative overflow-hidden rounded-2xl border border-hairline bg-white/[0.03] p-6"
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand to-brand-light" />
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/15 text-brand ring-1 ring-brand/30">
                  <Icon size={20} />
                </span>
                <span className="font-display text-2xl font-bold text-brand opacity-40">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-px py-20 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />
        <div className="mx-auto mt-12 max-w-2xl divide-y divide-hairline border-y border-hairline">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink sm:text-base">
                {item.q}
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-px py-20 sm:py-28">
        <Reveal className="floating-panel relative mx-auto max-w-3xl overflow-hidden p-10 text-center sm:p-14">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-64 w-[640px] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px]" />
          </div>
          <h2 className="relative text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Get Sales Nav Advanced for $25/month.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Enter your email and we’ll send the activation link. Live in minutes.
          </p>
          <div className="relative mx-auto mt-8 max-w-xl">
            <ActivationForm id="activate-bottom" />
          </div>
        </Reveal>
      </section>
    </>
  )
}
