import Seo from '../components/Seo'
import { STATIC_SEO, faqLd } from '../lib/seo'
import Hero from '../components/Hero'
import ProductSuite from '../components/ProductSuite'
import AiSdr from '../components/AiSdr'
import GtmPipeline from '../components/GtmPipeline'
import TrustBar from '../components/TrustBar'
import FeatureHighlights from '../components/FeatureHighlights'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import UseCases from '../components/UseCases'
import Pricing from '../components/Pricing'
import FAQ, { FAQS } from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Seo path="/" {...STATIC_SEO['/']} jsonLd={faqLd(FAQS)} />
      {/* ── HOOK ───────────────────────────────────────────────────────────
          Claim, proof it's real, then show the thing running. */}
      <Hero />
      {/* Sits where the hero's own "Works with the sources your pipeline already
          lives in" chips row used to be — it makes the same point with real
          logos, plus the rating and the zero-bans proof, right under the fold. */}
      <TrustBar />

      {/* ── ANSWER THE FEAR + THE VALUE ─────────────────────────────────────
          Combines the old Safety teardown ("runs in your browser, not a cloud
          bot") and SpeedAccuracy ("faster / higher match / lower cost") into one
          Features block, right after TrustBar re-asserts zero bans — so the ban
          question and the value case are both answered near the top. */}
      <FeatureHighlights />

      {/* The seven-tool suite sits right after Features — it names each scraper /
          enricher the value case just promised, so "seven tools" reads as proof of
          the platform claim rather than a cold feature dump. */}
      <ProductSuite />

      {/* ── ORIENT ──────────────────────────────────────────────────────────
          Cheapest section on the page (0.8 screens) and it was buried at 69%
          depth. It also does setup work for everything above and below: "no
          proxies to configure — if you can run a Sales Navigator search, you can
          run Coldcast" is what makes "it runs in your browser, as you" legible. */}
      <HowItWorks />

      {/* ── CAPABILITY ──────────────────────────────────────────────────────
          Everything from here argues to a reader who has already been told the
          thing won't get them banned. Same content, but "seven tools" reads as a
          reason to buy rather than a feature dump at a cold visitor.

          GtmPipeline sits at the back of this block on purpose. It's 3.7 screens
          — 18% of the whole page, no CTA — and it used to tax every reader at
          screen 4.5 before they had a reason to care. It rewards the already
          convinced, so it now sits where the already convinced are. Moving this
          one section is what buys the depth for everything above it. */}
      <Features />
      <AiSdr />
      <GtmPipeline />

      {/* ── CLOSE ───────────────────────────────────────────────────────────
          UseCases is load-bearing here, not filler: GtmPipeline and VolumeBand
          must NEVER be adjacent. They render the same logos — Claude/ChatGPT/
          DeepSeek, Instantly/Smartlead — as tools Coldcast orchestrates and then
          as tools Coldcast replaces. One screen apart that reads as a
          contradiction. UseCases is the buffer that keeps them apart.

          VolumeBand goes directly above Pricing because its CTA is literally
          href="#pricing". It used to sit at screen 8.2 pointing at 16.5 — a
          scroll-to-nowhere. Now the handoff is real. */}
      <UseCases />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
