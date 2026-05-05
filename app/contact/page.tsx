"use client";

import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, CheckCircle2 } from "lucide-react";

// Note: metadata must be in a separate server component for client pages
// The metadata is set via the parent layout; this page uses client-side HubSpot

function HubSpotForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initForm = () => {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = "";
      const div = document.createElement("div");
      div.className = "hs-form-frame";
      div.setAttribute("data-region", "na2");
      div.setAttribute("data-form-id", "d164a9f2-db0d-4355-a591-9c52957eaa1e");
      div.setAttribute("data-portal-id", "242375873");
      containerRef.current.appendChild(div);
    };

    const existingScript = document.querySelector('script[src="https://js-na2.hsforms.net/forms/embed/242375873.js"]');
    if (existingScript) {
      initForm();
    } else {
      const script = document.createElement("script");
      script.src = "https://js-na2.hsforms.net/forms/embed/242375873.js";
      script.defer = true;
      script.onload = () => setTimeout(initForm, 300);
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[400px] [&_.hs-form-frame]:w-full [&_iframe]:w-full [&_iframe]:min-h-[400px] [&_iframe]:border-0"
    />
  );
}

const contactInfo = [
  { icon: Phone, label: "Phone", value: "888-955-5001", href: "tel:8889555001" },
  { icon: Mail, label: "Email", value: "info@acloudsol.com", href: "mailto:info@acloudsol.com" },
  { icon: MapPin, label: "Address", value: "7900 International Drive, Suite 300-7046\nBloomington, MN 55425", href: null },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 8am–6pm CT\n24/7 Emergency Support", href: null },
];

const benefits = [
  "Free, no-obligation IT assessment",
  "Response within 1 business hour",
  "No high-pressure sales tactics",
  "Flat-rate pricing — no surprise bills",
  "Local Minneapolis–St. Paul team",
  "25+ years of SMB IT experience",
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-40 pb-16 bg-[#0d1829] overflow-hidden">
        <div className="absolute inset-0 acs-dot-grid opacity-20" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="text-[#60a5fa] text-sm font-semibold uppercase tracking-wider mb-3 block">Contact Us</span>
            <h1 className="text-5xl font-black text-white font-[Barlow] mb-4">
              Let&apos;s Talk About<br />Your IT Needs
            </h1>
            <p className="text-slate-400 text-lg">
              Get a free, no-obligation IT assessment from the ACS team. We&apos;ll evaluate your current environment and show you exactly how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-8">
                <h2 className="text-2xl font-black text-slate-900 font-[Barlow] mb-2">Send Us a Message</h2>
                <p className="text-slate-500 text-sm mb-6">Fill out the form below and we&apos;ll respond within 1 business hour.</p>
                <HubSpotForm />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Contact Info */}
              <div className="bg-[#0d1829] rounded-2xl p-6">
                <h3 className="text-white font-black font-[Barlow] text-lg mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-[#1e6fff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-[#60a5fa]" />
                      </div>
                      <div>
                        <div className="text-slate-500 text-xs mb-0.5">{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className="text-white text-sm font-medium hover:text-[#60a5fa] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white text-sm font-medium whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-6 pt-6 border-t border-white/10">
                  <a href="https://www.linkedin.com/company/accelerated-cloud-solutions" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#1e6fff] rounded-lg flex items-center justify-center transition-colors">
                    <Linkedin size={16} className="text-white" />
                  </a>
                  <a href="https://www.facebook.com/acloudsol" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-[#1e6fff] rounded-lg flex items-center justify-center transition-colors">
                    <Facebook size={16} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-slate-900 font-black font-[Barlow] text-lg mb-4">What to Expect</h3>
                <div className="space-y-3">
                  {benefits.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[#1e6fff] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
