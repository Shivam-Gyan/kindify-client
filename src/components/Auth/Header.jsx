// components/Header.tsx
import React from "react";

const Header = () => {
  return (
    // Outer wrapper to center the pill and give vertical breathing room
    <div className="w-full bg-gray-100 py-6">
      {/* Pill-shaped nav container */}
      <div className="mx-auto max-w-4xl bg-white rounded-full shadow-lg px-6 py-2 flex items-center justify-between space-x-6">
        
        {/* left side: logo placeholder */}
        <div className="flex-shrink-0">
          {/* swap this with your <img> or logo component */}
          <span className="text-xl font-bold text-blue-600">Kindify</span>
        </div>

        {/* center: nav links */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
        </nav>

        {/* right side: actions */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-600 transition">Sign in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition shadow-sm">
            Book a demo
          </button>
        </div>

        {/* mobile menu button */}
        <button className="md:hidden flex-shrink-0 text-gray-600 hover:text-blue-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
