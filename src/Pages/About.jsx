import React from "react";
import Timeline from "../Components/Timeline";
import About_content from "../Components/About_content";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <>
      <div className="flex flex-col sm:flex-row  justify-evenly sm:py-24 py-12">
        <About_content />
        <Timeline />
      </div>
      <Footer />
    </>
  );
}
