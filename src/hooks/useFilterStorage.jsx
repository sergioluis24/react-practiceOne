export function useFilterStorage(setError) {
  function getLocalStorageFilters() {
    const params = new URLSearchParams(window.location.search);
    if (params) return buildUrlFilters(params);
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
  function buildUrlFilters(params) {
    const filterUrl = {};
    const filtersTecnology = params.get("tecnology");
    const filtersLocation = params.get("location");
    const filtersExperienceLevel = params.get("experienceLevel");
    if (filtersTecnology) {
      filterUrl.tecnology = filtersTecnology;
    }
    if (filtersLocation) {
      filterUrl.location = filtersLocation;
    }
    if (filtersExperienceLevel) {
      filterUrl.experienceLevel = filtersExperienceLevel;
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
