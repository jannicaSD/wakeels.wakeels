import FamilySponsorshipHeroSection from "./hero"; // (or update path as per your folder structure)
import FamilySponsorshipEligibilitySection from "./family_spon";
import FamilySponsorshipCTASection from "./cat";

export const metadata = {
  title: "Family Sponsorship Programme | Named Community Sponsorship | Wakeels and Wakeels",
  description: "Discover the Wakeels and Wakeels Family Sponsorship Programme, allowing approved groups to identify specific refugee families for resettlement under new Home Office routes.",
};

export default function FamilySponsorshipPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* 1. Hero & Overview Section */}
      <FamilySponsorshipHeroSection />

      {/* 2. Eligibility & Scope Section ("What This Route Does — and Does Not — Mean") */}
      <FamilySponsorshipEligibilitySection />

      {/* 3. Audience Guidance & Enquiry Call to Action */}
      <FamilySponsorshipCTASection />

    </div>
  );
}