import { useEffect } from "react";

export function useGetJobs({
  setLoading,
  textSearch,
  filtersSelect,
  OFFSET,
  LIMIT,
  setJobs,
  setTotal,
  setError,
  currentPage,
}) {
  useEffect(() => {
    async function getJobs() {
      try {
        setLoading(true);
        const params = new URLSearchParams();

        if (textSearch) {
          params.append("text", textSearch);
        }
        if (filtersSelect.tecnology) {
          params.append("technology", filtersSelect.tecnology);
        }
        if (filtersSelect.location) {
          params.append("type", filtersSelect.location);
        }
        if (filtersSelect.experienceLevel) {
          params.append("level", filtersSelect.experienceLevel);
        }
        params.append("offset", OFFSET);
        params.append("limit", LIMIT);

        const queryParams = params.toString();
        const response = await fetch(
          `https://jscamp-api.vercel.app/api/jobs?${queryParams}`,
        );
        const json = await response.json();
        setJobs(json.data);
        setTotal(json.total);
      } catch (error) {
        setError(`Ha ocurrido un error al cargar los empleos Error:${error}`);
        console.error("Error no se ha podido cargar los empleos: " + error);
      } finally {
        setLoading(false);
      }
    }
    getJobs();
  }, [filtersSelect, textSearch, currentPage]);
}
