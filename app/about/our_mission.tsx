export default function OurMissionSection() {
  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#1F4A43]/10">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-block bg-[#1F4A43]/10 text-[#1F4A43] text-xs font-semibold px-3 py-1 rounded uppercase tracking-wider">
            Founders' Vision
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#153732]">
            Our Mission
          </h2>
        </div>

        {/* Founders' Words Container */}
        <div className="bg-[#F3F0E6] p-8 sm:p-12 rounded-2xl border-l-4 border-[#C68A2E] space-y-6 shadow-sm">
          
          <p className="text-xs uppercase tracking-wider font-bold text-[#C68A2E]">
            In the Founders' Own Words
          </p>

          {/* 
            Instructions: Replace the bracketed placeholder text below with your 
            2-3 sentences covering:
            1. Why Wakeels and Wakeels was established
            2. What problem the organisation wants to address
            3. What change it hopes to create
          */}
          <blockquote className="font-serif text-xl sm:text-2xl font-normal text-[#153732] leading-relaxed">
            &ldquo;[Insert your founders' statement here explaining why Wakeels and Wakeels was established, the challenges displaced people face that you aim to address, and the vision of safety and community belonging you hope to create.]&rdquo;
          </blockquote>

          <div className="pt-2 text-sm text-[#221F1B]/70 font-sans font-medium">
            — The Founders, Wakeels and Wakeels CIC
          </div>

        </div>

      </div>
    </section>
  );
}