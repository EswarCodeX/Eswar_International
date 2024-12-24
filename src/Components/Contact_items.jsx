import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact_items = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h1aikdn", "template_9v0q6sg", form.current, {
        publicKey: "4Auw5gDYi6THXOaI5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="font-sans flex flex-col items-center">
        <div className=" text-6xl font-sans pt-5 font-light">
          WE'D LOVE TO HEAR FROM YOU
        </div>
        <div className="font-sans  font-light pt-1 ">
          Whether you're curious about our export services, seeking a quote, or
          exploring partnership opportunities, we're here to answer all your
          questions.
        </div>
        <div className="pt-20 w-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full flex flex-col gap-3 items-center mx-auto"
          >
            <div className="flex gap-3 ">
              <input
                className="border border-black rounded w-[400px] p-2"
                name="from_name"
                type="text"
                placeholder="Name*"
                required
              />
              <input
                className="border border-black rounded w-[400px] p-2"
                name="from_number"
                type="text"
                placeholder="Contact Number*"
                required
              />
            </div>
            <div className="pt-2">
              <input
                className="border border-black rounded w-[820px] p-2"
                name="from_mail"
                type="email"
                placeholder="E-mail*"
                required
              />
            </div>
            <div className="pt-2">
              <input
                className="border border-black rounded w-[820px] p-2"
                name="from_address"
                type="text"
                placeholder="Address"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <input
                className="border border-black rounded w-[400px] p-2"
                name="from_city"
                type="text"
                placeholder="City*"
                required
              />
              <input
                className="border border-black rounded w-[400px] p-2"
                name="from_country"
                type="text"
                placeholder="Country*"
                required
              />
            </div>
            <div className="pt-2">
              <textarea
                className="border border-black rounded w-[820px] p-2"
                name="message"
                placeholder="Comments*"
                required
              ></textarea>
            </div>
            <input
              className="bg-[#3F72AF] px-32 py-2 rounded text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className="pt-5 pb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1965.107241124615!2d78.15965280910441!3d9.916087038378537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5b8aa9d6adb%3A0xb261e56b050d3834!2sR%20M%20Kowshika%20flowers%20and%20garlands!5e0!3m2!1sen!2sin!4v1735026878335!5m2!1sen!2sin"
            width="1400"
            height="450"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex pb-24 gap-44 pt-24">
          <div className="flex hover:shadow-md hover:shadow-[#3F72AF]/50 p-4 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="170"
                width="170"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#112d4e"
                  d="M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm88 40c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zM232 88l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zm144-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16z"
                />
              </svg>
            </div>
            <div className="h-full w-0.5 bg-[#112D4E] mr-4"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold pb-2">HEAD OFFICE</div>

              <div className="flex flex-col items-center">
                <div className="font-semibold">ESWAR INTERNATIONAL</div>
                <div>473U/5 Kamarajar 2nd Street,</div>
                <div>Karppaga Vinayagar Street,Vandiyur</div>
                <div>Madurai-625 020</div>
                <div>Tamil Nadu, India.</div>
              </div>
            </div>
          </div>

          <div className="flex items-center hover:shadow-md hover:shadow-[#3F72AF]/50 p-4 ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="170"
                width="170"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#112d4e"
                  d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM144 448c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zM304 64L80 64l0 320 224 0 0-320z"
                />
              </svg>
            </div>
            <div className="h-full w-0.5 bg-[#112D4E] mr-4"></div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold pb-3">CONTACT</div>

              <div className="flex flex-col items-center gap-1">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 512 512"
                    className="mr-2"
                  >
                    <path
                      fill="#3f72af"
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    />
                  </svg>
                  eswarinternational10@gmail.com
                </div>

                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 512 512"
                    className="mr-2"
                  >
                    <path
                      fill="#3f72af"
                      d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                    />
                  </svg>
                  +91 98940 83855 , +91 98941 68837
                </div>

                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 448 512"
                    className="mr-2"
                  >
                    <path
                      fill="#3f72af"
                      d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    />
                  </svg>{" "}
                  +91 98940 83855
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_items;
