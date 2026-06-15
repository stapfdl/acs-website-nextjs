"use client";
/**
 * ACS Navbar — "Signal & Clarity" Design
 * Dark slate background, electric blue accents, Barlow font
 * Responsive with mobile hamburger menu
 */
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663508583887/arsN2bATGsJBGP6mUs7j2K/acs_cropped_c22d91ee.png";

const services = [
  { label: "Managed IT Services", href: "/managed-it" },
  { label: "Cybersecurity", href: "/cybersecurity" },
  { label: "Cloud & Modern Workplace", href: "/cloud" },
  { label: "IT Consulting / vCIO", href: "/it-consulting" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d1829f7] backdrop-blur-md shadow-lg shadow-black/30"
          : "bg-[#0d1829d9] backdrop-blur-sm"
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-white/5">
        <div className="container flex items-center justify-between py-1.5">
          <span className="text-xs text-slate-400 hidden sm:block">
            Serving Minneapolis–St. Paul &amp; Chicago Suburbs
          </span>
          <a
            href="tel:8889555001"
            className="flex items-center gap-1.5 text-xs font-medium text-[#60a5fa] hover:text-white transition-colors"
          >
            <Phone size={12} />
            888-955-5001
          </a>
        </div>
      </div>
      {/* Main nav */}
      <div className="container">
        <div className="flex items-center justify-between" style={{ height: "120px" }}>
          {/* Logo */}
          <Link href="/">
            <img
              src={LOGO_URL}
              alt="Accelerated Cloud Solutions"
              className="w-auto"
              style={{ height: "112px", width: "auto", objectFit: "contain" }}
            />
          </Link>
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-link flex items-center gap-1 text-sm font-medium py-2">
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-[#1a2540] border border-white/10 rounded-lg shadow-2xl shadow-black/50 py-2 mt-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-[#1e6fff26] transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/ai-solutions" className="nav-link text-sm font-medium">
              AI Solutions
            </Link>
            <Link href="/news" className="nav-link text-sm font-medium">
              News
            </Link>
            <Link href="/about" className="nav-link text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="nav-link text-sm font-medium">
              Contact
            </Link>
          </div>
          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="acs-btn-amber px-5 py-2 rounded-md text-sm font-bold"
            >
              Get Free Assessment
            </Link>
          </div>
          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0d1829] border-t border-white/10">
          <div className="container py-4 flex flex-col gap-1">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider px-3 py-2">
              Services
            </div>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
              >
                {s.label}
              </Link>
            ))}
            <div className="border-t border-white/10 my-2" />
            <Link href="/ai-solutions" className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md">
              AI Solutions
            </Link>
            <Link href="/news" className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md">
              News
            </Link>
            <Link href="/about" className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-md">
              Contact
            </Link>
            <div className="pt-3">
              <Link
                href="/contact"
                className="acs-btn-amber block text-center px-5 py-3 rounded-md text-sm font-bold"
              >
                Get Free Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
