// Fixed page-wide ambience: slowly-drifting multi-color aurora blooms, a
// radially-masked dev grid, and a soft vignette to focus the center.
// All motion is CSS-only and auto-disabled under prefers-reduced-motion.
export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora blooms */}
      <div
        className="absolute left-1/2 top-[-20%] h-[700px] w-[1100px] -translate-x-1/2 animate-drift rounded-full opacity-70 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(79,124,245,0.30), transparent 72%)' }}
      />
      <div
        className="absolute right-[-12%] top-[2%] h-[560px] w-[560px] animate-drift-alt rounded-full opacity-60 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.26), transparent 72%)' }}
      />
      <div
        className="absolute left-[-10%] top-[26%] h-[480px] w-[480px] animate-drift rounded-full opacity-50 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.20), transparent 72%)' }}
      />
      <div
        className="absolute bottom-[-14%] right-[14%] h-[560px] w-[760px] animate-drift-alt rounded-full opacity-40 blur-[140px]"
        style={{ background: 'radial-gradient(closest-side, rgba(217,70,239,0.16), transparent 72%)' }}
      />
      <div
        className="absolute bottom-[6%] left-[-6%] h-[420px] w-[420px] rounded-full opacity-40 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(79,124,245,0.16), transparent 72%)' }}
      />

      {/* Radially-masked dev grid (fades at the edges) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.026) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.026) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 10%, #000 20%, transparent 82%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 10%, #000 20%, transparent 82%)',
        }}
      />

      {/* Vignette — gently darkens the edges to focus attention */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 50% 30%, transparent 55%, rgba(4,3,12,0.55) 100%)',
        }}
      />
    </div>
  )
}
