import React from 'react';
import ContactPage from '../components/contact';
import Jointhebullwork from '../components/jointhebullwork';

export default function Aboutus() {
  return (
    <>
     
      <section className="w-screen h-[80vh] sm:h-screen">
        <img
          src="https://www.bullworkmobility.com/aboutus/teampic.webp"
          alt="Team"
          className="w-full h-full object-cover"
        />
      </section>

    
      <section className="px-4">
        <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl text-center font-semibold tracking-wide mt-8 mb-8">
          We want to change the world,<br />
          we think we are crazy enough to do it
        </h1>
      </section>

      
      <section className="bg-gray-100 max-w-7xl mx-auto py-10 px-4 sm:px-8">
        <h1 className="text-center uppercase font-semibold text-2xl sm:text-3xl mb-8">Our Guiding Partner</h1>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://www.bullworkmobility.com/aboutus/mahesh%20shetty.webp"
              alt="Mahesh Shetty"
              className="rounded-lg w-2/3 sm:w-2/4 object-cover max-h-[400px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 uppercase">Mr. Mahesh Shetty</h2>
            <p className="text-gray-700 leading-relaxed">
              Joining in our journey to change the landscape of utility vehicles: Multiplex Group has been our guiding partner with Mr. Mahesh Shetty donning the role of Chairman to take the organization to its next level.
            </p>
          </div>
        </div>
      </section>

      
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-center text-2xl sm:text-3xl uppercase font-semibold mb-10">Our Co-Founders</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {[
            {
              name: "Hemanth Kumar",
              role: "CEO",
              image: "https://www.bullworkmobility.com/aboutus/hemanth.webp",
              linkedin: "https://www.linkedin.com/in/hemanthkumar",
            },
            {
              name: "Dr. Sriharsha Sheshanarayana",
              role: "CTO",
              image: "https://www.bullworkmobility.com/aboutus/harsha.webp",
              linkedin: "https://www.linkedin.com/in/harsha",
            },
            {
              name: "Vinay Raghuram",
              role: "COO",
              image: "https://www.bullworkmobility.com/aboutus/vinay.webp",
              linkedin: "https://www.linkedin.com/in/vinayraghuram",
            },
          ].map((founder, index) => (
            <div key={index} className="text-center">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg shadow-md mx-auto"
              />
              <h2 className="mt-4 text-lg font-semibold">{founder.name}</h2>
              <p className="text-gray-600">{founder.role}</p>
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="LinkedIn"
                  className="w-6 h-6 inline-block mt-2"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* R&D Facility */}
      <section className="bg-gray-50 px-4 py-12 text-center">
  <h1 className="text-2xl sm:text-3xl uppercase font-semibold mb-4">Our R&D Facility</h1>
  <p className="max-w-2xl mx-auto text-gray-700 tracking-wide mb-10">
    Driving the forefront of technological advancement, our R&D facility is located in Nelamangala, Bangalore where ideas are transformed into reality.
  </p>

  <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 max-w-6xl mx-auto">
    <div className="w-full md:max-w-[20%]">
      <img
        src="https://www.bullworkmobility.com/facility/facility3.webp"
        alt="Facility 3"
        className="w-full h-[350px] sm:h-[490px] object-cover rounded-lg shadow-md"
      />
    </div>
    <div className="w-full md:max-w-[50%] flex flex-col gap-6">
      <img
        src="https://www.bullworkmobility.com/facility/facility1.webp"
        alt="Facility 1"
        className="w-full h-[180px] sm:h-[230px] object-cover rounded-lg shadow-md"
      />
      <img
        src="https://www.bullworkmobility.com/facility/facility2.webp"
        alt="Facility 2"
        className="w-full h-[180px] sm:h-[230px] object-cover rounded-lg shadow-md"
      />
    </div>
  </div>
</section>


      {/* Join Bullwork Section */}
    <Jointhebullwork/>

      {/* Contact Page */}
      <section>
        <ContactPage />
      </section>
    </>
  );
}
