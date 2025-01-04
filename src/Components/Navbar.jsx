import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menuopen from "./Menuopen";
import logo from "../assets/logo_main.png";

export default function Navbar() {
  const [servicesopen, setservicesopen] = useState(false);
  const [menuopen, setmenuopen] = useState(false);
  const [fix, setfix] = useState(false);
  const location = useLocation(); // Get the current route

  function setfixed() {
    if (window.scrollY >= 1) {
      setfix(true);
    } else {
      setfix(false);
    }
  }

  window.addEventListener("scroll", setfixed);

  return (
    <div className="z-50">
      <div
        className={`flex justify-between px-[5%] w-full text-lg mt-8 mb-3 ${
          fix ? "top-auto" : ""
        }`}
      >
        {/*<div><img src={logo} alt="" /></div>*/}
        <div className="font-sans ">ESWAR INTERNATIONAL</div>
        <div className="sm:hidden flex" onClick={() => setmenuopen(!menuopen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <ul className="font-sans list-none gap-8 hidden sm:flex">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT", path: "/About" },
          ].map((item) => (
            <li key={item.path} className="cursor-pointer">
              <Link
                to={item.path}
                className={`no-underline hover:text-[#3F72AF] ${
                  location.pathname === item.path
                    ? "text-[#3F72AF]"
                    : "text-black"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* SERVICES - Placed at third position */}
          <li
            className="cursor-pointer"
            onClick={() => setservicesopen(!servicesopen)}
          >
            <Link className="no-underline flex items-center hover:text-[#3F72AF]">
              SERVICES{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Link>
          </li>

          {[
            { name: "CONTACT", path: "/Contact" },
            { name: "COMING SOON", path: "/ComingSoon" },
          ].map((item) => (
            <li key={item.path} className="cursor-pointer">
              <Link
                to={item.path}
                className={`no-underline hover:text-[#3F72AF] ${
                  location.pathname === item.path
                    ? "text-[#3F72AF]"
                    : "text-black"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {servicesopen && (
        <div className="absolute z-10 bg-white h-24 w-36 ml-[70%] -mt-4">
          <div className="h-1 bg-[#112D4E]"></div>
          {[
            { name: "VEGETABLES", path: "/Vegetables" },
            { name: "GARLAND", path: "/Garland" },
          ].map((item) => (
            <div
              key={item.path}
              className="font-sans px-6 py-2 hover:bg-[#3F72AF] cursor-pointer"
            >
              <Link
                to={item.path}
                className={`no-underline hover:text-[#F9F7F7] ${
                  location.pathname === item.path
                    ? "text-[#3F72AF]"
                    : "text-black"
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      )}

      <div className="sm:hidden">
        <Menuopen menuopen={menuopen} setmenuopen={setmenuopen} />
      </div>
    </div>
  );
}
