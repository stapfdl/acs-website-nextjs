/**
 * ACS Footer — "Signal & Clarity" Design
 * Dark slate, electric blue links, social icons, local SEO city links
 */
import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs_cropped_c22d91ee.png";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-slate-400">
      {/* CTA Banner */}
      <div className="bg-[#1e6fff] py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white font-[Barlow]">
              Ready to Accelerate Your Business?
            </h3>
            <p className="text-blue-100 mt-1 text-sm">
              Get a free IT assessment — no obligation, no pressure.
            </p>
          </div>
          <Link
            href="/contact"
            className="acs-btn-amber px-8 py-3 rounded-md text-base font-bold whitespace-nowrap"
          >
            Schedule Free Assessment
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/">
              <img
                src={LOGO_URL}
                alt="Accelerated Cloud Solutions"
                className="w-auto mb-4"
                style={{ height: "112px", width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Managed IT services, cybersecurity, and cloud solutions for
              Minneapolis–St. Paul and Chicago suburbs.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/accelerated-cloud-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center hover:bg-[#1e6fff] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.facebook.com/acceleratedcloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center hover:bg-[#1e6fff] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/acceleratedcloud/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/5 flex items-center justify-center hover:bg-[#1e6fff] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold font-[Barlow] text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Managed IT Services", href: "/managed-it" },
                { label: "Cybersecurity", href: "/cybersecurity" },
                { label: "Cloud & Modern Workplace", href: "/cloud" },
                { label: "IT Consulting / vCIO", href: "/it-consulting" },
                { label: "AI Business Solutions", href: "/ai-solutions" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#60a5fa] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold font-[Barlow] text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Minneapolis, MN", href: "/minneapolis" },
                { label: "St. Paul, MN", href: "/st-paul" },
                { label: "Bloomington, MN", href: "/bloomington" },
                { label: "Minnetonka, MN", href: "/minnetonka" },
                { label: "Maple Grove, MN", href: "/maple-grove" },
                { label: "Edina, MN", href: "/edina" },
                { label: "Eagan, MN", href: "/eagan" },
                { label: "Woodbury, MN", href: "/woodbury" },
                { label: "Chicago, IL", href: "/chicago" },
              ].map((city) => (
                <li key={city.label}>
                  <Link href={city.href} className="hover:text-[#60a5fa] transition-colors">
                    {city.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold font-[Barlow] text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#1e6fff] mt-0.5 shrink-0" />
                <span>
                  7900 International Drive<br />
                  Suite 300-7046<br />
                  Bloomington, MN 55425
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#1e6fff] shrink-0" />
                <a href="tel:8889555001" className="hover:text-white transition-colors">
                  888-955-5001
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#1e6fff] shrink-0" />
                <a href="mailto:info@acloudsol.com" className="hover:text-white transition-colors">
                  info@acloudsol.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="acs-btn-primary inline-block px-5 py-2.5 rounded-md text-sm text-white"
              >
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>© {new Date().getFullYear()} Accelerated Cloud Solutions. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
