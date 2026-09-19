export default function HowSponsorshipWorksGetInvolved() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Step-by-Step Guide
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
          How Sponsorship Works
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg">
          From forming your community group to welcoming your matched family, we guide you through every stage of the journey.
        </p>
      </div>

      {/* 4-Step Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        
        {/* Step 1 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">01</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Form or Join a Group</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              Gather people from your community, workplace or congregation and register your interest.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">02</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Apply for Approval</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              We guide your group through the Home Office application, safeguarding checks and local authority sign-off.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">03</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Be Matched</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              Your group is matched with — or, under Named Sponsorship, identifies — a family already recognised for resettlement.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">04</span>
            <h3 className="font-serif text-xl font-bold text-[#153732]">Welcome & Support</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed">
              Together, you welcome the family and provide housing and integration support.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}