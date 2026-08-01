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
import SampleDownloads from '../components/SampleDownloads'
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

      {/* Pricing follows the seven-tool suite: the reader has just seen the whole
          toolkit, so "every plan includes all seven tools" lands with the platform
          value fresh — and #pricing is reachable high on the page. */}
      <Pricing />

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
      {/* How it works sits near the bottom, right before the final CTA — once the
          reader is convinced, the four steps show how simple starting is, then hand
          straight to "start your next list". */}
      <HowItWorks />
      <FinalCTA />
      {/* Free sample CSVs — lets a still-hesitant reader see the exact export
          (with and without buying-intent signals) before they sign up. */}
      <SampleDownloads />
      {/* FAQ sits last, right above the footer — it catches the reader who scrolled
          past the final CTA still weighing objections before their first export. */}
      <FAQ />
    </>
  )
}
