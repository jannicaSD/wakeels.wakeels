export default function SupportTrustAndSafeguardingSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Governance & Compliance
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
          Supporting People Responsibly
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg font-light">
          We maintain rigorous standards of safety, regulatory compliance, and ethical boundaries across all our support activities.
        </p>
      </div>

      {/* Grid Layout for Trust & Legal Notices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Card 1: Trust & Safeguarding */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Safeguarding</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Trust & Safety</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
              Wakeels and Wakeels CIC is an approved UK Home Office Community Sponsorship group.
            </p>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light pt-2 border-t border-[#1F4A43]/10">
              The organisation operates safeguarding procedures for work involving children and vulnerable adults.
            </p>
          </div>
        </div>

        {/* Card 2: Immigration & Asylum Advice Boundary */}
        <div className="bg-[#153732] text-[#F3F0E6] p-8 rounded-xl shadow-sm border-l-4 border-[#C68A2E] flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Legal Compliance</span>
            <h3 className="font-serif text-xl font-bold text-[#C68A2E]">Immigration & Asylum Advice</h3>
            <p className="text-[#F3F0E6]/90 text-sm leading-relaxed font-light">
              Wakeels and Wakeels does not provide immigration or asylum advice.
            </p>
            <p className="text-[#F3F0E6]/80 text-sm leading-relaxed font-light pt-2 border-t border-[#C68A2E]/30">
              Where someone needs advice concerning immigration status, asylum claims or visas, they should be referred to appropriately registered advisers.
            </p>
          </div>
          <div className="pt-2">
            <a
              href="https://www.gov.uk/find-an-immigration-adviser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-semibold text-[#C68A2E] hover:underline"
            >
              Find an official UK government immigration adviser &rarr;
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}