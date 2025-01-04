import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import Vegetables from "./Pages/Vegetables";
import Garland from "./Pages/Garland";
import Coming_soon from "./Pages/Coming_soon";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Vegetables" element={<Vegetables />} />
        <Route path="/Garland" element={<Garland />} />
        <Route path="/Comingsoon" element={<Coming_soon />} />
      </Routes>
    </>
  );
}

export default App;
