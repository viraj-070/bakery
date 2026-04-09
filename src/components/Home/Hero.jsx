import React, { useState } from "react";
import {ArrowRight, ArrowLeft} from "lucide-react";
const Hero = () => {
  const [slide, setSlide] = useState(0);

  const data = [
    {
      title: "We made best Donuts here",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem maxime ea perspiciatis soluta animi ab necessitatibus odit amet debitis veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, excepturi mollitia! Quia possimus totam incidunt rerum, consequatur maiores repellendus, repellat sunt nisi, nostrum optio est corrupti dolores natus. Iusto, eveniet.",
      img: "https://static.vecteezy.com/system/resources/thumbnails/070/038/092/small/delicious-pink-frosted-donut-adorned-with-colorful-sprinkles-situated-in-the-lower-right-corner-photo.jpg",
    },
    {
      title: "We made best Cakes here",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem maxime ea perspiciatis soluta animi ab necessitatibus odit amet debitis veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, excepturi mollitia! Quia possimus totam incidunt rerum, consequatur maiores repellendus, repellat sunt nisi, nostrum optio est corrupti dolores natus. Iusto, eveniet.",
      img: "https://media.istockphoto.com/id/1367867508/photo/person-holding-a-birthday-cake.jpg?s=612x612&w=0&k=20&c=Ns072M8q72-CPaqI26XWph800Ovd5a3iUpXCu0tv-l4=",
    },
    {
      title: "We made best Breads here",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem maxime ea perspiciatis soluta animi ab necessitatibus odit amet debitis veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, excepturi mollitia! Quia possimus totam incidunt rerum, consequatur maiores repellendus, repellat sunt nisi, nostrum optio est corrupti dolores natus. Iusto, eveniet.",
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
            <button className="bg-yellow-400 px-6 py-2 rounded">
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