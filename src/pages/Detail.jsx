import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LoadingFetch } from "./../components/LoadingFetch.jsx";
import { IconJobNotFound } from "../icons/IconJobNotFound.jsx";
import { ButtonPrimary } from "../components/ButtonPrimary.jsx";
import snarkdown from "snarkdown";

function JobNotFound({ navigate }) {
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <div className="mb-10 ">
        <IconJobNotFound className="w-40 h-40 text-amber-300" />
      </div>
      <h2 className="text-7xl mb-6 font-extrabold">404</h2>
      <h3 className="text-5xl text-shadow-slate-200 mb-6 font-bold">
        Empleo no encontrado
      </h3>
      <p className="mb-6 text-lg  font-medium text-slate-50/70">
        Oops! Parece que entraste al empleo equivocado
      </p>
      <ButtonPrimary size="md" onClick={() => navigate("/")}>
        Volver al inicio
      </ButtonPrimary>
    </div>
  );
}
function SpecialSection({ title, content }) {
  const html = snarkdown(content ?? "");
  return (
    <>
      <h3 className="text-3xl">{title}</h3>
      <div className="" dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
}
export function Detail() {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jscamp-api.vercel.app/api/jobs/${id}`)
      .then((response) => {
        setLoading(true);
        if (!response.ok) throw new Error("Job not found");
        return response;
      })
      .then((response) => response.json())
      .then((json) => setJob(json))
      .catch((error) => {
        setError("Not found");
        console.log("Ha ocurrido un error obteniendo el trabajo " + error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  if (error) return <JobNotFound navigate={navigate} />;
  if (!job) return null;
  return (
    <>
      {loading && <LoadingFetch />}
      <section>
        <div className="bread-crumb mb-10">
          <p className="text-slate-100/70 ">
            Empleos /{" "}
            <span className="text-slate-100  ">{capitalize(job.titulo)}</span>
          </p>
        </div>
        <article className="w-[95%] mx-auto">
          <header className="flex  flex-row  justify-between mb-6">
            <div>
              <h2 className="text-4xl text-slate-100 font-bold mb-4">
                {capitalize(job.titulo)}
              </h2>
              <p className="text-slate-50/60 text-lg font-normal">
                <span className="mr-2">{capitalize(job.empresa)}</span>

                <span>·{capitalize(job.data.modalidad)}</span>
              </p>
            </div>
            <ButtonPrimary size="md">Aplicar ahora</ButtonPrimary>
          </header>
          <main>
            <h3 className="text-3xl text-slate-100 font-bold mb-4">
              Descripcion del puesto
            </h3>
            <p className="text-pretty text-slate-100/70 text-lg">
              {job.content.description}
            </p>
            <SpecialSection
              title="Responsabilidades"
              content={job.content.responsibilities}
            />
          </main>
        </article>
      </section>
    </>
  );
}
