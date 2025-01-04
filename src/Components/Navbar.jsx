import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menuopen from "./Menuopen";

export default function Navbar() {
  const [servicesopen, setservicesopen] = useState(false);
  const [menuopen, setmenuopen] = useState(false);
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
    <div className="z-50">
      <div
        className={
          fix
            ? "flex justify-between px-[5%] w-full text-lg mt-8 mb-3 top-auto"
            : "flex justify-between px-[5%] w-full text-lg mt-8 mb-3"
        }
      >
        <div className="font-sans ">ESWAR INTERNATIONAL</div>
        <div
          className="sm:hidden flex  "
          onClick={() => setmenuopen(!menuopen)}
        >
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
          <li className="  cursor-pointer">
            <Link
              to="/"
              className="no-underline text-black hover:text-[#3F72AF] "
            >
              HOME
            </Link>{" "}
          </li>
          <li className=" cursor-pointer">
            <Link
              to="/about"
              className="no-underline text-black hover:text-[#3F72AF] "
            >
              ABOUT
            </Link>{" "}
          </li>
          <li
            className=" cursor-pointer"
            onClick={() => setservicesopen(!servicesopen)}
          >
            {" "}
            <Link className="no-underline text-black hover:text-[#3F72AF] flex ">
              SERVICES{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </Link>{" "}
          </li>
          <li className="  cursor-pointer">
            <Link
              to="/Contact"
              className="no-underline text-black hover:text-[#3F72AF] "
            >
              {" "}
              CONTACT
            </Link>
          </li>
          <li className="  cursor-pointer">
            <Link
              to="/ComingSoon"
              className="no-underline text-black hover:text-[#3F72AF] "
            >
              COMING&nbsp;SOON
            </Link>{" "}
          </li>
        </ul>
      </div>
      {servicesopen && (
        <div className="absolute z-10 bg-white h-24 w-36 ml-[69%] -mt-2">
          <div className="h-1 bg-[#112D4E]"></div>
          <div className="font-sans px-6 py-2 hover:bg-[#3F72AF] cursor-pointer">
            <Link
              to="/Vegetables"
              className="no-underline text-black hover:text-[#F9F7F7] "
            >
              VEGETABLES
            </Link>
          </div>
          <div className="font-sans px-6 py-2 hover:bg-[#3F72AF] cursor-pointer ">
            <Link
              to="/Garland"
              className="no-underline text-black hover:text-[#F9F7F7] "
            >
              GARLAND
            </Link>
          </div>
        </div>
      )}
      <div className="sm:hidden">
        <Menuopen menuopen={menuopen} setmenuopen={setmenuopen} />
      </div>
    </div>
  );
}
