// Fixed page-wide ambience: a deep-indigo wash + vivid, slowly-drifting
// multi-color aurora that fills the whole page, a radially-masked dev grid, and
// a soft vignette. All motion is CSS-only and disabled under reduced-motion.
export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Indigo wash from the top — gives the whole page a colored glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(135% 95% at 50% -12%, rgba(76,58,170,0.55), transparent 60%)',
        }}
      />

      {/* Aurora blooms (bigger + more saturated, spread across the page) */}
      <div
        className="absolute left-1/2 top-[-16%] h-[760px] w-[1200px] -translate-x-1/2 animate-drift rounded-full opacity-80 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, rgba(79,124,245,0.45), transparent 72%)' }}
      />
      <div
        className="absolute right-[-10%] top-[4%] h-[620px] w-[620px] animate-drift-alt rounded-full opacity-70 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.40), transparent 72%)' }}
      />
      <div
        className="absolute left-[-12%] top-[24%] h-[560px] w-[560px] animate-drift rounded-full opacity-60 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.30), transparent 72%)' }}
      />
      <div
        className="absolute left-1/2 top-[42%] h-[520px] w-[820px] -translate-x-1/2 animate-drift-alt rounded-full opacity-50 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(99,102,241,0.32), transparent 72%)' }}
      />
      <div
        className="absolute bottom-[-12%] right-[10%] h-[620px] w-[820px] animate-drift rounded-full opacity-55 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(217,70,239,0.26), transparent 72%)' }}
      />
      <div
        className="absolute bottom-[2%] left-[-8%] h-[480px] w-[480px] animate-drift-alt rounded-full opacity-50 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, rgba(79,124,245,0.26), transparent 72%)' }}
      />

      {/* Radially-masked dev grid (fades at the edges) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 75% at 50% 12%, #000 25%, transparent 84%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 75% at 50% 12%, #000 25%, transparent 84%)',
        }}
      />

      {/* Light vignette — keeps focus toward the center without hiding the color */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(125% 125% at 50% 35%, transparent 62%, rgba(5,5,18,0.5) 100%)',
        }}
      />
    </div>
  )
}
