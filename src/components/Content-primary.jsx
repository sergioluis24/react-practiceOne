import { useState } from "react";
import { Pagination } from "./Pagination.jsx";
import { JobListings } from "./JobListings.jsx";
export function ContentPrimary() {
  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <main className="grow shrink w-[80%] mx-auto">
        <h1 className="">Plataforma de empleos</h1>
        <JobListings />
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
}
