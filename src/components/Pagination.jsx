import arrow from "./../assets/right-arrow.png";
export function Pagination({ currentPage = 1, totalPages = 5 }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <section className="flex items-center">
        <a className="invert opacity-60 w-14 px-5 py-3 rounded-xl cursor-pointer hover:bg-amber-50 hover:text-gray-900 hover:invert-0">
          <img src={arrow} alt="" className="rotate-180 " />
        </a>
        {pages.map((page) => (
          <a
            key={page}
            className="px-5 py-3 rounded-xl cursor-pointer hover:bg-amber-50 hover:text-gray-900"
          >
            {page}
          </a>
        ))}
      </section>
    </>
  );
}
