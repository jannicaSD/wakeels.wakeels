export default function Footer() {
  return (
    <footer className="bg-[#153732] text-[#F3F0E6] border-t border-[#1F4A43] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6 text-sm text-[#F3F0E6]/90">
        
        {/* Main Trust & Registration Statement */}
        <div className="space-y-2">
          <p className="font-serif font-bold text-[#C68A2E] text-base">
            WAKEELS & WAKEELS CIC
          </p>
          <p className="leading-relaxed max-w-3xl">
            Wakeels and Wakeels CIC is registered in England & Wales (Company No. [XXXXXXXX]) and is an approved UK Home Office Community Sponsorship group[cite: 5, 6]. We operate a full safeguarding policy for all work involving children and vulnerable adults[cite: 5, 6].
          </p>
        </div>

        {/* Legal Advice Disclaimer */}
        <div className="border-t border-[#1F4A43] pt-4 text-xs text-[#F3F0E6]/75 max-w-3xl">
          <p>
            <strong>Important Notice:</strong> We are not authorised to give immigration or asylum advice. For anything relating to someone's immigration status, asylum claim, or visa, we refer to advisers registered with the Immigration Advice Authority (IAA/OISC)[cite: 5, 6].
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1F4A43] pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-[#F3F0E6]/60">
          <p>&copy; {new Date().getFullYear()} Wakeels and Wakeels CIC. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Community Interest Company · England & Wales[cite: 5]</p>
        </div>

      </div>
    </footer>
  );
}