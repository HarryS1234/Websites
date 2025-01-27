import React from "react";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import videoFile from "../assets/video1.mp4";
import CountUpSection from "../components/CountUpSection.jsx";
import Icon from "../pages/Icon"; // Adjust the path to your Icon component
import clock from "../assets/clock.png"; // Adjust the path to your clock image
import BrandsSection from "../components/BrandsSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import ReviewSection from "../components/ReviewsSection.jsx";
import MapSection from "../components/MapsSection.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div>
      <header className="bg-gray-100 text-white">
        {/* Top Section (Logo and Contact Info) */}
        <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Icon /> {/* Custom height */}
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <img className="w-12 h-12 md:w-16 md:h-16 mb-10" src={clock} alt="Clock Icon" />
            <div className="text-right text-black">
              <div className="text-lg md:text-xl font-bold">
                24 Hour Repair, Installation & Maintenance Service
              </div>
              <ul className="list-none">
                <li className="text-lg md:text-xl font-bold">Tel: 647-210-6862</li>
                <li className="text-lg md:text-xl font-bold">Tel: 647-607-2138</li>
                <li className="text-lg md:text-xl font-bold">Tel: 905-792-3555</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <Navbar />

      {/* Video Section */}
      <section className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover"
        >
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Left Side Ovals */}
        <div className="absolute flex flex-col space-y-8 top-16 md:top-32 left-4 md:left-16">
          {/* Serving Businesses Oval */}
          <div className="bg-[#1dbbec] opacity-90 w-[280px] md:w-[400px] h-32 md:h-48 rounded-[50%] flex items-center justify-center text-white font-bold p-4 text-center text-lg md:text-2xl border-2 border-white">
            Serving Businesses
            <br />
            From Last 30 Years
          </div>
        </div>

        {/* Main Centered Oval (Slightly Left) */}
        <div className="absolute bg-[#1dbbec] border-2 border-white opacity-90 top-48 md:top-64 left-8 md:left-32 w-[320px] md:w-[580px] h-48 md:h-80 rounded-[50%] flex items-center justify-center">
          <p className="text-center font-semibold text-sm md:text-base px-4 text-gray-50">
            <span className="font-bold text-xl md:text-2xl">VeerJi Mechanical</span>
            <br />
            is an Authorized Service Centre for
            <br />
            <span className="font-bold text-xl md:text-2xl">
              Commercial Refrigeration,
            </span>
            <br />
            Air Conditioning, and Heating in Ontario.
            <br />
            We serve Brampton, Mississauga, and the GTA,
            <br />
            providing installation, maintenance,
            <br />
            and troubleshooting services for businesses.
          </p>
        </div>
      </section>

      <ServicesSection />
      <CountUpSection />
      <BrandsSection/>
      <ContactSection/>
      <ReviewSection/>
      <MapSection/>
      <Footer/>
    </div>
  );
};

export default Home;
