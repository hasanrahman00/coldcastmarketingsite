import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'
import Seo from '../components/Seo'
import { STATIC_SEO, breadcrumbLd } from '../lib/seo'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import FinalCTA from '../components/FinalCTA'
import { BLOG_POSTS, postPath } from '../lib/blogPosts'
import { formatPostDate } from '../lib/blogFormat'

export default function BlogIndexPage() {
  return (
    <>
      <Seo
        path="/blog"
        {...STATIC_SEO['/blog']}
        jsonLd={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])}
      />
      <PageHero
        eyebrow="Blog"
        title="Account-safe lead gen, explained."
        subtitle="Practical guides on scraping Sales Navigator safely, exporting and enriching leads, and keeping your emails out of spam — from the team behind Coldcast."
      />

      <section className="container-px pb-24">
        <div className="mx-auto grid max-w-4xl gap-6">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={0.05 * i}>
              <Link
                to={postPath(post.slug)}
                className="group block rounded-2xl border border-hairline bg-panel p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/40 hover:bg-lime/[0.04] sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-faint">
                  <span className="rounded-full border border-hairline bg-white/[0.04] px-3 py-1 font-semibold uppercase tracking-[0.08em]">
                    {post.tag}
                  </span>
                  <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} />
                    {post.readMinutes} min read
                  </span>
                </div>
                <h2 className="mt-4 text-balance text-xl font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-lime sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime">
                  Read the guide
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
