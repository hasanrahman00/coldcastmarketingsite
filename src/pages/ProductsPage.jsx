import PageHero from '../components/PageHero'
import ProductIndex from '../components/ProductIndex'
import ProofBand from '../components/ProofBand'
import FinalCTA from '../components/FinalCTA'
import Button from '../components/Button'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

// Editorial products overview — the index does the talking.
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
        <Button as="a" href={DEMO_URL} variant="ghost" size="lg">
          Book a demo
        </Button>
      </PageHero>

      <ProductIndex kicker="The suite" />
      <ProofBand kicker="The record" />
      <FinalCTA />
    </>
  )
}
