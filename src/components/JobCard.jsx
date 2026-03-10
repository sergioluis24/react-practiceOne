import { ButtonPrimary } from "./ButtonPrimary";
import { Link } from "./Link.jsx";
export function JobCard({ job, isLast }) {
  return (
    <>
      <article
        className={`flex justify-between items-center  ${
          !isLast ? "border-b-[.1px] border-slate-50/50" : ""
        } px-8 py-12`}
      >
        <div className="w-[%100]">
          <Link
            href={`/detail/${job.id}`}
            className="text-2xl mb-1 hover:underline"
          >
            <b>{job.titulo}</b>
          </Link>
          <small className="text-lg mb-2 block">
            {job.empresa} | {job.ubicacion}
          </small>
          <p className="w-10/12">{job.descripcion}</p>
        </div>
        <div className="flex flex-col gap-4">
          <Link href={`/detail/${job.id}`}>
            <ButtonPrimary
              size="sm"
              bg="bg-gray-700"
              shadow="shadow-gray-700/80"
            >
              Ver detalles
            </ButtonPrimary>
          </Link>
          <ButtonPrimary size="sm">Aplicar</ButtonPrimary>
        </div>
      </article>
    </>
  );
}
