import CommunitySponsorshipHeroSection from "./hero"; // (or update path as per your folder structure)
import HowSponsorshipWorksSection from "./community";
import SponsorshipFAQSection from "./faq&cat";
import WakeelsStatusStepsSection from "./stepsection";

export const metadata = {
  title: "Community Sponsorship | Welcome a Refugee Family | Wakeels and Wakeels",
  description: "Since 2016, Community Sponsorship has enabled ordinary groups across the UK to formally welcome refugee families and support their resettlement.",
};

export default function CommunitySponsorshipPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* 1. Hero & Overview Section */}
      <CommunitySponsorshipHeroSection />

      {/* 2. How Community Sponsorship Works (UNHCR & Home Office Pathway) */}
      <HowSponsorshipWorksSection />
      <WakeelsStatusStepsSection />

      {/* 3. Frequently Asked Questions & Call to Action */}
      <SponsorshipFAQSection />

    </div>
  );
}