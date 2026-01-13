import { useState } from "react";
import { Pagination } from "./Pagination.jsx";
import { JobListings } from "./JobListings.jsx";
import { Search } from "./Search.jsx";
import jobs from "./../data.json";

export function ContentPrimary() {
  const [currentPage, setCurrentPage] = useState(1);
  const RESULTS_PER_PAGE = 5;

  const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE);

  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <main className="grow shrink w-[80%] mx-auto">
        <h1 className="mb-6 text-2xl  ">Plataforma de empleos</h1>
        <Search />
        <JobListings jobs={jobs} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
}
