export default function WhoWeSupportSection() {
  return (
    <section className="bg-white text-[#221F1B] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1F4A43]/10">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
            Our Community Focus
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
            Who We Support
          </h2>
        </div>

        {/* Main Content Cards / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: People already in the UK */}
          <div className="bg-[#F3F0E6]/50 p-6 sm:p-8 rounded-lg border border-[#1F4A43]/15 space-y-3 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#153732] mb-2">
                Already in the UK
              </h3>
              <p className="text-[#221F1B]/80 text-sm sm:text-base leading-relaxed">
                We support asylum seekers, refugees, and displaced people already living in the UK[cite: 3].
              </p>
            </div>
          </div>

          {/* Card 2: Resettlement via Community Sponsorship */}
          <div className="bg-[#F3F0E6]/50 p-6 sm:p-8 rounded-lg border border-[#1F4A43]/15 space-y-3 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#153732] mb-2">
                Resettlement Scheme
              </h3>
              <p className="text-[#221F1B]/80 text-sm sm:text-base leading-relaxed">
                Through the UK&apos;s Community Sponsorship scheme, we also help communities welcome refugee families whose need for resettlement has already been recognised[cite: 3].
              </p>
            </div>
          </div>

        </div>

        {/* Closing Mission Statement Box */}
        <div className="bg-[#1F4A43] text-[#F3F0E6] p-8 sm:p-10 rounded-lg shadow-sm space-y-3 text-center sm:text-left">
          <p className="font-serif text-lg sm:text-xl font-medium leading-relaxed">
            &ldquo;Whether someone arrived recently or is still waiting overseas, our aim is the same: a genuine welcome, practical help, and the tools to build an independent life[cite: 3].&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}