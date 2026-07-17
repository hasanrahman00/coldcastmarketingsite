import { useEffect, useState } from 'react'

// Shared timing for the two live cards — the hero dashboard and the Live Export
// table. They are the same story told at two sizes, so the cadence lives here
// once. (A hand-copied clone is how the hero's logo drifted to a different
// colour than the nav's; don't repeat it.)
//
// Per tick, a row does NOT pop in complete. It arrives in stages:
//
//   t=0                          every row drops to a shimmering skeleton
//   t=700 + i*260                row i's name/title/company land
//   t=700 + i*260 + 450          row i's EMAIL lands — always last, because
//                                finding and verifying the address is the slow
//                                part of the real pipeline. The skeleton sitting
//                                in the email cell for an extra beat IS the
//                                product working.
//
// Last email lands at 700 + 4*260 + 450 = 2190ms, inside the 5000ms tick, so the
// card holds its finished state for ~2.8s before starting again.
//
// These numbers were ~40% faster and read as a flicker: five rows resolving
// inside 1.4s is closer to a strobe than to watching a job run. Slower makes the
// cascade legible — you can follow a single row from skeleton to verified, which
// is the entire point of showing it.
export const TICK_MS = 5000
const ROW_LOAD_MS = 700
const ROW_STAGGER_MS = 260
const EMAIL_LAG_MS = 450

export function useRowStream(live, tick, count) {
  // Start fully resolved: the card should arrive populated, never fake-load data
  // it already has on first paint.
  const [rowsIn, setRowsIn] = useState(count)
  const [emailsIn, setEmailsIn] = useState(count)

  useEffect(() => {
    if (!live) {
      // Off-screen or reduced-motion: show everything, run no timers at all.
      setRowsIn(count)
      setEmailsIn(count)
      return undefined
    }
    if (tick === 0) return undefined

    setRowsIn(0)
    setEmailsIn(0)
    const timers = []
    for (let i = 0; i < count; i += 1) {
      const at = ROW_LOAD_MS + i * ROW_STAGGER_MS
      timers.push(setTimeout(() => setRowsIn((n) => Math.max(n, i + 1)), at))
      timers.push(setTimeout(() => setEmailsIn((n) => Math.max(n, i + 1)), at + EMAIL_LAG_MS))
    }
    return () => timers.forEach(clearTimeout)
  }, [tick, live, count])

  return {
    rowReady: (i) => i < rowsIn,
    emailReady: (i) => i < emailsIn,
  }
}
