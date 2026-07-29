import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react'
import Seo from '../components/Seo'
import { breadcrumbLd, faqLd, articleLd } from '../lib/seo'
import Reveal from '../components/Reveal'
import FinalCTA from '../components/FinalCTA'
import { BLOG_POSTS, getPost, postPath } from '../lib/blogPosts'
import { formatPostDate, tokenizeInline } from '../lib/blogFormat'

// [label](/path) → router Link, [label](https://…) → <a>. **bold** → <strong>.
function Inline({ text }) {
  return tokenizeInline(text).map((seg, i) => {
    if (seg.type === 'bold') {
      return (
        <strong key={i} className="font-semibold text-ink">
          {seg.value}
        </strong>
      )
    }
    if (seg.type === 'link') {
      const cls = 'font-semibold text-lime underline decoration-lime/35 decoration-2 underline-offset-4 transition-colors hover:decoration-lime/70'
      return seg.href.startsWith('/') ? (
        <Link key={i} to={seg.href} className={cls}>
          {seg.label}
        </Link>
      ) : (
        <a key={i} href={seg.href} rel="noopener" className={cls}>
          {seg.label}
        </a>
      )
    }
    return seg.value
  })
}

function Block({ block }) {
  if (typeof block === 'string') {
    return (
      <p className="mt-5 text-[15.5px] leading-[1.8] text-muted">
        <Inline text={block} />
      </p>
    )
  }
  if (block.list) {
    return (
      <ul className="mt-5 space-y-3">
        {block.list.map((item, i) => (
          <li key={i} className="relative pl-6 text-[15.5px] leading-[1.8] text-muted">
            <span aria-hidden className="absolute left-0 top-[0.72em] h-1.5 w-1.5 rounded-full bg-lime" />
            <Inline text={item} />
          </li>
        ))}
      </ul>
    )
  }
  // Comparison table — scrolls horizontally on narrow screens so the page body
  // never overflows. Column 1 = feature, column 2 = Coldcast (lime), rest neutral.
  if (block.table) {
    return (
      <div className="mt-6 overflow-x-auto rounded-2xl border border-hairline">
        <table className="w-full border-collapse text-left text-[14px]">
          <thead>
            <tr className="bg-panel2">
              {block.table.headers.map((h, i) => (
                <th key={i} className={`p-4 font-bold ${i === 1 ? 'text-lime' : 'text-ink'}`}>
                  <Inline text={h} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.table.rows.map((row, r) => (
              <tr key={r} className="border-t border-hairline">
                {row.map((cell, c) => (
                  <td key={c} className={`p-4 align-top ${c === 0 ? 'font-semibold text-ink' : 'text-muted'}`}>
                    <Inline text={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  // In-body figure (crawlable <img> with descriptive alt).
  if (block.image) {
    return (
      <figure className="mt-8">
        <img
          src={block.image.src}
          alt={block.image.alt}
          width={block.image.width}
          height={block.image.height}
          loading="lazy"
          className="w-full rounded-2xl border border-hairline"
        />
        {block.image.caption && (
          <figcaption className="mt-3 text-center text-[13px] text-faint">{block.image.caption}</figcaption>
        )}
      </figure>
    )
  }
  return null
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <Navigate to="/blog" replace />

  const path = postPath(post.slug)
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <Seo
        path={path}
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        ogTitle={post.title}
        ogDescription={post.metaDescription}
        image={post.image?.src}
        jsonLd={[
          articleLd({ title: post.title, description: post.metaDescription, path, datePublished: post.datePublished, dateModified: post.dateModified, image: post.image?.src }),
          breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path }]),
          faqLd(post.faq),
        ]}
      />

      <article className="relative overflow-hidden">
        {/* Header */}
        <header className="container-px pb-4 pt-36 sm:pt-44">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-faint transition-colors hover:text-lime"
              >
                <ArrowLeft size={15} />
                All guides
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-faint">
                <span className="rounded-full border border-hairline bg-white/[0.04] px-3 py-1 font-semibold uppercase tracking-[0.08em]">
                  {post.tag}
                </span>
                <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} />
                  {post.readMinutes} min read
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 text-balance text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-pretty text-base leading-relaxed text-ink/65 sm:text-lg">{post.excerpt}</p>
            </Reveal>
          </div>
        </header>

        {/* Hero image — a real, crawlable <img> so Google Images can index the brand. */}
        {post.image && (
          <div className="container-px pt-8">
            <figure className="mx-auto max-w-3xl">
              <img
                src={post.image.src}
                alt={post.image.alt}
                width={post.image.width}
                height={post.image.height}
                loading="eager"
                className="w-full rounded-2xl border border-hairline"
              />
              {post.image.caption && (
                <figcaption className="mt-3 text-center text-[13px] text-faint">{post.image.caption}</figcaption>
              )}
            </figure>
          </div>
        )}

        {/* Body */}
        <div className="container-px pb-16 pt-8">
          <div className="mx-auto max-w-3xl">
            {post.intro?.map((block, i) => (
              <Block key={`intro-${i}`} block={block} />
            ))}
            {post.sections.map((section) => (
              <section key={section.h2} className="mt-10 first:mt-0">
                <h2 className="text-balance text-xl font-bold tracking-tight text-ink sm:text-2xl">{section.h2}</h2>
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </section>
            ))}

            {/* FAQ — rendered on-page and mirrored as FAQPage JSON-LD via <Seo>. */}
            {post.faq?.length > 0 && (
              <section className="mt-14">
                <h2 className="text-balance text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  Frequently asked questions
                </h2>
                <div className="mt-6 space-y-4">
                  {post.faq.map((f) => (
                    <div key={f.q} className="rounded-2xl border border-hairline bg-panel p-6">
                      <h3 className="text-[15.5px] font-bold leading-snug text-ink">{f.q}</h3>
                      <p className="mt-3 text-[15px] leading-[1.75] text-muted">{f.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related guides */}
            {related.length > 0 && (
              <section className="mt-14">
                <h2 className="text-xl font-bold tracking-tight text-ink">Keep reading</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      to={postPath(p.slug)}
                      className="group rounded-2xl border border-hairline bg-panel p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/40 hover:bg-lime/[0.04]"
                    >
                      <span className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-faint">{p.tag}</span>
                      <span className="mt-2 block text-[15px] font-bold leading-snug text-ink transition-colors group-hover:text-lime">
                        {p.title}
                      </span>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-lime">
                        Read
                        <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  )
}
