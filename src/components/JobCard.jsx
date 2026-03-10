import { Link } from "./Link";
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
        <button className="bg-[#0466c8] h-14 px-6 rounded-2xl hover:brightness-105 hover:scale-105 transition-all">
          Aplicar
        </button>
      </article>
    </>
  );
}
