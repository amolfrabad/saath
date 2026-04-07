'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar({ locale }: { locale?: string }) {
  const router = useRouter();
  const currentLocale = locale || 'en';
  const base = `/${currentLocale}/(site)`;

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.push(`/${nextLocale}/(site)`);
  };

  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        {/* Logo + brand */}
        <Link href={base} className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-semibold">noOneAlone</span>
        </Link>

        {/* Main nav + locale switcher */}
        <nav className="flex items-center gap-4">
          <Link href={`${base}/about`}>About</Link>
          <Link href={`${base}/services`}>Services</Link>
          <Link href={`${base}/contact`} className="btn-primary">
            Contact
          </Link>

          {/* Locale selector */}
          <select
            aria-label="Select language"
            className="ml-2 border border-gray-300 rounded px-2 py-1 text-sm bg-white"
            value={currentLocale}
            onChange={handleLocaleChange}
          >
            <option value="en">EN</option>
            <option value="hi">HI</option>
            <option value="mr">MR</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
