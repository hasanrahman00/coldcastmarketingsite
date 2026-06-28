// Re-render just the OG image SVG -> PNG (public/og-image.png + brand copy).
//   npm install --no-save @resvg/resvg-js
//   node scripts/gen-og.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { Resvg } from '@resvg/resvg-js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const p = (...x) => join(root, ...x)

const svg = readFileSync(p('brand/banner/coldcast-og-image.svg'))
const png = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
}).render().asPng()

writeFileSync(p('public/og-image.png'), png)
writeFileSync(p('brand/banner/coldcast-og-image.png'), png)
console.log('og-image:', `${(png.length / 1024).toFixed(0)}KB`, `${png.readUInt32BE(16)}x${png.readUInt32BE(20)}`)
