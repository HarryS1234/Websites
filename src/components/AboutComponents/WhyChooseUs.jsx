import React from "react";
import { FaMoneyBillAlt, FaUserCheck, FaHandshake, FaUserFriends } from "react-icons/fa"; // Import icons from React Icons

const WhyChooseSection = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1dbbec] mb-12">
          Why Choose VeerJi Mechanical?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Affordable Services */}
          <div className="bg-[#1dbbec] p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-[#1dbbec] group overflow-hidden">
            <FaMoneyBillAlt className="w-16 h-16 mx-auto mb-4 text-white group-hover:text-[#1dbbec]" /> {/* Icon */}
            <h3 className="text-xl font-semibold text-white text-center mb-4 group-hover:text-[#1dbbec]">
              Affordable Services
            </h3>
            <p className="text-white text-center font-semibold group-hover:text-gray-600">
              We believe in providing value, offering affordable installation,
              maintenance, and reliable repairs for all types of refrigeration,
              heating, and cooling systems.
            </p>
          </div>

          {/* Certified Technicians */}
          <div className="bg-[#1dbbec] p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-[#1dbbec] group overflow-hidden">
            <FaUserCheck className="w-16 h-16 mx-auto mb-4 text-white group-hover:text-[#1dbbec]" /> {/* Icon */}
            <h3 className="text-xl font-semibold text-white text-center mb-4 group-hover:text-[#1dbbec]">
              Certified Technicians
            </h3>
            <p className="text-white text-center font-semibold group-hover:text-gray-600">
              Our team consists of certified technicians who are licensed,
              insured, and experienced, ensuring that your equipment receives
              the expert care it deserves.
            </p>
          </div>

          {/* Trusted Partner */}
          <div className="bg-[#1dbbec] p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-[#1dbbec] group overflow-hidden">
            <FaHandshake className="w-16 h-16 mx-auto mb-4 text-white group-hover:text-[#1dbbec]" /> {/* Icon */}
            <h3 className="text-xl font-semibold text-white text-center mb-4 group-hover:text-[#1dbbec]">
              Trusted Partner
            </h3>
            <p className="text-white font-semibold text-center group-hover:text-gray-600">
              We take pride in being a trusted provider in the industry,
              collaborating with top brands to ensure you receive high-quality
              service every time.
            </p>
          </div>

          {/* Customer-Centric */}
          <div className="bg-[#1dbbec] p-6 rounded-lg shadow-md hover:bg-white transition-all duration-300 transform hover:-translate-y-2 border border-[#1dbbec] group overflow-hidden">
            <FaUserFriends className="w-16 h-16 mx-auto mb-4 text-white group-hover:text-[#1dbbec]" /> {/* Icon */}
            <h3 className="text-xl font-semibold text-white text-center mb-4 group-hover:text-[#1dbbec]">
              Customer-Centric
            </h3>
            <p className="text-white text-center font-semibold group-hover:text-gray-600">
              Your satisfaction is our priority. We're dedicated to providing
              personalized service that meets your specific needs and helps you
              save money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;