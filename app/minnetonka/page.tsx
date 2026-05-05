import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Managed IT Services Minnetonka MN | ACS",
  description:
    "Managed IT, cybersecurity & Microsoft 365 for Minnetonka, MN. Flat-rate pricing, no contracts. Serving Opus Business Park, Ridgedale & the west metro.",
  alternates: { canonical: "https://acloudsol.com/minnetonka" },
  openGraph: {
    title: "Managed IT Services Minnetonka MN | ACS",
    description:
      "Managed IT, cybersecurity & Microsoft 365 for Minnetonka, MN. Flat-rate pricing, no contracts. Serving Opus Business Park, Ridgedale & the west metro.",
    url: "https://acloudsol.com/minnetonka",
  },
};

const faqs = [
  { q: "How quickly can Accelerated Cloud Solutions respond to IT issues in Minnetonka?", a: "Our Minnetonka-area team provides same-day response for critical issues and typically resolves most support tickets within 2–4 hours. For emergencies, we offer 24/7 monitoring and on-call support." },
  { q: "Do you offer on-site IT support in Minnetonka?", a: "Yes. While many issues are resolved remotely, we provide on-site support throughout Minnetonka and the surrounding west metro area when hands-on work is needed." },
  { q: "What size businesses do you serve in Minnetonka?", a: "We specialize in Minnetonka businesses with 20–300 employees — small and mid-sized companies that need enterprise-grade IT without the enterprise price tag." },
  { q: "Can you help our Minnetonka business move to the cloud?", a: "Absolutely. We are Microsoft-certified and specialize in Microsoft 365 and Azure cloud migrations for Minnetonka businesses, including hybrid environments and secure remote work setups." },
  { q: "How does your pricing work for Minnetonka managed IT services?", a: "We offer flat-rate monthly pricing based on the number of users and devices — no surprise bills. You get unlimited support, proactive monitoring, and strategic IT planning all included." },
];

export default function Minnetonka() {
  return (
    <CityPage
      city="Minnetonka"
      state="MN"
      slug="minnetonka"
      heroTitle="Managed IT Services"
      heroSubtitle="Minnetonka, MN"
      heroDescription="Flat-rate managed IT, cybersecurity, and cloud solutions for Minnetonka businesses with 20–300 employees. Local technicians, same-day response, no long-term contracts."
      ctaHeading="Ready to Upgrade Your Minnetonka IT?"
      ctaBody="Join Minnetonka businesses that trust Accelerated Cloud Solutions for reliable, secure, and strategic IT."
      serviceDescriptions={{
        managedIT: "Flat-rate, proactive IT management for Minnetonka businesses. We monitor, maintain, and support your entire IT environment so you can focus on growth.",
        cybersecurity: "Enterprise-grade cybersecurity protection tailored for Minnetonka SMBs. Threat detection, endpoint protection, compliance, and rapid incident response.",
        cloud: "Microsoft 365, Azure cloud migration, and hybrid infrastructure solutions that modernize how Minnetonka teams work — securely and efficiently.",
        consulting: "Strategic IT leadership without the full-time cost. Our vCIO services give Minnetonka business owners a technology roadmap aligned to their goals.",
        ai: "We help Minnetonka businesses harness AI to automate workflows, reduce costs, and gain competitive advantages — without the complexity.",
      }}
      whyDescriptions={{
        response: "Our Minnetonka-area team responds within hours — not days. When your business is down, every minute counts.",
        account: "You'll always work with the same team who knows your business, your systems, and your goals.",
        smb: "We specialize in businesses with 20–300 employees — the exact size where enterprise IT expertise makes the biggest difference.",
        contracts: "We earn your business every month. No lock-in, no fine print — just results that keep you coming back.",
      }}
      industries={["Professional Services", "Financial & Accounting Firms", "Healthcare & Medical Offices", "Legal Practices", "Construction & Real Estate", "Manufacturing & Distribution", "Retail & E-Commerce", "Non-Profit Organizations"]}
      neighborhoods={["Downtown Minnetonka", "Opus Business Park", "Ridgedale Area", "Glen Lake", "Minnetonka Mills", "Deephaven", "Wayzata", "Plymouth", "Hopkins", "St. Louis Park", "Eden Prairie", "Chanhassen"]}
      areaLabel="Minnetonka Neighborhoods We Serve"
      faqs={faqs}
      faqSchema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })),
      }}
      localBusinessSchema={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Accelerated Cloud Solutions",
        description: "Managed IT services, cybersecurity, and cloud solutions for Minnetonka businesses.",
        url: "https://acloudsol.com/minnetonka",
        telephone: "+18889555001",
        address: { "@type": "PostalAddress", streetAddress: "7900 International Drive, Suite 300-7046", addressLocality: "Bloomington", addressRegion: "MN", postalCode: "55425", addressCountry: "US" },
        areaServed: { "@type": "City", name: "Minnetonka" },
        priceRange: "$$",
      }}
    />
  );
}
