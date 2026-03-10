import arrow from "./../assets/right-arrow.png";
import { Link } from "./Link.jsx";
export function Pagination({ currentPage = 1, totalPages = 5, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  let isFirstPage, isLastPage;

  if (currentPage === pages[0]) {
    isFirstPage = {
      opacity: 0.2,
      cursor: "not-allowed",
      pointerEvents: "none",
    };
  }
  if (currentPage === pages.length) {
    isLastPage = {
      opacity: 0.2,
      cursor: "not-allowed",
      pointerEvents: "none",
    };
  }
  const urlPageBuilder = (page) => {
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;
    searchParams.set("page", String(page));
    url.search = searchParams.toString();
    return `${url.pathname}?${url.searchParams.toString()}`;
  };
  function handleNextPage() {
    if (!isLastPage) onPageChange(currentPage + 1);
  }
  function handlePreviousPage() {
    if (!isFirstPage) onPageChange(currentPage - 1);
  }
  function handlePageChange(page) {
    onPageChange(page);
  }
  return (
    <>
      <section className="flex items-center flex-wrap justify-center">
        <Link
          className="invert opacity-60 w-14 px-5 py-3 rounded-xl cursor-pointer hover:bg-amber-50 hover:text-gray-900 hover:invert-0"
          style={isFirstPage}
          onClick={handlePreviousPage}
          href={urlPageBuilder(currentPage - 1)}
        >
          <img src={arrow} alt="" className="rotate-180 " />
        </Link>
        {pages.map((page) => (
          <Link
            href={urlPageBuilder(page)}
            key={page}
            onClick={() => handlePageChange(page)}
            className={`${
              currentPage === page ? "pagination is-active" : ""
            } px-5 py-3 rounded-xl cursor-pointer hover:bg-amber-50 hover:text-gray-900`}
          >
            {page}
          </Link>
        ))}
        <Link
          className="invert opacity-60 w-14 px-5 py-3 rounded-xl cursor-pointer hover:bg-amber-50 hover:text-gray-900 hover:invert-0"
          style={isLastPage}
          onClick={handleNextPage}
          href={urlPageBuilder(currentPage + 1)}
        >
          <img src={arrow} alt="" className=" " />
        </Link>
      </section>
    </>
  );
}
