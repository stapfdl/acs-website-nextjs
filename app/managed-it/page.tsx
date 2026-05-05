import type { Metadata } from "next";
import Link from "next/link";
import {
  Monitor, CheckCircle2, ArrowRight, Phone,
  Clock, Headphones, Activity, Server, Wifi, HardDrive,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Managed IT Services Minneapolis | ACS",
  description:
    "Flat-rate managed IT services for Minneapolis–St. Paul businesses. 24/7 monitoring, help desk, server management, and backup. No long-term contracts.",
  alternates: { canonical: "https://acloudsol.com/managed-it" },
  openGraph: {
    title: "Managed IT Services Minneapolis | ACS",
    description:
      "Flat-rate managed IT services for Minneapolis–St. Paul businesses. 24/7 monitoring, help desk, server management, and backup. No long-term contracts.",
    url: "https://acloudsol.com/managed-it",
  },
};

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs-hero-bg-WWMJEoxnwtfk23rdKieacR.webp";

const services = [
  { icon: Activity, title: "24/7 Proactive Monitoring", desc: "We watch your systems around the clock, detecting and resolving issues before they become outages. Real-time alerts, automated remediation, and human escalation when it matters." },
  { icon: Headphones, title: "Help Desk Support", desc: "Local, US-based help desk staffed by certified technicians. Your team gets fast, friendly support via phone, email, or chat — no offshore call centers." },
  { icon: Server, title: "Server & Infrastructure Management", desc: "Complete management of your on-premise and cloud servers, including patching, updates, performance tuning, and capacity planning." },
  { icon: HardDrive, title: "Backup & Disaster Recovery", desc: "Automated, encrypted backups with tested recovery procedures. We ensure your data is protected and your business can recover quickly from any event." },
  { icon: Wifi, title: "Network Management", desc: "Design, deployment, and ongoing management of your business network — firewalls, switches, wireless, and VPN — optimized for performance and security." },
  { icon: Clock, title: "Vendor Management", desc: "We coordinate with your internet provider, software vendors, and hardware suppliers — so you have one point of contact for all your technology needs." },
];

const outcomes = [
  "Reduce IT downtime by up to 85%",
  "Predictable monthly IT costs — no surprise bills",
  "Free your team to focus on business, not tech problems",
  "Stay compliant with industry regulations",
  "Scale IT resources as your business grows",
  "Access enterprise tools at SMB-friendly pricing",
];

const faqs = [
  { q: "What is managed IT services and how does it work?", a: "Managed IT services means a provider like ACS takes full responsibility for monitoring, maintaining, and supporting your technology infrastructure for a flat monthly fee. We proactively manage your servers, network, desktops, and cloud systems 24/7 — resolving issues before they impact your business." },
  { q: "How much do managed IT services cost for a small business?", a: "ACS offers flat-rate managed IT pricing for businesses with 20–300 employees in Minneapolis–St. Paul and Chicago suburbs. Pricing is based on the number of users and devices. Contact us for a free IT assessment and custom quote — most small businesses pay significantly less than the cost of a full-time IT employee." },
  { q: "What is the difference between managed IT services and break-fix IT support?", a: "Break-fix IT means you call someone when something breaks and pay by the hour. Managed IT services means ACS proactively monitors and maintains your systems to prevent problems — and provides unlimited support for a flat monthly fee. Managed IT is more cost-effective and results in far less downtime." },
  { q: "How long does it take to onboard with ACS managed IT services?", a: "Our onboarding process typically takes 2–4 weeks depending on the size and complexity of your environment. We conduct a thorough IT assessment, document your systems, deploy our monitoring tools, and transition your team to our help desk — all with minimal disruption to your business." },
  { q: "Do you provide managed IT services for businesses outside Minneapolis?", a: "Yes. ACS provides managed IT services throughout the Minneapolis–St. Paul metro area and Chicago suburbs, including remote support for businesses across the US. Our cloud-first approach means we can support your team wherever they work." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
};

export default function ManagedIT() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative pt-40 pb-20 overflow-hidden" style={{ backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center top" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1220f7] to-[#0d1829cc]" />
          <div className="absolute inset-0 acs-dot-grid opacity-20" />
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Monitor size={16} className="text-[#60a5fa]" />
                <span className="text-[#60a5fa] text-sm font-semibold uppercase tracking-wider">Managed IT Services</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white font-[Barlow] leading-tight mb-5">
                Managed IT Services<br />
                <span className="acs-glow-text">Minneapolis &amp; Beyond</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Stop firefighting IT problems. ACS delivers proactive, all-inclusive managed IT services that keep your business running, your team productive, and your technology aligned with your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="acs-btn-amber px-7 py-3.5 rounded-md font-bold text-sm text-center">Get Free IT Assessment</Link>
                <a href="tel:8889555001" className="flex items-center justify-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-md text-sm font-semibold hover:bg-white/5 transition-colors">
                  <Phone size={15} /> 888-955-5001
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 font-[Barlow] mb-5">What Are Managed IT Services?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Managed IT services means having a dedicated technology partner who takes full responsibility for your IT environment — monitoring, maintaining, and optimizing everything so you don&apos;t have to. Instead of waiting for something to break, we proactively manage your systems to prevent problems before they impact your business.
            </p>
            <p className="text-slate-600 leading-relaxed">
              For small and mid-sized businesses in Minneapolis, St. Paul, Bloomington, and the surrounding metro, ACS provides enterprise-grade IT management at a predictable monthly cost. No surprise invoices. No reactive scrambling. Just reliable, strategic IT that supports your growth.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 font-[Barlow]">What&apos;s Included in Our Managed IT Plans</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">Comprehensive coverage across every layer of your technology stack.</p>
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

        {/* Outcomes */}
        <section className="py-16 bg-[#0d1829]">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-black text-white font-[Barlow] mb-8 text-center">Business Outcomes You Can Expect</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                  <CheckCircle2 size={18} className="text-[#60a5fa] mt-0.5 shrink-0" />
                  <span className="text-slate-300 text-sm">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="py-20 bg-[#1e6fff]">
          <div className="container text-center">
            <h2 className="text-4xl font-black text-white font-[Barlow] mb-4">Ready for Proactive IT Management?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Get a free IT assessment and see how ACS can reduce your downtime, costs, and IT headaches.</p>
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
    </>
  );
}
