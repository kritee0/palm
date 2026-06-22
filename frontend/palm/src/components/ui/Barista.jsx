import React from 'react'
import Section from '../../common/Section'
import express from "../../assets/express.jpg"

const Barista = () => {
  return (
    <Section>
    <div className='px-16 py-4 sm:px-8  flex flex-col sm:flex-row     justify-between  gap-8 '>
            <div className='max-w-3xl'>
        <img src={express} alt="express" className='object-cover w-[800px]'/>
      </div>
  
        <div className='flex flex-col gap-8   mx-w-2xl'>
            <p>TRAINING & WORKSHOP</p>
            <p className='text-6xl font-bold'>Barista Training</p>
            <p>We train students to help them understand the fundamentals of baking and running a bakery.</p>
            <div>
                <button className='px-4 py-2 border-2'>
                    Learn More

                </button>
            </div>
            </div>
        
      
    </div>
    </Section>
  )
}

export default Barista

