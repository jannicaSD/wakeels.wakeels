import Link from "next/link";

export default function TwoPathsSection() {
  return (
    <section className="bg-[#F3F0E6] text-[#221F1B] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            How We Can Help You
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
            Two Paths Forward
          </h2>
          <p className="text-[#221F1B]/80 text-base sm:text-lg">
            Whether you are seeking guidance or looking to build a community sponsor group, we are here to walk beside you.
          </p>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Path 1: Need Support */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6 transition-transform hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#1F4A43]/10 flex items-center justify-center text-[#1F4A43] font-serif font-bold text-xl">
                01
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#153732]">
                Need support?
              </h3>
              <p className="text-[#221F1B]/80 text-base leading-relaxed">
                If you or someone you know is an asylum seeker, refugee or displaced person already in the UK, we can help with settling in, housing, English, and connecting you with the right regulated advice.
              </p>
            </div>
            
            <div className="pt-4 border-t border-[#1F4A43]/10">
              <Link
                href="/what-we-do"
                className="inline-flex items-center text-[#1F4A43] font-semibold hover:text-[#C68A2E] transition-colors group"
              >
                See What We Do 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Path 2: Want to Sponsor a Family */}
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6 transition-transform hover:-translate-y-1">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#C68A2E]/10 flex items-center justify-center text-[#C68A2E] font-serif font-bold text-xl">
                02
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#153732]">
                Want to sponsor a family?
              </h3>
              <p className="text-[#221F1B]/80 text-base leading-relaxed">
                Bring your community together and welcome a refugee family through the UK&apos;s Community Sponsorship scheme. We&apos;ll guide you through the process.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1F4A43]/10">
              <Link
                href="/get-involved"
                className="inline-flex items-center text-[#C68A2E] font-semibold hover:text-[#153732] transition-colors group"
              >
                Start a Sponsor Group 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}