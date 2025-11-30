import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
     <div className='relative w-full min-h-screen overflow-hidden'>
        <Image
          src='/hero.jpg'
          alt='Hero Image'
          width={1920}
          height={800}
          className='object-cover w-full h-full'
        />

        {/* Logo at top */}
        <div className='absolute top-8 left-1/2 transform -translate-x-1/2 z-10 text-white'>
          <Image
            src='/name.svg' 
            alt='name'
            height={250}
            width={950}
          />
        </div>

        {/* Text content in middle */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center w-full'>
          <div className='mb-8'>
            <h1 className='text-xl md:text-2xl uppercase tracking-widest mb-4'>Redefine Your Elegance</h1>
            <p className='text-4xl md:text-6xl lg:text-7xl font-light'>
              Dresses you'll adore
            </p>
          </div>
        </div>

        {/* Buttons at bottom */}
        <div className='absolute bottom-125 left-1/2 transform -translate-x-1/2 z-10 text-white flex gap-4'>
          <button className='bg-white text-black px-6 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gray-100 transition-colors min-w-[150px]'>
            Shop Dress
          </button>
          <button className='border-2 border-white text-white px-6 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-black transition-colors min-w-[150px]'>
            Shop Bags
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero