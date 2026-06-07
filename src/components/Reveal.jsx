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
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
