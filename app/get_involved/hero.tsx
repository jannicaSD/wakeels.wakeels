import Link from "next/link";

export const metadata = {
  title: "Get Involved | Welcome a Refugee Family | Wakeels and Wakeels",
  description: "Discover how you can form a sponsor group, volunteer your time, donate or build a partnership to create a genuine welcome for displaced families.",
};

export default function GetInvolvedPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
          
          {/* Accent Tag */}
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Join Our Mission
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            Get Involved
          </h1>

          {/* Subheadline / Intro */}
          <p className="font-serif text-xl sm:text-2xl font-normal text-[#C68A2E] leading-relaxed">
            There are many ways to help create a genuine welcome.
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl leading-relaxed">
            Whether you want to form a sponsor group, volunteer your time, donate or build a partnership, there is a way to contribute.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3.5 rounded shadow-sm hover:opacity-90 transition-all text-center"
            >
              Contact Us to Help &rarr;
            </Link>
            <Link
              href="/community-sponsorship"
              className="w-full sm:w-auto bg-[#1F4A43] text-[#F3F0E6] font-semibold px-6 py-3.5 rounded shadow-sm hover:bg-[#153732] border border-[#C68A2E]/30 transition-all text-center"
            >
              Explore Sponsorship &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* ADDITIONAL CONTENT CONTAINER (Placeholder for following sections) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-12">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#1F4A43]/10 space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
            Ways to Contribute
          </h2>
          <p className="text-[#221F1B]/80 text-base leading-relaxed font-light">
            From community-level sponsorship coordination to hands-on volunteering and logistical support, every contribution strengthens our network of care.
          </p>
        </div>
      </main>

    </div>
  );
}