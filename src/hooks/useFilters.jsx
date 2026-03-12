import { useEffect, useState } from "react";
import { useFilterStorage } from "./useFilterStorage";
import { useSearchParams } from "react-router";
export function useFilters(setError, currentPage) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { getLocalStorageFilters, getLocalStorageTextToFilter } =
    useFilterStorage(setError);
  const [textSearch, setTextSearch] = useState(() =>
    getLocalStorageTextToFilter(),
  );
  const [filtersSelect, setFilterSelect] = useState(() =>
    getLocalStorageFilters(),
  );
  useEffect(() => {
    setSearchParams((params) => {
      if (textSearch) {
        params.set("text", textSearch);
      }
      if (filtersSelect.tecnology) {
        params.set("tecnology", filtersSelect.tecnology);
      }
      if (filtersSelect.location) {
        params.set("location", filtersSelect.location);
      }
      if (filtersSelect.experienceLevel) {
        params.set("experienceLevel", filtersSelect.experienceLevel);
      }
      if (currentPage > 1) {
        params.set("page", String(currentPage));
      }

      return params;
    });
  }, [textSearch, filtersSelect, currentPage, setSearchParams]);
  const [focusedField, setfocusedField] = useState(null);
  const focusFieldClass = "border-[#4f46e5] outline-[#4f46e5]";

  return {
    textSearch,
    setTextSearch,
    filtersSelect,
    setFilterSelect,
    focusFieldClass,
    focusedField,
    setfocusedField,
  };
}
