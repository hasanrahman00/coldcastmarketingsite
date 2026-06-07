import { Puzzle, KeyRound, Rocket, Download } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const STEPS = [
  { icon: Puzzle, title: 'Install', desc: 'Add the Chrome extension.' },
  { icon: KeyRound, title: 'Connect', desc: 'Paste your API key.' },
  { icon: Rocket, title: 'Run a job', desc: 'Start it from your dashboard.' },
  { icon: Download, title: 'Download', desc: 'Export clean CSV or XLSX.' },
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

        <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal as="li" key={title} delay={i * 0.1}>
              <div className="floating-panel h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-hairline bg-brand-gradient-soft text-accent">
                    <Icon size={22} />
                  </span>
                  <span className="font-display text-4xl font-bold tracking-tight text-black/[0.08]">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
