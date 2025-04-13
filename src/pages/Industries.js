import React from "react";
import heroBg from "../assets/image2.png"; // 👈 Ensure the path is correct
import Consultation from "./Consultation"; // Import Consultation Component

const Industries = () => {
  const industries = [
    "Healthcare", "Finance", "Banking", "Insurance", "Lending", "Investment",
    "FinTech", "Payments", "Retail", "Manufacturing", "Transportation and Logistics", "Oil and Gas",
    "Professional Services", "Telecommunications", "Real Estate", "Construction", "Travel and Hospitality"
  ];

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
                  Industries we Serve 
                </h1>
                <p className="text-lg md:text-xl mb-10">
                We offer full-cycle IT consulting and software engineering to help BFSI companies transform operations and unlock growth opportunities.
                </p>
                <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-lg font-semibold rounded">
                  Get a free consultation
                </button>
              </div>
            </div>

      {/* === Industries Section === */}
      <div className="py-20 px-6 bg-white">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold inline-block relative">
            Industries We Serve
            <span className="block h-1 w-12 bg-orange-500 absolute -bottom-2 left-1/2 transform -translate-x-1/2" />
          </h1>
          <p className="mt-4 text-gray-600">Helping businesses across various industries.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-center">
          {industries.map((industry, index) => (
            <button
              key={index}
              className="bg-white text-gray-800 border border-gray-300 rounded-full px-6 py-3 transition-all duration-300 hover:bg-blue-100 hover:text-blue-700 hover:scale-105"
            >
              {industry}
            </button>
          ))}
        </div>
      </div>

      <Consultation />


    </div>
  );
};

export default Industries;
