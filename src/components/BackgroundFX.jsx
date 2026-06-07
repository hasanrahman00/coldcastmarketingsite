// Fixed page-wide background: a soft top aurora bloom + a radially-masked grid.
// Sits behind all content (-z-10) over the solid body color.
export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute left-1/2 top-[-22%] h-[720px] w-[1200px] -translate-x-1/2 rounded-full opacity-70 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(79,124,245,0.28), transparent 72%)' }}
      />
      <div
        className="absolute right-[-12%] top-[6%] h-[520px] w-[520px] rounded-full opacity-50 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.24), transparent 72%)' }}
      />
      <div
        className="absolute left-[-8%] top-[30%] h-[420px] w-[420px] rounded-full opacity-40 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.18), transparent 72%)' }}
      />
      {/* radially-masked grid (fades to nothing at edges) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 85% 60% at 50% 0%, #000 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 60% at 50% 0%, #000 25%, transparent 80%)',
        }}
      />
    </div>
  )
}
