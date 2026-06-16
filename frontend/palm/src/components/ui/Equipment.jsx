import React from 'react'
import equipment from "../../assets/equipment.jpg"

const Equipment = () => {
  return (
    <section>
    <div className='px-16 sm:px-4  flex flex-col  '>
      <div className='flex  flex-col sm:flex-row  justify-between   '>
        <img src={equipment} alt="equipment" className='object-cover w-2xl h-full'/>
        <div className='flex flex-col gap-8 '>
        <p className='text-gray-300'>BECAUSE WE LOVE COFFEE</p>
        <p className='text-6xl font-bold'>Coffee Equipment</p>
        <p>Himalayan java is the sole distributor of coffee equipment and products in Nepal</p>
        <div>
        <button className='border-2 border-black items-center px-4 py-2'>
            Learn More
        </button>
        </div>
        </div>
        </div>
      
    </div>
    </section>
  )
}

export default Equipment
