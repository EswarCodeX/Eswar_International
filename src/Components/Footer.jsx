import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [servicesopen, setservicesopen] = useState(false);
  return (
    <>
      <div className="w-full h-full bg-[#112D4E] font-sans  ">
        <div className="pt-12 pl-5 sm:pl-32 sm:gap-52 flex-col flex sm:flex-row pb-14">
          <div className="w-full sm:w-[20%] ">
            <div className="text-[#F9F7F7] text-xl sm:text-2xl font-bold">
              ESWAR INTERNATION
            </div>
            <div className="text-[#F9F7F7]">
              The prices will be fixed according to the quality of vegetables
              and the craftsmanship of the garlands. The price and quality may
              vary from vendor to vendor. It is advisable, especially in the
              initial stage, to place orders for smaller quantities.
            </div>
            <div className="w-[90%] h-0.5 my-3  sm:pr-0 bg-white sm:hidden block"></div>
            <div className="sm:block hidden">
              <div className="text-[#F9F7F7] pt-4 font-bold">
                Follow Us Here:
              </div>
              <div className="flex gap-2 px-3 pt-1">
                <div className=" p-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                    />
                  </svg>
                </div>
                <div className=" p-1 ">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="#ffffff"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="p-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                    />
                  </svg>
                </div>
                <div className=" p-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-3xl font-bold">
            <div className="pb-2">
              <Link to="/About" className="no-underline text-[#F9F7F7]">
                About Us
              </Link>
            </div>
            <div
              className="pb-2 cursor-pointer text-[#F9F7F7]"
              onClick={() => setservicesopen(!servicesopen)}
            >
              {" "}
              Service +
            </div>
            <div>
              {servicesopen && (
                <div className="   text-xl font-medium pl-4 pb-2  ">
                  <div className="pb-1">
                    <Link
                      to="/Vegetables"
                      className="no-underline text-white/70 "
                    >
                      Vegitables
                    </Link>{" "}
                  </div>
                  <div>
                    <Link to="/Garland" className="no-underline text-white/70 ">
                      Garland
                    </Link>{" "}
                  </div>
                </div>
              )}
            </div>
            <div className="pb-2">
              <Link to="/Contact" className="no-underline text-[#F9F7F7]">
                Contact
              </Link>{" "}
            </div>
            <div className="pb-2">
              <Link to="/Comingsoon" className="no-underline text-[#F9F7F7]">
                Coming Soon
              </Link>{" "}
            </div>
          </div>
          <div className="w-[90%] h-0.5 my-3  sm:pr-0 bg-white sm:hidden block"></div>
          <div className="text-[#F9F7F7]">
            <div className="text-xl font-semibold">Reach Us</div>
            <div>+91 98940 83855</div>
            <div>+91 98941 68837</div>
            <div>eswarinternational10@gmail.com</div>
          </div>
          <div className="sm:hidden block">
            <div className="text-[#F9F7F7] pt-4 font-bold">Follow Us Here:</div>
            <div className="flex gap-2 px-3 pt-1">
              <div className=" p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="#ffffff"
                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                  />
                </svg>
              </div>
              <div className=" p-1 ">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    />
                  </svg>
                </a>
              </div>
              <div className="p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </div>
              <div className=" p-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ffffff"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
