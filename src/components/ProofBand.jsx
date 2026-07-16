import Reveal from './Reveal'

// Ruled stat ledger — huge serif numerals over mono labels.
const STATS = [
  { value: '20,000', label: 'Leads / day / account' },
  { value: '0', label: 'Account bans on record' },
  { value: '99%', label: 'Email validity — or free' },
  { value: '10,000+', label: 'Sales professionals' },
]

export default function ProofBand({ kicker = '04 — The record' }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-px">
        <p className="kicker">{kicker}</p>
        <div className="mt-8 grid grid-cols-2 gap-x-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="border-t-[1.5px] border-ink pt-5">
                <div className="font-display text-[2.6rem] font-semibold leading-none tracking-[-0.02em] text-ink sm:text-[3.4rem]">
                  {s.value}
                </div>
                <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            Six months of daily internal use across {`10,000+`} connected professionals — zero
            suspensions. Our track record, not a guarantee.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
