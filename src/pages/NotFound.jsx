import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'

// Client-side 404 for in-app navigation to an unknown route. Hard loads of unknown
// URLs are served the static public/404.html (real 404 status) by Vercel, since
// vercel.json no longer rewrites everything to index.html.
export default function NotFound() {
  return (
    <>
      <Seo
        path="/404"
        title="Page not found (404) | Coldcast"
        description="The page you’re looking for doesn’t exist or has moved. Explore Coldcast — the account-safe LinkedIn Sales Navigator scraper."
      />
      <PageHero
        eyebrow="404"
        title="This page went cold."
        subtitle="The page you’re looking for doesn’t exist or has moved. Here’s the way back."
      >
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl bg-lime-gradient px-7 py-[15px] text-[15.5px] font-semibold text-lime-ink shadow-lime-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lime-btn-hover"
        >
          Back to home
        </Link>
        <Link
          to="/blog"
          className="inline-flex items-center justify-center rounded-xl border border-hairline-strong px-7 py-[15px] text-[15.5px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/50 hover:bg-lime/[0.06]"
        >
          Read the blog
        </Link>
      </PageHero>
    </>
  )
}
