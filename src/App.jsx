// import { useState } from 'react'
import "./index.css";
import { Background } from "./components/background.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { Contact } from "./pages/Contact.jsx";
import { ButtonBack } from "./components/ButtonBack.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";
import { Detail } from "./pages/Detail.jsx";
import { Modal } from "flowbite-react";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Background>
        <Header />
        <div className="shrink grow">
          <div className="md:max-w-230 md:mx-auto ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>

        <Footer />
        <ButtonBack />
      </Background>
    </>
  );
}

export default App;
