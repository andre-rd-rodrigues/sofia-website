import Animated from "@/components/Animated";
import * as Calendar from "@/components/Calendar";
import Contacts from "@/components/Contacts";
import Faqs from "@/components/Faqs";
import HeroSection from "@/components/HeroSection/HeroSection";
import IconCard from "@/components/IconCard/IconCard";
import { getBgColor } from "@/components/IconCard/iconcard.utils";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials/Testimonials";
import { libre } from "@/fonts";
import useTranslation from "@/hooks/useTranslation";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("pages");
  const { getTranslationsArray } = useTranslation();

  const services = getTranslationsArray("pages.homepage.services");

  return (
    <main>
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=1722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overlayStyle={{
          backgroundColor: "#011954",
          opacity: 0.45
        }}
        style={{
          height: "600px",
          textAlign: "center"
        }}
      >
        <Animated type="slide">
          <div className="relative mx-auto w-full h-28">
            <Image
              src="/img/logo.png"
              alt="Sofia Diogo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Animated>

        <Animated type="slide-in-right" delay={200}>
          <h1 className={`text-white ${libre.className} font-semibold`}>
            Dr.ª Sofia Diogo
          </h1>
        </Animated>

        <Animated type="slide-in-left" delay={200}>
          <h2 className="text-white mb-6 font-extralight text-lg">
            {t("homepage.subtitle")}
          </h2>
        </Animated>
        <Animated
          type="fade"
          delay={500}
          config={{
            config: { tension: 150, friction: 60 }
          }}
        >
          <Calendar.Button className="m-auto" />
        </Animated>
      </HeroSection>

      {/* About me */}
      <Section
        id="about"
        sectionClassName="flex flex-wrap lg:flex-nowrap gap-10"
      >
        <div className="w-full lg:w-1/2">
          <div className="m-auto">
            <Animated delay={500}>
              <Image
                src="https://scontent.flis8-2.fna.fbcdn.net/v/t1.6435-9/36802271_10215727744762086_83971532669321216_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_ohc=qWnz2PutGTkAX9jpNCf&_nc_ht=scontent.flis8-2.fna&oh=00_AfCdtdj-peuAStMNfixYug9sk4xYJq9O_MrlbvSK-zznnA&oe=65DF6890"
                alt="Sofia Diogo"
                width={500}
                height={600}
                layout="responsive"
                objectFit="cover"
                className="shadow-2xl"
              />
            </Animated>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-0 sm:p-4 justify-center items-center">
          <Animated type="slide-in-left">
            <h3 className="text-blue uppercase tracking-widest text-xs">
              {t("homepage.about.subtitle")}
            </h3>
          </Animated>
          <Animated type="slide-in-left" delay={100}>
            <h4 className="text-3xl sm:text-5xl text-blue mt-3">
              {t("homepage.about.title")}
            </h4>
          </Animated>

          <Animated type="fade" delay={600}>
            <p className="my-7 text-zinc-500">
              {t("homepage.about.description")}
            </p>
          </Animated>
        </div>
      </Section>

      {/* Practice Areas  */}
      <Section id="practice-areas" containerClassName="bg-bgBlue text-blue">
        <Animated delay={300}>
          <h4 className={`tracking-widest uppercase text-xs`}>
            {t("homepage.practice.subtitle")}
          </h4>
        </Animated>
        <Animated>
          <h3 className="text-3xl sm:text-5xl my-3 max-w-xl">
            {t("homepage.practice.title")}
          </h3>
        </Animated>
        <Animated>
          <p className="text-zinc-600 max-w-xl">
            {t("homepage.practice.description")}
          </p>
        </Animated>
        <div className="flex flex-wrap justify-center md:justify-start lg:justify-between gap-5 mt-12">
          {services.map(({ title, description, icon }, i) => (
            <Animated type="slide" delay={i * 100} key={title}>
              <IconCard
                title={title}
                description={description}
                icon={icon}
                bgColor={getBgColor(i)}
              />
            </Animated>
          ))}
        </div>
      </Section>

      {/* Testimonials  */}
      <Section id="testimonials">
        <Testimonials />
      </Section>

      {/* FAQs */}
      <Section id="faqs" containerClassName="bg-bgBlue">
        <Faqs />
      </Section>

      {/* Hero Section */}
      <HeroSection imageSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <div className="flex flex-col md:flex-row gap-10 sm:gap-20 text-white py-20 sm:py-32">
          {/* Left section  */}
          <div>
            <p className="tracking-widest uppercase text-xs mb-3 font-normal">
              {t("homepage.heroSection1.subtitle")}
            </p>
            <h4 className="text-3xl sm:text-5xl mb-2">
              {t("homepage.heroSection1.title")}
            </h4>
          </div>
          {/* Right section  */}
          <div>
            <p className="mb-10">{t("homepage.heroSection1.description")}</p>
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
