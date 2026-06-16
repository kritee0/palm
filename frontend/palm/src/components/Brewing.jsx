import React from 'react'
import express from "../assets/express.jpg"
import expresslang from "../assets/expresslang.png"
import { FaArrowRight } from "react-icons/fa";
const Brewing = () => {
  return (
    <>
   <section>
    <div className='  px-12  flex  flex-col sm:flex-row  py-16 sm:px-16 sm:py-0 gap-5'>
        <div className=' max-w-xl  gap-5 flex flex-col items-center '>
            <p className='text-xl text-gray-400'>Now Brewing Opportunity</p>
            <img src={expresslang} alt="express language" className='object-cover max-w-xs h-full '/>
            
            <p className=' text-md'>We’re excited to introduce Express, a dynamic new brand under the Himalayan Java family – designed for fast service and modern lifestyles. Built on an economical franchise model, it’s a perfect entry point for aspiring entrepreneurs ready to start their coffee journey with us.</p>
            <div>
                <button className=' flex items-center px-2 py-2 border-2 gap-2'>
                    Learn More
                     <FaArrowRight />
                </button>
            </div>
             </div>
        
        <div>
            <img src={express} alt="express coffe image" className='object-cover w-full h-96 '/>
        </div>
       


      
      
    </div>
    </section>
     </>
  )
}

export default Brewing
