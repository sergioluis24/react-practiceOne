import { useSearchParams } from "react-router";
export function useFilterStorage(setError) {
  const [searchParams, setSearchParams] = useSearchParams();
  function getLocalStorageFilters() {
    // const params = new URLSearchParams(window.location.search);
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
    // setSearchParams((prevParams) => {
    //   const params = new URLSearchParams(prevParams);
    //   const filterUrl = {};
    //   params.set("tecnology", params.get("tecnology") ?? "");
    //   params.set("location", params.get("location") ?? "");
    //   params.set("experienceLevel", params.get("experienceLevel") ?? "");
    //   if (params.get("tecnology")) {
    //     filterUrl.tecnology = params.get("tecnology");
    //   }
    //   if (params.get("location")) {
    //     filterUrl.location = params.get("location");
    //   }
    //   if (params.get("experienceLevel")) {
    //     filterUrl.experienceLevel = params.get("experienceLevel");
    //   }
    //   console.log(filterUrl);
    //   return filterUrl;
    // });
    return {
      tecnology: "",
      location: "",
      experienceLevel: "",
      // Arreglar este bug con el useSearchParams de react router
    };
  }
  return { getLocalStorageFilters, getLocalStorageTextToFilter };
}
function buildUrlTextTofilter(params) {
  const textFilter = params.get("text");
  if (textFilter) return textFilter;
  else return "";
}
