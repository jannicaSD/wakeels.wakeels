import Link from "next/link";

export default function TwoJourneysSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Two Pathways
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
          How We Can Help You Get Involved
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg font-light leading-relaxed">
          Whether you are looking for guidance or looking to build a welcoming community group, we are here to support your journey.
        </p>
      </div>

      {/* Two-Column Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Card 1: Need Support? */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-8 transition-transform hover:-translate-y-1 duration-300">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Pathway One</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
              Need support?
            </h3>
            <p className="text-[#221F1B]/80 text-base leading-relaxed font-light">
              If you or someone you know is an asylum seeker, refugee or displaced person already in the UK, we can help with settling in, housing, English, and connecting you with the right regulated advice.
            </p>
          </div>

          <div className="pt-4 border-t border-[#1F4A43]/10">
            <Link
              href="/what-we-do"
              className="inline-flex items-center text-sm font-semibold text-[#153732] hover:text-[#C68A2E] group"
            >
              See what we do 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Card 2: Want to sponsor a family? */}
        <div className="bg-[#153732] text-[#F3F0E6] p-8 sm:p-12 rounded-2xl shadow-sm border-l-4 border-[#C68A2E] flex flex-col justify-between space-y-8 transition-transform hover:-translate-y-1 duration-300">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Pathway Two</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#C68A2E]">
              Want to sponsor a family?
            </h3>
            <p className="text-[#F3F0E6]/90 text-base leading-relaxed font-light">
              Bring your community together and welcome a refugee family through the UK&apos;s Community Sponsorship scheme — we&apos;ll guide you through every step.
            </p>
          </div>

          <div className="pt-4 border-t border-[#C68A2E]/30">
            <Link
              href="/community-sponsorship"
              className="inline-flex items-center text-sm font-semibold text-[#C68A2E] hover:text-white group"
            >
              Start a sponsor group 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}