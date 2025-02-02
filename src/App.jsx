import { useState } from "react";
import { List } from "@phosphor-icons/react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  function handleClick() {
    setIsVisible(!isVisible);

    const header = document.getElementsByTagName("header")[0];
    header.style.left = isVisible ? 0 : "-100%";
  }

  return (
    <div className="relative w-full bg-white flex">
      <div
        className="menuIcon block xl:hidden fixed top-4 right-4 p-3 rounded-full z-10"
        onClick={handleClick}
      >
        <List size={32} />
      </div>
      <Header handleClick={handleClick} />
      <main className="w-full min-h-screen xl:ml-[300px] flex-1">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
