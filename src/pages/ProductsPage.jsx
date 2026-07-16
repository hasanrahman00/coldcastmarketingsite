import PageHero from '../components/PageHero'
import ProductSuite from '../components/ProductSuite'
import AiSdr from '../components/AiSdr'
import GtmPipeline from '../components/GtmPipeline'
import WaterfallEnrichment from '../components/WaterfallEnrichment'
import OutputPreview from '../components/OutputPreview'
import FinalCTA from '../components/FinalCTA'
import Button from '../components/Button'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="One platform. Seven tools."
        subtitle="Scrape, enrich, verify and reach — every tool runs account-safe, in your own browser. Use one, or chain them into a full pipeline."
      >
        <Button as="a" href={TRIAL_URL} variant="primary" size="lg">
          Start free trial
        </Button>
        <Button as="a" href={DEMO_URL} variant="outline-light" size="lg">
          Book a demo
        </Button>
      </PageHero>

      <ProductSuite showHeading={false} />
      <AiSdr />
      <WaterfallEnrichment />
      <GtmPipeline />
      <OutputPreview />
      <FinalCTA />
    </>
  )
}
