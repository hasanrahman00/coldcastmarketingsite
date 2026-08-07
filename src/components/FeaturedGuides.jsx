import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { BLOG_POSTS, postPath } from '../lib/blogPosts'

// Homepage → pillar-guide links (the "featured guides" pattern): sitewide-ish
// links from the highest-authority page straight into the three big SEO guides,
// with real server-rendered <img> thumbnails + keyword alt text. Slugs are
// pinned so the section stays stable as more posts ship.
const FEATURED_SLUGS = [
  'how-to-use-linkedin-sales-navigator',
  'get-emails-from-linkedin-sales-navigator',
  'export-sales-navigator-leads-to-csv',
]

export default function FeaturedGuides() {
  const posts = FEATURED_SLUGS.map((s) => BLOG_POSTS.find((p) => p.slug === s)).filter(Boolean)
  if (!posts.length) return null

  return (
    <section className="container-px py-20 sm:py-24">
      <SectionHeading
        eyebrow="Guides"
        title="Master Sales Navigator, then export it."
        subtitle="The playbooks our users run: how to search like a pro, how to get verified emails, and how to move it all into your CRM — safely."
      />
      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={0.06 * i}>
            <Link
              to={postPath(post.slug)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-panel transition-all duration-200 hover:-translate-y-1 hover:border-lime/40"
            >
              <img
                src={post.image.src}
                alt={post.image.alt}
                width={post.image.width}
                height={post.image.height}
                loading="lazy"
                className="aspect-[1200/630] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-faint">
                  <span>{post.tag}</span>
                  <span className="inline-flex items-center gap-1 normal-case tracking-normal">
                    <Clock size={12} />
                    {post.readMinutes} min
                  </span>
                </div>
                <h3 className="mt-3 text-[15.5px] font-bold leading-snug text-ink transition-colors group-hover:text-lime">
                  {post.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-semibold text-lime">
                  Read the guide
                  <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/blog" className="text-sm font-semibold text-faint transition-colors hover:text-lime">
          All guides →
        </Link>
      </div>
    </section>
  )
}
