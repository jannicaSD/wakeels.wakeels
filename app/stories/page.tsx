import StoriesHeroSection from "./hero"; // (or update path as per your folder structure)
import NewsAndStoriesSection from "./news&stories";
import StoriesConsentCTASection from "./cat";

export const metadata = {
  title: "News & Stories | Resettlement & Community Updates | Wakeels and Wakeels",
  description: "Stories of welcome, community and connection. Follow the work of Wakeels and Wakeels as communities come together to support families building new lives in the UK.",
};

export default function StoriesPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* 1. Hero & Overview Section */}
      <StoriesHeroSection />

      {/* 2. Featured Story & News Categories Grid */}
      <NewsAndStoriesSection />

      {/* 3. Consent & Privacy Notice & Get Involved Call to Action */}
      <StoriesConsentCTASection />

    </div>
  );
}