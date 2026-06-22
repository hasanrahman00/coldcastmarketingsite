// Fixed page-wide ambience for the light theme: a soft pastel gradient "mesh"
// of slowly-drifting blooms on the near-white base, plus a faint grid.
// All motion is CSS-only and disabled under prefers-reduced-motion.
export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Top color wash — gives the whole page a soft tint */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(130% 90% at 50% -10%, rgba(99,102,241,0.16), transparent 60%)',
        }}
      />

      {/* Pastel aurora blooms */}
      <div
        className="absolute left-1/2 top-[-14%] h-[720px] w-[1150px] -translate-x-1/2 animate-drift rounded-full opacity-80 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, rgba(79,124,245,0.22), transparent 72%)' }}
      />
      <div
        className="absolute right-[-10%] top-[4%] h-[600px] w-[600px] animate-drift-alt rounded-full opacity-70 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.18), transparent 72%)' }}
      />
      <div
        className="absolute left-[-12%] top-[22%] h-[560px] w-[560px] animate-drift rounded-full opacity-70 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.16), transparent 72%)' }}
      />
      <div
        className="absolute bottom-[-10%] right-[8%] h-[620px] w-[820px] animate-drift-alt rounded-full opacity-60 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(244,114,182,0.16), transparent 72%)' }}
      />
      <div
        className="absolute bottom-[4%] left-[-8%] h-[480px] w-[480px] animate-drift rounded-full opacity-60 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.16), transparent 72%)' }}
      />

      {/* Faint grid for texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 92% 78% at 50% 14%, #000 22%, transparent 86%)',
          WebkitMaskImage: 'radial-gradient(ellipse 92% 78% at 50% 14%, #000 22%, transparent 86%)',
        }}
      />
    </div>
  )
}
