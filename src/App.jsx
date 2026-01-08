// import { useState } from 'react'
import "./normalize.css";
import "./index.css";
import { Background } from "./components/background.jsx";
import { Header } from "./components/Header.jsx";
import { ContentPrimary } from "./components/Content-primary.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  return (
    <>
      <Background>
        <Header />
        <ContentPrimary />
        <Footer />
      </Background>
    </>
  );
}

export default App;
