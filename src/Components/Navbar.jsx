import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [servicesopen, setservicesopen] = useState(false);
  const [fix, setfix] = useState(false);

  function setfixed() {
    if (window.scrollY >= 1) {
      setfix(true);
    } else {
      setfix(false);
    }
  }

  window.addEventListener("scroll", setfixed);
  return (
    <>
      <div
        className={
          fix
            ? "flex justify-between px-[5%] w-full text-lg mt-8 mb-3 top-auto"
            : "flex justify-between px-[5%] w-full text-lg mt-8 mb-3"
        }
      >
        <div className="font-sans ">ESWAR INTERNATIONAL</div>
        <div className="font-sans list-none flex gap-8">
          <li className="  cursor-pointer">
            <Link to="/" className="no-underline text-black hover:text-[#3F72AF] ">HOME</Link>{" "}
          </li>
          <li className=" cursor-pointer">
            <Link to="/About" className="no-underline text-black hover:text-[#3F72AF] ">ABOUT</Link>{" "}
          </li>
          <li
            className=" cursor-pointer"
            onClick={() => setservicesopen(!servicesopen)}
          >
            {" "}
            <Link className="no-underline text-black hover:text-[#3F72AF] ">SERVICES &#11167;</Link>{" "}
          </li>
          <li className="  cursor-pointer">
            <Link to="/Contact" className="no-underline text-black hover:text-[#3F72AF] "> CONTACT</Link>
          </li>
          <li className="  cursor-pointer">
            <Link to="/ComingSoon" className="no-underline text-black hover:text-[#3F72AF] ">COMING&nbsp;SOON</Link>{" "}
          </li>
        </div>
      </div>
      {servicesopen && (
        <div className="absolute z-10 bg-white h-24 w-36 ml-[69%] -mt-2">
          <div className="h-1 bg-[#112D4E]"></div>
          <div className="font-sans px-6 py-2 hover:bg-[#3F72AF] cursor-pointer">
            <Link to="/Vegetables" className="no-underline text-black hover:text-[#F9F7F7] ">VEGETABLES</Link>
          </div>
          <div className="font-sans px-6 py-2 hover:bg-[#3F72AF] cursor-pointer ">
            <Link to="/Garland" className="no-underline text-black hover:text-[#F9F7F7] ">GARLAND</Link>
          </div>
        </div>
      )}
    </>
  );
}
