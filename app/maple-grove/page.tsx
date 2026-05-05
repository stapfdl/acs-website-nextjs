import type { Metadata } from "next";
import CityPage from "@/components/CityPage";

export const metadata: Metadata = {
  title: "Managed IT Services Maple Grove MN | ACS",
  description:
    "Managed IT & cybersecurity for Maple Grove, MN. Flat-rate pricing, same-day response, no contracts. Serving Arbor Lakes, Elm Creek & the northwest metro.",
  alternates: { canonical: "https://acloudsol.com/maple-grove" },
  openGraph: {
    title: "Managed IT Services Maple Grove MN | ACS",
    description:
      "Managed IT & cybersecurity for Maple Grove, MN. Flat-rate pricing, same-day response, no contracts. Serving Arbor Lakes, Elm Creek & the northwest metro.",
    url: "https://acloudsol.com/maple-grove",
  },
};

const faqs = [
  { q: "How quickly can Accelerated Cloud Solutions respond to IT issues in Maple Grove?", a: "Our Maple Grove–area team provides same-day response for critical issues and typically resolves most support tickets within 2–4 hours. For emergencies, we offer 24/7 monitoring and on-call support." },
  { q: "Do you offer on-site IT support in Maple Grove?", a: "Yes. While many issues are resolved remotely, we provide on-site support throughout Maple Grove and the surrounding northwest metro area when hands-on work is needed." },
  { q: "What size businesses do you serve in Maple Grove?", a: "We specialize in Maple Grove businesses with 20–300 employees — small and mid-sized companies that need enterprise-grade IT without the enterprise price tag." },
  { q: "Can you help our Maple Grove business move to the cloud?", a: "Absolutely. We are Microsoft-certified and specialize in Microsoft 365 and Azure cloud migrations for Maple Grove businesses, including hybrid environments and secure remote work setups." },
  { q: "How does your pricing work for Maple Grove managed IT services?", a: "We offer flat-rate monthly pricing based on the number of users and devices — no surprise bills. You get unlimited support, proactive monitoring, and strategic IT planning all included." },
];

export default function MapleGrove() {
  return (
    <CityPage
      city="Maple Grove"
      state="MN"
      slug="maple-grove"
      heroTitle="Managed IT Services"
      heroSubtitle="Maple Grove, MN"
      heroDescription="Flat-rate managed IT, cybersecurity, and cloud solutions for Maple Grove businesses with 20–300 employees. Local technicians, same-day response, no long-term contracts."
      ctaHeading="Ready to Upgrade Your Maple Grove IT?"
      ctaBody="Join Maple Grove businesses that trust Accelerated Cloud Solutions for reliable, secure, and strategic IT."
      serviceDescriptions={{
        managedIT: "Flat-rate, proactive IT management for Maple Grove businesses. We monitor, maintain, and support your entire IT environment so you can focus on growth.",
        cybersecurity: "Enterprise-grade cybersecurity protection tailored for Maple Grove SMBs. Threat detection, endpoint protection, compliance, and rapid incident response.",
        cloud: "Microsoft 365, Azure cloud migration, and hybrid infrastructure solutions that modernize how Maple Grove teams work — securely and efficiently.",
        consulting: "Strategic IT leadership without the full-time cost. Our vCIO services give Maple Grove business owners a technology roadmap aligned to their goals.",
        ai: "We help Maple Grove businesses harness AI to automate workflows, reduce costs, and gain competitive advantages — without the complexity.",
      }}
      whyDescriptions={{
        response: "Our Maple Grove–area team responds within hours — not days. When your business is down, every minute counts.",
        account: "You'll always work with the same team who knows your business, your systems, and your goals.",
        smb: "We specialize in businesses with 20–300 employees — the exact size where enterprise IT expertise makes the biggest difference.",
        contracts: "We earn your business every month. No lock-in, no fine print — just results that keep you coming back.",
      }}
      industries={["Professional Services", "Financial & Accounting Firms", "Healthcare & Medical Offices", "Legal Practices", "Construction & Real Estate", "Manufacturing & Distribution", "Retail & E-Commerce", "Non-Profit Organizations"]}
      neighborhoods={["Downtown Maple Grove", "Arbor Lakes", "The Shoppes at Arbor Lakes", "Elm Creek", "Rush Creek", "Fish Lake", "Brooklyn Park", "Osseo", "Rogers", "Dayton", "Plymouth", "Corcoran"]}
      areaLabel="Maple Grove Neighborhoods We Serve"
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
        description: "Managed IT services, cybersecurity, and cloud solutions for Maple Grove businesses.",
        url: "https://acloudsol.com/maple-grove",
        telephone: "+18889555001",
        address: { "@type": "PostalAddress", streetAddress: "7900 International Drive, Suite 300-7046", addressLocality: "Bloomington", addressRegion: "MN", postalCode: "55425", addressCountry: "US" },
        areaServed: { "@type": "City", name: "Maple Grove" },
        priceRange: "$$",
      }}
    />
  );
}
