import Link from "next/link";

export default function StoriesConsentCTASection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
      
      {/* Important Safeguarding & Consent Notice */}
      <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-[#1F4A43]/10 space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Privacy & Ethics
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#153732]">
          Important Notice on Consent
        </h3>
        <p className="text-[#221F1B]/80 text-base sm:text-lg leading-relaxed font-light">
          Only publish identifiable stories, photographs or quotes with the necessary consent.
        </p>
      </div>

      {/* CALL TO ACTION BANNER */}
      <div className="bg-[#153732] text-[#F3F0E6] p-10 sm:p-14 rounded-2xl shadow-sm text-center space-y-6 relative overflow-hidden">
        
        <div className="space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Make an Impact</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3F0E6]">
            Want to get involved?
          </h3>
          <p className="text-[#F3F0E6]/80 text-sm sm:text-base font-light">
            Join our network of welcoming communities, sponsors, and supporters helping families build safe new lives in the UK.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center bg-[#C68A2E] text-[#153732] font-semibold px-8 py-3.5 rounded-md shadow-sm hover:opacity-95 transition-all text-sm sm:text-base group"
          >
            Want to get involved? 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

      </div>

    </section>
  );
}