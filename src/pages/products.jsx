import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://bullwork-backend.onrender.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col md:flex-row items-center"
          >
            {/* Image wrapped in Link to product detail */}
            <Link to={`/products/${product.id}`} className="w-full md:w-1/2 h-72 block">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </Link>

            {/* Info */}
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
              <div>
                <h1
                  className="text-2xl sm:text-5xl text-[#590561] mb-10"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  {product.name}
                </h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
              </div>

              {/* ORDER button */}
              <div className="mt-6">
                <Link to="/orders">
                  <button className="bg-gradient-to-r from-[#c504d6] via-[#880294] to-[#510059] text-white px-8 py-3 rounded-lg shadow-lg hover:brightness-110 transition duration-300 mb-6 text-sm font-normal tracking-widest">
                    ORDER NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
