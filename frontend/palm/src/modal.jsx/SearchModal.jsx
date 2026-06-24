import React from 'react'

const SearchModal = ({children}) => {
  return ( 
    <div className=' flex fixed inset-0 z-50 ' >
        <div className='absolute inset-0 bg-black/90  '> </div>
        <div className="relative    w-full  flex  ">
            <div className='flex items-center w-full justify-center'>
                   {children}

            </div>
            
        </div>
         

       




      
    </div>
  )
}

export default SearchModal
