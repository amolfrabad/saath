import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Header from './../../../components/Header';
import Footer from './../../../components/Footer';
import HeroBanner from './../../../components/ui/HeroBanner';
import FeatureCard from './../../../components/ui/FeatureCard';
import ServiceCard from './../../../components/ui/ServiceCard';
import CTASection from './../../../components/ui/CTASection';
import InfoGrid from './../../../components/ui/InfoGrid';
import OfferCard from './../../../components/ui/OfferCard';
import { locales } from './../../../i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Home page
 * - Hero banner introducing the service
 * - Explanation of what NoOneAlone offers
 * - Session types (online / in‑person)
 * - Offer details, target audience, and simple “how it works”
 * - Call‑to‑action buttons and service cards
 */
export default async function Home() {
  const t = await getTranslations('home');

  return (
    <main className="container pb-8">
      {/* ===========================
          Global Header
      ============================ */}
      <Header />

      <HeroBanner
        title={t('hero.title')}
        description={t('hero.description')}
        imageSrc="/images/joyful-group-laughter-stockcake.jpg"
        buttons={[
          { text: t('hero.bookSession'), href: "/en/contact" },
          { text: t('hero.howItWorks'), href: "/en/services", className: "px-4 py-2 border border-white/70 text-white rounded transition-all duration-200 hover:bg-white/10 hover:border-white hover:-translate-y-0.5" }
        ]}
      />

      {/* ===========================
          Intro + Session Types
      ============================ */}
      <section className="text-center pt-12">
        {/* Intro heading & paragraph */}
        <h2 className="text-3xl font-bold mb-4">
          {t('intro.title')}
        </h2>
        <p className="text-gray-700 mx-auto mb-8 max-w-3xl">
          {t('intro.description')}
        </p>

        {/* Session options block */}
        <div className="session-section mx-auto mt-12 text-left">
          {/* Section title */}
          <h2 className="text-2xl font-bold mb-2 text-center">
            {t('session.title')}
          </h2>

          {/* Center CTA */}
          <div className="text-center mt-8">
            <h3 className="text-xl font-semibold mb-2">{t('session.cta')}</h3>
            <p className="text-gray-700 mb-4 text-sm max-w-xl mx-auto">
              {t('session.ctaDescription')}
            </p>
            <Link
              href="/en/contact"
              className="btn-primary inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#5aa2d5]"
            >
              {t('session.bookSession')}
            </Link>
          </div>

          {/* Connection options intro */}
          <p className="text-gray-700 text-center mb-6 mt-6">
            {t('session.connectionIntro')}
          </p>

          {/* Online vs In-person cards WITH thumbnails */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <FeatureCard
              title={t('session.online.title')}
              description={t('session.online.description')}
              imageSrc="/images/online-session.jpg"
              emoji="💬"
            />
            <FeatureCard
              title={t('session.inPerson.title')}
              description={t('session.inPerson.description')}
              imageSrc="/images/in-person-session.jpg"
              emoji="🤝"
            />
          </div>


          {/* ===========================
    What We Offer (with thumbnails)
============================ */}
          <h2 className="text-2xl font-bold mb-4 text-center">{t('offers.title')}</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <OfferCard
              title={t('offers.companionship.title')}
              description={t('offers.companionship.description')}
              imageSrc="/images/offer-companionship.jpg"
            />
            <OfferCard
              title={t('offers.listening.title')}
              description={t('offers.listening.description')}
              imageSrc="/images/offer-active-listening.jpg"
            />
            <OfferCard
              title={t('offers.support.title')}
              description={t('offers.support.description')}
              imageSrc="/images/offer-emotional-support.jpg"
            />
            <OfferCard
              title={t('offers.connection.title')}
              description={t('offers.connection.description')}
              imageSrc="/images/offer-human-connection.jpg"
            />
          </div>


          {/* ===========================
              Who Is This For? + How It Works (side by side with images)
          ============================ */}
          <InfoGrid
            items={[
              {
                title: t('whoFor.title'),
                content: (
                  <>
                    <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
                      {t.raw('whoFor.list').map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <p className="italic mt-4 text-gray-700 text-sm text-center md:text-left">
                      {t('whoFor.quote')}
                    </p>
                  </>
                ),
                imageSrc: "/images/who-is-this-for.jpg"
              },
              {
                title: t('howItWorks.title'),
                content: (
                  <ol className="list-decimal pl-6 text-gray-700 text-sm space-y-2">
                    {t.raw('howItWorks.list').map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ol>
                ),
                imageSrc: "/images/how-it-works.jpg"
              }
            ]}
          />
        </div>

        {/* Mid-page CTA buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <Link
            href="/en/contact"
            className="btn-primary inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:bg-[#5aa2d5]"
          >
            {t('midCta.startConversation')}
          </Link>
          <Link
            href="/en/services"
            className="px-4 py-2 border border-gray-300 rounded transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 hover:-translate-y-0.5"
          >
            {t('midCta.seeServices')}
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
        <ServiceCard
          title={t('services.online.title')}
          description={t('services.online.description')}
          imageSrc="/images/service-online.jpg"
          href="/en/contact"
        />
        <ServiceCard
          title={t('services.inPerson.title')}
          description={t('services.inPerson.description')}
          imageSrc="/images/service-inperson.jpg"
          href="/en/contact"
        />
        <ServiceCard
          title={t('services.elderly.title')}
          description={t('services.elderly.description')}
          imageSrc="/images/service-elderly.jpg"
          href="/en/contact"
        />
      </section>

      {/* ===========================
          Global Footer
      ============================ */}
      <Footer />
    </main>
  );
}
