import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const [centerIndex, setCenterIndex] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://bullwork-backend.onrender.com/products");
        const data = await res.json();
        setProducts(data);
        setCenterIndex(2);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    }
    fetchProducts();
  }, []);

  const prevSlide = () => {
    setCenterIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const nextSlide = () => {
    setCenterIndex((prev) => (prev + 1) % products.length);
  };

  const getIndex = (offset) => (centerIndex + offset + products.length) % products.length;

  const handleOrderNow = (product) => {
    navigate("/orders", { state: { productName: product.name } });
  };

  if (!products.length) return <p className="text-center py-14">Loading products...</p>;

  const productBoxStyle =
    "border border-gray-300 rounded-lg overflow-hidden flex flex-col";

  return (
    <div className="w-full py-10 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="w-full flex flex-wrap items-center justify-center gap-6 md:gap-8">

        {/* Left product */}
        <div className={`w-full sm:w-2/5 md:w-1/5 transition duration-300 h-auto ${productBoxStyle}`}>
          <Link to={`/products/${products[getIndex(-1)].id}`}>
            <img
              src={products[getIndex(-1)].imageUrl}
              alt={products[getIndex(-1)].name}
              className="w-full h-40 sm:h-44 md:h-52 object-cover"
            />
          </Link>
          <div className="p-3 flex flex-col items-center">
            <h3 className="font-semibold text-center text-sm sm:text-base">{products[getIndex(-1)].name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 text-center line-clamp-2">
              {products[getIndex(-1)].description || "No description"}
            </p>
            <button
              onClick={() => handleOrderNow(products[getIndex(-1)])}
              className="mt-2 px-3 py-1 text-sm sm:px-4 sm:py-1.5 bg-[#880294] text-white rounded hover:bg-[#a01db1] transition"
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="bg-gray-300 text-black text-lg sm:text-xl font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow hover:bg-gray-400 transition"
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        {/* Center product */}
        <div className={`w-full sm:w-4/5 md:w-1/3 transition duration-300 h-[400px] sm:h-[450px] md:h-[500px] ${productBoxStyle}`}>
          <Link to={`/products/${products[getIndex(0)].id}`}>
            <img
              src={products[getIndex(0)].imageUrl}
              alt={products[getIndex(0)].name}
              className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover"
            />
          </Link>
          <div className="p-4 flex flex-col items-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center">{products[getIndex(0)].name}</h2>
            <p className="text-gray-700 text-center mt-2 text-sm sm:text-base md:text-lg line-clamp-3">
              {products[getIndex(0)].description || "No description available."}
            </p>
            <button
              onClick={() => handleOrderNow(products[getIndex(0)])}
              className="mt-4 px-5 py-2 text-sm sm:text-base bg-[#880294] text-white rounded-lg hover:bg-[#a01db1] transition"
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="bg-gray-300 text-black text-lg sm:text-xl font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow hover:bg-gray-400 transition"
          aria-label="Next Slide"
        >
          &gt;
        </button>

        {/* Right product */}
        <div className={`w-full sm:w-2/5 md:w-1/5 transition duration-300 h-auto ${productBoxStyle}`}>
          <Link to={`/products/${products[getIndex(1)].id}`}>
            <img
              src={products[getIndex(1)].imageUrl}
              alt={products[getIndex(1)].name}
              className="w-full h-40 sm:h-44 md:h-52 object-cover"
            />
          </Link>
          <div className="p-3 flex flex-col items-center">
            <h3 className="font-semibold text-center text-sm sm:text-base">{products[getIndex(1)].name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 text-center line-clamp-2">
              {products[getIndex(1)].description || "No description"}
            </p>
            <button
              onClick={() => handleOrderNow(products[getIndex(1)])}
              className="mt-2 px-3 py-1 text-sm sm:px-4 sm:py-1.5 bg-[#880294] text-white rounded hover:bg-[#a01db1] transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-2">
        {products.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === centerIndex ? "bg-[#880294]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
