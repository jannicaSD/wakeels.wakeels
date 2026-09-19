import Link from "next/link";

export const metadata = {
  title: "Community Sponsorship | Welcome a Refugee Family | Wakeels and Wakeels",
  description: "Since 2016, Community Sponsorship has enabled ordinary groups across the UK to formally welcome refugee families and support their resettlement.",
};

export default function CommunitySponsorshipPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
          
          {/* Accent Tag */}
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Official Resettlement Route
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            Welcome a refugee family. Build a stronger community.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl leading-relaxed">
            Since 2016, Community Sponsorship has enabled ordinary groups across the UK — including neighbours, faith groups, workplaces and universities — to formally welcome refugee families and support their resettlement.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <Link
              href="/get-involved"
              className="w-full sm:w-auto bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3.5 rounded shadow-sm hover:opacity-90 transition-all text-center"
            >
              Start a Sponsor Group &rarr;
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#1F4A43] text-[#F3F0E6] font-semibold px-6 py-3.5 rounded shadow-sm hover:bg-[#153732] border border-[#C68A2E]/30 transition-all text-center"
            >
              Get in Touch &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* ADDITIONAL CONTENT CONTAINER (Placeholder for next sections) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-12">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#1F4A43]/10 space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
            How Community Sponsorship Works
          </h2>
          <p className="text-[#221F1B]/80 text-base leading-relaxed font-light">
            Sponsor groups commit to a genuine partnership: welcoming the family on arrival, arranging suitable housing for at least two years, and providing around a year of hands-on integration support.
          </p>
        </div>
      </main>

    </div>
  );
}