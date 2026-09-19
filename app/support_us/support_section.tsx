import Link from "next/link";

export default function HowYouCanSupportSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
          Ways to Contribute
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
          How You Can Support
        </h2>
        <p className="text-[#221F1B]/80 text-base sm:text-lg font-light">
          Explore the different ways you can stand alongside refugees and displaced people, from financial contributions to community sponsorship and volunteering.
        </p>
      </div>

      {/* CORE 5 SUPPORT PATHWAYS (2-Column Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* 01 — Donate */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">01 — Donate</span>
            <h3 className="font-serif text-2xl font-bold text-[#153732]">Help Provide Practical Support</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
              Your contribution can help support the practical needs involved in welcoming and supporting sponsored families. Donations can contribute towards:
            </p>
            <ul className="space-y-2 text-sm text-[#221F1B]/80 list-disc list-inside font-light">
              <li>Housing set-up costs</li>
              <li>Essential items</li>
              <li>Integration support</li>
              <li>Practical needs of sponsored families</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-[#1F4A43]/10">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#C68A2E] text-[#153732] font-semibold px-5 py-2.5 rounded text-sm hover:opacity-90 transition shadow-sm"
            >
              Donate Now &rarr;
            </Link>
          </div>
        </div>

        {/* 02 — Start or Join a Sponsor Group */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">02 — Sponsor Group</span>
            <h3 className="font-serif text-2xl font-bold text-[#153732]">Welcome a Refugee Family</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
              Bring people together in your local community, workplace, faith group or congregation. Wakeels and Wakeels can guide your group through the stages involved in becoming a sponsor group, including the Home Office approval process.
            </p>
            
            {/* 4-Step Journey List */}
            <div className="space-y-2 pt-2 text-xs text-[#221F1B]/90 font-light bg-[#F3F0E6]/50 p-4 rounded-lg border border-[#1F4A43]/10">
              <span className="font-semibold text-[#153732] block uppercase tracking-wider pb-1">The Journey:</span>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong className="text-[#153732]">Form or Join:</strong> Bring together your community or workplace.</li>
                <li><strong className="text-[#153732]">Apply for Approval:</strong> Complete Home Office & local authority requirements.</li>
                <li><strong className="text-[#153732]">Be Matched:</strong> Connect with a family recognised for resettlement.</li>
                <li><strong className="text-[#153732]">Welcome & Support:</strong> Provide housing and integration support.</li>
              </ol>
            </div>
          </div>

          <div className="pt-4 border-t border-[#1F4A43]/10">
            <Link
              href="/community-sponsorship"
              className="inline-flex items-center text-sm font-semibold text-[#1F4A43] hover:text-[#153732] group"
            >
              Start a Sponsor Group 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* 03 — Volunteer */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">03 — Volunteer</span>
            <h3 className="font-serif text-2xl font-bold text-[#153732]">Give Your Time and Skills</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
              You don&apos;t have to lead a sponsorship group to make a difference. There are different ways to contribute your time and skills, including:
            </p>
            <ul className="space-y-2 text-sm text-[#221F1B]/80 list-disc list-inside font-light">
              <li>Teaching English</li>
              <li>Offering professional skills</li>
              <li>Helping with practical tasks</li>
              <li>Supporting community activities</li>
              <li>Giving time to a family finding their feet</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-[#1F4A43]/10">
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-[#1F4A43] hover:text-[#153732] group"
            >
              Volunteer With Us 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* 04 — Partner With Us */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">04 — Partnerships</span>
            <h3 className="font-serif text-2xl font-bold text-[#153732]">Build Something Together</h3>
            <p className="text-[#221F1B]/80 text-sm leading-relaxed font-light">
              We welcome organisations and communities that want to develop meaningful, long-term partnerships rather than one-off gestures. We work with:
            </p>
            <ul className="space-y-2 text-sm text-[#221F1B]/80 list-disc list-inside font-light">
              <li>Faith groups and businesses</li>
              <li>Universities and local authorities</li>
              <li>Community organisations</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-[#1F4A43]/10">
            <Link
              href="/contact"
              className="inline-flex items-center text-sm font-semibold text-[#1F4A43] hover:text-[#153732] group"
            >
              Let&apos;s Work Together 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>

      {/* 05 — Support Through Community (Full Width Accent Box) */}
      <div className="bg-[#153732] text-[#F3F0E6] p-8 sm:p-12 rounded-2xl shadow-sm border-l-4 border-[#C68A2E] space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">05 — Community Impact</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3F0E6]">
            A Welcome Takes a Community
          </h3>
          <p className="text-[#F3F0E6]/90 text-sm sm:text-base leading-relaxed font-light max-w-3xl">
            Supporting a refugee family is not only about one individual contribution. Community Sponsorship brings people together to provide practical help, housing, integration support and a genuine sense of belonging.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#C68A2E]/30">
          <div className="space-y-1">
            <h4 className="font-semibold text-[#C68A2E] text-sm uppercase tracking-wider">Giving</h4>
            <p className="text-xs text-[#F3F0E6]/80 font-light">Help with practical needs.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-[#C68A2E] text-sm uppercase tracking-wider">Volunteering</h4>
            <p className="text-xs text-[#F3F0E6]/80 font-light">Share your time and skills.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-[#C68A2E] text-sm uppercase tracking-wider">Sponsoring</h4>
            <p className="text-xs text-[#F3F0E6]/80 font-light">Bring your community together to welcome a family.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-[#C68A2E] text-sm uppercase tracking-wider">Partnering</h4>
            <p className="text-xs text-[#F3F0E6]/80 font-light">Build a longer-term relationship with Wakeels and Wakeels.</p>
          </div>
        </div>
      </div>

      {/* FAMILY SPONSORSHIP FEATURE CARD */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#1F4A43]/10 space-y-6">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Specialised Route
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
            Family Sponsorship: Support a Named Family
          </h3>
          <p className="text-[#221F1B]/80 text-base leading-relaxed font-light">
            Wakeels and Wakeels also has a Family Sponsorship Programme based on Named Community Sponsorship. This route is specifically for recognised refugees within the applicable government framework. People cannot simply apply themselves, and the route is not a general immigration route or a route for people currently going through the UK&apos;s domestic asylum process.
          </p>
        </div>

        <div className="pt-4 border-t border-[#1F4A43]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm font-medium text-[#153732]">
            If your community wants to explore sponsoring a named family:
          </p>
          <Link
            href="/family-sponsorship"
            className="inline-flex items-center justify-center bg-[#153732] text-[#F3F0E6] font-semibold px-6 py-3 rounded text-sm hover:bg-[#1F4A43] transition shadow-sm"
          >
            Enquire About Family Sponsorship &rarr;
          </Link>
        </div>
      </div>

    </section>
  );
}