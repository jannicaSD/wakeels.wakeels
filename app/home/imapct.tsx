export default function ImpactFactsSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#153732] text-[#F3F0E6] rounded-3xl p-8 sm:p-16 shadow-sm border border-[#C68A2E]/20 relative overflow-hidden space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Our Impact & Governance
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F0E6]">
            Building Stability Across Communities
          </h2>
          <p className="text-[#F3F0E6]/80 text-sm sm:text-base font-light">
            Working hand-in-hand with local groups, volunteers, and the Home Office framework to welcome displaced families.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          
          {/* Metric 1: Families Welcomed */}
          <div className="bg-[#1F4A43]/50 p-8 rounded-2xl border border-[#C68A2E]/20 text-center space-y-2 flex flex-col justify-center">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#C68A2E]">
              [X]
            </span>
            <h3 className="text-sm font-semibold text-[#F3F0E6] uppercase tracking-wider">
              Families Welcomed
            </h3>
            <p className="text-xs text-[#F3F0E6]/70 font-light pt-1">
              Supported through community sponsorship and integration programmes.
            </p>
          </div>

          {/* Metric 2: Active Sponsor Groups */}
          <div className="bg-[#1F4A43]/50 p-8 rounded-2xl border border-[#C68A2E]/20 text-center space-y-2 flex flex-col justify-center">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#C68A2E]">
              [X]
            </span>
            <h3 className="text-sm font-semibold text-[#F3F0E6] uppercase tracking-wider">
              Active Sponsor Groups
            </h3>
            <p className="text-xs text-[#F3F0E6]/70 font-light pt-1">
              Local networks and volunteers driving community-led welcome.
            </p>
          </div>

          {/* Metric 3: Approved Home Office Sponsor */}
          <div className="bg-[#1F4A43]/50 p-8 rounded-2xl border border-[#C68A2E]/20 text-center space-y-2 flex flex-col justify-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C68A2E] leading-tight">
              Since [YEAR]
            </span>
            <h3 className="text-sm font-semibold text-[#F3F0E6] uppercase tracking-wider">
              Approved UK Home Office Sponsor
            </h3>
            <p className="text-xs text-[#F3F0E6]/70 font-light pt-1">
              Operating officially under UK government resettlement frameworks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}