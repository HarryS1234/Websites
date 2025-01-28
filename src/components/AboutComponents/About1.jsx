import React from "react";
import refrigerationImg from "../../assets/Refrigeration.jpg";

const About1 = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1dbbec] mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="text-left">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At{" "}
              <span className="font-semibold text-[#1dbbec]">
                VeerJi Mechanical
              </span>
              , we specialize in{" "}
              <span className="font-semibold text-[#1dbbec]">
                Commercial Refrigeration
              </span>
              ,{" "}
              <span className="font-semibold text-[#1dbbec]">
                Walk-In Cooler and Freezer Installation
              </span>
              ,{" "}
              <span className="font-semibold text-[#1dbbec]">Maintenance</span>,{" "}
              <span className="font-semibold text-[#1dbbec]">Heating</span>, and{" "}
              <span className="font-semibold text-[#1dbbec]">AC Services</span>{" "}
              across Toronto and the GTA. With over{" "}
              <span className="font-semibold text-[#1dbbec]">
                30 years of expertise
              </span>
              , we're known for solving complex issues that others can't,
              including the installation and programming of digital controllers
              for walk-in fridges. Our skilled team is dedicated to providing
              fast, efficient, and reliable service to keep your equipment
              running optimally. Whether you need repairs or a new system setup,
              trust{" "}
              <span className="font-semibold text-[#1dbbec]">
                VeerJi Mechanical
              </span>{" "}
              for quality and expertise you can rely on.
            </p>
            <div className="flex justify-center">
              <a
                href="/service-request"
                className="bg-transparent text-center border-2 border-[#1dbbec] text-[#1dbbec] font-semibold py-3 px-8 rounded-lg hover:bg-[#1dbbec] hover:text-white transition duration-300 transform hover:scale-105"
              >
                Contact Now
              </a>
            </div>
          </div>
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-lg shadow-lg border-4 border-[#1dbbec]">
            <img
              src={refrigerationImg} // Replace with your image URL
              alt="VeerJi Mechanical Services"
              className="w-full h-auto transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
