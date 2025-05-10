import Animated from "@/components/Animated";
import Button from "@/components/Button";
import * as Calendar from "@/components/Calendar";
import Contacts from "@/components/Contacts";
import Faqs from "@/components/Faqs";
import HeroSection from "@/components/HeroSection/HeroSection";
import IconCard from "@/components/IconCard/IconCard";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials/Testimonials";
import useTranslation from "@/hooks/useTranslation";
import { Link } from "@/navigation";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Locale } from "../../../locale.types";
import { getMetadata } from "../../../metadata/metadata.utils";

export type MetadataProps = {
  params: { locale: Locale };
};

export async function generateMetadata({
  params: { locale }
}: MetadataProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return getMetadata({
    title: t("homeTitle"),
    description: t("description")
  });
}

export default function Home() {
  const t = useTranslations("pages");
  const { getTranslationsArray } = useTranslation();

  const treatmentSteps = getTranslationsArray(
    "pages.homepage.treatments.steps"
  );

  return (
    <main>
      <HeroSection
        imageSrc="https://images.squarespace-cdn.com/content/v1/64ad8b4cb2f8735d2ed972ed/b73cdd39-e04c-44b1-b2e3-e8af43f1dec4/kaboompics_travertine-coffee-table-and-greige-linen-couch-28884.jpg?format=1000w"
        style={{
          height: "700px",
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
          <h1 className="text-white text-5xl my-8">Dr.ª Sofia Diogo</h1>
        </Animated>

        <Animated type="slide-in-left" delay={200}>
          <h2 className="text-white mb-6 text-sm uppercase font-proxima-nova tracking-widest">
            {t("homepage.subtitle")}
          </h2>
        </Animated>
      </HeroSection>

      {/* About me */}
      <Section
        id="about"
        sectionClassName="flex flex-wrap lg:flex-nowrap gap-10"
      >
        <div className="w-full lg:w-1/2">
          <div className="m-auto shadow-2xl overflow-hidden rounded-lg">
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
        <div className="w-full lg:w-1/2 p-0 sm:p-4 justify-center items-center">
          <Section.Title
            title={t("homepage.about.title")}
            subtitle={t("homepage.about.subtitle")}
          />

          <Animated type="fade" delay={600}>
            <p className="my-7">{t("homepage.about.description")}</p>
          </Animated>
        </div>
      </Section>

      {/* Treatments  */}
      <Section id="practice-areas" containerClassName="bg-bgBlue text-blue">
        <Section.Title
          title={t("homepage.treatments.title")}
          subtitle={t("homepage.treatments.subtitle")}
        />
        <Animated>
          <p className="max-w-xl">{t("homepage.treatments.description")}</p>
        </Animated>
        <div className="flex flex-wrap gap-5 mt-12 justify-center">
          {treatmentSteps.map(({ title, description, icon }, i) => (
            <Animated type="slide" delay={i * 100} key={title}>
              <IconCard title={title} description={description} icon={icon} />
            </Animated>
          ))}
        </div>
        <Animated>
          <Button className="mt-12 m-auto">
            <Link href="/treatments">{t("homepage.treatments.link")}</Link>
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
        className="text-white py-20 sm:py-32"
      >
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left section  */}
          <div>
            <h2 className="text-3xl sm:text-5xl mb-2">
              {t("homepage.heroSection1.title")}
            </h2>
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
