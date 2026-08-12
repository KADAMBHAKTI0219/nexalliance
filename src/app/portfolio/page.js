import React from 'react';
import PortfolioClient from './PortfolioClient';

export const metadata = {
  title: "Enterprise Portfolio & Case Studies | NexAlliance",
  description: "Explore 15 authentic enterprise software applications delivered by NexAlliance across Hospitality ERP, Architecture MS, Healthcare Telemedicine, Real Estate, and Retail E-Commerce.",
  keywords: [
    "Enterprise Software Portfolio",
    "NexAlliance Case Studies",
    "Hotel Hilton TMS",
    "Nirman Architects MS",
    "Mad Over Grills POS",
    "Custom ERP Applications",
  ],
  openGraph: {
    title: "Enterprise Portfolio & Case Studies | NexAlliance",
    description: "Explore 15 authentic enterprise software applications delivered by NexAlliance across Hospitality ERP, Architecture MS, Healthcare, and Retail.",
    url: "https://nexallianceit.com/portfolio",
    siteName: "NexAlliance",
    locale: "en_US",
    type: "website",
  },
};

const portfolioJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "NexAlliance Enterprise Portfolio",
  description: "Collection of 15 enterprise software case studies across hospitality, healthcare, architecture, real estate, and retail.",
  url: "https://nexallianceit.com/portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioJsonLd) }}
      />
      <PortfolioClient />
    </>
  );
}
