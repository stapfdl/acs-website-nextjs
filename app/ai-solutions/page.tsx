import type { Metadata } from "next";
import Link from "next/link";
import { Brain, CheckCircle2, ArrowRight, Phone, Zap, Bot, BarChart2, Workflow, MessageSquare, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Business Solutions Minneapolis | ACS",
  description:
    "AI automation, Microsoft Copilot & workflow solutions for Minneapolis–St. Paul SMBs. Reduce costs, save time & gain competitive advantages with AI.",
  alternates: { canonical: "https://acloudsol.com/ai-solutions" },
  openGraph: {
    title: "AI Business Solutions Minneapolis | ACS",
    description: "AI automation, Microsoft Copilot & workflow solutions for Minneapolis–St. Paul SMBs. Reduce costs, save time & gain competitive advantages with AI.",
    url: "https://acloudsol.com/ai-solutions",
  },
};

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs-hero-bg-WWMJEoxnwtfk23rdKieacR.webp";

const services = [
  { icon: Bot, title: "Microsoft Copilot Deployment", desc: "Deploy Microsoft Copilot for Microsoft 365 to supercharge your team's productivity — AI-assisted writing, meeting summaries, data analysis, and more." },
  { icon: Workflow, title: "Workflow Automation", desc: "Automate repetitive business processes using Microsoft Power Automate and AI. Reduce manual work, eliminate errors, and free your team for higher-value tasks." },
  { icon: MessageSquare, title: "AI Customer Service", desc: "Deploy AI-powered chatbots and virtual assistants that handle customer inquiries 24/7 — improving response times and customer satisfaction." },
  { icon: BarChart2, title: "AI Data Analytics", desc: "Turn your business data into actionable insights with AI-powered analytics and reporting tools that surface trends, anomalies, and opportunities." },
  { icon: Zap, title: "Process Optimization", desc: "Identify and eliminate inefficiencies in your business processes using AI analysis. We map your workflows and implement AI-driven improvements." },
  { icon: Lightbulb, title: "AI Readiness Assessment", desc: "Not sure where to start? Our AI readiness assessment identifies the highest-impact AI opportunities in your business with a prioritized roadmap and ROI estimates." },
];

const faqs = [
  { q: "How can AI help my small business?", a: "AI can help small businesses automate repetitive tasks, improve customer service with chatbots, analyze data for better decisions, and streamline workflows. ACS identifies the highest-impact AI opportunities for your specific business — from automating invoicing and scheduling to deploying AI assistants that handle customer inquiries around the clock." },
  { q: "What AI tools are best for small businesses in 2025?", a: "The most practical AI tools for small businesses include Microsoft Copilot for productivity, ChatGPT for content and communication, AI-powered CRM tools for sales automation, and custom workflow automation using platforms like Power Automate. ACS evaluates your workflows and recommends tools that deliver measurable ROI for businesses with 20–300 employees." },
  { q: "How much does AI implementation cost for a small business?", a: "AI implementation costs vary widely depending on the scope. Many AI tools like Microsoft Copilot are available as add-ons to existing Microsoft 365 subscriptions. Custom AI workflow automation projects are scoped and priced based on complexity. ACS provides a free AI readiness assessment to identify quick wins and longer-term opportunities." },
  { q: "Is AI safe to use with my business data?", a: "AI safety depends on the tools and configuration. Enterprise AI tools like Microsoft Copilot are designed with data privacy controls that keep your business data within your Microsoft 365 tenant. ACS evaluates AI tools for security and compliance before recommending them, and configures them to meet your data governance requirements." },
  { q: "How do I get started with AI in my business?", a: "The best starting point is an AI readiness assessment to identify which workflows in your business are best suited for automation or AI augmentation. ACS conducts these assessments for Minneapolis–St. Paul and Chicago suburb businesses, delivering a prioritized roadmap of AI opportunities with estimated ROI for each." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
};

export default function AISolutions() {
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
                <Brain size={16} className="text-[#60a5fa]" />
                <span className="text-[#60a5fa] text-sm font-semibold uppercase tracking-wider">AI Business Solutions</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white font-[Barlow] leading-tight mb-5">
                AI Business Solutions<br />
                <span className="acs-glow-text">for Minneapolis SMBs</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Harness the power of AI to automate workflows, reduce costs, and gain competitive advantages — without the complexity or enterprise price tag.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="acs-btn-amber px-7 py-3.5 rounded-md font-bold text-sm text-center">Get Free AI Assessment</Link>
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
              <h2 className="text-4xl font-black text-slate-900 font-[Barlow]">AI Solutions for Your Business</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">Practical AI implementations that deliver measurable ROI for Minneapolis SMBs.</p>
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
            <h2 className="text-4xl font-black text-white font-[Barlow] mb-4">Ready to Leverage AI in Your Business?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Get a free AI readiness assessment and discover your highest-impact AI opportunities.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-10 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-2">
                  Get Free AI Assessment <ArrowRight size={18} />
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
