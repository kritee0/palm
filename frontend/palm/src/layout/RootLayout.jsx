import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../common/Navbar'
import MainPage from '../pages/MainPage'

const RootLayout = () => {
  return (
    <div>
        
          <Navbar/>
          <MainPage/>
            
        <Outlet/>
      
    </div>
  )
}

export default RootLayout
