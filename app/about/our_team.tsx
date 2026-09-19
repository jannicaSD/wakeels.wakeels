export default function OurTeamSection() {
  return (
    <section className="bg-[#F3F0E6] text-[#221F1B] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Leadership & Governance
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
            Our Team
          </h2>
          <p className="text-[#221F1B]/80 text-base sm:text-lg">
            The people behind Wakeels and Wakeels, bringing professional and community experience to support displaced families.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Team Member Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-[#1F4A43]/10 overflow-hidden flex flex-col justify-between">
            <div>
              {/* Photograph Placeholder */}
              <div className="w-full h-64 bg-[#1F4A43]/10 flex items-center justify-center text-[#1F4A43]/50 text-sm font-medium">
                [Photograph]
              </div>
              
              <div className="p-6 space-y-3">
                {/* Name as it appears in Companies House */}
                <h3 className="font-serif text-xl font-bold text-[#153732]">
                  [Full Name]
                </h3>
                
                {/* Role */}
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C68A2E]">
                  Director / Trustee
                </p>
                
                {/* Short Biography & Experience */}
                <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                  [Short biography highlighting relevant professional background, community experience, and specific responsibilities within Wakeels and Wakeels.]
                </p>
              </div>
            </div>
          </div>

          {/* Team Member Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-[#1F4A43]/10 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-full h-64 bg-[#1F4A43]/10 flex items-center justify-center text-[#1F4A43]/50 text-sm font-medium">
                [Photograph]
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#153732]">
                  [Full Name]
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C68A2E]">
                  Key Staff / Member
                </p>
                <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                  [Short biography highlighting relevant professional background, community experience, and specific responsibilities within Wakeels and Wakeels.]
                </p>
              </div>
            </div>
          </div>

          {/* Team Member Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-[#1F4A43]/10 overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-full h-64 bg-[#1F4A43]/10 flex items-center justify-center text-[#1F4A43]/50 text-sm font-medium">
                [Photograph]
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl font-bold text-[#153732]">
                  [Full Name]
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C68A2E]">
                  Director / Trustee
                </p>
                <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                  [Short biography highlighting relevant professional background, community experience, and specific responsibilities within Wakeels and Wakeels.]
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}