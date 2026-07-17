// One cell of a live card — the hero dashboard's lead list and the Live Export
// table both render through this, so the two can never drift apart.
//
// It CROSS-FADES rather than swapping. Both layers are always mounted, stacked
// in the same fixed line box, and only their opacity moves:
//
//   loading -> skeleton at 1, text at 0
//   ready   -> skeleton fades to 0 as the text fades to 1, over the same 600ms
//
// The previous version mounted one and unmounted the other, so the skeleton
// vanished on a single frame and the text then faded up from nothing — a visible
// hitch on every row, every tick. Overlapping the two means there is never an
// empty frame and never a reflow: the line box is fixed at h-5 whatever is in
// it, and opacity is compositor-only.
export default function StreamCell({ ready, skeleton, reduce = false, className = '', children }) {
  // Reduced motion: no fade, just the resolved value.
  if (reduce) {
    return (
      <span className={`flex h-5 items-center ${className}`}>
        <span className="w-full truncate">{children}</span>
      </span>
    )
  }

  return (
    <span className={`relative flex h-5 items-center ${className}`}>
      <span
        aria-hidden
        className={`absolute inset-0 flex items-center transition-opacity duration-[600ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {skeleton}
      </span>
      <span
        className={`relative w-full truncate transition-opacity duration-[600ms] ease-[cubic-bezier(.22,.61,.36,1)] ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </span>
    </span>
  )
}
