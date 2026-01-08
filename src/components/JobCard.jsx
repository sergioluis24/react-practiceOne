export function JobCard({ job }) {
  return (
    <>
      <article className="flex justify-between border-b-[.1px] border-gray-50">
        <div>
          <h3 className="text-2xl mb-1">
            <b>{job.titulo}</b>
          </h3>
          <small className="text-lg">
            {job.empresa} | {job.ubicacion}
          </small>
          <p className="">{job.descripcion}</p>
        </div>
        <button className="">Aplicar</button>
      </article>
    </>
  );
}
