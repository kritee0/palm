import React from 'react'
import Section from '../../common/Section'
import express from "../../assets/express.jpg"

const Bakery = () => {
  return (
    <Section>
    <div className='px-16  sm:px-8  flex flex-col sm:flex-row     justify-between gap-36  '>
      
        <div className='flex flex-col gap-8  mx-w-2xl  justify-center'>
            <p>TRAINING & WORKSHOP</p>
            <p className='text-6xl font-bold'>Bakery Training</p>
            <p>We train students to help them understand the fundamentals of baking and running a bakery.</p>
            <div>
                <button className='px-4 py-2 border-2 '>
                    Learn More

                </button>
            </div>
            </div>
            <div className=' max-w-3xl'>
      <img src={express} alt="express" className='object-cover w-[800px]'/>
      </div>
      
    </div>
    </Section>
  )
}

export default Bakery
