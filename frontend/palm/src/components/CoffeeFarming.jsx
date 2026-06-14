import React from 'react'
import Section from '../common/Section'
import coffe from "../assets/coffe.jpg"
import { FaArrowRight } from "react-icons/fa";

const CoffeeFarming = () => {
  return (
    <>
    <Section>
          <div className='  flex flex-col  sm:flex-row md:flex-row lg:flex-row   items-center justify-center gap-20  px-16 py-16 sm:px-8 sm:py-0'>
            <div>
                        <img src={coffe}  alt="coffee iamge" className='object-cover w-4xl h-96'/>
            </div>
    
            <div className='flex flex-col  gap-5 '>
             <p className='flex  text-gray-500'>  COFFEE FARMING
            </p>
            <p className=' text-5xl font-bold max-w-2xl '>The Journey From Crop to Cup</p>
            <p>Grown in the ideal Himalayan air, our coffee beans are roasted to perfection and sent off to all our outlets to deliver the best coffee experience.</p>
             <div className='flex items-center'>
                <button className='flex gap-5 border-2 border-black px-2 py-2  items-center'> 
                    Learn more
                     <FaArrowRight />

                </button>
            </div>

            </div>
           
          
      
    </div>
    </Section>
    </>
  
  )
}

export default CoffeeFarming
