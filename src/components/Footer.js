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
          <p className="text-gray-400">Our profile at:</p>
          <div className="mt-4 space-y-2">
            <a href="#" className="block text-lg font-semibold">LinkedIn</a>
          </div>
        </div>

        {/* Office Locations */}
        <div>
          <h3 className="font-bold text-lg">London, UK</h3>
          <p className="text-gray-400 text-sm">
            59 St. Martin’s Lane, Suite 8, London, WC2N 4JS
            <br /> +44 7392 032352
            <br /> lon@intrahelp.com
          </p>
          <h3 className="font-bold text-lg mt-4">Riga, Latvia</h3>
          <p className="text-gray-400 text-sm">
            Plienciema Street 16, Marupe
            <br /> +371 220 669 45
            <br /> info@intrahelp.com
          </p>
        </div>

        {/* More Office Locations */}
        <div>
          <h3 className="font-bold text-lg">USA, NY</h3>
          <p className="text-gray-400 text-sm">
            Sales Department
            <br /> usa@intrahelp.com
          </p>
          <h3 className="font-bold text-lg mt-4">Khmelnytskyi, Ukraine</h3>
          <p className="text-gray-400 text-sm">
            Stepana Bandery Street, 1/1, BC PARUS, office 402
            <br /> +38 098 095 22 64
            <br /> hmj@intrahelp.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {["Home", "About", "Services", "Industries", "Portfolio", "Pricing", "Career"].map((link) => (
              <li key={link}>
                <Link to={`/${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-400 hover:text-white transition duration-300">
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
