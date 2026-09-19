import AboutHeroSection from "./hero"; // (or update path as per your folder structure)
import OurMissionSection from "./our_mission";
import OurTeamSection from "./our_team";
import AboutCTASection from "./cat";

export const metadata = {
  title: "About Us | Wakeels and Wakeels",
  description: "Learn about Wakeels and Wakeels CIC, our mission, our team, and why we exist to support displaced people and the communities who welcome them.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* 1. Hero & Our Name / Meaning Section */}
      <AboutHeroSection />

      {/* 2. Our Mission Section (Founders' Vision) */}
      <OurMissionSection />

      {/* 3. Our Team Section (Directors, Trustees & Staff) */}
      <OurTeamSection />

      {/* 4. Bottom Call to Action Section */}
      <AboutCTASection />

    </div>
  );
}