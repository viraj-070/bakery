import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Abour from "../pages/Abour";
import Contact from "../pages/Contact";
import CustomCake from "../pages/CustomCake";

const route = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Abour />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/custom-cake" element={<CustomCake />} />
    </Routes>
  );
};

export default route;
