// import { useState } from 'react'
import "./App.css";
import "./index.css";
import Background from "./components/background";
import Header from "./components/header";
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
