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
    email: "hello@nexalliance.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9876543210",
      contactType: "customer support",
      email: "hello@nexalliance.com",
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
