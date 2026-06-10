import BackgroundFX from './components/BackgroundFX'
import Grain from './components/Grain'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GtmPipeline from './components/GtmPipeline'
import TrustBar from './components/TrustBar'
import VolumeBand from './components/VolumeBand'
import Safety from './components/Safety'
import StatsBand from './components/StatsBand'
import SpeedAccuracy from './components/SpeedAccuracy'
import Features from './components/Features'
import IntentSignals from './components/IntentSignals'
import WaterfallEnrichment from './components/WaterfallEnrichment'
import OutputPreview from './components/OutputPreview'
import Comparison from './components/Comparison'
import HowItWorks from './components/HowItWorks'
import CredibilityRow from './components/CredibilityRow'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      {/* Accessibility: skip straight to content */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-gradient focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <BackgroundFX />
      <Grain />

      {/* Rounded "framed website" — a thin light gutter + hairline bezel that
          rounds all 4 corners of the viewport. Drawn above content, click-through. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70] rounded-[1.35rem] border-[7px] border-[#e7eaf6] shadow-[inset_0_0_0_1.5px_rgba(12,18,45,0.12)] sm:rounded-[2rem] sm:border-[10px]"
      />

      <Navbar />

      <main id="main">
        <Hero />
        <GtmPipeline />
        <TrustBar />
        {/* The two differentiators, back to back */}
        <VolumeBand />
        <Safety />
        <StatsBand />
        <SpeedAccuracy />
        <Features />
        <IntentSignals />
        <WaterfallEnrichment />
        <OutputPreview />
        <Comparison />
        <HowItWorks />
        <CredibilityRow />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
