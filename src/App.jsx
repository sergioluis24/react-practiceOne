// import { useState } from 'react'
import "./index.css";
import { Background } from "./components/background.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { useEffect, useState } from "react";
function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  let page;
  if (currentPath === "/") {
    page = <Home />;
  } else if (currentPath === "/search") {
    page = <SearchPage />;
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
  // const currentPath = window.location.pathname;
  return (
    <>
      <Background>
        <Header />
        {page}
        <Footer />
      </Background>
    </>
  );
}

export default App;
