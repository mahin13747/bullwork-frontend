import React from 'react';
import {Link} from "react-router-dom";
export default function Jointhebullwork() {
  return (
    <div>
         <section className="bg-gray-200 text-center p-10 mt-10">
        <h1 className="text-black text-2xl font-semibold tracking-widest mb-6">JOIN THE BULLWORK FAMILY</h1>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/orders">
            <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-8 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 text-sm font-normal tracking-widest">
              ORDER
            </button>
          </Link>
          <Link to="/demo">
            <button className="border border-black text-black px-8 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 text-sm font-normal tracking-widest">
              Book Demo
            </button>
          </Link>
        </div>
      </section>

    </div>
  )
}
