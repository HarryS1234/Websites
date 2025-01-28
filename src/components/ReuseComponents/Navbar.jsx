import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom
import logo from "../../assets/Logo webp.webp";

const Navbar = () => {
  const location = useLocation(); // Get the current route location
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu toggle

  // Function to close the mobile menu after clicking a link
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Navigation Bar */}
      <nav className="bg-[#1dbbec] sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-6">
          {/* Logo with Home Link */}
          <div className="h-16 flex items-center">
            <Link
              to="/home"
              onClick={handleMenuClose} // Close the menu if open
              className="h-full"
            >
              <img src={logo} alt="Logo" className="h-full" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the mobile menu
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
            {[
              { to: "/home", label: "Home" },
              { to: "/about-us", label: "About Us" },
              { to: "/refrigeration", label: "Refrigeration / Walk-In Cooler / Freezer" },
              { to: "/maintenance", label: "Installation / Maintenance" },
              { to: "/heating-ac", label: "Heating & AC" },
              { to: "/service-request", label: "Service Request" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative px-3 py-2 ${
                    location.pathname === link.to
                      ? "bg-white text-black rounded-lg shadow-md"
                      : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                  } transition-all duration-300`}
                  onClick={handleMenuClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1dbbec]">
            <ul className="flex flex-col space-y-2 py-3 px-4 text-sm font-medium">
              {[
                { to: "/home", label: "Home" },
                { to: "/about-us", label: "About Us" },
                { to: "/refrigeration", label: "Refrigeration / Walk-In Cooler / Freezer" },
                { to: "/maintenance", label: "Installation / Maintenance" },
                { to: "/heating-ac", label: "Heating & AC" },
                { to: "/service-request", label: "Service Request" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block px-3 py-2 ${
                      location.pathname === link.to
                        ? "bg-white text-black rounded-lg shadow-md"
                        : "text-white hover:bg-white hover:text-black hover:rounded-lg hover:shadow-md"
                    } transition-all duration-300`}
                    onClick={handleMenuClose}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
