import React from "react";
import svg from "/aeroplane.svg";

export default function About() {
  return (
    <>
      <div className="sm:w-[520px] sm:p-0 p-3 w-screen font-sans">
        <h1 className=" ">Welcome to </h1>
        <h1 className="font-bold text-[#3F72AF] ml-auto sm:text-4xl text-2xl">
          ESWAR INTERNATIONAL
        </h1>
        <p className="sm:text-base text-sm">
          At <span className="font-bold">Eswar International</span> , we
          specialize in exporting premium-quality fresh vegetables and
          handcrafted floral garlands, ensuring freshness, authenticity, and
          reliability for international markets.
          <div className="py-3">
            With a strong network of local farmers and skilled florists, we
            adhere to global standards of hygiene, quality, and sustainability,
            delivering products that meet international export requirements. Our
            commitment to eco-friendly farming, ethical sourcing, and efficient
            logistics ensures that customers receive the freshest produce and
            beautifully crafted garlands on time, every time.
          </div>
          <div className="pb-4">
            {" "}
            📌 Serving Global Markets Across Every Country..
          </div>{" "}
          🌍 Bringing Nature’s Freshness to the World!
        </p>
      </div>
    </>
  );
}
