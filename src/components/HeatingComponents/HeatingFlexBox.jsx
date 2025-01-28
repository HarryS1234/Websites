import React from 'react'

import image1 from "../../assets/Cooler freezer.webp"; 
import image2 from "../../assets/Cooler freezer.webp"; 
import image3 from "../../assets/Cooler freezer.webp"; 

const HeatingFlexBox = () => {
  return (
    <div>
          <section className="min-h-[50vh] flex flex-col items-center justify-center bg-gray-100 py-8 sm:py-12">
      {/* Main Heading */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-serif text-center">
      Heating Systems to Keep You Comfortable
      </h2>

      {/* Container 1: Image on Left, Content on Right */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Image on Left */}
        <div className="flex-1">
          <img
            src={image1}
            alt="Installation Image 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content on Right */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
          Customised Comfort
          </h4>
          <p className="text-sm sm:text-base lg:text-lg font-semibold  text-gray-700">
          We understand that each business has unique heating needs. Our team works closely with you to select and set up heating solutions that align with your business layout and usage requirements.
          </p>
        </div>
      </div>

      {/* Container 2: Image on Right, Content on Left */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Content on Left */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
          High Efficiency, Low Cost
          </h4>
          <p className="text-sm sm:text-base  font-semibold  lg:text-lg text-gray-700">
          Our heating systems are designed for maximum efficiency, helping reduce energy consumption and operational costs. With Veerji Cooling Comforts, you get warmth that doesn’t break the bank.
          </p>
        </div>

        {/* Image on Right */}
        <div className="flex-1 order-1 md:order-2">
          <img
            src={image2}
            alt="Installation Image 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Container 3: Image on Left, Content on Right */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Image on Left */}
        <div className="flex-1">
          <img
            src={image3}
            alt="Installation Image 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content on Right */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
          Dependable Performance
          </h4>
          <p className="text-sm sm:text-base  font-semibold  lg:text-lg text-gray-700">
          We bring in leading technology and industry-tested solutions that ensure your heating system performs reliably, even during Ontario’s coldest months.
          </p>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-serif text-center">
      Cooling Systems Designed for Your Business
      </h2>

       {/* Container 2: Image on Right, Content on Left */}
       <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Content on Left */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
          Tailored Cooling Solutions
          </h4>
          <p className="text-sm sm:text-base  font-semibold  lg:text-lg text-gray-700">
          Every business space is different. Our team provides cooling systems customised to deliver ideal comfort, no matter the size or layout of your premises.
          </p>
        </div>

        {/* Image on Right */}
        <div className="flex-1 order-1 md:order-2">
          <img
            src={image2}
            alt="Installation Image 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Container 3: Image on Left, Content on Right */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Image on Left */}
        <div className="flex-1">
          <img
            src={image3}
            alt="Installation Image 3"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content on Right */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
          Modern, Eco-Friendly Technology
          </h4>
          <p className="text-sm sm:text-base  font-semibold  lg:text-lg text-gray-700">
          Our AC systems incorporate energy-efficient features that support your business’s sustainability goals, reducing both costs and environmental impact.
          </p>
        </div>
      </div>
     
{/* Container 2: Image on Right, Content on Left */}
<div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#f9f9f9] to-[#e0e0e0] rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-[#1dbbec] mx-4 sm:mx-8 lg:mx-16 mb-8">
        {/* Content on Left */}
        <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 md:order-1">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 font-serif">
          24/7 Customer Support
          </h4>
          <p className="text-sm sm:text-base  font-semibold  lg:text-lg text-gray-700">
          We’re always here when you need us. Our team offers round-the-clock support to help you with any questions or adjustments for optimal cooling performance.
          </p>
        </div>

        {/* Image on Right */}
        <div className="flex-1 order-1 md:order-2">
          <img
            src={image2}
            alt="Installation Image 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
    </div>
  )
}

export default HeatingFlexBox
