import { useContext, useEffect } from 'react'
import { HeadCollectorContext } from '../lib/headCollector'

const SITE = 'https://www.coldcast.io'

// Per-route <head> manager with two paths from one source of truth:
//   • SSR (build): registers the computed tags on the HeadCollector so
//     scripts/prerender.mjs can bake them into the static HTML.
//   • Client: imperatively upserts the meta/link tags and swaps the JSON-LD on
//     each route change (a tiny, dependency-free react-helmet replacement).
// index.html holds the GLOBAL defaults (og:type/site_name/image, twitter:card,
// favicons, Organization/WebSite/SoftwareApplication JSON-LD); this owns the
// per-page bits so every route gets a UNIQUE title/description/canonical/OG/
// keywords + structured data.
export default function Seo({ title, description, path = '/', keywords, ogTitle, ogDescription, jsonLd }) {
  const clean = path === '/' ? '/' : '/' + String(path).replace(/^\/+|\/+$/g, '')
  const url = SITE + clean
  const ogT = ogTitle || title
  const ogD = ogDescription || description
  const blocks = (jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []).filter(Boolean)

  // SSR: hand the prerenderer this route's head (exactly one <Seo> per route).
  const collector = useContext(HeadCollectorContext)
  if (collector) collector.tags = { title, description, keywords, url, ogT, ogD, jsonLd: blocks }

  // Client: apply on mount + whenever the route's head changes.
  const ld = JSON.stringify(blocks)
  useEffect(() => {
    if (title) document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', keywords)
    upsertLink('canonical', url)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:title', ogT)
    upsertMeta('property', 'og:description', ogD)
    upsertMeta('name', 'twitter:title', ogT)
    upsertMeta('name', 'twitter:description', ogD)

    document.head.querySelectorAll('script[data-seo-ld]').forEach((s) => s.remove())
    JSON.parse(ld).forEach((block) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.setAttribute('data-seo-ld', '')
      s.textContent = JSON.stringify(block)
      document.head.appendChild(s)
    })
    return () => document.head.querySelectorAll('script[data-seo-ld]').forEach((s) => s.remove())
  }, [title, description, keywords, url, ogT, ogD, ld])

  return null
}

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}
