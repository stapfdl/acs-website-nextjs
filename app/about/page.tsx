import type { Metadata } from "next";
import Link from "next/link";
import { Award, Users, Shield, TrendingUp, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About ACS | Minneapolis IT Company",
  description:
    "ACS is a Minneapolis-based managed IT services provider with 25+ years of experience helping small businesses with 20–300 employees leverage technology strategically.",
  alternates: { canonical: "https://acloudsol.com/about" },
  openGraph: {
    title: "About ACS | Minneapolis IT Company",
    description: "ACS is a Minneapolis-based managed IT services provider with 25+ years of experience helping small businesses leverage technology strategically.",
    url: "https://acloudsol.com/about",
  },
};

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs-hero-bg-WWMJEoxnwtfk23rdKieacR.webp";

const values = [
  { icon: Shield, title: "Security-First", desc: "Every solution we design starts with security. We believe cybersecurity is not optional — it is foundational." },
  { icon: Users, title: "People-Centered", desc: "Technology exists to serve people. We build relationships, not just support tickets." },
  { icon: TrendingUp, title: "Strategic Thinking", desc: "We align technology with your business goals — not just keeping the lights on." },
  { icon: Award, title: "Continuous Excellence", desc: "We hold ourselves to enterprise standards, regardless of client size." },
];

const stats = [
  { value: "25+", label: "Years in Business" },
  { value: "200+", label: "Clients Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "5★", label: "Client Rating" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative pt-40 pb-20 overflow-hidden"
        style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center top" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220f7] to-[#0d1829cc]" />
        <div className="absolute inset-0 acs-dot-grid opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#60a5fa] text-sm font-semibold uppercase tracking-wider mb-3 block">About ACS</span>
            <h1 className="text-5xl lg:text-6xl font-black text-white font-[Barlow] leading-tight mb-5">
              Your Strategic IT Partner<br />
              <span className="acs-glow-text">for 25+ Years</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Accelerated Cloud Solutions is a Minneapolis-based managed IT services provider dedicated to helping small and mid-sized businesses leverage technology as a strategic advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#0d1829] border-y border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-[#60a5fa] font-[Barlow]">{s.value}</div>
                <div className="text-slate-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 font-[Barlow] mb-5">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-lg">
            We believe every small business deserves enterprise-grade technology — without the enterprise price tag or the complexity. Our mission is to be the trusted technology partner that helps Minneapolis–St. Paul and Chicago suburb businesses run more efficiently, stay secure, and grow confidently.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Founded with a focus on high-touch, high-value service, ACS has spent over two decades helping businesses with 20–300 employees use technology strategically. We don&apos;t just fix computers — we align your IT investments with your business goals and deliver measurable results.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 font-[Barlow]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-[#1e6fff]/40 transition-colors">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-[#1e6fff]" />
                </div>
                <h3 className="font-black text-slate-900 font-[Barlow] mb-2">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 font-[Barlow] mb-8">Leadership</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-20 h-20 bg-[#1e6fff] rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-black font-[Barlow]">D</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-900 font-[Barlow] mb-1">Darin</h3>
                <p className="text-[#1e6fff] font-semibold text-sm mb-3">CEO & Senior Network Solutions Architect</p>
                <p className="text-slate-600 leading-relaxed">
                  With over 25 years of experience helping small businesses leverage technology strategically, Darin founded Accelerated Cloud Solutions to bring enterprise-grade IT to the SMB market. His deep expertise in network architecture, cybersecurity, and cloud solutions — combined with a passion for business strategy — makes ACS a true technology partner, not just a vendor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1e6fff]">
        <div className="container text-center">
          <h2 className="text-4xl font-black text-white font-[Barlow] mb-4">Ready to Work Together?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Let&apos;s start with a free IT assessment and see how ACS can help your business.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-10 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-2">
                Get Free Assessment <ArrowRight size={18} />
              </button>
            </Link>
            <a href="tel:8889555001">
              <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-lg transition-all flex items-center gap-2 border border-white/20">
                <Phone size={18} /> Call 888-955-5001
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
