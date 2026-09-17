import Link from "next/link";

export const metadata = {
  title: "Family Sponsorship Programme | Named Community Sponsorship | Wakeels and Wakeels",
  description: "How Wakeels and Wakeels' Family Sponsorship Programme uses the UK's Named Community Sponsorship route to help recognised refugee families reach safety.",
};

export default function FamilySponsorshipPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* PAGE HEADER */}
      <section className="bg-[#1F4A43] text-[#F3F0E6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6]">
            Family Sponsorship Programme
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl">
            Utilising the UK's Named Community Sponsorship route to help recognised refugee families reach safety with absolute transparency and care[cite: 2].
          </p>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex-grow w-full">

        {/* OVERVIEW INTRODUCTION */}
        <section className="bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-[#1F4A43]/10 space-y-6 text-[#221F1B]/80 leading-relaxed text-base sm:text-lg">
          <p>
            In November 2025, the Home Office announced new safe and legal routes for refugees, including Named Community Sponsorship — allowing approved groups like ours to identify specific individuals and families to support into resettlement, rather than only accepting a match assigned to us[cite: 2]. This is the basis of our Family Sponsorship Programme[cite: 2].
          </p>
        </section>

        {/* WHAT THIS ROUTE DOES AND DOES NOT MEAN */}
        <section className="bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-[#1F4A43]/10 space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
              What this route does — and does not — mean
            </h2>
            <p className="text-sm text-[#221F1B]/70">
              We believe in total clarity so that no one's hopes are raised inaccurately[cite: 2].
            </p>
          </div>

          <ul className="space-y-4 pt-2 text-[#221F1B]/80 text-base leading-relaxed">
            <li className="flex items-start space-x-3">
              <span className="text-[#C68A2E] font-bold text-lg leading-none mt-1">•</span>
              <span><strong>Eligible individuals</strong> must already hold, or be formally assessed and recognised as holding, refugee status through international protection processes[cite: 2].</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#C68A2E] font-bold text-lg leading-none mt-1">•</span>
              <span><strong>People cannot apply to this scheme themselves</strong> — an approved sponsor group applies on a named individual or family's behalf[cite: 2].</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#C68A2E] font-bold text-lg leading-none mt-1">•</span>
              <span><strong>Those already going through the UK's domestic asylum process</strong> are not eligible through this particular route[cite: 2].</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#C68A2E] font-bold text-lg leading-none mt-1">•</span>
              <span><strong>This is not a "scholarship"</strong> in the academic sense, and it does not offer a general route into the UK for anyone, anywhere[cite: 2].</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#C68A2E] font-bold text-lg leading-none mt-1">•</span>
              <span><strong>Full details</strong> — including which nationalities and regions will initially be included — are still being confirmed by the Home Office[cite: 2]. We update this page as soon as it becomes clear[cite: 2].</span>
            </li>
          </ul>
        </section>

        {/* CLOSING / CONVERSATION SECTION */}
        <section className="bg-[#153732] text-[#F3F0E6] p-8 sm:p-10 rounded-lg shadow-sm space-y-6 border-l-4 border-[#C68A2E]">
          <h3 className="font-serif text-2xl font-bold text-[#C68A2E]">
            Let's have an honest conversation
          </h3>
          <p className="text-[#F3F0E6]/90 leading-relaxed text-sm sm:text-base">
            If you know a family who may already hold recognised refugee status and could benefit from this route, or if your community wants to explore sponsoring a named family, we'd welcome a conversation — we'll always tell you plainly what is and isn't possible before anyone's hopes are raised[cite: 2].
          </p>
          <div className="pt-2">
            <Link
              href="/contact?reason=Sponsorship"
              className="inline-block bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3 rounded text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              Enquire about the programme &rarr;
            </Link>
          </div>
        </section>

      </main>

    </div>
  );
}