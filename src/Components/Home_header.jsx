import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/ESWAR.png";
import { vegetables } from "./Data/vegetable";

const featuredVegetables = vegetables.slice(0, 4);

export default function Home_header() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 font-sans">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-sans mb-4">
            Welcome to{" "}
            <span className="font-bold text-[#3F72AF]">ESWAR INTERNATIONAL</span>
          </h1>
          <p className="text-lg leading-relaxed">
            At <span className="font-bold">Eswar International</span>, we
            specialize in the export of premium-quality fresh vegetables and
            handcrafted floral garlands, catering to international markets with
            freshness, authenticity, and reliability. With a strong network of
            local farmers and florists, we ensure that every product we export
            meets global standards of hygiene, quality, and sustainability.
            <br />
            <Link to="/About" className="inline-block mt-4 text-[#3F72AF] font-bold hover:underline">
              Explore More....
            </Link>
          </p>
        </div>

        <div className="mb-12 font-sans ">
          <h2 className="font-semibold py-5">Vegetables We Export</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredVegetables.map((vegetable) => (
              <div
                key={vegetable.id}
                className="flex flex-col items-center p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
              >
                <img
                  src={vegetable.img}
                  alt={vegetable.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-[#3F72AF]">{vegetable.name}</h3>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/vegetables"
              className="inline-block px-8 py-3 text-white bg-[#3F72AF] rounded-md font-medium hover:bg-[#2E5A8B] transition-colors"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
