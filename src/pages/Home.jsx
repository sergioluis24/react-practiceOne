import { useId } from "react";
import { useRouter } from "./../hooks/useRouter.jsx";
import { CardHome } from "../components/cardHome.jsx";
import { SliderJobs } from "../components/SliderJobs.jsx";
import job from "../data.json";
import figures from "../figuras_programacion.json";
import { IconJavascript } from "../icons/IconJavascript.jsx";
import { IconReact } from "../icons/IconReact.jsx";
import { IconJava } from "../icons/IconJava.jsx";
import { IconPython } from "../icons/IconPython.jsx";
import { CardAvatar } from "../components/CardAvatar.jsx";
// import "../components/home.mo"
export function Home() {
  const { navigateTo } = useRouter();
  const searchId = useId();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchTerm = formData.get(searchId);
    const encodedTerm = encodeURIComponent(searchTerm);
    const targetURL = `search?text=${encodedTerm}`;
    navigateTo(targetURL);
  };
  return (
    <>
      <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
        {/* HERO */}
        <section className="pt-30 pb-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl text-yellow-200/90 dark:text-yellow-200/90 font-black leading-tight tracking-tight text-balance">
              Encuentra el trabajo de tus sueños hoy
            </h1>
            <p className=" text-pretty  text-left max-w-3xl text-red-100/90 mb-6">
              Descubre más de 20 oportunidades con postulaciones en un solo
              toque..
            </p>
          </div>
        </section>

        {/* SEARCH */}
        <form className="" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 bg-white dark:bg-[#1c2126] p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-slate-50/5 shadow-md">
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="w-full h-14 bg-transparent pl-12 pr-4 border-none focus:ring-0 text-base placeholder:text-slate-500"
                placeholder="Puesto, palabras clave..."
                type="text"
                name={searchId}
              />
            </div>

            <div className="h-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>

            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <select className="w-full h-14 bg-transparent pl-12 pr-4 border-none focus:ring-0 text-base appearance-none text-gray-100">
                <option className="bg-[#1c2126]" value="">
                  Modalidad
                </option>
                <option className="bg-[#1c2126]" value="Presencial">
                  Presencial
                </option>
                <option className="bg-[#1c2126]" value="Remoto">
                  Remoto
                </option>
                <option className="bg-[#1c2126]" value="Hibrido">
                  Hibrido
                </option>
              </select>
            </div>

            <button className="w-full h-14 bg-[#0466c8] text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:scale-[101%] transition-transform cursor-pointer">
              <span>Buscar oportunidades</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>
      </main>

      {/* TRUST */}
      <section className="absolute left-0  w-screen  py-32  pl-10 border-y border-slate-200 dark:border-slate-800 bg-[#f6fff8]/10 dark:bg-[#f6fff8]/10 shadow-2xs shadow-slate-50/5 backdrop-blur-2xl">
        <div className="max-w-[920px] mx-auto">
          <h4 className="text-2xl font-bold text-balance uppercase tracking-widest text-yellow-200/90 mb-6 ">
            El talento tecnológico no espera oportunidades, las crea.
          </h4>
          <p className="w-[85ch] text-slate-200/80 font-medium text-pretty text-lg mb-6">
            Aquí conectamos tus habilidades con empresas que piensan en grande,
            innovan rápido y apuestan al futuro. Menos ruido, más impacto. Tu
            próximo desafío empieza ahora.
          </p>
          <p className="w-[85ch] text-slate-200/80 font-medium text-pretty text-lg">
            Aquí no se trata solo de cubrir vacantes, sino de acelerar carreras.
            Roles con propósito, equipos que valoran el criterio técnico y
            proyectos donde tu código mueve el negocio. Si vas a dar el
            siguiente paso, que sea uno que realmente sume.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-10  mt-[600px] mb-26">
        <h3 className="text-3xl font-bold px-4 mb-10">Tecnologias populares</h3>

        <div className="flex px-4 gap-6">
          <span className="flex flex-row items-center align-middle cursor-pointer flex flex-col items-center min-w-[110px] px-8 py-3 bg-slate-300/70 shadow-md shadow-slate-300/30 backdrop-blur-md  hover:shadow-slate-300/40 hover:scale-[103%] transition-all text-[#1c2126] rounded-3xl text-md font-semibold">
            <IconJavascript />
            JavaScript
          </span>
          <span className="flex flex-row items-center align-middle cursor-pointer flex flex-col items-center min-w-[110px] px-8 py-3 bg-slate-300/70 shadow-md shadow-slate-300/30 backdrop-blur-md  hover:shadow-slate-300/40 hover:scale-[103%] transition-all text-[#1c2126] rounded-3xl text-md font-semibold">
            <IconReact />
            React
          </span>
          <span className="flex flex-row items-center align-middle cursor-pointer flex flex-col items-center min-w-[110px] px-8 py-3 bg-slate-300/70 shadow-md shadow-slate-300/30 backdrop-blur-md  hover:shadow-slate-300/40 hover:scale-[103%] transition-all text-[#1c2126] rounded-3xl text-md font-semibold">
            <IconJava />
            Java
          </span>
          <span className="flex flex-row items-center align-middle cursor-pointer flex flex-col items-center min-w-[110px] px-8 py-3 bg-slate-300/70 shadow-md shadow-slate-300/30 backdrop-blur-md  hover:shadow-slate-300/40 hover:scale-[103%] transition-all text-[#1c2126] rounded-3xl text-md font-semibold">
            <IconPython />
            Python
          </span>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="py-6 bg-slate-100/50 dark:bg-slate-900/30 mb-10">
        <div className=" flex items-center justify-between px-4 mb-26">
          <h3 className="text-3xl font-bold">Empleos destacados</h3>
          <button className="cursor-pointer text-yellow-300/90 text-md font-bold flex items-center gap-1 hover:text-shadow-sm hover:text-shadow-yellow-300/30 hover:-translate-y-1 transition">
            Ver todos
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
          </button>
        </div>

        <SliderJobs>
          {/* JOB CARD */}
          {job.slice(0, 5).map((job) => (
            <CardHome job={job} />
          ))}
        </SliderJobs>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-12 px-4 ">
        <h3 className="text-3xl font-bold mb-20">Historias de éxito</h3>
        <div className="grid grid-cols-2 gap-4">
          {figures.figuras_clave_programacion.map((figure, index) => (
            <CardAvatar figure={figure} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}
