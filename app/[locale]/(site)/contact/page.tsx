"use client";

import Header from '../../../../components/Header';
import Footer from '../../../../components/Footer';
import ContactForm from '../../../../components/ContactForm';

const contactEmail = 'noonealone@zohomail.in';
const wa = '919999999999';

export default function ContactPage() {
  return (
    <main className="container pb-8">
      <Header />

      <section className="mb-8 mt-12">
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
        <p className="text-gray-600">We're here to help — send a message and we'll respond shortly.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg p-6">
            <ContactForm contactEmail={contactEmail} />
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Other ways to reach us</h2>

            <div>
              <h3 className="text-sm font-medium text-gray-700">Email</h3>
              <a className="text-indigo-600" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700">WhatsApp</h3>
              <a className="text-indigo-600" href={`https://wa.me/${wa}`}>Message us on WhatsApp</a>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700">Hours</h3>
              <p className="text-sm text-gray-600">Mon — Fri, 9:00 — 18:00</p>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
