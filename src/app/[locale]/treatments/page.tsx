'use client';
import TreatmentCard from '@/components/Card/TreatmentCard';
import Filters from '@/components/Filters/Filters';
import Page from '@/components/Page';
import { treatments } from '@/constants/treatments.constants';
import { useFilters } from '@/hooks/useFilters';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

const Treatments = () => {
  const t = useTranslations('pages.treatments');
  const tComponents = useTranslations();

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      treatments.map((treatment) => tComponents(treatment.category)),
    );
    return Array.from(uniqueCategories).map((category) => ({
      value: category,
      label: category,
    }));
  }, [tComponents]);

  // Translate treatments
  const translatedTreatments = useMemo(() => {
    return treatments.map((treatment) => ({
      ...treatment,
      name: tComponents(treatment.name),
      category: tComponents(treatment.category),
      objective: tComponents(treatment.objective),
      details: {
        duration: tComponents(treatment.details.duration),
        effectDuration: tComponents(treatment.details.effectDuration),
        anesthesia: tComponents(treatment.details.anesthesia),
        recovery: tComponents(treatment.details.recovery),
      },
    }));
  }, [tComponents]);

  const filterOptions = {
    search: true,
    category: {
      options: categories,
      label: tComponents('components.filters.category'),
    },
    duration: {
      options: [
        {
          value: 'short',
          label: tComponents('components.filters.shortDuration'),
        },
        {
          value: 'medium',
          label: tComponents('components.filters.mediumDuration'),
        },
        {
          value: 'long',
          label: tComponents('components.filters.longDuration'),
        },
      ],
      label: tComponents('components.filters.duration'),
    },
    price: {
      options: [
        { value: 'low', label: tComponents('components.filters.lowPrice') },
        {
          value: 'medium',
          label: tComponents('components.filters.mediumPrice'),
        },
        { value: 'high', label: tComponents('components.filters.highPrice') },
      ],
      label: tComponents('components.filters.price'),
    },
  };

  const { filters, handleFilterChange, filterItems } =
    useFilters(filterOptions);

  // Filter treatments
  const filteredTreatments = useMemo(() => {
    return filterItems(translatedTreatments, {
      search: (treatment, search) =>
        treatment.name.toLowerCase().includes(search.toLowerCase()),
      category: (treatment, category) => treatment.category === category,
      duration: (treatment, duration) => {
        const treatmentDuration = treatment.details.duration.toLowerCase();
        if (duration === 'short') {
          return (
            treatmentDuration.includes('15') || treatmentDuration.includes('30')
          );
        }
        if (duration === 'medium') {
          return (
            treatmentDuration.includes('40') || treatmentDuration.includes('45')
          );
        }
        if (duration === 'long') {
          return treatmentDuration.includes('variável');
        }
        return true;
      },
    });
  }, [translatedTreatments, filters, filterItems]);

  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title={t('title')}
      />
      <section className="bg-white px-4 py-12 text-neutral-800 md:px-12">
        <Filters
          filters={filterOptions}
          onFilterChange={handleFilterChange}
          namespace="treatments"
        />
        {filteredTreatments.length === 0 ? (
          <div className="py-12 text-center">
            <h3 className="mb-2 text-xl font-medium text-gray-900">
              {t('noResults.title')}
            </h3>
            <p className="text-gray-600">{t('noResults.description')}</p>
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2">
            {filteredTreatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} {...treatment} />
            ))}
          </div>
        )}
      </section>
    </Page>
  );
};

export default Treatments;
