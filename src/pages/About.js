import React from "react";
import bgImage from "../assets/image.png"; // Background image import
import Consultation from "./Consultation"; // Import Consultation Component
import { FaCogs, FaBullseye, FaArrowsAlt, FaHandsHelping, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Our Values Section */}
      <ValuesSection />


      {/* Solutions We Cover Section */}
      <section className="bg-white px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-blue-900 mb-4 relative inline-block">
          <span className="bg-blue-100 absolute inset-0 w-10 h-10 -left-4 -top-2 rounded-sm z-[-1]"></span>
          Solutions We Cover
        </h2>
        <p className="text-gray-700 mb-12 text-lg max-w-3xl">
          With over 35 years in Information Technology, we have built up expertise in dozens of domains, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Enterprise applications", "ERP", "CRM", "Operations management",
            "Corporate finance", "Payments", "Asset management", "Document management",
            "Intranets", "HR management", "eLearning", "eCommerce",
            "Supply chain management", "Fleet management", "Data analytics", "Web portals"
          ].map((item, index) => (
            <div key={index} className="border p-6 shadow-sm hover:shadow-md transition rounded-md flex justify-between items-center text-lg font-medium">
              {item}
              <span className="text-blue-600 ml-2">↘</span>
            </div>
          ))}
        </div>
      </section>

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

      {/* Intrahelp in Numbers Section */}
      <NumbersSection />

      {/* Consultation Section */}
      <Consultation />
    </>
  );
};

const HeroSection = () => {
  return (
    <div 
      className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${require('../assets/image2.png')})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-white px-6">
        <h2 className="text-5xl font-bold">About Intrahelp</h2>
        <p className="mt-4 text-lg">
          We are a virtual assistant company providing business owners with expert support in IT, administration, and project management.
        </p>
        <button className="mt-6 bg-red-600 text-white py-3 px-6 text-lg font-semibold rounded hover:bg-red-700 transition">
          Let’s discuss your project
        </button>
      </div>
    </div>
  );
};

const ValuesSection = () => {
  const values = [
    { icon: <FaCogs className="text-blue-600 text-4xl" />, title: "Down to Earth", description: "Creating pragmatic solutions that make business processes effective. Concentrating on what matters: more delivery, less buzzwords." },
    { icon: <FaBullseye className="text-blue-600 text-4xl" />, title: "Focused", description: "Being disciplined and focused only on what we do really well. We will tell you if we cannot do it." },
    { icon: <FaArrowsAlt className="text-blue-600 text-4xl" />, title: "Flexible", description: "An agile, client-centric approach without compromising quality. We are keen to go the extra mile and tailor our approach." },
    { icon: <FaHandsHelping className="text-blue-600 text-4xl" />, title: "Caring", description: "We care about the goals of your project and ways to achieve them. We don’t just implement what is asked." },
    { icon: <FaUsers className="text-blue-600 text-4xl" />, title: "Partner", description: "Every client receives a long-term partnership approach. We go all out to evolve together continuously." }
  ];

  return (
    <div className="py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10">Our Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {values.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            {value.icon}
            <h3 className="text-xl font-semibold mt-4">{value.title}</h3>
            <p className="text-gray-600 mt-2">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const NumbersSection = () => {
  return (
    <div className="relative w-full py-48 text-white">
      {/* Background Image with slight blur effect */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-lg" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-20">
          <span className="text-blue-600">INTRAHELP</span> in Numbers
        </h2>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-16">
          {[
            { value: "100%", text: "Delivered on time", icon: "⏳" },
            { value: "400+", text: "Projects", icon: "📊" },
            { value: "50+", text: "Developers", icon: "👨‍💻" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <span className="text-7xl">{stat.icon}</span>
              <h3 className="text-5xl font-bold">{stat.value}</h3>
              <p className="text-xl">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
