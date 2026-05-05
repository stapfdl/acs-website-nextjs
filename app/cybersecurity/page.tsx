import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle2, ArrowRight, Phone, Lock, Eye, AlertTriangle, FileCheck, Wifi, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Cybersecurity Services Minneapolis | ACS",
  description:
    "Enterprise cybersecurity for Minneapolis–St. Paul SMBs. Threat detection, endpoint protection, compliance, email security & incident response. No long-term contracts.",
  alternates: { canonical: "https://acloudsol.com/cybersecurity" },
  openGraph: {
    title: "Cybersecurity Services Minneapolis | ACS",
    description: "Enterprise cybersecurity for Minneapolis–St. Paul SMBs. Threat detection, endpoint protection, compliance, email security & incident response.",
    url: "https://acloudsol.com/cybersecurity",
  },
};

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs-hero-bg-WWMJEoxnwtfk23rdKieacR.webp";

const services = [
  { icon: Eye, title: "Threat Detection & Response", desc: "24/7 monitoring with AI-powered threat detection. We identify and neutralize threats before they cause damage — ransomware, malware, and insider threats included." },
  { icon: Lock, title: "Endpoint Protection", desc: "Next-generation antivirus and EDR (Endpoint Detection & Response) deployed across all your devices — workstations, laptops, servers, and mobile devices." },
  { icon: AlertTriangle, title: "Email Security", desc: "Advanced email filtering, anti-phishing, and impersonation protection. Email is the #1 attack vector — we lock it down with multi-layer defenses." },
  { icon: FileCheck, title: "Compliance & Risk Management", desc: "HIPAA, PCI-DSS, SOC 2, and CMMC compliance support. We assess your risk posture, identify gaps, and implement controls to meet your regulatory requirements." },
  { icon: Wifi, title: "Network Security", desc: "Firewall management, network segmentation, VPN, and zero-trust architecture. We design and maintain a secure network perimeter for your business." },
  { icon: Users, title: "Security Awareness Training", desc: "Your employees are your biggest security risk — and your best defense. We deliver engaging security awareness training that reduces phishing click rates by up to 90%." },
];

const faqs = [
  { q: "What cybersecurity services do small businesses need?", a: "At minimum, small businesses need endpoint protection, email security, multi-factor authentication, and regular security awareness training. ACS recommends a layered security approach that includes 24/7 monitoring, backup and recovery, and a documented incident response plan — all tailored to your industry and risk profile." },
  { q: "How do I know if my business has been hacked?", a: "Signs of a breach include slow systems, unusual account activity, unexpected password resets, strange emails sent from your accounts, or ransomware messages. If you suspect a breach, call ACS immediately at 888-955-5001. We provide incident response services to contain, investigate, and recover from security incidents." },
  { q: "What is the cost of a cybersecurity breach for a small business?", a: "The average cost of a data breach for a small business is over $200,000 — often enough to force closure. Costs include ransom payments, recovery expenses, legal fees, regulatory fines, and lost business. ACS cybersecurity services cost a fraction of breach recovery costs and provide far stronger protection than most small businesses have today." },
  { q: "Does my small business need to comply with HIPAA or PCI-DSS?", a: "If you handle protected health information (PHI), you must comply with HIPAA. If you accept credit cards, you must comply with PCI-DSS. ACS helps Minneapolis–St. Paul and Chicago suburb businesses assess their compliance requirements, identify gaps, and implement the controls needed to meet regulatory standards." },
  { q: "What is multi-factor authentication and why does my business need it?", a: "Multi-factor authentication (MFA) requires users to verify their identity with a second factor — like a phone app or SMS code — in addition to their password. MFA blocks over 99% of automated attacks. ACS deploys and manages MFA for all your business accounts as part of our cybersecurity services." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
};

export default function Cybersecurity() {
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
                <Shield size={16} className="text-[#60a5fa]" />
                <span className="text-[#60a5fa] text-sm font-semibold uppercase tracking-wider">Cybersecurity</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white font-[Barlow] leading-tight mb-5">
                Cybersecurity Services<br />
                <span className="acs-glow-text">for Minneapolis SMBs</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
                Enterprise-grade cybersecurity protection designed for small and mid-sized businesses. Protect your data, your reputation, and your business continuity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="acs-btn-amber px-7 py-3.5 rounded-md font-bold text-sm text-center">Get Free Security Assessment</Link>
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
              <h2 className="text-4xl font-black text-slate-900 font-[Barlow]">Comprehensive Cybersecurity Services</h2>
              <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">Multi-layer protection across every attack surface.</p>
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
            <h2 className="text-4xl font-black text-white font-[Barlow] mb-4">Is Your Business Protected?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">Get a free cybersecurity assessment and find out where your vulnerabilities are before attackers do.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-10 py-4 rounded-lg transition-all hover:scale-105 flex items-center gap-2">
                  Get Free Security Assessment <ArrowRight size={18} />
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
