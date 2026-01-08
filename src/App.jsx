// import { useState } from 'react'
import "./normalize.css";
import "./index.css";
import Background from "./components/background";
import Header from "./components/Header.jsx";
function App() {
  return (
    <>
      <Background>
        <Header />
        <main>
          <h1>Hola</h1>
        </main>
      </Background>
    </>
  );
}

export default App;
