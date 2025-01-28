import React from 'react';
import backgroundImage from "../../assets/Refrigeration Background.webp"; // Adjust the path to your image

const InstallationSection = () => {
  return (
    <>
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image
    >
      {/* Transparent Container */}
      <div className="relative z-10 bg-[#f9f9f9] opacity-75 backdrop-blur-md  rounded-xl border-2 border-white border-opacity-30 shadow-lg p-8 sm:p-12 lg:p-16 max-w-2xl mx-4 text-center transform transition-all duration-500 hover:scale-105">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
          Dependable Installation & Maintenance for All
        </h2>

        {/* Subheading */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl text-black font-bold mb-6">
          Your Cooling and HVAC Needs
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-black font-semibold mb-6">
          At VeerJi Cooling Comforts, we go beyond just installing and maintaining systems—we ensure each solution is customized for your business's specific requirements. From the latest technology to dedicated customer support, we deliver reliable and efficient services that keep your operations seamless and hassle-free.
        </p>

        {/* Contact Button */}
        <a
        href="/service-request"
          className="bg-transparent border-2 border-[#1dbbec] text-[#1dbbec] font-semibold py-3 px-8 rounded-lg hover:bg-[#1dbbec] hover:text-white transition duration-300 transform hover:scale-105 "
        >
          Contact Now
        </a>
      </div>
    </section>
</>
  );
};

export default InstallationSection;