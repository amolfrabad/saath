'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 border-b border-gray-200">
      {/* Top row: logo left + centered text + nav/hamburger right */}
      <div className="flex items-center justify-between">
        {/* Logo (left) */}
        <div className="flex items-center  max-w-[100px] sm:max-w-[160px] md:max-w-[200px]">
          <Link href="/en">
            <img
              src="/logo-1.jpeg"
              alt="logo"
              className="w-full h-auto hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        {/* Center text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
          <div
            className="text-base sm:text-lg md:text-xl font-semibold leading-snug text-brand-orange"
            aria-label="noOneAlone"
          >
            noOneAlone
          </div>

          <p className="text-xl font-semibold mb-2 text-brand-blue">
            you talk, we listen
          </p>
        </div>

        {/* Right side: desktop nav + mobile hamburger */}
        <div className="flex items-center">
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <Link
              href="/en/about"
              className="header-link transition-all duration-200 hover:text-gray-900 hover:underline"
            >
              About
            </Link>
            <Link
              href="/en/services"
              className="header-link transition-all duration-200 hover:text-gray-900 hover:underline"
            >
              Services
            </Link>
            <Link
              href="/en/contact"
              className="header-link btn-primary inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#5aa2d5]"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden inline-flex flex-col items-center justify-center gap-[3px] p-2 ml-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-5 h-[2px] bg-gray-700 rounded" />
            <span className="block w-5 h-[2px] bg-gray-700 rounded" />
            <span className="block w-5 h-[2px] bg-gray-700 rounded" />
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav className="mt-3 flex flex-col gap-2 md:hidden">
          <Link
            href="/en/about"
            className="header-link block px-1 py-1 rounded hover:bg-gray-50"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/en/services"
            className="header-link block px-1 py-1 rounded hover:bg-gray-50"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/en/contact"
            className="header-link btn-primary inline-flex items-center justify-center mt-1"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
