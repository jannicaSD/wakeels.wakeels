export const metadata = {
  title: "About Us | Wakeels and Wakeels",
  description: "Learn about Wakeels and Wakeels CIC, our mission, and the meaning behind our name as we stand alongside displaced people and the communities who welcome them.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* ABOUT HERO SECTION */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
          
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Who We Are
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            Standing alongside displaced people and the communities who welcome them.
          </h1>

          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl leading-relaxed">
            Wakeels and Wakeels exists to provide a trusted voice, practical guidance, and enduring support through every step of resettlement.
          </p>

        </div>
      </section>

      {/* OUR NAME / MEANING SECTION */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex-grow w-full">
        
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#1F4A43]/10 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Our Heritage</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#153732]">
              What does &ldquo;Wakeel&rdquo; mean?
            </h2>
          </div>

          <div className="space-y-6 text-[#221F1B]/80 text-base sm:text-lg leading-relaxed font-light">
            <p className="font-medium text-[#153732]">
              &ldquo;Wakeel&rdquo; means an advocate — a trusted representative who acts on someone&apos;s behalf.
            </p>
            <p>
              The word is rooted in Arabic, Urdu and Persian legal tradition. It reflects the role Wakeels and Wakeels aims to play: being someone in a person&apos;s corner and working on their behalf.
            </p>
          </div>

        </div>

      </main>
    </div>
  );
}