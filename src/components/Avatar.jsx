import { useState } from 'react'

// Round avatar that shows a real photo, falling back to initials if the image
// can't load. [PLACEHOLDER] photos are royalty-free mockup portraits — swap for
// real contact/customer photos (or keep initials) before launch.
export default function Avatar({ src, name = '', size = 24, className = '' }) {
  const [err, setErr] = useState(false)
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand-light/15 font-semibold text-[#0e90ad] ${className}`}
      style={{ width: size, height: size, fontSize: Math.max(9, size * 0.38) }}
    >
      {!err && src ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setErr(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        initials
      )}
    </span>
  )
}
