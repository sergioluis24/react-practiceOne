import { useSearchParams } from "react-router";
export function useFilterStorage(setError) {
  const [searchParams, setSearchParams] = useSearchParams();
  function getLocalStorageFilters() {
    if (searchParams) return buildUrlFilters();
    else {
      try {
        if (localStorage.getItem("Debjobsfilters")) {
          const filters = JSON.parse(localStorage.getItem("Debjobsfilters"));
          return filters;
        } else
          return {
            tecnology: "",
            location: "",
            experienceLevel: "",
          };
      } catch (error) {
        setError(error);
        console.warn("Error al obtener localstorage: " + error);
      }
    }
  }
  function getLocalStorageTextToFilter() {
    const params = new URLSearchParams(window.location.search);
    if (params) return buildUrlTextTofilter(params);
    else {
      try {
        if (localStorage.getItem("DebjobsTextFilter")) {
          const textToFilter = JSON.parse(
            localStorage.getItem("DebjobsTextFilter"),
          );
          return textToFilter;
        } else return "";
      } catch (error) {
        setError(error);
        console.warn("Error al obtener localstorage: " + error);
      }
    }
  }
  function buildUrlFilters() {
    const filterUrl = {
      tecnology: "",
      location: "",
      experienceLevel: "",
    };
    if (searchParams.get("tecnology")) {
      filterUrl.tecnology = searchParams.get("tecnology") ?? "";
    }
    if (searchParams.get("location")) {
      filterUrl.location = searchParams.get("location") ?? "";
    }
    if (searchParams.get("experienceLevel")) {
      filterUrl.experienceLevel = searchParams.get("experienceLevel") ?? "";
    }
    return filterUrl;
  }
  return { getLocalStorageFilters, getLocalStorageTextToFilter };
}
function buildUrlTextTofilter(params) {
  const textFilter = params.get("text");
  if (textFilter) return textFilter;
  else return "";
}
