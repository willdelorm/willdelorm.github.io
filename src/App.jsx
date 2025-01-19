import Header from "./components/Header";
import About from "./components/About";
import { List } from "@phosphor-icons/react";
import "./App.css";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative w-full bg-white flex">
      <div className="menuIcon block xl:hidden absolute top-4 right-4 p-3 rounded-full">
        <List size={32} />
      </div>
      <Header />
      <main className="w-full min-h-screen flex-1">
        <About />
        <Skills />
      </main>
    </div>
  );
}

export default App;
