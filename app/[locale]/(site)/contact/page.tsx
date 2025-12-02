'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from './../../../../components/Header';
import Footer from './../../../../components/Footer';

export default function Contact() {
  const wa = '919999999999'; // replace with your number without +
  const contactEmail = 'hello@noonealone.com'; // replace with your contact email

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: string[] = [];
    if (!name.trim()) newErrors.push('Name is required.');
    if (!email.trim()) newErrors.push('Email is required.');
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      newErrors.push('Please enter a valid email address.');
    }
    if (!message.trim()) newErrors.push('Please share a short message.');

    if (newErrors.length) {
      setErrors(newErrors.join(' '));
      return;
    }

    setErrors(null);

    // Simple mailto fallback – opens user email client with prefilled content
    const subject = encodeURIComponent(`Contact from noOneAlone: ${topic || 'General enquiry'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic || 'General'}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="container pb-[30px]" id="contact">
      <Header />

      {/* Intro */}
      <section className="mt-6 rounded-lg bg-gray-50 px-6 py-8 md:px-10">
  <div className="grid gap-8 md:grid-cols-2 items-center">
    {/* Text column */}
    <div className="max-w-xl">
      <h2 className="text-2xl md:text-3xl font-semibold mb-3">
        Reach Out – We’re Here for You
      </h2>
      <p className="text-gray-700 mb-2">
        Whether you&apos;re feeling overwhelmed, lonely, or just need a safe space to talk,
        you can reach us easily through WhatsApp or the form below.
      </p>
      <p className="text-gray-700 mb-4">
        Share as much or as little as you feel comfortable with. A companion will get back to you
        with the next steps and available time slots.
      </p>
    </div>

    {/* Image column */}
    <div className="h-48 md:h-60 rounded-lg overflow-hidden bg-gray-200">
      <img
        src="/images/contact-hero.jpg"
        alt="Person reaching out for a supportive conversation"
        className="h-full w-full object-cover"
      />
    </div>
  </div>
</section>


      {/* WhatsApp CTA */}
      <section className="mt-4 mb-8">
        <p className="text-gray-700 mb-2">
          Prefer WhatsApp? Click below to start a chat and book a session.
        </p>
        <a
          href={`https://wa.me/${wa}`}
          className="inline-flex items-center gap-2 btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          <span>💬</span>
          <span>Chat on WhatsApp</span>
        </a>
      </section>

      {/* Contact form */}
      <section className="mt-4 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3 text-lg">Contact Form</h3>
          <p className="text-sm text-gray-600 mb-4">
            Fill in a few details and we&apos;ll get back to you within 24 hours. Your information
            is kept private and is only used to respond to your enquiry.
          </p>

          {errors && (
            <div className="mb-4 rounded border border-red-300 bg-red-50 px-3 py-2 text-sm text-red-700">
              {errors}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                Topic (optional)
              </label>
              <select
                id="topic"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="">Select a topic</option>
                <option value="new-session">Book a new session</option>
                <option value="regular-checkin">Regular check-in</option>
                <option value="support-question">Question about support</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                How can we help? *
              </label>
              <textarea
                id="message"
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm min-h-[120px] resize-vertical focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share anything you’re comfortable sharing. This helps us understand how best to support you."
              />
            </div>

            <button
              type="submit"
              className="btn-primary inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#5aa2d5]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Side info card */}
        <aside className="bg-gray-50 border rounded-lg p-4 text-sm text-gray-700">
          <h4 className="font-semibold mb-2">What to expect</h4>
          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>A response within 24 hours (usually sooner).</li>
            <li>No pressure to book – you can just ask questions.</li>
            <li>All conversations are confidential and judgment-free.</li>
          </ul>

          <h4 className="font-semibold mb-2">Prefer email directly?</h4>
          <p className="mb-2">
            You can also write to us at:{' '}
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-600 underline underline-offset-2"
            >
              {contactEmail}
            </a>
          </p>

          <p className="text-xs text-gray-500 mt-3">
            If you are in immediate crisis or facing a medical emergency, please contact your local
            emergency number or a professional helpline in your area. noOneAlone is a companionship
            and listening service, not a medical or crisis intervention service.
          </p>
        </aside>
      </section>

      {/* Mock payment section (kept from your original) */}
      <section className="mt-10 max-w-xl">
        <h3 className="font-semibold mb-2">Mock Payment (Razorpay demo)</h3>
        <p className="text-sm text-gray-600 mb-3">
          This is a placeholder. On production, integrate Razorpay or Stripe for secure online
          payments.
        </p>
        <button className="px-4 py-2 border rounded hover:bg-gray-50">
          Proceed to Pay (Mock)
        </button>
      </section>

      <Footer />
    </main>
  );
}
