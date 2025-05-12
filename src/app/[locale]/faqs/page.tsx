'use client';
import Animated from '@/components/Animated';
import Page from '@/components/Page';
import Section from '@/components/Section';
import useTranslation from '@/hooks/useTranslation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Icon } from '@iconify/react';

type FaqsType = {
  answer: string;
  question: string;
};

const FaqsPage = () => {
  const t = useTranslations('pages.faqs');
  const { getTranslationsArray } = useTranslation();

  const faqs: FaqsType[] = getTranslationsArray('components.faqs.questions');

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title={'FAQs'}
      />
      <Section>
        <Section.Title title={t('title')} subtitle="FAQS" className="mb-6" />
        <p className="mb-8">
          Encontre respostas para as perguntas mais comuns sobre medicina
          integrativa e os meus serviços. Se tiver mais dúvidas, não hesite em
          contactar-me.
        </p>
        <ul className="mt-8 sm:m-5">
          {faqs.map((faq, index) => (
            <Animated key={index} type="slide" delay={index * 100}>
              <li key={index} className="text-blue bg-white p-4">
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
      </Section>
    </Page>
  );
};

export default FaqsPage;
