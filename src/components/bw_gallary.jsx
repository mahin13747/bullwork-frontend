import React from "react";

const images = [
  "https://www.bullworkmobility.com/careers/gallery2.webp",
  "https://www.bullworkmobility.com/careers/gallery3.webp",
  "https://www.bullworkmobility.com/careers/gallery4.webp",
  "https://www.bullworkmobility.com/careers/gallery1.webp",
  "https://www.bullworkmobility.com/careers/gallery5.webp",
];

export default function BullworkGallery() {
  const allImages = [...images, ...images, ...images];

  return (
    <div className="bg-gray-100 w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center tracking-wide pt-10">
        BULLWORK GALLERY
      </h2>
      <p className="text-sm sm:text-base text-black text-center px-4">
        A sneak peek into life at Bullwork Mobility
      </p>

      <div className="overflow-hidden w-full py-10">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-scroll gap-6 sm:gap-10 md:gap-20 lg:gap-40">
            {allImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-32 sm:w-40 md:w-52 h-48 sm:h-60 md:h-72 object-cover rounded-lg shadow-md flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.33%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
