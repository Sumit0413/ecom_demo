'use client';

import Image from 'next/image'
import React from 'react'
import Herobanner from '@/components/heroPage/Herobanner'

const Textbnr = () => {
   interface img {
      id: number;
      imageUrl: string;
      name: string;
    }
  
    const img=[
      {
          id:1,
          imageUrl:'products/hp1.webp',
          name:'Sample Bag 5',
      },
      {
          id:2,
          imageUrl:'products/hp2.webp',
          name:'Sample Bag 5',
      },
      {
          id:3,
          imageUrl:'products/hp3.webp',
          name:'Sample Bag 5',
      },
    ]
  return (
    <>
    
    <div className='h-300 w-full bg-[#F4F0EB] flex flex-col items-center justify-center'>
      <h1 className='text-center '>Discover the best deal</h1>
      <h1 className='text-9xl text-center font-light'>SALE UP TO 50% FOR ALL COLLECTION</h1>
      <button className='border p-4 mt-10 bg-black text-white cursor-pointer'>Shop Now</button>
<div className='flex justify-between items-center gap-20 absolute '>
    <Image
      src="/video/left-1.webp"
      alt="Decorative Line"
      width={520}
      height={200}
      className="mt-10"
    />

      <Image
      src="/video/right-2.webp"
      alt="Decorative Line"
      width={480}
      height={200}
      className="mt-10"
    />
</div>
    </div>
      <Herobanner />

     <div className="text-center ">
        <h1 className="text-2xl uppercase tracking-widest text-gray-500 mb-2 pt-10">
          Curated from the house
        </h1>
      </div>
      <div className="flex justify-center items-center gap-3">
        
        
        {img.map((im) => (
          <div 
            key={im.id} 
            className="group cursor-pointer  overflow-hidden ">
           
            <div className="relative overflow-hidden "> 
              <img 
                src={im.imageUrl} 
                alt={im.name} 
                className="w-full h-130 object-cover"
              />
            </div>
            <h1 className="text-center p-3">{im.name}</h1>
            
        
          </div>
        ))}
      </div>
    </>
  )
}

export default Textbnr