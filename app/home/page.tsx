import HeroSection from "./hero"; // (or wherever you save your component files)
import WhoWeSupportSection from "./who_we_support";
import TwoPathsSection from "./two_path_section";
import ServicesAndSponsorshipSection from "./service";
import HomeCTASection from "./cat";

export const metadata = {
  title: "Wakeels and Wakeels | Community Sponsorship & Refugee Support, UK",
  description: "Wakeels and Wakeels CIC supports asylum seekers, refugees and displaced people in the UK, and helps communities sponsor refugee families to safety through the UK's official Community Sponsorship scheme.",
};

export default function HomePage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Who We Support Section */}
      <WhoWeSupportSection />

      {/* 3. Two Paths Section */}
      <TwoPathsSection />

      {/* 4. What We Do & Community Sponsorship Section */}
      <ServicesAndSponsorshipSection />

      {/* 5. Bottom Call to Action Section */}
      <HomeCTASection />

    </div>
  );
}