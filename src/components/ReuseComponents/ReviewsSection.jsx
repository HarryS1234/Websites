import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    name: "Sukhraj Dhab",
    time: "1 year ago",
    comment: "Veerji Cooling Comforts has been a lifesaver for my restaurant business. Our walk-in freezer stopped working during peak hours, and they responded immediately. Their technician arrived within an hour, diagnosed the issue, and fixed it on the spot. The service was fast, professional, and affordable. I highly recommend them to anyone in the food industry. They truly understand the urgency of refrigeration issues!",
    stars: 5,
  },
  {
    name: "Hargohind Singh",
    time: "10 months ago",
    comment: "I recently faced a major issue with my central refrigeration system, and after being advised by other providers to opt for a costly replacement, which would have taken four months, I turned to Veerji Cooling Comforts for a second opinion. Thankfully, they accurately diagnosed the problem and promptly repaired it within a week, saving me a substantial amount of money and time. Their professionalism and dedication to customer satisfaction were evident. Their technician arrived promptly, assessed the issue thoroughly, and troubleshooted the problem. I am extremely satisfied with the service provided by Veerji Cooling Comforts. I wholeheartedly recommend Veerji Cooling Comforts to anyone in need of reliable and trustworthy refrigeration services.",
    stars: 4,
  },
  {
    name: "Bukan Jatt",
    time: "1 year ago",
    comment: "I’ve been using Veerji Cooling Comforts for all my refrigeration needs for the past two years, and they’ve never disappointed. Whether it’s routine maintenance or emergency repairs, their team is always reliable, transparent, and professional. They explain the issues clearly and provide cost-effective solutions. Their service is top-notch, and I trust them completely. Highly recommended!",
    stars: 5,
  },
  {
    name: "Anjali Chani",
    time: "1 year ago",
    comment: "Veerji Cooling Comforts is absolutely the best in the business. When our office AC stopped working during a heatwave, their team came to the rescue within hours. They not only fixed the issue but also gave us tips to maintain the system better. Their service is efficient, and their staff is courteous and knowledgeable. I’m extremely happy with their work and will definitely call them again for any cooling needs.",
    stars: 4,
  },
  {
    name: "Karamvir Singh",
    time: "1 year ago",
    comment: "Veerji Cooling Comforts is a professional and dependable team. They installed a new cooling system in my warehouse, and the process was seamless from start to finish. They provided a detailed quote, completed the installation on time, and even followed up to ensure everything was working perfectly. Their attention to detail and commitment to customer satisfaction is unmatched. I highly recommend them for any cooling or refrigeration needs.",
    stars: 5,
  },
];

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setExpanded(false); // Collapse when switching reviews
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setExpanded(false); // Collapse when switching reviews
  };

  const handleAddReview = () => {
    window.open(
      "https://www.google.com/search?q=veerji+cooling&rlz=1C5CHFA_enIN965IN965&oq=veerji+coling&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIPCAEQLhgNGK8BGMcBGIAEMgkIAhAAGA0YgAQyCAgDEAAYDRgeMgoIBBAAGKIEGIkFMgoIBRAAGIAEGKIEMgoIBhAAGIAEGKIEMgoIBxAAGIAEGKIE0gEIMjE5M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x882b3d583562689b:0xbacafb9ed8270183,3,,,,",
      "_blank"
    );
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-grey-100">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        What our customers say
      </h2>
      <div className="relative max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-2xl text-center border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              {reviews[currentReview].name}
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              {reviews[currentReview].time}
            </p>
            <div className="flex justify-center items-center mt-4">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl ${
                    index < reviews[currentReview].stars
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p
              className={`mt-4 text-gray-700 text-lg ${
                expanded ? "" : "line-clamp-4"
              }`}
            >
              {reviews[currentReview].comment}
            </p>
            {!expanded && (
              <button
                onClick={toggleExpand}
                className="text-blue-500 hover:text-blue-700 mt-2"
              >
                Read More
              </button>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
        >
          &gt;
        </button>
      </div>

      {/* Add Review Button */}
      <div className="text-center mt-8">
        <button
          className="bg-[#1dbbec] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 mx-auto"
          onClick={handleAddReview}
        >
          <span>Add a Review</span>
          <span className="text-xl">⭐️⭐️⭐️⭐️+</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;