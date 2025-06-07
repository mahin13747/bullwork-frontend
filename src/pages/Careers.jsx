import React from 'react';
import BullworkGallery from '../components/bw_gallary';
import CurrentOpenPositions from '../components/currentjobs';
import ContactPage from '../components/contact';
import Jointhebullwork from '../components/jointhebullwork';

export default function Careers() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden mt-16 px-4">

      <section>
        <h1 className="text-2xl sm:text-3xl font-bold text-center mt-10 mb-10 uppercase">
          Life @ Bullwork Mobility
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <img
            src="https://www.bullworkmobility.com/careers/life/life1.webp"
            alt="Life 1"
            className="sm:col-span-2 w-full h-64 sm:h-72 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://www.bullworkmobility.com/careers/life/life2.webp"
            alt="Life 2"
            className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://www.bullworkmobility.com/careers/life/life3.webp"
            alt="Life 3"
            className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <img
            src="https://www.bullworkmobility.com/careers/life/life4.webp"
            alt="Life 4"
            className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://www.bullworkmobility.com/careers/life/life5.webp"
            alt="Life 5"
            className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://www.bullworkmobility.com/careers/life/life6.webp"
            alt="Life 6"
            className="sm:col-span-2 w-full h-64 sm:h-72 object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="mt-14 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold uppercase tracking-widest mb-5">
          Join Our Awesome Team
        </h1>
        <p className="mb-5 font-medium text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
          At Bullwork Mobility, we are on the lookout for individuals who are driven and
          dedicated to making a difference and contribute to the acceleration of
          innovative solutions in sustainable agriculture and construction.
        </p>
        <button
          onClick={() => window.location.href = 'mailto:jobs@bullworkmobility.com'}
          className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                     text-white px-6 py-2 rounded-lg shadow-lg 
                     hover:brightness-110 transition duration-300 
                     text-sm sm:text-base font-medium tracking-widest"
        >
          APPLY NOW
        </button>
      </section>

     
      <BullworkGallery />

     
      <CurrentOpenPositions />

      
      <section className="max-w-4xl mx-auto mt-16 bg-gray-100 p-6 sm:p-8 rounded-lg shadow-md text-center">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
          Think you have what it takes to innovate with us?
        </h2>
        <p className="text-sm text-gray-600 mb-4">MAIL US AT</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <span className="text-md font-medium text-gray-800">
            jobs@bullworkmobility.com
          </span>
          <button
            onClick={() => window.location.href = 'mailto:jobs@bullworkmobility.com'}
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                       text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
            aria-label="Email us"
          >
            &gt;
          </button>
        </div>
      </section>

      <Jointhebullwork/>


      
      <ContactPage />
    </div>
  );
}
