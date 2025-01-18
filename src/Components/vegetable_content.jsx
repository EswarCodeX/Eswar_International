import React from "react";
import { vegetables } from "../../vegetable";
import { Link } from "react-router-dom";

export default function Vegetables() {
  return (
    <>
      <div className="bg-[url('../assets/vegetables/head.jpg')] bg-cover">
        <h1 className="flex justify-center font-sans pt-4">VEGETABLES</h1>
      </div>

      <div className="flex justify-center py-5 p-4 sm:p-0 ">
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-5  sm:gap-12 justify-items-center w-[1300px] ">
          {vegetables.map((vegetable) => (
            <Link
              to={`/vegetables/${vegetable.id}`}
              className=" no-underline cursor-pointer hover:shadow-2xl h-36 w-36 sm:h-72 sm:w-80 border-2 border-[#112D4E]/50 rounded-lg font-sans flex flex-col items-center gap-4"
            >
              <img
                className="h-20 w-28 sm:h-52 sm:w-72 rounded-lg pt-2"
                src={vegetable.img}
                alt=""
              />
              <h3 className="font-bold text-black sm:text-2xl text-lg">
                {vegetable.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
