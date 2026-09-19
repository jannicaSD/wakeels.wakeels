import Link from "next/link";

export default function AboutCTASection() {
  return (
    <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Accent Tag */}
        <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Take the Next Step
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6] leading-snug max-w-2xl mx-auto">
          Want to help us create welcoming communities?
        </h2>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center bg-[#C68A2E] text-[#153732] font-semibold px-8 py-4 rounded-md shadow-sm hover:opacity-90 transition-all text-base group"
          >
            Get Involved 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}