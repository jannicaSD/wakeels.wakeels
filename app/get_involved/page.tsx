import GetInvolvedHeroSection from "./hero"; // (or update path as per your folder structure)
import HowSponsorshipWorksGetInvolved from "./sponsorship_work";
import ContributionOptionsSection from "./contribution";
import GetInvolvedTrustSection from "./trust_sect";

export const metadata = {
  title: "Get Involved | Welcome a Refugee Family | Wakeels and Wakeels",
  description: "Discover how you can form a sponsor group, volunteer your time, donate or build a partnership to create a genuine welcome for displaced families.",
};

export default function GetInvolvedPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* 1. Hero & Overview Section */}
      <GetInvolvedHeroSection />

      {/* 2. Step-by-Step Guide ("How Sponsorship Works") */}
      <HowSponsorshipWorksGetInvolved />

      {/* 3. Core Support Pathways (Start Group, Volunteer, Donate, Partner) */}
      <ContributionOptionsSection />

      {/* 4. Trust, Safeguarding & Legal Boundaries */}
      <GetInvolvedTrustSection />

    </div>
  );
}