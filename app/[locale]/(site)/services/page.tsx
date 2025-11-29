import Link from 'next/link';
import Header from './../../../../components/Header';
import Footer from './../../../../components/Footer'

export default function Services(){
  return (
    <main className="container pb-[30px]">
      <Header />
      <h2 className="text-2xl font-semibold mb-4">How We Can Help You</h2>
      <ul className="list-disc pl-5 text-gray-700">
        <li>Online phone & video conversations (₹199/hr)</li>
        <li>In-person public meetups (₹349/hr)</li>
        <li>Elderly companionship (₹499/hr)</li>
        <li>Subscription plans & premium companions</li>
      </ul>
      <Footer />
    </main>
  )
}
