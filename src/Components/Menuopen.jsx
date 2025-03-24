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
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-between py-12  ">
          <div className="container mx-auto px-6 flex flex-col items-center">
            <button
              onClick={() => setmenuopen(false)}
              className="absolute top-6 right-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col space-y-8 items-center text-2xl font-light mt-36">
              <Link
                to="/"
                onClick={onpagenavigate}
                className="hover:text-gray-600 tracking-wide no-underline text-black"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={onpagenavigate}
                className="hover:text-gray-600 tracking-wide no-underline text-black"
              >
                About Us
              </Link>
              <div className="relative text-center">
                <button
                  onClick={() => setservicesopen(!servicesopen)}
                  className="flex items-center hover:text-gray-600 tracking-wide "
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 ml-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {servicesopen && (
                  <div className="mt-4 space-y-4 text-xl">
                    <Link
                      to="/vegetables"
                      onClick={onpagenavigate}
                      className="block hover:text-gray-600 no-underline text-black"
                    >
                      Vegetables
                    </Link>
                    <Link
                      to="/garland"
                      onClick={onpagenavigate}
                      className="block hover:text-gray-600 no-underline text-black"
                    >
                      Garland
                    </Link>
                  </div>
                )}
              </div>
            
              <Link
                to="/contact"
                onClick={onpagenavigate}
                className="hover:text-gray-600 tracking-wide no-underline text-black"
              >
                Contact
              </Link>
              <Link
                to="/comingsoon"
                onClick={onpagenavigate}
                className="hover:text-gray-600 tracking-wide no-underline text-black"
              >
                Coming Soon
              </Link>
            </nav>
          </div>
          <div className="container mx-auto px-6 flex justify-center">
            <div className="flex space-x-8 text-sm font-light">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600  no-underline text-black"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600  no-underline text-black"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600  no-underline text-black"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
