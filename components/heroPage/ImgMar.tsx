"use client";

import Marquee from "react-fast-marquee";

interface Img {
  id: number;
  imageUrl: string;
  name: string;
}

const ImageMarquee = () => {
  const images: Img[] = [
    { id: 1, imageUrl: "products/hp1.webp", name: "Bag 1" },
    { id: 2, imageUrl: "products/hp2.webp", name: "Bag 2" },
    { id: 3, imageUrl: "products/hp3.webp", name: "Bag 3" },
    { id: 4, imageUrl: "Bag/p1.webp", name: "Bag 4" },
    { id: 5, imageUrl: "Bag/p2.webp", name: "Bag 5" },
  ];

  return (
    <div className="py-6 bg-white">
      <Marquee 
        gradient={false} 
        speed={50} 
        pauseOnHover={true}
      >
        {images.map((img) => (
          <div key={img.id} className="mx-1">
            <img
              src={img.imageUrl}
              alt={img.name}
              className="h-80 w-120 object-cover "
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ImageMarquee;
