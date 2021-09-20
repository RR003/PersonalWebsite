import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/work";
import Contact from "./components/contact/contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/menu";
import Testimonials from "./components/testimonials/testimonials";
import About from "./components/about/about";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Works />
      </div>
    </div>
  );
}

export default App;
