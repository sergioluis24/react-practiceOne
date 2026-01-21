import { useState } from "react";
import { Pagination } from "../components/Pagination.jsx";
import { JobListings } from "../components/JobListings.jsx";
import { Search } from "../components/Search.jsx";
import jobs from "./../data.json";

export function SearchPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [textSearch, setTextSearch] = useState("");
  const [filtersSelect, setFilterSelect] = useState({
    tecnology: "",
    location: "",
    experienceLevel: "",
    salary: 0,
  });
  // useEffect(() => {
  //   if (textSearch !== "" || filtersSelect) {
  //     document.title = `Pagina numero ${currentPage}`;
  //   } else document.title = `Buscando empleo`;
  // }, [textSearch, filtersSelect, currentPage]);
  const [isSearch, setIsSearch] = useState(false);
  const RESULTS_PER_PAGE = 5;
  const MINSALARY = filtersSelect.salary ? filtersSelect.salary : 0;
  const jobsFilteredBySelect = jobs.filter(
    (job) =>
      (filtersSelect.tecnology === "" ||
        job.data.tecnologia.includes(filtersSelect.tecnology)) &&
      (filtersSelect.location === "" ||
        job.ubicacion.toLowerCase() === filtersSelect.location.toLowerCase()) &&
      (filtersSelect.experienceLevel === "" ||
        job.data.nivel.toLowerCase() ===
          filtersSelect.experienceLevel.toLowerCase()) &&
      job.salario >= MINSALARY,
  );

  const jobsFilteredByText =
    textSearch !== ""
      ? jobsFilteredBySelect.filter((job) =>
          job.titulo.toLowerCase().includes(textSearch.toLowerCase()),
        )
      : jobsFilteredBySelect;

  const totalPages = Math.ceil(jobsFilteredByText.length / RESULTS_PER_PAGE);
  const jobsRecorted = jobsFilteredByText.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  function handlePageChange(page) {
    setCurrentPage(page);
  }
  function handleChangeSearch(text) {
    setTextSearch(text);
    setCurrentPage(1);
    setIsSearch(true);
  }
  function handleChangeSelect(formData) {
    setFilterSelect(formData);
    setCurrentPage(1);
    setIsSearch(true);
  }
  function handleReset() {
    setFilterSelect({
      tecnology: "",
      location: "",
      experienceLevel: "",
      salary: 0,
    });
    setIsSearch(false);
  }
  return (
    <>
      <main className="grow shrink w-[80%] mx-auto">
        <h1 className="mb-6 text-2xl  ">Plataforma de empleos</h1>
        <Search
          onSearch={handleChangeSearch}
          onChangeSelect={handleChangeSelect}
          onReset={handleReset}
          onChangeResults={{ isSearch, total: jobsFilteredByText.length }}
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
