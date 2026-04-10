import React from "react";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Products from "../components/Home/products";
import Faq from "../components/Home/Faq";

const Home = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url('/background.png')` }}
    >
      <Hero />
      <Services />
      <div className="w-full bg-zinc-900">
        <Products />
      </div>
      <Faq />
    </div>
  );
};

export default Home;
