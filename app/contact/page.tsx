"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-[#F3F0E6] text-[#221F1B] min-h-screen flex flex-col font-sans">
      
      {/* PAGE HEADER */}
      <section className="bg-[#1F4A43] text-[#F3F0E6] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#F3F0E6]">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl font-light text-[#F3F0E6]/90 max-w-2xl">
            Get in touch with Wakeels and Wakeels CIC for support, sponsorship enquiries, volunteering, or partnerships.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT 2 COLS: CONTACT FORM */}
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-[#1F4A43]/10 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153732]">Send us a message</h2>
              <p className="text-sm text-[#221F1B]/70">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully!"); }} className="space-y-5">
              
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-[#153732]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded border border-[#1F4A43]/20 bg-[#F3F0E6]/30 text-[#221F1B] focus:outline-none focus:ring-2 focus:ring-[#C68A2E]"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-[#153732]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded border border-[#1F4A43]/20 bg-[#F3F0E6]/30 text-[#221F1B] focus:outline-none focus:ring-2 focus:ring-[#C68A2E]"
                />
              </div>

              {/* Reason For Contact Dropdown */}
              <div className="space-y-2">
                <label htmlFor="reason" className="block text-sm font-semibold text-[#153732]">
                  Reason for Contact
                </label>
                <select
                  id="reason"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded border border-[#1F4A43]/20 bg-[#F3F0E6]/30 text-[#221F1B] focus:outline-none focus:ring-2 focus:ring-[#C68A2E]"
                >
                  <option value="" disabled>Select an option...</option>
                  <option value="Support">Support</option>
                  <option value="Sponsorship">Sponsorship</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Donation">Donation</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Media">Media</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-semibold text-[#153732]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded border border-[#1F4A43]/20 bg-[#F3F0E6]/30 text-[#221F1B] focus:outline-none focus:ring-2 focus:ring-[#C68A2E]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1F4A43] text-[#F3F0E6] font-semibold py-3.5 px-6 rounded shadow-sm hover:bg-[#153732] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT 1 COL: OFFICE DETAILS & QUICK INFO */}
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-[#1F4A43]/10 space-y-6">
              <h3 className="font-serif text-xl font-bold text-[#153732]">Get in touch directly</h3>
              <div className="space-y-4 text-sm text-[#221F1B]/80">
                <div>
                  <p className="font-semibold text-[#1F4A43]">Registered Office</p>
                  <p className="mt-1">[Insert Registered Office Address]</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1F4A43]">Email</p>
                  <p className="mt-1">contact@wakeelsandwakeels.co.uk</p>
                </div>
                <div>
                  <p className="font-semibold text-[#1F4A43]">Phone</p>
                  <p className="mt-1">[Insert Phone Number]</p>
                </div>
              </div>
            </div>

            <div className="bg-[#153732] text-[#F3F0E6] p-6 rounded-lg shadow-sm space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#C68A2E]">Working Hours</h4>
              <p className="text-sm text-[#F3F0E6]/90 leading-relaxed">
                Monday – Friday: 9:00 AM – 5:00 PM<br />
                Closed on weekends and UK bank holidays.
              </p>
            </div>
          </div>

        </div>

        {/* VISIBLE LEGAL STATEMENT NOTICE */}
        <section className="bg-[#153732] text-[#F3F0E6] p-8 rounded-lg shadow-sm space-y-4 border-l-4 border-[#C68A2E]">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#C68A2E]">
            Important Notice Regarding Legal Advice
          </h3>
          <p className="text-[#F3F0E6]/90 leading-relaxed text-sm sm:text-base">
            We cannot give immigration advice. If you are contacting us regarding your own personal immigration or asylum case, please consult an authorised professional. You can find a list of OISC/IAA-registered advisers via the official government portal.
          </p>
          <div className="pt-1">
            <a
              href="https://www.gov.uk/find-an-immigration-adviser"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C68A2E] text-[#153732] font-semibold px-5 py-2.5 rounded text-sm hover:opacity-90 transition-opacity shadow-sm"
            >
              Find a regulated OISC/IAA adviser on GOV.UK &rarr;
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}