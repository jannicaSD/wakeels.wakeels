import Link from "next/link";

export const metadata = {
  title: "Wakeels and Wakeels | Community Sponsorship & Refugee Support, UK",
  description: "Wakeels and Wakeels CIC supports asylum seekers, refugees and displaced people in the UK, and helps communities sponsor refugee families to safety through the UK's official Community Sponsorship scheme.",
};

export default function HomePage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8 text-center sm:text-left">
          
          {/* Tagline / Subheading Accent */}
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Community Interest Company · England & Wales
          </div>

          {/* Main Hero Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            A door held open.
          </h1>

          {/* Hero Description */}
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl leading-relaxed">
            Wakeels and Wakeels is a UK Community Interest Company that stands beside asylum seekers, refugees and displaced people — and helps ordinary communities welcome refugee families to safety through the UK&apos;s official Community Sponsorship scheme.
          </p>

          {/* Call to Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <Link
              href="/community-sponsorship"
              className="w-full sm:w-auto bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3.5 rounded shadow-sm hover:opacity-90 transition-all text-center"
            >
              See how sponsorship works &rarr;
            </Link>
            <Link
              href="/what-we-do"
              className="w-full sm:w-auto bg-[#1F4A43] text-[#F3F0E6] font-semibold px-6 py-3.5 rounded shadow-sm hover:bg-[#153732] border border-[#C68A2E]/30 transition-all text-center"
            >
              Get support &rarr;
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}