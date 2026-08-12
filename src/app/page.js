import Herosection from "@/components/home/Herosection";
import OurProcess from "@/components/home/OurProcess";
import OurServices from "@/components/home/OurServices";
import OurProjects from "@/components/home/OurProjects";
import OurTechStack from "@/components/home/OurTechStack";
import OurTestimonial from "@/components/home/OurTestimonial";
import FaqSection from "@/components/home/FaqSection";
import FooterCTA from "@/components/home/FooterCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <Herosection />

      {/* Our Process Section */}
      <OurProcess />

      {/* Our Services Section */}
      <OurServices />

      {/* Our Featured Projects Section */}
      <OurProjects />

      {/* 3D WebGL Tech Stack Showcase */}
      <OurTechStack />

      {/* Our Testimonial Section */}
      <OurTestimonial />

      {/* Frequently Asked Questions Section */}
      <FaqSection />

      {/* 3D Falling Characters Footer CTA Section */}
      <FooterCTA />
    </div>
  );
}
