import { Link } from 'react-router-dom'
import { CHROME_STORE_URL } from '../../lib/constants'
import BrandLogo from '../Logo'

// Footer ported from the home clone. Internal routes use <Link>; static pages
// (/privacy, /terms live as real HTML in public/) and off-site links use <a>.
export default function CloneFooter() {
  return (
    <footer>
      <div className="foot">
        <div className="about">
          <Link to="/" className="logo">
            <BrandLogo size={28} />
            Coldcast
          </Link>
          <p>Lead scraping, enrichment and verification for cold email teams.</p>
          <div className="badges">
            <img src="/images/badges/ccpa.svg" alt="CCPA compliant" width="40" height="47" loading="lazy" />
            <img src="/images/badges/gdpr.svg" alt="GDPR compliant" width="40" height="47" loading="lazy" />
            <img src="/images/badges/soc2.svg" alt="SOC 2 Type II compliant" width="40" height="47" loading="lazy" />
          </div>
        </div>

        <div>
          <div className="colh">Product</div>
          <Link to="/products/sales-navigator-scraper">Sales Navigator</Link>
          <Link to="/products/sales-navigator-account-scraper">Sales Nav Accounts</Link>
          <Link to="/products/apollo-scraper">Apollo</Link>
          <Link to="/products/zoominfo-scraper">ZoomInfo</Link>
          <Link to="/products/linkedin-post-scraper">Post Engagers</Link>
          <Link to="/tools">All tools</Link>
        </div>

        <div>
          <div className="colh">Enrichment</div>
          <Link to="/products/waterfall-enricher">Waterfall Enrich</Link>
          <Link to="/products/email-verify">Email Verify</Link>
          <Link to="/products/domain-enrichment">Domain Enrich</Link>
          <Link to="/coldcast-agent">AI SDR</Link>
        </div>

        <div>
          <div className="colh">Resources</div>
          <Link to="/blog">Blog</Link>
          <Link to="/blog/evaboot-alternative">Compare</Link>
          <a href={CHROME_STORE_URL} target="_blank" rel="noopener noreferrer">Chrome extension</a>
          <Link to="/tools">Help center</Link>
        </div>

        <div>
          <div className="colh">Company</div>
          <Link to="/roles">Solutions</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/products">Products</Link>
        </div>

        <div>
          <div className="colh">Legal</div>
          <a href="/privacy/">Privacy Policy</a>
          <a href="/terms/">Terms</a>
          <a href="/privacy/">Opt out</a>
        </div>

        <div>
          <div className="colh">Contact</div>
          <a href="mailto:contact@coldcast.io">contact@coldcast.io</a>
          <a href="https://www.linkedin.com/company/coldcast-io/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.youtube.com/@coldcastio" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Coldcast. All rights reserved.</span>
        <span>Not associated with LinkedIn, Apollo or ZoomInfo.</span>
      </div>
    </footer>
  )
}
