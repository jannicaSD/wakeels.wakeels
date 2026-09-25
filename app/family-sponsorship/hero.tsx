import Link from "next/link";

export default function FamilySponsorshipSection() {
  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* =========================================================
        SECTION 1: HERO & OVERVIEW
        ========================================================= */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Specialised Route
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            Family Sponsorship Programme
          </h1>

          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl mx-auto leading-relaxed">
            Helping communities explore whether they can support a specific recognised refugee family through the UK&apos;s Named Community Sponsorship route.
          </p>

        </div>
      </section>

      {/* =========================================================
        SECTION 2: NAMED COMMUNITY SPONSORSHIP FRAMEWORK
        ========================================================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 sm:p-14 rounded-3xl shadow-sm border border-[#1F4A43]/10 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Programme Framework</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#153732]">
              Named Community Sponsorship
            </h2>
          </div>

          <div className="space-y-6 text-[#221F1B]/90 text-base sm:text-lg font-light leading-relaxed border-t border-[#1F4A43]/10 pt-6">
            <p>
              In November 2025, the Home Office announced new safe and legal routes for refugees, including <strong className="font-semibold text-[#153732]">Named Community Sponsorship</strong> — allowing approved groups like ours to identify specific individuals and families to support into resettlement, rather than only accepting a match assigned to us.
            </p>
            
            <div className="bg-[#F3F0E6]/60 p-6 rounded-2xl border-l-4 border-[#C68A2E] space-y-2">
              <p className="text-xs font-bold text-[#153732] uppercase tracking-wider">Core Distinction</p>
              <p className="text-sm font-medium text-[#153732] leading-relaxed">
                This policy update forms the foundational basis of our Family Sponsorship Programme, bridging the gap between community-led support and named refugee families.
              </p>
            </div>
          </div>

          {/* Action / Next Steps Footer */}
          <div className="pt-4 border-t border-[#1F4A43]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-[#221F1B]/80 font-light">
              Want to find out if your group is eligible to sponsor a named family?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#153732] text-[#F3F0E6] font-semibold px-6 py-3 rounded text-sm hover:bg-[#1F4A43] transition shadow-sm"
            >
              Enquire With Us &rarr;
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}