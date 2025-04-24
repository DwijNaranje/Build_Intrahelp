import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import your logo

const Footer = () => {
  return (
    <footer className="bg-[#0A192F] text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Logo and Social Profiles */}
        <div>
          <img src={logo} alt="Intrahelp Logo" className="h-[150px] md:h-[180px]" />
          <p className="text-gray-400 mt-4">Our profile at:</p>
          <div className="mt-2 space-y-2">
            <a
              href="https://www.linkedin.com/company/intrahelp" // Replace with your actual LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg font-semibold text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h3 className="font-bold text-lg">Maharashtra, India</h3>
          <p className="text-gray-400 text-sm">
            Nagpur, Maharashtra, India
            <br /> +91 98813 69017
            <br /> contact@intrahelp.space
          </p>
          <h3 className="font-bold text-lg mt-4">Maharashtra, India</h3>
          <p className="text-gray-400 text-sm">
            Pune, Maharashtra, India
            <br /> +91 98813 69017
            <br /> contact@intrahelp.space
          </p>
        </div>

        {/* More Office Locations */}
        <div>
          <h3 className="font-bold text-lg">Telangana, India</h3>
          <p className="text-gray-400 text-sm">
            Hyderabad, Telangana, India
            <br /> +91 98813 69017
            <br /> contact@intrahelp.space
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {["About", "Services", "Industries", "Portfolio", "Pricing", "Career", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-600 pt-4">
        Copyright © 2024 Intrahelp, Ltd
      </div>
    </footer>
  );
};

export default Footer;
