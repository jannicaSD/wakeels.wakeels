import Link from "next/link";

export default function OurApproachSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      
      {/* OUR APPROACH CARD */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#1F4A43]/10 space-y-6">
        <div className="space-y-3">
          <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            How We Work
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
            Our Approach
          </h2>
        </div>

        <div className="space-y-4">
          <p className="font-serif text-xl sm:text-2xl font-normal text-[#153732] leading-relaxed">
            &ldquo;Practical support. Human connection. Appropriate professional referrals.&rdquo;
          </p>
          <p className="text-[#221F1B]/80 text-base sm:text-lg leading-relaxed font-light">
            Our role is to support people with everyday settlement and community needs while ensuring specialist immigration and asylum matters are directed to appropriately regulated advisers.
          </p>
        </div>
      </div>

      {/* CALL TO ACTION BANNER */}
      <div className="bg-[#153732] text-[#F3F0E6] p-10 sm:p-14 rounded-2xl shadow-sm text-center space-y-6 relative overflow-hidden">
        
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Get in Touch</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3F0E6]">
            Need support?
          </h3>
          <p className="text-[#F3F0E6]/80 text-sm sm:text-base font-light">
            Reach out to our team to find out how we can help you or someone you know navigate settling into life in the UK.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C68A2E] text-[#153732] font-semibold px-8 py-3.5 rounded-md shadow-sm hover:opacity-95 transition-all text-sm sm:text-base group"
          >
            Get in touch 
            <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>

      </div>

    </section>
  );
}