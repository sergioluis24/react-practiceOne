export function useSearch(setTextSearch, setFilterSelect, setCurrentPage) {
  function handleChangeSearch(text) {
    setTextSearch(text);
    setCurrentPage(1);
  }

  function handleChangeSelect(formData) {
    setFilterSelect(formData);
    setCurrentPage(1);
  }

  function handleReset() {
    setFilterSelect({
      tecnology: "",
      location: "",
      experienceLevel: "",
      salary: 0,
    });
    setTextSearch("");
  }

  return {
    handleChangeSearch,
    handleChangeSelect,
    handleReset,
  };
}
