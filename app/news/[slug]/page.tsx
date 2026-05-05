import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight, ArrowLeft, Phone } from "lucide-react";
import { posts, categoryColors } from "@/lib/newsData";

interface Props {
  params: Promise<{ slug: string }>;
}
export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://acloudsol.com/news/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://acloudsol.com/news/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.title,
    },
    publisher: {
      "@type": "Organization",
      name: "Accelerated Cloud Solutions",
      logo: { "@type": "ImageObject", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs_cropped_c22d91ee.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://acloudsol.com/news/${post.slug}` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-40 pb-12 bg-[#0d1829] overflow-hidden">
          <div className="absolute inset-0 acs-dot-grid opacity-20" />
          <div className="container relative z-10 max-w-4xl">
            <Link href="/news" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to News
            </Link>
            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${categoryColors[post.category] || "bg-slate-700 text-white"}`}>
              {post.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-white font-[Barlow] leading-tight mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-400 text-sm">
              <span className="flex items-center gap-1.5"><Calendar size={14} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime}</span>
              <span className="text-slate-500">By {post.author.name} · {post.author.title}</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Article Body */}
              <article className="lg:col-span-2">
                <div className="rounded-xl overflow-hidden mb-8">
                  <img src={post.image} alt={post.title} className="w-full h-72 object-cover" />
                </div>
                <div
                  className="prose prose-slate prose-lg max-w-none
                    prose-headings:font-[Barlow] prose-headings:font-black prose-headings:text-slate-900
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-li:text-slate-600 prose-strong:text-slate-800
                    prose-a:text-[#1e6fff] prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
                <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-200">
                  {post.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      <Tag size={11} />{tag}
                    </span>
                  ))}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* CTA */}
                <div className="bg-[#0d1829] rounded-xl p-6 text-center">
                  <h3 className="text-white font-black font-[Barlow] text-lg mb-2">Ready to Get Started?</h3>
                  <p className="text-slate-400 text-sm mb-4">Get a free IT assessment from the ACS team.</p>
                  <Link href="/contact">
                    <button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 rounded-lg text-sm transition-all flex items-center justify-center gap-2">
                      Free Assessment <ArrowRight size={14} />
                    </button>
                  </Link>
                  <a href="tel:8889555001" className="flex items-center justify-center gap-2 text-slate-400 hover:text-white text-sm mt-3 transition-colors">
                    <Phone size={13} /> 888-955-5001
                  </a>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div>
                    <h3 className="font-black text-slate-900 font-[Barlow] mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((rp) => (
                        <Link key={rp.id} href={`/news/${rp.slug}`}>
                          <div className="flex gap-3 group">
                            <img src={rp.image} alt={rp.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
                            <div>
                              <p className="text-slate-800 text-sm font-semibold group-hover:text-[#1e6fff] transition-colors leading-snug">{rp.title}</p>
                              <p className="text-slate-500 text-xs mt-1">{rp.date}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
