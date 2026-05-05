import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ACS",
  description:
    "Read the Accelerated Cloud Solutions privacy policy. We are committed to protecting your data and never sell your personal information to third parties.",
  alternates: { canonical: "https://acloudsol.com/privacy" },
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-40 pb-16 bg-[#0d1829]">
        <div className="container">
          <h1 className="text-4xl font-black text-white font-[Barlow]">Privacy Policy</h1>
          <p className="text-slate-400 mt-2">Last updated: 2025</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container max-w-3xl prose prose-slate prose-headings:font-[Barlow] prose-headings:font-black">
          <p className="text-slate-600">
            Accelerated Cloud Solutions (&ldquo;ACS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.
          </p>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a contact form, request an assessment, or communicate with us. This may include your name, email address, phone number, and company information.</p>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide our services, and communicate with you about our offerings. We do not sell your personal information to third parties.</p>
          <h2>Cookies and Analytics</h2>
          <p>We use cookies and analytics tools (including Google Analytics) to understand how visitors use our website. This data is aggregated and anonymous. You may disable cookies in your browser settings.</p>
          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@acloudsol.com">info@acloudsol.com</a> or call <a href="tel:8889555001">888-955-5001</a>.</p>
        </div>
      </section>
    </div>
  );
}
