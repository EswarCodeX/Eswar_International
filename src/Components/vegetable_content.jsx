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
      className="group no-underline transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden bg-white"
    >
      <div className="aspect-square relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          <img
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={vegetable.img}
            alt={vegetable.name}
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {vegetable.name}
        </h3>
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
