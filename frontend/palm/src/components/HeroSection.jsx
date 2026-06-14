import React from 'react'

import himalaya from "../assets/himalaya.jpg"
const HeroSection = () => {
  return (
    <>
    <div className='relative inset-0  h-screen flex '>
      <img src={himalaya} className=' absolute inset-0 object-cover w-full h-full '    />
      <div className=' w-full h-full absolute z-50 flex flex-col justify-center  text-4xl md:text-6xl px-8'>
         <p className='font-bold'>Coffee.</p>
        <p className='font-bold'>people.</p>
        <p className='font-bold'>Lifestyle.</p>
      </div>
       
      
    </div>
    
       
        </>
  )
}

export default HeroSection
