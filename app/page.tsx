import Hero from '@/components/heroPage/Hero'
import React from 'react'
import HeroProducts from '@/components/heroPage/HeroProducts'
import HeroBags from '@/components/heroPage/HeroBags'
import Herobanner from '@/components/heroPage/Herobanner'
import Textbnr from '@/components/heroPage/Textbnr'
import BrandMarquee from '@/components/heroPage/Marquee'
import ImgMar from '@/components/heroPage/ImgMar'

const page = () => {
  return (
    <>
      
      <Hero />
      <HeroProducts />
      <Herobanner />
      <HeroBags />

      <Textbnr />
      <BrandMarquee />
      <ImgMar />
      
    
      
    </>
  )
}

export default page