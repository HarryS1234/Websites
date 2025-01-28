import React from "react";
import image from "../../assets/Refrigeration Background.webp";

const FlexboxSection = () => {
  return (
    <>
      {/* First Section: Image on the Right */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gray-100 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16">
          {/* Content on Left Side */}
          <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif text-center md:text-left">
              Custom Freezer Design
            </h2>
            <p className="text-sm font-semibold sm:text-base lg:text-lg text-gray-700 text-center md:text-left">
              Our team specialises in creating customised freezer solutions that
              meet the specific needs of your business. We combine energy
              efficiency, high performance, and reliability to give you a system
              that enhances your operation's productivity.
            </p>
          </div>

          {/* Image on Right Side */}
          <div className="flex-1 order-1 md:order-2">
            <img
              src={image}
              alt="Refrigeration Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Second Section: Image on the Left */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gray-100 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16">
          {/* Image on Left Side */}
          <div className="flex-1">
            <img
              src={image}
              alt="Refrigeration Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content on Right Side */}
          <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif text-center md:text-left">
              Expert Freezer Installation
            </h2>
            <p className="text-sm font-semibold sm:text-base lg:text-lg text-gray-700 text-center md:text-left">
              Experience the benefits of a flawlessly installed commercial
              freezer. Our technicians ensure every installation meets our high
              standards, integrating smoothly into your existing setup for
              optimal efficiency and long-term reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Third Section: Image on the Right */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gray-100 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16">
          {/* Content on Left Side */}
          <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif text-center md:text-left">
              Specialized Freezer Solutions
            </h2>
            <p className="text-sm font-semibold sm:text-base lg:text-lg text-gray-700 text-center md:text-left">
              Whether you need walk-in freezers, reach-in freezers, or specialty
              freezers, we offer a range of solutions to meet your unique
              requirements. Walk-In Freezers: High-performance storage for
              businesses that need ample frozen storage space. Reach-In Freezers:
              Designed for visibility, accessibility, and reliable temperature
              control. Specialty Freezers: Custom-made for industries with
              specific cooling needs, offering precision and efficiency.
            </p>
          </div>

          {/* Image on Right Side */}
          <div className="flex-1 order-1 md:order-2">
            <img
              src={image}
              alt="Refrigeration Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Fourth Section: Image on the Left */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gray-100 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16">
          {/* Image on Left Side */}
          <div className="flex-1">
            <img
              src={image}
              alt="Refrigeration Image"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content on Right Side */}
          <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif text-center md:text-left">
              24/7 Emergency Freezer Repair
            </h2>
            <p className="text-sm font-semibold sm:text-base lg:text-lg text-gray-700 text-center md:text-left">
              When breakdowns happen, we’ve got you covered. Our round-the-clock
              emergency repair services minimize downtime and ensure your
              products remain safe, providing you peace of mind and a swift
              return to normal operations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlexboxSection;