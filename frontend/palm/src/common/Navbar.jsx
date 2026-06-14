import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
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
    <div className='  flex   items-center  max-w-full     py-2   bg-amber-50  text-black z-20 justify-between  shrink-0 '>

      <div>
        <img src="https://himalayanjava.com/wp-content/uploads/2023/08/java-newlogo.png" alt="png image" className='w-24 h-auto'/>
      </div>
        <div className='   hidden sm:flex  md:flex  items-center  justify-center     sm:flex-row   md:flex-row lg:flex-row  px:0 sm:px-0 md:py-0   font-montserrat text-xs sm:text-xs md:text-xs lg:text-xl  gap-5 cursor-pointer '>
          {
            items.map((item=>(
              
              <div className='flex gap-1   ' >    
                { item.name}
                <div className='  sm:flex md:flex lg:flex  items-center'>  
                { item.icon && <item.icon size={16}/>}
                </div>
                </div>
                
                
            )))
          } 
          
        </div>
        <div className='   flex     items-center'>
              <FaSearch size={16} />
          </div>

          

          {isOpen?(
            
          <RxCross2  size={24} onClick={clickButton}/>
          ):(
              <div className=' sm:hidden md:hidden lg:hidden '>
              <IoReorderThreeOutline size={24}  onClick={clickButton} />
          </div>
          )}
        

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
    </div>
     
   
    </>
  )
}

export default Navbar
