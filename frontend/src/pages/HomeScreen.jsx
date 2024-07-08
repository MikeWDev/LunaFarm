import React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";
import ModulesDisplay from "./ModulesDisplay";
const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ModulesDisplay />
    </div>
  );
};

export default HomeScreen;
