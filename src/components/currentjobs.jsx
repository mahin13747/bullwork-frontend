import React from "react";
import { ArrowRight } from "lucide-react"; 

const jobs = [
  {
    title: "Electrical Engineer",
    experience: "1-3 years experience",
  },
  {
    title: "Finance and Accounting Intern",
    experience: "Fresher",
  },
  {
    title: "Electrical Intern",
    experience: "Fresher",
  },
  {
    title: "Graphic Design Intern",
    experience: "Fresher",
  },
];

export default function CurrentOpenPositions() {
  return (
    <section className="bg-white w-full py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl text-center mb-10 text-gray-800 tracking-wide">
        CURRENT OPEN POSITIONS
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl font-semibold text-gray-800">
                {job.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{job.experience}</p>
            </div>
            <button
              onClick={() =>
                (window.location.href = "mailto:jobs@bullworkmobility.com")
              }
              className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                         text-white px-5 py-2 rounded-md text-sm font-medium 
                         tracking-wider shadow-md hover:brightness-110 transition duration-300"
            >
              APPLY NOW
            </button>
          </div>
        ))}

        <div className="bg-gray-100 mt-12 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div>
            <p className="text-lg font-medium text-gray-800 mb-1 tracking-widest">
              Think you have what it takes to innovate with us?
            </p>
            <p className="text-sm text-gray-600">
              MAIL US AT{" "}
              <span className="text-[#880294] font-semibold">
                jobs@bullworkmobility.com
              </span>
            </p>
          </div>
          <button
            onClick={() =>
              (window.location.href = "mailto:jobs@bullworkmobility.com")
            }
            className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] 
                       text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition duration-300 flex items-center justify-center mx-auto sm:mx-0"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
