import Hero from '@/components/heroPage/Hero'
import React from 'react'
import HeroProducts from '@/components/heroPage/HeroProducts'
import HeroBags from '@/components/heroPage/HeroBags'
import Herobanner from '@/components/heroPage/Herobanner'

const page = () => {
  return (
    <>
      
      <Hero />
      <HeroProducts />
      <Herobanner />
      <HeroBags />
      <Herobanner />
      
    </>
  )
}

export default page