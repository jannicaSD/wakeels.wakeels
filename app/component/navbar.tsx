"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "What We Do", href: "/what_we_do" },
    { name: "Community Sponsorship", href: "/community-sponsorship" },
    { name: "Family Sponsorship", href: "/family-sponsorship" },
    { name: "Get Involved", href: "/get_involved" },
    { name: "News & Stories", href: "/stories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-[#153732] text-[#F3F0E6] sticky top-0 z-50 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="font-serif text-lg sm:text-xl font-bold tracking-wide hover:text-[#C68A2E] transition-colors"
            >
              WAKEELS & WAKEELS
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-4 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 py-1 border-b-2 ${
                    isActive 
                      ? "border-[#C68A2E] text-[#C68A2E]" 
                      : "border-transparent text-[#F3F0E6]/90 hover:text-[#C68A2E]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Button (Desktop) */}
          <div className="hidden xl:block">
            <Link
              href="/support_us" 
              className="bg-[#C68A2E] text-[#153732] px-4 py-2.5 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-sm"
            >
              Support Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#F3F0E6] hover:text-[#C68A2E] focus:outline-none focus:ring-2 focus:ring-[#C68A2E] p-2 rounded"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-[#153732] border-t border-[#1F4A43] px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive 
                    ? "bg-[#1F4A43] text-[#C68A2E]" 
                    : "text-[#F3F0E6]/90 hover:bg-[#1F4A43] hover:text-[#C68A2E]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/support_us" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center block bg-[#C68A2E] text-[#153732] px-4 py-2.5 rounded font-semibold hover:bg-opacity-90 transition"
            >
              Support Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}