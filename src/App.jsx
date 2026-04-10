import React from "react";
import Route from "./routes/Route";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <Navbar />
      <Route />
      <Footer />
    </div>
  );
};

export default App;
