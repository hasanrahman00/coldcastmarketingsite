import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

// Animated count-up that fires once when scrolled into view.
// Honors reduced-motion (renders the final value instantly).
export default function Counter({
  to,
  duration = 1.8,
  prefix = '',
  suffix = '',
  format = (v) => Math.round(v).toLocaleString('en-US'),
  className = '',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView) return undefined
    if (reduce) {
      setValue(to)
      return undefined
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, to, duration, reduce])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  )
}
