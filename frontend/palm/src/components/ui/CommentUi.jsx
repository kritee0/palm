import React from 'react'

const CommentUi = ({heading,smallHeading,star,text}) => {
  return (
    <div className='px:16 flex flex-col sm:flex-row bg-amber-50 shadow-2xl border-2 border-gray-400'>
    <div className='  flex flex-col gap-5'>
      <div className='flex flex-col sm:flex-row justify-between'>
        <div className='flex flex-col gap-2'>
    <span className='font-bold text-2xl text-violet-400'>{heading}</span>
    <span className='text-gray-400'>{smallHeading}</span>
    </div>
    <span>{star}</span>
    </div>
    <span>{text}</span>
    </div>
      
    </div>
  )
}

export default CommentUi
