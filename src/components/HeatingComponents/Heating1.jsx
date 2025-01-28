import React from 'react'
import backgroundImage from "../../assets/Cooler freezer.webp"; // Adjust the path to your image
const Heating1 = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Use the imported image
    >
      {/* Transparent Container */}
      <div className="relative z-10 bg-[#f9f9f9] opacity-75 backdrop-blur-md  rounded-xl border-2 border-white border-opacity-30 shadow-lg p-8 sm:p-12 lg:p-16 max-w-2xl mx-4 text-center transform transition-all duration-500 hover:scale-105">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-serif">
        Choose VeerJi Cooling Comforts for
        </h2>

        {/* Subheading */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl text-black font-bold mb-6">
        Exceptional Heating & Cooling Solutions
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-black font-semibold mb-6">
        Your business deserves reliable heating and cooling to maintain a comfortable and productive environment. At VeerJi Cooling Comforts, we provide expert installations and proactive maintenance that keep your systems running smoothly, ensuring year-round efficiency with minimal disruptions.
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
  )
}

export default Heating1
