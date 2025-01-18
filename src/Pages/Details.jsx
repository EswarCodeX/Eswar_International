import React from "react";
import { useParams } from "react-router-dom";
import { vegetables } from "../../vegetable";
import Footer from "../Components/Footer";

export default function Details() {
  const { id } = useParams();
  const vegetable = vegetables.find((v) => v.id === id);
  return (
    <>
      <h1 className="flex justify-center w-screen h-40 bg-black">
        {vegetable.name}
      </h1>
      <div className="flex justify-center">
        <div className="flex sm:flex-row flex-col font-sans w-[1000px] sm:justify-evenly items-center">
          <img
            className="sm:w-96 sm:h-72 w-72 h-52 rounded-lg "
            src={vegetable.img}
            alt=""
          />
          <div className="sm:w-[500px] w-[270px] sm:pt-0 pt-4">
            <h4>{vegetable.name}</h4>
            <p>{vegetable.info}</p>
            <h6 className="font-extrabold text-xl text-black/70">DETAILS</h6>
            <ul className="sm:-ml-0 -ml-10">
              <li>
                <span className="font-bold  text-black/80">Packaging:</span>{" "}
                {vegetable.package}
              </li>
              <li>
                <span className="font-bold text-black/80">
                  Recommended storage & transport temperature:
                </span>
                {vegetable.temp}{" "}
              </li>
              <li>
                <span className="font-bold text-black/80">
                  Relative Humidity:
                </span>{" "}
                {vegetable.humidity}{" "}
              </li>
              <li>
                <span className="font-bold text-black/80">
                  Freezing Temperature:
                </span>{" "}
                {vegetable.freeze}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
