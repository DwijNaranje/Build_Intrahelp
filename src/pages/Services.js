import React from "react";
import heroBg from "../assets/image2.png";
import webImg from "../assets/web.svg";
import mobileImg from "../assets/mob.svg";
import diagram from "../assets/Diagram.svg"; // 👈 Imported new diagram image
import Consultation from "./Consultation"; // Import Consultation Component

const Services = () => {
  return (
    <div>

      {/* === Hero Section === */}
      <div 
        className="relative w-full h-screen flex items-end justify-center text-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

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
            <img src={webImg} alt="Web Applications" className="w-[280px] mb-6" />
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

      {/* === Solution Development Cycle Section === */}
      <div className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-24">Solution development cycle</h2>
        <div className="flex justify-center">
          <img src={diagram} alt="Solution Development Cycle Diagram" className="w-full max-w-4xl" />
        </div>
      </div>


            {/* === Why Choose Us Section === */}
            <div className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Why choose us?</h2>
        <p className="text-blue-600 text-lg font-semibold mb-12">Advantages</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
          {/* Card 1 */}
          <div>
            <div className="text-4xl text-blue-600 mb-4">🧩</div>
            <h3 className="text-lg font-bold mb-2">Turnkey solution</h3>
            <p className="text-gray-700 text-sm">
              Business analysis, development, support and development from a single vendor
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <div className="text-4xl text-blue-600 mb-4">📈</div>
            <h3 className="text-lg font-bold mb-2">Increased business value</h3>
            <p className="text-gray-700 text-sm">
              The solution is tailored to the market and is able to solve business problems that it faces
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <div className="text-4xl text-blue-600 mb-4">🏆</div>
            <h3 className="text-lg font-bold mb-2">Uniqueness</h3>
            <p className="text-gray-700 text-sm">
              The ability to gain a competitive advantage with the help of a unique functionality of the software solution
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <div className="text-4xl text-blue-600 mb-4">🎖️</div>
            <h3 className="text-lg font-bold mb-2">Lifetime warranty</h3>
            <p className="text-gray-700 text-sm">
              To the software solution
            </p>
          </div>
        </div>
      </div>

      {/* === Final CTA Section === */}
      <div className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Let’s start. It’s easier than you think.
        </h2>
        <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-white text-lg font-semibold rounded mb-12">
          Contact us
        </button>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm md:text-base">
  <button className="bg-blue-100 text-blue-700 px-6 py-2 rounded-md shadow hover:bg-blue-200 transform hover:scale-105 transition">
    PoC for Startups →
  </button>
  <button className="bg-blue-100 text-blue-700 px-6 py-2 rounded-md shadow hover:bg-blue-200 transform hover:scale-105 transition">
    Offshore Development Center →
  </button>
  <button className="bg-blue-100 text-blue-700 px-6 py-2 rounded-md shadow hover:bg-blue-200 transform hover:scale-105 transition">
    Case studies →
  </button>
</div>


      </div>

      <Consultation />


    </div>
  );
};

export default Services;
