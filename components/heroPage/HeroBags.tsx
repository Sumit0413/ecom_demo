const HeroBags = () => {
  interface Bag {
    id: number;
    name: string;
    price?: number;
    imageUrl: string;
  }
  
  const Bag = [{
    id: 1,
    name: 'Sample Bag 1',
    imageUrl: 'Bag/b1.webp',
    price: 49.99,
  },
  {
    id: 2,
    name: 'Sample Bag 2',
    imageUrl: 'Bag/b2.webp',
    price: 49.99,
  },
  {
    id: 3,
    name: 'Sample Bag 3',
    imageUrl: '/Bag/b3.webp', // Note: inconsistent path - remove leading slash
    price: 49.99,
  },
  {
    id: 4,
    name: 'Sample Bag 4',
    imageUrl: 'Bag/b4.webp',
    price: 49.99,
  }]

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
    <div className=" bg-[#F1F1F1]">
      {/* Header */}
      <div className="text-center ">
        <h1 className="text-2xl uppercase tracking-widest text-gray-500 mb-2 pt-10">
          Curated from the house
        </h1>
      </div>

      {/* Bags Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Bag.map((bag) => (
          <div 
            key={bag.id} 
            className="group cursor-pointer  overflow-hidden">
           
            <div className="relative overflow-hidden "> 
              <img 
                src={bag.imageUrl} 
                alt={bag.name} 
                className="w-full h-80 object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div className="p-4 text-center">
              <h3 className=" text-lg mb-2 text-gray-800">{bag.name}</h3>
              <p className="text-gray-600 font-medium">
                ${bag.price?.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-8"> {/* Added margin top and proper width */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="w-full h-auto object-cover" // Changed to h-auto for better responsiveness
        >
          <source src="/video/full.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

        <div className="text-center ">
        <h1 className="text-2xl uppercase tracking-widest text-gray-500 mb-2 pt-10">
        campaign styles
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
    </div>  
    
  )
}

export default HeroBags