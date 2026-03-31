import React from 'react'
import NavSection from '../Component/NavSection/NavSection'
import HeroSection from '../Component/HeroSection/HeroSection'

const Root = () => {
  return (
    <div>
      <NavSection></NavSection>
      <div className='bg-[#f5f5f5] h-auto'>
        <HeroSection></HeroSection>
      </div>
    </div>
  )
}

export default Root
