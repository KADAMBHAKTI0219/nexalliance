import React from 'react';
import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact Us | NexAlliance - Enterprise Technology Studio",
  description: "Get in touch with NexAlliance technology leads & software architects. Consult on custom ERP, CRM, cloud solutions, and industrial automation.",
  keywords: [
    "Contact NexAlliance",
    "Hire Custom Software Developers",
    "ERP Software Consultation",
    "Industrial Automation Team",
    "NexAlliance Email",
    "NexAlliance Surat Address",
  ],
  openGraph: {
    title: "Contact Us | NexAlliance - Enterprise Technology Studio",
    description: "Get in touch with NexAlliance software architects. Consult on custom ERP, CRM, and cloud solutions.",
    url: "https://nexallianceit.com/contact-us",
    siteName: "NexAlliance",
    locale: "en_US",
    type: "website",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact NexAlliance",
  url: "https://nexallianceit.com/contact-us",
  mainEntity: {
    "@type": "Organization",
    name: "NexAlliance",
    url: "https://nexallianceit.com",
    email: "info@nexalliance.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dhwarkesh Society, 35, Lajamni Chowk, Near Raghuveer Shoppers, Mota Varachha",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "394101",
      addressCountry: "IN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-6351178511",
      contactType: "customer support",
      email: "info@nexalliance.com",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClient />
    </>
  );
}
