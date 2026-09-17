export const metadata = {
  title: "News & Stories | Wakeels and Wakeels",
  description: "Read updates, success stories, and news from our community sponsorship and resettlement projects.",
};

export default function StoriesPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      <section className="bg-[#1F4A43] text-[#F3F0E6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-block bg-[#C68A2E] text-[#153732] text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
            Updates & Insights
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6]">
            News & Stories
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl">
            Real stories of transformation, community dedication, and milestones achieved together.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 flex-grow w-full">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-[#1F4A43]/10 space-y-3">
          <span className="text-xs font-semibold text-[#C68A2E] uppercase tracking-wider">Announcement</span>
          <h2 className="font-serif text-2xl font-bold text-[#153732]">Expanding Our Community Network</h2>
          <p className="text-sm text-[#221F1B]/60">Published recently</p>
          <p className="text-[#221F1B]/80 text-base leading-relaxed pt-2">
            We are continuously onboarding new volunteer circles and expanding support frameworks to help communities prepare safe environments for incoming families. Stay tuned for upcoming workshops and informational sessions.
          </p>
        </div>
      </main>
    </div>
  );
}