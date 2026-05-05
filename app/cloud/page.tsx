import type { Metadata } from "next";
import Link from "next/link";
import { Cloud, CheckCircle2, ArrowRight, Phone, Server, Users, Globe, Shield, Zap, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & Microsoft 365 Services Minneapolis | ACS",
  description:
    "Microsoft 365, Azure cloud migration & modern workplace solutions for Minneapolis–St. Paul businesses. Certified Microsoft partner. Flat-rate pricing.",
  alternates: { canonical: "https://acloudsol.com/cloud" },
  openGraph: {
    title: "Cloud & Microsoft 365 Services Minneapolis | ACS",
    description: "Microsoft 365, Azure cloud migration & modern workplace solutions for Minneapolis–St. Paul businesses. Certified Microsoft partner.",
    url: "https://acloudsol.com/cloud",
  },
};

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs-hero-bg-WWMJEoxnwtfk23rdKieacR.webp";

const services = [
  { icon: Globe, title: "Microsoft 365 Management", desc: "Complete Microsoft 365 deployment, migration, and ongoing management — Exchange Online, Teams, SharePoint, OneDrive, and the full suite of productivity tools." },
  { icon: Server, title: "Azure Cloud Migration", desc: "Move your on-premise servers and applications to Microsoft Azure with a clear migration plan, minimal downtime, and post-migration support." },
  { icon: Users, title: "Modern Workplace Solutions", desc: "Enable secure remote and hybrid work with Microsoft Teams, Intune device management, and cloud-based collaboration tools your team will actually use." },
  { icon: Shield, title: "Cloud Security", desc: "Secure your cloud environment with conditional access policies, MFA, data loss prevention, and Microsoft Defender for Business." },
  { icon: Zap, title: "Cloud Optimization", desc: "Reduce cloud costs and improve performance with right-sizing, reserved instance planning, and ongoing cloud governance." },
  { icon: Settings, title: "Hybrid Infrastructure", desc: "Seamlessly connect your on-premise systems with cloud services. We design and manage hybrid environments that give you the best of both worlds." },
];

const faqs = [
  { q: "What cloud services does ACS offer for small businesses?", a: "ACS specializes in Microsoft cloud services including Microsoft 365 (formerly Office 365), Microsoft Azure, and Microsoft Teams. We handle licensing, migration, and ongoing management." },
  { q: "How long does a Microsoft 365 migration take?", a: "A typical Microsoft 365 migration for a small business takes 2–4 weeks depending on the number of users, amount of data, and complexity of your current environment. ACS manages the full migration with minimal disruption to your team." },
  { q: "Is cloud storage secure for my business data?", a: "Yes, when properly configured. Microsoft Azure and Microsoft 365 provide enterprise-grade security including encryption at rest and in transit, multi-factor authentication, and compliance certifications. ACS ensures your cloud environment is configured securely and monitored continuously." },
  { q: "Can ACS help us move from on-premise servers to the cloud?", a: "Yes. ACS specializes in migrating small businesses from on-premise servers to Microsoft Azure and Microsoft 365. We handle the full migration including data transfer, application compatibility, user training, and post-migration support — with a clear timeline and fixed pricing." },
  { q: "What is Microsoft Teams and how can it help my business?", a: "Microsoft Teams is a collaboration platform that combines chat, video meetings, file sharing, and app integrations in one place. For businesses with remote or hybrid teams, Teams dramatically improves communication and productivity. ACS deploys and configures Teams as part of our Microsoft 365 services." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
};

export default function CloudPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-white">
        <section className="relative pt-40 pb-20 overflow-hidden" style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center top" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220f7] to-[#0d1829cc]" />
          <div className="absolute inset-0 acs-dot-grid opacity-20" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Cloud size={16} className="text-[#60a5fa]" />
                <span className="text-[#60a5fa] text-sm font-semibold uppercase tracking-wider">Cloud & Modern Workplace</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white font-[Barlow] leading-tight mb-5">
                Cloud & Modern Workplace<br />
                <span className="acs-glow-text">Microsoft Partner</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Modernize your business with Microsoft 365, Azure cloud, and collaboration tools that enable your team to work securely from anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="acs-btn-amber px-7 py-3.5 rounded-md font-bold text-sm text-center">Get Free Cloud Assessment</Link>
                <a href="tel:8889555001" className="flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-white/5 transition-colors">
                  <Phone size={15} /> 888-955-5001
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 font-[Barlow]">Cloud Services for Minneapolis Businesses</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">Microsoft-certified solutions for cloud migration, management, and security.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div key={s.title} className="acs-service-card p-6 rounded-lg bg-white">
                  <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                    <s.icon size={20} className="text-[#1e6fff]" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-[Barlow] mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 font-[Barlow] mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
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

        <section className="py-20 bg-[#1e6fff]">
          <div className="container text-center">
            <h2 className="text-4xl font-black text-white font-[Barlow] mb-4">Ready to Move to the Cloud?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Get a free cloud readiness assessment and migration plan from our Microsoft-certified team.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-10 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-2">
                  Get Free Cloud Assessment <ArrowRight size={18} />
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
