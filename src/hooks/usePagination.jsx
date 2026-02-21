import { useState } from "react";

// const RESULTS_PER_PAGE = 5;

export function usePagination(jobs, total) {
  const [currentPage, setCurrentPage] = useState(1);
  const OFFSET = currentPage - 1;
  const LIMIT = 5;
  const totalPages = Math.ceil(total / LIMIT);
  // const jobsRecorted = jobs.slice(
  //   (currentPage - 1) * RESULTS_PER_PAGE,
  //   currentPage * RESULTS_PER_PAGE,
  // );

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return {
    currentPage,
    // RESULTS_PER_PAGE,
    totalPages,
    // jobsRecorted,
    OFFSET,
    LIMIT,
    handlePageChange,
    setCurrentPage,
  };
}
