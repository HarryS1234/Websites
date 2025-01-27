import React from 'react'
import Navbar from '../components/ReuseComponents/Navbar'
import Header from '../components/ReuseComponents/Header'

const About = () => {
  return (
    <div>
        <Header/>
      <Navbar/>
  
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About Us
        </h2>
        <div className="mt-6 text-gray-600 space-y-6">
          <p>
            At VeerJi Cooling, we specialize in Commercial Refrigeration, Walk-In Cooler and Freezer Installation, Maintenance, Heating, and AC Services across Toronto and the GTA. With over 30 years of experience, we tackle challenges others can't, including the installation and programming of digital controllers for walk-in fridges.
          </p>
          <p>
            Our skilled team is dedicated to providing fast, efficient, and reliable service to keep your equipment running optimally. Whether you need repairs or a new system setup, trust VeerJi Cooling for quality and expertise you can rely on.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>

    </div>
  )
}

export default About
