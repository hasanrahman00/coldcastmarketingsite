// The accent palette was tuned to be legible on a DARK theme; as TEXT on the
// new light theme several shades are too light. Darken text usages only —
// leaving bg-/border-/ring-/gradient tints (where the light value is correct).
//   node scripts/darken-accent-text.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join, extname, basename, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src')
// Hero / CTA / Footer / bar are on dark/purple — their accent text stays light.
const EXCLUDE = new Set(['Hero.jsx', 'FinalCTA.jsx', 'Footer.jsx', 'AnnouncementBar.jsx'])

const repls = [
  [/text-brand-light\b/g, 'text-brand'],
  [/text-safe\b/g, 'text-[#0f9d72]'],
  [/text-amber\b/g, 'text-[#c2740c]'],
  [/text-accent\b/g, 'text-[#0e90ad]'],
  [/text-violet\b/g, 'text-[#7c3aed]'],
  [/text-magenta\b/g, 'text-[#c026d3]'],
]

let n = 0
function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e)
    const s = statSync(p)
    if (s.isDirectory()) walk(p)
    else if (extname(p) === '.jsx' && !EXCLUDE.has(basename(p))) {
      const orig = readFileSync(p, 'utf8')
      let t = orig
      for (const [re, to] of repls) t = t.replace(re, to)
      if (t !== orig) { writeFileSync(p, t); n++; console.log('  darkened', p.replace(root, 'src')) }
    }
  }
}
walk(root)
console.log(`done — ${n} files`)
