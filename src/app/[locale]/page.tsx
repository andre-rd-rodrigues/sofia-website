import Animated from "@/components/Animated";
import Button from "@/components/Button";
import HeroSection from "@/components/HeroSection/HeroSection";
import { libre } from "@/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("pages");

  return (
    <main>
      <HeroSection
        imageSrc="https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=1722&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        overlayStyle={{
          backgroundColor: "#011954",
          opacity: 0.45
        }}
        style={{
          height: "600px"
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
          <h2 className={`text-white mb-6 font-extralight text-lg`}>
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
          <Button label="appointment" />
        </Animated>
      </HeroSection>
    </main>
  );
}
