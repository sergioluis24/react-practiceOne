import { useEffect, useState } from "react";

export function useFilters() {
  const [textSearch, setTextSearch] = useState("");
  const [filtersSelect, setFilterSelect] = useState(() => {
    if (localStorage.getItem("Debjobsfilters")) {
      const filters = JSON.parse(localStorage.getItem("Debjobsfilters"));
      return filters;
    } else
      return {
        tecnology: "",
        location: "",
        experienceLevel: "",
      };
  });
  // useEffect(() => {
  // }, []);
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
