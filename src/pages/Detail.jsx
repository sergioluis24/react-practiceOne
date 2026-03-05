import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { LoadingFetch } from "./../components/LoadingFetch.jsx";
import { IconJobNotFound } from "../icons/IconJobNotFound.jsx";
export function Detail() {
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

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
  console.log(job);

  if (error)
    return (
      <section className="flex flex-col justify-center items-center mt-20">
        <h2 className="text-3xl text-red-300 mb-6">
          Lo siento ese trabajo no existe :/
        </h2>
        <div>
          <IconJobNotFound className="w-40 h-40" />
        </div>
      </section>
    );

  return (
    <>
      {loading && <LoadingFetch />}

      <h2>Job {job.titulo} Detail</h2>
      <p>{id}</p>
    </>
  );
}
