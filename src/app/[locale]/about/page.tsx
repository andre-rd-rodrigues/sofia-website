import Animated from '@/components/Animated';
import HeroSection from '@/components/HeroSection/HeroSection';
import Page from '@/components/Page';
import Section from '@/components/Section';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const AboutPage = () => {
  const t = useTranslations('pages.about');

  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title={t('title')}
      />
      <Section sectionClassName="relative flex flex-wrap">
        <div className="flex items-center justify-center sm:p-4 md:w-1/2">
          <Animated type="slide-in-left">
            <h2 className=" text-4xl tracking-wide">{t('subtitle')}</h2>
          </Animated>
        </div>
        <div className="w-full md:w-1/2">
          <div className="m-auto mt-12 h-full max-w-md">
            <Animated type="slide-in-right">
              <Image
                src="https://images.unsplash.com/photo-1555776097-f21af260de55?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Barbara Barbizani"
                width={800}
                height={800}
                layout="responsive"
                objectFit="cover"
              />
            </Animated>
          </div>
        </div>
        <span id="journey"></span>
        <Animated>
          <p className="mt-12">{t('description')}</p>
        </Animated>
      </Section>

      {/* Hero Section */}
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="py-20 text-white sm:py-32"
      >
        <div className="flex flex-col gap-10 md:flex-row">
          {/* Left section  */}
          <div>
            <h2 className="mb-2 text-3xl sm:text-5xl">
              {t('heroSection1.title')}
            </h2>
          </div>
          {/* Right section  */}
          <div>
            <p className="mb-10">{t('heroSection1.description')}</p>
            <div className="flex items-end justify-end">
              {/*  <CalendarView /> */}
            </div>
          </div>
        </div>
      </HeroSection>
    </Page>
  );
};

export default AboutPage;
