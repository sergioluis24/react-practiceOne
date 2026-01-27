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
      <main className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
        <nav className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center px-4 py-3 justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary size-8 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">
                  work
                </span>
              </div>
              <h2 className="text-xl font-black leading-tight tracking-tight">
                CareerFind
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <button className="flex size-10 items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="px-4 pt-10 pb-6 text-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-black leading-tight tracking-tight">
              Encuentra el trabajo de tus sueños hoy
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-base max-w-xs mx-auto">
              Descubre más de 5,000 oportunidades con postulaciones en un solo
              toque y coincidencias impulsadas por IA.
            </p>
          </div>
        </section>

        {/* SEARCH */}
        <form className="px-4 mb-10" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 bg-white dark:bg-[#1c2126] p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-primary/10">
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

            <button className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform cursor-pointer">
              <span>Buscar oportunidades</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </form>

        {/* TRUST */}
        <section className="py-8 border-y border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-white/5">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 px-4">
            Con la confianza de líderes de la industria
          </p>
        </section>

        {/* CATEGORIES */}
        <section className="py-10">
          <h3 className="text-xl font-bold px-4 mb-6">Categorías populares</h3>

          <div className="flex overflow-x-auto hide-scrollbar px-4 gap-4">
            <div className="flex flex-col items-center gap-3 min-w-[110px] p-4 bg-white dark:bg-[#1c2126] rounded-2xl border border-slate-100 dark:border-slate-800">
              <span className="text-sm font-semibold">Tecnología</span>
            </div>

            <div className="flex flex-col items-center gap-3 min-w-[110px] p-4 bg-white dark:bg-[#1c2126] rounded-2xl border border-slate-100 dark:border-slate-800">
              <span className="text-sm font-semibold">Diseño</span>
            </div>

            <div className="flex flex-col items-center gap-3 min-w-[110px] p-4 bg-white dark:bg-[#1c2126] rounded-2xl border border-slate-100 dark:border-slate-800">
              <span className="text-sm font-semibold">Marketing</span>
            </div>

            <div className="flex flex-col items-center gap-3 min-w-[110px] p-4 bg-white dark:bg-[#1c2126] rounded-2xl border border-slate-100 dark:border-slate-800">
              <span className="text-sm font-semibold">Finanzas</span>
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
      </main>
    </>
  );
}
