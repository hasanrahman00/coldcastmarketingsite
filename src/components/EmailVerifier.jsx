import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MailCheck, Check, X, AlertTriangle, ArrowRight, Search } from 'lucide-react'
import Button from './Button'
import { TRIAL_URL } from '../lib/constants'

// Free / personal inbox providers.
const FREE = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'ymail.com', 'outlook.com',
  'hotmail.com', 'hotmail.co.uk', 'live.com', 'msn.com', 'aol.com', 'icloud.com', 'me.com',
  'mac.com', 'proton.me', 'protonmail.com', 'gmx.com', 'gmx.net', 'zoho.com', 'yandex.com', 'mail.com',
])

// Disposable / throwaway domains (common ones).
const DISPOSABLE = new Set([
  'mailinator.com', 'guerrillamail.com', '10minutemail.com', 'tempmail.com', 'temp-mail.org',
  'throwawaymail.com', 'getnada.com', 'trashmail.com', 'yopmail.com', 'sharklasers.com',
  'maildrop.cc', 'dispostable.com', 'fakeinbox.com', 'mailnesia.com', 'mintemail.com',
  'spamgourmet.com', 'mohmal.com', 'emailondeck.com', 'tempr.email', 'discard.email',
])

// Role / shared mailboxes (not a person).
const ROLE = new Set([
  'admin', 'administrator', 'info', 'support', 'sales', 'contact', 'hello', 'help', 'billing',
  'office', 'team', 'marketing', 'noreply', 'no-reply', 'abuse', 'postmaster', 'webmaster',
  'careers', 'jobs', 'hr', 'accounts', 'accounting', 'enquiries', 'inquiries', 'service', 'services',
])

const POPULAR = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'aol.com', 'proton.me', 'live.com']

function lev(a, b) {
  const m = a.length
  const n = b.length
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    }
  }
  return dp[m][n]
}

function verify(raw) {
  const email = (raw || '').trim().toLowerCase()
  if (!email) return null

  const syntaxRe = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/
  const valid = syntaxRe.test(email)
  const checks = [{ key: 'syntax', label: 'Valid email syntax', state: valid ? 'pass' : 'fail' }]
  if (!valid) return { email, verdict: 'invalid', score: 0, checks }

  const [local, domain] = email.split('@')

  let suggestion = null
  if (!FREE.has(domain)) {
    for (const p of POPULAR) {
      const d = lev(domain, p)
      if (d > 0 && d <= 2) { suggestion = p; break }
    }
  }
  checks.push(
    suggestion
      ? { key: 'typo', label: `Possible typo — did you mean @${suggestion}?`, state: 'warn' }
      : { key: 'typo', label: 'No obvious domain typo', state: 'pass' },
  )

  const disposable = DISPOSABLE.has(domain)
  checks.push({ key: 'disposable', label: disposable ? 'Disposable / throwaway domain' : 'Not a disposable domain', state: disposable ? 'fail' : 'pass' })

  const role = ROLE.has(local)
  checks.push({ key: 'role', label: role ? `Role-based address (${local}@)` : 'Personal, not a role mailbox', state: role ? 'warn' : 'pass' })

  const free = FREE.has(domain)
  checks.push({ key: 'type', label: free ? 'Free provider (personal inbox)' : 'Business / custom domain', state: free ? 'warn' : 'pass' })

  let score = 100
  if (disposable) score -= 60
  if (suggestion) score -= 35
  if (role) score -= 20
  if (free) score -= 10
  score = Math.max(0, score)

  const verdict = disposable || score < 40 ? 'risky' : score >= 75 ? 'good' : 'fair'
  return { email, verdict, score, checks }
}

const VERDICT = {
  good: { label: 'Looks deliverable', cls: 'text-safe', bar: 'bg-safe', ring: 'bg-safe/10 ring-safe/30' },
  fair: { label: 'Likely OK', cls: 'text-amber', bar: 'bg-amber', ring: 'bg-amber/10 ring-amber/30' },
  risky: { label: 'Risky', cls: 'text-danger', bar: 'bg-danger', ring: 'bg-danger/10 ring-danger/30' },
  invalid: { label: 'Invalid', cls: 'text-danger', bar: 'bg-danger', ring: 'bg-danger/10 ring-danger/30' },
}
const STATE_ICON = { pass: Check, warn: AlertTriangle, fail: X }
const STATE_CLS = { pass: 'text-safe', warn: 'text-amber', fail: 'text-danger' }

const EXAMPLES = ['tiffanie@illumenature.com', 'sarah.j@gmail.com', 'info@acme.com', 'hello@gmial.com', 'test@mailinator.com']

export default function EmailVerifier() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState(null)

  const run = (email) => {
    setValue(email)
    setResult(verify(email))
  }
  const onChange = (e) => {
    const v = e.target.value
    setValue(v)
    setResult(/@.+\./.test(v) ? verify(v) : null)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setResult(verify(value))
  }

  const v = result ? VERDICT[result.verdict] : null

  return (
    <section className="container-px relative py-14 sm:py-20">
      <div className="floating-panel mx-auto max-w-3xl p-6 sm:p-9">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-brand-btn">
            <MailCheck size={20} />
          </span>
          <div>
            <h2 className="text-lg font-bold text-ink">Email verifier</h2>
            <p className="text-sm text-muted">Check any address — instantly, in your browser.</p>
          </div>
          <span className="ml-auto rounded-full border border-safe/30 bg-safe/10 px-2.5 py-1 text-[11px] font-semibold text-safe">Free</span>
        </div>

        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-2.5 sm:flex-row">
          <div className="relative flex-1">
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="email"
              value={value}
              onChange={onChange}
              placeholder="name@company.com"
              aria-label="Email address to verify"
              className="w-full rounded-xl border border-hairline bg-white/[0.04] py-3 pl-10 pr-3 text-sm text-ink placeholder:text-muted/60 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/30"
            />
          </div>
          <Button as="button" type="submit" variant="primary" size="md" className="shrink-0">
            Verify
            <ArrowRight size={16} />
          </Button>
        </form>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted">Try:</span>
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              onClick={() => run(ex)}
              className="rounded-full border border-hairline bg-white/[0.03] px-2.5 py-1 text-xs text-muted transition-colors hover:border-white/20 hover:text-ink"
            >
              {ex}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {result && v && (
            <motion.div
              key={`${result.email}-${result.verdict}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 rounded-2xl border border-hairline bg-panel/60 p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="truncate font-mono text-sm text-ink">{result.email}</span>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${v.ring} ${v.cls}`}>{v.label}</span>
              </div>

              <div className="mt-4">
                <div className="mb-1.5 flex justify-between text-xs text-muted">
                  <span>Confidence</span>
                  <span className="tabular-nums">{result.score}/100</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${result.score}%` }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`h-full rounded-full ${v.bar}`}
                  />
                </div>
              </div>

              <ul className="mt-4 flex flex-col gap-2">
                {result.checks.map((c) => {
                  const Icon = STATE_ICON[c.state]
                  return (
                    <li key={c.key} className="flex items-center gap-2.5 text-sm">
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 ${STATE_CLS[c.state]}`}>
                        <Icon size={12} strokeWidth={3} />
                      </span>
                      <span className="text-ink/85">{c.label}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-5 flex flex-col gap-3 border-t border-hairline pt-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-muted">
                  Runs locally — syntax, typo, disposable, role &amp; provider checks. Live MX + SMTP
                  inbox checks and bulk lists run in the Coldcast app.
                </p>
                <Button as="a" href={TRIAL_URL} variant="ghost" size="sm" className="shrink-0">
                  Verify in bulk
                  <ArrowRight size={15} />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
