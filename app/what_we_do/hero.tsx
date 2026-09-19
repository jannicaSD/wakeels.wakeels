import Link from "next/link";

export const metadata = {
  title: "What We Do | Practical Support & Refugee Support | Wakeels and Wakeels",
  description: "Wakeels and Wakeels supports asylum seekers, refugees and displaced people already living in the UK through practical help, community connection and signposting to appropriate professional services.",
};

export default function WhatWeDoPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* WHAT WE DO HERO SECTION */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
          
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Our Services & Support
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            Practical Support. Genuine Welcome. Stronger Communities.
          </h1>

          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl leading-relaxed">
            Wakeels and Wakeels supports asylum seekers, refugees and displaced people already living in the UK through practical help, community connection and signposting to appropriate professional services.
          </p>

        </div>
      </section>

      {/* CORE SERVICES CONTAINER */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex-grow w-full">
        
        <div className="space-y-6">
          <h2 className="font-serif text-3xl font-bold text-[#153732]">
            How We Support Our Community
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">01</span>
                <h3 className="font-serif text-xl font-bold text-[#153732]">Welcome & settling in</h3>
                <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                  Airport welcomes, cultural orientation, and hands-on help through the first, most disorientating weeks.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">02</span>
                <h3 className="font-serif text-xl font-bold text-[#153732]">Housing & daily life</h3>
                <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                  Help finding and preparing a home, registering with a GP, opening a bank account, and school admissions.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">03</span>
                <h3 className="font-serif text-xl font-bold text-[#153732]">English & everyday skills</h3>
                <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                  Language tuition and practical, real-world skills that build confidence and independence.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">04</span>
                <h3 className="font-serif text-xl font-bold text-[#153732]">Community & belonging</h3>
                <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                  Friendship networks, volunteering, and shared events that turn neighbours into a support system.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* COMPLIANCE & LEGAL NOTICE BOX */}
        <section className="bg-[#153732] text-[#F3F0E6] p-8 sm:p-10 rounded-xl shadow-sm space-y-4 border-l-4 border-[#C68A2E]">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#C68A2E]">
            Signposting to regulated advice
          </h3>
          <p className="text-[#F3F0E6]/90 leading-relaxed text-sm sm:text-base">
            For anything touching immigration or asylum law, we refer people to OISC/IAA-registered advisers. We do not give immigration advice ourselves — and we think that boundary is part of doing right by the people we serve.
          </p>
          <div className="pt-2">
            <a
              href="https://www.gov.uk/find-an-immigration-adviser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C68A2E] text-[#153732] font-semibold px-5 py-2.5 rounded text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              Find a regulated OISC/IAA adviser on GOV.UK &rarr;
            </a>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="text-center bg-white p-10 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#153732]">Ready to get involved?</h2>
          <p className="text-sm text-[#221F1B]/70 max-w-md mx-auto">
            Discover how you can volunteer your time, donate essentials, or help sponsor a family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/get-involved"
              className="bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3 rounded text-sm hover:opacity-90 transition shadow-sm"
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="bg-[#1F4A43] text-[#F3F0E6] font-semibold px-6 py-3 rounded text-sm hover:bg-[#153732] transition shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}