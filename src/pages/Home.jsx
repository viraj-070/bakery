import React from "react";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Products from "../components/Home/products";

const Home = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-fixed "
      style={{ backgroundImage: `url('/background.png')` }}
    >
      <Hero />
      <Services />
      <Products />
    </div>
  );
};

export default Home;
