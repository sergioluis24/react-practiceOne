import { useId } from "react";
import { useState } from "react";
export function Search({ onSearch, onChangeSelect }) {
  const searchId = useId(),
    tecnologyId = useId(),
    locationId = useId(),
    experienceLevelId = useId(),
    salayId = useId();

  const [focusedField, setfocusedField] = useState(null);
  const focusFieldClass = "border-[#4f46e5] outline-[#4f46e5]";
  function handleChangeSearch(event) {
    onSearch(event.target.value);
  }
  function handleChangeSelect(event) {
    const formData = new FormData(event.currentTarget);
    const filters = {
      tecnology: formData.get(tecnologyId),
      location: formData.get(locationId),
      experienceLevel: formData.get(experienceLevelId),
      salary: parseInt(formData.get(salayId)),
    };
    onChangeSelect(filters);
  }
  return (
    <>
      <form className="mb-6" onChange={handleChangeSelect}>
        <section className="flex relative h-11 mb-3">
          <input
            className={`bg-[#353c4a] text-[#f2f4f3] block w-full h-full py-2 px-3 border-0 rounded-md transition-all ${focusedField === "title" ? focusFieldClass : ""}`}
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
            className="hidden pointer-events-none absolute top-[5%] right-1 bg-[#5d6471] text-[#f2f4f3] h-9/10 px-6 rounded-md cursor-pointer"
          >
            Buscar
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
            <option value="">Tecnologia</option>

            <option value="JavaScript">Javascript</option>
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
            <option value="Semi Senior">Semi Senior</option>
            <option value="Senior">Senior</option>
          </select>
          <input
            placeholder="30000"
            type="number"
            name={salayId}
            id={salayId}
            min="0"
            step="1000"
            className={`bg-[#353c4a] text-[#f2f4f3] w-4/12 p-2 rounded-md transition-all ${focusedField === "experienceLevel" ? focusFieldClass : ""}`}
            onFocus={() => setfocusedField("experienceLevel")}
            onBlur={() => setfocusedField(null)}
          />
        </section>
      </form>
    </>
  );
}
