import React from "react";
import Timeline from "../Components/Timeline";
import About_content from "../Components/About_content";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <>
      <div className="flex justify-evenly py-24">
        <About_content />
        <Timeline />
      </div>
      <Footer />
    </>
  );
}
