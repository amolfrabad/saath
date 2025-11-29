'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <Link href="/en">
          <img
            src="/logo-1.png"
            alt="logo"
            className="w-24 hover:scale-105 transition-transform duration-200"
          />
        </Link>
      </div>
      <nav className="flex items-center gap-3">
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
    </header>
  );
}
