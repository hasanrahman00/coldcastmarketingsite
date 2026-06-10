// Renders the full Coldcast brand kit (logo, wordmark, banners) from the SVG
// sources into PNGs. One-off generator — deps installed --no-save.
//   npm install --no-save @resvg/resvg-js
//   node scripts/gen-brand-kit.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { Resvg } from '@resvg/resvg-js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const p = (...x) => join(root, ...x)
for (const d of ['brand/logo', 'brand/wordmark', 'brand/banner']) mkdirSync(p(d), { recursive: true })

function render(svgPath, outPath, width) {
  const png = new Resvg(readFileSync(svgPath), {
    fitTo: { mode: 'width', value: width },
    font: { loadSystemFonts: true },
  }).render().asPng()
  writeFileSync(outPath, png)
  const b = readFileSync(outPath)
  console.log('  ', outPath.replace(root + '\\', '').replace(root + '/', ''), `${(b.length / 1024).toFixed(0)}KB`, `${b.readUInt32BE(16)}x${b.readUInt32BE(20)}`)
}

console.log('logo:')
for (const w of [256, 512, 1024]) render(p('brand/logo/coldcast-logo.svg'), p(`brand/logo/coldcast-logo-${w}.png`), w)
render(p('brand/logo/coldcast-logo-square.svg'), p('brand/logo/coldcast-logo-300.png'), 300) // LinkedIn profile
render(p('brand/logo/coldcast-logo-mono-white.svg'), p('brand/logo/coldcast-logo-mono-white-512.png'), 512)

console.log('wordmark:')
render(p('brand/wordmark/coldcast-wordmark.svg'), p('brand/wordmark/coldcast-wordmark-1024w.png'), 1024)
render(p('brand/wordmark/coldcast-wordmark-white.svg'), p('brand/wordmark/coldcast-wordmark-white-1024w.png'), 1024)

console.log('banner:')
// move the existing LinkedIn banner source under brand/banner/ for a tidy kit
if (existsSync(p('brand/linkedin-banner.svg'))) {
  copyFileSync(p('brand/linkedin-banner.svg'), p('brand/banner/coldcast-linkedin-banner.svg'))
}
const bannerSrc = existsSync(p('brand/banner/coldcast-linkedin-banner.svg'))
  ? p('brand/banner/coldcast-linkedin-banner.svg')
  : p('brand/linkedin-banner.svg')
render(bannerSrc, p('brand/banner/coldcast-linkedin-banner.png'), 1128)
render(bannerSrc, p('brand/banner/coldcast-linkedin-banner@2x.png'), 2256)

console.log('og image:')
render(p('brand/banner/coldcast-og-image.svg'), p('brand/banner/coldcast-og-image.png'), 1200)
// also drop it where the site's <meta og:image> expects it
render(p('brand/banner/coldcast-og-image.svg'), p('public/og-image.png'), 1200)
