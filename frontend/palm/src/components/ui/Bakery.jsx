import React from 'react'
import Section from '../../common/Section'

const Bakery = () => {
  return (
    <Section>
    <div className='px-16 py-4 sm:px-8 py:4  flex flex-col sm:flex-row   '>
        <div className='flex flex-col gap-8'>
            <p>TRAINING & WORKSHOP</p>
            <p className='text-6xl font-bold'>Bakery Training</p>
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

export default Bakery
