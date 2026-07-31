import { LOGO_BY_DOMAIN } from '../lib/constants'

// Brand mark for the "works with these sources" rows.
//
// When a source has a SELF-HOSTED logo file (props.logo → /public/logos/*), it
// renders a real <img> with a Coldcast-branded alt — same-origin, so it's
// crawlable and image-indexable, and it never re-introduces the third-party logo
// fetch that Search Console flagged as blocked resources. Sources without a file
// fall back to a clean monogram tile whose name stays real, crawlable text.
//
// Mono by design: one flat tile treatment (light surface, hairline, muted mark)
// so the row reads as one system on the monochrome site rather than a rainbow of
// brand colours.
export default function BrandLogo({ domain, name, logo, size = 36 }) {
  const src = logo || LOGO_BY_DOMAIN[domain]
  const initials = name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()
  const inner = Math.round(size * 0.56)
  return (
    <span
      className="group flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-hairline bg-panel shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
      style={{ width: size, height: size }}
      title={name}
    >
      {src ? (
        <img
          src={src}
          alt={`Coldcast ${name} integration`}
          width={inner}
          height={inner}
          loading="lazy"
          decoding="async"
          className="object-contain"
          style={{ width: inner, height: inner }}
        />
      ) : (
        <span
          className="font-bold leading-none text-muted"
          style={{ fontSize: Math.max(9, Math.round(size * 0.34)) }}
        >
          {initials}
        </span>
      )}
    </span>
  )
}
