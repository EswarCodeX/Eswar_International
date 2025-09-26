import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Menuopen from "./Menuopen";
import logo from "../assets/logo_main.png";

export default function Navbar() {
  const [servicesopen, setservicesopen] = useState(false);
  const [menuopen, setmenuopen] = useState(false);
  const [fix, setfix] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const setfixed = () => {
      if (window.scrollY >= 1) {
        setfix(true);
        setScrolled(window.scrollY > 50);
      } else {
        setfix(false);
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", setfixed);
    return () => window.removeEventListener("scroll", setfixed);
  }, []);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesopen &&
        !event.target.closest(".services-dropdown-container")
      ) {
        setservicesopen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [servicesopen]);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: null, isDropdown: true },
    { name: "CONTACT", path: "/contact" },
    { name: "COMING SOON", path: "/comingSoon" },
  ];

  const serviceItems = [
    { name: "VEGETABLES", path: "/vegetables" },
    { name: "GARLAND", path: "/garland" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes logoGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 5px rgba(63, 114, 175, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(63, 114, 175, 0.6));
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }

        .navbar-container {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .logo-container {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .logo-container:hover {
          animation: logoGlow 2s ease-in-out infinite;
        }

        .company-name {
          background: linear-gradient(45deg, #333, #3f72af, #5b8dbf, #333);
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.3s ease;
        }

        .nav-item {
          position: relative;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }

        .nav-item::before {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #3f72af, #5b8dbf);
          border-radius: 2px;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-item:hover::before,
        .nav-item.active::before {
          width: 100%;
        }

        .nav-item:hover {
          transform: translateY(-2px);
          color: #3f72af;
        }

        .nav-item.active {
          color: #3f72af;
        }

        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(
            circle,
            rgba(63, 114, 175, 0.2) 0%,
            transparent 70%
          );
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
        }

        .nav-link:hover::after {
          width: 120%;
          height: 120%;
        }

        .dropdown-container {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          min-width: 180px;
          z-index: 1000;
          animation: slideDown 0.3s ease forwards;
          overflow: hidden;
        }

        .dropdown-menu::before {
          content: "";
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: none;
          border-right: none;
          transform: translateX(-50%) rotate(45deg);
          backdrop-filter: blur(20px);
        }

        .dropdown-item {
          padding: 12px 20px;
          transition: all 0.3s ease;
          position: relative;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .dropdown-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, #3f72af, #5b8dbf);
          transition: width 0.3s ease;
        }

        .dropdown-item:hover::before {
          width: 4px;
        }

        .dropdown-item:hover {
          background: rgba(63, 114, 175, 0.05);
          padding-left: 24px;
        }

        .mobile-menu-button {
          position: relative;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
          background: rgba(63, 114, 175, 0.1);
        }

        .mobile-menu-button:hover {
          background: rgba(63, 114, 175, 0.2);
          transform: scale(1.1);
        }

        .mobile-menu-button:active {
          transform: scale(0.95);
        }

        .hamburger-line {
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .mobile-menu-button.active .hamburger-line:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .mobile-menu-button.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-button.active .hamburger-line:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        .services-icon {
          transition: transform 0.3s ease;
        }

        .services-open .services-icon {
          transform: rotate(180deg);
        }

        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(63, 114, 175, 0.3);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        .particle:nth-child(1) {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .particle:nth-child(2) {
          top: 60%;
          right: 30%;
          animation-delay: 2s;
        }

        .particle:nth-child(3) {
          bottom: 30%;
          left: 70%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.6;
          }
        }
      `}</style>

      <div className="z-50 relative">
        {/* Floating particles for ambience */}
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div
          className={`navbar-container flex justify-between items-center px-[5%] w-full text-lg py-4 ${
            scrolled ? "navbar-scrolled fixed top-0 left-0 right-0" : "mt-4"
          }`}
        >
          {/* Logo Section */}
          <div className="logo-container flex items-center gap-2 sm:gap-3 group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={logo}
                className="h-8 w-10 sm:h-12 sm:w-16 transition-transform duration-300 group-hover:scale-110"
                alt="Eswar International Logo"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </div>
            <div className="company-name font-sans font-bold text-sm sm:text-lg">
              ESWAR INTERNATIONAL
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div
            className={`sm:hidden mobile-menu-button ${menuopen ? "active" : ""}`}
            onClick={() => setmenuopen(!menuopen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="hamburger-line"
                d="M4 6H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                className="hamburger-line"
                d="M4 12H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                className="hamburger-line"
                d="M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Desktop Navigation */}
          <ul className="font-sans list-none gap-8 hidden sm:flex items-center">
            {navItems.map((item, index) => (
              <li
                key={item.name}
                className={`nav-item ${
                  item.isDropdown
                    ? `dropdown-container services-dropdown-container ${servicesopen ? "services-open" : ""}`
                    : location.pathname === item.path
                      ? "active"
                      : ""
                }`}
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.isDropdown ? (
                  <>
                    <div
                      className="nav-link flex items-center text-black hover:text-[#3F72AF] cursor-pointer"
                      onClick={() => setservicesopen(!servicesopen)}
                    >
                      <li>SERVICES</li>
                      <svg
                        className="services-icon w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {servicesopen && (
                      <div className="dropdown-menu">
                        {serviceItems.map((serviceItem) => (
                          <div key={serviceItem.path} className="dropdown-item">
                            <Link
                              to={serviceItem.path}
                              onClick={() => setservicesopen(false)}
                              className={`nav-link no-underline block ${
                                location.pathname === serviceItem.path
                                  ? "text-[#3F72AF] font-semibold"
                                  : "text-black hover:text-[#3F72AF]"
                              }`}
                            >
                              {serviceItem.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`nav-link no-underline ${
                      location.pathname === item.path
                        ? "text-[#3F72AF] font-semibold"
                        : "text-black hover:text-[#3F72AF]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <Menuopen menuopen={menuopen} setmenuopen={setmenuopen} />
        </div>
      </div>
    </>
  );
}
