import React from "react";
import Career from "../components/Career";
import Carousel from "../components/Carousel";
import Favstack from "../components/Favstack";
import Footer from "../components/Footer";

const Home = () => {
  return <div>
    <Carousel />
    <Career />
    <Favstack/>
    <Footer/>
  </div>;
};

export default Home;
