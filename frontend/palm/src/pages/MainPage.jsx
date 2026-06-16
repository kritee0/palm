import React from 'react'
import HeroSection from '../components/HeroSection'
import MidSection from '../components/MidSection'
import CoffeeFarming from '../components/CoffeeFarming'
import Brewing from '../components/Brewing'
import Online from '../components/Online'
import Equipment from '../components/ui/Equipment'
import Roast from '../components/ui/Roast'
// import Footer from '../components/ui/Footer'
import Barista from '../components/ui/Barista'
import Bakery from '../components/ui/Bakery'
import Comment from '../components/ui/Comment'

const MainPage = () => {
  return (
    <div>
        <>
        <HeroSection/>
        <MidSection/>
        <CoffeeFarming/>
        <Brewing/>
        <Online/>
      <Roast/>
        <Equipment/>
        <Barista/>
        <Bakery/>
        <Comment/>
        {/* <Footer/> */}
        </>
      
    </div>
  )
}

export default MainPage
