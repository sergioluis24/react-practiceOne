import { useEffect, useState } from "react";

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  function navigateTo(path) {
    window.history.pushState({}, "", path);
    setCurrentPath(window.location.pathname);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
  useEffect(() => {
    const handleChangePath = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", handleChangePath);
    return () => {
      window.removeEventListener("popstate", handleChangePath);
    };
  }, []);

  return { navigateTo, currentPath };
}
