// One-off icon generator: rasterizes the Coldcast logo SVGs into the PNG/ICO
// formats search engines, browsers and mobile home screens expect.
//
// Run with the generator deps installed (not saved to package.json):
//   npm install --no-save @resvg/resvg-js png-to-ico
//   node scripts/gen-icons.mjs
//
// Outputs land in /public so Vite copies them to the dist root.
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { Resvg } from '@resvg/resvg-js'
import pngToIco from 'png-to-ico'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pub = join(root, 'public')

const rounded = readFileSync(join(pub, 'favicon.svg')) // transparent rounded corners
const square = readFileSync(join(pub, 'favicon-square.svg')) // full-bleed, no transparent corners

function render(svg, size) {
  return new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng()
}

// Browser tab + Google SERP favicons — rounded tile, transparent corners.
const roundedSizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'favicon-48x48.png': 48,
  'favicon-96x96.png': 96,
}
for (const [name, size] of Object.entries(roundedSizes)) {
  writeFileSync(join(pub, name), render(rounded, size))
  console.log('wrote', name)
}

// Home-screen / PWA icons — full-bleed so iOS doesn't paint black corners.
const squareSizes = {
  'apple-touch-icon.png': 180,
  'favicon-192x192.png': 192,
  'favicon-512x512.png': 512,
}
for (const [name, size] of Object.entries(squareSizes)) {
  writeFileSync(join(pub, name), render(square, size))
  console.log('wrote', name)
}

// Multi-resolution .ico (classic favicon, widely used by crawlers).
const ico = await pngToIco([
  join(pub, 'favicon-16x16.png'),
  join(pub, 'favicon-32x32.png'),
  join(pub, 'favicon-48x48.png'),
])
writeFileSync(join(pub, 'favicon.ico'), ico)
console.log('wrote favicon.ico')
