import Hero from '../components/Hero'
import ToolMarquee from '../components/ToolMarquee'
import Manifesto from '../components/Manifesto'
import ProductIndex from '../components/ProductIndex'
import Safety from '../components/Safety'
import ProofBand from '../components/ProofBand'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'

// Editorial homepage — fewer, stronger sections.
export default function HomePage() {
  return (
    <>
      <Hero />
      <ToolMarquee />
      <Manifesto />
      <ProductIndex />
      <Safety />
      <ProofBand />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
