import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight, ChevronRight } from "lucide-react";
import { posts, categoryColors } from "@/lib/newsData";

export const metadata: Metadata = {
  title: "IT News & Insights | Accelerated Cloud Solutions Blog",
  description:
    "IT tips, cybersecurity alerts, cloud updates, and AI insights for small businesses in Minneapolis–St. Paul and Chicago suburbs.",
  alternates: { canonical: "https://acloudsol.com/news" },
  openGraph: {
    title: "IT News & Insights | Accelerated Cloud Solutions Blog",
    description: "IT tips, cybersecurity alerts, cloud updates, and AI insights for small businesses.",
    url: "https://acloudsol.com/news",
  },
};

const categories = ["All", "Managed IT", "Cybersecurity", "Cloud", "AI Solutions", "IT Consulting"];

export default function News() {
  const featuredPost = posts.find((p) => p.featured);
  const otherPosts = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-[#0d1829] overflow-hidden">
        <div className="absolute inset-0 acs-dot-grid opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="text-[#60a5fa] text-sm font-semibold uppercase tracking-wider mb-3 block">IT Insights & News</span>
            <h1 className="text-5xl font-black text-white font-[Barlow] mb-4">IT Insights for<br />Minneapolis Businesses</h1>
            <p className="text-slate-400 text-lg">
              Practical IT tips, cybersecurity alerts, and technology insights from the ACS team — helping Minneapolis–St. Paul and Chicago suburb businesses stay secure and competitive.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-slate-50">
          <div className="container">
            <div className="text-xs font-semibold text-[#1e6fff] uppercase tracking-wider mb-4">Featured Article</div>
            <Link href={`/news/${featuredPost.slug}`}>
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#1e6fff]/40 transition-all hover:shadow-lg group">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${categoryColors[featuredPost.category] || "bg-slate-100 text-slate-700"}`}>
                      {featuredPost.category}
                    </span>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-slate-500 text-xs mb-4">
                      <span className="flex items-center gap-1"><Calendar size={12} />{featuredPost.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 font-[Barlow] mb-3 group-hover:text-[#1e6fff] transition-colors">{featuredPost.title}</h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{featuredPost.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-[#1e6fff] font-semibold text-sm">
                      Read Article <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-2xl font-black text-slate-900 font-[Barlow] mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post) => (
              <Link key={post.id} href={`/news/${post.slug}`}>
                <article className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#1e6fff]/40 transition-all hover:shadow-md group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[post.category] || "bg-slate-100 text-slate-700"}`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-slate-500 text-xs mb-3">
                      <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-[Barlow] mb-2 group-hover:text-[#1e6fff] transition-colors leading-snug">{post.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                          <Tag size={10} />{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d1829]">
        <div className="container text-center">
          <h2 className="text-3xl font-black text-white font-[Barlow] mb-4">Ready to Modernize Your IT?</h2>
          <p className="text-slate-400 mb-6">Get a free IT assessment from the ACS team.</p>
          <Link href="/contact">
            <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-3.5 rounded-lg transition-all hover:scale-105 flex items-center gap-2 mx-auto">
              Get Free Assessment <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
