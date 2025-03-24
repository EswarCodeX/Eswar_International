import React, { useState, useEffect } from "react";
import { garland } from "./Data/garland";
import { Link } from "react-router-dom";

const GarlandCard = ({ garland }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = garland.img;
    img.onload = () => setIsLoading(false);
  }, [garland.img]);

  return (
    <Link
      to={`/garlands/${garland.id}`}
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
            src={garland.img}
            alt={`Garland ${garland.id}`}
            loading="lazy"
          />
        )}
      </div>
    </Link>
  );
};

export default function Garland_content() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-48 bg-[url('../assets/garland/garland.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative flex items-center justify-center h-full text-4xl font-bold text-white">
          GARLANDS
        </h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {garland.map((item) => (
            <GarlandCard key={item.id} garland={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
