import { Pagination } from "../components/Pagination.jsx";
import { JobListings } from "../components/JobListings.jsx";
import { Search } from "../components/Search.jsx";
import { useSearch } from "../hooks/useSearch.jsx";
import { usePagination } from "../hooks/usePagination.jsx";
import { useEffect, useState } from "react";
import { useFilters } from "../hooks/useFilters.jsx";

export function SearchPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(null);

  // Usar hooks con el estado centralizado en SearchPage
  const {
    textSearch,
    setTextSearch,
    filtersSelect,
    setFilterSelect,
    jobsFilteredByText,
  } = useFilters(jobs);

  const {
    currentPage,
    RESULTS_PER_PAGE,
    totalPages,
    jobsRecorted,
    handlePageChange,
    setCurrentPage,
  } = usePagination(jobsFilteredByText);

  const { handleChangeSearch, handleChangeSelect, handleReset } = useSearch(
    setTextSearch,
    setFilterSelect,
    setCurrentPage,
  );
  useEffect(() => {
    async function getJobs() {
      try {
        const params = new URLSearchParams();
        if (textSearch) {
          params.append("text", textSearch);
        }
        if (filtersSelect.tecnology) {
          params.append("technology", filtersSelect.tecnology);
        }
        if (filtersSelect.location) {
          params.append("modalidad", filtersSelect.location);
        }
        if (filtersSelect.experienceLevel) {
          params.append("nivel", filtersSelect.experienceLevel);
        }
        const queryParams = params.toString();
        const response = await fetch(
          `https://jscamp-api.vercel.app/api/jobs?${queryParams}`,
        );
        const json = await response.json();
        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        console.error("Error no se ha podido cargar los trabajos: " + error);
      } finally {
        setLoading(false);
      }
    }
    getJobs();
  }, [filtersSelect, textSearch]);

  return (
    <>
      <main className="grow shrink">
        <h1 className="mb-10 text-yellow-200/90  tracking-tight text-3xl font-bold leading-tight text-left  ">
          Plataforma de empleos
        </h1>
        <Search
          onSearch={handleChangeSearch}
          onChangeSelect={handleChangeSelect}
          onReset={handleReset}
          onChangeResults={{
            isSearch: textSearch !== "",
            total: jobsFilteredByText.length,
          }}
        />
        <JobListings jobs={jobsRecorted} loading={loading} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
}
