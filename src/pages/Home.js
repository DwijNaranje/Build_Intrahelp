import React from "react";
import HeroSlider from "../components/HeroSlider";
import bgImage from "../assets/image.png"; // Import the image correctly

const Home = () => (
  <div className="w-full">
    {/* Hero Section */}
    <div className="relative w-full h-screen">
      <HeroSlider />
      <div className="absolute top-[60%] left-[10%] text-white">
        <h1 className="text-3xl md:text-5xl font-bold">Software Consulting and Development</h1>
        <p className="text-xl md:text-2xl mt-2">
          For <span className="text-green-500 font-bold">Business Growth</span>
        </p>
        <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold text-lg rounded-lg hover:bg-green-600 transition">
          Get Started
        </button>
      </div>
    </div>

    {/* Buttons Section */}
    <div className="w-full py-10 bg-white flex flex-col items-center">
      {/* Larger Centered "Hire Us" Button */}
      <button className="px-16 py-3 text-xl bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition mb-12">
        Hire us
      </button>

      {/* Other Buttons in a Single Line */}
      <div className="flex flex-wrap justify-center gap-6">
        {["Solution development", "Offshore Development Center", "PoC for Startups", "Case studies"].map((item) => (
          <button
            key={item}
            className="px-6 py-3 bg-blue-100 text-blue-600 font-semibold text-lg rounded-md hover:bg-blue-200 transition flex items-center"
          >
            {item} →
          </button>
        ))}
      </div>
    </div>

    {/* "Intrahelp in Numbers" Section */}
<div className="relative w-full py-32 text-white"> {/* Increased height */}
  {/* Blurred Background Image with Dark Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center filter blur-xl" // More intense blur
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="absolute inset-0 bg-black opacity-60"></div> {/* Darker overlay */}
  </div>

  {/* Content Section */}
  <div className="relative z-10 flex flex-col items-center text-center px-8">
    <h2 className="text-5xl md:text-6xl font-bold mb-16"><span className="text-blue-600">INTRAHELP</span> in numbers</h2> {/* Increased size and margin */}

    <div className="flex flex-wrap justify-center gap-40"> {/* Increased spacing */}
      {/* Single Stat Box */}
      {[
        { value: "97%", text: "Delivered on time", icon: "⏳" },
        { value: "400+", text: "Projects", icon: "📊" },
        { value: "50+", text: "Developers", icon: "👨‍💻" },
      ].map((stat, index) => (
        <div key={index} className="flex flex-col items-center space-y-8"> {/* Increased spacing */}
          <span className="text-8xl">{stat.icon}</span> {/* Larger icon */}
          <h3 className="text-7xl font-bold">{stat.value}</h3> {/* Bigger number */}
          <p className="text-2xl">{stat.text}</p> {/* Bigger text */}
        </div>
      ))}
    </div>
  </div>
</div>


  </div>
);

export default Home;
