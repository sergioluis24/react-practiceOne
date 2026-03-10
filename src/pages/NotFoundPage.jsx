import { ButtonPrimary } from "../components/ButtonPrimary.jsx";
import { IconNotFoundPage } from "./../icons/IconNotFoundPage.jsx";
export function NotFoundPage() {
  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <div className="mb-10 ">
        <IconNotFoundPage className="w-40 h-40  text-amber-300" />
      </div>
      <h2 className="text-7xl mb-6 font-extrabold">404</h2>
      <h3 className="text-5xl text-shadow-slate-200 mb-6 font-bold">
        Pagina no encontrada
      </h3>
      <p className="mb-6 text-lg  font-medium text-slate-50/70">
        Oops! Parece que entraste a la pagina equivocada
      </p>
      <ButtonPrimary>Volver al inicio</ButtonPrimary>
    </div>
  );
}
