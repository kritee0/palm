import React from 'react'
import HeroSection from '../components/HeroSection'
import MidSection from '../components/MidSection'
import CoffeeFarming from '../components/CoffeeFarming'
import Brewing from '../components/Brewing'
import Online from '../components/Online'

const MainPage = () => {
  return (
    <div>
        <>
        <HeroSection/>
        <MidSection/>
        <CoffeeFarming/>
        <Brewing/>
        <Online/>
        </>
      
    </div>
  )
}

export default MainPage
