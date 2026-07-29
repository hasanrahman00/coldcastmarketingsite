// Post-build pre-rendering. `vite build` emits a client-only SPA whose served
// HTML is an empty <div id="root"></div> — so crawlers that don't run JS (and
// Google on its first pass) see one identical shell for every route. This step
// loads each route in a real headless browser (where our <Seo> effect runs for
// real), then writes the fully-rendered HTML to dist/<route>/index.html.
//
// On Vercel the filesystem is checked before the SPA rewrite in vercel.json, so
// these static files are served to crawlers while the rewrite stays as a fallback
// for any non-prerendered path. The client still boots React over the HTML, so
// interactivity is unchanged.
//
// Route list is the sitemap's <loc>s minus /privacy and /terms (those already
// ship as real static HTML in public/, they are not React routes).

import puppeteer from 'puppeteer'
import { preview } from 'vite'
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const distDir = join(root, 'dist')
const PORT = 4188
const FALLBACK_TITLE = 'Coldcast — The Safest LinkedIn Sales Navigator Scraper'

// ── Routes from the sitemap (single source of truth) ─────────────────────────
const sitemap = readFileSync(join(root, 'public', 'sitemap.xml'), 'utf8')
const routes = [
  ...new Set(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => new URL(m[1].trim()).pathname)
      .map((p) => (p === '/' ? '/' : p.replace(/\/+$/, ''))) // strip trailing slash
      .filter((p) => !/^\/(privacy|terms)$/.test(p)), // skip the static legal pages
  ),
]

console.log(`Prerendering ${routes.length} routes…`)

const server = await preview({ root, preview: { port: PORT, strictPort: true } })
const base = `http://localhost:${PORT}`

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

let done = 0
const warnings = []
try {
  for (const route of routes) {
    const page = await browser.newPage()
    try {
      await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 45000 })
      // React mounted AND <Seo> has run (it sets a canonical link on every route).
      await page.waitForFunction(
        () =>
          document.getElementById('root')?.children.length > 0 &&
          !!document.querySelector('link[rel="canonical"]'),
        { timeout: 20000 },
      )
      const html = await page.content()
      const title = await page.title()
      if (title === FALLBACK_TITLE) warnings.push(`${route} — still has the fallback title`)

      const outFile = route === '/' ? join(distDir, 'index.html') : join(distDir, route, 'index.html')
      mkdirSync(dirname(outFile), { recursive: true })
      writeFileSync(outFile, html, 'utf8')
      console.log(`  ✓ ${route.padEnd(36)} ${title}`)
      done++
    } finally {
      await page.close()
    }
  }
} finally {
  await browser.close()
  await server.httpServer.close()
}

if (warnings.length) {
  console.warn('\n⚠ Warnings:')
  warnings.forEach((w) => console.warn('  ' + w))
}
if (done !== routes.length) {
  console.error(`\n✗ Prerender incomplete: ${done}/${routes.length} routes`)
  process.exit(1)
}
console.log(`\n✓ Prerendered ${done}/${routes.length} routes into dist/`)
process.exit(0)
