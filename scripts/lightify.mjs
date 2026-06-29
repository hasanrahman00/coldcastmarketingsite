// One-off codemod: flip the dark-glass idiom -> light-theme equivalents.
//   node scripts/lightify.mjs
// Excludes components that intentionally stay light-on-dark (main hero, buttons,
// the gradient announcement bar, the scroll-aware navbar handled by hand).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join, extname, basename, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src')
const EXCLUDE = new Set(['Hero.jsx', 'Button.jsx', 'AnnouncementBar.jsx'])

const repls = [
  [/bg-white\//g, 'bg-black/'],
  [/border-white\//g, 'border-black/'],
  [/from-white\//g, 'from-black/'],
  [/via-white\//g, 'via-black/'],
  [/to-white\//g, 'to-black/'],
  [/ring-white\//g, 'ring-black/'],
  [/text-white\//g, 'text-ink/'],
  [/text-white(?![\w/-])/g, 'text-ink'],
]

let count = 0
function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    const s = statSync(p)
    if (s.isDirectory()) walk(p)
    else if (extname(p) === '.jsx' && !EXCLUDE.has(basename(p))) {
      const orig = readFileSync(p, 'utf8')
      let t = orig
      for (const [re, to] of repls) t = t.replace(re, to)
      if (t !== orig) {
        writeFileSync(p, t)
        count++
        console.log('  lightified', p.replace(root, 'src'))
      }
    }
  }
}
walk(root)
console.log(`done — ${count} files`)
