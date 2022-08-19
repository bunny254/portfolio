import React from "react";
import Nav from "./nav";
import Home from "./home";
import About from "./about";

const LandingPage = () => {
  return (
    <div>
      <Nav />
      <Home/>
      <About/>
    </div>
  );
};

export default LandingPage;
