import Link from "next/link";

export const metadata = {
  title: "News & Stories | Resettlement & Community Updates | Wakeels and Wakeels",
  description: "Stories of welcome, community and connection. Follow the work of Wakeels and Wakeels as communities come together to support families building new lives in the UK.",
};

export default function StoriesPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* HERO SECTION */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
          
          {/* Accent Tag */}
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            News & Updates
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            Stories of welcome, community and connection.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl leading-relaxed">
            Follow the work of Wakeels and Wakeels as communities come together to welcome displaced people and support families building new lives in the UK.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-[#C68A2E] text-[#153732] font-semibold px-6 py-3.5 rounded shadow-sm hover:opacity-90 transition-all text-center"
            >
              Get in Touch &rarr;
            </Link>
            <Link
              href="/get-involved"
              className="w-full sm:w-auto bg-[#1F4A43] text-[#F3F0E6] font-semibold px-6 py-3.5 rounded shadow-sm hover:bg-[#153732] border border-[#C68A2E]/30 transition-all text-center"
            >
              Get Involved &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* STORIES CONTAINER (Placeholder Structure for Future Articles) */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full space-y-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#1F4A43]/10 text-center space-y-4">
          <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Coming Soon</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
            Stories & Updates Are on Their Way
          </h2>
          <p className="text-[#221F1B]/80 text-base leading-relaxed font-light max-w-xl mx-auto">
            We are currently building this section. Real stories, community news, and project updates will be published here as soon as they are supplied.
          </p>
        </div>
      </main>

    </div>
  );
}