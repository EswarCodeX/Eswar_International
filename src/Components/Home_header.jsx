import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/ESWAR.png";

export default function Home_header() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-sans ">
          Welcome to{" "}
          <span className="font-bold text-[#3F72AF]">ESWAR INTERNATIONAL</span>{" "}
        </h1>
        <p className="w-[500px]">
          At <span className="font-bold text-lg">Eswar International</span> , we
          specialize in the export of premium-quality fresh vegetables and
          handcrafted floral garlands, catering to international markets with
          freshness, authenticity, and reliability. With a strong network of
          local farmers and florists, we ensure that every product we export
          meets global standards of hygiene, quality, and sustainability. <br />
          <Link to="/About" className="text-[#3F72AF] no-underline font-bold ">
            Explore More....
          </Link>{" "}
        </p>
      </div>
    </>
  );
}
