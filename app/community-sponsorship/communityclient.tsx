"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Who decides which family we sponsor?",
    answer: "Ordinarily the Home Office matches a family to your group; under Named Community Sponsorship, an approved group can identify a specific family already recognised for resettlement[cite: 2]."
  },
  {
    question: "Can I sponsor a specific person I know overseas?",
    answer: "Only if that person already holds, or has been formally assessed and recognised as holding, refugee status through international protection processes — see the Family Sponsorship Programme page for full detail[cite: 2]."
  },
  {
    question: "How long is the commitment?",
    answer: "Around two years of housing, and roughly one year of hands-on integration support[cite: 2]."
  },
  {
    question: "Do we need to be a registered charity?",
    answer: "Sponsor groups must normally be, or partner with, a registered charity or CIC — we can advise on this as part of your application[cite: 2]."
  }
];

export default function CommunityClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* PAGE HEADER */}
      <section className="bg-[#1F4A43] text-[#F3F0E6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-block bg-[#C68A2E] text-[#153732] text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
            Home Office Approved
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6]">
            UK Community Sponsorship
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl">
            Empowering ordinary groups across the UK to formally welcome refugee families and support their resettlement with trust and expertise[cite: 2].
          </p>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 flex-grow w-full">

        {/* INTRODUCTION & OFFICIAL SCHEME OVERVIEW */}
        <section className="bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-[#1F4A43]/10 space-y-6">
          <div className="space-y-4 text-[#221F1B]/80 leading-relaxed text-base sm:text-lg">
            <p>
              Since 2016, Community Sponsorship has allowed ordinary groups across the UK — neighbours, faith groups, workplaces, universities — to formally welcome a refugee family and support their resettlement[cite: 2]. It is a Home Office-recognised route, not a private arrangement: the United Nations Refugee Agency (UNHCR) identifies refugees in need of resettlement, and only families accepted by the Home Office for resettlement can be matched to an approved sponsor group[cite: 2].
            </p>
            <p>
              A sponsor group commits to a genuine partnership: welcoming the family on arrival, arranging suitable housing for at least two years, and providing around a year of hands-on integration support[cite: 2].
            </p>
          </div>
        </section>

        {/* WAKEELS & WAKEELS APPROVED STATUS HIGHLIGHT */}
        <section className="bg-[#153732] text-[#F3F0E6] p-8 sm:p-10 rounded-lg shadow-sm space-y-4 border-l-4 border-[#C68A2E]">
          <h2 className="font-serif text-2xl font-bold text-[#C68A2E]">
            Our Official Status
          </h2>
          <p className="text-[#F3F0E6]/90 leading-relaxed text-base">
            Wakeels and Wakeels CIC is an approved UK Home Office Community Sponsorship group[cite: 2]. We are registered to sponsor and support refugee families through this official route, working within Home Office rules and local authority agreements at every step[cite: 2].
          </p>
        </section>

        {/* FAQS ACCORDION SECTION */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#221F1B]/70">
              Clear answers to common questions regarding community-led resettlement.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm border border-[#1F4A43]/10 overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none focus:bg-[#F3F0E6]/30"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg font-bold text-[#153732] pr-4">
                      {faq.question}
                    </span>
                    <span className="text-[#C68A2E] text-xl font-bold flex-shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 text-[#221F1B]/80 text-base leading-relaxed border-t border-[#1F4A43]/10 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section className="text-center bg-white p-10 rounded-lg shadow-sm border border-[#1F4A43]/10 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
            Ready to make a difference locally?
          </h2>
          <p className="text-[#221F1B]/80 max-w-xl mx-auto text-base">
            Take the first step toward building a compassionate sponsor circle in your community with our full guidance and backing.
          </p>
          <div>
            <Link
              href="/get-involved"
              className="inline-block bg-[#C68A2E] text-[#153732] font-semibold px-8 py-3.5 rounded text-base hover:opacity-90 transition shadow-sm"
            >
              Start your sponsorship journey &rarr;
            </Link>
          </div>
        </section>

      </main>

    </div>
  );
}