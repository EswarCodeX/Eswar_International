import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { vegetables } from "../Data/vegetable";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasError) {
      const timer = setTimeout(() => navigate("/vegetables"), 3000);
      return () => clearTimeout(timer);
    }
  }, [hasError, navigate]);

  if (hasError) {
    return (
      <div className="text-center p-8 text-red-600 font-semibold text-lg">
        Something went wrong. Redirecting...
      </div>
    );
  }

  return children;
};

export default function Vegetable_details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const vegetable = vegetables.find((v) => v.id === id);

  useEffect(() => {
    if (!vegetable) {
      navigate("/vegetables");
      return;
    }
    const img = new Image();
    img.src = vegetable.img;
    img.onload = () => setIsLoading(false);
  }, [vegetable, navigate]);

  if (!vegetable) return null;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Header with backdrop blur overlay */}
        <header
          className="relative flex items-center justify-center w-full h-44 text-5xl font-extrabold text-white tracking-wide
          bg-[url(../../assets/vegetables/allveg.jpg)] bg-cover bg-center
          after:absolute after:inset-0 after:bg-black/40 after:backdrop-blur-sm after:z-0"
        >
          <h1 className="relative z-10 drop-shadow-lg">{vegetable.name}</h1>
        </header>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-green-100">
            <div className="flex flex-col sm:flex-row items-center gap-12 p-10">
              {/* Image container with shadow, border, rounded corners and hover scale */}
              <div className="relative w-full sm:w-1/2 aspect-square sm:aspect-video rounded-2xl overflow-hidden shadow-xl border border-green-200 transition-transform duration-500 hover:scale-105">
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-green-100/70 rounded-2xl animate-pulse">
                    <div className="h-12 w-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={vegetable.img}
                    alt={vegetable.name}
                    loading="lazy"
                  />
                )}
              </div>

              {/* Details section with spacing and animated fade-in */}
              <section className="flex-1 space-y-8 text-gray-800">
                <h2 className="text-3xl font-extrabold text-green-800 drop-shadow-md animate-fadeIn">
                  {vegetable.name}
                </h2>
                <p className="leading-relaxed text-lg text-green-700 max-w-xl animate-fadeIn delay-100">
                  {vegetable.info}
                </p>

                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-6 underline decoration-green-400 animate-fadeIn delay-200">
                    Product Details
                  </h3>
                  <dl className="space-y-5 text-green-800 max-w-md">
                    <div className="flex justify-between font-semibold">
                      <dt>Packaging:</dt>
                      <dd className="font-normal">{vegetable.package}</dd>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <dt>Storage Temperature:</dt>
                      <dd className="font-normal">{vegetable.temp}</dd>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <dt>Relative Humidity:</dt>
                      <dd className="font-normal">{vegetable.humidity}%</dd>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <dt>Freezing Temperature:</dt>
                      <dd className="font-normal">{vegetable.freeze}</dd>
                    </div>
                  </dl>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes fadeIn {
            0% {opacity: 0; transform: translateY(10px);}
            100% {opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease forwards;
          }
          .animate-fadeIn.delay-100 {
            animation-delay: 0.1s;
          }
          .animate-fadeIn.delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </ErrorBoundary>
  );
}
