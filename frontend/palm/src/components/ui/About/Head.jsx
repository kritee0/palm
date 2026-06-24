import React from 'react'
import express from "../../../assets/express.jpg"


const Head = () => {
  return (
   
    <div className='fixed  top-0 w-full  mt-20 '>
        <img src={express} alt="express" className=' w-full h-screen object-content'/>  
        <div className=' flex items-center  justify-center'>
            <div className='relative'>
                 <p className='font-bold '>
            Since 1999
        </p>
            </div>
       
        </div>
    </div>
 
  )
}

export default Head
