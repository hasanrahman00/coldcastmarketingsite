import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

// Glass card with a gradient lit edge, a cursor-following spotlight glow, and a
// hover lift. Used for the bento features grid + pricing.
export default function SpotlightCard({
  children,
  className = '',
  glow = 'rgba(79,124,245,0.16)',
  spanClass = '',
}) {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${x}px ${y}px, ${glow}, transparent 70%)`

  return (
    <div className={`group lit-edge h-full ${spanClass}`} onMouseMove={handleMove}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        className={`relative h-full overflow-hidden rounded-[1.25rem] bg-black/[0.045] shadow-card backdrop-blur-xl ${className}`}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <div className="relative h-full">{children}</div>
      </motion.div>
    </div>
  )
}
