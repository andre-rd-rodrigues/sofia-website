"use client";
import TreatmentCard from "@/components/Card/TreatmentCard";
import Filters, { FilterState } from "@/components/Filters/Filters";
import Page from "@/components/Page";
import { treatments } from "@/constants/treatments.constants";
import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";

const Treatments = () => {
  const t = useTranslations("pages.treatments");
  const tComponents = useTranslations();

  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "",
    duration: "",
    price: ""
  });

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      treatments.map((treatment) => tComponents(treatment.category))
    );
    return Array.from(uniqueCategories).map((category) => ({
      value: category,
      label: category
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
        recovery: tComponents(treatment.details.recovery)
      }
    }));
  }, [tComponents]);

  // Filter treatments
  const filteredTreatments = useMemo(() => {
    return translatedTreatments.filter((treatment) => {
      // Search filter
      if (
        filters.search &&
        !treatment.name.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (filters.category && treatment.category !== filters.category) {
        return false;
      }

      // Duration filter
      if (filters.duration) {
        const duration = treatment.details.duration.toLowerCase();
        if (
          filters.duration === "short" &&
          !duration.includes("15") &&
          !duration.includes("30")
        ) {
          return false;
        }
        if (
          filters.duration === "medium" &&
          !duration.includes("40") &&
          !duration.includes("45")
        ) {
          return false;
        }
        if (filters.duration === "long" && !duration.includes("variável")) {
          return false;
        }
      }

      // Price filter (you'll need to add price information to your treatments data)
      // This is a placeholder implementation
      if (filters.price) {
        // Add your price filtering logic here
        // For now, we'll just return true
        return true;
      }

      return true;
    });
  }, [translatedTreatments, filters]);

  const filterOptions = {
    search: true,
    category: {
      options: categories,
      label: tComponents("components.filters.category")
    },
    duration: {
      options: [
        {
          value: "short",
          label: tComponents("components.filters.shortDuration")
        },
        {
          value: "medium",
          label: tComponents("components.filters.mediumDuration")
        },
        { value: "long", label: tComponents("components.filters.longDuration") }
      ],
      label: tComponents("components.filters.duration")
    },
    price: {
      options: [
        { value: "low", label: tComponents("components.filters.lowPrice") },
        {
          value: "medium",
          label: tComponents("components.filters.mediumPrice")
        },
        { value: "high", label: tComponents("components.filters.highPrice") }
      ],
      label: tComponents("components.filters.price")
    }
  };

  return (
    <Page>
      <Page.Title
        src="https://askproject.net/medral/wp-content/uploads/sites/154/2023/09/small-white-ceramic-mortar-with-eucalyptus-leaves-AANHPA2.jpg"
        title={t("title")}
      />
      <section className="bg-white text-neutral-800 py-12 px-4 md:px-12">
        <Filters
          filters={filterOptions}
          onFilterChange={setFilters}
          namespace="treatments"
        />
        {filteredTreatments.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {t("noResults.title")}
            </h3>
            <p className="text-gray-600">{t("noResults.description")}</p>
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
