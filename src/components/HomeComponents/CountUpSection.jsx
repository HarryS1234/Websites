import React, { useState, useEffect } from "react";

const CountUpSection = () => {
  // State for each number
  const [coolerProjects, setCoolerProjects] = useState(0);
  const [freezerProjects, setFreezerProjects] = useState(0);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);

  // Final values from the image
  const finalCoolerProjects = 15500;
  const finalFreezerProjects = 8000;
  const finalCustomerSatisfaction = 100;

  // Counting function
  useEffect(() => {
    const interval = 50; // Speed of counting (lower = faster)
    const increment = 100; // Increment value for cooler and freezer projects

    const coolerInterval = setInterval(() => {
      setCoolerProjects((prev) => {
        if (prev >= finalCoolerProjects) {
          clearInterval(coolerInterval);
          return finalCoolerProjects;
        }
        return prev + increment;
      });
    }, interval);

    const freezerInterval = setInterval(() => {
      setFreezerProjects((prev) => {
        if (prev >= finalFreezerProjects) {
          clearInterval(freezerInterval);
          return finalFreezerProjects;
        }
        return prev + increment;
      });
    }, interval);

    const satisfactionInterval = setInterval(() => {
      setCustomerSatisfaction((prev) => {
        if (prev >= finalCustomerSatisfaction) {
          clearInterval(satisfactionInterval);
          return finalCustomerSatisfaction;
        }
        return prev + 1;
      });
    }, interval);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(coolerInterval);
      clearInterval(freezerInterval);
      clearInterval(satisfactionInterval);
    };
  }, [finalCoolerProjects, finalFreezerProjects, finalCustomerSatisfaction]);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Quality Service Helps Us Grow</h2>
        <p className="text-gray-600 mb-12 text-lg md:text-xl font-semibold">
          We provide expert walk-in cooler, freezer, heating, and air conditioning services tailored
          for businesses. Our certified technicians ensure seamless installation, maintenance,
          and repairs, keeping your systems running smoothly. Trust us for reliable, top-quality
          services.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cooler Projects */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#1dbbec] group">
            <h3 className="text-4xl font-bold text-[#1dbbec]">
              {coolerProjects.toLocaleString()}+
            </h3>
            <p className="text-gray-600 mt-2 text-xl md:text-2xl font-bold">Coolers Projects</p>
            <p className="text-gray-500 mt-4 font-semibold">
              We serviced a wide variety of commercial coolers, ensuring they all operate at peak
              performance.
            </p>
          </div>

          {/* Freezer Projects */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#1dbbec] group">
            <h3 className="text-4xl font-bold text-[#1dbbec]">
              {freezerProjects.toLocaleString()}+
            </h3>
            <p className="text-gray-600 mt-2 text-xl md:text-2xl font-bold">Freezer Projects</p>
            <p className="text-gray-500 mt-4 font-semibold">
              We serviced a wide variety of commercial freezers, ensuring they all operated at their
              best to keep your products safe.
            </p>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#1dbbec] group">
            <h3 className="text-4xl font-bold text-[#1dbbec]">{customerSatisfaction}%</h3>
            <p className="text-gray-600 mt-2 text-xl md:text-2xl font-bold">Customer Satisfaction</p>
            <p className="text-gray-500 mt-4 font-semibold">
              Exceeding our clients' expectations through the delivery of exceptional services.
            </p>
          </div>
        </div>
 {/* Bottom Text */}
 <p className="text-gray-600 mt-12 font-bold text-lg md:text-xl">
          Your trusted partner for reliable commercial refrigeration, heating, and AC solutions to
          keep your business running smoothly.
        </p>
        <p className="text-gray-600 mt-4 font-bold text-lg md:text-xl">
          We provide our clients with trusted, top-brand HVAC equipment for unmatched reliability.
        </p>
       
      </div>
    </section>
  );
};

export default CountUpSection;