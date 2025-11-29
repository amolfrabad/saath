import Link from 'next/link';
import Header from './../../../components/Header';
import Footer from './../../../components/Footer'

export default function Home() {
  return (
    <main className="container pb-8">
      {/* Header */}
      <Header />
      {/* Hero banner */}
      <section className="py-12 bg-gray-50 rounded-lg mt-4">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
          {/* Text column */}
          <div className="md:w-1/2 w-full text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              You talk. We truly listen.
            </h1>
            <p className="text-gray-700 mb-6">
              NoOneAlone is your safe space to share, reflect, and get support—no judgments, just understanding.
              Get compassionate, judgment‑free conversations whenever you need
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
                className="px-4 py-2 border border-gray-300 rounded transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 hover:-translate-y-0.5"
              >
                How it works
              </Link>
            </div>
          </div>

          {/* Media / image column */}
          <div className="md:w-1/2 w-full">
            <div className="h-56 md:h-72 bg-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:-rotate-1">
              <img
                alt="joyful-group-laughter-stockcake"
                src="/joyful-group-laughter-stockcake.jpg"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro copy */}
      <section className="text-center pt-12">
        <h2 className="text-3xl font-bold mb-4">
          A safe space to talk, share, and feel heard.
        </h2>
        <p className="text-gray-700 mx-auto mb-8">
          Life gets overwhelming sometimes — and you don’t always need advice, solutions, or therapy.
Sometimes, you just need someone who will listen.

At NoOneAlone, we offer a warm, supportive space where you can talk openly about anything on your mind. Whether you’re feeling stressed, lonely, confused, or just need company, our trained listeners are here for you with empathy and zero judgment.
        </p>
        <div className="session-section max-w-4xl mx-auto mt-12 text-left">

  {/* Section Title */}
  <h2 className="text-2xl font-bold mb-2 text-center">
    Book a One-on-One Session That Fits Your Comfort
  </h2>
  {/* CTA */}
  <div className="text-center mt-8">
    <h2 className="text-xl font-semibold mb-2">You’re Not Alone. Let’s Talk.</h2>
    <p className="text-gray-700 mb-4 text-sm">
      Give yourself the space you deserve — where you are heard, understood, and supported.
    </p>
    <Link
      href="/en/contact"
      className="btn-primary inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#5aa2d5]"
    >
      Book a Session
    </Link>
  </div>
  <p className="text-gray-700 text-center mb-6">
    You can choose how you want to connect:
  </p>

  {/* Table 1: Online vs In-person */}
  <div className="grid md:grid-cols-2 gap-6 mb-10">

    {/* Online */}
    <div className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">💬 Online Sessions</h3>
      <p className="text-gray-700 text-sm leading-relaxed">
        Audio, video, or chat — whatever feels comfortable.
        Open up from your own space, at your own pace.
      </p>
    </div>

    {/* In-person */}
    <div className="p-6 border rounded-lg bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">🤝 In-Person Sessions</h3>
      <p className="text-gray-700 text-sm leading-relaxed">
        Meet a trained listener in safe public places like cafés or parks.
        Comfortable, respectful, and always secure.
      </p>
    </div>

  </div>

  {/* Section Title */}
  <h2 className="text-2xl font-bold mb-4 text-center">What We Offer</h2>

  {/* Offer Grid */}
  <div className="grid md:grid-cols-2 gap-6 mb-10">

    <div className="p-5 border rounded-lg bg-white shadow-sm">
      <strong className="block mb-1">✔ Companionship</strong>
      <p className="text-sm text-gray-700">
        Talk, sit, walk, or simply have someone by your side.
      </p>
    </div>

    <div className="p-5 border rounded-lg bg-white shadow-sm">
      <strong className="block mb-1">✔ Active Listening</strong>
      <p className="text-sm text-gray-700">
        We listen fully, without interrupting or judging.
      </p>
    </div>

    <div className="p-5 border rounded-lg bg-white shadow-sm">
      <strong className="block mb-1">✔ Emotional Support</strong>
      <p className="text-sm text-gray-700">
        We help you express and lighten what you're carrying inside.
      </p>
    </div>

    <div className="p-5 border rounded-lg bg-white shadow-sm">
      <strong className="block mb-1">✔ Non-Medical, Human Connection</strong>
      <p className="text-sm text-gray-700">
        We are trained listeners — not therapists — offering warmth,
        empathy, and confidentiality.
      </p>
    </div>

  </div>

  {/* Who Is This For */}
  <h2 className="text-2xl font-bold text-center mb-4">Who Is This For?</h2>

  <div className="max-w-xl mx-auto mb-10">
    <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
      <li>Feeling lonely or isolated</li>
      <li>Need someone neutral to talk to</li>
      <li>Going through stress or breakup</li>
      <li>Want to share without being judged</li>
      <li>Just need company for an hour</li>
    </ul>

    <p className="text-center italic mt-4 text-gray-700 text-sm">
      “If you’ve ever thought — I wish I had someone to talk to — this space is for you.”
    </p>
  </div>

  {/* How It Works */}
  <h2 className="text-2xl font-bold text-center mb-4">How It Works</h2>

  <ol className="list-decimal pl-6 max-w-xl mx-auto text-gray-700 text-sm space-y-2 mb-10">
    <li>Pick your session type (online or in-person)</li>
    <li>Choose a time that works for you</li>
    <li>Meet a trained listener</li>
    <li>Talk, share, breathe — we’re here for you</li>
  </ol>

  

</div>

        <div className="flex justify-center gap-4">
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

      {/* Services cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <Link
          href="/en/contact"
          className="group block p-6 border rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 hover:border-blue-200"
        >
          <h3 className="font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            Online Calls
          </h3>
          <p className="text-sm text-gray-600">
            Phone &amp; video conversations — private and convenient.
          </p>
        </Link>

        <Link
          href="/en/contact"
          className="group block p-6 border rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 hover:border-blue-200"
        >
          <h3 className="font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            In-Person Meetings
          </h3>
          <p className="text-sm text-gray-600">
            Meet in safe public places: cafés, parks, bookstores.
          </p>
        </Link>

        <Link
          href="/en/contact"
          className="group block p-6 border rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-blue-50 hover:border-blue-200"
        >
          <h3 className="font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            Elderly Companionship
          </h3>
          <p className="text-sm text-gray-600">
            Friendly visits, reading sessions, and gentle companionship.
          </p>
        </Link>
      </section>

      {/* Footer */}
      <Footer />
      {/* <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} noOneAlone
      </footer> */}
    </main>
  );
}
