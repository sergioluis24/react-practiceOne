import { useState } from "react";

export function useFilters(jobs) {
  const [textSearch, setTextSearch] = useState("");
  const [filtersSelect, setFilterSelect] = useState({
    tecnology: "",
    location: "",
    experienceLevel: "",
    salary: 0,
  });

  const [focusedField, setfocusedField] = useState(null);
  const focusFieldClass = "border-[#4f46e5] outline-[#4f46e5]";

  const jobsFilteredBySelect = jobs.filter(
    (job) =>
      (filtersSelect.tecnology === "" ||
        job.data.technology.includes(filtersSelect.tecnology)) &&
      (filtersSelect.location === "" ||
        job.data.modalidad.toLowerCase() ===
          filtersSelect.location.toLowerCase()) &&
      (filtersSelect.experienceLevel === "" ||
        job.data.nivel.toLowerCase() ===
          filtersSelect.experienceLevel.toLowerCase()),
  );

  const jobsFilteredByText =
    textSearch !== ""
      ? jobsFilteredBySelect.filter((job) =>
          job.titulo.toLowerCase().includes(textSearch.toLowerCase()),
        )
      : jobsFilteredBySelect;

  return {
    textSearch,
    setTextSearch,
    filtersSelect,
    setFilterSelect,
    jobsFilteredByText,
    jobsFilteredBySelect,
    focusFieldClass,
    focusedField,
    setfocusedField,
  };
}
