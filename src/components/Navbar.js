import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ Added this state for mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top Bar with Contact Info */}
      <div className={`flex justify-end items-center px-6 py-2 text-sm transition-all duration-300 ${isScrolled ? "bg-gray-100 text-black" : "bg-transparent text-white"}`}>
        <div className="flex space-x-4">
          <span className="flex items-center">
            <Mail size={16} className="mr-2" /> contact@intrahelp.com
          </span>
          <span>📞 +1 234 567 8900</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`flex justify-between items-center px-4 py-2 h-16 md:h-20 transition-all duration-300 ${isScrolled ? "bg-white text-black" : "bg-transparent text-white"}`}>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Intrahelp Logo" className="h-[150px] md:h-[180px] w-auto ml-[30px]" />
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:flex-row text-center md:text-left`}>
          {["About", "Services", "Industries", "Portfolio", "Pricing"].map((item) => (
            <Link 
              key={item} 
              className={`block md:inline-block px-4 py-2 font-bold transition duration-300 ${
                isScrolled ? "text-black hover:text-blue-600" : "text-white hover:text-blue-300"
              }`} 
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <Link 
            to="/contact" 
            className={`px-4 py-2 rounded-md font-bold ml-[30px] transition duration-300 ${
              isScrolled ? "bg-yellow-400 text-black hover:bg-yellow-500" : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
