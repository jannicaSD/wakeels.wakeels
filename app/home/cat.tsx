import Link from "next/link";

export default function CommunityCTASection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#153732] text-[#F3F0E6] rounded-3xl p-8 sm:p-16 shadow-sm border border-[#C68A2E]/20 relative overflow-hidden text-center space-y-8">
        
        {/* Accent Tag */}
        <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Get Involved
        </div>

        {/* Headline & Subtitle */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            There is a role for your community.
          </h2>
          <p className="font-serif text-xl sm:text-2xl font-normal text-[#C68A2E] leading-relaxed">
            Bring people together. Give your time. Share your skills. Donate. Build a long-term partnership.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center bg-[#C68A2E] text-[#153732] font-semibold px-8 py-3.5 rounded shadow-sm hover:opacity-95 transition-all text-sm sm:text-base group"
          >
            Get involved 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-transparent text-[#F3F0E6] font-semibold px-8 py-3.5 rounded shadow-sm hover:bg-[#1F4A43]/50 border border-[#F3F0E6]/30 transition-all text-sm sm:text-base group"
          >
            Contact us 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}