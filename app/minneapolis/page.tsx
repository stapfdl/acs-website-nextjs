import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Cloud, Monitor, Brain, BarChart3, CheckCircle2,
  Phone, ArrowRight, MapPin, Star, Clock, Users, Building2,
  ChevronRight, Lock, Server, Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Support Minneapolis MN | Managed IT Services",
  description:
    "Managed IT, cybersecurity & cloud for Minneapolis, MN. Local technicians, flat-rate pricing, same-day response. Serving downtown, Uptown & NE Minneapolis.",
  alternates: { canonical: "https://acloudsol.com/minneapolis" },
  openGraph: {
    title: "Managed IT Services Minneapolis | Accelerated Cloud Solutions",
    description:
      "Managed IT, cybersecurity & cloud for Minneapolis, MN. Local technicians, flat-rate pricing, same-day response.",
    url: "https://acloudsol.com/minneapolis",
  },
};

const services = [
  { icon: Monitor, title: "Managed IT Services", description: "Flat-rate, proactive IT management for Minneapolis businesses. We monitor, maintain, and support your entire IT environment so you can focus on growth.", link: "/managed-it" },
  { icon: Shield, title: "Cybersecurity", description: "Enterprise-grade cybersecurity protection tailored for Minneapolis SMBs. Threat detection, endpoint protection, compliance, and rapid incident response.", link: "/cybersecurity" },
  { icon: Cloud, title: "Cloud & Modern Workplace", description: "Microsoft 365, Azure cloud migration, and hybrid infrastructure solutions that modernize how Minneapolis teams work — securely and efficiently.", link: "/cloud" },
  { icon: BarChart3, title: "IT Consulting & vCIO", description: "Strategic IT leadership without the full-time cost. Our vCIO services give Minneapolis business owners a technology roadmap aligned to their goals.", link: "/it-consulting" },
  { icon: Brain, title: "AI Business Solutions", description: "We help Minneapolis businesses harness AI to automate workflows, reduce costs, and gain competitive advantages — without the complexity.", link: "/ai-solutions" },
];

const whyAcs = [
  { icon: Clock, title: "Same-Day Local Response", description: "Our Minneapolis-area team responds within hours — not days. When your business is down, every minute counts." },
  { icon: Users, title: "Dedicated Account Manager", description: "You'll always work with the same team who knows your business, your systems, and your goals." },
  { icon: Building2, title: "SMB-Focused Expertise", description: "We specialize in businesses with 20–300 employees — the exact size where enterprise IT expertise makes the biggest difference." },
  { icon: Shield, title: "No Long-Term Contracts", description: "We earn your business every month. No lock-in, no fine print — just results that keep you coming back." },
];

const industries = [
  "Professional Services", "Financial & Accounting Firms", "Healthcare & Medical Offices",
  "Legal Practices", "Construction & Real Estate", "Manufacturing & Distribution",
  "Retail & E-Commerce", "Non-Profit Organizations",
];

const neighborhoods = [
  "Downtown Minneapolis", "Uptown", "North Loop", "Northeast Minneapolis",
  "Edina", "Bloomington", "Plymouth", "Eden Prairie",
  "Minnetonka", "Maple Grove", "Brooklyn Park", "Richfield",
];

const faqs = [
  { q: "How quickly can Accelerated Cloud Solutions respond to IT issues in Minneapolis?", a: "Our Minneapolis-area team provides same-day response for critical issues and typically resolves most support tickets within 2–4 hours. For emergencies, we offer 24/7 monitoring and on-call support." },
  { q: "Do you offer on-site IT support in Minneapolis?", a: "Yes. While many issues are resolved remotely, we provide on-site support throughout the Minneapolis–St. Paul metro area when hands-on work is needed." },
  { q: "What size businesses do you serve in Minneapolis?", a: "We specialize in Minneapolis businesses with 20–300 employees — small and mid-sized companies that need enterprise-grade IT without the enterprise price tag." },
  { q: "Can you help our Minneapolis business move to the cloud?", a: "Absolutely. We are Microsoft-certified and specialize in Microsoft 365 and Azure cloud migrations for Minneapolis businesses, including hybrid environments and secure remote work setups." },
  { q: "How does your pricing work for Minneapolis managed IT services?", a: "We offer flat-rate monthly pricing based on the number of users and devices — no surprise bills. You get unlimited support, proactive monitoring, and strategic IT planning all included." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Accelerated Cloud Solutions",
  description: "Managed IT services, cybersecurity, and cloud solutions for Minneapolis businesses.",
  url: "https://acloudsol.com/minneapolis",
  telephone: "+18889555001",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7900 International Drive, Suite 300-7046",
    addressLocality: "Bloomington",
    addressRegion: "MN",
    postalCode: "55425",
    addressCountry: "US",
  },
  areaServed: { "@type": "City", name: "Minneapolis" },
  priceRange: "$$",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 20, maxValue: 300 },
};

export default function Minneapolis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <div className="bg-white min-h-screen">
        {/* Hero */}
        <section className="relative bg-[#0d1829] pt-48 pb-24 overflow-hidden">
          <div className="absolute inset-0 acs-dot-grid opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e6fff]/10 via-transparent to-transparent" />
          <div className="container relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-[#60a5fa]" />
                <span className="text-[#60a5fa] text-sm font-medium">Minneapolis, MN</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white font-[Barlow] leading-tight mb-6">
                Managed IT Services<br />
                <span className="text-[#60a5fa]">Minneapolis, MN</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Flat-rate managed IT, cybersecurity, and cloud solutions for Minneapolis businesses with 20–300 employees. Local technicians, same-day response, no long-term contracts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-2 font-[Barlow]">
                    Get Free IT Assessment <ArrowRight size={18} />
                  </button>
                </Link>
                <a href="tel:8889555001">
                  <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all flex items-center gap-2 border border-white/20">
                    <Phone size={18} /> 888-955-5001
                  </button>
                </a>
              </div>
              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  { icon: Star, text: "5-Star Rated" },
                  { icon: Clock, text: "Same-Day Response" },
                  { icon: Shield, text: "No Long-Term Contracts" },
                  { icon: Users, text: "Dedicated Account Manager" },
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

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 font-[Barlow] mb-4">
                IT Services for Minneapolis Businesses
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed for Minneapolis SMBs — from day-to-day IT support to strategic technology leadership.
              </p>
            </div>
            {/* 3+2 layout */}
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.slice(0, 3).map((svc) => (
                  <Link key={svc.title} href={svc.link}>
                    <div className="acs-service-card p-6 rounded-xl h-full cursor-pointer">
                      <svc.icon size={32} className="text-[#1e6fff] mb-4" />
                      <h3 className="text-lg font-bold text-slate-900 font-[Barlow] mb-2">{svc.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{svc.description}</p>
                      <span className="inline-flex items-center gap-1 text-[#1e6fff] text-sm font-medium mt-4">
                        Learn more <ChevronRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 md:mx-auto">
                {services.slice(3).map((svc) => (
                  <Link key={svc.title} href={svc.link}>
                    <div className="acs-service-card p-6 rounded-xl h-full cursor-pointer">
                      <svc.icon size={32} className="text-[#1e6fff] mb-4" />
                      <h3 className="text-lg font-bold text-slate-900 font-[Barlow] mb-2">{svc.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{svc.description}</p>
                      <span className="inline-flex items-center gap-1 text-[#1e6fff] text-sm font-medium mt-4">
                        Learn more <ChevronRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why ACS */}
        <section className="py-20 bg-[#0d1829]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white font-[Barlow] mb-4">
                Why Minneapolis Businesses Choose ACS
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We're not just an IT vendor — we're a strategic partner invested in your Minneapolis business's success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyAcs.map((item) => (
                <div key={item.title} className="acs-card-dark p-6 rounded-xl">
                  <item.icon size={28} className="text-[#60a5fa] mb-4" />
                  <h3 className="text-white font-bold font-[Barlow] mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-900 font-[Barlow] mb-3">
                Industries We Serve in Minneapolis
              </h2>
              <p className="text-slate-600">Specialized IT solutions for Minneapolis's diverse business community.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((ind) => (
                <div key={ind} className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg p-4">
                  <CheckCircle2 size={16} className="text-[#1e6fff] shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-900 font-[Barlow] mb-3">
                Minneapolis Neighborhoods We Serve
              </h2>
              <p className="text-slate-600">On-site and remote IT support across the Minneapolis metro area.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {neighborhoods.map((n) => (
                <span key={n} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm px-4 py-2 rounded-full font-medium">
                  <MapPin size={12} className="text-[#1e6fff]" /> {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-slate-900 font-[Barlow] mb-3">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600">Common questions from Minneapolis businesses about our IT services.</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 font-[Barlow] mb-3 flex items-start gap-3">
                    <span className="w-6 h-6 bg-[#1e6fff] text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">Q</span>
                    {faq.q}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed pl-9">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#1e6fff]">
          <div className="container text-center">
            <h2 className="text-4xl font-black text-white font-[Barlow] mb-4">
              Ready to Upgrade Your Minneapolis IT?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join Minneapolis businesses that trust Accelerated Cloud Solutions for reliable, secure, and strategic IT.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-10 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-2">
                  Get Your Free IT Assessment <ArrowRight size={18} />
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

        {/* Related */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="container">
            <h2 className="text-2xl font-black text-slate-900 font-[Barlow] mb-6 text-center">Explore Our Services</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: "Managed IT Services", href: "/managed-it" },
                { label: "Cybersecurity", href: "/cybersecurity" },
                { label: "Cloud & Modern Workplace", href: "/cloud" },
                { label: "IT Consulting & vCIO", href: "/it-consulting" },
                { label: "AI Business Solutions", href: "/ai-solutions" },
                { label: "About ACS", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:border-[#1e6fff] hover:text-[#1e6fff] text-slate-600 text-sm px-4 py-2 rounded-full transition-colors font-medium">
                    {link.label} <ChevronRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
