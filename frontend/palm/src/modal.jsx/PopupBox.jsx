import React from 'react'

const PopupBox = ({children}) => {
  return (
    <div className=' flex  fixed  top-0 '>
        <div className=' absolute w-full h-full bg-white/50 '>
        
        </div>
        <div className=' relative w-[200Px] h-[200Px] flex flex-col items-center justify-center'>
            {children}

        </div>
      

    </div>
  )
}

export default PopupBox
