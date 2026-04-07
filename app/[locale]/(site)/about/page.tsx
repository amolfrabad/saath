import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import Header from '../../../../components/Header';
import Footer from './../../../../components/Footer';
import HeroSection from '../../../../components/ui/HeroSection';
import InfoGrid from '../../../../components/ui/InfoGrid';
import CTASection from '../../../../components/ui/CTASection';

export default async function AboutPage() {
  const t = await getTranslations('about');

  return (
    <main className="container pb-8">
      <Header />

      <HeroSection
        title={t('hero.title')}
        description={t('hero.description')}
        imageSrc="/images/about-hero.jpg"
        buttons={[
          { text: t('hero.talkToCompanion'), href: "/en/contact" },
          { text: t('hero.viewServices'), href: "/en/services", className: "px-4 py-2 border border-gray-300 rounded transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 hover:-translate-y-0.5" }
        ]}
      />

      {/* Who we are / What we do */}
      <section className="mt-10 grid gap-8 md:grid-cols-2">
        {/* Who we are */}
        <div className="bg-white rounded-lg border shadow-sm p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Who we are</h2>
          <p className="text-gray-700 text-sm">
            noOneAlone exists for one simple reason: no human being should have to carry their
            thoughts, worries, or silence alone.
          </p>
          <p className="text-gray-700 text-sm">
            The platform connects people who want to be heard with companions who show up with
            empathy, patience, and genuine human warmth.
          </p>
          <div className="mt-3 h-32 w-full overflow-hidden rounded-md bg-gray-100">
            <img
              src="/images/about-who-we-are.jpg"
              alt="Warm conversation between people"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* What we do */}
        <div className="bg-white rounded-lg border shadow-sm p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">What we do</h2>
          <p className="text-gray-700 text-sm">
            noOneAlone offers one-to-one conversations over chat, voice, or video, depending on what
            feels most comfortable.
          </p>
          <p className="text-gray-700 text-sm">
            Whether someone needs a casual talk after a long day, a regular check-in during a tough
            phase, or just friendly company, our companions are there to listen and engage without
            judgment.
          </p>
          <div className="mt-3 h-32 w-full overflow-hidden rounded-md bg-gray-100">
            <img
              src="/images/about-what-we-do.jpg"
              alt="Chat, voice, and video conversation modes"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How companions help / Safety */}
      <section className="mt-10 grid gap-8 md:grid-cols-2">
        {/* How our companions help */}
        <div className="bg-white rounded-lg border shadow-sm p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">How our companions help</h2>
          <p className="text-gray-700 text-sm">
            Our companions are trained in active listening, emotional sensitivity, and healthy
            boundaries so users can speak freely and feel supported.
          </p>
          <p className="text-gray-700 text-sm">
            They can talk about everyday life, hobbies, memories, goals, or worries, helping users
            feel less isolated and more connected.
          </p>
          <div className="mt-3 h-32 w-full overflow-hidden rounded-md bg-gray-100">
            <img
              src="/images/about-companions-help.jpg"
              alt="Supportive and attentive companion"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Safety, trust, and privacy */}
        <div className="bg-white rounded-lg border shadow-sm p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Safety, trust, and privacy</h2>
          <p className="text-gray-700 text-sm">
            Every companion goes through identity verification and screening to ensure they are
            reliable, respectful, and aligned with our values.
          </p>
          <p className="text-gray-700 text-sm">
            Conversations are confidential, and users remain in control at all times, with clear
            options to pause, end, or change companions whenever they wish.
          </p>
          <div className="mt-3 h-32 w-full overflow-hidden rounded-md bg-gray-100">
            <img
              src="/images/about-safety.jpg"
              alt="Secure and private connection"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who it's for / Our vision */}
      <section className="mt-10 grid gap-8 md:grid-cols-2">
        {/* Who noOneAlone is for */}
        <div className="bg-white rounded-lg border shadow-sm p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Who noOneAlone is for</h2>
          <p className="text-gray-700 text-sm">
            noOneAlone is for anyone who feels lonely, overwhelmed, or simply wants to share their
            day with someone who genuinely listens.
          </p>
          <p className="text-gray-700 text-sm">
            Students, working professionals, parents, seniors, or people going through life
            transitions can all use the service to feel heard, seen, and emotionally supported.
          </p>
          <div className="mt-3 h-32 w-full overflow-hidden rounded-md bg-gray-100">
            <img
              src="/images/about-who-for.jpg"
              alt="Diverse people feeling supported"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Our vision */}
        <div className="bg-white rounded-lg border shadow-sm p-6 flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Our vision</h2>
          <p className="text-gray-700 text-sm">
            noOneAlone envisions a world where reaching out for companionship is seen as strength,
            not weakness.
          </p>
          <p className="text-gray-700 text-sm">
            By making kind, judgment-free conversations accessible, we aim to reduce the weight of
            loneliness and help people rediscover the comfort of human connection, one conversation
            at a time.
          </p>
          <div className="mt-3 h-32 w-full overflow-hidden rounded-md bg-gray-100">
            <img
              src="/images/about-vision.jpg"
              alt="Hopeful view representing connection and future"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection
        title={t('cta.title')}
        description={t('cta.description')}
        buttons={[
          { text: t('cta.startConversation'), href: "/en/contact" },
          { text: t('cta.exploreServices'), href: "/en/services", className: "px-4 py-2 border border-gray-300 rounded transition-all duration-200 hover:bg-gray-100 hover:border-gray-400 hover:-translate-y-0.5" }
        ]}
      />

      <Footer />
    </main>
  );
}

