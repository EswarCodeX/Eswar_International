import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Vegetables from "./Pages/Vegetables";
import Garland from "./Pages/Garland";
import Coming_soon from "./Pages/Coming_soon";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Details from "./Pages/Details";
import Lenis from '@studio-freight/lenis';
import { useEffect } from "react";

function App() {
  
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smoothWheel: true,
  //     smoothTouch: false,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/garland" element={<Garland />} />
        <Route path="/comingsoon" element={<Coming_soon />} />
        <Route path="/vegetables/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
