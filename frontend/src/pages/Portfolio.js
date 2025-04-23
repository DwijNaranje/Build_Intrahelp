import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/image2.png";

import h1 from "../assets/hotel_p1.png";
import h2 from "../assets/hotel_p2.png";
import h3 from "../assets/hotel_p3.png";
import h4 from "../assets/hotel_p4.png";
import h5 from "../assets/hotel_p5.png";

import hc1 from "../assets/health1.png";
import hc2 from "../assets/health2.png";
import hc3 from "../assets/health3.png";
import hc4 from "../assets/health4.png";
import hc5 from "../assets/health5.png";

import f1 from "../assets/finance1.png";
import f2 from "../assets/finance2.png";
import f3 from "../assets/finance3.png";
import f4 from "../assets/finance4.png";
import f5 from "../assets/finance5.png";

import ft1 from "../assets/Fintech1.png";
import ft2 from "../assets/Fintech2.png";
import ft3 from "../assets/Fintech3.png";
import ft4 from "../assets/Fintech4.png";
import ft5 from "../assets/Fintech5.png";

import py1 from "../assets/payment1.png";
import py2 from "../assets/payment2.png";
import py3 from "../assets/payment3.png";
import py4 from "../assets/payment4.png";
import py5 from "../assets/payment5.png";

import re1 from "../assets/RealEstate1.png";
import re2 from "../assets/RealEstate2.png";
import re3 from "../assets/RealEstate3.png";
import re4 from "../assets/RealEstate4.png";
import re5 from "../assets/RealEstate5.png";
import re6 from "../assets/RealEstate6.png";
import re7 from "../assets/RealEstate7.png";
import re8 from "../assets/RealEstate8.png";
import re9 from "../assets/RealEstate9.png";

import con1 from "../assets/construction1.png";
import con2 from "../assets/construction2.png";
import con3 from "../assets/construction3.png";
import con4 from "../assets/construction4.png";
import con5 from "../assets/construction5.png";
import con6 from "../assets/construction6.png";
import con7 from "../assets/construction7.png";
import con8 from "../assets/construction8.png";

import rstr1 from "../assets/Store1.png";
import rstr2 from "../assets/Store2.png";
import rstr3 from "../assets/Store3.png";
import rstr4 from "../assets/Store4.png";

import inc1 from "../assets/insurance1.png";
import inc2 from "../assets/insurance2.png";

import tl1 from "../assets/T&L1.png";
import tl2 from "../assets/T&L2.png";

import manu1 from "../assets/manufacturing1.png";
import manu2 from "../assets/manufacturing2.png";
import manu3 from "../assets/manufacturing3.png";
import manu4 from "../assets/manufacturing4.png";

import Consultation from "./Consultation";

// Updated project data with URLs
const projectData = [
  {
    title: "RentUP software and website for RealEstate Business",
    image: re1,
    industry: "Real Estate",
    url: "https://funny-daffodil-350bc9.netlify.app/",
  },{
    title: "Homyz software and website for Property Booking",
    image: re2,
    industry: "Real Estate",
    url: "https://full-stack-real-estate-youtube-sooty.vercel.app/",
  },{
    title: "Estatery Complete software for property",
    image: re3,
    industry: "Real Estate",
    url: "https://estaterry.netlify.app/",
  },{
    title: "Realtor Website for Property client Managemant",
    image: re4,
    industry: "Real Estate",
    url: "https://realtor-opal.vercel.app/",
  },{
    title: "91acres Complete solution for RealEstate",
    image: re5,
    industry: "Real Estate",
    url: "https://91acres.netlify.app/",
  },{
    title: "Rently Software for Client Interaction and Property Booking",
    image: re6,
    industry: "Real Estate",
    url: "https://rehabmahmoud20.github.io/Rently/",
  },{
    title: "Macho RealEstate Software",
    image: re7,
    industry: "Real Estate",
    url: "https://macho-realtor.netlify.app/home",
  },{
    title: "Avilatek Simple Solution for RealEstate Property Booking",
    image: re8,
    industry: "Real Estate",
    url: "https://real-estate-web.vercel.app/home",
  },{
    title: "BuildEstate Software and Website",
    image: re9,
    industry: "Real Estate",
    url: "https://buildestate.vercel.app/",
  },


  {
    title: "SUAY Resort Software",
    image: h1,
    industry: "Hotels",
    url: "https://suay-resort.netlify.app/",
  },{
    title: "HOTEL-21 Website and Software",
    image: h2,
    industry: "Hotels",
    url: "https://hotel21.vercel.app/",
  },{
    title: "GOLOBE Website",
    image: h3,
    industry: "Hotels",
    url: "https://golob-travel-agency.vercel.app/",
  },{
    title: "ORBITZ Website and Software",
    image: h4,
    industry: "Hotels",
    url: "https://orbitz.netlify.app/",
  },{
    title: "BANKHOTEL Website with Software Integration",
    image: h5,
    industry: "Hotels",
    url: "https://bank-hotel.netlify.app/",
  },
  
  
  {
    title: "Flowmates Constructions Website",
    image: con1,
    industry: "Construction",
    url: "https://construction-website-lemon.vercel.app/",
  },{
    title: "V2RConstructions Software and Website",
    image: con2,
    industry: "Construction",
    url: "https://geekblower.github.io/v2rconstructions/",
  },{
    title: "TheeBestConstructors website ",
    image: con3,
    industry: "Construction",
    url: "https://mfidiv.github.io/Thee-Best-Group-Project/#home",
  },{
    title: "LTPS Infra Constructors Software",
    image: con4,
    industry: "Construction",
    url: "https://ltps-infra.vercel.app/",
  },{
    title: "R.J.Murphy Constructors Website and Software",
    image: con5,
    industry: "Construction",
    url: "https://www.rjmurphyconstruction.com//",
  },{
    title: "Electra.QA website",
    image: con6,
    industry: "Construction",
    url: "https://www.electra.qa/",
  },{
    title: "Backdoor Constructions Website",
    image: con7,
    industry: "Construction",
    url: "https://backdoor.netlify.app/",
  },{
    title: "Construction-Solutions website",
    image: con8,
    industry: "Construction",
    url: "https://nausalexus.github.io/construction-solutions/",
  },
  
  
  
  {
    title: "Grocery Store Website and Software",
    image: rstr1,
    industry: "Retail Shops",
    url: "https://nargizkani.github.io/grocery-store/",
  },{
    title: "New Fashion Store for lattest collections",
    image: rstr2,
    industry: "Retail Shops",
    url: "https://ecommerce-shop-react-app.vercel.app/",
  },{
    title: "Hikstore for Hiking Products",
    image: rstr3,
    industry: "Retail Shops",
    url: "https://hikstore.pages.dev/",
  },{
    title: "Nikey Shoe Store for Dropshipping",
    image: rstr4,
    industry: "Retail Shops",
    url: "https://nike-shoe-store.netlify.app/",
  },
  
  
  
  {
    title: "Caresure Insurance Company Sofware",
    image: inc1,
    industry: "Insurance",
    url: "https://caresure-health-insurance.vercel.app/",
  },{
    title: "LifeInsureEase Life Insurance Company Website",
    image: inc2,
    industry: "Insurance",
    url: "https://insurance-website-six.vercel.app/",
  },
  
  
  
  {
    title: "Trackway Transportation and Logistics Software",
    image: tl1,
    industry: "Transportation and Logistics",
    url: "https://trackway-frontend-gamma.vercel.app/home",
  },{
    title: "Hirevgo Transportation and Logistics Website",
    image: tl2,
    industry: "Transportation and Logistics",
    url: "https://www.hirevgo.com/",
  },
  
  
  
  {
    title: "CMK Cables Website",
    image: manu1,
    industry: "Manufacturing",
    url: "https://cmk-cable-website.vercel.app/",
  },{
    title: "Krysztal Website and Software",
    image: manu2,
    industry: "Manufacturing",
    url: "https://treodaio.github.io/Krysztal_Website/",
  },{
    title: "Eastlongsz Website",
    image: manu3,
    industry: "Manufacturing",
    url: "https://eastlongsz.com/",
  },{
    title: "Abacus Manufacturing Company website",
    image: manu4,
    industry: "Manufacturing",
    url: "https://abacus-parts.web.app/",
  },
  
  
  {
    title: "Medisure Heathcare Company",
    image: hc1,
    industry: "Healthcare",
    url: "https://medisure-healthcare.web.app/",
  },{
    title: "NactoCare Heathcare website and software",
    image: hc2,
    industry: "Healthcare",
    url: "https://nacto-care.vercel.app/",
  },{
    title: "TraFalgar Website and Software",
    image: hc3,
    industry: "Healthcare",
    url: "https://healthcare-design-to-code-nextjs.vercel.app/",
  },{
    title: "HLcare Software",
    image: hc4,
    industry: "Healthcare",
    url: "https://health-care-tau.vercel.app/",
  },{
    title: "Online Heathcare Hospital Service Consultation",
    image: hc5,
    industry: "Healthcare",
    url: "https://healthcaress.netlify.app/",
  },
  
  
  
  {
    title: "Pure Finance Software and Website",
    image: f1,
    industry: "Banking & Finance",
    url: "https://pure.finance/en",
  },{
    title: "Eauth Banking and Finance Website",
    image: f2,
    industry: "Banking & Finance",
    url: "https://eauth.app/",
  },{
    title: "SwiftPay Banking and Finance",
    image: f3,
    industry: "Banking & Finance",
    url: "https://warlike-current-5989-gamma.vercel.app/",
  },{
    title: "JoinUs Finance Company",
    image: f4,
    industry: "Banking & Finance",
    url: "https://joinus.vercel.app/",
  },{
    title: "AutoFinance Banking And Finance firm",
    image: f5,
    industry: "Banking & Finance",
    url: "https://autofinance.vercel.app/",
  },
  
  
  {
    title: "NUS FinTech Software",
    image: ft1,
    industry: "FinTech",
    url: "https://fintechsociety.comp.nus.edu.sg/",
  },{
    title: "Fintech Software",
    image: ft2,
    industry: "FinTech",
    url: "https://landingpage-pr01.netlify.app/",
  },{
    title: "FundIX Fintech Company Website and Software",
    image: ft3,
    industry: "FinTech",
    url: "https://fundix.vercel.app/",
  },{
    title: "Abound FinTech Firm",
    image: ft4,
    industry: "FinTech",
    url: "https://abound-clone.vercel.app/",
  },{
    title: "FinTech Calgary Company",
    image: ft5,
    industry: "FinTech",
    url: "https://website-gilt-five-70.vercel.app/",
  },
  
  
  {
    title: "Bitcoinqr Payments Website",
    image: py1,
    industry: "Payments",
    url: "https://bitcoinqr.dev/",
  },{
    title: "Restaurent Payment Managemant",
    image: py2,
    industry: "Payments",
    url: "https://restaurant-e-commerce-website-omega.vercel.app/",
  },{
    title: "Dropshipping Payment Managemant",
    image: py3,
    industry: "Payments",
    url: "https://competent-engelbart-3915c0.netlify.app/",
  },{
    title: "Hospital Payment Gateway",
    image: py4,
    industry: "Payments",
    url: "https://hm-system.netlify.app/",
  },{
    title: "MeshStore Payments",
    image: py5,
    industry: "Payments",
    url: "https://meshstore.netlify.app/",
  }
];

const industries = [
  "All", "Healthcare", "Hotels", "Real Estate", "Banking & Finance", "Insurance",
  "FinTech", "Payments", "Retail Shops", "Manufacturing", "Transportation and Logistics", "Construction"
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
