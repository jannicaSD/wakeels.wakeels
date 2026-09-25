export default function SponsorCommitmentSection() {
  const commitments = [
    {
      step: "01",
      title: "Welcome on Arrival",
      description: "Welcome the family on arrival and help them settle into their first days in the UK.",
    },
    {
      step: "02",
      title: "Housing Support",
      description: "Arrange and prepare suitable housing for at least two years to ensure stability.",
    },
    {
      step: "03",
      title: "Integration Support",
      description: "Provide around a year of hands-on integration support navigating local services.",
    },
    {
      step: "04",
      title: "English Language",
      description: "Help with English language learning and accessing accredited ESOL education.",
    },
    {
      step: "05",
      title: "School Places",
      description: "Support school applications and secure educational placements for children.",
    },
    {
      step: "06",
      title: "Practical Matters",
      description: "Help with everyday practical matters like registering with a GP and opening bank accounts.",
    },
    {
      step: "07",
      title: "Building Independence",
      description: "Support the family as they find their feet and build long-term community connections.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Our Responsibility
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#153732]">
          A Genuine Community Commitment
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg font-light leading-relaxed">
          Sponsor groups undertake a vital hands-on role to ensure families are fully supported from day one.
        </p>
      </div>

      {/* Commitments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {commitments.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-8 rounded-2xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4 transition-transform hover:-translate-y-1 duration-300 ${
              index === 6 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">
                Commitment — {item.step}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">
                {item.title}
              </h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}