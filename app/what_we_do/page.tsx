import Link from "next/link";

export const metadata = {
  title: "What We Do | Support for Asylum Seekers & Refugees | Wakeels and Wakeels",
  description: "Practical support for asylum seekers, refugees and displaced people in the UK — welcome and orientation, housing help, English tuition, and signposting to regulated legal advice.",
};

const services = [
  {
    title: "Welcome & settling in",
    description: "Airport welcomes, cultural orientation, and hands-on help through the first, most disorientating weeks.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Housing & daily life",
    description: "Help finding and preparing a home, registering with a GP, opening a bank account, and school admissions.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "English & everyday skills",
    description: "Language tuition and practical, real-world skills that build confidence and independence.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Signposting to regulated advice",
    description: "For anything touching immigration or asylum law, we refer people to OISC/IAA-registered advisers. We do not give immigration advice ourselves.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Community & belonging",
    description: "Friendship networks, volunteering, and shared events that turn neighbours into a support system.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="bg-paper text-ink min-h-screen flex flex-col font-sans">
      
      {/* PAGE HEADER */}
      <section className="bg-pine text-paper py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-paper">
            What We Do
          </h1>
          <p className="text-lg sm:text-xl font-light text-paper/90 max-w-2xl">
            Practical support for asylum seekers, refugees and displaced people currently in the UK.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex-grow">

        {/* SERVICES LIST */}
        <div className="grid gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-pine/10 flex flex-col sm:flex-row items-start sm:items-center gap-6 transition hover:shadow-md"
            >
              {/* Icon Container */}
              <div className="p-4 bg-pine-deep/5 rounded-full border border-pine/10 flex-shrink-0">
                {service.icon}
              </div>
              
              {/* Service Details */}
              <div className="space-y-2">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-pine-deep">
                  {service.title}
                </h2>
                <p className="text-ink/80 leading-relaxed text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PROMINENT REGULATED ADVICE DISCLAIMER BLOCK */}
        <section className="bg-pine-deep text-paper p-8 rounded-lg shadow-sm space-y-4 border-l-4 border-gold">
          <h3 className="font-serif text-2xl font-bold text-gold">
            Important Note on Legal & Immigration Advice
          </h3>
          <p className="text-paper/90 leading-relaxed text-sm sm:text-base">
            We do not give immigration advice ourselves. For anything touching immigration or asylum law, we refer people to OISC/IAA-registered advisers[cite: 1]. We think that boundary is part of doing right by the people we serve[cite: 1].
          </p>
          <div className="pt-2">
            <a
              href="https://www.gov.uk/find-an-immigration-adviser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-pine-deep font-semibold px-5 py-2.5 rounded text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              Find a regulated OISC/IAA adviser on GOV.UK &rarr;
            </a>
          </div>
        </section>

      </main>

    </div>
  );
}