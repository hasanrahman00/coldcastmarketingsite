import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, KeyRound, Copy, Check, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import Button from './Button'
import { API_URL, APP_URL } from '../lib/constants'

const inputCls =
  'w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'

// Self-serve 1-day free trial. Drop <TrialSignup /> into any section.
// POSTs to ${API_URL}/api/trial → reveals the access key on success.
export default function TrialSignup({ className = '' }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null) // { username, key, expiresAt, trialDays }
  const [copied, setCopied] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    const u = username.trim()
    if (!u) return setError('Pick a username to continue.')
    setBusy(true)
    try {
      const r = await fetch(`${API_URL}/api/trial`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: u, email: email.trim() }),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(d.error || 'Could not start your trial. Please try again.')
      setResult(d)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  const copyKey = async () => {
    try {
      await navigator.clipboard.writeText(result.key)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-hairline bg-white/85 p-7 shadow-card backdrop-blur-xl sm:p-9 ${className}`}
    >
      {/* soft brand glow */}
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-light/20 blur-3xl" />

      <AnimatePresence mode="wait" initial={false}>
        {!result ? (
          <motion.form
            key="form"
            onSubmit={submit}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="relative"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient-soft px-3 py-1 text-xs font-semibold text-brand">
              <Sparkles size={13} /> Free trial · no card
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">
              Start your 1-day free trial
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Pick a username, get an access key instantly, and export your first enriched list today.
            </p>

            <div className="mt-6 space-y-3">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
                  Username
                </label>
                <input
                  className={inputCls}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. acme-corp"
                  autoComplete="off"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
                  Email <span className="font-normal normal-case text-muted/70">(optional)</span>
                </label>
                <input
                  className={inputCls}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>
            </div>

            {error && (
              <div className="mt-4 flex items-start gap-2 rounded-xl border border-danger/20 bg-danger/[0.06] px-3.5 py-2.5 text-sm font-medium text-danger">
                <AlertCircle size={16} className="mt-0.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <Button as="button" type="submit" variant="primary" size="lg" disabled={busy} className="mt-6 w-full">
              {busy ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
              {busy ? 'Creating your trial…' : 'Start free trial'}
            </Button>

            <p className="mt-3 text-center text-xs text-muted/80">
              Already have a key?{' '}
              <a href={APP_URL} className="font-semibold text-brand hover:underline">
                Log in
              </a>
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-safe/10 px-3 py-1 text-xs font-semibold text-safe">
              <Check size={13} /> Trial ready
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink">
              You're in{result.username ? `, ${result.username}` : ''} 🎉
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Here's your access key — <strong className="text-ink">copy it now</strong>, then log in and
              paste it. Your trial is active for {result.trialDays || 1} day
              {(result.trialDays || 1) === 1 ? '' : 's'}.
            </p>

            <div className="mt-5">
              <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                <KeyRound size={13} /> Your access key
              </label>
              <div className="flex items-stretch gap-2">
                <code className="min-w-0 flex-1 truncate rounded-xl border border-hairline bg-panel2 px-3.5 py-3 font-mono text-sm text-ink">
                  {result.key}
                </code>
                <button
                  type="button"
                  onClick={copyKey}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-brand-gradient px-4 text-sm font-semibold text-white shadow-brand-btn transition-all hover:-translate-y-0.5 hover:bg-brand-gradient-vivid"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <p className="mt-2 text-xs text-muted/80">
                Save it somewhere safe — it won't be shown again.
              </p>
            </div>

            <Button as="a" href={APP_URL} variant="primary" size="lg" className="mt-6 w-full">
              Log in &amp; start
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
