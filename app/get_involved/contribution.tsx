import Link from "next/link";

export default function ContributionOptionsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          How You Can Help
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
          Ways to Support Our Mission
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg">
          Choose how you would like to get involved, from forming a sponsor group to volunteering, donating, or building a long-term partnership.
        </p>
      </div>

      {/* Grid Layout for the 4 Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Option 01: Start or Join a Sponsor Group */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">01</span>
            <h3 className="font-serif text-2xl font-bold text-[#153732]">Start or Join a Sponsor Group</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              Bring people together in your local community, workplace or congregation. We can help guide your group through the Home Office approval process.
            </p>
          </div>
          <div className="pt-4 border-t border-[#1F4A43]/10">
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-[#1F4A43] hover:text-[#153732] group"
            >
              Register Interest 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Option 02: Volunteer */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">02</span>
            <h3 className="font-serif text-2xl font-bold text-[#153732]">Volunteer</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              Share your time, skills or experience. You can contribute in several ways:
            </p>
            <ul className="space-y-2 text-sm text-[#221F1B]/80 list-disc list-inside">
              <li>Teach English</li>
              <li>Offer a professional skill</li>
              <li>Support community activities</li>
              <li>Give practical help</li>
              <li>Help a family find their feet</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-[#1F4A43]/10">
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-[#1F4A43] hover:text-[#153732] group"
            >
              See Volunteer Opportunities 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Option 03: Donate */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">03</span>
            <h3 className="font-serif text-2xl font-bold text-[#153732]">Donate</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              Your financial contributions directly support vital resettlement needs:
            </p>
            <ul className="space-y-2 text-sm text-[#221F1B]/80 list-disc list-inside">
              <li>Housing set-up</li>
              <li>Essential items</li>
              <li>Integration support</li>
              <li>Practical needs of sponsored families</li>
            </ul>
          </div>
          <div className="space-y-3 pt-4 border-t border-[#1F4A43]/10">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#C68A2E] text-[#153732] font-semibold px-5 py-2.5 rounded text-sm hover:opacity-90 transition shadow-sm"
            >
              Donate &rarr;
            </Link>
            <p className="text-xs text-[#221F1B]/60 italic">
              *The donation platform will be linked once the client&apos;s actual donation system is confirmed.
            </p>
          </div>
        </div>

        {/* Option 04: Partner With Us */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">04</span>
            <h3 className="font-serif text-2xl font-bold text-[#153732]">Partner With Us</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              We welcome partnerships with faith groups, businesses, universities, local authorities, and community organisations. Our aim is to build meaningful, long-term partnerships rather than one-off gestures.
            </p>
          </div>
          <div className="pt-4 border-t border-[#1F4A43]/10">
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-[#1F4A43] hover:text-[#153732] group"
            >
              Get In Touch 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>

    </section>
  );
}