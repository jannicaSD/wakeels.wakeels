import WhatWeDoHeroSection from "./hero"; // (or update path as per your folder structure)
import OurServicesSection from "./our_service";
import OurApproachSection from "./our_approch";

export const metadata = {
  title: "What We Do | Practical Support & Refugee Support | Wakeels and Wakeels",
  description: "Wakeels and Wakeels supports asylum seekers, refugees and displaced people already living in the UK through practical help, community connection and signposting to appropriate professional services.",
};

export default function WhatWeDoPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* 1. Hero & Overview Section */}
      <WhatWeDoHeroSection />

      {/* 2. Our Services Grid (01 to 05 with Legal Signposting compliance) */}
      <OurServicesSection />

      {/* 3. Our Approach & Call to Action Banner */}
      <OurApproachSection />

    </div>
  );
}