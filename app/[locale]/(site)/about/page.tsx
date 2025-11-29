import Link from 'next/link';
import Header from '../../../../components/Header';
import Footer from './../../../../components/Footer'

export default function About(){
  return (
    <main className="container pb-[30px]">
      <Header />
      <h2 className="text-2xl font-semibold mb-4">Our Mission: You’re Never Alone</h2>
      <p className="text-gray-700">noOneAlone is a safe, non-judgmental companionship service for people who feel lonely or need someone to talk to. Our companions are trained listeners, verified, and follow strict safety guidelines.</p>
      <Footer />
    </main>
  )
}
