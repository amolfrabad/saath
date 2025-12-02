import Link from 'next/link';
import Header from './../../../components/Header';
import Footer from './../../../components/Footer';

/**
 * Home page
 * - Hero banner introducing the service
 * - Explanation of what NoOneAlone offers
 * - Session types (online / in‑person)
 * - Offer details, target audience, and simple “how it works”
 * - Call‑to‑action buttons and service cards
 */
export default function Home() {
  return (
    <main className="container pb-8">
      {/* ===========================
          Global Header
      ============================ */}
      <Header />

      {/* ===========================
    Hero Banner (full-width image with overlay text)
============================ */}
<section className="relative mt-4 rounded-lg overflow-hidden bg-gray-900">
  {/* Background image fills container */}
  <div className="absolute inset-0">
    <img
      alt="group of people laughing together"
      src="/images/joyful-group-laughter-stockcake.jpg"
      className="h-full w-full object-cover"
    />
    {/* Optional dark gradient for readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
  </div>

  {/* Content overlay */}
  <div className="relative z-10 px-6 py-16 md:px-12 md:py-20">
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        You talk. We truly listen.
      </h1>
      <p className="text-gray-100 mb-6">
        NoOneAlone is your safe space to share, reflect, and get support—no judgments, just
        understanding. Get compassionate, judgment‑free conversations whenever you need
        someone by your side.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link
          href="/en/contact"
          className="btn-primary inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#5aa2d5]"
        >
          Book a Session
        </Link>
        <Link
          href="/en/services"
          className="px-4 py-2 border border-white/70 text-white rounded transition-all duration-200 hover:bg-white/10 hover:border-white hover:-translate-y-0.5"
        >
          How it works
        </Link>
      </div>
    </div>
  </div>
</section>

      {/* ===========================
          Intro + Session Types
      ============================ */}
      <section className="text-center pt-12">
        {/* Intro heading & paragraph */}
        <h2 className="text-3xl font-bold mb-4">
          A safe space to talk, share, and feel heard.
        </h2>
        <p className="text-gray-700 mx-auto mb-8 max-w-3xl">
          Life gets overwhelming sometimes — and you don’t always need advice, solutions, or
          therapy. Sometimes, you just need someone who will listen. At NoOneAlone, we offer a
          warm, supportive space where you can talk openly about anything on your mind. Whether
          you’re feeling stressed, lonely, confused, or just need company, our trained listeners
          are here for you with empathy and zero judgment.
        </p>

        {/* Session options block */}
        <div className="session-section max-w-4xl mx-auto mt-12 text-left">
          {/* Section title */}
          <h2 className="text-2xl font-bold mb-2 text-center">
            Book a One-on-One Session That Fits Your Comfort
          </h2>

          {/* Center CTA */}
          <div className="text-center mt-8">
            <h3 className="text-xl font-semibold mb-2">You’re Not Alone. Let’s Talk.</h3>
            <p className="text-gray-700 mb-4 text-sm max-w-xl mx-auto">
              Give yourself the space you deserve — where you are heard, understood, and supported.
            </p>
            <Link
              href="/en/contact"
              className="btn-primary inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#5aa2d5]"
            >
              Book a Session
            </Link>
          </div>

          {/* Connection options intro */}
          <p className="text-gray-700 text-center mb-6 mt-6">
            You can choose how you want to connect:
          </p>

          {/* Online vs In-person cards WITH thumbnails */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Online sessions card */}
            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="h-32 w-full overflow-hidden bg-gray-100">
                <img
                  src="/images/online-session.jpg"
                  alt="Online listening session"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span>💬</span>
                  <span>Online Sessions</span>
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Audio, video, or chat — whatever feels comfortable. Open up from your own space,
                  at your own pace.
                </p>
              </div>
            </div>

            {/* In-person sessions card */}
            <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="h-32 w-full overflow-hidden bg-gray-100">
                <img
                  src="/images/in-person-session.jpg"
                  alt="In-person listening session"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span>🤝</span>
                  <span>In-Person Sessions</span>
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Meet a trained listener in safe public places like cafés or parks. Comfortable,
                  respectful, and always secure.
                </p>
              </div>
            </div>
          </div>

          
         {/* ===========================
    What We Offer (with thumbnails)
============================ */}
<h2 className="text-2xl font-bold mb-4 text-center">What We Offer</h2>

<div className="grid md:grid-cols-2 gap-6 mb-10">
  {/* Companionship */}
  <div className="flex items-center justify-between gap-4 p-5 border rounded-lg bg-white shadow-sm">
    <div>
      <strong className="block mb-1">✔ Companionship</strong>
      <p className="text-sm text-gray-700">
        Talk, sit, walk, or simply have someone by your side.
      </p>
    </div>
    <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
      <img
        src="/images/offer-companionship.jpg"
        alt="Two people walking together"
        className="h-full w-full object-cover"
      />
    </div>
  </div>

  {/* Active Listening */}
  <div className="flex items-center justify-between gap-4 p-5 border rounded-lg bg-white shadow-sm">
    <div>
      <strong className="block mb-1">✔ Active Listening</strong>
      <p className="text-sm text-gray-700">
        We listen fully, without interrupting or judging.
      </p>
    </div>
    <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
      <img
        src="/images/offer-active-listening.jpg"
        alt="Person listening attentively"
        className="h-full w-full object-cover"
      />
    </div>
  </div>

  {/* Emotional Support */}
  <div className="flex items-center justify-between gap-4 p-5 border rounded-lg bg-white shadow-sm">
    <div>
      <strong className="block mb-1">✔ Emotional Support</strong>
      <p className="text-sm text-gray-700">
        We help you express and lighten what you're carrying inside.
      </p>
    </div>
    <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
      <img
        src="/images/offer-emotional-support.jpg"
        alt="Person being comforted"
        className="h-full w-full object-cover"
      />
    </div>
  </div>

  {/* Non-medical Connection */}
  <div className="flex items-center justify-between gap-4 p-5 border rounded-lg bg-white shadow-sm">
    <div>
      <strong className="block mb-1">✔ Non-Medical, Human Connection</strong>
      <p className="text-sm text-gray-700">
        We are trained listeners — not therapists — offering warmth, empathy, and confidentiality.
      </p>
    </div>
    <div className="h-16 w-20 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
      <img
        src="/images/offer-human-connection.jpg"
        alt="Supportive group connection"
        className="h-full w-full object-cover"
      />
    </div>
  </div>
</div>


          {/* ===========================
              Who Is This For? + How It Works (side by side with images)
          ============================ */}
          <div className="max-w-4xl mx-auto mb-10 grid gap-10 md:grid-cols-2 text-left">
            {/* Who Is This For? */}
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="h-32 w-full overflow-hidden bg-gray-100">
                <img
                  src="/images/who-is-this-for.jpg"
                  alt="Person talking with a listener"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                  Who Is This For?
                </h2>
                <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
                  <li>Feeling lonely or isolated</li>
                  <li>Need someone neutral to talk to</li>
                  <li>Going through stress or breakup</li>
                  <li>Want to share without being judged</li>
                  <li>Just need company for an hour</li>
                </ul>
                <p className="italic mt-4 text-gray-700 text-sm text-center md:text-left">
                  “If you’ve ever thought — I wish I had someone to talk to — this space is for you.”
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="h-32 w-full overflow-hidden bg-gray-100">
                <img
                  src="/images/how-it-works.jpg"
                  alt="Steps of a conversation flow"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                  How It Works
                </h2>
                <ol className="list-decimal pl-6 text-gray-700 text-sm space-y-2">
                  <li>Pick your session type (online or in-person).</li>
                  <li>Choose a time that works for you.</li>
                  <li>Meet a trained listener.</li>
                  <li>Talk, share, breathe — we’re here for you.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Mid-page CTA buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="/en/contact"
            className="btn-primary inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#5aa2d5]"
          >
            Start a Conversation (WhatsApp)
          </Link>
          <Link
            href="/en/services"
            className="px-4 py-2 border border-gray-300 rounded transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 hover:-translate-y-0.5"
          >
            See Services
          </Link>
        </div>
      </section>

      {/* ===========================
          Services Cards WITH thumbnails
      ============================ */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        {/* Online calls card */}
        <Link
          href="/en/contact"
          className="group block overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 hover:border-blue-200"
        >
          <div className="h-32 w-full overflow-hidden bg-gray-100">
            <img
              src="/images/service-online.jpg"
              alt="Online call support"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              Online Calls
            </h3>
            <p className="text-sm text-gray-600">
              Phone &amp; video conversations — private and convenient.
            </p>
          </div>
        </Link>

        {/* In-person meetings card */}
        <Link
          href="/en/contact"
          className="group block overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 hover:border-blue-200"
        >
          <div className="h-32 w-full overflow-hidden bg-gray-100">
            <img
              src="/images/service-inperson.jpg"
              alt="In-person meeting support"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              In-Person Meetings
            </h3>
            <p className="text-sm text-gray-600">
              Meet in safe public places: cafés, parks, bookstores.
            </p>
          </div>
        </Link>

        {/* Elderly companionship card */}
        <Link
          href="/en/contact"
          className="group block overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 hover:border-blue-200"
        >
          <div className="h-32 w-full overflow-hidden bg-gray-100">
            <img
              src="/images/service-elderly.jpg"
              alt="Elderly companionship support"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              Elderly Companionship
            </h3>
            <p className="text-sm text-gray-600">
              Friendly visits, reading sessions, and gentle companionship.
            </p>
          </div>
        </Link>
      </section>

      {/* ===========================
          Global Footer
      ============================ */}
      <Footer />
    </main>
  );
}
