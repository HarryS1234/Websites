import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons
import Icon from './Icon';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
            <Icon /> {/* Custom height */}
          </div>

        {/* Use justify-center to center the grid items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center text-center md:text-left">
          {/* Address and Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2 text-[#1dbbec] font-bold">2500 Williams Pkwy</p>
            <p className="mb-2 text-[#1dbbec] font-bold">Brampton, ON L6S 5M9</p>
            <p className="mb-2 font-bold">
              Email: <a href="mailto:Veerjicooling@gmail.com" className="text-[#1dbbec] font-bold hover:underline">Veerjicooling@gmail.com</a>
            </p>
            <p className="mb-2 font-bold">Cell: <a href="tel:647-210-6862" className="text-[#1dbbec] font-bold hover:underline">647-210-6862</a></p>
            <p className="mb-2 font-bold">Phone: <a href="tel:905-792-3555" className="text-[#1dbbec] font-bold hover:underline">905-792-3555</a></p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-[#1dbbec] font-bold">
              <li>Commercial Refrigeration</li>
              <li>Commercial Walk-In Cooler</li>
              <li>Commercial Freezer</li>
              <li>Heating & Air Conditioning</li>
              <li>Installation/Maintenance</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us on Social Media</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1dbbec] hover:text-blue-300">
                <FaFacebook size={40} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1dbbec] hover:text-blue-300">
                <FaTwitter size={40} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#1dbbec] hover:text-blue-300">
                <FaInstagram size={40} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#1dbbec] hover:text-blue-300">
                <FaLinkedin size={40} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-8 border-t border-gray-700 pt-8">
          <p className="font-bold">Copyrights © 2024 All Rights Reserved by Veerji Mechanical</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;