import React from "react";
import heroBg from "../assets/image2.png"; // Background for hero
import webImg from "../assets/web.svg";   // New web app SVG
import mobileImg from "../assets/mob.svg"; // New mobile app SVG

const Services = () => {
  return (
    <div>

      {/* === Hero Section === */}
      <div 
        className="relative w-full h-screen flex items-end justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 max-w-3xl px-6 text-white mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Focusing on quality and <br /> execution excellence
          </h1>
          <p className="text-lg md:text-xl mb-10">
            We will be happy to assist you at any and every stage of the software development lifecycle: from conceptualization, business analysis and prototyping to the development and deployment of a complete solution
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-lg font-semibold rounded">
            Get a free consultation
          </button>
        </div>
      </div>

      {/* === Omnichannel Applications Section === */}
      <div className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Omnichannel applications</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-12">
          Our skilled engineering teams are creating solutions that solve your business needs by developing products with lifetime code warranty
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Web Applications Card */}
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center">
            <img src={webImg} alt="Web Applications" className="w-[240px] mb-6" />
            <h3 className="text-xl font-bold text-blue-900 mb-4">Web applications</h3>
            <p className="text-gray-700">
              Development of custom software for web-environment. We are ready to develop a reliable custom software solution that will not only bring the idea to life or increase the innovativeness of the business, but also improve your internal processes.
            </p>
          </div>

          {/* Mobile Applications Card */}
          <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center text-center">
            <img src={mobileImg} alt="Mobile Applications" className="w-[280px] mb-6" />
            <h3 className="text-xl font-bold text-blue-900 mb-4">Mobile applications</h3>
            <p className="text-gray-700">
              Development of custom software for mobile devices and adaptive mobile applications with the ability to integrate into the cloud and local storage for offline use. As a result, you get a custom mobile application for the most popular operating systems with a user-friendly interface.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
