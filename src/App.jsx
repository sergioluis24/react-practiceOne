// import { useState } from 'react'
import "./index.css";
import { Background } from "./components/background.jsx";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { Routing } from "./components/Routing.jsx";
import { Contact } from "./pages/Contact.jsx";
function App() {
  return (
    <>
      <Background>
        <Header />
        <div>
          <div className="md:max-w-[920px] md:mx-auto">
            <Routing path="/" component={Home} />
            <Routing path="/search" component={SearchPage} />
            <Routing path="/contact" component={Contact} />
          </div>
        </div>

        <Footer />
      </Background>
    </>
  );
}

export default App;
