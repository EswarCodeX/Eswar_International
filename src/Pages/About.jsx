import React from "react";
import Timeline from "../Components/Timeline";
import About_content from "../Components/About_content";

export default function About() {
  return (
    <>
      <div className="flex justify-evenly pt-24">
        <About_content />
        <Timeline />
      </div>
    </>
  );
}
