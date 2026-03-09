import { useEffect, useState } from "react";
import { useFilterStorage } from "./useFilterStorage";
import { useRouter } from "./useRouter";
export function useFilters(setError, currentPage) {
  const { getLocalStorageFilters, getLocalStorageTextToFilter } =
    useFilterStorage(setError);
  const { navigateTo } = useRouter();
  const [textSearch, setTextSearch] = useState(() =>
    getLocalStorageTextToFilter(),
  );
  const [filtersSelect, setFilterSelect] = useState(() =>
    getLocalStorageFilters(),
  );
  useEffect(() => {
    const params = new URLSearchParams();
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
    const paramsString = params.toString();
    const basePath = window.location.pathname;
    const newUrl = paramsString ? `${basePath}?${paramsString}` : basePath;
    navigateTo(newUrl);
  }, [textSearch, filtersSelect, currentPage]);
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
