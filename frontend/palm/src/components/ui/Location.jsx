import React from "react";
import express from "../../assets/express.jpg";
import LocationUi from "./LocationUi";
import Section from "../../common/Section";
import Circle from "./circle";

const Location = () => {
  return (
    <>
      <Section>
        <div className="px-16 py-4 flex flex-col   items-center justify-center">
          <span className="font-bold text-2xl text-center  ">
            {" "}
            Our Location
          </span>

          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row mt-4  ">
            <LocationUi image={express} text={"POKHARA Nadipur"} />

            <LocationUi image={express} text={"POKHARA Nadipur"} />
            <LocationUi image={express} text={"POKHARA Nadipur"} />
            <LocationUi image={express} text={"POKHARA Nadipur"} />
          </div>
         <Circle/>
        </div>
      </Section>
    </>
  );
};

export default Location;
