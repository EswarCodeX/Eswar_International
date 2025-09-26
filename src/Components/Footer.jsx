import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [servicesopen, setservicesopen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialIcons = [
    {
      name: "Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
          />
        </svg>
      ),
      color: "#1877F2",
    },
    {
      name: "Google",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          />
        </svg>
      ),
      color: "#DB4437",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
          />
        </svg>
      ),
      color: "#0A66C2",
    },
    {
      name: "Twitter",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          />
        </svg>
      ),
      color: "#1DA1F2",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowing-border {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .social-icon {
          transition:
            transform 0.3s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .social-icon:hover {
          transform: translateY(-5px);
          animation: glowing-border 1.5s infinite;
        }

        .nav-link-underline {
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }

        .nav-link-underline::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #f9f7f7;
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .nav-link-underline:hover::after {
          width: 100%;
        }

        .services-dropdown {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-out;
        }

        .services-dropdown.open {
          max-height: 200px;
        }
      `}</style>

      <footer
        ref={footerRef}
        className="relative bg-[#0f2642] text-[#F9F7F7] font-sans overflow-hidden"
      >
        {/* Decorative background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2642] via-[#1a3a5c] to-[#0f2642] opacity-75"></div>

        {/* Floating background orbs */}
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 right-1/4 w-24 h-24 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Main Footer Content */}
        <div className="relative z-10 p-8 sm:p-12 md:p-16 flex flex-col sm:flex-row justify-around items-start gap-12">
          {/* Company Info Section */}
          <div
            className={`flex flex-col gap-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-3xl font-bold company-title-gradient">
              ESWAR INTERNATIONAL
            </h2>
            <p className="text-sm max-w-sm leading-relaxed text-white/80">
              The prices will be fixed according to the quality of vegetables
              and the craftsmanship of the garlands. The price and quality may
              vary from vendor to vendor. It is advisable, especially in the
              initial stage, to place orders for smaller quantities.
            </p>

            {/* Social Icons (Desktop) */}
            <div className="hidden sm:block">
              <h3 className="text-base font-semibold mb-2">Follow Us:</h3>
              <div className="flex gap-4">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    aria-label={`Follow us on ${social.name}`}
                    className="social-icon p-3 rounded-full flex items-center justify-center transition-all"
                    style={{ backgroundColor: `${social.color}20` }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = social.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = `${social.color}20`)
                    }
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div
            className={`flex flex-col gap-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <Link
              to="/about"
              className="nav-link-underline no-underline text-white/80 hover:text-white transition-colors text-3xl"
            >
              About Us
            </Link>
            {/* Services Dropdown */}
            <div
              onClick={() => setservicesopen(!servicesopen)}
              className=" no-underline text-3xl cursor-pointer text-white/80 hover:text-white transition-colors flex items-center"
            >
              <span className="nav-link-underline">Services</span>
              <svg
                className={`ml-2 w-4 h-4 transition-transform duration-300 ${servicesopen ? "rotate-45" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>

            <div className={`services-dropdown ${servicesopen ? "open" : ""}`}>
              <div className="pl-6 pt-2 space-y-2 text-sm flex flex-col">
                <Link
                  to="/vegetables"
                  className="nav-link-underline no-underline text-white/60 hover:text-white transition-colors block text-2xl"
                >
                  Vegetables
                </Link>
                <Link
                  to="/garland"
                  className="nav-link-underline no-underline text-white/60 hover:text-white transition-colors block text-2xl"
                >
                  Garland
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="nav-link-underline no-underline text-white/80 hover:text-white transition-colors text-3xl"
            >
              Contact
            </Link>
            <Link
              to="/comingsoon"
              className="nav-link-underline no-underline text-white/80 hover:text-white transition-colors text-3xl"
            >
              Coming Soon
            </Link>
          </div>

          {/* Contact Section */}
          <div
            className={`flex flex-col gap-2 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.6s" }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="flex items-center text-white/80 hover:text-white transition-colors">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 98940 83855
            </div>
            <div className="flex items-center text-white/80 hover:text-white transition-colors">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +91 98941 68837
            </div>
            <div className="flex items-center text-white/80 hover:text-white transition-colors">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              eswarinternational10@gmail.com
            </div>
          </div>

          {/* Social Icons (Mobile) */}
          <div
            className={`block sm:hidden ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <h3 className="text-base font-semibold mb-2">Follow Us:</h3>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={`Follow us on ${social.name}`}
                  className="social-icon p-3 rounded-full flex items-center justify-center transition-all"
                  style={{ backgroundColor: `${social.color}20` }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = social.color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = `${social.color}20`)
                  }
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and Bottom Line */}
        <div className="relative z-10 text-center py-4 px-8 border-t border-white/10 text-white/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} ESWAR INTERNATIONAL. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
