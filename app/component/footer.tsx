import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#153732] text-[#F3F0E6] border-t border-[#C68A2E]/20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Top Grid: Organisation Details & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#F3F0E6]/10">
          
          {/* Left Column: Organisation Info & Compliance (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Logo / Brand Name */}
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-bold text-[#F3F0E6] tracking-tight">
                Wakeels and Wakeels CIC
              </h2>
              <p className="text-xs font-medium text-[#C68A2E] uppercase tracking-wider">
                Registered in England & Wales • Company No. [XXXXXXXX]
              </p>
            </div>

            {/* Status & Safeguarding */}
            <div className="space-y-3 text-sm text-[#F3F0E6]/90 font-light leading-relaxed">
              <p className="font-medium text-[#F3F0E6]">
                Approved UK Home Office Community Sponsorship Group
              </p>
              <p>
                We operate safeguarding procedures for work involving children and vulnerable adults.
              </p>
            </div>

            {/* Legal Notice Box */}
            <div className="bg-[#1F4A43]/50 p-5 rounded-xl border-l-4 border-[#C68A2E] space-y-2">
              <span className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Legal Disclaimer</span>
              <p className="text-xs text-[#F3F0E6]/90 leading-relaxed font-light">
                <strong className="font-semibold text-[#F3F0E6]">Important:</strong> We are not authorised to provide immigration or asylum advice. For immigration or asylum matters, please seek advice from an appropriately registered adviser.
              </p>
            </div>

          </div>

          {/* Right Column: Navigation Links (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            
            {/* Quick Links Column 1 */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-[#C68A2E] uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-2.5 text-sm font-light">
                <li>
                  <Link href="/" className="hover:text-[#C68A2E] transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#C68A2E] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/what-we-do" className="hover:text-[#C68A2E] transition-colors">What We Do</Link>
                </li>
                <li>
                  <Link href="/community-sponsorship" className="hover:text-[#C68A2E] transition-colors">Community Sponsorship</Link>
                </li>
                <li>
                  <Link href="/family-sponsorship" className="hover:text-[#C68A2E] transition-colors">Family Sponsorship</Link>
                </li>
                <li>
                  <Link href="/get-involved" className="hover:text-[#C68A2E] transition-colors">Get Involved</Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Column 2 */}
            <div className="space-y-4 pt-0 lg:pt-6">
              <ul className="space-y-2.5 text-sm font-light">
                <li>
                  <Link href="/stories" className="hover:text-[#C68A2E] transition-colors">News & Stories</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#C68A2E] transition-colors">Contact</Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#C68A2E] transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/safeguarding" className="hover:text-[#C68A2E] transition-colors">Safeguarding</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#C68A2E] transition-colors">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F3F0E6]/60 font-light gap-4">
          <p>&copy; {new Date().getFullYear()} Wakeels and Wakeels CIC. All rights reserved.</p>
          <p>Designed for community welcome and resettlement support.</p>
        </div>

      </div>
    </footer>
  );
}