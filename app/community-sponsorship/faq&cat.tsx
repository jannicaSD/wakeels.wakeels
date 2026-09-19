import Link from "next/link";

export default function SponsorshipFAQSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-16">
      
      {/* FAQ Header */}
      <div className="text-center space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Common Questions
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg">
          Everything you need to know about the commitment, matching process, and group requirements.
        </p>
      </div>

      {/* FAQ Items Grid / Stack */}
      <div className="space-y-6">
        
        {/* Question 1 */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3">
          <h3 className="font-serif text-xl font-bold text-[#153732]">
            Who decides which family we sponsor?
          </h3>
          <p className="text-[#221F1B]/80 text-sm sm:text-base leading-relaxed font-light">
            Ordinarily, the Home Office matches a family to your group. Under Named Community Sponsorship, an approved group can identify a specific family already recognised for resettlement.
          </p>
        </div>

        {/* Question 2 */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3">
          <h3 className="font-serif text-xl font-bold text-[#153732]">
            Can I sponsor a specific person I know overseas?
          </h3>
          <p className="text-[#221F1B]/80 text-sm sm:text-base leading-relaxed font-light">
            Only where that person already holds, or has been formally assessed and recognised as holding, refugee status through international protection processes. See the Family Sponsorship Programme for more information.
          </p>
        </div>

        {/* Question 3 */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3">
          <h3 className="font-serif text-xl font-bold text-[#153732]">
            How long is the commitment?
          </h3>
          <p className="text-[#221F1B]/80 text-sm sm:text-base leading-relaxed font-light">
            The programme involves around two years of housing and roughly one year of hands-on integration support.
          </p>
        </div>

        {/* Question 4 */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3">
          <h3 className="font-serif text-xl font-bold text-[#153732]">
            Do we need to be a registered charity?
          </h3>
          <p className="text-[#221F1B]/80 text-sm sm:text-base leading-relaxed font-light">
            Sponsor groups must normally be, or partner with, a registered charity or CIC. Wakeels and Wakeels can advise as part of the sponsorship process.
          </p>
        </div>

      </div>

      {/* CALL TO ACTION BANNER */}
      <div className="bg-[#153732] text-[#F3F0E6] p-10 sm:p-14 rounded-2xl shadow-sm text-center space-y-6 relative overflow-hidden">
        
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Take the Next Step</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3F0E6]">
            Ready to make a difference?
          </h3>
          <p className="text-[#F3F0E6]/80 text-sm sm:text-base font-light">
            Join hands with your community to welcome a refugee family and provide a safe new beginning.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center bg-[#C68A2E] text-[#153732] font-semibold px-8 py-3.5 rounded-md shadow-sm hover:opacity-95 transition-all text-sm sm:text-base group"
          >
            Start Your Sponsorship Journey 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

      </div>

    </section>
  );
}