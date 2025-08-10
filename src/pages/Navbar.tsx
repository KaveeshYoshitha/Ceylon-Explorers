import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Destinations", href: "#destinations" },
    { name: "Packages", href: "#packages" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "About", href: "#aboutus" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#ffffffb5] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <span className="text-2xl font-bold text-[#1b9470] cursor-pointer">
          <a href="#home">Ceylon Explorers</a>
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          {links.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="hover:text-[#1b9470] transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-gray-800 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="block text-gray-800 hover:text-blue-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
