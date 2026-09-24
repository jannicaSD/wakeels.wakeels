import Link from "next/link";

export default function CommunitySponsorshipHomeSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#153732] text-[#F3F0E6] rounded-3xl p-8 sm:p-16 shadow-sm border border-[#C68A2E]/20 relative overflow-hidden space-y-10">
        
        {/* Accent Tag */}
        <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Community Sponsorship
        </div>

        {/* Main Headline & Intro */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            Communities can welcome a family.
          </h2>
          <p className="font-serif text-xl sm:text-2xl font-normal text-[#C68A2E] leading-relaxed">
            Since 2016, Community Sponsorship has allowed ordinary groups across the UK — neighbours, faith groups, workplaces, universities — to formally welcome a refugee family and support their resettlement.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-4 border-t border-[#C68A2E]/20">
          
          <div className="space-y-4 text-[#F3F0E6]/90 text-base sm:text-lg font-light leading-relaxed">
            <p>
              It is a Home Office-recognised route, not a private arrangement.
            </p>
            <p>
              The United Nations Refugee Agency (UNHCR) identifies refugees in need of resettlement, and only families accepted by the Home Office for resettlement can be matched to an approved sponsor group.
            </p>
          </div>

          <div className="bg-[#1F4A43]/50 p-6 sm:p-8 rounded-2xl border border-[#C68A2E]/30 space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Official Status</span>
              <p className="font-semibold text-lg text-[#F3F0E6]">
                Wakeels and Wakeels CIC is an approved UK Home Office Community Sponsorship group.
              </p>
            </div>
            
            <div className="pt-4">
              <Link
                href="/community-sponsorship"
                className="inline-flex items-center text-sm font-semibold text-[#C68A2E] hover:text-white group"
              >
                Learn how sponsorship works 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}