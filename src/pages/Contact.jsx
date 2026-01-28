export function Contact() {
  return (
    <>
      <main class="mx-auto pb-12">
        {/* <!-- HeadlineText --> */}
        <div class="px-4 pt-8 pb-2">
          <h1 class="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight text-left">
            Ponte en Contacto
          </h1>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-base">
            ¿Tienes preguntas? Estamos aquí para ayudarte a conseguir tu próximo
            trabajo soñado.
          </p>
        </div>
        {/* <!-- Contact Form --> */}
        <section class="mt-4 space-y-1">
          {/* <!-- Full Name --> */}
          <div class="flex flex-col gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                Nombre Completo
              </p>
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753] bg-white dark:bg-[#1c2126] focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-[#9dabb8] p-[15px] text-base font-normal leading-normal transition-all"
                placeholder="Ingresa tu nombre"
                type="text"
              />
            </label>
          </div>
          {/* <!-- Email Address --> */}
          <div class="flex flex-col gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                Correo Electrónico
              </p>
              <input
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753] bg-white dark:bg-[#1c2126] focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-[#9dabb8] p-[15px] text-base font-normal leading-normal transition-all"
                placeholder="ejemplo@correo.com"
                type="email"
              />
            </label>
          </div>
          {/* <!-- Subject --> */}
          <div class="flex flex-col gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                Asunto
              </p>
              <div class="relative">
                <select class="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753] bg-white dark:bg-[#1c2126] focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-[#9dabb8] p-[15px] text-base font-normal leading-normal transition-all cursor-pointer">
                  <option value="">Selecciona un tema</option>
                  <option value="account">Problemas de Cuenta</option>
                  <option value="job-postings">Publicaciones de Empleos</option>
                  <option value="technical">Soporte Técnico</option>
                  <option value="feedback">Comentarios</option>
                  <option value="other">Otro</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 dark:text-slate-500">
                  <span class="material-symbols-outlined">unfold_more</span>
                </div>
              </div>
            </label>
          </div>
          {/* <!-- Message --> */}
          <div class="flex flex-col gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p class="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                Mensaje
              </p>
              <textarea
                class="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753] bg-white dark:bg-[#1c2126] focus:border-primary min-h-[120px] placeholder:text-slate-400 dark:placeholder:text-[#9dabb8] p-[15px] text-base font-normal leading-normal transition-all"
                placeholder="¿Cómo podemos ayudarte?"
                rows="4"
              ></textarea>
            </label>
          </div>
          {/* <!-- Submit Button --> */}
          <div class="px-4 py-6">
            <button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2">
              <span>Enviar Mensaje</span>
              <span class="material-symbols-outlined text-xl">send</span>
            </button>
          </div>
        </section>
        {/* <!-- Divider --> */}
        <div class="px-4 py-4">
          <div class="border-t border-slate-200 dark:border-slate-800"></div>
        </div>
        {/* <!-- Other ways to connect --> */}
        <section class="px-4 py-4">
          <h3 class="text-slate-900 dark:text-white text-xl font-bold mb-4">
            Otras formas de conectar
          </h3>
          <div class="space-y-3">
            <a
              class="flex items-center p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              href="#"
            >
              <div class="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                <span class="material-symbols-outlined">mail</span>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-slate-900 dark:text-white">
                  Soporte por Correo
                </p>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Respuesta en 24 horas
                </p>
              </div>
              <span class="material-symbols-outlined text-slate-400">
                chevron_right
              </span>
            </a>
            <a
              class="flex items-center p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              href="#"
            >
              <div class="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                <span class="material-symbols-outlined">help_center</span>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-slate-900 dark:text-white">
                  Centro de Ayuda
                </p>
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  Busca en nuestra base de conocimientos
                </p>
              </div>
              <span class="material-symbols-outlined text-slate-400">
                chevron_right
              </span>
            </a>
          </div>
          {/* <!-- Social Media Icons --> */}
          <div class="mt-8 flex justify-center gap-8">
            <a
              class="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <svg
                aria-hidden="true"
                class="size-6 fill-current"
                viewbox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              class="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <svg
                aria-hidden="true"
                class="size-6 fill-current"
                viewbox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
            </a>
            <a
              class="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <svg
                aria-hidden="true"
                class="size-6 fill-current"
                viewbox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
