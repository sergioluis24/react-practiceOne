import { Pagination } from "./Pagination.jsx";

export function ContentPrimary() {
  return (
    <>
      <main className="grow shrink">
        <h1>Hola</h1>
        <Pagination currtenPage={1} totalPages={5} />
      </main>
    </>
  );
}
