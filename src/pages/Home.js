import React from "react";
import HeroSlider from "../components/HeroSlider";

const Home = () => (
  <div className="relative w-full h-screen">
    <HeroSlider />
    <div className="absolute top-[40%] left-[10%] text-white">
      <h1 className="text-4xl md:text-6xl font-bold">Digital Acceleration Services</h1>
      <p className="text-xl md:text-2xl mt-2">
        For <span className="text-green-500 font-bold">Business Growth</span>
      </p>
      <button className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold text-lg rounded-lg hover:bg-green-600 transition">
        Get Started
      </button>
    </div>
  </div>
);

export default Home;
