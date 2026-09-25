import Link from "next/link";

export default function FamilySponsorshipEligibilitySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Criteria & Boundaries
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#153732]">
          Eligibility & Important Limitations
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg font-light leading-relaxed">
          Understanding who qualifies under Named Community Sponsorship and the strict regulatory boundaries of this route.
        </p>
      </div>

      {/* Two-Column Grid for Eligibility & Limitations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Eligibility Card */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Qualifying Criteria</span>
            <h3 className="font-serif text-2xl font-bold text-[#153732]">
              Who may be eligible?
            </h3>
            <ul className="space-y-3 text-[#221F1B]/90 text-sm sm:text-base font-light leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#C68A2E] mr-2 font-bold">&bull;</span>
                Eligible individuals must already hold, or be formally assessed and recognised as holding, refugee status through international protection processes.
              </li>
              <li className="flex items-start">
                <span className="text-[#C68A2E] mr-2 font-bold">&bull;</span>
                Individuals cannot apply directly; an approved sponsor group applies on the named individual or family&apos;s behalf.
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-[#1F4A43]/10">
            <span className="text-xs text-[#221F1B]/60 font-light italic">
              * Governed strictly by official Home Office framework criteria.
            </span>
          </div>
        </div>

        {/* Limitations Card */}
        <div className="bg-[#153732] text-[#F3F0E6] p-8 sm:p-10 rounded-3xl shadow-sm border-l-4 border-[#C68A2E] flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Regulatory Boundaries</span>
            <h3 className="font-serif text-2xl font-bold text-[#C68A2E]">
              Important limitations
            </h3>
            <ul className="space-y-3 text-[#F3F0E6]/90 text-sm sm:text-base font-light leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#C68A2E] mr-2 font-bold">&bull;</span>
                Those already going through the UK domestic asylum process are not eligible through this particular route.
              </li>
              <li className="flex items-start">
                <span className="text-[#C68A2E] mr-2 font-bold">&bull;</span>
                This is not a &ldquo;scholarship&rdquo; in the academic sense.
              </li>
              <li className="flex items-start">
                <span className="text-[#C68A2E] mr-2 font-bold">&bull;</span>
                It is not a general route into the UK for anyone, anywhere.
              </li>
              <li className="flex items-start">
                <span className="text-[#C68A2E] mr-2 font-bold">&bull;</span>
                Full details, including nationalities and regions initially included, are still being confirmed by the Home Office. We will update this page as details become clear.
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Clear Information Commitment Banner */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-[#1F4A43]/10 space-y-6 text-center max-w-4xl mx-auto">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Our Commitment to Transparency
        </div>
        
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
          Clear information. No false promises.
        </h3>

        <p className="text-[#221F1B]/80 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          If you know a family who may already hold recognised refugee status, or your community wants to explore whether it could sponsor a named family, we welcome a conversation. We will tell you plainly what is and isn&apos;t possible before hopes are raised.
        </p>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C68A2E] text-[#153732] font-semibold px-8 py-3 rounded shadow-sm hover:opacity-95 transition-all text-sm sm:text-base group"
          >
            Start a Conversation 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>

    </section>
  );
}