import { useId } from "react";
import { useRouter } from "./../hooks/useRouter.jsx";

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
      <main className=" bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-[90vh]">
        {/* HERO */}
        <section className="pt-10 pb-6">
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
      <section className="mr-[-30%]  rounded-l-2xl py-14 pr-28 pl-10 border-y border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-white/5 shadow-2xs shadow-slate-50/5">
        <div className="text-right text-pretty w-3/4 ml-auto">
          <h4 className="text-balance font-bold uppercase tracking-widest text-yellow-200/90 mb-6 px-4">
            El talento tecnológico no espera oportunidades, las crea.
          </h4>
          <p className="text-slate-200/80  text-pretty">
            Aquí conectamos tus habilidades con empresas que piensan en grande,
            innovan rápido y apuestan al futuro. Menos ruido, más impacto. Tu
            próximo desafío empieza ahora.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-10  mt-20">
        <h3 className="text-xl font-bold px-4 mb-6">Tecnologias populares</h3>

        <div className="flex overflow-x-auto hide-scrollbar px-4 gap-4">
          <div className="flex flex-col items-center gap-3 min-w-[110px] p-4 bg-white dark:bg-[#1c2126] rounded-2xl border border-slate-100 dark:border-slate-800">
            <span className="text-sm font-semibold">JavaScript</span>
          </div>

          <div className="flex flex-col items-center gap-3 min-w-[110px] p-4 bg-white dark:bg-[#1c2126] rounded-2xl border border-slate-100 dark:border-slate-800">
            <span className="text-sm font-semibold">React</span>
          </div>

          <div className="flex flex-col items-center gap-3 min-w-[110px] p-4 bg-white dark:bg-[#1c2126] rounded-2xl border border-slate-100 dark:border-slate-800">
            <span className="text-sm font-semibold">Java</span>
          </div>

          <div className="flex flex-col items-center gap-3 min-w-[110px] p-4 bg-white dark:bg-[#1c2126] rounded-2xl border border-slate-100 dark:border-slate-800">
            <span className="text-sm font-semibold">Python</span>
          </div>
        </div>
      </section>

      {/* FEATURED JOBS */}
      <section className="py-6 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="flex items-center justify-between px-4 mb-6">
          <h3 className="text-xl font-bold">Empleos destacados</h3>
          <button className="text-primary text-sm font-bold flex items-center gap-1">
            Ver todos
            <span className="material-symbols-outlined text-sm">
              open_in_new
            </span>
          </button>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-12 px-4">
        <h3 className="text-xl font-bold mb-8 text-center">
          Historias de éxito
        </h3>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 px-4 bg-white dark:bg-[#1c2126] border-y border-slate-200 dark:border-slate-800">
        <h3 className="text-xl font-bold mb-10 text-center">
          Cómo funciona CareerFind
        </h3>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="bg-gradient-to-br from-primary to-blue-700 rounded-[2.5rem] p-8 text-center text-white relative overflow-hidden">
          <h3 className="text-3xl font-black leading-tight">
            Busca empleo desde cualquier lugar
          </h3>
          <p className="text-blue-50 text-base leading-relaxed">
            Recibe notificaciones instantáneas y gestiona tus postulaciones
            desde donde estés.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-400 text-xs">
          © 2025 DevJobs Inc. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
