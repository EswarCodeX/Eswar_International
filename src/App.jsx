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

function App() {
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
