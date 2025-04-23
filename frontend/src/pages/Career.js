import React from "react";
import heroBg from "../assets/image2.png"; // Adjust the path based on your folder structure
import Consultation from "./Consultation"; // Import Consultation Component
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <>
      {/* === Hero Section === */}
      <div
        className="relative w-full h-screen flex items-end justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 max-w-3xl px-6 text-white mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Careers at INTRAHELP
          </h1>
          <p className="text-lg md:text-xl mb-10">
          Build a career that suits your lifestyle, in a company where your voice matters. Let’s build a sustainable world together.
          </p>
          
        </div>
      </div>



      {/* === Job Openings Section === */}
<div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-16">
  <h2 className="text-3xl font-bold text-center mb-10">Job Openings</h2>

  {/* Job Listings */}
  <div className="space-y-6 max-w-4xl mx-auto">
    {[
      {
        title: "Software Developer",
        posted: "today",
        workplace: "Remote",
        location: "India",
        company: "Intrahelp",
        type: "Full time",
      },
      {
        title: "UI-UX Designer",
        posted: "1 day ago",
        workplace: "Remote",
        location: "India",
        company: "Intrahelp",
        type: "Full time",
      },
      {
        title: "Backend Developer",
        posted: "1 day ago",
        workplace: "Remote",
        location: "India",
        company: "Intrahelp",
        type: "Full time",
      },
      {
        title: "Data Engineer",
        posted: "7 days ago",
        workplace: "Remote",
        location: "India",
        company: "Intrahelp",
        type: "Full time",
      },
      {
        title: "Fullstack Developer",
        posted: "10 days ago",
        workplace: "Hybrid",
        location: "India",
        company: "Intrahelp",
        type: "Full time",
      },
      {
        title: "Human Resource",
        posted: "10 days ago",
        workplace: "Remote",
        location: "India",
        company: "Intrahelp",
        type: "Full time",
      },
    ].map((job, idx) => (
      <div key={idx} className="flex flex-col md:flex-row justify-between border-b pb-4">
        <div>
        <Link
  to={`/jobapplication/${idx}`}
  className="text-green-600 font-semibold text-lg hover:underline cursor-pointer"
>
  {job.title}
</Link>
          <p className="text-sm text-gray-500">Posted {job.posted}</p>
        </div>
        <div className="flex flex-wrap md:justify-end gap-x-6 gap-y-2 mt-2 md:mt-0 text-sm font-semibold text-gray-800">
          <span className="block">{job.workplace}</span>
          <span className="block">{job.location}</span>
          <span className="block">{job.company}</span>
          <span className="block">{job.type}</span>
        </div>
        
      </div>

      
    ))}
  </div>
  <h5 className="text-xl text-center mt-7 mb-5">Email your resume at <b>team@intrahelp.space</b></h5>
</div>






     
      <Consultation />
    </>
  );
};

export default Pricing;
