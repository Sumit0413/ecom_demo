"use client";

import Marquee from "react-fast-marquee";

interface Img {
  id: number;
  imageUrl: string;
  name: string;
}

const BrandMarquee = () => {
  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Gucci",
    "Zara",
    "H&M",
    "Chanel",
    "Prada",
    "Louis Vuitton",
    "Versace",
  ];

  const images: Img[] = [
    {
      id: 1,
      imageUrl: "Bag/p1.webp",
      name: "Sample Bag 5",
    },
    {
      id: 2,
      imageUrl: "Bag/p2.webp",
      name: "Sample Bag 5",
    },
    {
      id: 3,
      imageUrl: "Bag/p3.webp",
      name: "Sample Bag 5",
    },
  ];

  return (
    <>
      <div className="py-4 bg-white">
        <Marquee gradient={false} speed={120} pauseOnHover>
          {brands.map((brand, index) => (
            <span key={index} className="mx-8 text-4xl text-gray-800">
              {brand}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="text-center">
        <h1 className="text-2xl uppercase tracking-widest text-gray-500 mb-2 pt-10">
          Curated from the house
        </h1>
      </div>

      <div className="flex justify-center items-center gap-3">
        {images.map((im) => (
          <div key={im.id} className="group cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden">
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

      <div className='h-300 w-full bg-[#F4F0EB] flex flex-col items-center justify-center'>
            <h1 className='text-center '>Discover the best deal</h1>
            <h1 className='text-9xl text-center font-light'>SALE UP TO 50% FOR ALL COLLECTION</h1>
            <button className='border p-4 mt-10 bg-black text-white cursor-pointer'>Shop Now</button>
     
          </div>
    </>
  );
};

export default BrandMarquee;
