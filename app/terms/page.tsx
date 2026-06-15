import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Accelerated Cloud Solutions",
  description:
    "Review the Accelerated Cloud Solutions terms of service. Our terms govern use of our website and managed IT, cybersecurity, and cloud services.",
  alternates: { canonical: "https://acloudsol.com/terms" },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-40 pb-16 bg-[#0d1829]">
        <div className="container">
          <h1 className="text-4xl font-black text-white font-[Barlow]">Terms of Service</h1>
          <p className="text-slate-400 mt-2">Last updated: 2025</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container max-w-3xl prose prose-slate prose-headings:font-[Barlow] prose-headings:font-black">
          <p className="text-slate-600">
            By accessing or using the Accelerated Cloud Solutions website and services, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>
          <h2>Use of Services</h2>
          <p>Our services are intended for business use. You agree to use our website and services only for lawful purposes and in accordance with these Terms.</p>
          <h2>Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and images, is the property of Accelerated Cloud Solutions and is protected by applicable copyright laws.</p>
          <h2>Disclaimer of Warranties</h2>
          <p>Our website is provided &ldquo;as is&rdquo; without warranties of any kind. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
          <h2>Limitation of Liability</h2>
          <p>Accelerated Cloud Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services.</p>
          <h2>Contact Us</h2>
          <p>If you have questions about these Terms, please contact us at <a href="mailto:info@acloudsol.com">info@acloudsol.com</a> or call <a href="tel:8889555001">888-955-5001</a>.</p>
        </div>
      </section>
    </div>
  );
}
