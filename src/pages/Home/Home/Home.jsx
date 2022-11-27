import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Advertise />
      <AboutUs />
    </div>
  );
};

export default Home;
