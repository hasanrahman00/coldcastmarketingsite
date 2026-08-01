import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, FileSpreadsheet, Eye, X } from 'lucide-react'
import Reveal from './Reveal'

// Same card treatment as FinalCTA — a big rounded panel with a soft top-edge
// bloom. Each button opens a PREVIEW MODAL that renders the real CSV as a table;
// the actual download lives inside that modal.
//
// The files under /public/samples are PRIVACY-SAFE copies of a real Coldcast
// export (emails masked, last names → initial, profile URLs redacted, long
// free-text trimmed), so no real person's contact data ships on a public page.
const SAMPLE_GLOW = 'radial-gradient(600px 300px at 50% -80px, rgba(0,0,0,0.10), transparent 70%)'
const PREVIEW_ROWS = 8

const SAMPLES = [
  {
    key: 'no',
    title: 'Core lead data — no signals',
    label: 'Sample — no signals',
    file: '/samples/sales-navigator-sample.csv',
    downloadAs: 'Coldcast — Sales Navigator sample.csv',
    cols: 29,
    featured: false,
    previewCols: ['Company Name', 'First Name', 'Last Name', 'Email', 'Status', 'Job Title', 'Industry'],
  },
  {
    key: 'sig',
    title: 'With buying-intent signals',
    label: 'Sample — with signals',
    file: '/samples/sales-navigator-sample-with-signals.csv',
    downloadAs: 'Coldcast — Sales Navigator sample (with signals).csv',
    cols: 35,
    featured: true,
    previewCols: ['Company Name', 'First Name', 'Email', 'Job Title', 'Industry', 'City', 'Posted on LinkedIn'],
  },
]

// Minimal RFC-4180-ish CSV parser — handles quoted fields with embedded
// commas / quotes / newlines, so the long About & post columns can't misalign it.
function parseCSV(text) {
  const rows = []
  let row = [], field = '', i = 0, q = false
  while (i < text.length) {
    const c = text[i]
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i += 2; continue } q = false; i++; continue }
      field += c; i++; continue
    }
    if (c === '"') { q = true; i++; continue }
    if (c === ',') { row.push(field); field = ''; i++; continue }
    if (c === '\r') { i++; continue }
    if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; i++; continue }
    field += c; i++
  }
  if (field.length || row.length) { row.push(field); rows.push(row) }
  return rows
}

function PreviewModal({ sample, onClose }) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let alive = true
    fetch(sample.file)
      .then((r) => r.text())
      .then((text) => {
        if (!alive) return
        const parsed = parseCSV(text)
        const header = parsed[0] || []
        const body = parsed.slice(1).filter((r) => r.length > 1)
        // Show EVERY column — the table scrolls horizontally inside the modal.
        setData({
          cols: header,
          rows: body.slice(0, PREVIEW_ROWS).map((r) => header.map((_, n) => r[n] ?? '')),
          total: body.length,
        })
      })
      .catch(() => alive && setError(true))
    return () => { alive = false }
  }, [sample])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div aria-hidden className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${sample.title} preview`}
        className="relative flex max-h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-[16px] border border-hairline-strong bg-bg shadow-float"
        initial={{ scale: 0.96, y: 12 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.97, y: 8 }}
        transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-hairline px-5 py-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-hairline bg-panel text-ink">
              <FileSpreadsheet size={15} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-ink">{sample.title}</p>
              <p className="text-[11px] text-faint">{sample.cols} columns · previewing first {PREVIEW_ROWS} rows</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-hairline text-muted transition-colors hover:bg-black/[0.04] hover:text-ink"
          >
            <X size={16} />
          </button>
        </div>

        <div className="min-h-[180px] flex-1 overflow-auto">
          {error ? (
            <p className="p-8 text-center text-sm text-muted">Couldn’t load the preview — you can still download the file below.</p>
          ) : !data ? (
            <p className="p-8 text-center text-sm text-muted">Loading preview…</p>
          ) : (
            <table className="w-full border-collapse text-left text-[12.5px]">
              <thead>
                <tr>
                  {data.cols.map((c) => (
                    <th
                      key={c}
                      className="sticky top-0 z-10 whitespace-nowrap border-b border-hairline bg-panel px-3 py-2.5 text-[10.5px] font-semibold uppercase tracking-wide text-faint"
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.rows.map((r, ri) => (
                  <tr key={ri} className="border-b border-hairline/70 last:border-0 hover:bg-black/[0.015]">
                    {r.map((cell, ci) => (
                      <td key={ci} className="max-w-[220px] truncate px-3 py-2.5 text-ink/85">
                        {cell || '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline px-5 py-4">
          <p className="text-[12px] text-muted">
            {data ? `${data.total} sample rows · real verified emails` : 'Sample export'}
          </p>
          <a
            href={sample.file}
            download={sample.downloadAs}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-gradient px-6 py-3 text-sm font-semibold text-lime-ink shadow-lime-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lime-btn-hover focus-visible:ring-lime"
          >
            <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
            Download CSV
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function SampleDownloads() {
  const [open, setOpen] = useState(null)

  return (
    <section id="sample-data" className="container-px py-16 sm:py-20">
      <Reveal className="relative overflow-hidden rounded-[24px] border border-lime/25 bg-panel px-6 py-12 text-center sm:px-12 sm:py-16">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: SAMPLE_GLOW }} />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-hairline-strong bg-bg px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ink">
            <FileSpreadsheet size={13} className="text-ink" />
            Sample data
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]">
            See a real Sales Navigator export.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Preview two free sample CSVs pulled straight from Coldcast — clean, verified LinkedIn Sales
            Navigator lead data, with and without buying-intent signals. Download either when you’re ready.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setOpen(SAMPLES[0])}
              className="group inline-flex h-16 items-center justify-center gap-2 rounded-full bg-lime-gradient px-10 text-sm font-semibold uppercase tracking-[0.1em] text-lime-ink shadow-lime-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lime-btn-hover focus-visible:ring-lime"
            >
              <Eye size={17} />
              {SAMPLES[0].label}
            </button>
            <button
              type="button"
              onClick={() => setOpen(SAMPLES[1])}
              className="group inline-flex h-16 items-center justify-center gap-2 rounded-full border border-hairline-strong px-10 text-sm font-semibold uppercase tracking-[0.1em] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/50 hover:bg-lime/[0.06] focus-visible:ring-lime"
            >
              <Eye size={17} className="text-lime" />
              {SAMPLES[1].label}
            </button>
          </div>

          <div className="mt-6 text-[13px] font-medium text-faint">
            Real rows · 29 &amp; 35 columns · verified emails · exports as CSV / XLSX
          </div>
        </div>
      </Reveal>

      <AnimatePresence>
        {open && <PreviewModal sample={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  )
}
