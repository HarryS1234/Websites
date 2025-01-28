import React from 'react';

const AssistanceSection = () => {
  return (
    <section className="min-h-[40vh] flex items-center justify-center bg-gray-100 py-8 sm:py-12">
      {/* Main Container */}
      <div className="flex flex-col items-center text-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 p-6 sm:p-8 lg:p-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
          Need Assistance? We're Here 24/7
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6">
          Our customer service team is available 24/7 to assist you. Call us at{" "}
          <a href="tel:647-210-6862" className="font-semibold underline text-[#1dbbec]">
            647-210-6862
          </a>{" "}
          or send an email to{" "}
          <a
            href="mailto:veerjicooling@gmail.com"
            className="font-semibold underline text-[#1dbbec]"
          >
            veerjicooling@gmail.com
          </a>
        </p>

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-[#1dbbec] text-white font-semibold py-2 px-6 rounded-2xl border-2 border-grey shadow-lg hover:bg-white hover:text-[#1dbbec] hover:border-[#1dbbec] transition-colors duration-300"
        >
          Contact Now
        </a>
      </div>
    </section>
  );
};

export default AssistanceSection;