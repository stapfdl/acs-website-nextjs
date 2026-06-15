import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact ACS | Free IT Assessment",
  description:
    "Contact Accelerated Cloud Solutions for a free, no-obligation IT assessment. Minneapolis–St. Paul managed IT experts. Call 888-955-5001 or fill out our form.",
  alternates: { canonical: "https://acloudsol.com/contact" },
  openGraph: {
    title: "Contact ACS | Free IT Assessment",
    description:
      "Contact Accelerated Cloud Solutions for a free, no-obligation IT assessment. Minneapolis–St. Paul managed IT experts.",
    url: "https://acloudsol.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
