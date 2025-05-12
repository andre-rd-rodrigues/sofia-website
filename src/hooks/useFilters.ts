import { useRouter, useSearchParams } from "next/navigation";

/**
 * Represents the current state of all filters
 */
export interface FilterState {
  search: string;
  category: string;
  duration: string;
  price: string;
}

/**
 * Represents a single filter option with a value and display label
 */
export interface FilterOption {
  value: string;
  label: string;
}

/**
 * Configuration for the available filters
 */
export interface FilterConfig {
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
}

/**
 * A custom hook for managing filters with URL persistence
 *
 * @example
 * ```tsx
 * // Define your filter configuration
 * const filterConfig = {
 *   search: true,
 *   category: {
 *     options: [
 *       { value: "facial", label: "Facial Treatments" },
 *       { value: "body", label: "Body Treatments" }
 *     ],
 *     label: "Category"
 *   },
 *   duration: {
 *     options: [
 *       { value: "short", label: "Short (15-30 min)" },
 *       { value: "medium", label: "Medium (30-60 min)" }
 *     ],
 *     label: "Duration"
 *   }
 * };
 *
 * // Use the hook in your component
 * const { filters, handleFilterChange, filterItems } = useFilters(filterConfig);
 *
 * // Filter your items
 * const filteredItems = filterItems(treatments, {
 *   search: (treatment, search) =>
 *     treatment.name.toLowerCase().includes(search.toLowerCase()),
 *   category: (treatment, category) =>
 *     treatment.category === category,
 *   duration: (treatment, duration) => {
 *     const treatmentDuration = treatment.duration.toLowerCase();
 *     if (duration === "short") {
 *       return treatmentDuration.includes("15") || treatmentDuration.includes("30");
 *     }
 *     return treatmentDuration.includes("45") || treatmentDuration.includes("60");
 *   }
 * });
 * ```
 */
export const useFilters = (config: FilterConfig) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get filters from URL
  const filters: FilterState = {
    search: searchParams.get("search") || "",
    category: searchParams.get("category") || "",
    duration: searchParams.get("duration") || "",
    price: searchParams.get("price") || ""
  };

  /**
   * Updates the URL with the new filter values
   * @param newFilters - The new filter state
   */
  const handleFilterChange = (newFilters: FilterState) => {
    const params = new URLSearchParams(searchParams.toString());

    // Handle search filter
    if (newFilters.search) {
      params.set("search", newFilters.search);
    } else {
      params.delete("search");
    }

    // Handle category filter
    if (newFilters.category && newFilters.category !== "all") {
      params.set("category", newFilters.category);
    } else {
      params.delete("category");
    }

    // Handle duration filter
    if (newFilters.duration && newFilters.duration !== "all") {
      params.set("duration", newFilters.duration);
    } else {
      params.delete("duration");
    }

    // Handle price filter
    if (newFilters.price && newFilters.price !== "all") {
      params.set("price", newFilters.price);
    } else {
      params.delete("price");
    }
    const newUrl = params.toString()
      ? `?${params.toString()}`
      : window.location.pathname;

    router.replace(newUrl, { scroll: false });
  };

  /**
   * Generic function to filter items based on the current filter state
   * @param items - Array of items to filter
   * @param filterFunctions - Object containing filter functions for each filter type
   * @returns Filtered array of items
   */
  const filterItems = <T extends Record<string, unknown>>(
    items: T[],
    filterFunctions: {
      search?: (item: T, search: string) => boolean;
      category?: (item: T, category: string) => boolean;
      duration?: (item: T, duration: string) => boolean;
      price?: (item: T, price: string) => boolean;
    }
  ) => {
    return items.filter((item) => {
      // Search filter
      if (
        filters.search &&
        filterFunctions.search &&
        !filterFunctions.search(item, filters.search)
      ) {
        return false;
      }

      // Category filter
      if (
        filters.category &&
        filterFunctions.category &&
        !filterFunctions.category(item, filters.category)
      ) {
        return false;
      }

      // Duration filter
      if (
        filters.duration &&
        filterFunctions.duration &&
        !filterFunctions.duration(item, filters.duration)
      ) {
        return false;
      }

      // Price filter
      if (
        filters.price &&
        filterFunctions.price &&
        !filterFunctions.price(item, filters.price)
      ) {
        return false;
      }

      return true;
    });
  };

  return {
    filters,
    handleFilterChange,
    filterItems,
    config
  };
};
