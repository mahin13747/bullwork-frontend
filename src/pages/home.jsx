
import React from "react";
import { Link } from "react-router-dom";
import ProductCarousel from "../components/productslider";
import IntroductionBhai from "../components/introdcutionbhai";
import Blog from "./blog";
import LogoScroller from "../components/logoscroll1";
import LogoScroller2 from "../components/logoscroller2";
import FAQSection from "../components/askedqusetions";
import ContactPage from "../components/contact";
import Jointhebullwork from "../components/jointhebullwork";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen">
        <img
          src="https://www.bullworkmobility.com/index/homerender_main.png"
          alt="Home Banner"
          className="w-full h-full object-cover"
        />

<div className="absolute top-[87%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full px-6 text-center">
          <Link to="/orders">
            <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-8 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest">
              ORDER NOW
            </button>
          </Link>
          <p className="text-black text-xl sm:text-2xl lg:text-3xl font-normal max-w-6xl mx-auto leading-relaxed uppercase tracking-widest">
            We provide full stack electric autonomous solutions for a Cleaner, Greener Tomorrow.
          </p>
        </div>
      </div>

      {/* Product Intro */}
      <section className="mt-6 px-4 text-center">
        <p className="text-xs sm:text-sm font-semibold text-gray-700">
          Electric Tractors | Sprayers | Loaders | Bots
        </p>
        <button
          onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
          className="mx-auto mt-2 flex items-center justify-center rounded-full border border-gray-400 bg-gray-300 backdrop-blur-sm w-10 h-10 hover:bg-opacity-40 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mt-10 tracking-widest">PRODUCTS</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Agriculture | Construction | Material Handling | Mining
        </p>
      </section>

      <ProductCarousel />
      <section className="px-6 py-12 sm:px-10 bg-gray-100 rounded-lg shadow-inner">
  <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-center uppercase tracking-widest text-[#56035e] mb-2 ">
    Why Choose Bullwork Mobility
  </h3>
  <p className="text-black text-sm text-center font-light mb-8">
    Designed in Bharath, Made for the World
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
    {[
      {
        img: "https://www.bullworkmobility.com/why_BM/icon1.webp",
        title: "Lowest Operational Cost",
        desc: "Electric Tractors save up to 80% on diesel expenses with our innovative solution",
      },
      {
        img: "https://www.bullworkmobility.com/why_BM/icon2.webp",
        title: "Next-gen Technology",
        desc: "Autonomous and drive-by-wire system Smart, data driven and connected",
      },
      {
        img: "https://www.bullworkmobility.com/why_BM/icon3.webp",
        title: "Automation",
        desc: "Automating repetitive skilled tasks to enhance productivity",
      },
      {
        img: "https://www.bullworkmobility.com/why_BM/icon4.webp",
        title: "Save Environment",
        desc: "Reduces up to 10 tons of CO2 annually per machine",
      },
    ].map(({ img, title, desc }) => (
      <div
        key={title}
        className=" p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
      >
        <img src={img} alt={title} className="w-16 h-16 mb-4 object-contain" />
        <h2 className="text-[#56035e] text-base font-semibold mb-2 tracking-wider">{title}</h2>
        <p className="text-gray-700 text-sm">{desc}</p>
      </div>
    ))}
  </div>
</section>


      <IntroductionBhai />

      <section className="px-4 mt-10">
        <Blog limit={3} />
        <div className="text-center mt-6">
          <Link
            to="/blogs"
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-md hover:brightness-110 transition text-sm font-normal tracking-widest"
          >
            Explore More Blogs
          </Link>
        </div>
      </section>


      <section className="mt-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center uppercase tracking-widest">
          PRESS RELEASES
        </h1>
        <LogoScroller />
      </section>

      <section className="mt-16">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center uppercase tracking-widest">
          AWARDS AND CERTIFICATIONS
        </h1>
        <LogoScroller2 />
      </section>

      <section className="mt-10">
        <img
          src="https://www.bullworkmobility.com/images/greener_bharath.webp"
          alt="Greener Bharath"
          className="w-full h-auto object-cover"
        />
      </section>

        <section className="px-4 mt-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center uppercase tracking-widest">
          SHOWCASING THE INNOVATION
        </h1>
        <p className="text-center text-sm font-light mb-3 text-black">
          Bullwork's Electric Vehicles at Major Events
        </p>
        <div className="flex justify-center">
          <img
            src="https://www.bullworkmobility.com/images/events.webp"
            alt="Events"
            className="max-w-6xl w-full h-auto rounded-md"
          />
        </div>
      </section>

      
      <section className="px-4 mt-10">
        <FAQSection limit={5} />
        <div className="text-center mt-4">
          <Link to="/askedquestions">
            <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-md hover:brightness-110 transition text-sm font-normal tracking-widest">
              View More
            </button>
          </Link>
        </div>
      </section>

      {/* Join */}
      <Jointhebullwork />

      {/* Contact */}
      <section >
        <ContactPage />
      </section>
    </>
  );
}
