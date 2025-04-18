import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/image2.png";
import project1 from "../assets/image2.png";
import project2 from "../assets/image2.png";
import project3 from "../assets/image2.png";
import project4 from "../assets/image2.png";
import project5 from "../assets/image2.png";
import project6 from "../assets/image2.png";
import Consultation from "./Consultation";

// Updated project data with URLs
const projectData = [
  {
    title: "GAMP4-Compliant Software to Automate Cancer & TPN Drugs Manufacturing",
    image: project1,
    industry: "Healthcare",
    url: "https://example.com/project1",
  },
  {
    title: "IoT-Based Physiotherapy Platform Driving 70% Reduction in Pain",
    image: project2,
    industry: "Healthcare",
    url: "https://example.com/project2",
  },
  {
    title: "Underwriting Automation Software for a Global Aviation Insurer with $30B in Assets",
    image: project3,
    industry: "Finance",
    url: "https://example.com/project3",
  },
  {
    title: "10-Year Evolution of Life Sciences Software Products Used by GSK and AstraZeneca",
    image: project4,
    industry: "Pharmaceuticals",
    url: "https://example.com/project4",
  },
  {
    title: "Custom Software for End-to-End Loan Management Automation",
    image: project5,
    industry: "Finance",
    url: "https://example.com/project5",
  },
  {
    title: "Azure-Based Investment Management Software for a Full-Service Family Office",
    image: project6,
    industry: "Finance",
    url: "https://example.com/project6",
  },
];

const industries = [
  "All", "Healthcare", "Finance", "Pharmaceuticals", "Banking", "Insurance", "Lending", "Investment",
  "FinTech", "Payments", "Retail", "Manufacturing", "Transportation and Logistics", "Oil and Gas",
  "Professional Services", "Telecommunications", "Real Estate", "Construction", "Travel and Hospitality"
];

const Portfolio = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const navigate = useNavigate();

  const filteredProjects =
    selectedIndustry === "All"
      ? projectData
      : projectData.filter((proj) => proj.industry === selectedIndustry);

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
            Projects We Completed
          </h1>
          <p className="text-lg md:text-xl mb-10">
            We offer full-cycle IT consulting and software engineering to help BFSI companies transform operations and unlock growth opportunities.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-lg font-semibold rounded"
          >
            Get a free consultation
          </button>
        </div>
      </div>

      {/* === Filterable Project Showcase === */}
      <div className="bg-white py-16 px-4 sm:px-8 lg:px-16">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">
          Selected Success Stories from Our 50+ Project Portfolio
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustry(ind)}
              className={`px-4 py-2 border rounded-full text-sm font-medium transition ${
                selectedIndustry === ind
                  ? "bg-blue-600 text-white"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">{project.title}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition text-sm"
                >
                  View site →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Consultation />
    </div>
  );
};

export default Portfolio;
