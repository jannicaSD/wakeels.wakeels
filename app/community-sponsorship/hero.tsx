export default function CommunitySponsorshipExplanationSection() {
  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Community Sponsorship
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            Communities can welcome a family.
          </h1>

          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl mx-auto leading-relaxed">
            Discover how ordinary groups across the UK unite to provide official resettlement and a genuine welcome.
          </p>

        </div>
      </section>

      {/* 2. EXPLANATION SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white p-8 sm:p-14 rounded-3xl shadow-sm border border-[#1F4A43]/10 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">What is Community Sponsorship?</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#153732]">
              A Home Office-Recognised Pathway for Resettlement
            </h2>
          </div>

          <div className="space-y-6 text-[#221F1B]/90 text-base sm:text-lg font-light leading-relaxed border-t border-[#1F4A43]/10 pt-6">
            <p>
              Since 2016, Community Sponsorship has allowed ordinary groups across the UK — neighbours, faith groups, workplaces, universities — to formally welcome a refugee family and support their resettlement.
            </p>
            
            <p className="font-medium text-[#153732]">
              It is a Home Office-recognised route, not a private arrangement.
            </p>

            <p>
              The United Nations Refugee Agency (UNHCR) identifies refugees in need of resettlement, and only families accepted by the Home Office for resettlement can be matched to an approved sponsor group.
            </p>
          </div>

          {/* Highlight Badge Box */}
          <div className="bg-[#F3F0E6]/60 p-6 rounded-2xl border border-[#1F4A43]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#153732] uppercase tracking-wider">Official Status</span>
              <p className="text-sm font-semibold text-[#153732]">
                Wakeels and Wakeels CIC is an approved UK Home Office Community Sponsorship group.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}