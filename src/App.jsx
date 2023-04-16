import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

export default function App() {
  const [dark, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
    if (dark) {
      document.body.style.backgroundColor = "#263238";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#263238";
    }
  };

  return (
    <div className="App">
      <Header onClick={toggleTheme} dark={dark} />
      <Home dark={dark} />
      <About dark={dark} />
      <Experience dark={dark} />
      <Projects dark={dark} />
      <Testimonial dark={dark} />
      <Contact dark={dark} />
    </div>
  );
}
