import React from "react";

const Products = () => {

  const cakeProducts = [
    {
      name: "Chocolate Delight",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJawUY16xoWqTEBU0cNJlP7dFEq4m3u7GAg&s",
      description:
        "A rich and indulgent chocolate cake, perfect for any occasion.",
      price: 500,
      topSeller: false,
    },
    {
      name: "Red Velvet Dream",
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7",
      description: "A classic red velvet cake with cream cheese frosting.",
      price: 600,
      topSeller: false,
    },
    {
      name: "Vanilla Bliss",
      image:
        "https://cakestry15.com/cdn/shop/files/classic-vanilla-bliss-1kg-eggless-cake.webp?v=1746777405&width=1946",
      description: "A simple yet delicious vanilla cake, loved by all.",
      price: 400,
      topSeller: true,
    },
    {
      name: "Blueberry Blast",
      image:
        "https://cdn.bloomsflora.com/uploads/product/bloomsflora/13202_100_13202.webp",
      description: "Sweet blueberry flavor with vibrant frosting.",
      price: 650,
      topSeller: false,
    },
    {
      name: "Strawberry Cream Cake",
      image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
      description: "Fresh strawberries layered with soft cream cake.",
      price: 550,
      topSeller: true,
    },
    {
      name: "Black Forest Cake",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
      description: "Chocolate sponge with cherries and whipped cream.",
      price: 700,
      topSeller: true,
    },
    {
      name: "Butterscotch Cake",
      image: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4",
      description: "Crunchy caramel layers with butterscotch flavor.",
      price: 520,
      topSeller: false,
    },
    {
      name: "Pineapple Cake",
      image:
        "https://assets.winni.in/product/primary/2022/9/73524.jpeg?dpr=1&w=1000",
      description: "Refreshing pineapple flavor with whipped cream.",
      price: 480,
      topSeller: false,
    },
  ];

  const breadProducts = [
    {
      name: "Sourdough Bread",
      image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
      description: "Crusty sourdough bread with a soft interior.",
      price: 120,
      topSeller: true,
    },
    {
      name: "Whole Wheat Bread",
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df",
      description: "Healthy whole wheat bread rich in fiber.",
      price: 90,
      topSeller: false,
    },
    {
      name: "Ciabatta Bread",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2DnasQEP9hZBZhTv_V_9yVLCIfr1krYiJyA&s",
      description: "Italian bread with airy texture.",
      price: 150,
      topSeller: false,
    },
    {
      name: "Brioche Bread",
      image:
        "https://static.toiimg.com/thumb/59941168.cms?width=1200&height=900",
      description: "Soft, buttery and slightly sweet bread.",
      price: 180,
      topSeller: true,
    },
    {
      name: "Multigrain Bread",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73",
      description: "Loaded with healthy grains and seeds.",
      price: 110,
      topSeller: false,
    },
    {
      name: "French Baguette",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
      description: "Classic crispy French baguette.",
      price: 130,
      topSeller: true,
    },
    {
      name: "Garlic Bread",
      image:
        "https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg",
      description: "Toasted bread with garlic butter flavor.",
      price: 140,
      topSeller: true,
    },
    {
      name: "Focaccia Bread",
      image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e",
      description: "Italian flatbread topped with herbs.",
      price: 160,
      topSeller: false,
    },
  ];

 const donutProducts = [
   {
     name: "Glazed Donut",
     image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
     description: "Classic donut with sweet sugar glaze.",
     price: 80,
     topSeller: true,
   },
   {
     name: "Chocolate Frosted Donut",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4wZxu2VSxNkM6q21H2dqtshwFac8_dyOidg&s",
     description: "Rich chocolate coated donut.",
     price: 100,
     topSeller: true,
   },
   {
     name: "Jelly-Filled Donut",
     image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
     description: "Donut filled with fruity jelly.",
     price: 90,
     topSeller: false,
   },
   {
     name: "Old-Fashioned Donut",
     image: "https://umpquadairy.com/wp-content/uploads/donut-blog-3.jpg",
     description: "Crunchy classic donut with a vintage taste.",
     price: 85,
     topSeller: false,
   },
   {
     name: "Strawberry Sprinkle Donut",
     image:
       "https://cookiesforday.com/wp-content/uploads/2025/08/strawberry-frosted-donuts-sprinkles.webp",
     description: "Strawberry icing with colorful sprinkles.",
     price: 110,
     topSeller: true,
   },
   {
     name: "Cream Filled Donut",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuk6iSWRDVCjbtNbeoSxYn2iOcOVBedY-IRA&s",
     description: "Soft donut filled with creamy filling.",
     price: 120,
     topSeller: true,
   },
   {
     name: "Caramel Donut",
     image:
       "https://doughandcream.com/cdn/shop/files/Caramel_Donut_1080x.jpg?v=1732651697",
     description: "Sweet caramel glazed donut.",
     price: 105,
     topSeller: false,
   },
   {
     name: "Blueberry Donut",
     image:
       "https://aclassictwist.com/wp-content/uploads/2014/08/Browned-Butter-Blueberry-Donuts.jpg",
     description: "Donut with fresh blueberry flavor.",
     price: 115,
     topSeller: false,
   },
 ];

  return (
    <div className="w-full h-fit px-4 md:px-0 py-9 max-w-7xl mx-auto ">
      <h1 className="text-5xl font-extrabold text-accent border-b-4 border-accent text-center mt-7 md:mt-4 w-fit mx-auto pb-2">
        Products
      </h1>

      <div className="mt-16 md:mt-18 w-full flex flex-col gap-6">
        <h1 className="text-2xl font-extrabold text-accent border-b-4 border-accent text-left mt-7 md:mt-12 w-fit pb-2">
          Delectable Cake Collection
        </h1>
        <div className="flex overflow-x-auto flex-nowrap gap-5 pb-3">
          {cakeProducts.map((product) => (
            <div className="w-[250px] h-[300px] shrink-0 bg-zinc-500 rounded-4xl border-5 border-yellow-500 overflow-hidden flex flex-col">
              <img
                className="w-full h-[55%] object-cover flex-1 bg-red-500"
                src={product.image}
                alt={product.name}
              />

              <div className="flex flex-col p-2 justify-between bg-white h-[45%]">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold">{product.name}</h1>
                  <p className="text-sm">{product.description}</p>
                </div>
                <button className="w-full bg-yellow-500 text-black border border-black p-1 rounded-full ">
                  ₹ {product.price} Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-9 md:mt-7 w-full flex flex-col gap-6">
        <h1 className="text-2xl font-extrabold text-accent border-b-4 border-accent text-left mt-7 md:mt-12 w-fit pb-2">
          Fresh Baked Collection
        </h1>
        <div className="flex overflow-x-auto flex-nowrap gap-5 pb-3">
          {breadProducts.map((product) => (
            <div className="w-[250px] h-[300px] shrink-0 bg-zinc-500 rounded-4xl border-5 border-yellow-500 overflow-hidden flex flex-col">
              <img
                className="w-full h-[55%] object-cover flex-1 bg-red-500"
                src={product.image}
                alt={product.name}
              />

              <div className="flex flex-col p-2 justify-between bg-white h-[45%]">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold">{product.name}</h1>
                  <p className="text-sm">{product.description}</p>
                </div>
                <button className="w-full bg-yellow-500 text-black border border-black p-1 rounded-full ">
                  ₹ {product.price} Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-9 md:mt-7 w-full flex flex-col gap-6">
        <h1 className="text-2xl font-extrabold text-accent border-b-4 border-accent text-left mt-7 md:mt-12 w-fit pb-2">
          Donut Delightful Collection
        </h1>
        <div className="flex overflow-x-auto flex-nowrap gap-5 pb-3">
          {donutProducts.map((product) => (
            <div className="w-[250px] h-[300px] shrink-0 bg-zinc-500 rounded-4xl border-5 border-yellow-500 overflow-hidden flex flex-col">
              <img
                className="w-full h-[55%] object-cover flex-1 bg-red-500"
                src={product.image}
                alt={product.name}
              />

              <div className="flex flex-col p-2 justify-between bg-white h-[45%]">
                <div className="flex flex-col gap-2">
                  <h1 className="font-semibold">{product.name}</h1>
                  <p className="text-sm">{product.description}</p>
                </div>
                <button className="w-full bg-yellow-500 text-black border border-black p-1 rounded-full ">
                  ₹ {product.price} Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
