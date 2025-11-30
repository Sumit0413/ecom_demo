'use client';
import React from 'react'
import Image from 'next/image';

const Herobanner = () => {
  return (
  <>
   <div className='flex justify-center items-center '>

     <div className='w-1/2  h-180'>
      <Image
        src="/video/vdoimg2.webp"
        alt="Hero Image 2"
        width={1920}
        height={600}
        className="w-full h-180  object-cover"
      />
    </div>

      <div className="w-1/2 h-180">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        src="/video/Herovideo.mp4"
        onError={(e) => { console.error('Video playback error', e); }}
        className="w-full h-full object-cover"
      >
        <source src="/video/Herovideo.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    </div>

   
    </div>
  </>
  )
}

export default Herobanner