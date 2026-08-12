import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import OurServices from '@/components/home/OurServices';

export const metadata = {
  title: "Enterprise Technology Services | NexAlliance",
  description: "Explore enterprise software services by NexAlliance: Custom ERP Development, Cloud Architecture, Mobile Apps, Industrial Automation, AI Workflow Telemetry, and UI/UX Design.",
  keywords: [
    "Enterprise Software Services",
    "Custom ERP Development",
    "Cloud SaaS Architecture",
    "Industrial Automation Services",
    "AI Workflow Solutions",
    "Web & Mobile App Engineering",
  ],
  openGraph: {
    title: "Enterprise Technology Services | NexAlliance",
    description: "Explore enterprise software services by NexAlliance: Custom ERP Development, Cloud Architecture, Mobile Apps, Industrial Automation, and AI Workflows.",
    url: "https://nexallianceit.com/services",
    siteName: "NexAlliance",
    locale: "en_US",
    type: "website",
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Enterprise Software Engineering & Industrial Automation",
  provider: {
    "@type": "Organization",
    name: "NexAlliance",
    url: "https://nexallianceit.com",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Enterprise Tech Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom ERP & CRM Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Automation Software" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Telemetry Workflows" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web & Mobile App Engineering" } },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <div className="min-h-screen bg-white text-[#25294a] flex flex-col font-sans select-none pt-24 pb-20">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 text-xs font-bold tracking-wider uppercase transition-colors border border-zinc-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <OurServices />
      </div>
    </>
  );
}
