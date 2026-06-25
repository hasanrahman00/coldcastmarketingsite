import PageHero from '../components/PageHero'
import UseCases from '../components/UseCases'
import IntentSignals from '../components/IntentSignals'
import Safety from '../components/Safety'
import FinalCTA from '../components/FinalCTA'
import Button from '../components/Button'
import { TRIAL_URL, DEMO_URL } from '../lib/constants'

export default function RolesPage() {
  return (
    <>
      <PageHero
        eyebrow="By role"
        title="Built for your role in GTM."
        subtitle="From a solo SDR to a full lead-gen agency — Coldcast turns Sales Navigator searches into clean, enriched, ready-to-send lists, account-safe."
      >
        <Button as="a" href={TRIAL_URL} variant="primary" size="lg">
          Start free trial
        </Button>
        <Button as="a" href={DEMO_URL} variant="outline-light" size="lg">
          Book a demo
        </Button>
      </PageHero>

      <UseCases showHeading={false} />
      <IntentSignals />
      <Safety />
      <FinalCTA />
    </>
  )
}
