import { useState } from "react";

const RESULTS_PER_PAGE = 5;

export function usePagination(jobsFilteredByText) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(jobsFilteredByText.length / RESULTS_PER_PAGE);
  const jobsRecorted = jobsFilteredByText.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return {
    currentPage,
    RESULTS_PER_PAGE,
    totalPages,
    jobsRecorted,
    handlePageChange,
    setCurrentPage,
  };
}
