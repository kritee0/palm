import React from 'react'
import  everest from "../../assets/everest.png"
import thamel from "../../assets/thamelRoast.png"
import mediumroast from "../../assets/mediumroast.png"
import  exp from "../../assets/exp.png"
import Section from '../../common/Section'

const Roast = () => {
  return (
    <>
    <Section>
    <div className='  hidden   md:block bg-green-950 w-full h-54  relative '>
    <div className=' absolute inset-0 flex items-center  justify-between mb-36  px-16'>
        <div className='flex flex-col items-center gap-2 ' >
              <img src={everest} alt ="everest Roast" className='object-cover'/>
              <p className='text-white font-bold'>Everest Roast</p>
        </div>
      <div className=' flex  flex-col items-center gap-2'>
        <img src={thamel} alt="thamel roast" className='object-cover'/>
        <p className='text-white font-bold '>Thamel Roast</p>
        </div>
        <div className='  flex flex-col items-center gap-2'>
             <img src={exp} alt=" expressoRoast" className='object-cover '/>
             <p className='text-white font-bold'>Expresso Roast</p>
     
        </div>
        <div className='flex  flex-col items-center gap-2'>
             <img src={mediumroast} alt=" medium roast" className='object-cover'/>
             <p className='text-white font-bold'>Medium Roast</p>
        </div>
         
      
    </div>
    </div>
    </Section>
    </>
  )
}

export default Roast
