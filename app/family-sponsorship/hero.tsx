import Link from "next/link";

export const metadata = {
  title: "Family Sponsorship Programme | Named Community Sponsorship | Wakeels and Wakeels",
  description: "Discover the Wakeels and Wakeels Family Sponsorship Programme, allowing approved groups to identify specific refugee families for resettlement under new Home Office routes.",
};

export default function FamilySponsorshipPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
          
          {/* Accent Tag */}
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Family Sponsorship Programme
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            A pathway for communities seeking to support a recognised refugee family.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-3xl leading-relaxed">
            In November 2025, the Home Office announced new safe and legal routes for refugees, including Named Community Sponsorship. This allows approved groups to identify specific individuals and families to support into resettlement rather than only accepting a match assigned to them. This is the basis of the Wakeels and Wakeels Family Sponsorship Programme.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <Link
              href="/get-involved"
              className="w-full sm:w-auto bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3.5 rounded shadow-sm hover:opacity-90 transition-all text-center"
            >
              Express Your Interest &rarr;
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

      {/* ADDITIONAL CONTENT CONTAINER (Placeholder for following sections) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-12">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#1F4A43]/10 space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
            How Named Sponsorship Works
          </h2>
          <p className="text-[#221F1B]/80 text-base leading-relaxed font-light">
            Through Named Community Sponsorship, our team helps guide groups through the structured protocols required to support a specific family through official Home Office resettlement channels.
          </p>
        </div>
      </main>

    </div>
  );
}