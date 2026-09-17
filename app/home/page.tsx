import Link from "next/link";

export const metadata = {
  title: "Wakeels and Wakeels | Community Sponsorship & Refugee Support, UK",
  description: "Wakeels and Wakeels CIC supports asylum seekers, refugees and displaced people in the UK, and helps communities sponsor refugee families to safety through the UK's official Community Sponsorship scheme.",
};

export default function HomePage() {
  return (
    <div className="bg-paper text-ink min-h-screen flex flex-col font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-pine text-paper py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto grid grid-collayoutlapage  fp s-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Hero Copy */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-paper">
              A door held open.
            </h1>
            <p className="text-lg sm:text-xl font-light leading-relaxed text-paper/90">
              Wakeels and Wakeels is a UK Community Interest Company that stands beside asylum seekers, refugees and displaced people — and helps ordinary communities welcome refugee families to safety through the UK's official Community Sponsorship scheme.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/community-sponsorship"
                className="bg-gold text-pine-deep font-semibold px-6 py-3 rounded shadow-sm hover:opacity-90 transition-opacity"
              >
                See how sponsorship works →
              </Link>
              <Link
                href="/what-we-do"
                className="border border-paper/40 text-paper font-semibold px-6 py-3 rounded hover:bg-paper/10 transition-colors"
              >
                Get support →
              </Link>
            </div>
          </div>

          {/* Hero Graphic Representation */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-64 sm:h-80 bg-pine-deep/30 rounded-lg border border-paper/10 flex flex-col items-center justify-center p-6 text-center shadow-inner">
              {/* Abstract Illustration Direction Box */}
              <svg className="w-16 h-16 text-gold mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold">Visual Direction</p>
              <p className="text-sm text-paper/80 mt-2">
                An open door with a path leading toward a distant home — abstract, warm, and hopeful[cite: 2].
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* THREE-UP STRIP (Stats / Facts) */}
      <section className="bg-pine-deep text-paper py-8 border-t border-b border-pine">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-pine/20 rounded border border-pine/40">
            <span className="block font-serif text-2xl font-bold text-gold">[X]</span>
            <span className="text-sm text-paper/80 uppercase tracking-wider">Families Welcomed</span>
          </div>
          <div className="p-4 bg-pine/20 rounded border border-pine/40">
            <span className="block font-serif text-2xl font-bold text-gold">[X]</span>
            <span className="text-sm text-paper/80 uppercase tracking-wider">Active Sponsor Groups</span>
          </div>
          <div className="p-4 bg-pine/20 rounded border border-pine/40">
            <span className="block font-serif text-2xl font-bold text-gold">Since [Year]</span>
            <span className="text-sm text-paper/80 uppercase tracking-wider">Approved UK Home Office Sponsor</span>
          </div>
        </div>
      </section>

      {/* TWO PATHS SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Path 1: Need Support */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-pine/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-pine-deep">Need support?</h2>
              <p className="text-ink/80 leading-relaxed text-base">
                If you or someone you know is an asylum seeker, refugee or displaced person already in the UK, we can help with settling in, housing, English, and connecting you with the right regulated advice[cite: 2].
              </p>
            </div>
            <div>
              <Link
                href="/what-we-do"
                className="inline-block text-pine font-semibold hover:text-gold transition-colors"
              >
                See what we do →
              </Link>
            </div>
          </div>

          {/* Path 2: Want to Sponsor */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-pine/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-bold text-pine-deep">Want to sponsor a family?</h2>
              <p className="text-ink/80 leading-relaxed text-base">
                Bring your community together and welcome a refugee family through the UK's Community Sponsorship scheme — we'll guide you through every step[cite: 2].
              </p>
            </div>
            <div>
              <Link
                href="/get-involved"
                className="inline-block text-pine font-semibold hover:text-gold transition-colors"
              >
                Start a sponsor group →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* TRUST STRIP (FOOTER OF HOMEPAGE) */}
      <section className="bg-pine-deep/5 border-t border-pine/10 py-8 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-ink/70 leading-relaxed max-w-4xl mx-auto">
            Wakeels and Wakeels CIC is registered in England & Wales (Company No. [XXXXXXXX]) and is an approved UK Home Office Community Sponsorship group. We do not provide immigration advice; for anything relating to immigration status or asylum claims we refer people to advisers registered with the Immigration Advice Authority (IAA/OISC)[cite: 2].
          </p>
        </div>
      </section>

    </div>
  );
}