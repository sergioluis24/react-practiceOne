import { IconNotFoundPage } from "./../icons/IconNotFoundPage.jsx";
export function NotFoundPage() {
  return (
    <div className="flex justify-center items-center flex-col ">
      <h2 className="text-2xl mb-10 text-red-300">
        Lo siento la pagina que indico no ha sido encontrada..
      </h2>
      <div className="">
        <IconNotFoundPage className="w-40 h-40" />
      </div>
    </div>
  );
}
