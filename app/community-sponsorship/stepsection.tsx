export default function WakeelsStatusStepsSection() {
  const steps = [
    {
      number: "01",
      title: "Form or join a group",
      description: "Gather five or more people from your community, workplace, or congregation and register your interest with us.",
    },
    {
      number: "02",
      title: "Apply for approval",
      description: "We guide your group through the Home Office application, safeguarding checks and local authority sign-off.",
    },
    {
      number: "03",
      title: "Be matched",
      description: "Your group is matched with — or, under Named Sponsorship, identifies — a family already recognised for resettlement.",
    },
    {
      number: "04",
      title: "Welcome & support",
      description: "Together, you welcome the family and provide around two years of housing and integration support.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Official Status Banner */}
      <div className="bg-[#153732] text-[#F3F0E6] rounded-3xl p-8 sm:p-12 shadow-sm border border-[#C68A2E]/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <span className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Approved Status
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F0E6]">
            Approved UK Home Office Community Sponsorship Group
          </h2>
          <p className="text-[#F3F0E6]/80 text-base font-light leading-relaxed">
            Wakeels and Wakeels CIC is an approved UK Home Office Community Sponsorship group.
          </p>
        </div>
        <div className="w-full md:w-auto shrink-0">
          <div className="bg-[#1F4A43] border border-[#C68A2E]/40 text-[#C68A2E] px-6 py-4 rounded-2xl text-center font-serif font-bold text-sm tracking-wider uppercase shadow-inner">
            Verified Partner
          </div>
        </div>
      </div>

      {/* 4 Steps Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          The Process
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#153732]">
          Four Steps to Sponsorship
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg font-light leading-relaxed">
          From forming your initial group to welcoming a family home, we guide you through every stage of the journey.
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6 transition-transform hover:-translate-y-1 duration-300"
          >
            <div className="space-y-4">
              <span className="font-serif text-3xl font-bold text-[#C68A2E]">
                {step.number}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">
                {step.title}
              </h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}