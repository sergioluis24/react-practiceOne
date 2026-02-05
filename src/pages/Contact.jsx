import { useState } from "react";

export function Contact() {
  const [isValidName, setIsValidName] = useState({
    valid: false,
    empty: false,
    charge: true,
  });
  const [isValidEmail, setIsValidEmail] = useState({
    valid: false,
    empty: false,
    charge: true,
  });
  const [isValidSubject, setIsValidSubject] = useState({
    empty: false,
    charge: true,
  });
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isValidTextArea, setIsValidTextArea] = useState({
    overflowed: false,
    charge: true,
  });
  const handleValidationName = (event) => {
    let input = event.target.value;
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/;
    if (!nameRegex.test(input)) {
      setIsValidName({
        valid: false,
        empty: true,
        charge: false,
      });
    } else
      setIsValidName({
        valid: true,
        empty: true,
        charge: false,
      });
    if (!input)
      setIsValidName({
        valid: true,
        empty: false,
        charge: false,
      });
  };
  const handleValidationEmail = (event) => {
    let input = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input)) {
      setIsValidEmail({
        valid: false,
        empty: true,
        charge: false,
      });
    } else
      setIsValidEmail({
        valid: true,
        empty: true,
        charge: false,
      });
    if (!input)
      setIsValidEmail({
        valid: true,
        empty: false,
        charge: false,
      });
  };
  const handleSubject = (event) => {
    if (event.target.value !== "") {
      setIsValidSubject({
        empty: true,
        charge: false,
      });
    } else {
      setIsValidSubject({
        empty: false,
        charge: false,
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      isValidName.valid &&
      isValidName.empty &&
      isValidEmail.valid &&
      isValidEmail.empty &&
      isValidSubject.empty &&
      isValidTextArea.overflowed
    ) {
      console.log("Se ha enviado el formulario");
    }
  };
  const handleTextArea = (event) => {
    const MAX = 255;
    if (event.target.value.length >= MAX) {
      setIsValidTextArea({
        charge: false,
      });

      return;
    } else
      setIsValidTextArea({
        overflowed: true,
        charge: false,
      });
  };
  return (
    <>
      <main className="mx-auto pb-12">
        {/* <!-- HeadlineText --> */}
        <div className="px-4 pt-8 pb-2">
          <h1 className="text-yellow-200/90  tracking-tight text-3xl font-bold leading-tight text-left">
            Ponte en Contacto
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-base">
            ¿Tienes preguntas? Estamos aquí para ayudarte a conseguir tu próximo
            trabajo soñado.
          </p>
        </div>
        {/* <!-- Contact Form --> */}
        <section className="mt-4 space-y-1">
          <form onSubmit={handleSubmit}>
            {/* <!-- Full Name --> */}
            <div className="flex flex-col gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                  Nombre Completo
                </p>
                <input
                  // required
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753] bg-white dark:bg-[#1c2126] focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-[#9dabb8] p-3.75 text-base font-normal leading-normal transition-all"
                  placeholder="Ingresa tu nombre"
                  type="text"
                  maxLength={20}
                  onChange={handleValidationName}
                />
                {!isValidName.valid && !isValidName.charge && (
                  <span className={` text-red-400/90 mt-4`}>
                    El nombre solo puede contener letras y espacios. No se
                    permiten números ni símbolos...
                  </span>
                )}
                {!isValidName.empty && !isValidName.charge && (
                  <span className={` text-red-400/90 mt-4`}>
                    El campo nombre no puede quedar vacio..
                  </span>
                )}
              </label>
            </div>
            {/* <!-- Email Address --> */}
            <div className="flex flex-col gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                  Correo Electrónico
                </p>
                <input
                  // required
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753] bg-white dark:bg-[#1c2126] focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-[#9dabb8] p-[15px] text-base font-normal leading-normal transition-all"
                  placeholder="ejemplo@correo.com"
                  type="email"
                  onChange={handleValidationEmail}
                />
                {!isValidEmail.valid && !isValidEmail.charge && (
                  <span className={` text-red-400/90 mt-4`}>
                    Ingresa un correo válido con el formato nombre@dominio.com.
                  </span>
                )}
                {!isValidEmail.empty && !isValidEmail.charge && (
                  <span className={` text-red-400/90 mt-4`}>
                    El campo email no puede quedar vacio..
                  </span>
                )}
              </label>
            </div>
            {/* <!-- Subject --> */}
            <div className="flex flex-col gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                  Asunto
                </p>
                <div className="relative">
                  <select
                    // required
                    className="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753] bg-white dark:bg-[#1c2126] focus:border-primary h-14 placeholder:text-slate-400 dark:placeholder:text-[#9dabb8] p-[15px] text-base font-normal leading-normal transition-all cursor-pointer"
                    onClick={handleSubject}
                  >
                    <option value="">Selecciona un tema</option>
                    <option value="account">Problemas de Cuenta</option>
                    <option value="job-postings">
                      Publicaciones de Empleos
                    </option>
                    <option value="technical">Soporte Técnico</option>
                    <option value="feedback">Comentarios</option>
                    <option value="other">Otro</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 dark:text-slate-500">
                    <span className="material-symbols-outlined">
                      unfold_more
                    </span>
                  </div>
                </div>
              </label>
              {/* Error */}
              {!isValidSubject.empty && !isValidSubject.charge && (
                <span className={` text-red-400/90 transition`}>
                  Por favor, ingresa un asunto para tu mensaje.
                </span>
              )}
            </div>
            {/* <!-- Message --> */}
            <div className="flex flex-col gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                  Mensaje
                </p>
                <textarea
                  // required
                  className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753] bg-white dark:bg-[#1c2126] focus:border-primary min-h-[120px] placeholder:text-slate-400 dark:placeholder:text-[#9dabb8] p-[15px] text-base font-normal leading-normal transition-all"
                  placeholder="¿Cómo podemos ayudarte?"
                  rows="4"
                  maxLength={255}
                  onChange={handleTextArea}
                ></textarea>
              </label>
              {!isValidTextArea.overflowed && !isValidTextArea.charge && (
                <span className={` text-amber-200 `}>
                  Solo se puede ingresar 255 caracteres en el mensaje
                </span>
              )}
            </div>
            {/* <!-- Submit Button --> */}
            <div className="px-4 py-6">
              <button
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                <span>Enviar Mensaje</span>
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
            </div>
          </form>
        </section>
        {/* <!-- Divider --> */}
        <div className="px-4 py-4">
          <div className="border-t border-slate-200 dark:border-slate-800"></div>
        </div>
        {/* <!-- Other ways to connect --> */}
        <section className="px-4 py-4">
          <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-4">
            Otras formas de conectar
          </h3>
          <div className="space-y-3">
            <a
              className="flex items-center p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              href="#"
            >
              <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Soporte por Correo
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Respuesta en 24 horas
                </p>
              </div>
              <span className="material-symbols-outlined text-slate-400">
                chevron_right
              </span>
            </a>
            <a
              className="flex items-center p-4 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              href="#"
            >
              <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4">
                <span className="material-symbols-outlined">help_center</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Centro de Ayuda
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Busca en nuestra base de conocimientos
                </p>
              </div>
              <span className="material-symbols-outlined text-slate-400">
                chevron_right
              </span>
            </a>
          </div>
          {/* <!-- Social Media Icons --> */}
          <div className="mt-8 flex justify-center gap-8">
            <a
              className="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <svg
                ariaHidden="true"
                className="size-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              className="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <svg
                ariaHidden="true"
                className="size-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
            </a>
            <a
              className="text-slate-400 hover:text-primary transition-colors"
              href="#"
            >
              <svg
                ariaHidden="true"
                className="size-6 fill-current"
                viewBox="0 0 24 24"
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
