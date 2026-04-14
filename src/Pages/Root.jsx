import React from 'react'
import NavSection from '../Component/NavSection/NavSection'
import HeroSection from '../Component/HeroSection/HeroSection'
import Footer from '../Component/FooterSection/Footer'
import { Outlet } from 'react-router'

const Root = () => {
  return (
    <div className='h-screen flex flex-col'>
      <NavSection></NavSection>
      {/* <div className='bg-[#f5f5f5] h-auto'>
        <HeroSection></HeroSection>
      </div> */}
      <div className='flex-1 bg-[#F5F5F5] pb-10'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root
