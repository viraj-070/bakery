import React from "react";

const Services = () => {
  return (
    <div className="w-full h-fit px-4 md:px-0 py-9 max-w-7xl mx-auto ">
      <h1 className="text-5xl font-extrabold text-accent border-b-4 border-accent text-center mt-7 md:mt-12 w-fit mx-auto pb-2">
        Services
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-center items-center text-white mt-24 md:mt-28 gap-6 md:gap-4">
        <div className="w-full md:w-1/2">
          <div className="bg-zinc-500 rounded-4xl h-[200px] w-full h-[300px] md:w-[500px] overflow-hidden border-6 border-accent">
            <img
              className="w-full h-full object-cover"
              src="https://www.warmoven.in/cdn/shop/files/timeless-love-anniversary-cake.jpg?v=1749833305&width=1080"
              alt=""
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex gap-5 flex-1 flex-col">
          <h1 className="text-3xl md:text-6xl font-bold">
            Custom Cakes for Every Occasion
          </h1>
          <p className="w-[97%] md:w-[70%] ">
            Our talented bakers craft unique and delicious custom cakes tailored
            to your special occasions, whether it's a birthday, wedding,
            anniversary, or any other celebration. From elegant designs to
            intricate details, we create cakes that not only look stunning but
            also taste divine.
          </p>
          <button className="px-4 py-2 w-fit rounded-full bg-yellow-600 text-white font-bold text-xl">
            Explore
          </button>
        </div>
      </div>

      <hr className="bg-zinc-600 h-[2px] border-none w-full my-16" />

      <div className="w-full flex flex-col md:flex-row justify-center items-center md:flex-row-reverse text-white gap-6 mdLgap-4">
        <div className="w-full md:w-1/2">
          <div className="bg-zinc-500 rounded-4xl h-[200px] w-full h-[300px] md:w-[500px] overflow-hidden border-6 border-accent">
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSduJnJnC-AwpyXqTTbwBxWRZq0KX4Hgs5A&s"
              alt=""
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex gap-5 flex-1 flex-col">
          <h1 className="text-3xl md:text-6xl font-bold">
            Indulge in Freshly Baked Pastries
          </h1>
          <p className="w-[97%] md:w-[70%] ">
            Treat yourself to our delectable selection of fresh pastries baked
            daily with the finest ingredients. From buttery croissants to sweet
            Danish pastries, every bite is a moment of pure indulgence. Our
            pastry artisans combine traditional recipes with modern flavors to
            create an extraordinary culinary experience. Perfect for breakfast,
            brunch, or an afternoon treat. Discover your new favorite pastry
            with us!
          </p>
          <button className="px-4 py-2 w-fit rounded-full bg-yellow-600 text-white font-bold text-xl">
            Explore
          </button>
        </div>
      </div>

      <hr className="bg-zinc-600 h-[2px] border-none w-full my-16" />

      <div className="w-full flex flex-col md:flex-row justify-center items-center text-white gap-6 md:gap-4">
        <div className="w-full md:w-1/2">
          <div className="bg-zinc-500 rounded-4xl h-[200px] w-full h-[300px] md:w-[500px] overflow-hidden border-6 border-accent">
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx92T82615IkeXEGMDXmRDUWeA-JX98x0YTQ&s"
              alt=""
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex gap-5 flex-1 flex-col">
          <h1 className="text-3xl md:text-6xl font-bold">
            Savor the Taste of Artisan Bread
          </h1>
          <p className="w-[97%] md:w-[70%] ">
            Discover the authentic taste of artisan bread baked with
            time-honored techniques and premium ingredients. Our master bakers
            craft each loaf to perfection, achieving that ideal crust and tender
            crumb. From hearty whole grains to delicate sourdough, we offer a
            variety that satisfies every preference. Perfect for sandwiches,
            toast, or simply enjoying with butter. Experience bread the way it
            was meant to be!
          </p>
          <button className="px-4 py-2 w-fit rounded-full bg-yellow-600 text-white font-bold text-xl">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
