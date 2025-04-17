import React from "react";
import HeroSlider from "../components/HeroSlider";
import bgImage from "../assets/image.png"; // Background image import
import ExploreOurOffering from "./ExploreOurOffering";
import Consultation from "./Consultation";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

import {
  FaChartLine,
  FaGlobe,
  FaAward,
  FaTrophy,
  FaDollarSign,
  FaShoppingCart,
  FaHeartbeat,
  FaCar,
  FaBullhorn,
  FaDumbbell,
  FaGraduationCap,
  FaFilm,
  FaBalanceScale,
  FaTruck,
  FaLightbulb,
  FaLeaf,
} from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate(); // ✅ useNavigate hook inside component

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen ">
        <HeroSlider />
        <div className="absolute top-[60%] left-[10%] text-white">
          <h1 className="text-3xl md:text-5xl font-bold">
            Software Consulting and Development
          </h1>
          <p className="text-xl md:text-2xl mt-2">
            For <span className="text-blue-500 font-bold">Business Growth</span>
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg hover:bg-green-600 transition"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="w-full py-24 bg-gray-50 text-center px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Why choose us?
          </h2>
          <p className="text-lg md:text-xl text-blue-600 mb-12">Advantages</p>

          <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4">
            {[
              {
                icon: <FaChartLine className="text-blue-600 text-5xl md:text-6xl" />,
                text: "Business approach to development",
              },
              {
                icon: <FaGlobe className="text-blue-600 text-5xl md:text-6xl" />,
                text: "Advanced 16 years Fintech Expertise",
              },
              {
                icon: <FaAward className="text-blue-600 text-5xl md:text-6xl" />,
                text: <>Lifetime Code <br /> Warranty</>,
              },
              {
                icon: <FaTrophy className="text-blue-600 text-5xl md:text-6xl" />,
                text: "Enhanced business value of products",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-full md:w-1/4 flex flex-col items-center text-center px-4"
              >
                {item.icon}
                <p className="text-base md:text-lg font-semibold mt-4">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intrahelp in Numbers */}
      <div className="relative w-full py-48 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-xl"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-32">
            <span className="text-blue-600">INTRAHELP</span> in numbers
          </h2>

          <div className="flex flex-wrap justify-center gap-40">
            {[
              { value: "100%", text: "Delivered on time", icon: "⏳" },
              { value: "50+", text: "Projects", icon: "📊" },
              { value: "10+", text: "Developers", icon: "👨‍💻" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-8">
                <span className="text-8xl">{stat.icon}</span>
                <h3 className="text-7xl font-bold">{stat.value}</h3>
                <p className="text-2xl">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ExploreOurOffering />

      {/* Hire Us Section */}
      <div className="w-full py-10 bg-white flex flex-col items-center">
        <button 
        onClick={() => navigate("/contact")}
        className="px-16 py-3 text-xl bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition mb-12">
          Hire us
        </button>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Solution development",
            "Offshore Development Center",
            "PoC for Startups",
            "Case studies",
          ].map((item) => (
            <button
            onClick={() => navigate("/portfolio")}
              key={item}
              className="px-6 py-3 bg-blue-100 text-blue-600 font-semibold text-lg rounded-md hover:bg-blue-200 transition flex items-center"
            >
              {item} →
            </button>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="w-full py-24 bg-gray-100 text-center">
        <h2 className="text-5xl font-bold text-black">Industries</h2>
        <p className="text-xl text-gray-600 mt-4 mb-16">
          Access our expert domain knowledge to empower your business with a proper software solution.
        </p>

        <div onClick={() => navigate("/portfolio")}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
          {[
            "Fintech & Finance",
            "E-commerce & Retail",
            "Healthcare",
            "Automotive",
            "Advertising & Marketing",
            "Wellness & Fitness",
            "Education & E-learning",
            "Entertainment",
            "LegalTech",
            "Logistics",
            "Business Innovations",
            "Ecology & Eco-friendly",
          ].map((title, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:text-blue-600"
            >
              {
                [
                  <FaDollarSign />,
                  <FaShoppingCart />,
                  <FaHeartbeat />,
                  <FaCar />,
                  <FaBullhorn />,
                  <FaDumbbell />,
                  <FaGraduationCap />,
                  <FaFilm />,
                  <FaBalanceScale />,
                  <FaTruck />,
                  <FaLightbulb />,
                  <FaLeaf />,
                ][index]
              }
              <h3 className="text-xl font-bold mt-4">{title}</h3>
            </div>
          ))}
        </div>
      </div>

      <Consultation />
    </div>
  );
};

export default Home;
