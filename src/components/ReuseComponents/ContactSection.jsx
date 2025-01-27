import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons

const ContactSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Got Questions?</h2>
          <p className="text-gray-600 mb-8">We are here to help.</p>

          {/* Contact Cards */}
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* 24/7 Customer Service Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#1dbbec] group flex-1 max-w-md">
              <div className="flex justify-center mb-4">
                <FaPhone className="text-[#1dbbec] text-4xl" aria-hidden="true" /> {/* Phone Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Customer Service</h3>
              <p className="text-gray-600 mb-4">
                Call us anytime for assistance.
              </p>
              <a
                href="tel:647-210-6862"
                className="text-[#1dbbec] font-semibold hover:underline"
                aria-label="Call us at 647-210-6862"
              >
                647-210-6862
              </a>
            </div>

            {/* Send a Message Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#1dbbec] group flex-1 max-w-md">
              <div className="flex justify-center mb-4">
                <FaEnvelope className="text-[#1dbbec] text-4xl" aria-hidden="true" /> {/* Email Icon */}
              </div>
              <h3 className="text-xl font-bold mb-2">Send a Message</h3>
              <p className="text-gray-600 mb-4">Reach out to us via email.</p>
              <a
                href="mailto:veerjicooling@gmail.com"
                className="text-[#1dbbec] font-semibold hover:underline"
                aria-label="Email us at veerjicooling@gmail.com"
              >
                veerjicooling@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;