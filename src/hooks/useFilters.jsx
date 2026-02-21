import { useState } from "react";

export function useFilters() {
  const [textSearch, setTextSearch] = useState("");
  const [filtersSelect, setFilterSelect] = useState({
    tecnology: "",
    location: "",
    experienceLevel: "",
    salary: 0,
  });

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
