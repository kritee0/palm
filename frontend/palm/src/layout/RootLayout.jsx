import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
// import MainPage from '../pages/MainPage'
// import About from '../pages/About'

const RootLayout = () => {
  return (
    <div>
        
          <Navbar/>
          {/* <MainPage/>
          <About/>
             */}
        <Outlet/>
      
    </div>
  )
}

export default RootLayout
