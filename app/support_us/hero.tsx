import Link from "next/link";

export default function SupportHeroSection() {
  return (
    <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
        
        {/* Accent Tag */}
        <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Support Our Mission
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
          Support a Welcome. Build a Future.
        </h1>

        {/* Subheadline / Intro */}
        <p className="font-serif text-xl sm:text-2xl font-normal text-[#C68A2E] leading-relaxed">
          There are many ways to stand alongside refugees, asylum seekers and displaced people and help communities create a genuine welcome.
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-3xl leading-relaxed">
          Whether you give your time, skills, resources or community support, your contribution can help people build a new life with greater stability, connection and independence.
        </p>

        {/* Action Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3.5 rounded shadow-sm hover:opacity-90 transition-all text-center text-sm sm:text-base"
          >
            Donate &rarr;
          </Link>
          <Link
            href="/get-involved"
            className="w-full sm:w-auto bg-[#1F4A43] text-[#F3F0E6] font-semibold px-6 py-3.5 rounded shadow-sm hover:bg-[#153732] border border-[#C68A2E]/30 transition-all text-center text-sm sm:text-base"
          >
            Volunteer &rarr;
          </Link>
          <Link
            href="/community-sponsorship"
            className="w-full sm:w-auto bg-transparent text-[#F3F0E6] font-semibold px-6 py-3.5 rounded shadow-sm hover:bg-[#1F4A43]/40 border border-[#F3F0E6]/30 transition-all text-center text-sm sm:text-base"
          >
            Become a Sponsor &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}