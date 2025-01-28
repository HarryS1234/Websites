import React from 'react';
import refrigerationImg from "../../assets/Refrigeration Background.webp"; // Correct import

const Ref1 = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${refrigerationImg})` }} // Use the imported image
    >
      {/* Content Container with Glass Morphism Effect */}
      <div className="relative z-10 bg-[#f9f9f9] opacity-75 backdrop-blur-md  rounded-xl border-2 border-white border-opacity-30 shadow-lg p-8 sm:p-12 lg:p-16 max-w-2xl mx-4 text-center transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
          Reliable, Efficient, and Expert Refrigeration
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-black font-semibold mb-8">
          Solutions for Your Business
        </p>
        <p className="text-base sm:text-lg  font-semibold lg:text-xl ext-black mb-8">
          From walk-in coolers to freezers, we specialise in installing, maintaining, and
          repairing commercial refrigeration systems to keep your products fresh and
          your business running smoothly.
        </p>
        <a
        href="/service-request"
          className="bg-transparent border-2 border-[#1dbbec] text-[#1dbbec] font-semibold py-3 px-8 rounded-lg hover:bg-[#1dbbec] hover:text-white transition duration-300 transform hover:scale-105 "
        >
          Contact Now
        </a>
      </div>
    </section>
  );
};

export default Ref1;