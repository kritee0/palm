import React from 'react'
import Section from '../common/Section'
import { FaArrowRight } from "react-icons/fa";

const MidSection = () => {
  return (
    <>
    <Section>
    <div className='flex flex-col   text-center  max-w-5xl   mx-auto   w-full  px-20 py-20 ' >
        
        <p className=' text-xl text-gray-400  '>In 1999, we started off as the first specialty coffee shop in Nepal. Over the years, we have diversified from a small coffee shop to an enterprise franchising the Nepali Coffee brand, nationally and internationall</p>
         <div className='   flex  mx-auto mt-5 '>
          <button  className='flex items-center gap-5 border-2 border-black text-black px-2 py-2'>
            Learn More
            <FaArrowRight />
          </button>

        
      
    </div>
        </div>
       
    </Section>
    </>
  )
}

export default MidSection
