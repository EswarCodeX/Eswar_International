import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../assets/allveg.jpg";
import img2 from "../assets/garland.png";
import img3 from "../assets/source.png";
import img4 from "../assets/trade.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CarouselWithContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const slides = [
    {
      img: img1,
      title: "Premium Quality Vegetables for Export",
      description:
        "We source the finest, pesticide-free vegetables directly from local farms, ensuring freshness and quality for international markets.",
      link: "/vegetables",
      linkText: "Explore Our Vegetable Range →",
      position: "center",
    },
    {
      img: img2,
      title: "Exquisite Handmade Garlands",
      description:
        "Ethically sourced flowers, handcrafted into beautiful garlands for religious, ceremonial, and decorative purposes worldwide.",
      link: "/garland",
      linkText: "View Garland Collections →",
      position: "left",
    },
    {
      img: img3,
      title: "Sustainable & Ethical Sourcing",
      description:
        "Committed to fair trade, organic farming, and eco-friendly packaging to deliver purity with every export.",
      link: "/about",
      linkText: "Learn About Our Process →",
      position: "bottom",
    },
    {
      img: img4,
      title: "Global Export Partners",
      description:
        "Reliable logistics, certifications (HACCP, USDA, FSSAI), and timely deliveries to meet your business demands.",
      link: "/contact",
      linkText: "Become a Partner Today →",
      position: "left",
    },
  ];

  const getPositionClasses = (position) => {
    switch (position) {
      case "center":
        return "grid place-items-center text-center";
      case "left":
        return "grid items-center text-left";
      case "bottom":
        return "grid items-end text-left";
      default:
        return "grid items-center text-left";
    }
  };

  return (
    <div className="relative overflow-hidden">
      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
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

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-slide-in-top {
          animation: slideInFromTop 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-bottom {
          animation: slideInFromBottom 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .premium-gradient {
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }

        .glass-morphism {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hover-lift {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .text-shadow-strong {
          text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }

        .carousel-indicator {
          transition: all 0.3s ease;
        }

        .carousel-indicator.active {
          background: linear-gradient(45deg, #3f72af, #5b8dbf);
          transform: scale(1.2);
        }
      `}</style>

      <Carousel
        loop={true}
        autoplay={true}
        className="font-sans relative"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`carousel-indicator block h-3 w-3 cursor-pointer rounded-full transition-all content-[''] ${
                  activeIndex === i
                    ? "active bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        onChange={(index) => setCurrentSlide(index)}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full group">
            {/* Image with overlay effects */}
            <div className="relative overflow-hidden">
              <img
                src={slide.img}
                alt={`slide ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 premium-gradient"></div>
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content overlay */}
            <div
              className={`absolute inset-0 h-full w-full ${getPositionClasses(slide.position)}`}
            >
              <div
                className={`w-3/4 ${slide.position === "center" ? "text-center md:w-2/4" : slide.position === "bottom" ? "pb-12 md:pb-20 lg:pb-32" : ""} ${slide.position !== "center" ? "pl-12 md:pl-20 lg:pl-32 md:w-2/4" : ""}`}
              >
                {/* Glass morphism container */}
                <div className="glass-morphism rounded-2xl p-6 md:p-8 hover-lift">
                  {/* Animated title */}
                  <Typography
                    variant="h1"
                    color="white"
                    className={`mb-4 text-xl md:text-4xl lg:text-5xl font-bold text-shadow-strong ${
                      isVisible ? "animate-slide-in-top" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: "0.2s",
                      background: "linear-gradient(45deg, #ffffff, #e0e0e0)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {slide.title}
                  </Typography>

                  {/* Animated description */}
                  <Typography
                    variant="lead"
                    color="white"
                    className={`mb-8 opacity-90 text-xs sm:text-base leading-relaxed text-shadow-strong ${
                      isVisible ? "animate-slide-in-left" : "opacity-0"
                    }`}
                    style={{ animationDelay: "0.4s" }}
                  >
                    {slide.description}
                  </Typography>

                  {/* Animated CTA link */}
                  <Link
                    className={`inline-flex items-center text-white no-underline font-semibold text-sm sm:text-base group-hover:text-blue-200 transition-all duration-300 ${
                      isVisible ? "animate-slide-in-bottom" : "opacity-0"
                    } hidden sm:flex`}
                    to={slide.link}
                    style={{ animationDelay: "0.6s" }}
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                        {slide.linkText}
                      </span>
                      <span className="absolute inset-0 inline-block translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                        {slide.linkText}
                      </span>
                    </span>
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full blur-lg animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
