import React from 'react'

const CommentUi = ({heading,smallHeading,star,text}) => {
  return (
    <div className='flex sm:flex-row md:flex-row lg:flex-row px-16  w-2xl  h-64 justify-center '>
    <div className=' max-w-2xl h-auto  flex  bg-white shadow-2xl rounded-2xl mt-8   '>
    <div className='  flex flex-col gap-5 px-4 py-4'>
      <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between'>
        <div className='flex flex-col gap-2'>
    <span className='font-bold text-2xl text-blue-950'>{heading}</span>
    <span className='text-gray-400'>{smallHeading}</span>
    </div>
    <span>{star}</span>
    </div>
    <span>{text}</span>
    </div>
      
    </div>
    </div>
    
  )
}

export default CommentUi
