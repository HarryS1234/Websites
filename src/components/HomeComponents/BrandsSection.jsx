import React from "react";

// Import your brand logos (replace with actual paths)
import brand1 from "../../assets/Hvac brands/Brand1.png";
import brand2 from "../../assets/Hvac brands/Brand2.png";
import brand3 from "../../assets/Hvac brands/Brand3.png";
import brand4 from "../../assets/Hvac brands/Brand4.png";
import brand5 from "../../assets/Hvac brands/Brand5.png";
import brand6 from "../../assets/Hvac brands/Brand6.png";
import brand7 from "../../assets/Hvac brands/Brand7.png";
import brand8 from "../../assets/Hvac brands/Brand8.png";
import brand9 from "../../assets/Hvac brands/Brand9.png";
import brand10 from "../../assets/Hvac brands/Brand10.png";
import brand11 from "../../assets/Hvac brands/Brand11.png";
import brand12 from "../../assets/Hvac brands/Brand12.png";
import brand13 from "../../assets/Hvac brands/Brand13.png";
import brand14 from "../../assets/Hvac brands/Brand14.png";
import brand15 from "../../assets/Hvac brands/Brand15.png";

const BrandsSection = () => {
  // Array of all brand logos
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand11,
    brand12,
    brand13,
    brand14,
    brand15,
  ];

  return (
    <section className="py-12 bg-gray-100">
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Trusted Brands</h2>

        {/* Brand Logos Container */}
        <div className="overflow-hidden relative">
          {/* First Row (Left to Right Animation) */}
          <div className="flex space-x-8 animate-marquee whitespace-nowrap">
            {brands.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-16 md:h-20 object-contain"
              />
            ))}
          </div>

          {/* Second Row (Right to Left Animation) */}
          <div className="flex space-x-8 animate-marquee-reverse whitespace-nowrap mt-8">
            {[...brands].reverse().map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className="h-16 md:h-20 object-contain"
              />
            ))}
          </div>
        </div>

    
  
      </div>
    </section>
  );
};

export default BrandsSection;