import Link from "next/link";

export default function NewsAndStoriesSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      
      {/* FEATURED STORY SECTION */}
      <div className="space-y-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Featured Story
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#153732]">
            Highlighting Community Impact
          </h2>
        </div>

        {/* Featured Story Placeholder Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#1F4A43]/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Image Placeholder Area */}
          <div className="lg:col-span-5 bg-[#1F4A43]/10 min-h-[280px] flex items-center justify-center p-8 text-center border-b lg:border-b-0 lg:border-r border-[#1F4A43]/10">
            <span className="text-sm font-medium text-[#1F4A43] italic">
              [Featured Image Placeholder]
            </span>
          </div>

          {/* Story Details Area */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-xs font-semibold text-[#C68A2E] uppercase tracking-wider">
                <span>[Category]</span>
                <span>•</span>
                <span>[Date]</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
                [Client Story Title Required]
              </h3>
              <p className="text-[#221F1B]/80 text-base leading-relaxed font-light">
                [Client Story Required]: Short introduction and summary of the featured article highlighting community welcome, resettlement milestones, or family connection.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1F4A43]/10 flex items-center justify-between">
              <span className="text-xs text-[#221F1B]/60 italic">Author / Related Programme</span>
              <span className="inline-flex items-center text-sm font-semibold text-[#1F4A43] opacity-60 cursor-not-allowed">
                Read Full Story &rarr;
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* NEWS & UPDATES CATEGORIES */}
      <div className="space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Updates & Archives
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#153732]">
            News Categories
          </h2>
          <p className="text-[#221F1B]/80 text-base">
            Explore future updates categorized by community activity, personal stories, and organizational announcements.
          </p>
        </div>

        {/* 3-Column Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Community Sponsorship */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Updates</span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">Community Sponsorship</h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                Updates about sponsorship groups and community activity across the UK network.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1F4A43]/10">
              <span className="text-xs font-semibold text-[#1F4A43]/60">Updates incoming</span>
            </div>
          </div>

          {/* Card 2: Community Stories */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Experiences</span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">Community Stories</h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                Stories from volunteers, communities and families, shared with appropriate consent.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1F4A43]/10">
              <span className="text-xs font-semibold text-[#1F4A43]/60">Updates incoming</span>
            </div>
          </div>

          {/* Card 3: Wakeels & Wakeels Updates */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-[#1F4A43]/10 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Organisation</span>
              <h3 className="font-serif text-xl font-bold text-[#153732]">Wakeels & Wakeels Updates</h3>
              <p className="text-[#221F1B]/80 text-sm leading-relaxed">
                Organisation announcements, policy notices, and official programme updates.
              </p>
            </div>
            <div className="pt-4 border-t border-[#1F4A43]/10">
              <span className="text-xs font-semibold text-[#1F4A43]/60">Updates incoming</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}