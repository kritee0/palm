import React from 'react'

const LocationUi = ({image,text}) => {
  return (
  
     
        <div className=' mb-16   '>
        <img  src={image} alt="image" className='w-[500px] h-auto sm:w-44 sm:h-44'/>
          
            <p className='mt-4'>{text}</p>
        
        </div>
      

     


 
  )
}

export default LocationUi
