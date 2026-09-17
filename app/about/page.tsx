import Link from "next/link";

export const metadata = {
  title: "About Us | Wakeels and Wakeels CIC",
  description: "Learn about Wakeels and Wakeels CIC, our mission, our approved Home Office Community Sponsorship status, and our commitment to supporting refugees.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* PAGE HEADER */}
      <section className="bg-[#1F4A43] text-[#F3F0E6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-block bg-[#C68A2E] text-[#153732] text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
            About Our Organisation
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6]">
            About Us
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl">
            Building structured, community-led pathways to safety, housing, and integration for displaced families.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex-grow w-full">

        {/* MISSION & VISION */}
        <section className="bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-[#1F4A43]/10 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
            Our Mission & Background
          </h2>
          <div className="space-y-4 text-[#221F1B]/80 leading-relaxed text-base sm:text-lg">
            <p>
              Wakeels and Wakeels CIC is dedicated to championing safe, legal, and compassionate routes for refugees and displaced individuals seeking sanctuary in the UK. 
            </p>
            <p>
              Operating as an approved UK Home Office Community Sponsorship group, we bridge the gap between compassionate local volunteers, community groups, and official resettlement frameworks. We guide ordinary citizens through every regulatory requirement, ensuring sustainable housing and hands-on integration support.
            </p>
          </div>
        </section>

        {/* GOVERNANCE & SAFEGUARDING */}
        <section className="bg-[#153732] text-[#F3F0E6] p-8 sm:p-10 rounded-lg shadow-sm space-y-6 border-l-4 border-[#C68A2E]">
          <h3 className="font-serif text-2xl font-bold text-[#C68A2E]">
            Trust, Governance & Safeguarding
          </h3>
          <p className="text-[#F3F0E6]/90 leading-relaxed text-base">
            We operate a full, rigorous safeguarding policy for all work involving children and vulnerable adults. Every initiative we undertake complies strictly with Home Office guidelines and local authority standards. 
          </p>
          <p className="text-[#F3F0E6]/90 text-sm italic">
            Note: Wakeels and Wakeels CIC is not authorised to give personal immigration or asylum advice. For individual cases, we direct people to regulated OISC/IAA advisers.
          </p>
        </section>

        {/* CALL TO ACTION */}
        <section className="text-center bg-white p-10 rounded-lg shadow-sm border border-[#1F4A43]/10 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#153732]">
            Want to learn more or collaborate?
          </h3>
          <p className="text-[#221F1B]/80 max-w-lg mx-auto text-base">
            Whether you want to start a sponsor group or partner with us as an institution, we are here to talk.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/community-sponsorship"
              className="bg-[#1F4A43] text-[#F3F0E6] font-semibold px-6 py-3 rounded text-sm hover:bg-[#153732] transition shadow-sm"
            >
              Explore Sponsorship
            </Link>
            <Link
              href="/contact"
              className="bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3 rounded text-sm hover:opacity-90 transition shadow-sm"
            >
              Contact Us &rarr;
            </Link>
          </div>
        </section>

      </main>

    </div>
  );
}