// import { useState } from 'react'
import "./index.css";
import { Background } from "./components/background.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { Routing } from "./components/Routing.jsx";
function App() {
  return (
    <>
      <Background>
        <Header />
        <Routing path="/" component={Home} />
        <Routing path="/search" component={SearchPage} />
        <Footer />
      </Background>
    </>
  );
}

export default App;
