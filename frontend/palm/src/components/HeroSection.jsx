import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import himalaya from "../assets/himalaya.jpg"
const HeroSection = () => {
  return (
    <div>
      <img src={himalaya} className='object-cover w-full h-full'    />
        <p>Coffee</p>
        <p>people</p>
        <p>Lifestyle</p>
        <div>
        <p>In 1999, we started off as the first specialty coffee shop in Nepal. Over the years, we have diversified from a small coffee shop to an enterprise franchising the Nepali Coffee brand, nationally and internationall</p>
        </div>
        <div className='border-2 border-white text-black'>
          <button >
            Learn More
            <FaArrowRight />
          </button>

        </div>
      
    </div>
  )
}

export default HeroSection
