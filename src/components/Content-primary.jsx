import { useState } from "react";
import { Pagination } from "./Pagination.jsx";
import { JobListings } from "./JobListings.jsx";
import { Search } from "./Search.jsx";
import jobs from "./../data.json";

export function ContentPrimary() {
  const [currentPage, setCurrentPage] = useState(1);
  const [textSearch, setTextSearch] = useState("");
  const [filtersSelect, setFilterSelect] = useState({
    tecnology: "",
    location: "",
    experienceLevel: "",
  });
  const RESULTS_PER_PAGE = 5;

  const jobsFilteredBySelect = jobs.filter(
    (job) =>
      (filtersSelect.tecnology === "" ||
        job.data.tecnologia.includes(filtersSelect.tecnology)) &&
      (filtersSelect.location === "" ||
        job.ubicacion.toLowerCase() === filtersSelect.location.toLowerCase()) &&
      (filtersSelect.experienceLevel === "" ||
        job.data.nivel.toLowerCase() ===
          filtersSelect.experienceLevel.toLowerCase())
  );

  const jobsFilteredByText =
    textSearch !== ""
      ? jobsFilteredBySelect.filter((job) =>
          job.titulo.toLowerCase().includes(textSearch.toLowerCase())
        )
      : jobsFilteredBySelect;

  const totalPages = Math.ceil(jobsFilteredByText.length / RESULTS_PER_PAGE);
  const jobsRecorted = jobsFilteredByText.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );

  function handlePageChange(page) {
    setCurrentPage(page);
  }
  function handleChangeSearch(text) {
    setTextSearch(text);
  }
  function handleChangeSelect(formData) {
    setFilterSelect(formData);
  }
  return (
    <>
      <main className="grow shrink w-[80%] mx-auto">
        <h1 className="mb-6 text-2xl  ">Plataforma de empleos</h1>
        <Search
          onSearch={handleChangeSearch}
          onChangeSelect={handleChangeSelect}
        />
        <JobListings jobs={jobsRecorted} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
}
