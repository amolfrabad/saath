
'use client'
import Link from 'next/link'
export default function Navbar({locale}:{locale?:string}){
  const base = `/${locale||'en'}/(site)`
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link href={`${base}`} className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="w-10 h-10 rounded-full" />
          <span className="text-xl font-semibold">noOneAlone</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href={`${base}/about`}>About</Link>
          <Link href={`${base}/services`}>Services</Link>
          <Link href={`${base}/contact`} className="btn-primary">Contact</Link>
          <div className="flex gap-2">
            <Link href="/en/(site)">EN</Link>
            <Link href="/hi/(site)">HI</Link>
            <Link href="/mr/(site)">MR</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
