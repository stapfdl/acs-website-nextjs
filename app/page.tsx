import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Cloud, Monitor, Brain, BarChart3,
  CheckCircle2, ArrowRight, MapPin, Phone, Star,
  Cpu, Lock, Zap, Users, TrendingUp, Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Managed IT Services Minneapolis | ACS",
  description:
    "Managed IT, cybersecurity, cloud & AI for Minneapolis–St. Paul and Chicago suburb businesses. Flat-rate pricing, local support, no long-term contracts.",
  alternates: { canonical: "https://acloudsol.com" },
  openGraph: {
    title: "Managed IT Services Minneapolis | ACS",
    description:
      "Managed IT, cybersecurity, cloud & AI for Minneapolis–St. Paul and Chicago suburb businesses. Flat-rate pricing, local support, no long-term contracts.",
    url: "https://acloudsol.com",
  },
};

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs-hero-bg-WWMJEoxnwtfk23rdKieacR.webp";
const CYBER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs-cybersecurity-hhqH9SHBdN3Smop68LBP3w.webp";
const AI_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs-ai-solutions-7TLhEXRjvnz7CvXwTcbGXP.webp";

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://acloudsol.com/#organization",
      name: "Accelerated Cloud Solutions",
      alternateName: "ACS",
      url: "https://acloudsol.com",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs_cropped_c22d91ee.png",
      description: "Accelerated Cloud Solutions is a managed IT services provider (MSP) serving small and mid-sized businesses with 20–300 employees in Minneapolis–St. Paul and Chicago suburbs.",
      foundingDate: "2000",
      telephone: "+18889555001",
      email: "info@acloudsol.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7900 International Drive, Suite 300-7046",
        addressLocality: "Bloomington",
        addressRegion: "MN",
        postalCode: "55425",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Minneapolis" },
        { "@type": "City", name: "St. Paul" },
        { "@type": "City", name: "Bloomington" },
        { "@type": "City", name: "Minnetonka" },
        { "@type": "City", name: "Maple Grove" },
        { "@type": "City", name: "Edina" },
        { "@type": "City", name: "Eagan" },
        { "@type": "City", name: "Woodbury" },
        { "@type": "City", name: "Chicago" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/accelerated-cloud-solutions",
        "https://www.facebook.com/acloudsol",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Managed IT Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed IT Services", description: "Proactive monitoring, helpdesk support, patch management, and IT strategy for businesses with 20–300 employees." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity", description: "Endpoint protection, email security, vulnerability assessments, compliance, and incident response." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Solutions", description: "Microsoft 365, Azure migration, cloud backup, and modern workplace deployments." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Consulting & vCIO", description: "Technology roadmaps, budget planning, vendor management, and executive-level IT advisory." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Business Solutions", description: "Workflow automation, AI tool integration, and productivity solutions tailored for small businesses." } },
        ],
      },
    },
  ],
};

const services = [
  { icon: Monitor, title: "Managed IT Services", description: "Proactive monitoring, help desk support, and full IT management — so you can focus on running your business, not your technology.", href: "/managed-it", color: "text-blue-400" },
  { icon: Shield, title: "Cybersecurity", description: "Enterprise-grade protection against ransomware, phishing, and data breaches. We keep your business safe 24/7.", href: "/cybersecurity", color: "text-cyan-400" },
  { icon: Cloud, title: "Cloud & Modern Workplace", description: "Microsoft 365, Azure, and hybrid cloud solutions that enable your team to work securely from anywhere.", href: "/cloud", color: "text-sky-400" },
  { icon: BarChart3, title: "IT Consulting / vCIO", description: "Strategic technology leadership without the full-time executive cost. Align your IT investments with your business goals.", href: "/it-consulting", color: "text-indigo-400" },
  { icon: Brain, title: "AI Business Solutions", description: "Practical AI tools that automate workflows, reduce costs, and give your small business a competitive edge.", href: "/ai-solutions", color: "text-violet-400" },
];

const differentiators = [
  { icon: Users, title: "Local Human Support", desc: "Real people who know your business — not overseas call centers." },
  { icon: Zap, title: "Proactive Management", desc: "We fix problems before they impact your operations." },
  { icon: TrendingUp, title: "Strategic vCIO", desc: "Technology aligned with your business growth strategy." },
  { icon: Lock, title: "Cybersecurity-First", desc: "Security built into every solution, not bolted on after." },
  { icon: Cpu, title: "AI-Powered Tools", desc: "Cutting-edge automation and AI for SMB competitive advantage." },
  { icon: Award, title: "25+ Years Experience", desc: "Deep expertise helping small businesses leverage technology." },
];

const cities = [
  { name: "Minneapolis", href: "/minneapolis", state: "MN" },
  { name: "St. Paul", href: "/st-paul", state: "MN" },
  { name: "Bloomington", href: "/bloomington", state: "MN" },
  { name: "Minnetonka", href: "/minnetonka", state: "MN" },
  { name: "Maple Grove", href: "/maple-grove", state: "MN" },
  { name: "Edina", href: "/edina", state: "MN" },
  { name: "Eagan", href: "/eagan", state: "MN" },
  { name: "Woodbury", href: "/woodbury", state: "MN" },
  { name: "Chicago", href: "/chicago", state: "IL" },
];

const testimonials = [
  { name: "Sarah M.", role: "CEO, Accounting Firm", city: "Minneapolis", text: "ACS transformed our IT from a constant headache into a strategic asset. Their proactive approach means we rarely have downtime, and when issues do arise, they're resolved same-day.", stars: 5 },
  { name: "James T.", role: "Operations Director", city: "Bloomington", text: "We moved from reactive break-fix IT to ACS managed services 2 years ago. The difference is night and day — our team is more productive, our data is secure, and our IT costs are predictable.", stars: 5 },
  { name: "Linda K.", role: "Managing Partner", city: "Edina", text: "The vCIO service gave us a real technology roadmap for the first time. We're making smarter IT investments and our team is more productive than ever.", stars: 5 },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section
          className="relative pt-44 pb-28 overflow-hidden"
          style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center top" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#060d1af5] to-[#0d1829cc]" />
          <div className="absolute inset-0 acs-dot-grid opacity-20" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#1e6fff]/20 border border-[#1e6fff]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-[#60a5fa] rounded-full animate-pulse" />
                <span className="text-[#60a5fa] text-xs font-semibold uppercase tracking-wider">Minneapolis–St. Paul & Chicago Suburbs</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white font-[Barlow] leading-tight mb-6">
                Managed IT Services<br />
                <span className="text-[#60a5fa]">That Accelerate</span><br />
                Your Business
              </h1>
              <p className="text-slate-300 text-xl leading-relaxed mb-8 max-w-2xl">
                Flat-rate IT management, enterprise cybersecurity, and cloud solutions for Minneapolis–St. Paul and Chicago suburb businesses with 20–300 employees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="/contact" className="acs-btn-amber px-8 py-4 rounded-lg font-bold text-base text-center flex items-center justify-center gap-2">
                  Get Free IT Assessment <ArrowRight size={18} />
                </Link>
                <a href="tel:8889555001" className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/5 transition-colors">
                  <Phone size={18} /> 888-955-5001
                </a>
              </div>
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Star, text: "5-Star Rated" },
                  { icon: Shield, text: "No Long-Term Contracts" },
                  { icon: Zap, text: "Same-Day Response" },
                  { icon: Users, text: "20–300 Employee Focus" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Icon size={15} className="text-[#60a5fa]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-[#0d1829] border-y border-white/5">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "25+", label: "Years Experience" },
                { value: "200+", label: "Clients Served" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "<2hr", label: "Avg Response Time" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-black text-[#60a5fa] font-[Barlow]">{stat.value}</div>
                  <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 font-[Barlow] mb-4">Complete IT Services for Your Business</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Everything your business needs to run, grow, and stay secure — from a single trusted partner.</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.slice(0, 3).map((svc) => (
                  <Link key={svc.title} href={svc.href}>
                    <div className="acs-card-dark p-6 rounded-xl h-full cursor-pointer">
                      <svc.icon size={32} className={`${svc.color} mb-4`} />
                      <h3 className="text-lg font-bold text-white font-[Barlow] mb-2">{svc.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{svc.description}</p>
                      <span className="inline-flex items-center gap-1 text-[#60a5fa] text-sm font-medium mt-4">
                        Learn more <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 md:mx-auto">
                {services.slice(3).map((svc) => (
                  <Link key={svc.title} href={svc.href}>
                    <div className="acs-card-dark p-6 rounded-xl h-full cursor-pointer">
                      <svc.icon size={32} className={`${svc.color} mb-4`} />
                      <h3 className="text-lg font-bold text-white font-[Barlow] mb-2">{svc.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{svc.description}</p>
                      <span className="inline-flex items-center gap-1 text-[#60a5fa] text-sm font-medium mt-4">
                        Learn more <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why ACS */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 font-[Barlow] mb-4">Why Businesses Choose ACS</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We&apos;re not just an IT vendor — we&apos;re a strategic partner invested in your success.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((d) => (
                <div key={d.title} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-[#1e6fff]/40 transition-colors">
                  <d.icon size={28} className="text-[#1e6fff] mb-4" />
                  <h3 className="text-slate-900 font-bold font-[Barlow] mb-2">{d.title}</h3>
                  <p className="text-slate-500 text-sm">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-[#0d1829]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white font-[Barlow] mb-4">Service Areas</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Local IT support across Minneapolis–St. Paul and Chicago suburbs.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city) => (
                <Link key={city.href} href={city.href}>
                  <div className="acs-card-dark p-4 rounded-xl flex items-center gap-3 cursor-pointer">
                    <MapPin size={16} className="text-[#60a5fa] shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">{city.name}</div>
                      <div className="text-slate-500 text-xs">{city.state}</div>
                    </div>
                    <ArrowRight size={14} className="text-slate-600 ml-auto" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 font-[Barlow] mb-4">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role} · {t.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1e6fff]">
          <div className="container text-center">
            <h2 className="text-4xl font-black text-white font-[Barlow] mb-4">Ready to Accelerate Your Business?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get a free IT assessment — no obligation, no pressure. Discover how ACS can reduce your IT costs, improve security, and support your growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-10 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-2">
                  Get Free IT Assessment <ArrowRight size={18} />
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
    </>
  );
}
