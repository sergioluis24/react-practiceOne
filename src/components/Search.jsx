import { useId, useState } from "react";

export function Search({
  onSearch,
  onChangeSelect,
  onReset,
  onChangeResults,
  filterLength,
  filterStorage,
}) {
  const [focusedField, setfocusedField] = useState(null);
  const focusFieldClass = "border-[#4f46e5] outline-[#4f46e5]";

  const searchId = useId(),
    tecnologyId = useId(),
    locationId = useId(),
    experienceLevelId = useId();
  const handleChangeSearch = (e) => {
    onSearch(e.target.value);
  };

  const handleChangeSelect = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const filters = {
      tecnology: formData.get(tecnologyId),
      location: formData.get(locationId),
      experienceLevel: formData.get(experienceLevelId),
    };
    onChangeSelect(filters);
  };

  return (
    <>
      <form className="mb-6" onSubmit={handleChangeSelect}>
        <section className="flex relative h-11 mb-3">
          <input
            className={`bg-[#353c4a] text-[#f2f4f3] block w-full h-full py-2 px-3 border-0 rounded-md transition-all  ${focusedField === "title" ? focusFieldClass : ""}`}
            type="text"
            name={searchId}
            id={searchId}
            placeholder="Buscar trabajos, empresas o habilidades"
            onChange={handleChangeSearch}
            onFocus={() => setfocusedField("title")}
            onBlur={() => setfocusedField(null)}
          />
          <button
            type="submit"
            className={`${filterLength ? "translate-x-0" : "translate-x-[140px]"} transition absolute top-[5%] right-40 bg-[#0466c8] text-[#f2f4f3] h-9/10 px-6 rounded-md cursor-pointer sm:right-36 sm:px-2`}
          >
            Aplicar filtros
          </button>
          <button
            type="reset"
            className={`${filterLength ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-10 opacity-0 pointer-events-none"} transition absolute top-[5%] right-1 bg-[#5d6471] text-[#f2f4f3] h-9/10 px-6 sm:px-4 rounded-md cursor-pointer`}
            onClick={onReset}
          >
            Limpiar filtros
          </button>
        </section>
        <section className="flex gap-2">
          <select
            className={`bg-[#353c4a] text-[#f2f4f3] w-3/12 p-2 rounded-md transition-all ${focusedField === "tecnology" ? focusFieldClass : ""}`}
            name={tecnologyId}
            id={tecnologyId}
            onFocus={() => setfocusedField("tecnology")}
            onBlur={() => setfocusedField(null)}
          >
            {/* Quede aqui, tengo que renderizar segun si hay filtros o no en el localstorage las opciones. */}
            {/* Ademas tengo que renderizar cuantos filtros activos hay */}
            {/* {filterStorage && <option value="">Tecnologia</option>} */}
            <option value="">Tecnologia</option>
            <option value="JavaScript">Javascript</option>
            <option value="Azure">Azure</option>
            <option value="Kubernetes">Kubernetes</option>
            <option value="Figma">Figma</option>
            <option value="Mysql">Mysql</option>
            <option value="tailwind">tailwind</option>
            <option value="MongoDB">MongoDB</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="AWS">AWS</option>
            <option value="Java">Java</option>
            <option value="Express">Express</option>
            <option value="Docker">Docker</option>
            <option value="Python">Python</option>
          </select>
          <select
            className={`bg-[#353c4a] text-[#f2f4f3] w-3/12 p-2 rounded-md transition-all ${focusedField === "location" ? focusFieldClass : ""}`}
            name={locationId}
            id={locationId}
            onFocus={() => setfocusedField("location")}
            onBlur={() => setfocusedField(null)}
          >
            <option value="">Ubicacion</option>

            <option value="Remoto">Remoto</option>
            <option value="Presencial">Presencial</option>
            <option value="Híbrido">Híbrido</option>
          </select>
          <select
            className={`bg-[#353c4a] text-[#f2f4f3] w-4/12 p-2 rounded-md transition-all ${focusedField === "experienceLevel" ? focusFieldClass : ""}`}
            name={experienceLevelId}
            id={experienceLevelId}
            onFocus={() => setfocusedField("experienceLevel")}
            onBlur={() => setfocusedField(null)}
          >
            <option value="">Nivel de experiencia</option>

            <option value="Junior">Junior</option>
            <option value="mid-level">Mid-level</option>
            <option value="senior">Senior</option>
          </select>
        </section>

        <h3 className="mt-6 text-xl">
          {onChangeResults.isSearch && (
            <>
              <span className="font-light opacity-60"> Se han encontrado</span>{" "}
              <strong className="opacity-100">{onChangeResults.total}</strong>{" "}
              <span className="font-light opacity-60">trabajos</span>
            </>
          )}
        </h3>
      </form>
    </>
  );
}
