import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const items=[
    {
      name:"Home"
    },
    {
      name:"About Us"
    },
    {
      name:"Service", icon:FaAngleDown
    },{
      name:"Location", icon:FaAngleDown
    },{
      name:"Francies"
    },{
      name:"Loyality app"
    },{
      name:"Career At Java"
    },{
      name:"Express", icon:FaAngleDown
    }
  ]
  const clickButton=()=>{
    setIsOpen(!isOpen)



  }
  return (
    <>   
    <div className='  flex    sm:flex-col md:flex-row  lg:flex-row  max-w-full   border-2  h-64  sm:h-16 md:h-16   bg-amber-50 border-b-gray-400 text-black z-20 justify-between  shrink-0 '>

      <div>
        <img src="https://himalayanjava.com/wp-content/uploads/2023/08/java-newlogo.png" alt="png image" className='w-24'/>
      </div>
        <div className='   hidden md:flex  items-center  justify-center     sm:flex-row   md:flex-row lg:flex-row  px:0 sm:px-0 md:py-0   font-montserrat text-xs sm:text-xs md:text-xs lg:text-xl  gap-5 cursor-pointer '>
          {
            items.map((item=>(
              
              <div className='flex gap-1   ' >    
                { item.name}
                <div className=' hidden sm:flex  items-center'>  
                { item.icon && <item.icon size={16}/>}
                </div>
                </div>
                
            )))
          } 
        </div>

          <div className='flex items-center'>
              <FaSearch size={16} />
          </div>
          <div className=' show sm:hidden md:hidden lg:hidden '>
              <IoReorderThreeOutline size={24}  onClick={clickButton} />
          </div>
    </div>
      {isOpen   && (
            <>
            <div>
              {

                items.map((item)=>(
                  <div className=' flex'>
                  {item.name}
                  {item.icon && <item.icon size={16}/>}
                   <div className='flex '>  
                { item.icon && <item.icon size={16}/>}
                </div>

                  </div>

                ))
              }
            </div>
            </>
          )}
   
    </>
  )
}

export default Navbar
