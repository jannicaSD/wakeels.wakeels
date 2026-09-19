export default function HowSponsorshipWorksSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Official Resettlement Pathway
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
          How Community Sponsorship Works
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg">
          Community Sponsorship is a Home Office-recognised route, not a private arrangement.
        </p>
      </div>

      {/* 3-Step Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* Step 01 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">01</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">UNHCR Identification</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              The United Nations Refugee Agency (UNHCR) identifies refugees in particular need of resettlement from regions of conflict.
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">02</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Home Office Approval</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              Families accepted by the UK Home Office for resettlement are formally cleared and matched with approved sponsor groups.
            </p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">03</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Sponsor Partnership</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              A sponsor group commits to a genuine partnership that includes welcoming the family, arranging suitable housing and providing hands-on integration support.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}