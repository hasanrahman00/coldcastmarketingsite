// Ruled mono marquee — the tools Coldcast scrapes, enriches and feeds.
const ITEMS = [
  'Sales Navigator', 'Apollo', 'ZoomInfo', 'Waterfall enrichment', 'Email verify',
  'Domain enrichment', 'Instantly', 'Smartlead', 'Lemlist', 'HubSpot', 'Salesforce',
]

export default function ToolMarquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <section aria-label="Works with" className="border-y border-hairline py-5">
      <div className="relative overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)' }}>
        <div className="flex w-max animate-marquee items-center gap-10 motion-reduce:animate-none">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-[11.5px] font-medium uppercase tracking-[0.22em] text-muted">
              {t}
              <span aria-hidden className="text-brand">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
