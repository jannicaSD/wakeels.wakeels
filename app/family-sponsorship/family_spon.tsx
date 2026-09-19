export default function FamilySponsorshipEligibilitySection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Compliance & Criteria
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
          What This Route Does — and Does Not — Mean
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg">
          Important guidance regarding eligibility, application procedures, and the scope of the Family Sponsorship Programme.
        </p>
      </div>

      {/* Grid Layout for Eligibility Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Card 1: Eligibility */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Eligibility</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Recognised Refugee Status</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              Eligible individuals must already hold, or be formally assessed and recognised as holding, refugee status through international protection processes.
            </p>
          </div>
        </div>

        {/* Card 2: Cannot Apply Directly */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Application Rule</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">No Direct Applications</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              People cannot apply to this scheme themselves. An approved sponsor group applies on behalf of a named individual or family.
            </p>
          </div>
        </div>

        {/* Card 3: Domestic Asylum Applications */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Exclusion</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Domestic Asylum Applications</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              People already going through the UK&apos;s domestic asylum process are not eligible through this particular route.
            </p>
          </div>
        </div>

        {/* Card 4: Not a General UK Immigration Route */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Framework Boundary</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Not a General Route</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              This programme is not a scholarship and does not provide a general route into the UK. It operates within a specific, government-controlled legal framework.
            </p>
          </div>
        </div>

      </div>

      {/* Home Office Updates Banner (Spans Full Width) */}
      <div className="bg-[#153732] text-[#F3F0E6] p-8 sm:p-10 rounded-2xl shadow-sm border-l-4 border-[#C68A2E] space-y-3">
        <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Ongoing Developments</span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#C68A2E]">
          Details May Develop
        </h3>
        <p className="text-[#F3F0E6]/90 text-sm sm:text-base leading-relaxed font-light">
          Full details, including which nationalities and regions will initially be included, are still being confirmed by the Home Office. Wakeels and Wakeels will update the information as the position becomes clearer.
        </p>
      </div>

    </section>
  );
}