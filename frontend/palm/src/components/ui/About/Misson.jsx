import React from 'react'
import  everest from "../../../assets/everest.png"

const Misson = () => {
  return (
    <div className="flex flex-col gap-20 sm:flex-row  ">
        <img src={everest} alt="our misson"  className=' w-[600px] h-auto object cover'/>
    <div className='flex flex-col gap-16'>
        <p font-bold>
            Our Misson
        </p>
        <p>
            At Himalayan Java, we take pride in pioneering Nepal’s specialty coffee culture.

Driven by our commitment to socially responsible entrepreneurship, our mission is to nurture and elevate Nepal’s emerging coffee industry. We are dedicated to cultivating global awareness and appreciation for the unique heritage and quality of Nepalese coffee.
        </p>
      
    </div>
    </div>
  )
}

export default Misson
