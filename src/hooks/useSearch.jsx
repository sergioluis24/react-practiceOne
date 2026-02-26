// import { useState } from "react";

export function useSearch(
  filters,
  setTextSearch,
  setFilterSelect,
  setCurrentPage,
) {
  const filterLength = Object.values(filters).filter(
    (value) => value !== null && value !== undefined && value !== "",
  ).length;

  function handleChangeSearch(text) {
    setTextSearch(text);
    setCurrentPage(1);
  }

  function handleChangeSelect(formData) {
    localStorage.setItem("Debjobsfilters", JSON.stringify(formData));
    setFilterSelect(formData);
    setCurrentPage(1);
  }
  function handleReset() {
    localStorage.removeItem("Debjobsfilters");
    setFilterSelect({
      tecnology: "",
      location: "",
      experienceLevel: "",
    });
    setTextSearch("");
    setCurrentPage(1);
  }
  return {
    handleChangeSearch,
    handleChangeSelect,
    handleReset,
    filterLength,
  };
}
