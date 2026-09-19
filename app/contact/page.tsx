import Link from "next/link";

export const metadata = {
  title: "Contact Us | Get in Touch | Wakeels and Wakeels",
  description: "Get in touch with Wakeels and Wakeels CIC for support, community sponsorship inquiries, volunteering, donations, or partnerships.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#153732] text-[#F3F0E6] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
          
          <div className="inline-block bg-[#C68A2E]/10 text-[#C68A2E] border border-[#C68A2E]/30 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Get in Touch
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#F3F0E6] leading-tight">
            We&apos;d be glad to hear from you.
          </h1>

          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-3xl leading-relaxed">
            Whether you are looking for support, exploring Community Sponsorship, interested in volunteering, considering a donation or looking for a partnership, our team is here to help.
          </p>

        </div>
      </section>

      {/* 2. MAIN CONTENT AREA (Form & Details Grid) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form (Span 7) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-[#1F4A43]/10 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">
                Send Us a Message
              </h2>
              <p className="text-[#221F1B]/80 text-sm font-light">
                Please fill out the form below and we will respond as soon as possible. Fields marked required must be completed.
              </p>
            </div>

            <form className="space-y-5">
              
              {/* Name Field */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-bold text-[#153732] uppercase tracking-wider">
                  Name <span className="text-[#C68A2E]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-lg border border-[#1F4A43]/20 bg-[#F3F0E6]/30 text-[#221F1B] focus:outline-none focus:ring-2 focus:ring-[#153732] text-sm"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-bold text-[#153732] uppercase tracking-wider">
                  Email <span className="text-[#C68A2E]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-[#1F4A43]/20 bg-[#F3F0E6]/30 text-[#221F1B] focus:outline-none focus:ring-2 focus:ring-[#153732] text-sm"
                />
              </div>

              {/* Reason for Contact Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="reason" className="block text-xs font-bold text-[#153732] uppercase tracking-wider">
                  Reason for Contact <span className="text-[#C68A2E]">*</span>
                </label>
                <select
                  id="reason"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-lg border border-[#1F4A43]/20 bg-[#F3F0E6]/30 text-[#221F1B] focus:outline-none focus:ring-2 focus:ring-[#153732] text-sm"
                >
                  <option value="" disabled>Select an enquiry category...</option>
                  <option value="support">Support</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="donation">Donation</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-bold text-[#153732] uppercase tracking-wider">
                  Message <span className="text-[#C68A2E]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-[#1F4A43]/20 bg-[#F3F0E6]/30 text-[#221F1B] focus:outline-none focus:ring-2 focus:ring-[#153732] text-sm resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#153732] text-[#F3F0E6] font-semibold py-3.5 px-6 rounded-lg shadow-sm hover:bg-[#1F4A43] transition-all text-sm tracking-wide"
              >
                Send Message &rarr;
              </button>

            </form>
          </div>

          {/* Right Column: Contact Details & Legal Advice Notice (Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#1F4A43]/10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Direct Reach</span>
                <h3 className="font-serif text-2xl font-bold text-[#153732]">
                  Contact Details
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#221F1B]/90 font-light">
                <div className="border-b border-[#1F4A43]/10 pb-3">
                  <span className="block font-semibold text-[#153732] text-xs uppercase tracking-wider">Registered Office</span>
                  <p className="mt-1 text-[#221F1B]/70 italic">[CLIENT TO PROVIDE]</p>
                </div>

                <div className="border-b border-[#1F4A43]/10 pb-3">
                  <span className="block font-semibold text-[#153732] text-xs uppercase tracking-wider">Phone</span>
                  <p className="mt-1 text-[#221F1B]/70 italic">[CLIENT TO PROVIDE]</p>
                </div>

                <div className="border-b border-[#1F4A43]/10 pb-3">
                  <span className="block font-semibold text-[#153732] text-xs uppercase tracking-wider">Email</span>
                  <p className="mt-1 text-[#221F1B]/70 italic">[CLIENT TO PROVIDE]</p>
                </div>

                <div>
                  <span className="block font-semibold text-[#153732] text-xs uppercase tracking-wider">Website</span>
                  <p className="mt-1 text-[#221F1B]/70 italic">[CLIENT TO CONFIRM]</p>
                </div>
              </div>
            </div>

            {/* Legal Notice & Adviser Finder Card */}
            <div className="bg-[#153732] text-[#F3F0E6] p-8 rounded-2xl shadow-sm border-l-4 border-[#C68A2E] space-y-4">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Important Legal Notice</span>
              <h3 className="font-serif text-xl font-bold text-[#C68A2E]">
                Immigration & Asylum Advice
              </h3>
              <p className="text-[#F3F0E6]/90 text-sm leading-relaxed font-light">
                Wakeels and Wakeels does not provide immigration or asylum advice.
              </p>
              <p className="text-[#F3F0E6]/80 text-sm leading-relaxed font-light">
                If your enquiry concerns your own immigration status, asylum claim or visa, we will direct you towards appropriately registered advisers.
              </p>
              
              <div className="pt-2">
                <a
                  href="https://www.gov.uk/find-an-immigration-adviser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-[#C68A2E] hover:underline"
                >
                  Find an official UK government immigration adviser &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}