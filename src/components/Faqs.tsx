'use client';
import React, { useState } from 'react';
import Animated from './Animated';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import useTranslation from '@/hooks/useTranslation';
import { Icon } from '@iconify/react';
import Section from './Section';

type Faqs = {
  answer: string;
  question: string;
};

export default function Faqs() {
  const t = useTranslations('components.faqs');
  const { getTranslationsArray } = useTranslation();

  const faqs: Faqs[] = getTranslationsArray('components.faqs.questions');

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Section id="faqs" sectionClassName="flex flex-wrap lg:flex-nowrap gap-10">
      <div className="w-full items-center justify-center lg:w-1/2">
        <Section.Title title={t('title')} subtitle="FAQ's" />
        {/* FAQs Questions */}
        <ul className="mt-8 sm:m-5">
          {faqs.map((faq, index) => (
            <Animated type="slide" delay={index * 100} key={index}>
              <li className="text-blue bg-white p-4">
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between"
                >
                  <h6 className="text-md font-medium sm:text-lg">
                    {faq.question}
                  </h6>
                  <span>
                    <Icon
                      icon="iconamoon:arrow-down-2-thin"
                      fontSize={30}
                      rotate={openIndex === index ? -90 : 0}
                    />
                  </span>
                </button>
                {/* Collapsible content */}
                <div
                  className={`px-4 transition-all duration-300 ${
                    openIndex === index
                      ? 'max-h-80 pt-3 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <p>{faq.answer}</p>
                </div>
              </li>
              <div className="h-[1px] bg-slate-200" />
            </Animated>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="relative min-h-80 w-full overflow-hidden rounded-lg shadow-2xl">
          <Animated delay={500}>
            <Image
              src="https://images.unsplash.com/photo-1550160770-005c21924d66?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Contactos - Dr.ª Sofia Diogo"
              objectFit="cover"
              fill
            />
          </Animated>
        </div>
      </div>
    </Section>
  );
}
