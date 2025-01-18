import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menuopen({ menuopen, setmenuopen }) {
  const [servicesopen, setservicesopen] = useState(false);

  function onpagenavigate() {
    setmenuopen(false);
  }

  return (
    <>
      {menuopen && (
        <ul className=" flex-col w-full absolute z-50 bg-[#fafafa] space-y-2 shadow-lg  font-semibold text-xl">
          <li>
            <Link
              onClick={onpagenavigate}
              to="/"
              className="no-underline text-black hover:text-[#3F72AF] -ml-4 "
            >
              HOME
            </Link>{" "}
          </li>
          <hr className="-ml-4" />
          <li className=" cursor-pointer">
            <Link
              onClick={onpagenavigate}
              to="/about"
              className="no-underline text-black hover:text-[#3F72AF] -ml-4"
            >
              ABOUT
            </Link>{" "}
          </li>
          <hr className="-ml-4" />
          <li
            className=" cursor-pointer no-underline text-black  hover:text-[#3F72AF] -ml-4 flex justify-between "
            onClick={() => setservicesopen(!servicesopen)}
          >
            SERVICES{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 mr-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </li>
          {servicesopen && (
            <div className="pl-4">
              <div className="font-sans hover:bg-[#3F72AF]">
                <Link
                  onClick={onpagenavigate}
                  to="/vegetables"
                  className="no-underline text-black/50"
                >
                  VEGETABLES
                </Link>
              </div>
              <div className="font-sans hover:bg-[#3F72AF]">
                <Link
                  onClick={onpagenavigate}
                  to="/garland"
                  className="no-underline text-black/50"
                >
                  GARLAND
                </Link>
              </div>
            </div>
          )}
          <hr className="-ml-4" />
          <li className="  cursor-pointer">
            <Link
              onClick={onpagenavigate}
              to="/contact"
              className="no-underline text-black hover:text-[#3F72AF] -ml-4 "
            >
              {" "}
              CONTACT
            </Link>
          </li>
          <hr className="-ml-4" />
          <li className=" cursor-pointer">
            <Link
              onClick={onpagenavigate}
              to="/comingSoon"
              className="no-underline text-black hover:text-[#3F72AF] -ml-4"
            >
              COMING&nbsp;SOON
            </Link>{" "}
          </li>
          <div className="w-screen h-0.5 bg-[#112D4E] -ml-8"></div>
        </ul>
      )}
    </>
  );
}
