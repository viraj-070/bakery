import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
const Hero = () => {
  const [slide, setSlide] = useState(0);

  const data = [
    {
      title: "We made best Donuts here",
      text: "Discover the perfect bite with our handcrafted donuts made fresh daily. From classic glazed to creative signature flavors, each donut is prepared with premium ingredients and pure passion. Bite into fluffy, soft goodness that melts in your mouth. Whether you prefer traditional or adventurous flavors, our diverse collection ensures everyone finds their favorite. Join us for a sweet experience!",
      img: "https://static.vecteezy.com/system/resources/thumbnails/070/038/092/small/delicious-pink-frosted-donut-adorned-with-colorful-sprinkles-situated-in-the-lower-right-corner-photo.jpg",
    },
    {
      title: "We made best Cakes here",
      text: "Celebrate life's sweetest moments with our exquisite custom cakes. Every cake is a masterpiece, crafted with attention to detail and quality ingredients. From elegant wedding cakes to playful birthday creations, our expert bakers design cakes that taste as incredible as they look. Personalize your cake with your favorite flavors. Let us turn your special occasions into unforgettable memories!",
      img: "https://media.istockphoto.com/id/1367867508/photo/person-holding-a-birthday-cake.jpg?s=612x612&w=0&k=20&c=Ns072M8q72-CPaqI26XWph800Ovd5a3iUpXCu0tv-l4=",
    },
    {
      title: "We made best Breads here",
      text: "Experience the warmth and aroma of freshly baked artisan bread. Our skilled bakers use traditional techniques and premium flour to create loaves that are crusty outside and perfectly soft inside. From rustic sourdough to whole grain varieties, each bread is baked to perfection. Perfect for any meal, our breads elevate your dining experience. Taste the difference quality and passion make!",
      img: "https://img.freepik.com/free-photo/sliced-bread-wood-white-white-table-gray-surface-side-view-space-text_176474-6212.jpg?semt=ais_incoming&w=740&q=80",
    },
  ];

  const next = () => {
    setSlide((slide + 1) % data.length);
  };

  const prev = () => {
    setSlide((slide - 1 + data.length) % data.length);
  };

  return (
    <div className="w-full h-[500px] relative">
      <div
        className="w-full h-full bg-cover bg-center "
        style={{ backgroundImage: `url(${data[slide].img})` }}
      >
        <div className="w-full h-full bg-black/50 flex items-center px-8 md:px-32">
          <div>
            <h1 className="text-white text-5xl font-bold mb-4">
              {data[slide].title}
            </h1>
            <p className="text-gray-200 mb-6 text-sm md:text-md w-[90vw] md:max-w-[50vw]">
              {data[slide].text}
            </p>
            <button className="bg-yellow-600 px-6 py-2 rounded-full text-xl text-white font-bold">
              Read more
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-5 top-1/2 text-white text-2xl bg-primary rounded-full p-2"
      >
        <ArrowLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-5 top-1/2 text-white text-2xl bg-primary rounded-full p-2"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Hero;
