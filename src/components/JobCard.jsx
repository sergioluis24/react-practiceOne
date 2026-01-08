export function JobCard({ job }) {
  return (
    <>
      <article>
        <div>
          <h3>{job.titulo}</h3>
          <small>
            {job.empresa} | {job.modalidad}
          </small>
          <p>{job.descripcion}</p>
        </div>
        <button className="">Aplicar</button>
      </article>
    </>
  );
}
