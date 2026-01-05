import { useState } from "react";
import { Pagination } from "./Pagination.jsx";

export function ContentPrimary() {
  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(page) {
    setCurrentPage(page);
  }
  return (
    <>
      <main className="grow shrink">
        <h1>Hola</h1>
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
}
