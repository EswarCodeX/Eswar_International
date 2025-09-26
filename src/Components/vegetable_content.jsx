import React, { useState, useEffect } from "react";
import { vegetables } from "./Data/vegetable";
import { Link } from "react-router-dom";

const VegetableCard = ({ vegetable }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = vegetable.img;
    img.onload = () => setIsLoading(false);
  }, [vegetable.img]);

  return (
    <Link
      to={`/vegetables/${vegetable.id}`}
      className="group no-underline transform transition-all duration-300 hover:scale-105"
    >
      <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-xs flex flex-col">
        <div className="relative h-44">
          <img
            src={vegetable.img}
            alt={vegetable.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
              Fresh
            </span>
            <span className="px-2 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
              Export Grade
            </span>
          </div>
        </div>
        <div className="p-4 flex flex-col grow">
          <h2 className="mb-1 font-bold text-lg uppercase text-gray-800">
            {vegetable.name}
          </h2>
          <p className="mb-3 text-gray-500 text-sm">
            Premium quality, pesticide-free
          </p>
          <div className="flex items-center mb-1 gap-2 text-yellow-600">
            <svg
              className="w-4 h-4"
              fill="currentColor" /* star icon SVG path */
            ></svg>
            <span className="text-sm font-medium text-gray-600">
              Export Quality
            </span>
          </div>
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-green-700 font-semibold">Available</span>
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Vegetables() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-48 bg-[url('../assets/vegetables/head.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative flex items-center justify-center h-full text-4xl font-bold text-white">
          VEGETABLES
        </h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {vegetables.map((vegetable) => (
            <VegetableCard key={vegetable.id} vegetable={vegetable} />
          ))}
        </div>
      </div>
    </div>
  );
}
