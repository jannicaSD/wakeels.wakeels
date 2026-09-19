import Link from "next/link";

export default function ServicesAndSponsorshipSection() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] font-sans">
      
      {/* WHAT WE DO SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Our Core Services
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
            What We Do
          </h2>
          <p className="text-[#221F1B]/80 text-base sm:text-lg">
            Providing comprehensive support from arrival to long-term community integration.
          </p>
        </div>

        {/* 5 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">01</span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">Welcome & Settling In</h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                Airport welcomes, cultural orientation and practical support through the first weeks[cite: 2].
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">02</span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">Housing & Daily Life</h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                Help with preparing a home, registering with a GP, opening a bank account and school admissions[cite: 2].
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">03</span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">English & Everyday Skills</h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                Language tuition and practical skills that help build confidence and independence[cite: 2].
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">04</span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">Community & Belonging</h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                Friendship networks, volunteering and shared events that help build supportive communities[cite: 2].
              </p>
            </div>
          </div>

          {/* Card 5: Regulated Advice (Spans 2 columns on lg screens for balance) */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 space-y-3 flex flex-col justify-between lg:col-span-2">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">05</span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">Signposting to Regulated Advice</h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                We connect people with appropriately regulated advisers for immigration and asylum matters[cite: 2]. We do not provide immigration advice ourselves[cite: 2].
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* COMMUNITY SPONSORSHIP FEATURE BANNER */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Official Resettlement Route
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6]">
            Community Sponsorship
          </h2>
          <p className="text-base sm:text-lg text-[#F3F0E6]/90 font-light leading-relaxed max-w-3xl mx-auto">
            Since 2016, Community Sponsorship has enabled groups across the UK — including neighbours, faith groups, workplaces and universities — to formally welcome refugee families and support their resettlement[cite: 2]. Wakeels and Wakeels CIC is an approved UK Home Office Community Sponsorship group[cite: 2].
          </p>
          <div className="pt-4">
            <Link
              href="/community-sponsorship"
              className="inline-block bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3.5 rounded shadow-sm hover:opacity-90 transition-all text-sm"
            >
              Learn How Sponsorship Works &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST & SAFEGUARDING STRIP */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-[#1F4A43]/10">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="font-serif text-xl font-bold text-[#153732]">
            Trust & Safeguarding
          </h3>
          <p className="text-[#221F1B]/80 text-sm leading-relaxed max-w-2xl mx-auto">
            Wakeels and Wakeels CIC is registered in England & Wales and is an approved UK Home Office Community Sponsorship group[cite: 2]. We operate safeguarding procedures for work involving children and vulnerable adults[cite: 2].
          </p>
          <p className="text-xs text-[#221F1B]/60 max-w-xl mx-auto italic">
            <strong>Important:</strong> We do not provide immigration or asylum advice[cite: 2]. People requiring advice about their individual case should be directed to appropriately registered advisers[cite: 2].
          </p>
        </div>
      </section>

    </div>
  );
}