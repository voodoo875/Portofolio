import React from "react";
import Career from "../components/Career";
import Carousel from "../components/Carousel";
import Favstack from "../components/Favstack";
import Footer from "../components/Footer";
import Me from "../components/Me";


const Home = () => {
  return <div>
    <Carousel />
    <Career />
    <Favstack/>
    <Me/>
    {/* <Footer/> */}
  </div>;
};

export default Home;
