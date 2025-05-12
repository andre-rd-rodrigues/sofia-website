import Animated from '@/components/Animated';
import Button from '@/components/Button';
import * as Calendar from '@/components/Calendar';
import Contacts from '@/components/Contacts';
import Faqs from '@/components/Faqs';
import HeroSection from '@/components/HeroSection/HeroSection';
import ImageCard from '@/components/ImageCard/ImageCard';
import Section from '@/components/Section';
import Testimonials from '@/components/Testimonials/Testimonials';
import useTranslation from '@/hooks/useTranslation';
import { Link } from '@/navigation';
import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { Locale } from '../../../locale.types';
import { getMetadata } from '../../../metadata/metadata.utils';

export type MetadataProps = {
  params: { locale: Locale };
};

export async function generateMetadata({
  params: { locale },
}: MetadataProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return getMetadata({
    title: t('homeTitle'),
    description: t('description'),
  });
}

export default function Home() {
  const t = useTranslations('pages');
  const { getTranslationsArray } = useTranslation();

  const treatmentSteps = getTranslationsArray(
    'pages.homepage.treatments.steps',
  ).map((step, index) => ({
    ...step,
    imageSrc: index === 0 
      ? '/img/treatment_step.png'
      : '/img/treatment_step_2.png',
    imageAlt: step.title
  }));

  return (
    <main>
      <HeroSection
        imageSrc="https://images.squarespace-cdn.com/content/v1/64ad8b4cb2f8735d2ed972ed/b73cdd39-e04c-44b1-b2e3-e8af43f1dec4/kaboompics_travertine-coffee-table-and-greige-linen-couch-28884.jpg?format=1000w"
        style={{
          height: '700px',
          textAlign: 'center',
        }}
      >
        <Animated type="slide">
          <div className="relative mx-auto h-28 w-full">
            <Image
              src="/img/logo.png"
              alt="Sofia Diogo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Animated>

        <Animated type="slide-in-right" delay={200}>
          <h1 className="my-8 text-5xl text-white">Dr.ª Sofia Diogo</h1>
        </Animated>

        <Animated type="slide-in-left" delay={200}>
          <h2 className="mb-6 font-proxima-nova text-sm uppercase tracking-widest text-white">
            {t('homepage.subtitle')}
          </h2>
        </Animated>
      </HeroSection>

      {/* About me */}
      <Section
        id="about"
        sectionClassName="flex flex-wrap lg:flex-nowrap gap-10"
      >
        <div className="w-full lg:w-1/2">
          <div className="m-auto overflow-hidden rounded-lg shadow-2xl">
            <Animated delay={500}>
              <Image
                src="https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sofia Diogo"
                width={500}
                height={600}
                layout="responsive"
                objectFit="cover"
              />
            </Animated>
          </div>
        </div>
        <div className="w-full items-center justify-center p-0 sm:p-4 lg:w-1/2">
          <Section.Title
            title={t('homepage.about.title')}
            subtitle={t('homepage.about.subtitle')}
          />

          <Animated type="fade" delay={600}>
            <p className="my-7">{t('homepage.about.description')}</p>
          </Animated>
        </div>
      </Section>

      {/* Treatments  */}
      <Section id="practice-areas" containerClassName="bg-bgBlue text-blue">
        <Section.Title
          title={t('homepage.treatments.title')}
          subtitle={t('homepage.treatments.subtitle')}
        />
        <Animated>
          <p className="max-w-xl">{t('homepage.treatments.description')}</p>
        </Animated>
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {treatmentSteps.map(({ title, description, imageSrc, imageAlt }, i) => (
            <Animated type="slide" delay={i * 100} key={title}>
              <ImageCard 
                title={title} 
                description={description} 
                imageSrc={imageSrc} 
                imageAlt={imageAlt} 
              />
            </Animated>
          ))}
        </div>
        <Animated>
          <Button className="m-auto mt-12">
            <Link href="/treatments">{t('homepage.treatments.link')}</Link>
          </Button>
        </Animated>
      </Section>

      {/* Testimonials  */}
      <Testimonials />

      {/* FAQs */}
      <Faqs />

      {/* Hero Section */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="py-20 text-white sm:py-32"
      >
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Left section  */}
          <div>
            <h2 className="mb-2 text-3xl sm:text-5xl">
              {t('homepage.heroSection1.title')}
            </h2>
          </div>
          {/* Right section  */}
          <div>
            <p className="mb-10">{t('homepage.heroSection1.description')}</p>
            <div className="flex items-end justify-end">
              <Calendar.Button />
            </div>
          </div>
        </div>
      </HeroSection>

      {/* Contacts */}
      <Section
        id="contacts"
        sectionClassName="flex flex-wrap lg:flex-nowrap gap-10"
      >
        <Contacts />
      </Section>
    </main>
  );
}
