export default function OurServicesSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Comprehensive Care
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
          Our Services
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg">
          Practical help, community connection, and trusted guidance at every step of resettlement.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Service 01 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">01</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Welcome & Settling In</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              We provide practical support during the early stages of settling into life in the UK, including welcome, orientation and help navigating everyday situations.
            </p>
          </div>
        </div>

        {/* Service 02 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">02</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Housing & Daily Life</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              We help with practical aspects of daily life, including preparing a home, registering with a GP, opening a bank account and navigating school admissions.
            </p>
          </div>
        </div>

        {/* Service 03 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">03</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">English & Everyday Skills</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              English tuition and practical, real-world skills can help people build confidence, communicate more independently and participate in their communities.
            </p>
          </div>
        </div>

        {/* Service 04: Legal Signposting (Stands out visually for compliance emphasis, spans 2 columns on lg screens) */}
        <div className="bg-[#153732] text-[#F3F0E6] p-8 rounded-xl shadow-sm border-l-4 border-[#C68A2E] flex flex-col justify-between space-y-4 lg:col-span-2">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">04</span>
            <h3 className="font-serif text-xl font-bold text-[#C68A2E]">Signposting to Regulated Advice</h3>
            <p className="text-[#F3F0E6]/90 text-sm sm:text-base leading-relaxed">
              When someone needs advice relating to immigration or asylum law, we refer them to appropriately registered advisers.
            </p>
            <div className="pt-2 border-t border-[#C68A2E]/30 text-xs sm:text-sm text-[#F3F0E6]/80 font-medium italic">
              Wakeels and Wakeels does not provide immigration or asylum advice.
            </div>
          </div>
        </div>

        {/* Service 05 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">05</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Community & Belonging</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              We help create opportunities for friendship, volunteering and shared community experiences, helping neighbours become part of a supportive network.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}