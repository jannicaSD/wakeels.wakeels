import Link from "next/link";

export default function FamilySponsorshipCTASection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      
      {/* Target Audience / Guidance Card */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#1F4A43]/10 space-y-6">
        <div className="space-y-3">
          <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Audience & Guidance
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
            Who Is This For?
          </h2>
        </div>

        <div className="space-y-4 text-[#221F1B]/80 text-base sm:text-lg leading-relaxed font-light">
          <p>
            If you know a family who may already hold recognised refugee status and could benefit from this route, or if your community wants to explore sponsoring a named family, we welcome a conversation.
          </p>
          <p className="font-medium text-[#153732] pt-2 border-t border-[#1F4A43]/10">
            We will explain clearly what is and is not possible before anyone makes plans or expectations.
          </p>
        </div>
      </div>

      {/* CALL TO ACTION BANNER */}
      <div className="bg-[#153732] text-[#F3F0E6] p-10 sm:p-14 rounded-2xl shadow-sm text-center space-y-6 relative overflow-hidden">
        
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Get in Touch</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3F0E6]">
            Have questions about the programme?
          </h3>
          <p className="text-[#F3F0E6]/80 text-sm sm:text-base font-light">
            Reach out to our team to start an open, transparent conversation about your community group and sponsorship possibilities.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C68A2E] text-[#153732] font-semibold px-8 py-3.5 rounded-md shadow-sm hover:opacity-95 transition-all text-sm sm:text-base group"
          >
            Enquire About the Programme 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

      </div>

    </section>
  );
}