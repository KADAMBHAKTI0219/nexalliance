import {
  AboutHero,
  AboutMissionVision,
  AboutTeam,
  AboutWhyUs,
} from "@/components/about";
import WhoWeAre from "@/components/home/WhoWeAre";

export const metadata = {
  title: "About Us | Nex Alliance IT - Digital Transformation & Software Studio",
  description: "Learn about Nex Alliance IT, our mission, vision, technology capabilities, and leadership team.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-blue-600 selection:text-white">
      <AboutHero />
      <WhoWeAre />
      <AboutMissionVision />
      <AboutTeam />
      <AboutWhyUs />
    </main>
  );
}
