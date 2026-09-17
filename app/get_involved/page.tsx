import Link from "next/link";

export const metadata = {
  title: "Get Involved | Wakeels and Wakeels",
  description: "Find out how you can support our mission through volunteering, joining a local sponsor group, or making a donation.",
};

export default function GetInvolvedPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      <section className="bg-[#1F4A43] text-[#F3F0E6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-block bg-[#C68A2E] text-[#153732] text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
            Take Action
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6]">
            Get Involved
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl">
            Whether through your time, community network, or financial support, you can help build safe futures.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex-grow w-full">
        <section className="bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-[#1F4A43]/10 space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#153732]">Ways You Can Support</h2>
          <div className="space-y-4 text-[#221F1B]/80 text-base leading-relaxed">
            <p>
              <strong>1. Form or Join a Sponsor Circle:</strong> Gather friends, family, or colleagues to form a community sponsorship group capable of welcoming a refugee family.
            </p>
            <p>
              <strong>2. Volunteer Your Skills:</strong> Offer professional expertise, translation capabilities, logistical coordination, or mentoring assistance.
            </p>
            <p>
              <strong>3. Corporate & Community Partnerships:</strong> Local businesses and institutions can partner with us to source housing resources or sponsor campaigns.
            </p>
          </div>
        </section>

        <section className="text-center bg-[#153732] text-[#F3F0E6] p-10 rounded-lg shadow-sm space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#C68A2E]">Ready to take the next step?</h2>
          <p className="text-[#F3F0E6]/90 max-w-lg mx-auto text-sm">
            Reach out to our coordination team today to discuss how your group can get started.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3 rounded text-sm hover:opacity-90 transition shadow-sm"
          >
            Contact Our Team &rarr;
          </Link>
        </section>
      </main>
    </div>
  );
}