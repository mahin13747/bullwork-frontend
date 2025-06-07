import React, { useState } from "react";

export default function ImageToggleSlider2() {
  const [showFirstImage, setShowFirstImage] = useState(true);

  const handlePrev = () => {
    setShowFirstImage(true);
  };

  const handleNext = () => {
    setShowFirstImage(false);
  };

  return (
    <div className="bg-gray-200 min-h-screen px-4 py-8">
      <h1 className="text-black text-center text-2xl sm:text-3xl font-normal tracking-wide rounded-lg mb-2">
        Real-Time Analytics and Live Streaming
      </h1>
      <p className="text-black font-medium text-center mb-6 max-w-xl mx-auto px-2 sm:px-0">
        Stay informed with real-time updates on your vehicle's performance and live camera feeds, all accessible through a user-friendly interface
      </p>

      <div className="flex flex-col items-center justify-center gap-6 max-w-3xl mx-auto select-none">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="text-3xl sm:text-4xl font-bold p-3 sm:p-4 rounded-full hover:bg-gray-300 transition"
            aria-label="Previous"
          >
            &#8592;
          </button>

          {/* Image */}
          <img
            src={
              showFirstImage
                ? "https://www.bullworkmobility.com/technology/2slide1.webp"
                : "https://www.bullworkmobility.com/technology/2slide2.webp"
            }
            alt="Slider"
            className="max-h-[400px] sm:max-h-[600px] max-w-full object-contain rounded-md shadow-md"
          />

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="text-3xl sm:text-4xl font-bold p-3 sm:p-4 rounded-full hover:bg-gray-300 transition"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>

        {/* Truncated Text */}
        <p
          className="text-center max-w-xl text-gray-700 px-4 sm:px-0"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Bullwork's electric vehicles are equipped with a smart app that
          provides detailed insights into its live location, current speed,
          remaining battery charge and real-time performance metrics.
        </p>
      </div>
    </div>
  );
}
