import { Pagination } from "../components/Pagination.jsx";
import { JobListings } from "../components/JobListings.jsx";
import { Search } from "../components/Search.jsx";
import { useSearch } from "../hooks/useSearch.jsx";
import { usePagination } from "../hooks/usePagination.jsx";
import { useState } from "react";
import { useFilters } from "../hooks/useFilters.jsx";
import { useGetJobs } from "../hooks/useGetJobs.jsx";
import { ModalError } from "../components/ModalError.jsx";

export function SearchPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);

  const {
    currentPage,
    totalPages,
    handlePageChange,
    setCurrentPage,
    OFFSET,
    LIMIT,
  } = usePagination(jobs, total);
  const { textSearch, setTextSearch, filtersSelect, setFilterSelect } =
    useFilters(setError, currentPage);

  const { handleChangeSearch, handleChangeSelect, handleReset, filterLength } =
    useSearch(filtersSelect, setTextSearch, setFilterSelect, setCurrentPage);
  useGetJobs({
    setLoading,
    textSearch,
    filtersSelect,
    OFFSET,
    LIMIT,
    setJobs,
    setTotal,
    setError,
    currentPage,
  });
  const title = `Se han encontrado ${total} empleo/s`;
  return (
    <>
      <title>{title}</title>
      <main className="grow shrink">
        <h1 className="mb-10 text-yellow-200/90  tracking-tight text-3xl font-bold leading-tight text-left  ">
          Plataforma de empleos
        </h1>
        <Search
          filterStorage={filtersSelect}
          filterLength={filterLength}
          textSearch={textSearch}
          onSearch={handleChangeSearch}
          onChangeSelect={handleChangeSelect}
          onReset={handleReset}
          onChangeResults={{
            isSearch: textSearch !== "",
            total: total,
          }}
        />
        <JobListings jobs={jobs} loading={loading} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <ModalError hidden={error} />
      </main>
    </>
  );
}
