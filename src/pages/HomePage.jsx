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
import StackStrip from '../components/StackStrip'
import UseCases from '../components/UseCases'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'

export default function HomePage() {
  return (
    <>
      {/* ── HOOK ───────────────────────────────────────────────────────────
          Claim, proof it's real, then show the thing running. */}
      <Hero />
      {/* Sits where the hero's own "Works with the sources your pipeline already
          lives in" chips row used to be — it makes the same point with real
          logos, plus the rating and the zero-bans proof, right under the fold. */}
      <TrustBar />
      <LiveExport />

      {/* ── ANSWER THE FEAR ─────────────────────────────────────────────────
          The hero claims "world's safest Sales Navigator scraper" and TrustBar
          re-asserts zero bans — then the evidence used to sit nine screens down.
          The claim was made three times before it was ever substantiated.

          Safety is not a compliance badge; it's a competitor teardown ("Safe by
          architecture, not by promise" — their cloud browser and stored password
          vs your own session). That's the #1 reason anyone buys this instead of
          Evaboot or PhantomBuster, so it answers the ban question immediately.

          SpeedAccuracy must stay directly BEHIND Safety, never in front: its
          table's "Account safety · shared cloud IPs vs your own IP & session" row
          is a one-line recap of the case Safety just made. Ahead of it, that row
          is a naked assertion. Fear #1 then fear #2, in the order they arrive. */}
      <Safety />
      <SpeedAccuracy />

      {/* ── ORIENT ──────────────────────────────────────────────────────────
          Cheapest section on the page (0.8 screens) and it was buried at 69%
          depth. It also does setup work for everything above and below: "no
          proxies to configure — if you can run a Sales Navigator search, you can
          run Coldcast" is what makes "it runs in your browser, as you" legible. */}
      <HowItWorks />
      {/* Pinned to HowItWorks on purpose: those four steps end at a file, and
          this band says what the file opens in. Travels with it, always. */}
      <StackStrip />

      {/* ── CAPABILITY ──────────────────────────────────────────────────────
          Everything from here argues to a reader who has already been told the
          thing won't get them banned. Same content, but "seven tools" reads as a
          reason to buy rather than a feature dump at a cold visitor.

          GtmPipeline sits at the back of this block on purpose. It's 3.7 screens
          — 18% of the whole page, no CTA — and it used to tax every reader at
          screen 4.5 before they had a reason to care. It rewards the already
          convinced, so it now sits where the already convinced are. Moving this
          one section is what buys the depth for everything above it. */}
      <ProductSuite />
      <Features />
      <IntentSignals />
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
      <VolumeBand />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
