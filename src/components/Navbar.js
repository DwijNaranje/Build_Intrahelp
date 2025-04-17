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
          <span>📞 +91 98813 69017</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`flex justify-between items-center px-4 py-2 h-16 md:h-20 transition-all duration-300 ${isScrolled ? "bg-white text-black" : "bg-transparent text-white hover:bg-white"}`}>
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Intrahelp Logo" className="h-[150px] md:h-[180px] w-auto " />
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 md:flex-row text-center md:text-left`}>
          {["Home", "About", "Services", "Industries", "Portfolio", "Career"].map((item) => (
            <Link 
              key={item} 
              className="block md:inline-block px-4 py-2 font-bold text-black hover:text-blue-600 transition duration-300" 
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </div>



        {/* Right Section */}
<div className="flex items-center">
  <Link 
    to="/contact" 
    className="px-4 py-2 font-bold ml-[30px] transition duration-300 bg-yellow-400 border-2 border-black text-black hover:bg-yellow-500 rounded-none"
  >
    Contact Us
  </Link>
</div>

      </nav>
    </header>
  );
};

export default Navbar;
