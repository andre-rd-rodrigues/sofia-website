import { useTranslations } from "next-intl";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

interface FilterOption {
  value: string;
  label: string;
}

interface FiltersProps {
  filters: {
    search?: boolean;
    category?: {
      options: FilterOption[];
      label: string;
    };
    duration?: {
      options: FilterOption[];
      label: string;
    };
    price?: {
      options: FilterOption[];
      label: string;
    };
  };
  onFilterChange: (filters: FilterState) => void;
  namespace: string;
}

export interface FilterState {
  search: string;
  category: string;
  duration: string;
  price: string;
}

const Filters = ({ filters, onFilterChange, namespace }: FiltersProps) => {
  const t = useTranslations(`components.filters.${namespace}`);
  const searchParams = useSearchParams();

  const [filterState, setFilterState] = useState<FilterState>({
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "",
    duration: searchParams.get("duration") || "",
    price: searchParams.get("price") || ""
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filterState, [key]: value };
    setFilterState(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search filter */}
        {filters.search && (
          <div>
            <label
              htmlFor="search"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t("search")}
            </label>
            <input
              type="text"
              id="search"
              value={filterState.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={t("searchPlaceholder")}
            />
          </div>
        )}

        {/* Category filter */}
        {filters.category && (
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {filters.category.label}
            </label>
            <select
              id="category"
              value={filterState.category}
              onChange={(e) => handleFilterChange("category", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">{t("allCategories")}</option>
              {filters.category.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Duration filter */}
        {filters.duration && (
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {filters.duration.label}
            </label>
            <select
              id="duration"
              value={filterState.duration}
              onChange={(e) => handleFilterChange("duration", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">{t("allDurations")}</option>
              {filters.duration.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Price filter */}
        {filters.price && (
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {filters.price.label}
            </label>
            <select
              id="price"
              value={filterState.price}
              onChange={(e) => handleFilterChange("price", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">{t("allPrices")}</option>
              {filters.price.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
