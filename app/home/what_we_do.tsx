import Link from "next/link";

export default function WhatWeDoHomeSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Our Services
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#153732]">
          What We Do
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg font-light leading-relaxed">
          Comprehensive, compassionate support designed to help displaced families and individuals settle in safely and build independent lives.
        </p>
      </div>

      {/* Services Grid (3 Columns on Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Service 1: Welcome & settling in */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1 duration-300">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">01 — Arrival</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Welcome & settling in</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
              Airport welcomes, cultural orientation, and hands-on help through the first, most disorientating weeks.
            </p>
          </div>
        </div>

        {/* Service 2: Housing & daily life */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1 duration-300">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">02 — Practical Support</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Housing & daily life</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
              Help finding and preparing a home, registering with a GP, opening a bank account, and school admissions.
            </p>
          </div>
        </div>

        {/* Service 3: English & everyday skills */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1 duration-300">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">03 — Education</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">English & everyday skills</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
              Language tuition and practical, real-world skills that build confidence and independence.
            </p>
          </div>
        </div>

        {/* Service 4: Signposting to regulated advice */}
        <div className="bg-[#153732] text-[#F3F0E6] p-8 rounded-2xl shadow-sm border-l-4 border-[#C68A2E] flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1 duration-300">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">04 — Compliance</span>
            <h3 className="font-serif text-xl font-bold text-[#C68A2E]">Signposting to regulated advice</h3>
            <p className="text-[#F3F0E6]/90 text-sm leading-relaxed font-light">
              For anything touching immigration or asylum law, we refer people to OISC/IAA-registered advisers. We do not provide immigration advice ourselves.
            </p>
          </div>
        </div>

        {/* Service 5: Community & belonging */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1 duration-300 lg:col-span-2">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">05 — Integration</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Community & belonging</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
              Friendship networks, volunteering, and shared events that turn neighbours into a support system.
            </p>
          </div>
        </div>

      </div>

      {/* Call to Action Bar */}
      <div className="pt-6 text-center">
        <Link
          href="/what-we-do"
          className="inline-flex items-center justify-center bg-[#153732] text-[#F3F0E6] font-semibold px-8 py-3.5 rounded shadow-sm hover:bg-[#1F4A43] transition-all text-sm group"
        >
          See what we do 
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>

    </section>
  );
}