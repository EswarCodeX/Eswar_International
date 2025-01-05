import React from "react";
import bean from "../assets/vegetables/beans.jpg";
import broccoli from "../assets/vegetables/broccoli.jpg";
import cabbage from "../assets/vegetables/cabbage.jpg";
import carrot from "../assets/vegetables/carrot.jpg";
import cauliflower from "../assets/vegetables/cauliflower.jpg";
import cucumber from "../assets/vegetables/cucumber.jpg";
import eggplant from "../assets/vegetables/eggplant.jpg";
import garlic from "../assets/vegetables/garlic.jpg";
import ginger from "../assets/vegetables/ginger.jpg";
import onions from "../assets/vegetables/onions.jpg";
import peas from "../assets/vegetables/peas.jpg";
import pepper from "../assets/vegetables/pepper.jpg";
import potatos from "../assets/vegetables/potatoe.jpg";
import radishes from "../assets/vegetables/radishes1.jpg";
import sweetpepper from "../assets/vegetables/sweetpepper.jpg";
import tomatoe from "../assets/vegetables/tomatoe.jpg";
import { Link } from "react-router-dom";

export default function Vegetables() {
  const vegetables = [
    {
      img: bean,
      name: "BEAN",
    },
    {
      img: broccoli,
      name: "BROCCOLI",
    },
    {
      img: cabbage,
      name: "CABBAGE",
    },
    {
      img: carrot,
      name: "CARROT",
    },
    {
      img: cauliflower,
      name: "CAULIFLOWER",
    },
    {
      img: cucumber,
      name: "CUCUMBER",
    },
    {
      img: eggplant,
      name: "EGGPLANT",
    },
    {
      img: garlic,
      name: "GARLIC",
    },
    {
      img: ginger,
      name: "GINGER",
    },
    {
      img: onions,
      name: "ONIONS",
    },
    {
      img: peas,
      name: "PEAS",
    },
    {
      img: pepper,
      name: "PEPPER",
    },
    {
      img: potatos,
      name: "POTATO",
    },
    {
      img: radishes,
      name: "RADISH",
    },
    {
      img: sweetpepper,
      name: "SWEET PEPPER",
    },
    {
      img: tomatoe,
      name: "TOMATO",
    },
  ];
  return (
    <>
      <div className="bg-[url('../assets/vegetables/head.jpg')] bg-cover">
        <h1 className="flex justify-center font-sans pt-4">VEGETABLES</h1>
      </div>

      <div className="flex justify-center py-5 w-screen p-4 sm:p-0 ">
        <div className="grid sm:grid-cols-4 grid-cols-2 gap-5  sm:gap-12 justify-items-center w-[1400px] ">
          {vegetables.map((vegetable) => (
            <>
              {" "}
              <div className=" cursor-pointer hover:shadow-2xl h-36 w-36 sm:h-72 sm:w-80 border-2 border-[#112D4E]/50 rounded-lg font-sans flex flex-col items-center gap-4">
                <img
                  className="h-20 w-28 sm:h-52 sm:w-72 rounded-lg pt-2"
                  src={vegetable.img}
                  alt=""
                />
                <h3 className="font-bold sm:text-2xl text-lg">
                  {vegetable.name}
                </h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
