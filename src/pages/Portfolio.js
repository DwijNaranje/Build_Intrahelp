import React from "react";
import heroBg from "../assets/image2.png"; // 👈 Ensure the path is correct

const Portfolio = () => {
  return (
    <div >
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
    </div>
  );
};

export default Portfolio;
