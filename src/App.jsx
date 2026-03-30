// import { useState } from 'react'
import "./index.css";
import { lazy, Suspense } from "react";
import { Background } from "./components/background.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { ProtectedRute } from "./components/ProtectedRute.jsx";
const Home = lazy(() => import("./pages/Home.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Detail = lazy(() => import("./pages/Detail.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const ProfilePage = lazy(() => import("./pages/ProfilePage.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));

import { ButtonBack } from "./components/ButtonBack.jsx";
import { Modal } from "flowbite-react";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Background>
        <Header />
        <Suspense fallback={<p>Cargando pagina...</p>}>
          <div className="shrink grow">
            <div className="md:max-w-230 md:mx-auto ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRute>
                      <ProfilePage />
                    </ProtectedRute>
                  }
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </div>
        </Suspense>

        <Footer />
        <ButtonBack />
      </Background>
    </>
  );
}

export default App;
