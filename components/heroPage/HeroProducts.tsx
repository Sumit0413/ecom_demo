'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



interface Product {
  id: number;
  name: string;
  description: string;
  price?: number;
  imageUrl: string;
}

const HeroProducts = () => {
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Sample Product',
      description: 'This is a sample product description.',
      imageUrl: 'products/p1.webp',
      price: 29.99,
    },
    {
      id: 2,
      name: 'Sample Product 2',
      description: 'This is another sample product',
      imageUrl: 'products/p2.webp',
      price: 39.99,
    },
    {
      id: 3,
      name: 'Sample Product 3',
      description: 'This is another sample product',
      imageUrl: 'products/p3.webp',
      price: 49.99,
    },
    {
      id: 4,
      name: 'Sample Product 4',
      description: 'This is another sample product',
      imageUrl: 'products/p4.webp',
      price: 59.99,
    },
    {
      id: 5,
      name: 'Sample Product 5',
      description: 'This is another sample product',
      imageUrl: 'products/p5.webp',
        price: 69.99,
    },
    {
      id: 6,
      name: 'Sample Product 6',
      description: 'This is another sample product',
      imageUrl: 'products/p6.webp',
        price: 79.99,
    },
    {
      id: 7,
      name: 'Sample Product 7',
      description: 'This is another sample product',
      imageUrl: 'products/p7.webp',
        price: 89.99,
    },
  ]; 

  return (
    <>
   
    <div className="p-6 mx-3">
      <h2 className="text-2xl text-light text-[#474747] mb-4 text-center">Our Bestseller</h2>
      
      <Swiper
        
        spaceBetween={0}
        slidesPerView={4}
        breakpoints={{
          640: { 
            slidesPerView: 2 
          },
          1024: { 
            slidesPerView: 4,
            spaceBetween: 0  
          },
        }}
       
       
        className="mySwiper"
      >
        {products.map((product: Product) => (
          <SwiperSlide key={product.id}>
            <div className="  flex flex-col items-center h-full cursor-pointer ">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className=" h-138 object-contain mb-4 " 
              />
              <h3 className="text-lg  mb-2 text-center">{product.name}</h3>
              <p className="text-gray-600 text-center flex-grow">{product.description}</p>
              <p className="text-lg  mt-2 text-center">${product.price?.toFixed(2)}</p>    
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   
   </>
  )
}

export default HeroProducts