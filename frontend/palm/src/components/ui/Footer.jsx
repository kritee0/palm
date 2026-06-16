import React from 'react'
import appstore from "../../assets/appstore.png"
import googlestore from "../../assets/googleplay.png"
import javafooterlogo from "../../assets/javafooterlogo.png"
const Footer = () => {
  return (
    <>
    <section>
    <div className='w-full  bg-black ' >
        <div className='  flex flex-col sm:flex-row md:flex-row lg:flex-row  gap-16 py-8 px-8 h-126 items-center justify-center'>
      
        <div className='flex items-center justify-center'>
            <img src={javafooterlogo} className='object-cover '/>
        </div>
        <div className='flex flex-col sm  text-white gap-5 '>
        <p className='font-bold'>Contact</p>
        <p className=' font-bold '>HeadOffice:</p>
        <p>Tridevi Marg-26 , Thamel , Kathmandu + 97714512536</p>
        <p className='font-bold'>Administrative Office:</p>
        <p>Purva Dhoka, Nagpokhari Lane, Kathmandu</p>
        <p>+97715919003</p>
        <p>info@himalayanjava.com</p>
          </div>
       
        <div className='  flex flex-col  gap-5  text-white  '>
            <p className='font-bold'>Training & Workshop</p>
            <p>Barista Coffee School</p>
            <p>Barista Training</p>
            <p>Bakery Training</p>
            <p>Career at Java</p>
            <p>Join our Talent Pool</p>
        </div>
        <div className=' flex flex-col gap-5 '>
            <p className='font-bold text-white '>Download our App</p>
            <img src={appstore} alt ="appstore" className='object-cover w-44  '/>
            <img src={googlestore} alt="googleplay" className='object-cover w-44'/>
        </div>
         </div>
         <div className='flex items-center justify-center flex-col'>
        <div className='flex gap-5 text-red-600 justify-center '>
            <p>
            Terms and Conditions 
            </p>
            <p>Privacy Policy</p>
            <p>Contact</p></div>
            <div className='flex text-red-600 '>
             <p>Himalayan Java.</p>
             <p>19999-2026</p>
             <p>|</p>
             <p>Powered by:thaeml.com</p>
             </div>
            


            </div>
          
           
            </div>

      
   
   
    </section>
    </>
  )
}

export default Footer
