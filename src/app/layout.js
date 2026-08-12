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
    default: "NexAlliance - Enterprise Digital Transformation & Software Studio",
    template: "%s | NexAlliance",
  },
  description: "Enterprise technology consulting for ERP, CRM, custom web development, cloud solutions, and AI automation.",
  keywords: ["ERP", "CRM", "Software Studio", "Web Development", "AI Automation", "Cloud Computing", "App Development", "NexAlliance"],
  authors: [{ name: "NexAlliance Digital Studio" }],
  creator: "NexAlliance",
  publisher: "NexAlliance",
  icons: {
    icon: [
      { url: "/assets/images/logo.png" },
      { url: "/assets/images/logo.png", type: "image/png" },
    ],
    shortcut: ["/assets/images/logo.png"],
    apple: [
      { url: "/assets/images/logo.png" },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "NexAlliance - Enterprise Digital Transformation & Software Studio",
    description: "Enterprise technology consulting for ERP, CRM, custom web development, cloud solutions, and AI automation.",
    url: "https://nexallianceit.com",
    siteName: "NexAlliance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexAlliance - Enterprise Software Studio",
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
  name: "NexAlliance",
  url: "https://nexallianceit.com",
  logo: "https://nexallianceit.com/assets/images/logo.png",
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
        <link rel="icon" href="/assets/images/logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/assets/images/logo.png" />
        {/* Instant Non-Flashing Critical Fallback Preloader Overlay */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              #initial-loader {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100vw;
                height: 100vh;
                z-index: 9999999;
                background-color: #f8fafc;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative bg-white text-zinc-900 overflow-x-hidden w-full">
        {/* Static HTML preloader overlay visible before JS hydration */}
        <div id="initial-loader">
          <img
            src="/assets/images/logo.png"
            alt="NexAlliance Logo"
            style={{ height: "64px", width: "auto", objectFit: "contain" }}
          />
        </div>
        <BookPreloader />
        <Navbar />
        <main className="flex-1 overflow-x-hidden w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
