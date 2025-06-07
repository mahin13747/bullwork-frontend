import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function IntroductionBhai() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-semibold max-w-7xl mx-auto leading-relaxed uppercase tracking-widest text-center">
        Introducing Bhai
      </h1>
      <p className="text-black font-light text-sm sm:text-base text-center mb-6 max-w-3xl mx-auto">
        Bullwork's AI companion to make our vehicles smart and enhance productivity
      </p>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-0">
        {/* Video Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src="https://www.bullworkmobility.com/videos/home_gcs.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-md sm:max-w-lg md:max-w-full h-auto md:h-[630px] object-contain rounded-lg bg-transparent"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0">
          <h1
            className="font-extrabold bg-gradient-to-b from-[#45024b] to-[#9c03aa] bg-clip-text text-transparent leading-none"
            style={{
              fontSize: '8rem',
              letterSpacing: '-0.03em',
            }}
          >
            bh.ai
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium leading-relaxed uppercase tracking-widest mb-4">
            One App To Rule Them All
          </h2>
          <p className="text-black font-light text-base leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
            Vehicle data at your fingertips
            <br />
            Control your machine with the app in real time
            <br />
            Execute your autonomous missions and track your vehicle's progress
          </p>
          <button
            onClick={() => navigate('/Technology')}
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                       text-white px-8 py-3 rounded-lg
                       shadow-lg hover:brightness-110 transition duration-300 text-sm font-normal tracking-widest"
          >
            EXPLORE
          </button>
        </div>
      </div>
    </section>
  );
}
