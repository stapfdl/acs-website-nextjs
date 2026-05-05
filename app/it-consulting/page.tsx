import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, CheckCircle2, ArrowRight, Phone, Map, DollarSign, Users, TrendingUp, FileText, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Consulting & vCIO Minneapolis | ACS",
  description:
    "Strategic IT consulting & virtual CIO services for Minneapolis–St. Paul businesses. IT roadmaps, budgeting, vendor management & technology strategy.",
  alternates: { canonical: "https://acloudsol.com/it-consulting" },
  openGraph: {
    title: "IT Consulting & vCIO Minneapolis | ACS",
    description: "Strategic IT consulting & virtual CIO services for Minneapolis–St. Paul businesses. IT roadmaps, budgeting, vendor management & technology strategy.",
    url: "https://acloudsol.com/it-consulting",
  },
};

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs-hero-bg-WWMJEoxnwtfk23rdKieacR.webp";

const services = [
  { icon: Map, title: "IT Roadmap & Strategy", desc: "A clear, prioritized technology roadmap aligned with your business goals — covering infrastructure, security, cloud, and digital transformation initiatives." },
  { icon: DollarSign, title: "IT Budget Planning", desc: "Realistic IT budgets that account for hardware refresh cycles, software licensing, security tools, and planned projects — no more surprise capital expenditures." },
  { icon: Users, title: "Virtual CIO (vCIO) Services", desc: "Fractional technology executive leadership. Your vCIO attends leadership meetings, advises on technology investments, and ensures IT delivers measurable business value." },
  { icon: TrendingUp, title: "Digital Transformation", desc: "Identify and implement technology initiatives that improve efficiency, reduce costs, and create competitive advantages for your business." },
  { icon: FileText, title: "Vendor Evaluation & Selection", desc: "Unbiased evaluation of technology vendors and solutions. We assess your requirements, evaluate options, and help you select the right tools without vendor bias." },
  { icon: Lightbulb, title: "Technology Assessment", desc: "Comprehensive review of your current IT environment — identifying risks, inefficiencies, and opportunities for improvement with a prioritized action plan." },
];

const faqs = [
  { q: "What is IT consulting and does my small business need it?", a: "IT consulting provides strategic technology guidance to help your business make better decisions about IT investments, infrastructure, and digital transformation. If you are spending money on technology without a clear plan, experiencing recurring IT problems, or planning to grow, IT consulting from ACS can help you build a roadmap that aligns technology with your business goals." },
  { q: "What is a vCIO and how can it benefit my business?", a: "A virtual CIO (vCIO) is a fractional technology executive who provides strategic IT leadership without the cost of a full-time hire. ACS vCIOs work with your leadership team to develop IT roadmaps, manage technology budgets, evaluate vendors, and ensure your technology investments deliver measurable business value." },
  { q: "How do I create an IT budget for my small business?", a: "A well-structured IT budget accounts for hardware refresh cycles, software licensing, security tools, support costs, and planned projects. ACS helps Minneapolis–St. Paul and Chicago suburb businesses build realistic IT budgets aligned with their growth plans — typically as part of our vCIO and IT consulting engagements." },
  { q: "How often should a small business update its IT infrastructure?", a: "Workstations should be replaced every 3-5 years, servers every 5-7 years, and network equipment every 5-7 years. ACS develops technology refresh roadmaps for our consulting clients so you can plan and budget for upgrades proactively rather than reacting to failures." },
  { q: "Can ACS help us evaluate and select new software or technology vendors?", a: "Yes. ACS provides vendor evaluation and selection services as part of our IT consulting practice. We assess your requirements, evaluate options, negotiate contracts, and manage implementation — ensuring you select the right technology for your business without vendor bias." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
};

export default function ITConsulting() {
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
                <BarChart3 size={16} className="text-[#60a5fa]" />
                <span className="text-[#60a5fa] text-sm font-semibold uppercase tracking-wider">IT Consulting / vCIO</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white font-[Barlow] leading-tight mb-5">
                IT Consulting & vCIO<br />
                <span className="acs-glow-text">Strategic IT Leadership</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Get the strategic IT leadership your business needs without the full-time CIO cost. ACS vCIOs align technology with your business goals and drive measurable results.
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

        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-900 font-[Barlow]">IT Consulting Services</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">Strategic technology guidance for Minneapolis–St. Paul businesses.</p>
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
            <h2 className="text-4xl font-black text-white font-[Barlow] mb-4">Ready for Strategic IT Leadership?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Start with a free IT assessment and technology roadmap consultation.</p>
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
