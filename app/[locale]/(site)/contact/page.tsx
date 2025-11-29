import Link from 'next/link';
import Header from './../../../../components/Header';
import Footer from './../../../../components/Footer'

export default function Contact(){
  const wa = "919999999999" // replace with your number without +
  return (
    <main className="container pb-[30px]" id="contact">
      <Header />
      <h2 className="text-2xl font-semibold mb-4">Reach Out – We’re Here for You</h2>
      <p className="text-gray-700 mb-4">Prefer WhatsApp? Click below to start a chat and book a session.</p>
      <a href={`https://wa.me/${wa}`} className="inline-block btn-primary">Chat on WhatsApp</a>

      <section className="mt-8">
        <h3 className="font-semibold mb-2">Mock Payment (Razorpay demo)</h3>
        <p className="text-sm text-gray-600 mb-3">This is a placeholder. On production, integrate Razorpay or Stripe for payments.</p>
        <button className="px-4 py-2 border rounded">Proceed to Pay (Mock)</button>
      </section>
      <Footer />
    </main>
  )
}
