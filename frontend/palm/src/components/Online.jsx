import React from "react";
import javacup from "../assets/javacup.jpg";
import image from "../assets/image.png";
import Section from "../common/Section";
const Online = () => {
  return (
    <Section>
      <div className="px-16 sm:px-4 sm:py-4 py-2 flex justify-between bg-gray-200 h-96   ">
        <div className="flex max-w-xs w-full flex-col sm:flex-col  gap-5">
          <p className="font-bold text-2xl">Buy Online</p>
          <p>CURATED SELECTION OF COFFEE , DELIVERED TO YOUR DOORSTEP</p>
          <p>
            After we harvest coffee from our farm, our experts process them with
            the greatest care; subsequently, they are immediately packaged,
            preserving freshness, and sent off to all our outlets.
          </p>
          <div>
              <button className=" px-2 py-2 bg-orange-500  text-white ">
            Buy from Daraz
          </button>
          </div>
        

        </div>
        <div className="">
          <img src={image} alt="image" className="object-cover mx-auto w-96"/>
        </div>
        <div className="flex flex-col items-center">
          <img src={javacup} alt="javacup" className="object-cover w-44 h-44" />
          <p>Why Java Coffee?</p>
          <p>
            Himalayan Java offers its customers the best-tasting coffee
            beverages in the country.
          </p>
          <p>we have achived tis by using high quality ingridents</p>
        </div>
      </div>
    </Section>
  );
};

export default Online;
