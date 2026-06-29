// Restore white text on saturated gradient/colour buttons & badges that the
// lightify codemod over-darkened. node scripts/fixgrad.mjs
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src')
const SOLID = /bg-(brand-light|brand-dark|brand|violet|magenta|amber|accent|safe|danger)(?![\w/-])/
let n = 0

function fixLine(line) {
  const hasInk = /\btext-ink\b/.test(line)
  if (!hasInk) return line
  const solidGradient = /bg-brand-gradient(?!-soft)/.test(line) || /bg-brand-gradient-vivid/.test(line)
  const colorGradTile = /bg-gradient-to-[a-z]/.test(line) && /grad\}/.test(line) && !/clip-text|bg-clip/.test(line)
  const solidColor = SOLID.test(line)
  if (solidGradient || colorGradTile || solidColor) return line.replace(/\btext-ink\b/g, 'text-white')
  return line
}

function walk(d) {
  for (const e of readdirSync(d)) {
    const p = join(d, e)
    const s = statSync(p)
    if (s.isDirectory()) walk(p)
    else if (extname(p) === '.jsx') {
      const o = readFileSync(p, 'utf8')
      const t = o.split('\n').map(fixLine).join('\n')
      if (t !== o) { writeFileSync(p, t); n++; console.log('  fixed', p.replace(root, 'src')) }
    }
  }
}
walk(root)
console.log(`done — ${n} files`)
