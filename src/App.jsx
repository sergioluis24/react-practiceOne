import "./App.css";
import "./index.css";
import { Background } from "./components/background.jsx";
// import { Header } from "./components/Header.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
function App() {
  return (
    <>
      <Background>
        <Header />
        <main className="grow shrink">
          <h1>Hola</h1>
        </main>
        <Footer />
      </Background>
    </>
  );
}

export default App;
