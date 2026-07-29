import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import App from './App.jsx'
import { HeadCollectorContext } from './lib/headCollector'

// Build-time only. scripts/prerender.mjs imports render(url) for each route,
// gets back the server-rendered body + the per-page <head> string, and bakes
// them into dist/<route>/index.html. No browser involved — pure Node.
export function render(url) {
  const collector = { tags: null }
  const html = renderToString(
    <HeadCollectorContext.Provider value={collector}>
      <StaticRouter location={url}>
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </StaticRouter>
    </HeadCollectorContext.Provider>,
  )
  return { html, head: buildHead(collector.tags) }
}

const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// JSON-LD goes inside a <script> — only `<` needs neutralizing so a stray
// "</script>" in data can't break out. Our content has none, but be safe.
const ld = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c')

function buildHead(t) {
  if (!t) return { title: null, tags: '' }
  const p = []
  if (t.description) p.push(`<meta name="description" content="${esc(t.description)}" />`)
  if (t.keywords) p.push(`<meta name="keywords" content="${esc(t.keywords)}" />`)
  p.push(`<link rel="canonical" href="${esc(t.url)}" />`)
  p.push(`<meta property="og:url" content="${esc(t.url)}" />`)
  if (t.ogT) p.push(`<meta property="og:title" content="${esc(t.ogT)}" />`)
  if (t.ogD) p.push(`<meta property="og:description" content="${esc(t.ogD)}" />`)
  if (t.ogT) p.push(`<meta name="twitter:title" content="${esc(t.ogT)}" />`)
  if (t.ogD) p.push(`<meta name="twitter:description" content="${esc(t.ogD)}" />`)
  if (t.image) p.push(`<meta property="og:image" content="${esc(t.image)}" />`)
  if (t.image) p.push(`<meta name="twitter:image" content="${esc(t.image)}" />`)
  // Marked data-seo-ld so the client <Seo> swaps these in place on boot instead
  // of appending a second copy (the global @graph in index.html stays untouched).
  t.jsonLd.forEach((b) => p.push(`<script type="application/ld+json" data-seo-ld>${ld(b)}</script>`))
  return { title: t.title || null, tags: p.join('\n    ') }
}
