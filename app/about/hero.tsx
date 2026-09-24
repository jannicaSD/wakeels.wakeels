import Link from "next/link";

export const metadata = {
  title: "About Us | The People Behind the Welcome | Wakeels and Wakeels",
  description: "Discover the meaning behind our name and meet the people working as trusted advocates and representatives for refugees and displaced families.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* =========================================================
        SECTION 1: HERO & OVERVIEW
        ========================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          About Us
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#153732] leading-tight">
          The people behind the welcome.
        </h1>
        <p className="text-[#221F1B]/80 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Standing alongside displaced families as trusted advocates, guides, and neighbours through every stage of resettlement.
        </p>
      </section>


      {/* =========================================================
        SECTION 2: OUR NAME (The Meaning of "Wakeel")
        ========================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-[#153732] text-[#F3F0E6] rounded-3xl p-8 sm:p-16 shadow-sm border border-[#C68A2E]/20 relative overflow-hidden space-y-8">
          
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Our Name
          </div>

          <div className="space-y-6 max-w-3xl">
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
              &ldquo;Wakeel&rdquo; means an advocate — a trusted representative who acts on someone&apos;s behalf.
            </h2>
            
            <div className="space-y-4 text-[#F3F0E6]/90 text-base sm:text-lg font-light leading-relaxed border-t border-[#C68A2E]/30 pt-6">
              <p>
                It&apos;s a word rooted in Arabic, Urdu and Persian legal tradition, and it describes exactly the role we try to play for every person we support: someone in their corner, working on their behalf.
              </p>
            </div>
          </div>

          {/* Optional exploratory link to tie navigation together */}
          <div className="pt-4 border-t border-[#C68A2E]/20 flex items-center justify-between flex-wrap gap-4">
            <p className="text-xs sm:text-sm text-[#F3F0E6]/80 font-light">
              Learn more about how we put our values into practice.
            </p>
            <Link
              href="/what-we-do"
              className="inline-flex items-center text-sm font-semibold text-[#C68A2E] hover:text-white group"
            >
              Discover what we do 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}