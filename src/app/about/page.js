import {
  AboutHero,
  AboutIntroduction,
  AboutMissionVision,
  AboutTechnology,
  AboutTeam,
  AboutWhyUs,
  AboutCTA,
} from "@/components/about";
import AboutFAQ from "@/components/about/AboutFAQ";
import WhoWeAre from "@/components/home/WhoWeAre";

export const metadata = {
  title: "About Us | NexAlliance - Custom Enterprise Software & Automation Studio",
  description: "Learn about NexAlliance, our mission, software engineering capabilities, enterprise ERP solutions, industrial automation expertise, and leadership team.",
  keywords: [
    "About NexAlliance",
    "Enterprise Software Company",
    "Custom ERP Developers",
    "Industrial Automation Studio",
    "Software Engineering Team",
    "Cloud Architecture Solutions",
    "AI Workflow Telemetry",
  ],
  openGraph: {
    title: "About Us | NexAlliance - Custom Enterprise Software & Automation Studio",
    description: "Learn about NexAlliance, our mission, software engineering capabilities, enterprise ERP solutions, and leadership team.",
    url: "https://nexallianceit.com/about",
    siteName: "NexAlliance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | NexAlliance",
    description: "Learn about NexAlliance, our mission, software engineering capabilities, and enterprise technology solutions.",
  },
};

// JSON-LD Structured Schema for AEO & Search Engines (SEO 100%)
const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    name: "NexAlliance",
    url: "https://nexallianceit.com",
    logo: "https://nexallianceit.com/favicon.ico",
    description: "NexAlliance is an end-to-end technology studio specializing in custom enterprise software development, ERP systems, industrial automation, and AI workflows.",
    knowsAbout: [
      "Hospitality Task Operations",
      "Architectural Booking Systems",
      "Healthcare Telemedicine Portals",
      "Real Estate Property Platforms",
      "Retail & Fashion E-Commerce",
      "Industrial Inventory Telemetry",
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <div className="min-h-screen bg-white text-[#25294a] selection:bg-[#3b5da6] selection:text-white">
        <AboutHero />
        <AboutIntroduction />
        <WhoWeAre />
        <AboutMissionVision />
        <AboutTechnology />
        <AboutTeam />
        <AboutWhyUs />
        <AboutFAQ />
        <AboutCTA />
      </div>
    </>
  );
}
