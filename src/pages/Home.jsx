import React from "react";
import Career from "../components/Career";
import Carousel from "../components/Carousel";
import Favstack from "../components/Favstack";
import Footer from "../components/Footer";
import Me from "../components/Me";
//import resume from"../components/Resume";


const Home = () => {
  return <div>
    <Carousel />
    <Career />
    <Favstack/>
    <Me/>
{/* Suggested code may be subject to a license. Learn more: ~LicenseLog:338201967. */}
    {/* <Footer/> */}
  </div>;
};

export default Home;
