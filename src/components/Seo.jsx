import { useEffect } from 'react'

const SITE = 'https://www.coldcast.io'

// Dependency-free per-route <head> manager (a tiny react-helmet replacement).
// index.html holds the GLOBAL defaults (og:type/site_name/image, twitter:card,
// favicons, org/website JSON-LD); this upserts the PER-PAGE bits so every route
// gets a unique title, description, canonical, OG/Twitter title+description,
// keywords, and structured data. Google renders client JS, so it sees these.
//
// We upsert (never duplicate) the meta/link tags, and fully own the JSON-LD we
// inject — tagged data-seo-ld and swapped out on every route change — so product
// and role pages never inherit the homepage's FAQ schema.
export default function Seo({ title, description, path = '/', keywords, ogTitle, ogDescription, jsonLd }) {
  const clean = path === '/' ? '/' : '/' + String(path).replace(/^\/+|\/+$/g, '')
  const url = SITE + clean
  const ogT = ogTitle || title
  const ogD = ogDescription || description
  const ld = JSON.stringify((jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []).filter(Boolean))

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
