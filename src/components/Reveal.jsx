import { motion, useReducedMotion } from 'framer-motion'

// Scroll-reveal wrapper: fades + translates content up on enter.
// Honors prefers-reduced-motion (renders static, fully visible).
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 24,
  once = true,
  className = '',
  ...props
}) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      // Slow, smooth cubic ease-out — the same curve the hero's dashboard runs
      // on, so every section on the page arrives with one tempo.
      transition={{ duration: 0.95, delay, ease: [0.22, 0.61, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
