import React, { useState } from "react";
import logo from "../assets/Logo webp.webp"; 

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home"); // State to track the active link
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu toggle

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <>
      {/* Sticky Navigation Bar */}
      <nav className="bg-[#1dbbec] sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-6">
          {/* Logo (Placeholder) */}
          <div className="h-16 flex items-center">
            <img src={logo} alt="Logo" className="h-full" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8 py-3 text-sm lg:text-base font-medium">
            <li>
              <a
                href="#home"
                className={`relative px-3 py-2 ${
                  activeLink === "home"
                    ? "bg-white text-black rounded-lg shadow-md"
                    : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                } transition-all duration-300`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className={`relative px-3 py-2 ${
                  activeLink === "about-us"
                    ? "bg-white text-black rounded-lg shadow-md"
                    : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                } transition-all duration-300`}
                onClick={() => handleLinkClick("about-us")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#refrigeration"
                className={`relative px-3 py-2 ${
                  activeLink === "refrigeration"
                    ? "bg-white text-black rounded-lg shadow-md"
                    : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                } transition-all duration-300`}
                onClick={() => handleLinkClick("refrigeration")}
              >
                Refrigeration / Walk-In Cooler / Freezer
              </a>
            </li>
            <li>
              <a
                href="#maintenance"
                className={`relative px-3 py-2 ${
                  activeLink === "maintenance"
                    ? "bg-white text-black rounded-lg shadow-md"
                    : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                } transition-all duration-300`}
                onClick={() => handleLinkClick("maintenance")}
              >
                Installation / Maintenance
              </a>
            </li>
            <li>
              <a
                href="#heating-ac"
                className={`relative px-3 py-2 ${
                  activeLink === "heating-ac"
                    ? "bg-white text-black rounded-lg shadow-md"
                    : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                } transition-all duration-300`}
                onClick={() => handleLinkClick("heating-ac")}
              >
                Heating & AC
              </a>
            </li>
            <li>
              <a
                href="#service-request"
                className={`relative px-3 py-2 ${
                  activeLink === "service-request"
                    ? "bg-white text-black rounded-lg shadow-md"
                    : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                } transition-all duration-300`}
                onClick={() => handleLinkClick("service-request")}
              >
                Service Request
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1dbbec]">
            <ul className="flex flex-col space-y-2 py-3 px-4 text-sm font-medium">
              <li>
                <a
                  href="#home"
                  className={`block px-3 py-2 ${
                    activeLink === "home"
                      ? "bg-white text-black rounded-lg shadow-md"
                      : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                  } transition-all duration-300`}
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className={`block px-3 py-2 ${
                    activeLink === "about-us"
                      ? "bg-white text-black rounded-lg shadow-md"
                      : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                  } transition-all duration-300`}
                  onClick={() => handleLinkClick("about-us")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#refrigeration"
                  className={`block px-3 py-2 ${
                    activeLink === "refrigeration"
                      ? "bg-white text-black rounded-lg shadow-md"
                      : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                  } transition-all duration-300`}
                  onClick={() => handleLinkClick("refrigeration")}
                >
                  Refrigeration / Walk-In Cooler / Freezer
                </a>
              </li>
              <li>
                <a
                  href="#maintenance"
                  className={`block px-3 py-2 ${
                    activeLink === "maintenance"
                      ? "bg-white text-black rounded-lg shadow-md"
                      : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                  } transition-all duration-300`}
                  onClick={() => handleLinkClick("maintenance")}
                >
                  Installation / Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#heating-ac"
                  className={`block px-3 py-2 ${
                    activeLink === "heating-ac"
                      ? "bg-white text-black rounded-lg shadow-md"
                      : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                  } transition-all duration-300`}
                  onClick={() => handleLinkClick("heating-ac")}
                >
                  Heating & AC
                </a>
              </li>
              <li>
                <a
                  href="#service-request"
                  className={`block px-3 py-2 ${
                    activeLink === "service-request"
                      ? "bg-white text-black rounded-lg shadow-md"
                      : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                  } transition-all duration-300`}
                  onClick={() => handleLinkClick("service-request")}
                >
                  Service Request
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;