import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import BookPreloader from "@/components/common/BookPreloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nexallianceit.com"),
  title: {
    default: "NexxAlliance - Enterprise Digital Transformation & Software Studio",
    template: "%s | NexxAlliance",
  },
  description: "Enterprise technology consulting for ERP, CRM, custom web development, cloud solutions, and AI automation.",
  keywords: ["ERP", "CRM", "Software Studio", "Web Development", "AI Automation", "Cloud Computing", "App Development", "NexxAlliance"],
  authors: [{ name: "NexxAlliance Digital Studio" }],
  creator: "NexxAlliance",
  publisher: "NexxAlliance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "NexxAlliance - Enterprise Digital Transformation & Software Studio",
    description: "Enterprise technology consulting for ERP, CRM, custom web development, cloud solutions, and AI automation.",
    url: "https://nexallianceit.com",
    siteName: "NexxAlliance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexxAlliance - Enterprise Software Studio",
    description: "Enterprise technology consulting for ERP, CRM, custom web development, and cloud platforms.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#25294a",
};

// JSON-LD Structured Data Schema for Search Engines (SEO 100%)
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexxAlliance",
  url: "https://nexallianceit.com",
  logo: "https://nexallianceit.com/favicon.ico",
  description: "Enterprise digital transformation, custom ERP, CRM, cloud architecture, and AI automation studio.",
  sameAs: [],
  knowsAbout: [
    "Enterprise Resource Planning",
    "Customer Relationship Management",
    "Web Development",
    "Digital Marketing & SEO",
    "Cloud Computing",
    "Mobile App Development",
    "Artificial Intelligence Automation"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative bg-white text-zinc-900 overflow-x-hidden w-full">
        <BookPreloader />
        <Navbar />
        <main className="flex-1 overflow-x-hidden w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
