import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      <div
        className={`flex justify-end items-center px-6 py-2 text-sm transition-all duration-300 ${
          isScrolled ? "bg-gray-100 text-black" : "bg-transparent text-white"
        }`}
      >
        <div className="flex space-x-4">
          <span className="flex items-center">
            <Mail size={16} className="mr-2" /> contact@intrahelp.space
          </span>
          <span>📞 +91 98813 69017</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`flex justify-between items-center px-4 py-2 h-16 md:h-20 transition-all duration-300 ${
          isScrolled ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Intrahelp Logo"
            className="h-[100px] md:h-[150px] w-auto"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent z-40 text-center md:text-left`}
        >
          {["Home", "About", "Services", "Industries", "Portfolio", "Career"].map(
            (item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block px-6 py-3 font-bold text-black hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)} // ✅ Close menu on click (mobile)
              >
                {item}
              </Link>
            )
          )}

          {/* Contact Us Button (included inside dropdown for mobile) */}
          <Link
            to="/contact"
            className="block md:hidden px-6 py-3 font-bold bg-yellow-400 text-black border-2 border-black hover:bg-yellow-500 transition rounded-none"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="px-4 py-2 font-bold ml-6 transition duration-300 bg-yellow-400 border-2 border-black text-black hover:bg-yellow-500 rounded-none"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
