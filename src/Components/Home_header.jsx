import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { vegetables } from "./Data/vegetable";
import { garland } from "./Data/garland";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import { FaGlobe, FaShip, FaHandshake } from "react-icons/fa";

const featuredVegetables = vegetables.slice(0, 4);
const featuredGarlands = garland.slice(0, 4);

export default function Home_header() {
  const [isVisible, setIsVisible] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("mission");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target.dataset.animate;
            setIsVisible((prev) => ({ ...prev, [target]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    const elements = containerRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "50+", label: "Countries Served", icon: "🌍" },
    { number: "10K+", label: "Tons Exported Annually", icon: "📦" },
    { number: "500+", label: "Happy Clients", icon: "👥" },
    { number: "99.8%", label: "On-Time Delivery", icon: "✅" },
    { number: "24/7", label: "Customer Support", icon: "📞" },
  ];

  const certifications = [
    { name: "HACCP Certified", icon: "🛡️", desc: "Food Safety Management" },
    { name: "USDA Organic", icon: "🌱", desc: "Certified Organic Products" },
    { name: "FSSAI Licensed", icon: "✓", desc: "Food Safety Standards" },
    { name: "ISO 9001:2015", icon: "📋", desc: "Quality Management" },
    { name: "Global GAP", icon: "🌾", desc: "Good Agricultural Practices" },
    { name: "Rainforest Alliance", icon: "🌿", desc: "Sustainable Farming" },
  ];

  const services = [
    {
      title: "Quality Assurance",
      description: "Rigorous quality control at every step of the supply chain",
      icon: "🔍",
      features: [
        "Pre-shipment inspection",
        "Quality certificates",
        "Lab testing",
        "Traceability system",
      ],
    },
    {
      title: "Logistics & Shipping",
      description: "End-to-end logistics solutions for global delivery",
      icon: "🚢",
      features: [
        "Sea freight",
        "Air cargo",
        "Cold chain",
        "Door-to-door delivery",
      ],
    },
    {
      title: "Documentation",
      description: "Complete export documentation and compliance support",
      icon: "📋",
      features: [
        "Export permits",
        "Phytosanitary certificates",
        "Insurance coverage",
        "Customs clearance",
      ],
    },
    {
      title: "Custom Packaging",
      description: "Tailored packaging solutions for different markets",
      icon: "📦",
      features: [
        "Eco-friendly materials",
        "Brand customization",
        "Climate control",
        "Retail-ready packs",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Global Fresh Markets, USA",
      message:
        "Outstanding quality vegetables and exceptional service. Their attention to detail in packaging and timely delivery has made them our preferred supplier.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      company: "Dubai Import Co., UAE",
      message:
        "The garlands we import are of exceptional quality. The traditional craftsmanship combined with modern packaging is impressive.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      company: "European Organics, Spain",
      message:
        "Reliable partner for organic vegetables. Their certification compliance and documentation support is exemplary.",
      rating: 5,
    },
  ];

  const exportDestinations = [
    { country: "USA", flag: "🇺🇸", volume: "25%" },
    { country: "UAE", flag: "🇦🇪", volume: "20%" },
    { country: "UK", flag: "🇬🇧", volume: "15%" },
    { country: "Germany", flag: "🇩🇪", volume: "12%" },
    { country: "Canada", flag: "🇨🇦", volume: "10%" },
    { country: "Australia", flag: "🇦🇺", volume: "8%" },
    { country: "Singapore", flag: "🇸🇬", volume: "6%" },
    { country: "Others", flag: "🌍", volume: "4%" },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Sourcing",
      desc: "Direct from certified farms",
      icon: "🌾",
    },
    {
      step: 2,
      title: "Quality Check",
      desc: "Multi-level inspection",
      icon: "🔍",
    },
    { step: 3, title: "Processing", desc: "Clean & sort products", icon: "⚙️" },
    { step: 4, title: "Packaging", desc: "Export-grade packing", icon: "📦" },
    { step: 5, title: "Documentation", desc: "Complete paperwork", icon: "📋" },
    { step: 6, title: "Shipping", desc: "Global delivery", icon: "🚢" },
  ];

  return (
    <div ref={containerRef} className="font-sans overflow-hidden">
      {/* Hero Welcome Section */}
      <section className="container mx-auto px-4 py-16 relative">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40 animate-pulse delay-1000"></div>

        <div
          className={`flex flex-col items-center text-center max-w-6xl mx-auto mb-20 transition-all duration-1000 ${
            isVisible.hero
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          data-animate="hero"
        >
          <div className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-3xl p-12 shadow-2xl backdrop-blur-sm border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-3xl"></div>

            <h1 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight relative z-10">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent text-5xl sm:text-7xl block mt-4 animate-pulse">
                ESWAR INTERNATIONAL
              </span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-gray-700 mb-8 max-w-4xl mx-auto">
              Your trusted partner in premium agricultural exports, connecting
              local excellence with global markets. We specialize in fresh
              vegetables and handcrafted floral garlands, delivering quality,
              authenticity, and sustainability worldwide.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/about"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Discover Our Story
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Link>

              <Link
                to="/contact"
                className="group px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get Quote
                <svg
                  className="inline w-5 h-5 ml-2 transform group-hover:rotate-12 transition-transform"
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-[#3f72af] via-blue-800 to-[#3f72af] text-white py-16">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible.stats
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            data-animate="stats"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Global Impact
            </h2>
            <p className="text-xl opacity-90">
              Numbers that speak for our excellence
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white hover:bg-white/20 transition-all duration-500 hover:scale-105 ${
                  isVisible.stats
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
              {/* Heading */}
              <h2 className="text-5xl font-extrabold text-gray-800 mb-8 tracking-tight">
                Mission, Vision & Values
              </h2>
              <p className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed mb-20">
                We are more than exporters — we are connectors of cultures,
                opportunities, and markets. Our mission, vision, and values
                define how we move goods across oceans while building
                long-lasting partnerships worldwide.
              </p>

              {/* Flex layout */}
              <div className="grid md:grid-cols-3 gap-16 items-start">
                {/* Mission */}
                <div className="flex flex-col items-center">
                  <FaShip className="text-blue-600 text-7xl mb-6 drop-shadow-md" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    To deliver world-class products and services across borders
                    with reliability, speed, and excellence. We aim to empower
                    local producers by connecting them to global markets.
                  </p>
                </div>

                {/* Vision */}
                <div className="flex flex-col items-center">
                  <FaGlobe className="text-green-600 text-7xl mb-6 drop-shadow-md" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    To become a leading name in global trade, recognized for
                    innovation, sustainability, and trust. We envision a world
                    where international commerce is seamless and beneficial for
                    all.
                  </p>
                </div>

                {/* Values */}
                <div className="flex flex-col items-center">
                  <FaHandshake className="text-purple-600 text-7xl mb-6 drop-shadow-md" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Values
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    Integrity, commitment, and responsibility define our work.
                    We believe in building partnerships based on trust while
                    promoting sustainable practices that support people and the
                    planet.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Vegetables Section */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible.vegetables
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            data-animate="vegetables"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Fresh Vegetables We Export
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Premium quality vegetables sourced directly from certified
                farms, meeting international standards for freshness and
                nutrition
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {featuredVegetables.map((vegetable, index) => (
                <div
                  key={vegetable.id}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    hoveredCard === `veg-${vegetable.id}` ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(`veg-${vegetable.id}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={vegetable.img}
                      alt={vegetable.name}
                      className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Quality badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Fresh
                      </span>
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        Export Grade
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-2 group-hover:text-green-800 transition-colors">
                      {vegetable.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Premium quality, pesticide-free
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm text-gray-600">
                          Export Quality
                        </span>
                      </div>
                      <div className="flex items-center text-green-600 text-sm font-semibold">
                        <span>Available</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full ml-2 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors transform translate-y-4 group-hover:translate-y-0">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/vegetables"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>View All Vegetables</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Garlands Section */}
          <div
            className={`mb-20 transition-all duration-1000 ${
              isVisible.garlands
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            data-animate="garlands"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Handcrafted Floral Garlands
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exquisite handmade garlands crafted by skilled artisans, perfect
                for religious ceremonies, weddings, and cultural celebrations
                worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {featuredGarlands.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                    hoveredCard === `garland-${item.id}` ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(`garland-${item.id}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={`Garland ${item.id}`}
                      className="w-full h-48 sm:h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Quality badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        Handmade
                      </span>
                      <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                        Premium
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-2 group-hover:text-purple-800 transition-colors">
                      Traditional Garland #{item.id}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Handcrafted with fresh flowers
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">⭐</span>
                        <span className="text-sm text-gray-600">
                          Artisan Made
                        </span>
                      </div>
                      <div className="flex items-center text-purple-600 text-sm font-semibold">
                        <span>Custom Orders</span>
                        <div className="w-2 h-2 bg-purple-500 rounded-full ml-2 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                    <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold hover:bg-purple-50 transition-colors transform translate-y-4 group-hover:translate-y-0">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/garland"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>View All Garlands</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.services
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            data-animate="services"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Export Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for global trade success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border hover:border-blue-200 ${
                  isVisible.services
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.certifications
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            data-animate="certifications"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Trusted quality standards recognized worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border hover:border-green-200 ${
                  isVisible.certifications
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{cert.desc}</p>
                </div>

                <div className="mt-4 flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.testimonials
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            data-animate="testimonials"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by businesses worldwide
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="text-6xl text-purple-200 mb-4">"</div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {testimonials[currentTestimonial].message}
                </p>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">
                        ⭐
                      </span>
                    ),
                  )}
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-lg text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-purple-600 font-medium">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-purple-600 scale-125"
                      : "bg-gray-300 hover:bg-purple-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible.cta
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            data-animate="cta"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Ready to Start Your
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
                Export Journey?
              </span>
            </h2>

            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join hundreds of satisfied clients worldwide. Let us help you
              expand your business globally with our premium products and
              exceptional service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Get Started Today
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>

              <Link
                to="/about"
                className="group px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm opacity-90">Customer Support</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-sm opacity-90">Quality Guaranteed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">Global</div>
                <div className="text-sm opacity-90">Shipping Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
              isVisible.newsletter
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            data-animate="newsletter"
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-8">
              Get the latest updates on our products, export opportunities, and
              industry insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
