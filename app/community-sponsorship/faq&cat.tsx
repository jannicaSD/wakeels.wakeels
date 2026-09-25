import Link from "next/link";

export default function SponsorshipFAQCTASection() {
  const faqs = [
    {
      question: "Who decides which family we sponsor?",
      answer: "Ordinarily the Home Office matches a family to your group; under Named Community Sponsorship, an approved group can identify a specific family already recognised for resettlement.",
    },
    {
      question: "Can I sponsor a specific person I know overseas?",
      answer: "Only if that person already holds, or has been formally assessed and recognised as holding, refugee status through international protection processes — see the Family Sponsorship Programme page for full detail.",
    },
    {
      question: "How long is the commitment?",
      answer: "Around two years of housing, and roughly one year of hands-on integration support.",
    },
    {
      question: "Do we need to be a registered charity?",
      answer: "Sponsor groups must normally be, or partner with, a registered charity or CIC — we can advise on this as part of your application.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-20">
      
      {/* FAQ Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Got Questions?
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#153732]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg font-light leading-relaxed">
          Clear answers regarding eligibility, matching processes, and time commitments for sponsor groups.
        </p>
      </div>

      {/* FAQ Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1 duration-300"
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">
                Question 0{index + 1}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">
                {faq.question}
              </h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Final Call to Action Box */}
      <div className="bg-[#153732] text-[#F3F0E6] rounded-3xl p-8 sm:p-14 shadow-sm border border-[#C68A2E]/30 text-center space-y-6 relative overflow-hidden">
        <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Take the Next Step
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F3F0E6]">
            Start your sponsorship journey.
          </h2>
          <p className="text-[#F3F0E6]/80 text-base font-light">
            Bring your community together and help provide a safe haven and sustainable future for a refugee family.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C68A2E] text-[#153732] font-semibold px-8 py-3.5 rounded shadow-sm hover:opacity-95 transition-all text-sm sm:text-base group"
          >
            Start your sponsorship journey 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>

    </section>
  );
}