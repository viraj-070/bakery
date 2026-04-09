import React from "react";
import Route from "./routes/Route";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <Route />
    </div>
  );
};

export default App;
