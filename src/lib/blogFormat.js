// Tiny helpers shared by the blog pages. No dependencies, no JSX, SSR-safe.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// '2026-07-29' → 'Jul 29, 2026' — deterministic, no locale/timezone involved.
export function formatPostDate(iso) {
  const [y, m, d] = String(iso).split('-').map(Number)
  return `${MONTHS[(m || 1) - 1]} ${d}, ${y}`
}

// Tokenizes a paragraph string into segments the renderer maps to React nodes:
//   { type: 'text' | 'bold', value }            — plain / bolded text
//   { type: 'link', label, href }               — [label](href)
// Bold uses **double asterisks**. Kept as data (no JSX) so this stays a .js lib.
export function tokenizeInline(text) {
  const out = []
  const re = /(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))/g
  let last = 0
  let match
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) out.push({ type: 'text', value: text.slice(last, match.index) })
    const token = match[0]
    if (token.startsWith('**')) {
      out.push({ type: 'bold', value: token.slice(2, -2) })
    } else {
      const inner = token.slice(1, -1)
      const split = inner.indexOf('](')
      out.push({ type: 'link', label: inner.slice(0, split), href: inner.slice(split + 2) })
    }
    last = re.lastIndex
  }
  if (last < text.length) out.push({ type: 'text', value: text.slice(last) })
  return out
}
