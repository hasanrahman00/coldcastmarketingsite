import Hero from '../components/Hero'
import LiveExport from '../components/LiveExport'
import ProductSuite from '../components/ProductSuite'
import AiSdr from '../components/AiSdr'
import GtmPipeline from '../components/GtmPipeline'
import TrustBar from '../components/TrustBar'
import VolumeBand from '../components/VolumeBand'
import Safety from '../components/Safety'
import SpeedAccuracy from '../components/SpeedAccuracy'
import Features from '../components/Features'
import IntentSignals from '../components/IntentSignals'
import HowItWorks from '../components/HowItWorks'
import UseCases from '../components/UseCases'
import CredibilityRow from '../components/CredibilityRow'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Sits where the hero's own "Works with the sources your pipeline already
          lives in" chips row used to be — it makes the same point with real
          logos, plus the rating and the zero-bans proof, right under the fold. */}
      <TrustBar />
      <LiveExport />
      <ProductSuite />
      <AiSdr />
      <GtmPipeline />
      <VolumeBand />
      <Safety />
      <SpeedAccuracy />
      <Features />
      <IntentSignals />
      <HowItWorks />
      <UseCases />
      <CredibilityRow />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
