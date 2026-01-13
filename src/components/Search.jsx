import { useId } from "react";

export function Search() {
  const searchId = useId(),
    tecnologyId = useId(),
    locationId = useId(),
    experienceLevelId = useId();
  return (
    <>
      <form className="mb-6">
        <section className="flex relative h-11 mb-3">
          <input
            className="bg-[#353c4a] text-[#f2f4f3] block w-full h-full py-2 px-3 border-0 rounded-md"
            type="text"
            name={searchId}
            id={searchId}
            placeholder="Buscar trabajos, empresas o habilidades"
          />
          <button
            type="submit"
            className="absolute top-[5%] right-1 bg-[#5d6471] text-[#f2f4f3] h-9/10 px-6 rounded-md cursor-pointer"
          >
            Buscar
          </button>
        </section>
        <section className="flex gap-2">
          <select
            className="bg-[#353c4a] text-[#f2f4f3] w-3/12 p-2 rounded-md"
            name={tecnologyId}
            id={tecnologyId}
          >
            <option value="">Tecnologia</option>

            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
            <option value="react">React</option>
            <option value="nodejs">Node.js</option>
          </select>
          <select
            className="bg-[#353c4a] text-[#f2f4f3] w-3/12 p-2 rounded-md"
            name={locationId}
            id={locationId}
          >
            <option value="">Ubicacion</option>

            <option value="remoto">Remoto</option>
            <option value="santiago">Santiago</option>
            <option value="lavega">La vega</option>
            <option value="santodomingo">Santo Domingo</option>
          </select>
          <select
            className="bg-[#353c4a] text-[#f2f4f3] w-4/12 p-2 rounded-md"
            name={experienceLevelId}
            id={experienceLevelId}
          >
            <option value="">Nivel de experiencia</option>

            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </section>
      </form>
    </>
  );
}
