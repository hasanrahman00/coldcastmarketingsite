import { Puzzle, KeyRound, Rocket, Download } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const STEPS = [
  {
    icon: Puzzle,
    title: 'Install the extension',
    desc: 'Add the Coldcast Chrome extension in a couple of clicks — no setup headaches.',
  },
  {
    icon: KeyRound,
    title: 'Connect your workspace',
    desc: 'Paste your API key to link the extension to your Coldcast workspace.',
  },
  {
    icon: Rocket,
    title: 'Run a search & start a job',
    desc: 'Open a Sales Navigator search and start a job straight from your dashboard.',
  },
  {
    icon: Download,
    title: 'Download enriched leads',
    desc: 'Export your finished, enriched list as a clean CSV or XLSX file.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="How it works"
          title="From search to spreadsheet in four steps."
          subtitle="No scripts to babysit, no proxies to configure. If you can run a Sales Navigator search, you can run Coldcast."
        />

        <ol className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal as="li" key={title} delay={i * 0.1} className="relative">
              {/* connector line (desktop) */}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[calc(50%+2.5rem)] top-7 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-hairline to-transparent lg:block"
                />
              )}
              <div className="flex flex-col items-start">
                <div className="relative flex items-center gap-3">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-hairline bg-panel2 text-accent shadow-card">
                    <Icon size={24} />
                  </span>
                  <span className="text-5xl font-extrabold tracking-tight text-black/[0.07]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
