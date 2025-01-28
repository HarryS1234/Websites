import React from "react";
import ServicesSection from "../components/HomeComponents/ServicesSection.jsx";
import videoFile from "../assets/video1.mp4";
import CountUpSection from "../components/HomeComponents/CountUpSection.jsx";
import BrandsSection from "../components/HomeComponents/BrandsSection.jsx";
import ContactSection from "../components/ReuseComponents/ContactSection.jsx";
import ReviewSection from "../components/ReuseComponents/ReviewsSection.jsx";
import MapSection from "../components/ReuseComponents/MapsSection.jsx";
import Footer from "../components/ReuseComponents/Footer.jsx";
import Header from "../components/ReuseComponents/Header.jsx";
import Navbar from "../components/ReuseComponents/Navbar.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      {/* Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute flex flex-col space-y-4 sm:space-y-8 top-8 sm:top-16 md:top-32 left-4 sm:left-8 md:left-16">
          {/* Serving Businesses Oval */}
          <div className="bg-[#1dbbec] opacity-90 w-[240px] sm:w-[280px] md:w-[400px] h-32 sm:h-32 md:h-48 rounded-[50%] flex items-center justify-center text-white font-bold p-4 text-center text-sm sm:text-lg md:text-2xl border-2 border-white">
            Serving Businesses
            <br />
            From Last 30 Years
          </div>
        </div>

        {/* Main Centered Oval (Slightly Left) */}
        <div className="absolute bg-[#1dbbec] border-2 border-white opacity-90 top-32 sm:top-48 md:top-64 left-4 sm:left-8 md:left-32 w-[280px] sm:w-[320px] md:w-[580px] h-48 sm:h-48 md:h-80 rounded-[50%] flex items-center justify-center">
          <p className="text-center font-semibold text-xs sm:text-sm md:text-base px-4 text-gray-50">
            <span className="font-bold text-lg sm:text-xl md:text-2xl">
              VeerJi Mechanical
            </span>
            <br />
            is an Authorized Service Centre for
            <br />
            <span className="font-bold text-lg sm:text-xl md:text-2xl">
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
      <BrandsSection />
      <ContactSection />
      <ReviewSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Home;
