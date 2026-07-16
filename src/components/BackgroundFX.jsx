// Continuous airy "cloud" backdrop for the whole site (Cloud-Büro style):
// a soft sky-blue → lavender → light gradient with drifting colour mist and
// soft white cloud wisps, so every section sits on one seamless gradient.
// Fixed + behind everything; motion is CSS-only and respects reduced-motion.
export default function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* (base gradient lives on #root so it scrolls with the page) */}

      {/* drifting colour mist */}
      <div
        className="absolute left-1/2 top-[-12%] h-[760px] w-[1200px] -translate-x-1/2 animate-drift rounded-full opacity-80 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(109,61,240,0.22), transparent 72%)' }}
      />
      <div
        className="absolute right-[-10%] top-[8%] h-[620px] w-[620px] animate-drift-alt rounded-full opacity-70 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(79,124,245,0.22), transparent 72%)' }}
      />
      <div
        className="absolute left-[-12%] top-[26%] h-[600px] w-[600px] animate-drift rounded-full opacity-70 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.16), transparent 72%)' }}
      />
      <div
        className="absolute bottom-[-8%] right-[6%] h-[660px] w-[860px] animate-drift-alt rounded-full opacity-60 blur-[140px]"
        style={{ background: 'radial-gradient(closest-side, rgba(217,70,239,0.14), transparent 72%)' }}
      />
      <div
        className="absolute bottom-[8%] left-[-8%] h-[520px] w-[520px] animate-drift rounded-full opacity-60 blur-[130px]"
        style={{ background: 'radial-gradient(closest-side, rgba(124,58,237,0.16), transparent 72%)' }}
      />

      {/* soft white cloud wisps */}
      <div className="absolute left-1/2 top-[30%] h-[480px] w-[1500px] -translate-x-1/2 rounded-[50%] bg-white/55 blur-[90px]" />
      <div className="absolute left-[-10%] top-[58%] h-[380px] w-[980px] rounded-[50%] bg-white/45 blur-[100px]" />
      <div className="absolute bottom-[-4%] right-[-6%] h-[420px] w-[1000px] rounded-[50%] bg-white/45 blur-[100px]" />

      {/* faint grid for texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(28,23,65,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(28,23,65,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 92% 80% at 50% 18%, #000 18%, transparent 88%)',
          WebkitMaskImage: 'radial-gradient(ellipse 92% 80% at 50% 18%, #000 18%, transparent 88%)',
        }}
      />
    </div>
  )
}
