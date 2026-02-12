import { useFormContact } from "../hooks/useFormContact";
import { Toaster, toast } from "sonner";
export function Contact() {
  const {
    isValidName,
    isValidEmail,
    isValidSubject,
    isValidTextArea,
    isError,
    isSend,
    setIsError,
    setIsSend,
    handleValidationName,
    handleValidationEmail,
    handleSubject,
    handleTextArea,
    handleSubmit,
  } = useFormContact();

  if (isSend) {
    toast.success("Formulario enviado correctamente.");
    setIsSend(false);
  }
  if (isError) {
    toast.error("Ups.. Ha ocurrido un error en el envio.");
    setIsError(false);
  }
  return (
    <>
      <main className=" pb-12">
        {/* <!-- HeadlineText --> */}
        <div className=" pb-2">
          <h1 className="text-yellow-200/90  tracking-tight text-3xl font-bold leading-tight text-left">
            Ponte en Contacto
          </h1>
          <p className="text-slate-300 mt-2 text-base">
            ¿Tienes preguntas? Estamos aquí para ayudarte a conseguir tu próximo
            trabajo soñado.
          </p>
        </div>
        {/* <!-- Contact Form --> */}
        <section className="mt-4 space-y-1">
          <form onSubmit={handleSubmit}>
            {/* <!-- Full Name --> */}
            <div className="flex flex-col gap-4  py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                  Nombre Completo
                </p>
                <input
                  required
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-[#f2f4f3ba] placeholder:text-[#f2f4f3] dark:placeholder:text-[#f2f4f37d] bg-[#353c4a] backdrop-blur-sm focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753]  focus:border-primary h-14  p-3.75 text-base font-normal leading-normal transition-all"
                  placeholder="Ingresa tu nombre"
                  type="text"
                  maxLength={20}
                  onChange={handleValidationName}
                  name="name"
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
            <div className="flex flex-col gap-4  py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                  Correo Electrónico
                </p>
                <input
                  required
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-[#f2f4f3ba] placeholder:text-[#f2f4f3] dark:placeholder:text-[#f2f4f37d] bg-[#353c4a] backdrop-blur-sm focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753]  focus:border-primary h-14  p-[15px] text-base font-normal leading-normal transition-all"
                  placeholder="ejemplo@correo.com"
                  type="email"
                  onChange={handleValidationEmail}
                  name="email"
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
            <div className="flex flex-col gap-4  py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                  Asunto
                </p>
                <div className="relative">
                  <select
                    // required
                    name="subject"
                    className="form-select appearance-none flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl  focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-[#3c4753]  focus:border-primary h-14 text-slate-900 dark:text-[#f2f4f3ba] placeholder:text-[#f2f4f3] dark:placeholder:text-[#f2f4f37d] bg-[#353c4a] backdrop-blur-sm p-3.75 text-base font-normal leading-normal transition-all cursor-pointer"
                    onClick={handleSubject}
                  >
                    <option value="">Selecciona un tema</option>
                    <option value="accounts problems">
                      Problemas de Cuenta
                    </option>
                    <option value="job-postings">
                      Publicaciones de Empleos
                    </option>
                    <option value="technical support">Soporte Técnico</option>
                    <option value="feedback">Comentarios</option>
                    <option value="other">Otro</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center  text-slate-400 dark:text-slate-500">
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
            <div className="flex flex-col gap-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-slate-700 dark:text-white text-base font-medium leading-normal pb-2">
                  Mensaje
                </p>
                <textarea
                  // required
                  name="message"
                  className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl  focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300  focus:border-primary min-h-30 text-slate-900 dark:text-[#f2f4f3ba] placeholder:text-[#f2f4f3] dark:placeholder:text-[#f2f4f37d] bg-[#353c4a] backdrop-blur-sm p-3.75 text-base font-normal leading-normal transition-all"
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

            <button
              className="w-full h-14 bg-[#0466c8] text-white font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center relative gap-2 hover:scale-[101%] cursor-pointer transition hover:brightness-105"
              type="submit"
            >
              <span>Enviar Mensaje</span>
              <span className="material-symbols-outlined text-xl">send</span>
            </button>
          </form>
        </section>
        <Toaster richColors />
      </main>
    </>
  );
}
