// import { useState } from 'react'
import "./index.css";
import { Background } from "./components/background.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
function App() {
  const currentPath = window.location.pathname;
  let page;
  if (currentPath === "/") {
    page = <Home />;
  } else if (currentPath === "/search") {
    page = <SearchPage />;
  }
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
