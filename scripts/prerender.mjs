// Browserless static pre-rendering. `vite build` emits a client SPA whose served
// HTML is an empty <div id="root"></div> with one generic <title> on every route,
// so non-JS crawlers (and Google's first pass) see an empty shell — the root
// cause behind "not indexed" / "duplicate titles" in the SEO audit.
//
// This step renders each route with React's server renderer (react-dom/server,
// pure Node — NO headless browser, so it runs reliably in any CI including
// Vercel) and bakes the result into dist/<route>/index.html: the server-rendered
// body plus the per-page <head> (title, description, canonical, OG/Twitter,
// JSON-LD) collected by <Seo> during the render.
//
// On Vercel the filesystem is checked before the SPA rewrite in vercel.json, so
// these static files are served to crawlers while the rewrite stays a fallback
// for any non-prerendered path. The client still boots React over the HTML.
//
// Routes = the sitemap's <loc>s minus /privacy and /terms (those already ship as
// real static HTML in public/, they are not React routes).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')
const distDir = join(root, 'dist')

const { render } = await import(pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href)

const template = readFileSync(join(distDir, 'index.html'), 'utf8')
if (!template.includes('<div id="root"></div>')) {
  console.error('✗ Prerender: could not find <div id="root"></div> in dist/index.html')
  process.exit(1)
}

const sitemap = readFileSync(join(root, 'public', 'sitemap.xml'), 'utf8')
const routes = [
  ...new Set(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((m) => new URL(m[1].trim()).pathname)
      .map((p) => (p === '/' ? '/' : p.replace(/\/+$/, '')))
      .filter((p) => !/^\/(privacy|terms)$/.test(p)),
  ),
]

console.log(`Prerendering ${routes.length} routes (browserless SSR)…`)

let done = 0
const warnings = []
for (const route of routes) {
  const { html, head } = render(route)
  if (!head.title) warnings.push(`${route} — no <Seo> title collected`)

  let page = template
  // If this route declares its own og:image, drop the template's global
  // og:image/twitter:image — social scrapers take the FIRST tag they see.
  if (head.tags.includes('og:image')) {
    page = page
      .replace(/^\s*<meta property="og:image"[^>]*>\s*\n?/m, '')
      .replace(/^\s*<meta name="twitter:image"[^>]*>\s*\n?/m, '')
  }
  if (head.title) {
    page = page.replace(/<title>[\s\S]*?<\/title>/, `<title>${head.title.replace(/</g, '&lt;')}</title>`)
  }
  page = page.replace('</head>', `    ${head.tags}\n  </head>`)
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  const outFile = route === '/' ? join(distDir, 'index.html') : join(distDir, route, 'index.html')
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, page, 'utf8')
  console.log(`  ✓ ${route.padEnd(36)} ${head.title || '(no title)'}`)
  done++
}

if (warnings.length) {
  console.warn('\n⚠ Warnings:')
  warnings.forEach((w) => console.warn('  ' + w))
}
if (done !== routes.length) {
  console.error(`\n✗ Prerender incomplete: ${done}/${routes.length}`)
  process.exit(1)
}
console.log(`\n✓ Prerendered ${done}/${routes.length} routes into dist/`)
