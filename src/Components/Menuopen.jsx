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
        <ul className=" flex-col w-full absolute z-50 shadow-lg  bg-white gap-4 ">
          <li>
            <Link
              onClick={onpagenavigate}
              to="/"
              className="no-underline text-black hover:text-[#3F72AF]"
            >
              HOME
            </Link>{" "}
          </li>
          <li className=" cursor-pointer">
            <Link
              onClick={onpagenavigate}
              to="/"
              className="no-underline text-black hover:text-[#3F72AF]"
            >
              ABOUT
            </Link>{" "}
          </li>
          <li
            className=" cursor-pointer no-underline text-black  hover:text-[#3F72AF] "
            onClick={() => setservicesopen(!servicesopen)}
          >
            SERVICES &#11167;
          </li>
          {servicesopen && (
            <div className="pl-4">
              <div className="font-sans hover:bg-[#3F72AF]">
                <Link
                  onClick={onpagenavigate}
                  to="/Vegetables"
                  className="no-underline text-black/50"
                >
                  VEGETABLES
                </Link>
              </div>
              <div className="font-sans hover:bg-[#3F72AF]">
                <Link
                  onClick={onpagenavigate}
                  to="/Garland"
                  className="no-underline text-black/50"
                >
                  GARLAND
                </Link>
              </div>
            </div>
          )}
          <li className="  cursor-pointer">
            <Link
              onClick={onpagenavigate}
              to="/Contact"
              className="no-underline text-black hover:text-[#3F72AF] "
            >
              {" "}
              CONTACT
            </Link>
          </li>
          <li className=" cursor-pointer">
            <Link
              onClick={onpagenavigate}
              to="/ComingSoon"
              className="no-underline text-black hover:text-[#3F72AF]"
            >
              COMING&nbsp;SOON
            </Link>{" "}
          </li>
          <div className="w-full h-0.5 bg-[#112D4E] -ml-5"></div>
        </ul>
      )}
    </>
  );
}
