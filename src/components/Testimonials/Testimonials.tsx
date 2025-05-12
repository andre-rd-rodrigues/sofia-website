"use client";
import useTranslation from "@/hooks/useTranslation";
import { useTranslations } from "next-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Testimonial from "./Testimonial";
import Section from "../Section";

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

export interface TestimonialType {
  author: string;
  imageUrl: string;
  feedback: string;
  role: string;
}

function Testimonials() {
  const t = useTranslations("components");
  const { getTranslationsArray } = useTranslation();

  const testimonials: TestimonialType[] = getTranslationsArray(
    "components.testimonials.feedback",
  );

  return (
    <Section id="testimonials">
      <div className="relative flex mb-10 sm:mb-20">
        <div className="relative mt-5">
          <Section.Title
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
          />
        </div>
      </div>

      <Slider {...settings}>
        {testimonials.map(({ author, feedback, imageUrl, role }) => (
          <Testimonial
            author={author}
            feedback={feedback}
            imageUrl={imageUrl}
            key={author}
            role={role}
          />
        ))}
      </Slider>
    </Section>
  );
}

export default Testimonials;
